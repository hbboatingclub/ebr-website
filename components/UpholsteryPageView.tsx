import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import { ebrImage } from '@/lib/mediaPaths';
import {
  upholsteryComfort,
  upholsteryCraftsmanship,
  upholsteryFaqs,
  upholsteryGallery,
  upholsteryOptions,
  upholsteryProcess,
  upholsteryUpgrades,
} from '@/lib/upholsteryContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function UpholsteryCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Start Interior Refresh
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function UpholsteryPageView() {
  return (
    <main className="upholstery-premium">
      {/* 1. Hero */}
      <section className="upholstery-premium-hero">
        <div className="upholstery-premium-hero__image">
          <Image
            src={ebrImage('cushions', 'premium-duffy-cushion-upholstery-hero.jpg')}
            alt="Premium Duffy cream cushions and marine upholstery — interior seating with helm detail"
            fill
            priority
            className="upholstery-premium-hero__photo object-cover"
            style={{ objectPosition: '58% 52%' }}
            sizes="100vw"
          />
        </div>
        <div className="upholstery-premium-hero__scrim" aria-hidden />
        <div className="upholstery-premium-hero__scrim-left" aria-hidden />
        <div className="upholstery-premium-hero__warmth" aria-hidden />
        <div className="upholstery-premium-hero__vignette" aria-hidden />
        <div className="container-site upholstery-premium-hero__content">
          <Link
            href="/services"
            className="upholstery-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero upholstery-premium-hero__eyebrow block">Luxury Interior Refresh</span>
          <ServiceHeroTitle
            className="upholstery-premium-hero__title"
            title="Premium Duffy Cushions & Marine Upholstery"
          />
          <p className="upholstery-premium-hero__lead">
            Upgrade worn cushions, faded vinyl, and tired seating with premium marine upholstery designed for comfort, durability, and a better day on the harbor.
          </p>
          <p className="upholstery-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/90">
            Cushions · Marine upholstery · Seating comfort · Premium materials · Clean interior finish
          </p>
          <UpholsteryCtaButtons className="upholstery-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Interior upgrade */}
      <section className="upholstery-premium-upgrade upholstery-premium-section upholstery-premium-section--upgrade">
        <div className="upholstery-premium-upgrade__fade-in" aria-hidden />
        <div className="upholstery-premium-upgrade__glow" aria-hidden />
        <div className="container-site relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
            <span className="teal-rule mx-auto" />
            <h2 className="upholstery-premium-heading text-navy">Interior Upgrade</h2>
            <p className="upholstery-premium-lead text-gray-600 mt-5 mx-auto max-w-xl">
              Soft luxury transformations — from tired seating to a refined harbor lounge you want to share.
            </p>
          </div>
          <div className="upholstery-premium-upgrade-grid">
            {upholsteryUpgrades.map((item) => (
              <div key={item.before} className="upholstery-premium-upgrade-card">
                <div className="upholstery-premium-upgrade-card__before">
                  <span className="upholstery-premium-upgrade-card__label">Before</span>
                  <p className="upholstery-premium-upgrade-card__text">{item.before}</p>
                </div>
                <span className="upholstery-premium-upgrade-card__arrow" aria-hidden />
                <div className="upholstery-premium-upgrade-card__after">
                  <span className="upholstery-premium-upgrade-card__label upholstery-premium-upgrade-card__label--after">
                    After
                  </span>
                  <p className="upholstery-premium-upgrade-card__text upholstery-premium-upgrade-card__text--after">
                    {item.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="upholstery-premium-upgrade__fade-out" aria-hidden />
      </section>

      {/* 3. Craftsmanship */}
      <section className="upholstery-premium-light upholstery-premium-section upholstery-premium-section--ivory">
        <div className="upholstery-premium-light__fade-in" aria-hidden />
        <div className="upholstery-premium-light__texture" aria-hidden />
        <div className="upholstery-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="upholstery-premium-editorial">
            <div className="upholstery-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="upholstery-premium-heading text-navy">{upholsteryCraftsmanship.title}</h2>
            </div>
            <div className="upholstery-premium-editorial__body">
              {upholsteryCraftsmanship.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="upholstery-premium-pillars-panel mt-10 md:mt-12">
            <div {...serviceCardGridProps('upholstery-premium-pillars-grid', upholsteryCraftsmanship.pillars.length)}>
              {upholsteryCraftsmanship.pillars.map((pillar) => (
                <div key={pillar} className="upholstery-premium-pillar">
                  <span className="w-1 h-1 rounded-full bg-teal/80 flex-shrink-0" aria-hidden />
                  <span className="upholstery-premium-pillar__label">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="upholstery-premium-light__fade-out" aria-hidden />
      </section>

      {/* 4. Process */}
      <section className="upholstery-premium-process-wrap upholstery-premium-section">
        <div className="upholstery-premium-process-wrap__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="teal-rule mx-auto" />
            <h2 className="upholstery-premium-heading text-navy">Our Upholstery Process</h2>
          </div>
          <div className="upholstery-premium-process-grid">
            {upholsteryProcess.map((step) => (
              <div key={step.step} className="upholstery-premium-process-card">
                <span className="upholstery-premium-process-card__step">{step.step}</span>
                <h3 className="upholstery-premium-process-card__title">{step.title}</h3>
                <p className="upholstery-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Upholstery options */}
      <section className="upholstery-premium-options upholstery-premium-section upholstery-premium-section--options">
        <div className="upholstery-premium-options__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="upholstery-premium-heading text-navy">Upholstery Options</h2>
            <p className="upholstery-premium-lead text-gray-600 mt-5 max-w-xl">
              From single cushion recovery to full lounge restoration — scoped with marine-grade materials and craftsmanship.
            </p>
          </div>
          <div {...serviceCardGridProps('upholstery-premium-options-grid', upholsteryOptions.length)}>
            {upholsteryOptions.map((option) => (
              <div key={option.title} className="upholstery-premium-option-card">
                <h3 className="upholstery-premium-option-card__title">{option.title}</h3>
                <p className="upholstery-premium-option-card__text">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Luxury comfort band */}
      <section className="upholstery-premium-comfort upholstery-premium-section upholstery-premium-section--comfort">
        <div className="upholstery-premium-comfort__fade-in" aria-hidden />
        <div className="upholstery-premium-comfort__glow" aria-hidden />
        <div className="upholstery-premium-comfort__warmth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="label-hero block mb-4">Luxury Comfort</span>
            <h2 className="upholstery-premium-heading text-softwhite">
              A Better Lounge on the Water
            </h2>
            <p className="upholstery-premium-lead text-white/[0.78] mt-5 mx-auto max-w-xl">
              Seating that invites longer harbor days — cleaner, more comfortable, and finished to marine standards.
            </p>
          </div>
          <div className="upholstery-premium-comfort-grid">
            {upholsteryComfort.map((item) => (
              <div key={item.label} className="upholstery-premium-comfort-card">
                <span className="upholstery-premium-comfort-card__label">{item.label}</span>
                <span className="upholstery-premium-comfort-card__value">{item.value}</span>
                <p className="upholstery-premium-comfort-card__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="upholstery-premium-comfort__fade-out" aria-hidden />
      </section>

      {/* 7. Gallery */}
      <section className="upholstery-premium-gallery upholstery-premium-section upholstery-premium-section--gallery">
        <div className="upholstery-premium-gallery__fade-in" aria-hidden />
        <div className="upholstery-premium-gallery__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="upholstery-premium-gallery__intro mb-9 md:mb-12">
            <span className="label-hero block mb-4 text-navy/85">Interior Craftsmanship</span>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">
              Cushions · Marine upholstery · Finished lounge
            </p>
          </div>
          <div className="upholstery-premium-gallery__strip upholstery-premium-gallery__strip--duo">
            {upholsteryGallery.map((img) => (
              <div key={img.src} className="upholstery-premium-gallery-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="upholstery-premium-gallery-card__photo object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="upholstery-premium-gallery-card__overlay" aria-hidden />
                <div className="upholstery-premium-gallery-card__warmth" aria-hidden />
                <p className="upholstery-premium-gallery-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="upholstery-premium-gallery__fade-out" aria-hidden />
      </section>

      {/* 8. FAQ */}
      <section className="upholstery-premium-light upholstery-premium-section upholstery-premium-section--faq">
        <div className="upholstery-premium-light__fade-in" aria-hidden />
        <div className="upholstery-premium-light__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="upholstery-premium-heading text-navy">Upholstery FAQs</h2>
          </div>
          <div className="upholstery-premium-faq-list">
            {upholsteryFaqs.map((faq) => (
              <details key={faq.question} className="upholstery-premium-faq group">
                <summary className="upholstery-premium-faq__question">
                  {faq.question}
                  <span className="upholstery-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="upholstery-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="request" className="section-cta-final upholstery-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Start Interior Refresh</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Ready to refresh your Duffy interior?
              </h2>
              <p className="section-cta-final__lead">
                Tell us about your cushions and seating — we&apos;ll outline materials, comfort upgrades, and a craftsmanship plan for your harbor lounge.
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
