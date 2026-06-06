export interface ServiceRequestPayload {
  name?: string;
  phone?: string;
  email?: string;
  boatType?: string;
  boatLocation?: string;
  serviceNeeded?: string;
  description?: string;
  contactPreference?: string;
  website?: string;
  url?: string;
  company?: string;
  honeypot?: string;
  _gotcha?: string;
}

export interface ServiceRequestEmailMeta {
  submittedFrom?: string;
  userAgent?: string;
  submittedAt: string;
}

const HONEYPOT_FIELDS = ['website', 'url', 'company', 'honeypot', '_gotcha'] as const;

function hasHoneypotValue(data: ServiceRequestPayload): boolean {
  return HONEYPOT_FIELDS.some((field) => {
    const value = data[field];
    return typeof value === 'string' && value.trim().length > 0;
  });
}

export function validateServiceRequest(data: ServiceRequestPayload): string | null {
  if (hasHoneypotValue(data)) {
    return 'Invalid submission';
  }

  const name = data.name?.trim();
  if (!name) {
    return 'Name is required';
  }

  const phone = data.phone?.trim();
  const email = data.email?.trim();
  if (!phone && !email) {
    return 'Phone or email is required';
  }

  const serviceNeeded = data.serviceNeeded?.trim();
  if (!serviceNeeded) {
    return 'Service needed is required';
  }

  return null;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function displayValue(value: string | undefined): string {
  return value?.trim() ? escapeHtml(value.trim()) : '—';
}

function fieldBlock(label: string, value: string | undefined): string {
  return `
    <p style="margin:0 0 14px;font-family:system-ui,-apple-system,sans-serif;font-size:16px;line-height:1.45;color:#111827;">
      <strong style="display:block;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#1e3a5f;margin-bottom:4px;">${escapeHtml(label)}</strong>
      ${displayValue(value)}
    </p>
  `.trim();
}

export function buildServiceRequestEmailHtml(
  data: ServiceRequestPayload,
  meta: ServiceRequestEmailMeta,
): string {
  const contactPreference = data.contactPreference?.trim() || '—';

  return `
    <div style="max-width:640px;font-family:system-ui,-apple-system,sans-serif;color:#111827;">
      <p style="margin:0 0 18px;font-size:18px;font-weight:700;color:#1e3a5f;">NEW EBR SERVICE REQUEST</p>
      ${fieldBlock('Name', data.name)}
      ${fieldBlock('Phone', data.phone)}
      ${fieldBlock('Email', data.email)}
      ${fieldBlock('Preferred Contact', contactPreference)}
      ${fieldBlock('Service Needed', data.serviceNeeded)}
      ${fieldBlock('Boat Type', data.boatType)}
      ${fieldBlock('Boat Location', data.boatLocation)}
      ${fieldBlock('Description', data.description)}
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:18px 0;" />
      ${fieldBlock('Submitted From', meta.submittedFrom)}
      ${fieldBlock('User Agent', meta.userAgent)}
      ${fieldBlock('Submitted At', meta.submittedAt)}
    </div>
  `.trim();
}

export function getServiceRequestSubject(serviceNeeded?: string): string {
  const service = serviceNeeded?.trim();
  if (service) {
    return `NEW EBR SERVICE REQUEST — ${service}`;
  }
  return 'NEW EBR SERVICE REQUEST';
}

/** Maps server validation errors to visitor-safe form messages. */
export function mapServiceRequestApiError(error: string): string | null {
  switch (error) {
    case 'Service needed is required':
      return 'Please select a service.';
    case 'Name is required':
      return 'Please enter your name.';
    case 'Phone or email is required':
      return 'Please enter a phone number or email address.';
    default:
      return null;
  }
}

export function isServiceRequestServerFailure(error: string): boolean {
  return (
    error.includes('temporarily unavailable') ||
    error.includes('Failed to submit') ||
    error === 'Invalid submission'
  );
}
