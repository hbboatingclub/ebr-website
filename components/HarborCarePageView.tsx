import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  harborCareFaqs,
  harborCareGallery,
  harborCareHero,
  harborCareIncluded,
  harborCareMembership,
  harborCarePeaceOfMind,
  harborCareProcess,
  harborCareWhyEbr,
} from '@/lib/harborCareContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function HarborCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Join Harbor Care
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function HarborCarePageView() {
  return (
    <main className="harbor-premium">
      {/* 1. Hero */}
      <section className="harbor-premium-hero">
        <div className="harbor-premium-hero__image">
          <Image
            src={harborCareHero.src}
            alt={harborCareHero.alt}
            fill
            priority
            className="harbor-premium-hero__photo object-cover"
            style={{ objectPosition: harborCareHero.position }}
            sizes="100vw"
          />
        </div>
        <div className="harbor-premium-hero__scrim" aria-hidden />
        <div className="harbor-premium-hero__scrim-left" aria-hidden />
        <div className="harbor-premium-hero__warmth" aria-hidden />
        <div className="harbor-premium-hero__marina" aria-hidden />
        <div className="harbor-premium-hero__depth" aria-hidden />
        <div className="harbor-premium-hero__vignette" aria-hidden />
        <div className="container-site harbor-premium-hero__content">
          <Link
            href="/services"
            className="harbor-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero harbor-premium-hero__eyebrow block">Concierge Harbor Care</span>
          <ServiceHeroTitle className="harbor-premium-hero__title" title="Harbor Care Program" />
          <p className="harbor-premium-hero__lead">
            White-glove ongoing care for Duffy and electric boat owners — preventative maintenance, dockside service, battery support, and priority scheduling. Keep your Duffy ready for the harbor.
          </p>
          <p className="harbor-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/85">
            Ongoing maintenance · Dockside service · Preventative care · Priority scheduling · Peace of mind
          </p>
          <HarborCtaButtons className="harbor-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. What's included */}
      <section className="harbor-premium-included harbor-premium-section harbor-premium-section--included">
        <div className="harbor-premium-included__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg md:mb-14">
            <span className="teal-rule" />
            <h2 className="harbor-premium-heading text-navy">What&apos;s Included</h2>
            <p className="harbor-premium-lead text-gray-600 mt-5 max-w-xl">
              Ongoing ownership support designed for calm, capable harbor days — not emergency repair chaos.
            </p>
          </div>
          <div {...serviceCardGridProps('harbor-premium-benefits-grid', harborCareIncluded.length)}>
            {harborCareIncluded.map((item) => (
              <div key={item.title} className="harbor-premium-benefit-card">
                <span className="harbor-premium-benefit-card__accent" aria-hidden />
                <h3 className="harbor-premium-benefit-card__title">{item.title}</h3>
                <p className="harbor-premium-benefit-card__text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="harbor-premium-included__fade-out" aria-hidden />
      </section>

      {/* 3. Why Harbor Care */}
      <section className="harbor-premium-light harbor-premium-section harbor-premium-section--ivory">
        <div className="harbor-premium-light__fade-in" aria-hidden />
        <div className="harbor-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="harbor-premium-editorial">
            <div className="harbor-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="harbor-premium-heading text-navy">{harborCareWhyEbr.title}</h2>
            </div>
            <div className="harbor-premium-editorial__body">
              {harborCareWhyEbr.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="harbor-premium-pillars-panel mt-10 md:mt-14">
            <div {...serviceCardGridProps('harbor-premium-pillars-grid', harborCareWhyEbr.pillars.length)}>
              {harborCareWhyEbr.pillars.map((pillar) => (
                <div key={pillar} className="harbor-premium-pillar">
                  <span className="harbor-premium-pillar__dot" aria-hidden />
                  <span className="harbor-premium-pillar__label">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="harbor-premium-process-wrap harbor-premium-section">
        <div className="harbor-premium-process-wrap__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
            <span className="teal-rule mx-auto" />
            <h2 className="harbor-premium-heading text-navy">How the Program Works</h2>
          </div>
          <div className="harbor-premium-process-grid">
            {harborCareProcess.map((step) => (
              <div key={step.step} className="harbor-premium-process-card">
                <span className="harbor-premium-process-card__step">{step.step}</span>
                <h3 className="harbor-premium-process-card__title">{step.title}</h3>
                <p className="harbor-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Membership benefits */}
      <section className="harbor-premium-membership harbor-premium-section harbor-premium-section--membership">
        <div className="harbor-premium-membership__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg">
            <span className="teal-rule" />
            <h2 className="harbor-premium-heading text-navy">Membership Benefits</h2>
            <p className="harbor-premium-lead text-gray-600 mt-5 max-w-xl">
              The privileges of a luxury ownership program — designed for electric harbor life.
            </p>
          </div>
          <div {...serviceCardGridProps('harbor-premium-membership-grid', harborCareMembership.length)}>
            {harborCareMembership.map((benefit) => (
              <div key={benefit.title} className="harbor-premium-membership-card">
                <span className="harbor-premium-membership-card__mark" aria-hidden />
                <h3 className="harbor-premium-membership-card__title">{benefit.title}</h3>
                <p className="harbor-premium-membership-card__text">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Peace of mind */}
      <section className="harbor-premium-peace harbor-premium-section harbor-premium-section--peace">
        <div className="harbor-premium-peace__fade-in" aria-hidden />
        <div className="harbor-premium-peace__marina" aria-hidden />
        <div className="harbor-premium-peace__glow" aria-hidden />
        <div className="harbor-premium-peace__horizon" aria-hidden />
        <div className="harbor-premium-peace__shimmer" aria-hidden />
        <div className="container-site relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
            <span className="label-hero block mb-4">Peace of Mind</span>
            <h2 className="harbor-premium-heading text-softwhite">
              Enjoy the Harbor. We Handle the Rest.
            </h2>
            <p className="harbor-premium-lead text-white/[0.78] mt-5 mx-auto max-w-xl">
              Calm ownership confidence — your boat supported by specialists who know electric harbor life.
            </p>
          </div>
          <div className="harbor-premium-peace-grid">
            {harborCarePeaceOfMind.map((item) => (
              <div key={item.label} className="harbor-premium-peace-card">
                <span className="harbor-premium-peace-card__label">{item.label}</span>
                <span className="harbor-premium-peace-card__value">{item.value}</span>
                <p className="harbor-premium-peace-card__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="harbor-premium-peace__fade-out" aria-hidden />
      </section>

      {/* 7. Gallery */}
      <section className="harbor-premium-gallery harbor-premium-section harbor-premium-section--gallery">
        <div className="harbor-premium-gallery__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro !max-w-none">
            <span className="label-hero block mb-4 text-navy/80">Harbor Life</span>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">
              Ownership · Dockside service · Premium care
            </p>
          </div>
          <div className="harbor-premium-gallery__strip harbor-premium-gallery__strip--duo">
            {harborCareGallery.map((img) => (
              <div key={img.src} className="harbor-premium-gallery-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="harbor-premium-gallery-card__overlay" />
                <p className="harbor-premium-gallery-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="harbor-premium-light harbor-premium-section harbor-premium-section--faq">
        <div className="harbor-premium-light__fade-in" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="harbor-premium-heading text-navy">Harbor Care FAQs</h2>
          </div>
          <div className="harbor-premium-faq-list">
            {harborCareFaqs.map((faq) => (
              <details key={faq.question} className="harbor-premium-faq group">
                <summary className="harbor-premium-faq__question">
                  {faq.question}
                  <span className="harbor-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="harbor-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="request" className="section-cta-final harbor-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Join Harbor Care</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Enjoy your boat. We&apos;ll help handle the rest.
              </h2>
              <p className="section-cta-final__lead">
                Tell us about your Duffy and how you use the harbor — we&apos;ll outline a calm, capable care program built around your lifestyle.
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
