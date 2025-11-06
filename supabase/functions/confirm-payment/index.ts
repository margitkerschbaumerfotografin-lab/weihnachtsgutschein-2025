import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ConfirmPaymentRequest {
  clientSecret: string;
  cardData: {
    number: string;
    exp_month: number;
    exp_year: number;
    cvc: string;
  };
  billingDetails: {
    name: string;
    email: string;
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const body: ConfirmPaymentRequest = await req.json();

    if (!STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY not configured');
    }

    const paymentIntentId = body.clientSecret.split('_secret_')[0];

    const confirmResponse = await fetch(
      `https://api.stripe.com/v1/payment_intents/${paymentIntentId}/confirm`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'payment_method_data[type]': 'card',
          'payment_method_data[card][number]': body.cardData.number.replace(/\s/g, ''),
          'payment_method_data[card][exp_month]': body.cardData.exp_month.toString(),
          'payment_method_data[card][exp_year]': body.cardData.exp_year.toString(),
          'payment_method_data[card][cvc]': body.cardData.cvc,
          'payment_method_data[billing_details][name]': body.billingDetails.name,
          'payment_method_data[billing_details][email]': body.billingDetails.email,
        }),
      }
    );

    const result = await confirmResponse.json();

    if (result.error) {
      return new Response(
        JSON.stringify({ error: result.error.message }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (result.status === 'succeeded' || result.status === 'processing') {
      return new Response(
        JSON.stringify({ success: true, paymentIntentId: result.id }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Payment failed with status: ' + result.status }),
      {
        status: 400,
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
