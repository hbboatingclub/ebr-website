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

export const CUSTOMER_CONFIRMATION_SUBJECT =
  'We Received Your Service Request — Electric Boat Repair';

export const CUSTOMER_CONFIRMATION_REPLY_TO = 'service@electricboatrepair.com';

const CUSTOMER_SITE_URL = 'https://electricboatrepair.com';
const CUSTOMER_SERVICES_URL = `${CUSTOMER_SITE_URL}/services`;
const CUSTOMER_PHONE_DISPLAY = '(949) 213-1500';
const CUSTOMER_PHONE_TEL = 'tel:+19492131500';

function customerDisplayValue(value: string | undefined, fallback = 'Not provided'): string {
  return value?.trim() ? escapeHtml(value.trim()) : fallback;
}

function customerPlainValue(value: string | undefined, fallback = 'Not provided'): string {
  return value?.trim() ? value.trim() : fallback;
}

export function buildCustomerConfirmationEmailHtml(data: ServiceRequestPayload): string {
  const greetingName = data.name?.trim() ? customerDisplayValue(data.name) : 'there';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(CUSTOMER_CONFIRMATION_SUBJECT)}</title>
</head>
<body style="margin:0;padding:0;background-color:#071523;font-family:Georgia,'Times New Roman',serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#071523;margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:28px 16px 36px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:100%;max-width:600px;margin:0 auto;">
          <tr>
            <td style="padding:0 0 18px;text-align:center;">
              <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.2;font-weight:400;letter-spacing:0.02em;color:#F7F4EC;">Electric Boat Repair</p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.5;letter-spacing:0.14em;text-transform:uppercase;color:#49C7C3;">Premium Duffy &amp; Electric Boat Service</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:14px auto 0;">
                <tr>
                  <td style="width:48px;height:2px;background-color:#49C7C3;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F7F4EC;border:1px solid rgba(73,199,195,0.18);border-radius:4px;padding:32px 28px 30px;">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.4;letter-spacing:0.12em;text-transform:uppercase;color:#B88A3B;">Request Received</p>
              <h1 style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.15;font-weight:400;color:#17345A;">Thank you, ${greetingName}</h1>
              <p style="margin:0 0 22px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:#566173;">
                Thank you for contacting Electric Boat Repair. We received your service request and our team will review the details shortly.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 24px;background-color:#FFFFFF;border:1px solid rgba(23,52,90,0.08);border-left:3px solid #49C7C3;border-radius:4px;">
                <tr>
                  <td style="padding:22px 20px;">
                    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#17345A;">
                      <span style="display:block;margin-bottom:4px;font-size:11px;line-height:1.4;letter-spacing:0.1em;text-transform:uppercase;color:#566173;">Service Requested</span>
                      <strong style="font-weight:600;color:#17345A;">${customerDisplayValue(data.serviceNeeded)}</strong>
                    </p>
                    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#17345A;">
                      <span style="display:block;margin-bottom:4px;font-size:11px;line-height:1.4;letter-spacing:0.1em;text-transform:uppercase;color:#566173;">Boat / Model</span>
                      ${customerDisplayValue(data.boatType)}
                    </p>
                    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#17345A;">
                      <span style="display:block;margin-bottom:4px;font-size:11px;line-height:1.4;letter-spacing:0.1em;text-transform:uppercase;color:#566173;">Boat Location</span>
                      ${customerDisplayValue(data.boatLocation)}
                    </p>
                    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#17345A;">
                      <span style="display:block;margin-bottom:4px;font-size:11px;line-height:1.4;letter-spacing:0.1em;text-transform:uppercase;color:#566173;">Preferred Contact</span>
                      ${customerDisplayValue(data.contactPreference)}
                    </p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#17345A;">
                      <span style="display:block;margin-bottom:6px;font-size:11px;line-height:1.4;letter-spacing:0.1em;text-transform:uppercase;color:#566173;">Message</span>
                      ${customerDisplayValue(data.description, 'No description provided.')}
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 26px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:#566173;">
                We typically respond within one business day. If your boat is not running, taking on water, stuck at the dock, or the request is urgent, please call or text us directly.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto 18px;">
                <tr>
                  <td align="center" style="border-radius:3px;background-color:#49C7C3;">
                    <a href="${CUSTOMER_PHONE_TEL}" style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;color:#081827;">Call / Text Now</a>
                  </td>
                </tr>
              </table>
              <p style="margin:0;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;">
                <a href="${CUSTOMER_SERVICES_URL}" style="color:#17345A;text-decoration:underline;">View Services</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 8px 0;text-align:center;">
              <p style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.3;color:#F7F4EC;">Electric Boat Repair</p>
              <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.65;color:#9AA8B8;">
                Duffy &amp; electric harbor boat service across Huntington Harbour, Newport Harbor, Long Beach, Dana Point, and surrounding Southern California marinas.
              </p>
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;">
                <a href="${CUSTOMER_PHONE_TEL}" style="color:#49C7C3;text-decoration:none;">${CUSTOMER_PHONE_DISPLAY}</a>
              </p>
              <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;">
                <a href="${CUSTOMER_SITE_URL}" style="color:#49C7C3;text-decoration:none;">${CUSTOMER_SITE_URL.replace('https://', '')}</a>
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.55;color:#6B7A8C;">
                You received this email because a service request was submitted at electricboatrepair.com.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function buildCustomerConfirmationEmailText(data: ServiceRequestPayload): string {
  const greetingName = data.name?.trim() ? data.name.trim() : 'there';

  return `
Hi ${greetingName},

Thank you for contacting Electric Boat Repair. We received your service request.

Service Requested: ${customerPlainValue(data.serviceNeeded)}
Boat / Model: ${customerPlainValue(data.boatType)}
Boat Location: ${customerPlainValue(data.boatLocation)}
Preferred Contact: ${customerPlainValue(data.contactPreference)}
Message: ${customerPlainValue(data.description, 'No description provided.')}

We typically respond within one business day. For urgent repairs, call or text ${CUSTOMER_PHONE_DISPLAY}.

Electric Boat Repair
${CUSTOMER_SITE_URL}
  `.trim();
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
