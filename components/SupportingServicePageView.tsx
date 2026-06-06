import Link from 'next/link';
import Image from 'next/image';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceHeroTitle from '@/components/ServiceHeroTitle';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  getSupportingServiceContent,
  type SupportingServiceSlug,
} from '@/lib/supportingServiceContent';
import { serviceCardGridProps } from '@/lib/serviceCardGrid';

const LIGHT_PROCESS_HEADING_SLUGS = new Set<SupportingServiceSlug>([
  'surrey-tops',
  'isinglass-windows',
  'covers',
  'fiberglass-repair',
  'buff-wax',
  'wood-varnishing',
  'monthly-cleaning',
  'mobile-service',
  'gelcoat-repair',
  'flooring',
  'steering-helm-repair',
  'prop-replacement',
]);

function supportingProcessHeadingClass(slug: SupportingServiceSlug): string {
  if (slug === 'throttle-repair') return 'supporting-premium-heading text-softwhite';
  if (LIGHT_PROCESS_HEADING_SLUGS.has(slug)) {
    return 'supporting-premium-heading supporting-premium-process__heading';
  }
  return 'supporting-premium-heading text-navy';
}

function SupportingCtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="#request" className="btn-primary">
        Request Service
      </Link>
      <a href={SITE_PHONE_TEL} className="btn-outline">
        Call / Text Now
      </a>
    </div>
  );
}

interface Props {
  slug: SupportingServiceSlug;
}

