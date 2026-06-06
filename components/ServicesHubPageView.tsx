import Link from 'next/link';
import Image from 'next/image';
import { SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  servicesHubAreas,
  servicesHubChapters,
  servicesHubCoverageAreas,
  servicesHubFeaturedSupporting,
  servicesHubFlagship,
  servicesHubFinalCta,
  servicesHubHero,
  servicesHubTrustItems,
  servicesHubWhy,
  type ServicesHubFeaturedItem,
} from '@/lib/servicesHubContent';

function FeaturedCard({
  svc,
  className = '',
  sizes = '100vw',
}: {
  svc: ServicesHubFeaturedItem;
  className?: string;
  sizes?: string;
}) {
  return (
    <Link href={svc.href} className={`service-card-cinematic group ${className}`}>
      <Image
        src={svc.image}
        alt={svc.imageAlt}
        fill
        className="service-card-cinematic__image"
        style={{ objectPosition: svc.imagePosition }}
        sizes={sizes}
      />
      <div className="services-hub-featured-card__overlay" aria-hidden />
      <div className="service-card-cinematic__content">
        <h3 className="service-card-cinematic__title">{svc.title}</h3>
        <p className="service-card-cinematic__description">{svc.description}</p>
        <span className="service-card-cinematic__link">
          Learn More
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

export default function ServicesHubPageView() {
  return (
    <main className="services-hub">
      {/* Hero */}
      <section className="services-hub-hero">
        <div className="services-hub-hero__image">
          <Image
            src={servicesHubHero.src}
            alt={servicesHubHero.alt}
            fill
            priority
            className="services-hub-hero__photo object-cover"
            sizes="100vw"
          />
        </div>
        <div className="services-hub-hero__scrim" aria-hidden />
        <div className="services-hub-hero__scrim-left" aria-hidden />
        <div className="services-hub-hero__vignette" aria-hidden />
        <div className="container-site services-hub-hero__content">
          <Link
            href="/"
            className="services-hub-hero__back font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-teal transition-colors duration-300"
          >
            ← Home
          </Link>
          <span className="label-hero services-hub-hero__eyebrow block">EBR Services</span>
          <h1 className="services-hub-hero__title">Premium Electric Boat Services</h1>
          <p className="services-hub-hero__lead">
            Southern California&apos;s specialists in Duffy boats, electric marine systems, restoration,
            transport, and harbor care.
          </p>
          <div className="services-hub-hero__ctas">
            <Link href="/contact" className="btn-primary">
              Request Service
            </Link>
            <a href={SITE_PHONE_TEL} className="btn-outline">
              Call / Text Now
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="services-hub-trust" aria-label="EBR service credentials">
        <div className="container-site">
          <ul className="services-hub-trust__list">
            {servicesHubTrustItems.map((item, index) => (
              <li key={item} className="services-hub-trust__item">
                {index > 0 && <span className="services-hub-trust__divider" aria-hidden />}
                <span className="services-hub-trust__mark" aria-hidden>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 1v8M1 5h8"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="services-hub-trust__label">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured services */}
      <section className="services-hub-featured">
        <div className="services-hub-featured__wash" aria-hidden />
        <div className="container-site relative z-10">
          <div className="services-hub-featured__intro">
            <span className="label-hero block mb-4">Signature Programs</span>
            <h2 className="services-hub-featured__heading">Featured Services</h2>
            <p className="services-hub-featured__lead">
              The programs owners rely on most — dockside care, transport, restoration, and mobile
              specialist support.
            </p>
          </div>
          <div className="services-hub-featured__layout">
            <FeaturedCard svc={servicesHubFlagship} className="services-hub-featured__flagship" />
            <div className="services-hub-featured__supporting">
              {servicesHubFeaturedSupporting.map((svc) => (
                <FeaturedCard
                  key={svc.href}
                  svc={svc}
                  className="services-hub-featured__support"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why EBR */}
      <section className="services-hub-why" aria-labelledby="services-hub-why-heading">
        <div className="services-hub-why__glow" aria-hidden />
        <div className="container-site relative z-10">
          <div className="services-hub-why__intro">
            <span className="teal-rule" />
            <h2 id="services-hub-why-heading" className="services-hub-why__title">
              {servicesHubWhy.title}
            </h2>
            <p className="services-hub-why__subtitle">{servicesHubWhy.subtitle}</p>
          </div>
          <div className="services-hub-why__grid">
            {servicesHubWhy.cards.map((card) => (
              <div key={card.title} className="services-hub-why__card">
                <span className="services-hub-why__card-rule" aria-hidden />
                <h3 className="services-hub-why__card-title">{card.title}</h3>
                <p className="services-hub-why__card-text">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service chapters */}
      <div className="services-hub-chapters">
        <div className="services-hub-chapters__intro">
          <div className="container-site services-hub-chapters__intro-inner">
            <span className="services-hub-chapters__eyebrow">Full Capability</span>
            <span className="services-hub-chapters__rule" aria-hidden />
            <h2 className="services-hub-chapters__heading">Explore Every Service</h2>
            <p className="services-hub-chapters__lead">
              Four disciplines — each with dedicated photography, context, and a clear path to the
              right specialist work.
            </p>
          </div>
        </div>

        {servicesHubChapters.map((chapter) => (
          <section
            key={chapter.id}
            id={`services-hub-${chapter.id}`}
            className={`services-hub-chapter services-hub-chapter--${chapter.tone} services-hub-chapter--image-${chapter.imageSide}`}
            aria-labelledby={`chapter-${chapter.id}`}
          >
            {chapter.tone === 'light' && <div className="services-hub-chapter__texture" aria-hidden />}
            {chapter.tone === 'dark' && <div className="services-hub-chapter__glow" aria-hidden />}
            <div className="container-site relative z-10">
              <div className="services-hub-chapter__inner">
                <div className="services-hub-chapter__media">
                  <Image
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    fill
                    className="services-hub-chapter__photo object-cover"
                    style={{ objectPosition: chapter.imagePosition }}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="services-hub-chapter__media-scrim" aria-hidden />
                </div>
                <div className="services-hub-chapter__body">
                  <span className="services-hub-chapter__eyebrow">Service Chapter</span>
                  <h3 id={`chapter-${chapter.id}`} className="services-hub-chapter__title">
                    {chapter.label}
                  </h3>
                  <span className="services-hub-chapter__rule" aria-hidden />
                  <p className="services-hub-chapter__description">{chapter.description}</p>
                  <ul className="services-hub-chapter__tiles">
                    {chapter.services.map((svc) => (
                      <li key={svc.href}>
                        <Link
                          href={svc.href}
                          className={`services-hub-tile services-hub-tile--${chapter.tone} group`}
                        >
                          <span className="services-hub-tile__title">{svc.title}</span>
                          <p className="services-hub-tile__text">{svc.description}</p>
                          <span className="services-hub-tile__link">
                            Learn More
                            <span aria-hidden>→</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Concierge */}
      <section className="services-hub-concierge">
        <div className="container-site relative z-10">
          <div className="services-hub-concierge__panel">
            <span className="label-hero block mb-4 text-navy/80">Concierge Guidance</span>
            <h2 className="services-hub-concierge__heading">Not sure where to start?</h2>
            <p className="services-hub-concierge__copy">
              Tell us what your boat is doing and we&apos;ll point you toward the right repair, upgrade,
              or maintenance plan.
            </p>
            <Link href="/contact" className="btn-primary services-hub-concierge__cta">
              Request Service
            </Link>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="services-hub-areas" aria-labelledby="services-hub-areas-heading">
        <div className="services-hub-areas__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="services-hub-areas__intro">
            <span className="teal-rule mx-auto md:mx-0" />
            <h2 id="services-hub-areas-heading" className="services-hub-areas__title">
              {servicesHubAreas.title}
            </h2>
            <p className="services-hub-areas__lead">{servicesHubAreas.description}</p>
          </div>
          <div className="services-hub-areas__tags">
            {servicesHubCoverageAreas.map((area) => (
              <Link key={area.href} href={area.href} className="services-hub-areas__tag">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final services-hub-cta">
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="services-hub-cta__copy mx-auto text-center max-w-2xl">
            <span className="label-hero mb-4 block">Concierge Close</span>
            <span className="teal-rule mx-auto" />
            <h2 className="section-cta-final__heading">{servicesHubFinalCta.title}</h2>
            <p className="section-cta-final__lead mx-auto">{servicesHubFinalCta.lead}</p>
            <div className="services-hub-cta__actions">
              <Link href="/contact" className="btn-primary services-hub-cta__btn">
                Request Service
              </Link>
              <a href={SITE_PHONE_TEL} className="btn-outline services-hub-cta__btn">
                Call / Text Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
