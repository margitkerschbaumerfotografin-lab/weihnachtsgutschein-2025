import { createClient } from '@supabase/supabase-js';
import { getStoredUTMParams } from './analytics';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};

export const trackEventToDatabase = async (
  eventType: string,
  eventData: Record<string, unknown> = {}
) => {
  try {
    const utmParams = getStoredUTMParams();
    const sessionId = getSessionId();

    const { error } = await supabase.from('analytics_events').insert({
      session_id: sessionId,
      event_type: eventType,
      event_data: eventData,
      utm_source: utmParams.utm_source || null,
      utm_medium: utmParams.utm_medium || null,
      utm_campaign: utmParams.utm_campaign || null,
      utm_term: utmParams.utm_term || null,
      utm_content: utmParams.utm_content || null,
      page_url: window.location.href,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    });

    if (error) {
      console.error('Database tracking error:', error);
    }
  } catch (error) {
    console.error('Failed to track event:', error);
  }
};

export const trackConversion = async (
  orderId: string,
  conversionValue: number
) => {
  try {
    const utmParams = getStoredUTMParams();
    const sessionId = getSessionId();

    const firstVisitTime = sessionStorage.getItem('first_visit_time');
    const timeToConversion = firstVisitTime
      ? `${Math.floor((Date.now() - parseInt(firstVisitTime)) / 1000)} seconds`
      : null;

    if (!firstVisitTime) {
      sessionStorage.setItem('first_visit_time', Date.now().toString());
    }

    const { data: touchpoints } = await supabase
      .from('analytics_events')
      .select('event_type, event_data, created_at')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });

    const { error } = await supabase.from('conversions').insert({
      order_id: orderId,
      session_id: sessionId,
      conversion_value: conversionValue,
      utm_source: utmParams.utm_source || null,
      utm_medium: utmParams.utm_medium || null,
      utm_campaign: utmParams.utm_campaign || null,
      utm_term: utmParams.utm_term || null,
      utm_content: utmParams.utm_content || null,
      time_to_conversion: timeToConversion,
      touchpoints: touchpoints || [],
    });

    if (error) {
      console.error('Conversion tracking error:', error);
    }
  } catch (error) {
    console.error('Failed to track conversion:', error);
  }
};
