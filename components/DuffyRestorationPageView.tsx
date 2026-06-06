import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  restorationCraftsmanship,
  restorationFaqs,
  restorationFeatured,
  restorationGallery,
  restorationProcess,
  restorationServices,
  restorationTransformations,
} from '@/lib/duffyRestorationContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

function RestorationCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Start Your Restoration
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

export default function DuffyRestorationPageView() {
  return (
    <main className="restoration-premium">
      {/* 1. Hero */}
      <section className="restoration-premium-hero">
        <div className="restoration-premium-hero__image">
          <Image
            src="/images/Boat%20Restoration/luxury-electric-boat-restoration-newport-harbor.JPG"
            alt="Premium Duffy boat restoration and luxury marine finishing by EBR in Southern California"
            fill
            priority
            className="restoration-premium-hero__photo object-cover"
            style={{ objectPosition: 'center 42%' }}
            sizes="100vw"
          />
        </div>
        <div className="restoration-premium-hero__scrim" aria-hidden />
        <div className="restoration-premium-hero__scrim-left" aria-hidden />
        <div className="restoration-premium-hero__warmth" aria-hidden />
        <div className="restoration-premium-hero__vignette" aria-hidden />
        <div className="container-site restoration-premium-hero__content">
          <Link
            href="/services"
            className="restoration-premium-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero restoration-premium-hero__eyebrow block">Luxury Duffy Restoration</span>
          <ServiceHeroTitle className="restoration-premium-hero__title" title="Premium Duffy Boat Restoration" />
          <p className="restoration-premium-hero__lead">
            From faded gelcoat and worn upholstery to complete electrical modernization, EBR restores Duffy boats with the precision, finish, and polish of a luxury marine brand.
          </p>
          <p className="restoration-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/90">
            Full restoration · Premium finishes · Modern electrical · Southern California craftsmanship
          </p>
          <RestorationCtaButtons className="restoration-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Transformation */}
      <section className="restoration-premium-transform restoration-premium-section restoration-premium-section--transform">
        <div className="restoration-premium-transform__fade-in" aria-hidden />
        <div className="restoration-premium-transform__glow" aria-hidden />
        <div className="container-site relative z-10">
          <div className="restoration-premium-intro max-w-2xl mx-auto text-center">
            <span className="teal-rule mx-auto" />
            <h2 className="restoration-premium-heading text-softwhite">From Tired to Turnkey</h2>
            <p className="restoration-premium-lead mt-5 mx-auto max-w-xl">
              A complete Duffy transformation — cosmetic refinement and modern systems, executed as one luxury restoration.
            </p>
          </div>
          <div className="restoration-premium-transform-grid">
            {restorationTransformations.map((item) => (
              <div key={item.before} className="restoration-premium-transform-card">
                <div className="restoration-premium-transform-card__before">
                  <span className="restoration-premium-transform-card__label">Before</span>
                  <p className="restoration-premium-transform-card__text">{item.before}</p>
                </div>
                <span className="restoration-premium-transform-card__arrow" aria-hidden />
                <div className="restoration-premium-transform-card__after">
                  <span className="restoration-premium-transform-card__label restoration-premium-transform-card__label--after">
                    After
                  </span>
                  <p className="restoration-premium-transform-card__text restoration-premium-transform-card__text--after">
                    {item.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="restoration-premium-transform__fade-out" aria-hidden />
      </section>

      {/* 3. Craftsmanship */}
      <section className="restoration-premium-light restoration-premium-section restoration-premium-section--ivory">
        <div className="restoration-premium-light__fade-in" aria-hidden />
        <div className="restoration-premium-light__texture" aria-hidden />
        <div className="restoration-premium-light__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="restoration-premium-editorial">
            <div className="restoration-premium-editorial__heading">
              <span className="teal-rule" />
              <h2 className="restoration-premium-heading text-navy">{restorationCraftsmanship.title}</h2>
            </div>
            <div className="restoration-premium-editorial__body">
              {restorationCraftsmanship.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="restoration-premium-pillars-panel mt-10 md:mt-12">
            <div {...serviceCardGridProps('restoration-premium-pillars-grid', restorationCraftsmanship.pillars.length)}>
              {restorationCraftsmanship.pillars.map((pillar) => (
                <div key={pillar} className="restoration-premium-pillar">
                  <span className="restoration-premium-pillar__mark" aria-hidden />
                  <span className="restoration-premium-pillar__label">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="restoration-premium-light__fade-out" aria-hidden />
      </section>

      {/* 4. Process */}
      <section className="restoration-premium-dark restoration-premium-section restoration-premium-section--process">
        <div className="restoration-premium-section__fade-in" aria-hidden />
        <div className="restoration-premium-dark__glow" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="teal-rule mx-auto" />
            <h2 className="restoration-premium-heading text-softwhite">Our Restoration Process</h2>
          </div>
          <div className="restoration-premium-process-grid">
            {restorationProcess.map((step) => (
              <div key={step.step} className="restoration-premium-process-card">
                <span className="restoration-premium-process-card__step">{step.step}</span>
                <h3 className="restoration-premium-process-card__title">{step.title}</h3>
                <p className="restoration-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="restoration-premium-dark__fade-out" aria-hidden />
      </section>

      {/* 5. Services included */}
      <section className="restoration-premium-light restoration-premium-section restoration-premium-section--menu">
        <div className="restoration-premium-light__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="restoration-premium-heading text-navy">Restoration Services Included</h2>
            <p className="restoration-premium-lead text-gray-600 mt-5 max-w-xl">
              A luxury restoration menu — executed in-house with electrical expertise other shops cannot match.
            </p>
          </div>
          <div {...serviceCardGridProps('restoration-premium-menu-grid', restorationServices.length)}>
            {restorationServices.map((service) => (
              <div key={service.title} className="restoration-premium-menu-card">
                <h3 className="restoration-premium-menu-card__title">{service.title}</h3>
                <p className="restoration-premium-menu-card__text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="restoration-premium-light__fade-out" aria-hidden />
      </section>

      {/* 6. Featured restoration band */}
      <section className="restoration-premium-featured restoration-premium-section restoration-premium-section--featured">
        <div className="restoration-premium-featured__fade-in" aria-hidden />
        <div className="restoration-premium-featured__glow" aria-hidden />
        <div className="restoration-premium-featured__warmth" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro-lg premium-intro-lg--center">
            <span className="label-hero block mb-4">Restoration Detail</span>
            <h2 className="restoration-premium-heading text-softwhite">
              Better Than Original
            </h2>
            <p className="restoration-premium-lead text-white/[0.7] mt-5 mx-auto max-w-xl">
              Every surface, system, and finish reflects the discipline of a luxury Duffy restoration studio.
            </p>
          </div>
          <div className="restoration-premium-featured-grid">
            {restorationFeatured.map((img) => (
              <div key={img.src} className="restoration-premium-featured-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="restoration-premium-featured-card__overlay" />
                <p className="restoration-premium-featured-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="restoration-premium-featured__fade-out" aria-hidden />
      </section>

      {/* 7. Gallery */}
      <section className="restoration-premium-gallery restoration-premium-section restoration-premium-section--gallery">
        <div className="restoration-premium-gallery__fade-in" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro !max-w-none">
            <span className="label-hero block mb-4">Craftsmanship Gallery</span>
            <p className="font-mono text-[10px] text-white/45 uppercase tracking-[0.2em]">
              Finish quality · Interior · Hull · Restoration work
            </p>
          </div>
          <div className="restoration-premium-gallery__strip restoration-premium-gallery__strip--duo">
            {restorationGallery.map((img) => (
              <div key={img.src} className="restoration-premium-gallery-card group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition: img.position }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="restoration-premium-gallery-card__overlay" />
                <p className="restoration-premium-gallery-card__caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="restoration-premium-gallery__fade-out" aria-hidden />
      </section>

      {/* 8. FAQ */}
      <section className="restoration-premium-light restoration-premium-section restoration-premium-section--faq">
        <div className="restoration-premium-light__fade-in" aria-hidden />
        <div className="restoration-premium-light__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="restoration-premium-heading text-navy">Duffy Restoration FAQs</h2>
          </div>
          <div className="restoration-premium-faq-list">
            {restorationFaqs.map((faq) => (
              <details key={faq.question} className="restoration-premium-faq group">
                <summary className="restoration-premium-faq__question">
                  {faq.question}
                  <span className="restoration-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="restoration-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="request" className="section-cta-final restoration-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Start Your Restoration</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">
                Ready to restore your Duffy to better than original?
              </h2>
              <p className="section-cta-final__lead">
                Tell us about your boat — we&apos;ll outline a luxury restoration path with the finish, systems, and craftsmanship your Duffy deserves.
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
