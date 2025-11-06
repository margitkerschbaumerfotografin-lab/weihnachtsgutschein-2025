declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export const trackMetaEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

export const trackViewContent = (contentName: string, value: number, currency = 'EUR') => {
  trackMetaEvent('ViewContent', {
    content_name: contentName,
    content_type: 'product',
    value: value,
    currency: currency,
  });
};

export const trackInitiateCheckout = (value: number, currency = 'EUR') => {
  trackMetaEvent('InitiateCheckout', {
    value: value,
    currency: currency,
    content_type: 'product',
  });
};

export const trackPurchase = (value: number, currency = 'EUR', transactionId?: string) => {
  trackMetaEvent('Purchase', {
    value: value,
    currency: currency,
    transaction_id: transactionId,
    content_type: 'product',
  });
};

export const trackLead = () => {
  trackMetaEvent('Lead');
};
