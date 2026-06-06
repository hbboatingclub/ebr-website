import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  batteryComparisons,
  batteryFaqs,
  batteryGallery,
  batteryHero,
  batteryPerformanceStats,
  batteryProcess,
  batterySystemOptions,
  batteryWhyEbr,
} from '@/lib/batteryUpgradeContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function UpgradeCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Request Upgrade
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function BatteryUpgradePageView() {
  return (
    <main className="battery-premium">
      {/* 1. Hero */}
      <section className="battery-premium-hero">
        <div className="battery-premium-hero__image">
          <Image
            src={batteryHero.src}
            alt={batteryHero.alt}
            fill
            priority
            className="battery-premium-hero__photo object-cover"
            style={{ objectPosition: batteryHero.position }}
            sizes="100vw"
          />
        </div>
        <div className="battery-premium-hero__scrim" aria-hidden />
        <div className="battery-premium-hero__scrim-left" aria-hidden />
        <div className="battery-premium-hero__scrim-right" aria-hidden />
        <div className="battery-premium-hero__vignette" aria-hidden />
        <div className="battery-premium-hero__glow" aria-hidden />
        <div className="battery-premium-hero__grid" aria-hidden />
        <div className="container-site battery-premium-hero__content">
          <Link
            href="/services"
            className="battery-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero battery-premium-hero__eyebrow block">Marine Energy Systems</span>
          <ServiceHeroTitle
            className="battery-premium-hero__title"
            title="Lithium Battery Upgrades for Duffy & Electric Boats"
          />
          <p className="battery-premium-hero__lead">
            Engineered lithium conversions for longer runtime, lighter weight, faster charging, and modern monitoring — built with marine-grade integration and OEM-level confidence.
          </p>
          <p className="battery-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/90">
            Longer runtime · Reliability · Weight reduction · Faster charging · Victron monitoring
          </p>
          <UpgradeCtaButtons className="battery-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Before / After */}
      <section className="battery-premium-dark battery-premium-section battery-premium-section--compare">
        <div className="battery-premium-section__fade-in" aria-hidden />
        <div className="battery-premium-dark__glow" aria-hidden />
        <div className="battery-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="battery-premium-intro battery-premium-intro--left premium-intro-lg">
            <span className="teal-rule" />
            <h2 className="battery-premium-heading text-softwhite">
              Old System vs. Modern Lithium
            </h2>
            <p className="battery-premium-lead text-white/[0.74] mt-5">
              A properly engineered lithium upgrade transforms how your electric boat performs in harbor service — not just what sits in the battery compartment.
            </p>
          </div>
          <div className="battery-premium-compare-grid">
            {batteryComparisons.map((row) => (
              <div key={row.legacy} className="battery-premium-compare-card">
                <div className="battery-premium-compare-card__col battery-premium-compare-card__col--legacy">
                  <span className="battery-premium-compare-card__label">Old System</span>
                  <p className="battery-premium-compare-card__text">{row.legacy}</p>
                </div>
                <span className="battery-premium-compare-card__divider" aria-hidden />
                <div className="battery-premium-compare-card__col battery-premium-compare-card__col--modern">
                  <span className="battery-premium-compare-card__label battery-premium-compare-card__label--modern">
                    Modern Lithium
                  </span>
                  <p className="battery-premium-compare-card__text battery-premium-compare-card__text--modern">
                    {row.modern}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <UpgradeCtaButtons className="mt-10 md:mt-12" />
        </div>
        <div className="battery-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 3. Why EBR */}
      <section className="battery-premium-light battery-premium-section battery-premium-section--ivory">
        <div className="battery-premium-light__fade-in" aria-hidden />
        <div className="battery-premium-light__texture" aria-hidden />
        <div className="battery-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="battery-premium-editorial">
            <div className="battery-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="battery-premium-heading text-navy">{batteryWhyEbr.title}</h2>
            </div>
            <div className="battery-premium-editorial__body">
              {batteryWhyEbr.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="battery-premium-pillars-panel mt-10 md:mt-12">
            <div {...serviceCardGridProps('battery-premium-pillars-grid', batteryWhyEbr.pillars.length)}>
              {batteryWhyEbr.pillars.map((pillar) => (
                <div key={pillar} className="battery-premium-pillar">
                  <span className="w-1 h-1 rounded-full bg-teal/80 flex-shrink-0" aria-hidden />
                  <span className="battery-premium-pillar__label">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="battery-premium-light__fade-out" aria-hidden />
      </section>

      {/* 4. Process */}
      <section className="battery-premium-dark battery-premium-section battery-premium-section--process">
        <div className="battery-premium-section__fade-in" aria-hidden />
        <div className="battery-premium-dark__grid" aria-hidden />
        <div className="battery-premium-dark__glow" aria-hidden />
        <div className="battery-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="battery-premium-intro battery-premium-intro--center premium-intro-lg premium-intro-lg--center">
            <span className="teal-rule mx-auto" />
            <h2 className="battery-premium-heading text-softwhite">Our Lithium Upgrade Process</h2>
          </div>
          <div className="battery-premium-process-grid">
            {batteryProcess.map((step) => (
              <div key={step.step} className="battery-premium-process-card">
                <span className="battery-premium-process-card__step">{step.step}</span>
                <h3 className="battery-premium-process-card__title">{step.title}</h3>
                <p className="battery-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="battery-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 5. System options */}
      <section className="battery-premium-light battery-premium-section battery-premium-section--options">
        <div className="battery-premium-light__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="battery-premium-intro premium-intro">
            <span className="teal-rule" />
            <h2 className="battery-premium-heading text-navy">System Options We Engineer</h2>
            <p className="battery-premium-lead text-gray-600 mt-5 max-w-xl">
              Technical configurations sized for Duffy and electric harbor boats — from targeted lithium swaps to full electrical modernization.
            </p>
          </div>
          <div {...serviceCardGridProps('battery-premium-options-grid', batterySystemOptions.length)}>
            {batterySystemOptions.map((option) => (
              <div key={option.title} className="battery-premium-option-card">
                <h3 className="battery-premium-option-card__title">{option.title}</h3>
                <p className="battery-premium-option-card__text">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="battery-premium-light__fade-out" aria-hidden />
      </section>

      {/* 6. Range / Performance */}
      <section className="battery-premium-performance battery-premium-section battery-premium-section--performance">
        <div className="battery-premium-performance__fade-in" aria-hidden />
        <div className="battery-premium-performance__glow" aria-hidden />
        <div className="battery-premium-performance__spotlight" aria-hidden />
        <div className="battery-premium-performance__grid" aria-hidden />
        <div className="battery-premium-performance__blueprint" aria-hidden />
        <div className="container-site relative z-10">
          <div className="battery-premium-intro battery-premium-intro--center premium-intro-lg premium-intro-lg--center">
            <span className="label-hero block mb-4">Performance Outcomes</span>
            <h2 className="battery-premium-heading text-softwhite">
              Range, Weight &amp; Reliability Gains
            </h2>
            <p className="battery-premium-lead text-white/[0.72] mt-5 mx-auto max-w-xl">
              Engineered lithium upgrades deliver measurable improvements across runtime, charging, stability, and daily harbor operation.
            </p>
          </div>
          <div className="battery-premium-stats-grid">
            {batteryPerformanceStats.map((stat) => (
              <div key={stat.label} className="battery-premium-stat">
                <span className="battery-premium-stat__label">{stat.label}</span>
                <span className="battery-premium-stat__value">{stat.value}</span>
                <p className="battery-premium-stat__detail">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="battery-premium-performance__fade-out" aria-hidden />
      </section>

      {/* 7. Gallery */}
      <section className="battery-premium-gallery battery-premium-section battery-premium-section--gallery">
        <div className="battery-premium-gallery__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="battery-premium-gallery__header premium-intro !max-w-none">
            <span className="label-hero block mb-4">Installed Systems</span>
            <p className="font-mono text-[10px] text-white/45 uppercase tracking-[0.2em]">
              Lithium installs · Electrical integration · Commissioning
            </p>
          </div>
          <div className="battery-premium-gallery__strip battery-premium-gallery__strip--duo">
            {batteryGallery.map((img) => (
              <div key={img.src} className="battery-premium-gallery-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="battery-premium-gallery-card__overlay" />
                <p className="battery-premium-gallery-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="battery-premium-gallery__fade-out" aria-hidden />
      </section>

      {/* 8. FAQ */}
      <section className="battery-premium-light battery-premium-section battery-premium-section--faq">
        <div className="battery-premium-light__fade-in" aria-hidden />
        <div className="battery-premium-light__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="battery-premium-intro premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="battery-premium-heading text-navy">Lithium Upgrade FAQs</h2>
          </div>
          <div className="battery-premium-faq-list">
            {batteryFaqs.map((faq) => (
              <details key={faq.question} className="battery-premium-faq group">
                <summary className="battery-premium-faq__question">
                  {faq.question}
                  <span className="battery-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="battery-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="request" className="section-cta-final battery-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Concierge Upgrade Request</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Ready to upgrade your Duffy or electric boat to lithium?
              </h2>
              <p className="section-cta-final__lead">
                Tell us how you use the boat — we&apos;ll evaluate your system and design the right lithium architecture for range, reliability, and harbor performance.
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
