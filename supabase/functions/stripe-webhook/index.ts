import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY');
const STRIPE_WEBHOOK_SECRET = Deno.env.get('STRIPE_WEBHOOK_SECRET');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const RECIPIENT_EMAIL = 'foto@margitkerschbaumer.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

function generateVoucherCode(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `GUT-${timestamp}-${random}`;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const signature = req.headers.get('stripe-signature');
    if (!signature || !STRIPE_WEBHOOK_SECRET) {
      return new Response(
        JSON.stringify({ error: 'Missing signature' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.text();
    let event;

    try {
      const encoder = new TextEncoder();
      const parts = signature.split(',');
      let timestamp = '';
      let receivedSignature = '';

      for (const part of parts) {
        const [key, value] = part.split('=');
        if (key === 't') timestamp = value;
        if (key === 'v1') receivedSignature = value;
      }

      const signedContent = `${timestamp}.${body}`;
      const key = await crypto.subtle.importKey(
        'raw',
        encoder.encode(STRIPE_WEBHOOK_SECRET),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );

      const computedSignature = await crypto.subtle.sign(
        'HMAC',
        key,
        encoder.encode(signedContent)
      );

      const computedHex = Array.from(new Uint8Array(computedSignature))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

      if (computedHex !== receivedSignature) {
        return new Response(
          JSON.stringify({ error: 'Invalid signature' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      event = JSON.parse(body);
    } catch (err) {
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      const metadata = paymentIntent.metadata;

      if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
        throw new Error('Supabase configuration missing');
      }

      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

      const { data: order } = await supabase
        .from('orders')
        .select('id')
        .eq('stripe_payment_intent_id', paymentIntent.id)
        .maybeSingle();

      if (!order) {
        throw new Error('Order not found');
      }

      const voucherCode = generateVoucherCode();
      const amount = paymentIntent.amount / 100;

      await supabase.from('vouchers').insert([
        {
          order_id: order.id,
          voucher_code: voucherCode,
          amount: paymentIntent.amount,
        },
      ]);

      await supabase
        .from('orders')
        .update({ status: 'succeeded' })
        .eq('id', order.id);

      if (RESEND_API_KEY) {
        try {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: 'noreply@gutschein-store.de',
              to: RECIPIENT_EMAIL,
              subject: `Neuer Gutschein: ${amount}€ von ${metadata?.senderName || 'Anonymer Sender'}`,
              html: `
                <h2>Neuer Gutschein erhalten!</h2>
                <p><strong>Vom Sender:</strong> ${metadata?.senderName || 'Anonymer Sender'}</p>
                <p><strong>E-Mail des Senders:</strong> ${metadata?.senderEmail || 'Nicht angegeben'}</p>
                <p><strong>Gutscheinwert:</strong> ${amount}€</p>
                <p><strong>Gutscheincode:</strong> <code>${voucherCode}</code></p>
                ${metadata?.message ? `<p><strong>Nachricht:</strong></p><p>${metadata.message}</p>` : ''}
                <p>Viel Spaß mit deinem Gutschein!</p>
              `,
            }),
          });
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
        }
      }
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
