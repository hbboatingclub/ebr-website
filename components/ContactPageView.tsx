import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import { SERVICE_AREAS } from '@/lib/serviceAreas';
import {
  SITE_EMAIL,
  SITE_EMAIL_MAILTO,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_SMS,
  SITE_PHONE_TEL,
} from '@/lib/siteContact';
import { ebrImage } from '@/lib/mediaPaths';

const formTips = [
  'Boat make, model, and year',
  'Where the boat is located',
  'What the boat is doing (or not doing)',
  'How long the issue has been happening',
  'Any photos you can share',
];

export default function ContactPageView() {
  return (
    <main className="hub-premium hub-premium--contact">
      <section className="hub-premium-hero hub-premium-hero--compact">
        <div className="hub-premium-hero__image">
          <Image
            src={ebrImage('harbor care', 'premium-harbor-care-program-hero.jpg')}
            alt="EBR harbor care and dockside consultation"
            fill
            priority
            className="hub-premium-hero__photo object-cover"
            style={{ objectPosition: 'center 38%' }}
            sizes="100vw"
          />
        </div>
        <div className="hub-premium-hero__scrim" aria-hidden />
        <div className="hub-premium-hero__scrim-left" aria-hidden />
        <div className="hub-premium-hero__vignette" aria-hidden />
        <div className="container-site hub-premium-hero__content">
          <span className="label-hero hub-premium-hero__eyebrow block">Concierge Service</span>
          <h1 className="hub-premium-hero__title">Request Service</h1>
          <p className="hub-premium-hero__lead">
            Tell us about your boat and what it needs. A specialist will respond within 24 hours with clear next steps.
          </p>
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--light hub-premium-contact">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="hub-premium-contact__grid">
            <div className="hub-premium-form-panel">
              <span className="label-hero block mb-5 text-navy/80">Service Request</span>
              <h2 className="hub-premium-heading text-[1.5rem] md:text-[1.75rem] mb-2">Start Your Consultation</h2>
              <p className="hub-premium-lead mb-8 max-w-lg">
                Share symptoms, marina location, and photos if available — we will route you to the right repair,
                upgrade, or maintenance plan.
              </p>
              <ServiceRequestForm luxury />
            </div>

            <aside className="hub-premium-contact__aside space-y-5">
              <div className="hub-premium-sidebar-card hub-premium-sidebar-card--dark">
                <p className="label-hero block mb-5 text-teal/90">Direct Contact</p>
                <div className="space-y-5">
                  <div>
                    <p className="hub-premium-sidebar-card__label">Phone / Text</p>
                    <a href={SITE_PHONE_TEL} className="hub-premium-sidebar-card__value hover:text-teal transition-colors">
                      {SITE_PHONE_DISPLAY}
                    </a>
                  </div>
                  <div>
                    <p className="hub-premium-sidebar-card__label">Email</p>
                    <a
                      href={SITE_EMAIL_MAILTO}
                      className="hub-premium-sidebar-card__value hub-premium-sidebar-card__value--sm hover:text-teal transition-colors"
                    >
                      {SITE_EMAIL}
                    </a>
                  </div>
                  <div>
                    <p className="hub-premium-sidebar-card__label">Response Time</p>
                    <p className="hub-premium-sidebar-card__meta">Within 24 hours</p>
                  </div>
                </div>
                <div className="mt-7 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <a href={SITE_PHONE_TEL} className="btn-primary w-full justify-center">
                    Call Now
                  </a>
                  <a href={SITE_PHONE_SMS} className="btn-ghost-premium w-full justify-center">
                    Text Us
                  </a>
                </div>
              </div>

              <div className="hub-premium-sidebar-card">
                <p className="label-hero block mb-4 text-navy/80">Service Areas</p>
                <ul className="hub-premium-sidebar-list">
                  {SERVICE_AREAS.map((area) => (
                    <li key={area.slug}>{area.name}</li>
                  ))}
                </ul>
                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] mt-5 pt-5 border-t border-[rgba(8,43,91,0.08)]">
                  Mobile dockside service available
                </p>
              </div>

              <div className="hub-premium-sidebar-card">
                <p className="label-hero block mb-4 text-navy/80">What to Include</p>
                <ul className="hub-premium-sidebar-list hub-premium-sidebar-list--tips">
                  {formTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
