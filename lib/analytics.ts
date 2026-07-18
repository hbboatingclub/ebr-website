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
 *
 * Reuses the existing gtag.js + dataLayer bootstrap in app/layout.tsx
 * (no GTM-XXXX container is installed).
 */
export function trackServiceRequestLead(): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'generate_lead',
    form_name: 'contact_form',
  });

  // Site analytics is gtag.js (not a GTM container); mirror so GA4 records the event.
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      send_to: GA_MEASUREMENT_ID,
      form_name: 'contact_form',
      lead_status: 'submitted',
      value: 1,
      currency: 'USD',
    });
  }
}
