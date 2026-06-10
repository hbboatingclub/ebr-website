type GtagCommand = 'config' | 'event' | 'js' | 'set';

declare global {
  interface Window {
    gtag?: (
      command: GtagCommand,
      targetId: string,
      config?: Record<string, string | number | boolean | undefined>,
    ) => void;
    dataLayer?: unknown[];
  }
}

/** GA4 recommended lead conversion for successful service request submissions. */
export function trackServiceRequestLead(): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'generate_lead', {
    form_name: 'service_request',
    value: 1,
  });
}
