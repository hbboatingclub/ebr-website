import Link from 'next/link';
import Image from 'next/image';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import type { ProjectCaseStudy, ProjectCaseStudyGalleryItem } from '@/lib/projectCaseStudies/types';

interface Props {
  content: ProjectCaseStudy;
}

const EDITORIAL_GALLERY_FEATURED_ID = 'completed-restoration';
const EDITORIAL_GALLERY_STACK_IDS = ['project-condition', 'active-restoration'] as const;

function ProjectCaseStudyGalleryCard({
  item,
  variant = 'default',
  sizes,
}: {
  item: ProjectCaseStudyGalleryItem;
  variant?: 'default' | 'featured' | 'compact';
  sizes: string;
}) {
  return (
    <article
      className={`project-case-study-gallery-card${
        variant === 'featured' ? ' project-case-study-gallery-card--featured' : ''
      }${variant === 'compact' ? ' project-case-study-gallery-card--compact' : ''}`}
    >
      <div className="project-case-study-gallery-card__media">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-cover"
          style={{ objectPosition: item.imagePosition }}
          sizes={sizes}
        />
      </div>
      <div className="project-case-study-gallery-card__body">
        <h3 className="project-case-study-gallery-card__title">{item.title}</h3>
        <p className="project-case-study-gallery-card__caption">{item.caption}</p>
      </div>
    </article>
  );
}

