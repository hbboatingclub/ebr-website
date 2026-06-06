import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity.client';
import {
  getServiceAreaCategories,
  getServiceAreaCategoriesLead,
  getServiceAreaContent,
  getServiceAreaNearbyLinks,
  getServiceAreaWhyTitle,
  SERVICE_AREA_HERO_TRUST,
  SERVICE_AREA_WHY_CARDS,
  type ServiceAreaSlug,
} from '@/lib/serviceAreaContent';
import { SITE_PHONE_SCHEMA, SITE_PHONE_TEL } from '@/lib/siteContact';

interface SanityLocation {
  locationName?: string;
  introCopy?: string;
  heroImage?: { asset?: { _ref?: string }; alt?: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localContent?: any;
}

interface Props {
  slug: ServiceAreaSlug;
  location?: SanityLocation | null;
}

export default function ServiceAreaPageView({ slug, location }: Props) {
  const content = getServiceAreaContent(slug);
  if (!content) return null;

  const name = location?.locationName || content.name;
  const heroLead = location?.introCopy || content.heroLead;
  const heroImageSrc = location?.heroImage?.asset
    ? urlFor(location.heroImage.asset).width(1600).height(900).url()
    : content.heroImage;
  const heroImageAlt = location?.heroImage?.alt || content.heroImageAlt;
  const whyTitle = getServiceAreaWhyTitle(name);
  const categories = getServiceAreaCategories(slug);
  const categoriesLead = getServiceAreaCategoriesLead(slug, name);
  const nearbyAreas = getServiceAreaNearbyLinks(slug);

  return (
    <main className={`service-area-premium service-area-premium--${slug}`}>
      {/* Hero */}
      <section className="service-area-premium-hero">
        <div className="service-area-premium-hero__image">
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            priority
            className="service-area-premium-hero__photo object-cover"
            style={{ objectPosition: content.heroImagePosition }}
            sizes="100vw"
          />
        </div>
        <div className="service-area-premium-hero__scrim" aria-hidden />
        <div className="service-area-premium-hero__scrim-left" aria-hidden />
        <div className="service-area-premium-hero__vignette" aria-hidden />
        <div className="container-site service-area-premium-hero__content">
          <span className="label-hero service-area-premium-hero__eyebrow block">Service Area</span>
          <h1 className="service-area-premium-hero__title">{content.heroTitle}</h1>
          <p className="service-area-premium-hero__lead">{heroLead}</p>
          <div className="service-area-premium-hero__ctas">
            <Link href="/contact" className="btn-primary">
              Request Service
            </Link>
            <a href={SITE_PHONE_TEL} className="btn-outline">
              Call / Text Now
            </a>
          </div>
          <ul className="service-area-premium-hero__trust" aria-label="EBR service credentials">
            {SERVICE_AREA_HERO_TRUST.map((item) => (
              <li key={item} className="service-area-premium-hero__trust-item">
                <span className="service-area-premium-hero__trust-mark" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why local owners choose EBR */}
      <section className="service-area-premium-why" aria-labelledby="service-area-why-heading">
        <div className="container-site relative z-10">
          <div className="service-area-premium-why__intro">
            <span className="teal-rule" />
            <h2 id="service-area-why-heading" className="service-area-premium-why__title">
              {whyTitle}
            </h2>
          </div>
          <div className="service-area-premium-why__grid">
            {SERVICE_AREA_WHY_CARDS.map((card) => (
              <div key={card.title} className="service-area-premium-why__card">
                <span className="service-area-premium-why__card-rule" aria-hidden />
                <h3 className="service-area-premium-why__card-title">{card.title}</h3>
                <p className="service-area-premium-why__card-text">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local story — editorial */}
      <section className="service-area-premium-story">
        <div className="service-area-premium-story__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="service-area-premium-story__grid">
            <div className="service-area-premium-story__media">
              <Image
                src={content.localStoryImage}
                alt={content.localStoryImageAlt}
                fill
                className="service-area-premium-story__photo object-cover"
                style={{ objectPosition: content.localStoryImagePosition }}
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
              <div className="service-area-premium-story__media-scrim" aria-hidden />
            </div>
            <div className="service-area-premium-story__body">
              <span className="service-area-premium-story__eyebrow">Local Expertise</span>
              <h2 className="service-area-premium-story__heading">{content.localIntroHeading}</h2>
              <div className="service-area-premium-story__prose">
                {content.localIntroBody.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange County hub links */}
      {content.areaLinks && content.areaLinks.length > 0 && (
        <section className="service-area-premium-section service-area-premium-section--dark">
          <div className="container-site relative z-10">
            <div className="service-area-premium-intro service-area-premium-intro--center">
              <span className="teal-rule mx-auto" />
              <h2 className="service-area-premium-heading service-area-premium-heading--light">
                Orange County Service Areas
              </h2>
              <p className="service-area-premium-lead service-area-premium-lead--light mx-auto max-w-xl">
                Select your harbor or community for localized service details and recommended programs.
              </p>
            </div>
            <div className="service-area-premium-area-grid">
              {content.areaLinks.map((area) => (
                <Link key={area.href} href={area.href} className="service-area-premium-area-card group">
                  <h3 className="service-area-premium-area-card__title">{area.name}</h3>
                  <p className="service-area-premium-area-card__text">{area.description}</p>
                  <span className="service-area-premium-area-card__link">
                    View area
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Optional Sanity local content */}
      {location?.localContent && (
        <section className="service-area-premium-section service-area-premium-section--light">
          <div className="container-site relative z-10 max-w-3xl">
            <div className="service-area-premium-cms prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy">
              <PortableText value={location.localContent} />
            </div>
          </div>
        </section>
      )}

      {/* Service categories */}
      <div className="service-area-premium-categories">
        <div className="service-area-premium-categories__intro">
          <div className="container-site service-area-premium-categories__intro-inner">
            <span className="service-area-premium-categories__eyebrow">Full Capability</span>
            <span className="service-area-premium-categories__rule" aria-hidden />
            <h2 className="service-area-premium-categories__heading">Service Categories</h2>
            <p className="service-area-premium-categories__lead">{categoriesLead}</p>
          </div>
        </div>

        {categories.map((chapter) => (
          <section
            key={chapter.id}
            id={`service-area-${chapter.id}`}
            className={`service-area-premium-chapter service-area-premium-chapter--${chapter.tone} service-area-premium-chapter--image-${chapter.imageSide}`}
            aria-labelledby={`service-area-chapter-${chapter.id}`}
          >
            {chapter.tone === 'light' && (
              <div className="service-area-premium-chapter__texture" aria-hidden />
            )}
            <div className="container-site relative z-10">
              <div className="service-area-premium-chapter__inner">
                <div className="service-area-premium-chapter__media">
                  <Image
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    fill
                    className="service-area-premium-chapter__photo object-cover"
                    style={{ objectPosition: chapter.imagePosition }}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="service-area-premium-chapter__media-scrim" aria-hidden />
                </div>
                <div className="service-area-premium-chapter__body">
                  <span className="service-area-premium-chapter__eyebrow">Service Category</span>
                  <h3
                    id={`service-area-chapter-${chapter.id}`}
                    className="service-area-premium-chapter__title"
                  >
                    {chapter.label}
                  </h3>
                  <span className="service-area-premium-chapter__rule" aria-hidden />
                  <p className="service-area-premium-chapter__description">{chapter.description}</p>
                  <ul className="service-area-premium-chapter__tiles">
                    {chapter.services.map((svc) => (
                      <li key={svc.href}>
                        <Link
                          href={svc.href}
                          className={`service-area-premium-tile service-area-premium-tile--${chapter.tone} group`}
                        >
                          <span className="service-area-premium-tile__title">{svc.title}</span>
                          <p className="service-area-premium-tile__text">{svc.description}</p>
                          <span className="service-area-premium-tile__link">
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

      {/* Final CTA */}
      <section className="section-cta-final service-area-premium-cta">
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="service-area-premium-cta__copy mx-auto text-center max-w-2xl">
            <span className="label-hero mb-4 block">Concierge Service</span>
            <span className="teal-rule mx-auto" />
            <h2 className="section-cta-final__heading">{content.finalCta.heading}</h2>
            <p className="section-cta-final__lead mx-auto">{content.finalCta.lead}</p>
            <div className="service-area-premium-cta__actions">
              <Link href="/contact" className="btn-primary service-area-premium-cta__btn">
                Request Service
              </Link>
              <a href={SITE_PHONE_TEL} className="btn-outline service-area-premium-cta__btn">
                Call / Text Now
              </a>
            </div>
            {nearbyAreas.length > 0 && (
              <div className="service-area-premium-cta__nearby">
                <p className="service-area-premium-cta__nearby-title">Nearby service areas</p>
                <div className="service-area-premium-cta__nearby-links">
                  {nearbyAreas.map((area) => (
                    <Link key={area.href} href={area.href} className="service-area-premium-cta__nearby-link">
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `EBR Electric Boat Repair — ${name}`,
            description: content.seoDescription,
            url: `https://electricboatrepair.com/service-areas/${slug}`,
            telephone: SITE_PHONE_SCHEMA,
            areaServed: name,
            serviceType: 'Marine Repair and Restoration',
          }),
        }}
      />
    </main>
  );
}
