import { GA_MEASUREMENT_ID } from '@/lib/gaConfig';

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

/**
 * GA4 lead conversion — call only after a successful service request API response.
 * Not tied to page views or /contact route visits.
 */
export function trackServiceRequestLead(): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'generate_lead', {
    send_to: GA_MEASUREMENT_ID,
    form_name: 'service_request',
    lead_status: 'submitted',
    value: 1,
    currency: 'USD',
  });
}