function ProjectCaseStudyGallery({
  heading,
  subtitle,
  items,
  labelledBy,
  layout = 'grid',
}: {
  heading: string;
  subtitle: string;
  items: ProjectCaseStudyGalleryItem[];
  labelledBy: string;
  layout?: 'grid' | 'editorial';
}) {
  const intro = (
    <div className="premium-intro premium-intro--center">
      <span className="teal-rule mx-auto" />
      <h2 className="hub-premium-heading text-navy">{heading}</h2>
      <p className="project-case-study-gallery__subtitle">{subtitle}</p>
    </div>
  );

  if (layout === 'editorial') {
    const byId = new Map(items.map((item) => [item.id, item]));
    const featured = byId.get(EDITORIAL_GALLERY_FEATURED_ID);
    const stack = EDITORIAL_GALLERY_STACK_IDS.map((id) => byId.get(id)).filter(
      (item): item is ProjectCaseStudyGalleryItem => Boolean(item),
    );

    if (!featured || stack.length !== EDITORIAL_GALLERY_STACK_IDS.length) {
      return (
        <>
          {intro}
          <div className="project-case-study-gallery" aria-label={labelledBy}>
            {items.map((item) => (
              <ProjectCaseStudyGalleryCard
                key={item.id}
                item={item}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ))}
          </div>
        </>
      );
    }

    return (
      <>
        {intro}
        <div className="project-case-study-gallery-editorial" aria-label={labelledBy}>
          <ProjectCaseStudyGalleryCard
            item={featured}
            variant="featured"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="project-case-study-gallery-editorial__stack">
            {stack.map((item) => (
              <ProjectCaseStudyGalleryCard
                key={item.id}
                item={item}
                variant="compact"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {intro}
      <div className="project-case-study-gallery" aria-label={labelledBy}>
        {items.map((item) => (
          <ProjectCaseStudyGalleryCard
            key={item.id}
            item={item}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ))}
      </div>
    </>
  );
}

export default function ProjectCaseStudyView({ content }: Props) {
  const heroGallery = content.gallery.placement === 'after-hero';
  const processGallery = content.gallery.placement === 'after-process';
  return (
    <main className="project-case-study hub-premium hub-premium--project-case-study">
      <section className="hub-premium-hero hub-premium-hero--compact project-case-study-hero">
        <div className="hub-premium-hero__image">
          <Image
            src={content.hero.imageSrc}
            alt={content.hero.imageAlt}
            fill
            priority
            className="hub-premium-hero__photo object-cover"
            style={{ objectPosition: content.hero.imagePosition }}
            sizes="100vw"
          />
        </div>
        <div className="hub-premium-hero__scrim" aria-hidden />
        <div className="hub-premium-hero__scrim-left" aria-hidden />
        <div className="hub-premium-hero__vignette" aria-hidden />
        <div className="container-site hub-premium-hero__content">
          <Link href="/projects" className="project-case-study-hero__back">
            ← All Projects
          </Link>
          <span className="project-case-study-hero__badge">{content.hero.badge}</span>
          <h1 className="hub-premium-hero__title">{content.hero.title}</h1>
          <p className="hub-premium-hero__lead">{content.hero.subtitle}</p>
        </div>
      </section>

      {(content.slider || heroGallery) && (
        <section
          className={`hub-premium-section hub-premium-section--light ${
            content.slider ? 'project-case-study-slider' : 'project-case-study-showcase-gallery'
          }`}
        >
          <div className="hub-premium-section__texture" aria-hidden />
          <div className="container-site relative z-10">
            {content.slider ? (
              <BeforeAfterSlider
                beforeSrc={content.slider.beforeSrc}
                afterSrc={content.slider.afterSrc}
                beforeAlt={content.slider.beforeAlt}
                afterAlt={content.slider.afterAlt}
                beforeObjectPosition={content.slider.objectPosition}
                afterObjectPosition={content.slider.objectPosition}
              />
            ) : (
              <ProjectCaseStudyGallery
                heading={content.gallery.heading}
                subtitle={content.gallery.subtitle}
                items={content.gallery.items}
                labelledBy={content.gallery.heading}
                layout={content.gallery.layout}
              />
            )}
          </div>
        </section>
      )}

      <section className="hub-premium-section hub-premium-section--light project-case-study-snapshot-section">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro premium-intro--center">
            <span className="teal-rule mx-auto" />
            <h2 className="hub-premium-heading text-navy">{content.snapshot.heading}</h2>
          </div>
          <ul className="project-case-study-snapshot" aria-label={content.snapshot.heading}>
            {content.snapshot.items.map((item) => (
              <li key={item.label} className="project-case-study-snapshot__item">
                <span className="project-case-study-snapshot__label">{item.label}</span>
                <p className="project-case-study-snapshot__value">{item.value}</p>
              </li>
            ))}
          </ul>
          {content.snapshot.factsStrip.length > 0 && (
            <ul className="project-case-study-facts" aria-label="Project facts">
              {content.snapshot.factsStrip.map((item) => (
                <li key={item.label} className="project-case-study-facts__item">
                  <span className="project-case-study-facts__label">{item.label}</span>
                  <span className="project-case-study-facts__value">{item.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--light project-case-study-overview">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="hub-premium-heading text-navy">{content.problem.heading}</h2>
          </div>
          <div className="hub-premium-prose">
            {content.problem.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--light project-case-study-findings-section">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro premium-intro--center">
            <span className="teal-rule mx-auto" />
            <h2 className="hub-premium-heading text-navy">{content.inspectionFindings.heading}</h2>
          </div>
          <ul className="project-case-study-findings" aria-label={content.inspectionFindings.heading}>
            {content.inspectionFindings.items.map((item) => (
              <li key={item} className="project-case-study-findings__item">
                <span className="project-case-study-findings__icon" aria-hidden />
                <span className="project-case-study-findings__label">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="supporting-premium-process supporting-premium-section project-case-study-process">
        <div className="container-site relative z-10">
          <div className="premium-intro premium-intro--center">
            <span className="teal-rule mx-auto" />
            <h2 className="supporting-premium-heading supporting-premium-process__heading text-softwhite">
              {content.process.heading}
            </h2>
          </div>
          <div className="supporting-premium-process-grid">
            {content.process.steps.map((step) => (
              <div key={step.step} className="supporting-premium-process-card">
                <span className="supporting-premium-process-card__step">{step.step}</span>
                <h3 className="supporting-premium-process-card__title">{step.title}</h3>
                <p className="supporting-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {processGallery && (
        <section className="hub-premium-section hub-premium-section--light project-case-study-gallery-section">
          <div className="hub-premium-section__texture" aria-hidden />
          <div className="container-site relative z-10">
            <ProjectCaseStudyGallery
              heading={content.gallery.heading}
              subtitle={content.gallery.subtitle}
              items={content.gallery.items}
              labelledBy={content.gallery.heading}
              layout={content.gallery.layout}
            />
          </div>
        </section>
      )}

      <section className="hub-premium-section hub-premium-section--light project-case-study-results-section">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro premium-intro--center">
            <span className="teal-rule mx-auto" />
            <h2 className="hub-premium-heading text-navy">{content.results.heading}</h2>
          </div>
          <ul
            className={`project-case-study-results project-case-study-results--count-${
              content.results.metrics.length === 2
                ? 2
                : content.results.metrics.length === 3
                  ? 3
                  : content.results.metrics.length === 5
                    ? 5
                    : 4
            }`}
            aria-label={content.results.heading}
          >
            {content.results.metrics.map((metric) => (
              <li key={metric} className="project-case-study-results__item">
                {metric}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--light project-case-study-outcome-section">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10 max-w-3xl">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="hub-premium-heading text-navy">{content.outcome.heading}</h2>
          </div>
          <div className="project-case-study-outcome__prose">
            {content.outcome.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {content.testimonial && (
        <section className="projects-premium-testimonial project-case-study-testimonial" aria-label="Customer feedback">
          <div className="container-site">
            <div className="premium-intro premium-intro--center mb-8 md:mb-10">
              <span className="teal-rule mx-auto" />
              <h2 className="hub-premium-heading text-navy">{content.testimonial.heading}</h2>
            </div>
            <blockquote className="projects-premium-testimonial__quote">
              <p>&ldquo;{content.testimonial.quote}&rdquo;</p>
              <footer className="projects-premium-testimonial__attribution">
                — {content.testimonial.attribution}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      <section className="hub-premium-section hub-premium-section--light project-case-study-related-section">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="premium-intro premium-intro--center">
            <span className="teal-rule mx-auto" />
            <h2 className="hub-premium-heading text-navy">{content.relatedServices.heading}</h2>
          </div>
          <div
            className={`project-case-study-related-grid project-case-study-related-grid--count-${content.relatedServices.items.length === 2 ? 2 : content.relatedServices.items.length === 4 ? 4 : 3}`}
          >
            {content.relatedServices.items.map((item) => (
              <Link key={item.href} href={item.href} className="project-case-study-related-card group">
                <h3 className="project-case-study-related-card__title">{item.title}</h3>
                <span className="project-case-study-related-card__link">
                  View service
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta-final hub-premium-cta project-case-study-cta">
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="hub-premium-cta__copy mx-auto text-center max-w-2xl">
            <span className="teal-rule mx-auto" />
            <p className="project-case-study-cta__trust">{content.cta.serviceAreaTrust}</p>
            <h2 className="section-cta-final__heading">{content.cta.heading}</h2>
            <p className="section-cta-final__lead mx-auto">{content.cta.lead}</p>
            <div className="hub-premium-cta__actions">
              <Link href={content.cta.primaryHref} className="btn-primary hub-premium-cta__btn">
                {content.cta.primaryLabel}
              </Link>
              <Link href={content.cta.secondaryHref} className="btn-outline hub-premium-cta__btn">
                {content.cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