export default function SupportingServicePageView({ slug }: Props) {
  const content = getSupportingServiceContent(slug);
  if (!content) return null;

  const galleryLayout =
    content.gallery.length >= 3
      ? 'supporting-premium-gallery__strip--trio'
      : 'supporting-premium-gallery__strip--duo';

  return (
    <main
      className={`supporting-premium${slug === 'throttle-repair' ? ' supporting-premium--throttle-repair' : ''}${slug === 'surrey-tops' ? ' supporting-premium--surrey-tops' : ''}${slug === 'isinglass-windows' ? ' supporting-premium--isinglass-windows' : ''}${slug === 'covers' ? ' supporting-premium--covers' : ''}${slug === 'fiberglass-repair' ? ' supporting-premium--fiberglass-repair' : ''}${slug === 'buff-wax' ? ' supporting-premium--buff-wax' : ''}${slug === 'wood-varnishing' ? ' supporting-premium--wood-varnishing' : ''}${slug === 'monthly-cleaning' ? ' supporting-premium--monthly-cleaning' : ''}${slug === 'mobile-service' ? ' supporting-premium--mobile-service' : ''}${slug === 'gelcoat-repair' ? ' supporting-premium--gelcoat-repair' : ''}${slug === 'flooring' ? ' supporting-premium--flooring' : ''}${slug === 'steering-helm-repair' ? ' supporting-premium--steering-helm-repair' : ''}${slug === 'prop-replacement' ? ' supporting-premium--prop-replacement' : ''}`}
    >
      {/* 1. Hero */}
      <section className="supporting-premium-hero">
        <div className="supporting-premium-hero__image">
          <Image
            src={content.hero.src}
            alt={content.hero.alt}
            fill
            priority
            className="supporting-premium-hero__photo object-cover"
            style={{ objectPosition: content.hero.position }}
            sizes="100vw"
          />
        </div>
        <div className="supporting-premium-hero__scrim" aria-hidden />
        <div className="supporting-premium-hero__scrim-left" aria-hidden />
        <div className="supporting-premium-hero__vignette" aria-hidden />
        <div className="container-site supporting-premium-hero__content">
          <Link
            href="/services"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-teal transition-colors duration-300"
          >
            ← All Services
          </Link>
          <span className="label-hero supporting-premium-hero__eyebrow block">{content.eyebrow}</span>
          <ServiceHeroTitle className="supporting-premium-hero__title" title={content.title} />
          <p className="supporting-premium-hero__lead">{content.lead}</p>
          <p className="supporting-premium-hero__trust font-mono text-[10px] uppercase tracking-[0.18em] text-teal/90">
            {content.trust}
          </p>
          <SupportingCtaButtons className="supporting-premium-hero__ctas" />
        </div>
      </section>

      {/* 2. Benefits */}
      <section className="supporting-premium-benefits supporting-premium-section">
        <div className="container-site relative z-10">
          <div className="premium-intro">
            <span className="teal-rule" />
            <h2 className="supporting-premium-heading text-navy">What We Address</h2>
          </div>
          <div {...serviceCardGridProps('supporting-premium-benefits-grid', content.benefits.length)}>
            {content.benefits.map((item) => (
              <div key={item.title} className="supporting-premium-benefit-card">
                <h3 className="supporting-premium-benefit-card__title">{item.title}</h3>
                <p className="supporting-premium-benefit-card__text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Process */}
      <section className="supporting-premium-process supporting-premium-section">
        <div className="container-site relative z-10">
          <div className="premium-intro premium-intro--center">
            <span className="teal-rule mx-auto" />
            <h2 className={supportingProcessHeadingClass(slug)}>Our Process</h2>
          </div>
          <div className="supporting-premium-process-grid">
            {content.process.map((step) => (
              <div key={step.step} className="supporting-premium-process-card">
                <span className="supporting-premium-process-card__step">{step.step}</span>
                <h3 className="supporting-premium-process-card__title">{step.title}</h3>
                <p className="supporting-premium-process-card__text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service details */}
      <section className="supporting-premium-details supporting-premium-section">
        <div className="container-site relative z-10 max-w-5xl">
          <span className="teal-rule" />
          <h2 className="supporting-premium-heading text-navy">{content.details.title}</h2>
          <div className="supporting-premium-details__body">
            {content.details.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>
          <ul className="supporting-premium-details__list">
            {content.details.bullets.map((bullet) => (
              <li key={bullet} className="supporting-premium-details__item">
                <span className="supporting-premium-details__dot" aria-hidden />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Gallery */}
      {content.gallery.length > 0 && (
        <section className="supporting-premium-gallery supporting-premium-section">
          <div className="supporting-premium-gallery__fade-in" aria-hidden />
          <div className="container-site relative z-10">
            <div className="premium-intro !max-w-none">
              <span className="label-hero block mb-3 text-softwhite/80">Service Gallery</span>
              <p className="font-mono text-[10px] text-white/45 uppercase tracking-[0.2em]">
                Real EBR work · Southern California
              </p>
            </div>
            <div className={`supporting-premium-gallery__strip ${galleryLayout}`}>
              {content.gallery.map((img) => (
                <div key={img.src} className="supporting-premium-gallery-card group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                    style={{ objectPosition: img.position }}
                    sizes={
                      content.gallery.length >= 3
                        ? '(max-width: 768px) 100vw, 33vw'
                        : '(max-width: 768px) 100vw, 50vw'
                    }
                  />
                  <div className="supporting-premium-gallery-card__overlay" aria-hidden />
                  <p className="supporting-premium-gallery-card__caption">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="supporting-premium-gallery__fade-out" aria-hidden />
        </section>
      )}

      {/* 6. FAQ */}
      <section className="supporting-premium-faq-wrap supporting-premium-section">
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <div className="premium-intro !max-w-none">
            <span className="teal-rule" />
            <h2 className="supporting-premium-heading text-navy">Frequently Asked Questions</h2>
          </div>
          <div className="supporting-premium-faq-list">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="supporting-premium-faq group">
                <summary className="supporting-premium-faq__question">
                  {faq.question}
                  <span className="supporting-premium-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="supporting-premium-faq__answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section id="request" className="section-cta-final supporting-premium-cta">
        <div className="section-cta-final__fade-top" aria-hidden />
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="section-cta-final__copy">
              <span className="label-hero mb-4 block">Request Service</span>
              <span className="teal-rule" />
              <h2 className="section-cta-final__heading">{content.ctaHeading}</h2>
              <p className="section-cta-final__lead">{content.ctaLead}</p>
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
