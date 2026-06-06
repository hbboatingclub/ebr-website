import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  motorComponents,
  motorFaqs,
  motorGallery,
  motorHero,
  motorIssues,
  motorPerformanceStats,
  motorProcess,
  motorWhyEbr,
} from '@/lib/motorRepairContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function MotorCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Schedule Motor Service
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function MotorRepairPageView() {
  return (
    <main className="motor-premium">
      {/* 1. Hero */}
      <section className="motor-premium-hero">
        <div className="motor-premium-hero__image">
          <Image
            src={motorHero.src}
            alt={motorHero.alt}
            fill
            priority
            className="motor-premium-hero__photo object-cover"
            style={{ objectPosition: motorHero.position }}
            sizes="100vw"
          />
        </div>
        <div className="motor-premium-hero__scrim" aria-hidden />
        <div className="motor-premium-hero__scrim-left" aria-hidden />
        <div className="motor-premium-hero__vignette" aria-hidden />
        <div className="motor-premium-hero__glow" aria-hidden />
        <div className="motor-premium-hero__grid" aria-hidden />
        <div className="container-site motor-premium-hero__content">
          <Link
            href="/services"
            className="motor-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero motor-premium-hero__eyebrow block">Electric Propulsion</span>
          <ServiceHeroTitle
            className="motor-premium-hero__title"
            title="Electric Motor Repair & Drivetrain Service for Duffy Boats"
          />
          <p className="motor-premium-hero__lead">
            Premium motor diagnostics, rebuilds, and drivetrain service for overheating, performance loss, and propulsion faults — engineered for smooth torque, efficiency, and long-term marine reliability.
          </p>
          <p className="motor-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/85">
            Drive systems · Motor diagnostics · Rebuilds · Efficiency · Smooth operation · Premium reliability
          </p>
          <MotorCtaButtons className="motor-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Common motor issues */}
      <section className="motor-premium-dark motor-premium-section motor-premium-section--issues">
        <div className="motor-premium-section__fade-in" aria-hidden />
        <div className="motor-premium-dark__glow" aria-hidden />
        <div className="motor-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg">
            <span className="teal-rule" />
            <h2 className="motor-premium-heading text-softwhite">
              Common Motor &amp; Drivetrain Issues We Solve
            </h2>
            <p className="motor-premium-lead text-white/[0.68] mt-5">
              Propulsion faults demand mechanical precision — we isolate motor, drivetrain, and load performance before recommending repair scope.
            </p>
          </div>
          <div {...serviceCardGridProps('motor-premium-issues-grid', motorIssues.length)}>
            {motorIssues.map((issue) => (
              <div key={issue} className="motor-premium-issue-card">
                <span className="motor-premium-issue-card__bar" aria-hidden />
                <p className="motor-premium-issue-card__text">{issue}</p>
              </div>
            ))}
          </div>
          <MotorCtaButtons className="mt-10 md:mt-12" />
        </div>
        <div className="motor-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 3. Why EBR */}
      <section className="motor-premium-light motor-premium-section motor-premium-section--ivory">
        <div className="motor-premium-light__fade-in" aria-hidden />
        <div className="motor-premium-light__texture" aria-hidden />
        <div className="motor-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="motor-premium-editorial">
            <div className="motor-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="motor-premium-heading text-navy">{motorWhyEbr.title}</h2>
            </div>
            <div className="motor-premium-editorial__body">
              {motorWhyEbr.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="motor-premium-pillars-panel mt-10 md:mt-12">
            <div {...serviceCardGridProps('motor-premium-pillars-grid', motorWhyEbr.pillars.length)}>
              {motorWhyEbr.pillars.map((pillar) => (
                <div key={pillar} className="motor-premium-pillar">
                  <span className="w-1 h-1 rounded-full bg-teal/80 flex-shrink-0" aria-hidden />
                  <span className="motor-premium-pillar__label">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="motor-premium-light__fade-out" aria-hidden />
      </section>

      {/* 4. Process */}
      <section className="motor-premium-dark motor-premium-section motor-premium-section--process">
        <div className="motor-premium-section__fade-in" aria-hidden />
        <div className="motor-premium-dark__grid" aria-hidden />
        <div className="motor-premium-dark__glow" aria-hidden />
        <div className="motor-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="teal-rule mx-auto" />
            <h2 className="motor-premium-heading text-softwhite">Our Motor Service Process</h2>
          </div>
          <div className="motor-premium-process-grid">
            {motorProcess.map((step) => (
              <div key={step.step} className="motor-premium-process-card">
                <span className="motor-premium-process-card__step">{step.step}</span>
                <h3 className="motor-premium-process-card__title">{step.title}</h3>
                <p className="motor-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="motor-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 5. Systems & components */}
      <section className="motor-premium-light motor-premium-section motor-premium-section--components">
        <div className="motor-premium-light__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="motor-premium-heading text-navy">Systems &amp; Components We Service</h2>
            <p className="motor-premium-lead text-gray-600 mt-5 max-w-xl">
              Specialized propulsion work across motors, drivetrain hardware, and integrated electric drive architecture.
            </p>
          </div>
          <div {...serviceCardGridProps('motor-premium-components-grid', motorComponents.length)}>
            {motorComponents.map((component) => (
              <div key={component.title} className="motor-premium-component-card">
                <h3 className="motor-premium-component-card__title">{component.title}</h3>
                <p className="motor-premium-component-card__text">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="motor-premium-light__fade-out" aria-hidden />
      </section>

      {/* 6. Performance & reliability */}
      <section className="motor-premium-propulsion motor-premium-section motor-premium-section--propulsion">
        <div className="motor-premium-propulsion__fade-in" aria-hidden />
        <div className="motor-premium-propulsion__glow" aria-hidden />
        <div className="motor-premium-propulsion__spotlight" aria-hidden />
        <div className="motor-premium-propulsion__grid" aria-hidden />
        <div className="motor-premium-propulsion__torque" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="label-hero block mb-4">Propulsion Performance</span>
            <h2 className="motor-premium-heading text-softwhite">
              Torque, Efficiency &amp; Reliability
            </h2>
            <p className="motor-premium-lead text-white/[0.66] mt-5 mx-auto max-w-xl">
              Precision motor work restores the calm, powerful propulsion Duffy and electric harbor boats are built to deliver.
            </p>
          </div>
          <div className="motor-premium-stats-grid">
            {motorPerformanceStats.map((stat) => (
              <div key={stat.label} className="motor-premium-stat">
                <span className="motor-premium-stat__label">{stat.label}</span>
                <span className="motor-premium-stat__value">{stat.value}</span>
                <p className="motor-premium-stat__detail">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="motor-premium-propulsion__fade-out" aria-hidden />
      </section>

      {/* 7. Gallery */}
      <section className="motor-premium-gallery motor-premium-section motor-premium-section--gallery">
        <div className="motor-premium-gallery__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro !max-w-none">
            <span className="label-hero block mb-4">Propulsion Field Work</span>
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
              Motors · Drivetrain · Drive-system service
            </p>
          </div>
          <div className="motor-premium-gallery__strip motor-premium-gallery__strip--duo">
            {motorGallery.map((img) => (
              <div key={img.src} className="motor-premium-gallery-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="motor-premium-gallery-card__overlay" />
                <p className="motor-premium-gallery-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="motor-premium-gallery__fade-out" aria-hidden />
      </section>

      {/* 8. FAQ */}
      <section className="motor-premium-light motor-premium-section motor-premium-section--faq">
        <div className="motor-premium-light__fade-in" aria-hidden />
        <div className="motor-premium-light__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="motor-premium-heading text-navy">Motor Repair FAQs</h2>
          </div>
          <div className="motor-premium-faq-list">
            {motorFaqs.map((faq) => (
              <details key={faq.question} className="motor-premium-faq group">
                <summary className="motor-premium-faq__question">
                  {faq.question}
                  <span className="motor-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="motor-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="request" className="section-cta-final motor-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Schedule Motor Service</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Need motor or drivetrain service on your Duffy or electric boat?
              </h2>
              <p className="section-cta-final__lead">
                Tell us what the propulsion system is doing — we&apos;ll inspect, diagnose, and restore smooth, reliable electric drive performance.
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
