import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  buildCustomerConfirmationEmailHtml,
  buildCustomerConfirmationEmailText,
  buildServiceRequestEmailHtml,
  CUSTOMER_CONFIRMATION_REPLY_TO,
  CUSTOMER_CONFIRMATION_SUBJECT,
  getServiceRequestSubject,
  validateServiceRequest,
  type ServiceRequestPayload,
} from '@/lib/contactForm';

// Phase 2: add Twilio SMS notifications here after email delivery succeeds.

const DEFAULT_FROM = 'EBR | Electric Boat Repair <service@electricboatrepair.com>';

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as ServiceRequestPayload;

    const validationError = validateServiceRequest(data);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL?.trim();

    if (!apiKey || !toEmail) {
      console.error('Contact form misconfigured: RESEND_API_KEY and CONTACT_EMAIL are required');
      return NextResponse.json(
        { error: 'Form is temporarily unavailable. Please call us directly.' },
        { status: 500 }
      );
    }

    const serviceNeeded = data.serviceNeeded!.trim();
    const customerEmail = data.email?.trim();
    const bccEmail = process.env.CONTACT_BCC_EMAIL?.trim();
    const resend = new Resend(apiKey);

    const submittedAt = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM,
      to: toEmail,
      ...(bccEmail ? { bcc: [bccEmail] } : {}),
      subject: getServiceRequestSubject(serviceNeeded),
      html: buildServiceRequestEmailHtml(data, {
        submittedFrom: req.headers.get('referer') ?? undefined,
        userAgent: req.headers.get('user-agent') ?? undefined,
        submittedAt,
      }),
      ...(customerEmail ? { replyTo: customerEmail } : {}),
    });

    if (error) {
      console.error('Resend email error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    if (customerEmail) {
      const { error: confirmationError } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM,
        to: customerEmail,
        replyTo: CUSTOMER_CONFIRMATION_REPLY_TO,
        subject: CUSTOMER_CONFIRMATION_SUBJECT,
        html: buildCustomerConfirmationEmailHtml(data),
        text: buildCustomerConfirmationEmailText(data),
      });

      if (confirmationError) {
        console.error('Customer confirmation email error:', confirmationError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
