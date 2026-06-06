import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  controllerFaqs,
  controllerGallery,
  controllerHero,
  controllerProcess,
  controllerSymptoms,
  controllerSystems,
} from '@/lib/controllerRepairContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function ServiceCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Request Service
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function ControllerRepairPageView() {
  return (
    <main className="service-premium controller-repair-premium">
      {/* 1. Hero */}
      <section className="service-premium-hero">
        <div className="service-premium-hero__image">
          <Image
            src={controllerHero.src}
            alt={controllerHero.alt}
            fill
            priority
            className="controller-repair-hero__photo service-premium-hero__photo object-cover"
            style={{ objectPosition: controllerHero.position }}
            sizes="100vw"
          />
        </div>
        <div className="service-premium-hero__scrim" aria-hidden />
        <div className="service-premium-hero__scrim-left" aria-hidden />
        <div className="controller-repair-hero__lift" aria-hidden />
        <div className="controller-repair-hero__scrim-right" aria-hidden />
        <div className="service-premium-hero__grid" aria-hidden />
        <div className="container-site service-premium-hero__content">
          <Link
            href="/services"
            className="service-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero service-premium-hero__eyebrow block">Electric Drive Systems</span>
          <ServiceHeroTitle
            className="service-premium-hero__title"
            title="Duffy Boat Controller Repair & Upgrades"
          />
          <p className="service-premium-hero__lead">
            Advanced controller diagnostics, rebuilds, replacements, and modernization for Duffy and electric harbor boats.
          </p>
          <p className="service-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/90">
            Specializing in Alltrax · Curtis · Sigma · Duffy Electric Drive Systems
          </p>
          <ServiceCtaButtons className="service-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Symptoms */}
      <section className="service-premium-dark service-premium-section">
        <div className="service-premium-section__fade-in" aria-hidden />
        <div className="service-premium-dark__glow" aria-hidden />
        <div className="container-site relative z-10">
          <div className="service-premium-intro service-premium-intro--left premium-intro-lg">
            <span className="teal-rule" />
            <h2 className="service-premium-heading text-softwhite">
              Common Controller Problems We Diagnose
            </h2>
            <p className="service-premium-lead text-white/[0.72] mt-5">
              If your Duffy is showing drive-system symptoms, we isolate the fault with structured electrical testing — not guesswork.
            </p>
          </div>
          <div {...serviceCardGridProps('service-premium-symptoms-grid', controllerSymptoms.length)}>
            {controllerSymptoms.map((symptom) => (
              <div key={symptom} className="service-premium-symptom-card">
                <span className="service-premium-symptom-card__mark" aria-hidden />
                <p className="service-premium-symptom-card__text">{symptom}</p>
              </div>
            ))}
          </div>
          <ServiceCtaButtons className="mt-10 md:mt-12" />
        </div>
      </section>

      {/* 3. Expertise */}
      <section className="service-premium-light service-premium-section">
        <div className="service-premium-light__fade-in" aria-hidden />
        <div className="service-premium-light__texture" aria-hidden />
        <div className="service-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="service-premium-editorial">
            <div className="service-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="service-premium-heading text-navy">
                Electric Drive Expertise Beyond Basic Marine Repair
              </h2>
            </div>
            <div className="service-premium-editorial__body">
              <p>
                EBR is built around electric boat propulsion — not general fiberglass work. Our technicians diagnose controller logic, throttle input, contactor circuits, battery delivery, charger behavior, and motor response as one integrated system.
              </p>
              <p>
                Whether you operate a Duffy in Newport Harbor, Huntington Harbour, or another Southern California marina, you get technical depth, clear communication, and repairs aligned to how electric harbor boats actually run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="service-premium-dark service-premium-section">
        <div className="service-premium-section__fade-in" aria-hidden />
        <div className="service-premium-dark__grid" aria-hidden />
        <div className="service-premium-dark__glow" aria-hidden />
        <div className="container-site relative z-10">
          <div className="service-premium-intro service-premium-intro--center premium-intro-lg premium-intro-lg--center">
            <span className="teal-rule mx-auto" />
            <h2 className="service-premium-heading text-softwhite">
              Our Controller Repair Process
            </h2>
          </div>
          <div className="service-premium-process-grid">
            {controllerProcess.map((step) => (
              <div key={step.step} className="service-premium-process-card">
                <span className="service-premium-process-card__step">{step.step}</span>
                <h3 className="service-premium-process-card__title">{step.title}</h3>
                <p className="service-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Controller types */}
      <section className="service-premium-light service-premium-section service-premium-section--systems">
        <div className="service-premium-light__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="service-premium-intro max-w-2xl mb-8 md:mb-10">
            <span className="teal-rule" />
            <h2 className="service-premium-heading text-navy">
              Controller Systems We Work With
            </h2>
          </div>
          <div className="service-premium-systems-panel">
            <div {...serviceCardGridProps('service-premium-systems-grid', controllerSystems.length)}>
              {controllerSystems.map((system) => (
                <div key={system} className="service-premium-system-pill">
                  <span className="w-1 h-1 rounded-full bg-teal/80 flex-shrink-0" />
                  <span className="service-premium-system-pill__label">{system}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery */}
      <section className="service-premium-gallery service-premium-section controller-repair-gallery">
        <div className="service-premium-gallery__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="service-premium-gallery__header premium-intro !max-w-none">
            <span className="label-hero block mb-4">Technical Field Work</span>
            <p className="font-mono text-[10px] text-white/45 uppercase tracking-[0.2em]">
              Drive-system diagnostics · Wiring · Controller service
            </p>
          </div>
          <div className="service-premium-gallery__strip service-premium-gallery__strip--duo">
            {controllerGallery.map((img, index) => (
              <div
                key={img.src}
                className={`service-premium-gallery-card group${index === 0 ? ' controller-repair-gallery-card--sigma' : ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover transition-transform duration-300 group-hover:scale-[1.02]${index === 0 ? ' controller-repair-gallery-card__photo' : ''}`}
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="service-premium-gallery-card__overlay" />
                <div className="controller-repair-gallery-card__copy">
                  <span className="controller-repair-gallery-card__label">{img.label}</span>
                  <span className="controller-repair-gallery-card__title">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="service-premium-light service-premium-section">
        <div className="service-premium-light__fade-in" aria-hidden />
        <div className="service-premium-light__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="service-premium-intro premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="service-premium-heading text-navy">
              Controller Repair FAQs
            </h2>
          </div>
          <div className="service-premium-faq-list">
            {controllerFaqs.map((faq) => (
              <details key={faq.question} className="service-premium-faq group">
                <summary className="service-premium-faq__question">
                  {faq.question}
                  <span className="service-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="service-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section id="request" className="section-cta-final service-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Concierge Service Request</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Need controller help on your Duffy or electric boat?
              </h2>
              <p className="section-cta-final__lead">
                Tell us what the boat is doing — we&apos;ll diagnose the drive system and recommend the right repair or upgrade path.
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
