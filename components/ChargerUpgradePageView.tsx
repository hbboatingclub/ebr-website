import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  chargerFaqs,
  chargerGallery,
  chargerHero,
  chargerIssues,
  chargerProcess,
  chargerSmartHighlights,
  chargerSystemOptions,
  chargerWhyEbr,
} from '@/lib/chargerUpgradeContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function ChargerCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Schedule Charger Upgrade
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function ChargerUpgradePageView() {
  return (
    <main className="charger-premium">
      {/* 1. Hero */}
      <section className="charger-premium-hero">
        <div className="charger-premium-hero__image">
          <Image
            src={chargerHero.src}
            alt={chargerHero.alt}
            fill
            priority
            className="charger-premium-hero__photo object-cover"
            style={{ objectPosition: chargerHero.position }}
            sizes="100vw"
          />
        </div>
        <div className="charger-premium-hero__scrim" aria-hidden />
        <div className="charger-premium-hero__scrim-left" aria-hidden />
        <div className="charger-premium-hero__vignette" aria-hidden />
        <div className="charger-premium-hero__glow" aria-hidden />
        <div className="charger-premium-hero__grid" aria-hidden />
        <div className="container-site charger-premium-hero__content">
          <Link
            href="/services"
            className="charger-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero charger-premium-hero__eyebrow block">Marine Charging Systems</span>
          <ServiceHeroTitle
            className="charger-premium-hero__title"
            title="Charger Upgrades & Smart Charging for Electric Boats"
          />
          <p className="charger-premium-hero__lead">
            Lithium-compatible charger upgrades, modern onboard charging architecture, and intelligent monitoring — engineered for faster, safer, more reliable dockside charging.
          </p>
          <p className="charger-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/90">
            Lithium-compatible · Faster charging · Smart monitoring · Safer systems · Charging reliability
          </p>
          <ChargerCtaButtons className="charger-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Common charging issues */}
      <section className="charger-premium-dark charger-premium-section charger-premium-section--issues">
        <div className="charger-premium-section__fade-in" aria-hidden />
        <div className="charger-premium-dark__glow" aria-hidden />
        <div className="charger-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg">
            <span className="teal-rule" />
            <h2 className="charger-premium-heading text-softwhite">
              Common Charging Issues We Resolve
            </h2>
            <p className="charger-premium-lead text-white/[0.72] mt-5">
              Charging faults are rarely isolated — we evaluate charger, battery, shore power, and monitoring as one modern electrical ecosystem.
            </p>
          </div>
          <div {...serviceCardGridProps('charger-premium-issues-grid', chargerIssues.length)}>
            {chargerIssues.map((issue) => (
              <div key={issue} className="charger-premium-issue-card">
                <span className="charger-premium-issue-card__node" aria-hidden />
                <p className="charger-premium-issue-card__text">{issue}</p>
              </div>
            ))}
          </div>
          <ChargerCtaButtons className="mt-10 md:mt-12" />
        </div>
        <div className="charger-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 3. Why EBR */}
      <section className="charger-premium-light charger-premium-section charger-premium-section--ivory">
        <div className="charger-premium-light__fade-in" aria-hidden />
        <div className="charger-premium-light__texture" aria-hidden />
        <div className="charger-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="charger-premium-editorial">
            <div className="charger-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="charger-premium-heading text-navy">{chargerWhyEbr.title}</h2>
            </div>
            <div className="charger-premium-editorial__body">
              {chargerWhyEbr.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="charger-premium-pillars-panel mt-10 md:mt-12">
            <div {...serviceCardGridProps('charger-premium-pillars-grid', chargerWhyEbr.pillars.length)}>
              {chargerWhyEbr.pillars.map((pillar) => (
                <div key={pillar} className="charger-premium-pillar">
                  <span className="w-1 h-1 rounded-full bg-teal/80 flex-shrink-0" aria-hidden />
                  <span className="charger-premium-pillar__label">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="charger-premium-light__fade-out" aria-hidden />
      </section>

      {/* 4. Process */}
      <section className="charger-premium-dark charger-premium-section charger-premium-section--process">
        <div className="charger-premium-section__fade-in" aria-hidden />
        <div className="charger-premium-dark__grid" aria-hidden />
        <div className="charger-premium-dark__glow" aria-hidden />
        <div className="charger-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="teal-rule mx-auto" />
            <h2 className="charger-premium-heading text-softwhite">Our Charger Upgrade Process</h2>
          </div>
          <div className="charger-premium-process-grid">
            {chargerProcess.map((step) => (
              <div key={step.step} className="charger-premium-process-card">
                <span className="charger-premium-process-card__step">{step.step}</span>
                <h3 className="charger-premium-process-card__title">{step.title}</h3>
                <p className="charger-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="charger-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 5. Charging system options */}
      <section className="charger-premium-light charger-premium-section charger-premium-section--options">
        <div className="charger-premium-light__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="charger-premium-heading text-navy">Charging System Options</h2>
            <p className="charger-premium-lead text-gray-600 mt-5 max-w-xl">
              Specialized platforms for modern electric harbor boats — from profile-matched chargers to full monitoring ecosystems.
            </p>
          </div>
          <div {...serviceCardGridProps('charger-premium-options-grid', chargerSystemOptions.length)}>
            {chargerSystemOptions.map((option) => (
              <div key={option.title} className="charger-premium-option-card">
                <h3 className="charger-premium-option-card__title">{option.title}</h3>
                <p className="charger-premium-option-card__text">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="charger-premium-light__fade-out" aria-hidden />
      </section>

      {/* 6. Smart charging band */}
      <section className="charger-premium-smart charger-premium-section charger-premium-section--smart">
        <div className="charger-premium-smart__fade-in" aria-hidden />
        <div className="charger-premium-smart__glow" aria-hidden />
        <div className="charger-premium-smart__spotlight" aria-hidden />
        <div className="charger-premium-smart__grid" aria-hidden />
        <div className="charger-premium-smart__pulse" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="label-hero block mb-4">Smart Charging</span>
            <h2 className="charger-premium-heading text-softwhite">
              Modern Marine Charging Infrastructure
            </h2>
            <p className="charger-premium-lead text-white/[0.74] mt-5 mx-auto max-w-xl">
              Premium EV-style charging intelligence — refined for dockside reliability on Duffy and electric harbor boats.
            </p>
          </div>
          <div className="charger-premium-smart-grid">
            {chargerSmartHighlights.map((item) => (
              <div key={item.label} className="charger-premium-smart-card">
                <span className="charger-premium-smart-card__label">{item.label}</span>
                <span className="charger-premium-smart-card__value">{item.value}</span>
                <p className="charger-premium-smart-card__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="charger-premium-smart__fade-out" aria-hidden />
      </section>

      {/* 7. Gallery */}
      <section className="charger-premium-gallery charger-premium-section charger-premium-section--gallery">
        <div className="charger-premium-gallery__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro !max-w-none">
            <span className="label-hero block mb-4">Charging Infrastructure</span>
            <p className="font-mono text-[10px] text-white/45 uppercase tracking-[0.2em]">
              Onboard systems · Monitoring · Electrical integration
            </p>
          </div>
          <div className="charger-premium-gallery__strip charger-premium-gallery__strip--duo">
            {chargerGallery.map((img) => (
              <div key={img.src} className="charger-premium-gallery-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="charger-premium-gallery-card__overlay" />
                <p className="charger-premium-gallery-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="charger-premium-gallery__fade-out" aria-hidden />
      </section>

      {/* 8. FAQ */}
      <section className="charger-premium-light charger-premium-section charger-premium-section--faq">
        <div className="charger-premium-light__fade-in" aria-hidden />
        <div className="charger-premium-light__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="charger-premium-heading text-navy">Charger Upgrade FAQs</h2>
          </div>
          <div className="charger-premium-faq-list">
            {chargerFaqs.map((faq) => (
              <details key={faq.question} className="charger-premium-faq group">
                <summary className="charger-premium-faq__question">
                  {faq.question}
                  <span className="charger-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="charger-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="request" className="section-cta-final charger-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Schedule Charger Upgrade</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Ready to modernize charging on your Duffy or electric boat?
              </h2>
              <p className="section-cta-final__lead">
                Tell us about your current charger and battery setup — we&apos;ll design the right lithium-compatible, monitored charging path.
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
