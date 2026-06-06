import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  diagnosticsFaqs,
  diagnosticsGallery,
  diagnosticsHero,
  diagnosticsIssues,
  diagnosticsPrecisionTests,
  diagnosticsProcess,
  diagnosticsSystems,
  diagnosticsWhyEbr,
} from '@/lib/electricalDiagnosticsContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function DiagnosticsCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Schedule Diagnostics
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function ElectricalDiagnosticsPageView() {
  return (
    <main className="diagnostics-premium">
      {/* 1. Hero */}
      <section className="diagnostics-premium-hero">
        <div className="diagnostics-premium-hero__image">
          <Image
            src={diagnosticsHero.src}
            alt={diagnosticsHero.alt}
            fill
            priority
            className="diagnostics-premium-hero__photo object-cover"
            style={{ objectPosition: diagnosticsHero.position }}
            sizes="100vw"
          />
        </div>
        <div className="diagnostics-premium-hero__scrim" aria-hidden />
        <div className="diagnostics-premium-hero__scrim-left" aria-hidden />
        <div className="diagnostics-premium-hero__vignette" aria-hidden />
        <div className="diagnostics-premium-hero__glow" aria-hidden />
        <div className="diagnostics-premium-hero__grid" aria-hidden />
        <div className="diagnostics-premium-hero__scanlines" aria-hidden />
        <div className="container-site diagnostics-premium-hero__content">
          <Link
            href="/services"
            className="diagnostics-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero diagnostics-premium-hero__eyebrow block">Factory-Spec Diagnostics</span>
          <ServiceHeroTitle
            className="diagnostics-premium-hero__title"
            title="Advanced Electrical Diagnostics for Duffy & Electric Boats"
          />
          <p className="diagnostics-premium-hero__lead">
            Precision troubleshooting for intermittent electrical issues, charging faults, controller failures, voltage drops, and complex propulsion faults — with calm, OEM-level technical authority.
          </p>
          <p className="diagnostics-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/85">
            Intermittent faults · Charging problems · Controller analysis · Voltage testing · System verification
          </p>
          <DiagnosticsCtaButtons className="diagnostics-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Common issues */}
      <section className="diagnostics-premium-dark diagnostics-premium-section diagnostics-premium-section--issues">
        <div className="diagnostics-premium-section__fade-in" aria-hidden />
        <div className="diagnostics-premium-dark__glow" aria-hidden />
        <div className="diagnostics-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg">
            <span className="teal-rule" />
            <h2 className="diagnostics-premium-heading text-softwhite">
              Common Electrical Issues We Diagnose
            </h2>
            <p className="diagnostics-premium-lead text-white/[0.7] mt-5">
              When symptoms are inconsistent or multi-system, structured diagnostics isolate root cause — not guesswork.
            </p>
          </div>
          <div {...serviceCardGridProps('diagnostics-premium-issues-grid', diagnosticsIssues.length)}>
            {diagnosticsIssues.map((issue, index) => (
              <div key={issue} className="diagnostics-premium-issue-card">
                <span className="diagnostics-premium-issue-card__index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="diagnostics-premium-issue-card__text">{issue}</p>
              </div>
            ))}
          </div>
          <DiagnosticsCtaButtons className="mt-10 md:mt-12" />
        </div>
        <div className="diagnostics-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 3. Why EBR */}
      <section className="diagnostics-premium-light diagnostics-premium-section diagnostics-premium-section--ivory">
        <div className="diagnostics-premium-light__fade-in" aria-hidden />
        <div className="diagnostics-premium-light__texture" aria-hidden />
        <div className="diagnostics-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="diagnostics-premium-editorial">
            <div className="diagnostics-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="diagnostics-premium-heading text-navy">{diagnosticsWhyEbr.title}</h2>
            </div>
            <div className="diagnostics-premium-editorial__body">
              {diagnosticsWhyEbr.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="diagnostics-premium-pillars-panel mt-10 md:mt-12">
            <div {...serviceCardGridProps('diagnostics-premium-pillars-grid', diagnosticsWhyEbr.pillars.length)}>
              {diagnosticsWhyEbr.pillars.map((pillar) => (
                <div key={pillar} className="diagnostics-premium-pillar">
                  <span className="w-1 h-1 rounded-full bg-teal/80 flex-shrink-0" aria-hidden />
                  <span className="diagnostics-premium-pillar__label">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="diagnostics-premium-light__fade-out" aria-hidden />
      </section>

      {/* 4. Process */}
      <section className="diagnostics-premium-dark diagnostics-premium-section diagnostics-premium-section--process">
        <div className="diagnostics-premium-section__fade-in" aria-hidden />
        <div className="diagnostics-premium-dark__grid" aria-hidden />
        <div className="diagnostics-premium-dark__glow" aria-hidden />
        <div className="diagnostics-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="teal-rule mx-auto" />
            <h2 className="diagnostics-premium-heading text-softwhite">Our Diagnostic Process</h2>
          </div>
          <div className="diagnostics-premium-process-grid">
            {diagnosticsProcess.map((step) => (
              <div key={step.step} className="diagnostics-premium-process-card">
                <span className="diagnostics-premium-process-card__step">{step.step}</span>
                <h3 className="diagnostics-premium-process-card__title">{step.title}</h3>
                <p className="diagnostics-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="diagnostics-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 5. Systems we diagnose */}
      <section className="diagnostics-premium-light diagnostics-premium-section diagnostics-premium-section--systems">
        <div className="diagnostics-premium-light__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="diagnostics-premium-heading text-navy">Systems We Diagnose</h2>
            <p className="diagnostics-premium-lead text-gray-600 mt-5 max-w-xl">
              Specialized testing across every layer of Duffy and electric harbor boat propulsion architecture.
            </p>
          </div>
          <div {...serviceCardGridProps('diagnostics-premium-systems-grid', diagnosticsSystems.length)}>
            {diagnosticsSystems.map((system) => (
              <div key={system.title} className="diagnostics-premium-system-card">
                <h3 className="diagnostics-premium-system-card__title">{system.title}</h3>
                <p className="diagnostics-premium-system-card__text">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="diagnostics-premium-light__fade-out" aria-hidden />
      </section>

      {/* 6. Precision testing */}
      <section className="diagnostics-premium-precision diagnostics-premium-section diagnostics-premium-section--precision">
        <div className="diagnostics-premium-precision__fade-in" aria-hidden />
        <div className="diagnostics-premium-precision__glow" aria-hidden />
        <div className="diagnostics-premium-precision__spotlight" aria-hidden />
        <div className="diagnostics-premium-precision__grid" aria-hidden />
        <div className="diagnostics-premium-precision__crosshair" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="label-hero block mb-4">Precision Testing</span>
            <h2 className="diagnostics-premium-heading text-softwhite">
              Factory-Level Diagnostic Protocols
            </h2>
            <p className="diagnostics-premium-lead text-white/[0.68] mt-5 mx-auto max-w-xl">
              Measured, repeatable testing — the same discipline applied to complex marine EV propulsion systems.
            </p>
          </div>
          <div className="diagnostics-premium-tests-grid">
            {diagnosticsPrecisionTests.map((test) => (
              <div key={test.label} className="diagnostics-premium-test">
                <span className="diagnostics-premium-test__label">{test.label}</span>
                <span className="diagnostics-premium-test__value">{test.value}</span>
                <p className="diagnostics-premium-test__detail">{test.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="diagnostics-premium-precision__fade-out" aria-hidden />
      </section>

      {/* 7. Gallery */}
      <section className="diagnostics-premium-gallery diagnostics-premium-section diagnostics-premium-section--gallery">
        <div className="diagnostics-premium-gallery__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro !max-w-none">
            <span className="label-hero block mb-4">Diagnostic Field Work</span>
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
              Electrical testing · Controllers · Wiring verification
            </p>
          </div>
          <div className="diagnostics-premium-gallery__strip diagnostics-premium-gallery__strip--duo">
            {diagnosticsGallery.map((img) => (
              <div key={img.src} className="diagnostics-premium-gallery-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="diagnostics-premium-gallery-card__overlay" />
                <p className="diagnostics-premium-gallery-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="diagnostics-premium-gallery__fade-out" aria-hidden />
      </section>

      {/* 8. FAQ */}
      <section className="diagnostics-premium-light diagnostics-premium-section diagnostics-premium-section--faq">
        <div className="diagnostics-premium-light__fade-in" aria-hidden />
        <div className="diagnostics-premium-light__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="diagnostics-premium-heading text-navy">Electrical Diagnostics FAQs</h2>
          </div>
          <div className="diagnostics-premium-faq-list">
            {diagnosticsFaqs.map((faq) => (
              <details key={faq.question} className="diagnostics-premium-faq group">
                <summary className="diagnostics-premium-faq__question">
                  {faq.question}
                  <span className="diagnostics-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="diagnostics-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="request" className="section-cta-final diagnostics-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Schedule Diagnostics</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Need advanced electrical diagnostics on your Duffy or electric boat?
              </h2>
              <p className="section-cta-final__lead">
                Describe what the boat is doing — we&apos;ll apply structured testing to isolate the fault and recommend the right repair path.
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
