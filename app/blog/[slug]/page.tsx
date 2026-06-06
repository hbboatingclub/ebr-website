import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogArticlePageView from '@/components/BlogArticlePageView';
import { sanityFetch, urlFor } from '@/lib/sanity.client';
import { POST_BY_SLUG_QUERY, ALL_POSTS_QUERY } from '@/lib/queries';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import { buildPageMetadata } from '@/lib/seo';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const local = getBlogArticleSlugs().map((slug) => ({ slug }));
  try {
    const posts: any[] = await sanityFetch(ALL_POSTS_QUERY);
    const sanity = posts.map((p) => ({ slug: p.slug.current }));
    const seen = new Set(local.map((p) => p.slug));
    return [...local, ...sanity.filter((p) => !seen.has(p.slug))];
  } catch {
    return local;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getBlogArticle(params.slug);
  if (article) {
    return buildPageMetadata({
      title: article.seoTitle,
      description: article.seoDescription,
      path: `/blog/${params.slug}`,
      image: article.heroImage,
    });
  }

  try {
    const post: any = await sanityFetch(POST_BY_SLUG_QUERY, { slug: params.slug });
    if (!post) return {};
    return buildPageMetadata({
      title: post.seo?.seoTitle || post.title,
      description: post.seo?.seoDescription || post.excerpt,
      path: `/blog/${params.slug}`,
    });
  } catch {
    return {};
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={urlFor(value).width(900).height(506).url()}
          alt={value.alt || 'Blog image'}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
};

export default async function BlogPostPage({ params }: Props) {
  const localArticle = getBlogArticle(params.slug);
  if (localArticle) {
    return (
      <>
        <Header />
        <BlogArticlePageView article={localArticle} />
        <Footer />
      </>
    );
  }

  let post: any = null;
  try {
    post = await sanityFetch(POST_BY_SLUG_QUERY, { slug: params.slug });
  } catch {}

  if (!post) {
    return (
      <>
        <Header />
        <main className="blog-article-premium blog-article-premium--missing pt-32 min-h-screen bg-[#f2ede4]">
          <div className="container-site py-24 text-center max-w-xl mx-auto">
            <h1 className="font-display text-navy text-3xl md:text-4xl mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">This article may have moved or is not yet published.</p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="blog-article-premium">
        <section className="blog-article-premium-hero">
          <div className="container-site blog-article-premium-hero__content blog-article-premium-hero__content--sanity">
            <Link href="/blog" className="blog-article-premium-hero__back">
              ← Blog
            </Link>
            {post.category && (
              <span className="blog-article-premium-hero__category">
                {post.category.replace(/-/g, ' ')}
              </span>
            )}
            <h1 className="blog-article-premium-hero__title">{post.title}</h1>
            {post.excerpt && <p className="blog-article-premium-hero__lead">{post.excerpt}</p>}
            {post.publishedDate && (
              <div className="blog-article-premium-hero__meta">
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            )}
          </div>
        </section>
        {post.featuredImage?.asset && (
          <div className="container-site -mt-8 relative z-10 pb-12">
            <div className="aspect-[16/9] relative overflow-hidden rounded-xl max-w-4xl mx-auto">
              <Image
                src={urlFor(post.featuredImage.asset).width(1200).height(675).url()}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
        <section className="blog-article-premium-body">
          <div className="container-site max-w-3xl py-12">
            {post.body ? (
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy prose-a:text-teal">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>
            ) : (
              <p className="blog-article-premium-section__placeholder">ARTICLE CONTENT TO BE INSERTED</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
