import Link from 'next/link';
import Image from 'next/image';
import {
  BLOG_PLACEHOLDER_BODY,
  formatBlogPublishedDate,
  getRelatedBlogArticles,
  type BlogArticle,
} from '@/lib/blogArticles';
import { SITE_PHONE_SCHEMA, SITE_PHONE_TEL } from '@/lib/siteContact';

interface Props {
  article: BlogArticle;
}

export default function BlogArticlePageView({ article }: Props) {
  const relatedArticles = getRelatedBlogArticles(article.relatedArticleSlugs);
  const publishedLabel = formatBlogPublishedDate(article.publishedDate);

  return (
    <main className="blog-article-premium">
      {/* Hero */}
      <section className="blog-article-premium-hero">
        <div className="blog-article-premium-hero__image">
          <Image
            src={article.heroImage}
            alt={article.heroImageAlt}
            fill
            priority
            className="blog-article-premium-hero__photo object-cover"
            style={{ objectPosition: article.heroImagePosition }}
            sizes="100vw"
          />
        </div>
        <div className="blog-article-premium-hero__scrim" aria-hidden />
        <div className="blog-article-premium-hero__scrim-left" aria-hidden />
        <div className="container-site blog-article-premium-hero__content">
          <Link href="/blog" className="blog-article-premium-hero__back">
            ← Blog
          </Link>
          <span className="blog-article-premium-hero__category">{article.category}</span>
          <h1 className="blog-article-premium-hero__title">{article.title}</h1>
          <p className="blog-article-premium-hero__lead">{article.excerpt}</p>
          <div className="blog-article-premium-hero__meta">
            <time dateTime={article.publishedDate}>{publishedLabel}</time>
            <span className="blog-article-premium-hero__meta-divider" aria-hidden>
              ·
            </span>
            <span>{article.readingTimeMinutes} min read</span>
          </div>
        </div>
      </section>

      {/* Article body + TOC */}
      <section className="blog-article-premium-body">
        <div className="blog-article-premium-body__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="blog-article-premium-body__layout">
            <aside className="blog-article-premium-toc" aria-label="Table of contents">
              <div className="blog-article-premium-toc__inner">
                <span className="blog-article-premium-toc__label">In This Article</span>
                <nav>
                  <ol className="blog-article-premium-toc__list">
                    {article.sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="blog-article-premium-toc__link">
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            <article className="blog-article-premium-content">
              {article.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="blog-article-premium-section"
                  aria-labelledby={`${section.id}-heading`}
                >
                  <h2 id={`${section.id}-heading`} className="blog-article-premium-section__heading">
                    {section.heading}
                  </h2>
                  {section.content === BLOG_PLACEHOLDER_BODY ? (
                    <p className="blog-article-premium-section__placeholder">{section.content}</p>
                  ) : (
                    <div className="blog-article-premium-section__body">
                      {section.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="blog-article-premium-related blog-article-premium-related--services">
        <div className="container-site">
          <div className="blog-article-premium-related__intro">
            <span className="teal-rule" />
            <h2 className="blog-article-premium-related__heading">Related Services</h2>
            <p className="blog-article-premium-related__lead">
              EBR service pages with scope, process, and request options for this topic.
            </p>
          </div>
          <ul className="blog-article-premium-related-services">
            {article.relatedServices.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="blog-article-premium-related-service group">
                  <span className="blog-article-premium-related-service__title">{service.title}</span>
                  <p className="blog-article-premium-related-service__text">{service.description}</p>
                  <span className="blog-article-premium-related-service__link">
                    View service
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="blog-article-premium-related blog-article-premium-related--articles">
          <div className="container-site">
            <div className="blog-article-premium-related__intro">
              <span className="teal-rule" />
              <h2 className="blog-article-premium-related__heading">Related Articles</h2>
            </div>
            <div className="blog-article-premium-related-articles">
              {relatedArticles.map((post) => (
                <Link
                  key={post.slug}
                  href={post.href}
                  className="blog-article-premium-related-article group"
                >
                  <div className="blog-article-premium-related-article__media">
                    {post.imageSrc && (
                      <Image
                        src={post.imageSrc}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="blog-article-premium-related-article__body">
                    {post.category && (
                      <span className="blog-article-premium-related-article__category">
                        {post.category}
                      </span>
                    )}
                    <h3 className="blog-article-premium-related-article__title">{post.title}</h3>
                    {post.excerpt && (
                      <p className="blog-article-premium-related-article__excerpt">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-cta-final blog-article-premium-cta">
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="blog-article-premium-cta__copy mx-auto text-center max-w-2xl">
            <span className="label-hero mb-4 block">Need Help Now?</span>
            <span className="teal-rule mx-auto" />
            <h2 className="section-cta-final__heading">Questions about your Duffy or electric boat?</h2>
            <p className="section-cta-final__lead mx-auto">
              Call or text EBR — we will help diagnose the issue and recommend the right service path.
            </p>
            <div className="blog-article-premium-cta__actions">
              <a href={SITE_PHONE_TEL} className="btn-primary blog-article-premium-cta__btn">
                Call / Text Now
              </a>
              <Link href="/contact" className="btn-outline blog-article-premium-cta__btn">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.seoDescription,
            datePublished: article.publishedDate,
            author: { '@type': 'Organization', name: 'EBR Electric Boat Repair' },
            publisher: {
              '@type': 'Organization',
              name: 'EBR Electric Boat Repair',
              url: 'https://electricboatrepair.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://electricboatrepair.com/blog/${article.slug}`,
            },
            telephone: SITE_PHONE_SCHEMA,
          }),
        }}
      />
    </main>
  );
}
