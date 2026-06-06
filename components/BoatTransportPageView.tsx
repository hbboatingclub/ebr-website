import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  transportFaqs,
  transportGallery,
  transportHero,
  transportHandling,
  transportPeaceOfMind,
  transportProcess,
  transportServices,
  transportWhyMatters,
} from '@/lib/boatTransportContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function TransportCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Schedule Transport
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function BoatTransportPageView() {
  return (
    <main className="transport-premium">
      {/* 1. Hero */}
      <section className="transport-premium-hero">
        <div className="transport-premium-hero__image">
          <Image
            src={transportHero.src}
            alt={transportHero.alt}
            fill
            priority
            className="transport-premium-hero__photo object-cover"
            style={{ objectPosition: transportHero.position }}
            sizes="100vw"
          />
        </div>
        <div className="transport-premium-hero__scrim" aria-hidden />
        <div className="transport-premium-hero__scrim-left" aria-hidden />
        <div className="transport-premium-hero__logistics" aria-hidden />
        <div className="transport-premium-hero__vignette" aria-hidden />
        <div className="container-site transport-premium-hero__content">
          <Link
            href="/services"
            className="transport-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero transport-premium-hero__eyebrow block">White-Glove Transport</span>
          <ServiceHeroTitle className="transport-premium-hero__title" title="Professional Duffy Boat Transport" />
          <p className="transport-premium-hero__lead">
            Safe, professional transport for Duffy and electric harbor boats across Southern California — marina-to-marina, service transport, seasonal relocation, and restoration pickup coordination.
          </p>
          <p className="transport-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/90">
            Duffy transport · Marina pickup · Careful handling · Secure trailering · Professional movement
          </p>
          <TransportCtaButtons className="transport-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Why professional transport */}
      <section className="transport-premium-dark transport-premium-section transport-premium-section--why">
        <div className="transport-premium-section__fade-in" aria-hidden />
        <div className="transport-premium-dark__glow" aria-hidden />
        <div className="transport-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg">
            <span className="teal-rule" />
            <h2 className="transport-premium-heading text-softwhite">Why Professional Transport Matters</h2>
            <p className="transport-premium-lead text-white/[0.72] mt-5">
              Valuable harbor boats deserve logistics discipline — not improvised hauling and unnecessary risk.
            </p>
          </div>
          <div {...serviceCardGridProps('transport-premium-why-grid', transportWhyMatters.length)}>
            {transportWhyMatters.map((item) => (
              <div key={item.title} className="transport-premium-why-card">
                <span className="transport-premium-why-card__bar" aria-hidden />
                <div>
                  <h3 className="transport-premium-why-card__title">{item.title}</h3>
                  <p className="transport-premium-why-card__text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="transport-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 3. White-glove handling */}
      <section className="transport-premium-light transport-premium-section transport-premium-section--ivory">
        <div className="transport-premium-light__fade-in" aria-hidden />
        <div className="transport-premium-light__texture" aria-hidden />
        <div className="transport-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="transport-premium-editorial">
            <div className="transport-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="transport-premium-heading text-navy">{transportHandling.title}</h2>
            </div>
            <div className="transport-premium-editorial__body">
              {transportHandling.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="transport-premium-pillars-panel mt-10 md:mt-12">
            <div {...serviceCardGridProps('transport-premium-pillars-grid', transportHandling.pillars.length)}>
              {transportHandling.pillars.map((pillar) => (
                <div key={pillar} className="transport-premium-pillar">
                  <span className="w-1 h-1 rounded-full bg-teal/80 flex-shrink-0" aria-hidden />
                  <span className="transport-premium-pillar__label">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="transport-premium-light__fade-out" aria-hidden />
      </section>

      {/* 4. Process */}
      <section className="transport-premium-dark transport-premium-section transport-premium-section--process">
        <div className="transport-premium-section__fade-in" aria-hidden />
        <div className="transport-premium-dark__grid" aria-hidden />
        <div className="transport-premium-dark__glow" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="teal-rule mx-auto" />
            <h2 className="transport-premium-heading text-softwhite">Our Transport Process</h2>
          </div>
          <div className="transport-premium-process-grid">
            {transportProcess.map((step) => (
              <div key={step.step} className="transport-premium-process-card">
                <span className="transport-premium-process-card__step">{step.step}</span>
                <h3 className="transport-premium-process-card__title">{step.title}</h3>
                <p className="transport-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="transport-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 5. Transport services */}
      <section className="transport-premium-light transport-premium-section transport-premium-section--services">
        <div className="transport-premium-light__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="transport-premium-heading text-navy">Transport Services</h2>
            <p className="transport-premium-lead text-gray-600 mt-5 max-w-xl">
              Marina-to-marina, service moves, and restoration logistics — scoped for Southern California harbor life.
            </p>
          </div>
          <div {...serviceCardGridProps('transport-premium-services-grid', transportServices.length)}>
            {transportServices.map((service) => (
              <div key={service.title} className="transport-premium-service-card">
                <h3 className="transport-premium-service-card__title">{service.title}</h3>
                <p className="transport-premium-service-card__text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="transport-premium-light__fade-out" aria-hidden />
      </section>

      {/* 6. Peace of mind band */}
      <section className="transport-premium-peace transport-premium-section transport-premium-section--peace">
        <div className="transport-premium-peace__fade-in" aria-hidden />
        <div className="transport-premium-peace__glow" aria-hidden />
        <div className="transport-premium-peace__horizon" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="label-hero block mb-4">Peace of Mind</span>
            <h2 className="transport-premium-heading text-softwhite">
              Your Boat Moved With Confidence
            </h2>
            <p className="transport-premium-lead text-white/[0.76] mt-5 mx-auto max-w-xl">
              Calm marina logistics — trusted handling, secure transport, and professional coordination from pickup to delivery.
            </p>
          </div>
          <div className="transport-premium-peace-grid">
            {transportPeaceOfMind.map((item) => (
              <div key={item.label} className="transport-premium-peace-card">
                <span className="transport-premium-peace-card__label">{item.label}</span>
                <span className="transport-premium-peace-card__value">{item.value}</span>
                <p className="transport-premium-peace-card__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="transport-premium-peace__fade-out" aria-hidden />
      </section>

      {/* 7. Gallery */}
      <section className="transport-premium-gallery transport-premium-section transport-premium-section--gallery">
        <div className="transport-premium-gallery__fade-in" aria-hidden />
        <div className="transport-premium-gallery__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="transport-premium-gallery__intro mb-9 md:mb-12">
            <span className="label-hero block mb-4">Marine Transport</span>
            <p className="font-mono text-[10px] text-white/45 uppercase tracking-[0.2em]">
              Marina logistics · Duffy handling · Professional movement
            </p>
          </div>
          <div className="transport-premium-gallery__strip transport-premium-gallery__strip--trio">
            {transportGallery.map((img) => (
              <div key={img.src} className="transport-premium-gallery-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="transport-premium-gallery-card__photo object-cover transition-all duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="transport-premium-gallery-card__overlay" aria-hidden />
                <p className="transport-premium-gallery-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="transport-premium-gallery__fade-out" aria-hidden />
      </section>

      {/* 8. FAQ */}
      <section className="transport-premium-light transport-premium-section transport-premium-section--faq">
        <div className="transport-premium-light__fade-in" aria-hidden />
        <div className="transport-premium-light__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="transport-premium-heading text-navy">Boat Transport FAQs</h2>
          </div>
          <div className="transport-premium-faq-list">
            {transportFaqs.map((faq) => (
              <details key={faq.question} className="transport-premium-faq group">
                <summary className="transport-premium-faq__question">
                  {faq.question}
                  <span className="transport-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="transport-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="request" className="section-cta-final transport-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Schedule Transport</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Need your boat moved safely and professionally?
              </h2>
              <p className="section-cta-final__lead">
                Tell us your pickup and delivery marinas — we&apos;ll coordinate white-glove Duffy transport across Southern California.
              </p>
              <div className="section-cta-final__actions flex flex-wrap gap-3">
                <a href={SITE_PHONE_TEL} className="btn-outline">
                  Call / Text {SITE_PHONE_DISPLAY}
                </a>
                <a href={SITE_PHONE_SMS} className="btn-ghost">
                  Text Us
                </a>
              </div>
            </div>
            <div className="cta-form-panel">
              <p className="cta-form-panel__title">Service Request</p>
              <ServiceRequestForm compact luxury />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
