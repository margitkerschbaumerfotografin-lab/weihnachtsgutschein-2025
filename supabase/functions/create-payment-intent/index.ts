import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface PaymentRequest {
  amount: number;
  senderName: string;
  senderEmail: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const body: PaymentRequest = await req.json();

    if (!body.amount || body.amount < 100) {
      return new Response(
        JSON.stringify({ error: 'Invalid amount' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (!STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY not configured');
    }

    const paymentIntentResponse = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        amount: body.amount.toString(),
        currency: 'eur',
        description: `Gutschein von ${body.senderName}`,
        metadata: JSON.stringify({
          senderName: body.senderName,
          senderEmail: body.senderEmail,
          message: body.message || '',
        }),
      }),
    });

    const paymentIntent = await paymentIntentResponse.json();

    if (paymentIntent.error) {
      throw new Error(paymentIntent.error.message);
    }

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const orderResponse = await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          email: body.senderEmail,
          amount: body.amount,
          stripe_payment_intent_id: paymentIntent.id,
          status: 'pending',
        }),
      });

      if (!orderResponse.ok) {
        console.error('Error saving order:', await orderResponse.text());
      }
    }

    return new Response(
      JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      }),
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
