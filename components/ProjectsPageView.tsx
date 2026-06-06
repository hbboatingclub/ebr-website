import Link from 'next/link';
import Image from 'next/image';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { ebrImage } from '@/lib/mediaPaths';
import {
  PROJECTS_FEATURED_PROOF,
  PROJECTS_FEATURED_SLIDES,
  PROJECTS_FINAL_CTA,
  PROJECTS_GALLERY,
  PROJECTS_TESTIMONIAL,
  PROJECTS_TRUST,
} from '@/lib/projectsContent';

export default function ProjectsPageView() {
  const featuredSlide = PROJECTS_FEATURED_SLIDES[0];

  return (
    <main className="hub-premium hub-premium--projects">
      <section className="hub-premium-hero hub-premium-hero--compact">
        <div className="hub-premium-hero__image">
          <Image
            src={ebrImage('Boat Restoration', 'luxury-electric-boat-restoration-newport-harbor.JPG')}
            alt="Luxury electric boat restoration project by EBR"
            fill
            priority
            className="hub-premium-hero__photo object-cover"
            style={{ objectPosition: 'center 42%' }}
            sizes="100vw"
          />
        </div>
        <div className="hub-premium-hero__scrim" aria-hidden />
        <div className="hub-premium-hero__scrim-left" aria-hidden />
        <div className="hub-premium-hero__vignette" aria-hidden />
        <div className="container-site hub-premium-hero__content">
          <span className="label-hero hub-premium-hero__eyebrow block">Our Work</span>
          <h1 className="hub-premium-hero__title">Projects</h1>
          <p className="hub-premium-hero__lead">
            Real EBR work — controller rebuilds, lithium conversions, restorations, and harbor-ready refinishing
            across Southern California.
          </p>
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--light projects-premium-featured">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="projects-premium-featured__intro">
            <span className="teal-rule mx-auto" />
            <h2 className="hub-premium-heading text-center">{featuredSlide.sectionTitle}</h2>
            <p className="projects-premium-featured__subtitle">{featuredSlide.sectionSubtitle}</p>
          </div>

          <BeforeAfterSlider
            beforeSrc={featuredSlide.beforeSrc}
            afterSrc={featuredSlide.afterSrc}
            beforeAlt={featuredSlide.beforeAlt}
            afterAlt={featuredSlide.afterAlt}
            beforeObjectPosition={featuredSlide.beforeObjectPosition}
            afterObjectPosition={featuredSlide.afterObjectPosition}
          />

          <div className="projects-premium-featured__summary">
            <h3 className="projects-premium-featured__summary-title">{featuredSlide.details.title}</h3>
            <p className="projects-premium-featured__summary-text">{featuredSlide.details.description}</p>
            <ul className="projects-premium-featured__summary-pills">
              {featuredSlide.details.pills.map((pill) => (
                <li key={pill}>{pill}</li>
              ))}
            </ul>
          </div>

          <ul className="projects-premium-proof" aria-label="Project highlights">
            {PROJECTS_FEATURED_PROOF.map((item) => (
              <li key={item} className="projects-premium-proof__item">
                <span className="projects-premium-proof__mark" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="projects-premium-testimonial" aria-label="Customer testimonial">
        <div className="container-site">
          <blockquote className="projects-premium-testimonial__quote">
            <p>&ldquo;{PROJECTS_TESTIMONIAL.quote}&rdquo;</p>
            <footer className="projects-premium-testimonial__attribution">
              — {PROJECTS_TESTIMONIAL.attribution}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--light projects-premium-gallery">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="projects-premium-gallery__header">
            <span className="teal-rule mx-auto" />
            <h2 className="hub-premium-heading text-center">{PROJECTS_GALLERY.title}</h2>
            <p className="projects-premium-gallery__intro">{PROJECTS_GALLERY.intro}</p>
          </div>

          <div className="projects-premium-gallery__grid">
            {PROJECTS_GALLERY.items.map((item) => (
              <Link key={item.id} href={item.href} className="projects-premium-gallery-card group">
                <div className="projects-premium-gallery-card__media">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: item.imagePosition ?? 'center' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="projects-premium-gallery-card__overlay" aria-hidden />
                  {item.caseStudyComingSoon && (
                    <span className="projects-premium-gallery-card__badge">Case Study Coming Soon</span>
                  )}
                </div>
                <div className="projects-premium-gallery-card__body">
                  {item.category && (
                    <span className="projects-premium-gallery-card__category">{item.category}</span>
                  )}
                  <h3 className="projects-premium-gallery-card__title">{item.title}</h3>
                  <p className="projects-premium-gallery-card__text">{item.description}</p>
                  <span className="projects-premium-gallery-card__link">
                    {item.linkLabel ?? 'View service'}
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-premium-trust">
        <div className="container-site">
          <div className="projects-premium-trust__intro">
            <span className="teal-rule" />
            <h2 className="projects-premium-trust__title">{PROJECTS_TRUST.title}</h2>
            <p className="projects-premium-trust__lead">{PROJECTS_TRUST.subtitle}</p>
          </div>
          <div className="projects-premium-trust__grid">
            {PROJECTS_TRUST.points.map((point) => (
              <article key={point.title} className="projects-premium-trust__card">
                <span className="projects-premium-trust__card-rule" aria-hidden />
                <h3 className="projects-premium-trust__card-title">{point.title}</h3>
                <p className="projects-premium-trust__card-text">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta-final hub-premium-cta projects-premium-cta">
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="hub-premium-cta__copy mx-auto text-center max-w-2xl">
            <span className="label-hero mb-4 block">Start Your Project</span>
            <span className="teal-rule mx-auto" />
            <h2 className="section-cta-final__heading">{PROJECTS_FINAL_CTA.title}</h2>
            <p className="section-cta-final__lead mx-auto">{PROJECTS_FINAL_CTA.lead}</p>
            <div className="hub-premium-cta__actions">
              <Link href={PROJECTS_FINAL_CTA.primaryHref} className="btn-primary hub-premium-cta__btn">
                {PROJECTS_FINAL_CTA.primaryLabel}
              </Link>
              <Link href={PROJECTS_FINAL_CTA.secondaryHref} className="btn-outline hub-premium-cta__btn">
                {PROJECTS_FINAL_CTA.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
