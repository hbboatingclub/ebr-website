import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  bottomPaintCoatings,
  bottomPaintFaqs,
  bottomPaintGallery,
  bottomPaintHero,
  bottomPaintPerformance,
  bottomPaintPrep,
  bottomPaintProcess,
  bottomPaintWhyMatters,
} from '@/lib/bottomPaintContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function BottomPaintCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Schedule Bottom Paint
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function BottomPaintPageView() {
  return (
    <main className="bottom-premium">
      {/* 1. Hero */}
      <section className="bottom-premium-hero">
        <div className="bottom-premium-hero__image">
          <Image
            src={bottomPaintHero.src}
            alt={bottomPaintHero.alt}
            fill
            priority
            className="bottom-premium-hero__photo object-cover"
            style={{ objectPosition: bottomPaintHero.position }}
            sizes="100vw"
          />
        </div>
        <div className="bottom-premium-hero__scrim" aria-hidden />
        <div className="bottom-premium-hero__scrim-left" aria-hidden />
        <div className="bottom-premium-hero__depth" aria-hidden />
        <div className="bottom-premium-hero__water" aria-hidden />
        <div className="bottom-premium-hero__vignette" aria-hidden />
        <div className="container-site bottom-premium-hero__content">
          <Link
            href="/services"
            className="bottom-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero bottom-premium-hero__eyebrow block">Premium Hull Protection</span>
          <ServiceHeroTitle
            className="bottom-premium-hero__title"
            title="Bottom Paint & Hull Protection for Duffy Boats"
          />
          <p className="bottom-premium-hero__lead">
            Premium bottom paint, hull prep, and marine coatings for Duffy and electric harbor boats — marine growth prevention, smoother operation, and long-term underwater protection. Protect your boat below the waterline.
          </p>
          <p className="bottom-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/90">
            Bottom paint · Hull protection · Marine growth prevention · Efficiency · Long-term hull care
          </p>
          <BottomPaintCtaButtons className="bottom-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Why bottom paint matters */}
      <section className="bottom-premium-dark bottom-premium-section bottom-premium-section--why">
        <div className="bottom-premium-section__fade-in" aria-hidden />
        <div className="bottom-premium-dark__glow" aria-hidden />
        <div className="bottom-premium-dark__depth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg">
            <span className="teal-rule" />
            <h2 className="bottom-premium-heading text-softwhite">Why Bottom Paint Matters</h2>
            <p className="bottom-premium-lead text-white/[0.72] mt-5">
              Below the waterline is where efficiency, protection, and pride of ownership meet — premium coatings executed with yacht-yard discipline.
            </p>
          </div>
          <div {...serviceCardGridProps('bottom-premium-why-grid', bottomPaintWhyMatters.length)}>
            {bottomPaintWhyMatters.map((item) => (
              <div key={item.title} className="bottom-premium-why-card">
                <span className="bottom-premium-why-card__bar" aria-hidden />
                <div>
                  <h3 className="bottom-premium-why-card__title">{item.title}</h3>
                  <p className="bottom-premium-why-card__text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 3. Proper prep */}
      <section className="bottom-premium-light bottom-premium-section bottom-premium-section--ivory">
        <div className="bottom-premium-light__fade-in" aria-hidden />
        <div className="bottom-premium-light__texture" aria-hidden />
        <div className="bottom-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="bottom-premium-editorial">
            <div className="bottom-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="bottom-premium-heading text-navy">{bottomPaintPrep.title}</h2>
            </div>
            <div className="bottom-premium-editorial__body">
              {bottomPaintPrep.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="bottom-premium-pillars-panel mt-10 md:mt-12">
            <div {...serviceCardGridProps('bottom-premium-pillars-grid', bottomPaintPrep.pillars.length)}>
              {bottomPaintPrep.pillars.map((pillar) => (
                <div key={pillar} className="bottom-premium-pillar">
                  <span className="w-1 h-1 rounded-full bg-teal/80 flex-shrink-0" aria-hidden />
                  <span className="bottom-premium-pillar__label">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom-premium-light__fade-out" aria-hidden />
      </section>

      {/* 4. Process timeline */}
      <section className="bottom-premium-dark bottom-premium-section bottom-premium-section--process">
        <div className="bottom-premium-section__fade-in" aria-hidden />
        <div className="bottom-premium-dark__grid" aria-hidden />
        <div className="bottom-premium-dark__glow" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="teal-rule mx-auto" />
            <h2 className="bottom-premium-heading text-softwhite">Our Bottom Paint Process</h2>
          </div>
          <div className="bottom-premium-process-grid">
            {bottomPaintProcess.map((step) => (
              <div key={step.step} className="bottom-premium-process-card">
                <span className="bottom-premium-process-card__step">{step.step}</span>
                <h3 className="bottom-premium-process-card__title">{step.title}</h3>
                <p className="bottom-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 5. Coatings & services */}
      <section className="bottom-premium-light bottom-premium-section bottom-premium-section--coatings">
        <div className="bottom-premium-light__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="bottom-premium-heading text-navy">Coatings &amp; Services</h2>
            <p className="bottom-premium-lead text-gray-600 mt-5 max-w-xl">
              Marine maintenance expertise — from ablative and hard systems to prep, inspection, and seasonal refresh.
            </p>
          </div>
          <div {...serviceCardGridProps('bottom-premium-coatings-grid', bottomPaintCoatings.length)}>
            {bottomPaintCoatings.map((option) => (
              <div key={option.title} className="bottom-premium-coating-card">
                <h3 className="bottom-premium-coating-card__title">{option.title}</h3>
                <p className="bottom-premium-coating-card__text">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-premium-light__fade-out" aria-hidden />
      </section>

      {/* 6. Cleaner hull performance band */}
      <section className="bottom-premium-hull bottom-premium-section bottom-premium-section--hull">
        <div className="bottom-premium-hull__fade-in" aria-hidden />
        <div className="bottom-premium-hull__glow" aria-hidden />
        <div className="bottom-premium-hull__depth" aria-hidden />
        <div className="bottom-premium-hull__current" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="label-hero block mb-4">Hull Performance</span>
            <h2 className="bottom-premium-heading text-softwhite">
              Cleaner Hull. Smoother Operation.
            </h2>
            <p className="bottom-premium-lead text-white/[0.74] mt-5 mx-auto max-w-xl">
              Premium underwater protection that supports efficiency, easier ownership, and a sharper presence in the marina.
            </p>
          </div>
          <div className="bottom-premium-hull-grid">
            {bottomPaintPerformance.map((item) => (
              <div key={item.label} className="bottom-premium-hull-card">
                <span className="bottom-premium-hull-card__label">{item.label}</span>
                <span className="bottom-premium-hull-card__value">{item.value}</span>
                <p className="bottom-premium-hull-card__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-premium-hull__fade-out" aria-hidden />
      </section>

      {/* 7. Gallery */}
      <section className="bottom-premium-gallery bottom-premium-section bottom-premium-section--gallery">
        <div className="bottom-premium-gallery__fade-in" aria-hidden />
        <div className="bottom-premium-gallery__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="bottom-premium-gallery__intro mb-9 md:mb-12">
            <span className="label-hero block mb-4">Marine Yard Craftsmanship</span>
            <p className="font-mono text-[10px] text-white/50 uppercase tracking-[0.2em]">
              Duffy hulls · Prep &amp; coatings · Premium finish
            </p>
          </div>
          <div className="bottom-premium-gallery__strip bottom-premium-gallery__strip--duo">
            {bottomPaintGallery.map((img) => (
              <div key={img.src} className="bottom-premium-gallery-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="bottom-premium-gallery-card__photo object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="bottom-premium-gallery-card__overlay" aria-hidden />
                <div className="bottom-premium-gallery-card__scrim" aria-hidden />
                <p className="bottom-premium-gallery-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-premium-gallery__fade-out" aria-hidden />
      </section>

      {/* 8. FAQ */}
      <section className="bottom-premium-light bottom-premium-section bottom-premium-section--faq">
        <div className="bottom-premium-light__fade-in" aria-hidden />
        <div className="bottom-premium-light__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="bottom-premium-heading text-navy">Bottom Paint FAQs</h2>
          </div>
          <div className="bottom-premium-faq-list">
            {bottomPaintFaqs.map((faq) => (
              <details key={faq.question} className="bottom-premium-faq group">
                <summary className="bottom-premium-faq__question">
                  {faq.question}
                  <span className="bottom-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="bottom-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="request" className="section-cta-final bottom-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Schedule Bottom Paint</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Keep your hull protected and harbor-ready.
              </h2>
              <p className="section-cta-final__lead">
                Tell us about your Duffy and haul-out timing — we&apos;ll outline premium prep, coatings, and relaunch coordination.
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
