import Link from 'next/link';
import Image from 'next/image';
import { SITE_PHONE_TEL } from '@/lib/siteContact';
import { BLOG_HERO, BLOG_INTRO } from '@/lib/blogContent';

export type BlogPostCard = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  publishedDate?: string;
  imageSrc?: string;
  imageAlt?: string;
  href: string;
  isPlaceholder?: boolean;
};

interface Props {
  posts: BlogPostCard[];
}

function FeaturedArticle({ post }: { post: BlogPostCard }) {
  const content = (
    <>
      <div className="hub-premium-featured-article__media">
        <Image
          src={post.imageSrc!}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="hub-premium-featured-article__overlay" aria-hidden />
      </div>
      <div className="hub-premium-featured-article__body">
        <span className="label-hero block mb-3">Featured Article</span>
        {post.category && (
          <span className="hub-premium-article-card__category">{post.category}</span>
        )}
        <h2 className="hub-premium-featured-article__title">{post.title}</h2>
        {post.excerpt && <p className="hub-premium-featured-article__excerpt">{post.excerpt}</p>}
        {post.isPlaceholder ? (
          <span className="hub-premium-article-card__soon">Coming Soon</span>
        ) : (
          <span className="hub-premium-article-card__link">
            Read article
            <span aria-hidden>→</span>
          </span>
        )}
      </div>
    </>
  );

  if (post.isPlaceholder) {
    return (
      <article className="hub-premium-featured-article hub-premium-featured-article--soon">
        {content}
      </article>
    );
  }

  return (
    <Link href={post.href} className="hub-premium-featured-article group">
      {content}
    </Link>
  );
}

function ArticleCard({ post }: { post: BlogPostCard }) {
  const content = (
    <>
      <div className="hub-premium-article-card__media">
        <Image
          src={post.imageSrc!}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="hub-premium-article-card__body">
        {post.category && (
          <span className="hub-premium-article-card__category">{post.category}</span>
        )}
        <h3 className="hub-premium-article-card__title">{post.title}</h3>
        {post.excerpt && <p className="hub-premium-article-card__text">{post.excerpt}</p>}
        <div className="hub-premium-article-card__footer">
          {post.publishedDate && (
            <span className="hub-premium-article-card__date">{post.publishedDate}</span>
          )}
          {post.isPlaceholder ? (
            <span className="hub-premium-article-card__soon">Coming Soon</span>
          ) : (
            <span className="hub-premium-article-card__link">
              Read
              <span aria-hidden>→</span>
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (post.isPlaceholder) {
    return <article className="hub-premium-article-card hub-premium-article-card--soon">{content}</article>;
  }

  return (
    <Link href={post.href} className="hub-premium-article-card group">
      {content}
    </Link>
  );
}

export default function BlogPageView({ posts }: Props) {
  const [featured, ...rest] = posts;

  return (
    <main className="hub-premium hub-premium--blog">
      <section className="hub-premium-hero hub-premium-hero--compact">
        <div className="hub-premium-hero__image">
          <Image
            src={BLOG_HERO.src}
            alt={BLOG_HERO.alt}
            fill
            priority
            className="hub-premium-hero__photo object-cover"
            style={{ objectPosition: BLOG_HERO.position }}
            sizes="100vw"
          />
        </div>
        <div className="hub-premium-hero__scrim" aria-hidden />
        <div className="hub-premium-hero__scrim-left" aria-hidden />
        <div className="hub-premium-hero__vignette" aria-hidden />
        <div className="container-site hub-premium-hero__content">
          <span className="label-hero hub-premium-hero__eyebrow block">Knowledge Base</span>
          <h1 className="hub-premium-hero__title">Electric Boat Blog</h1>
          <p className="hub-premium-hero__lead">
            Expert guides on Duffy repair, electric systems, maintenance, and upgrades from Southern
            California&apos;s electric boat specialists.
          </p>
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--light">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10">
          <p className="hub-premium-blog-intro">{BLOG_INTRO}</p>

          {featured && featured.imageSrc && <FeaturedArticle post={featured} />}

          {rest.length > 0 && (
            <div className="hub-premium-article-grid">
              {rest.filter((post) => post.imageSrc).map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-cta-final hub-premium-cta">
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="hub-premium-cta__copy mx-auto text-center max-w-2xl">
            <span className="label-hero mb-4 block">Need Answers Now?</span>
            <span className="teal-rule mx-auto" />
            <h2 className="section-cta-final__heading">Your boat has a question?</h2>
            <p className="section-cta-final__lead mx-auto">
              Call or text EBR directly — we will help diagnose the issue and point you toward the right service.
            </p>
            <div className="hub-premium-cta__actions">
              <a href={SITE_PHONE_TEL} className="btn-primary hub-premium-cta__btn">
                Call / Text Now
              </a>
              <Link href="/contact" className="btn-outline hub-premium-cta__btn">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
