declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, unknown>) => void;
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackMetaEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
    console.log('[Meta Pixel]', eventName, params);
  }
};

export const trackGA4Event = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
    console.log('[GA4]', eventName, params);
  }
};

export const trackViewContent = (contentName: string, value: number, currency = 'EUR') => {
  const params = {
    content_name: contentName,
    content_type: 'product',
    value: value,
    currency: currency,
  };

  trackMetaEvent('ViewContent', params);
  trackGA4Event('view_item', {
    items: [{
      item_id: 'voucher_390',
      item_name: contentName,
      price: value,
      currency: currency,
    }],
    value: value,
    currency: currency,
  });
};

export const trackInitiateCheckout = (value: number, currency = 'EUR') => {
  const params = {
    value: value,
    currency: currency,
    content_type: 'product',
  };

  trackMetaEvent('InitiateCheckout', params);
  trackGA4Event('begin_checkout', {
    value: value,
    currency: currency,
    items: [{
      item_id: 'voucher_390',
      item_name: 'Weihnachtsgutschein Portrait-Fotoshooting',
      price: value,
      quantity: 1,
    }],
  });
};

export const trackPurchase = (value: number, currency = 'EUR', transactionId?: string) => {
  const params = {
    value: value,
    currency: currency,
    transaction_id: transactionId,
    content_type: 'product',
  };

  trackMetaEvent('Purchase', params);
  trackGA4Event('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
    items: [{
      item_id: 'voucher_390',
      item_name: 'Weihnachtsgutschein Portrait-Fotoshooting',
      price: value,
      quantity: 1,
    }],
  });
};

export const trackLead = () => {
  trackMetaEvent('Lead');
  trackGA4Event('generate_lead', {
    value: 390,
    currency: 'EUR',
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackMetaEvent('CustomizeProduct', {
    button_name: buttonName,
    location: location,
  });
  trackGA4Event('click', {
    event_category: 'engagement',
    event_label: buttonName,
    location: location,
  });
};

export const trackScrollDepth = (depth: number) => {
  trackGA4Event('scroll', {
    percent_scrolled: depth,
  });
};

export const trackTimeOnPage = (seconds: number) => {
  trackGA4Event('user_engagement', {
    engagement_time_seconds: seconds,
  });
};

export const getUTMParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
  };
};

export const saveUTMParams = () => {
  const utmParams = getUTMParams();
  if (utmParams.utm_source) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
};

export const getStoredUTMParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};

  const stored = sessionStorage.getItem('utm_params');
  return stored ? JSON.parse(stored) : {};
};
