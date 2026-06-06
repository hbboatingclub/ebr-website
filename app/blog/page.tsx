import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPageView, { type BlogPostCard } from '@/components/BlogPageView';
import { sanityFetch, urlFor } from '@/lib/sanity.client';
import { ALL_POSTS_QUERY } from '@/lib/queries';
import {
  BLOG_FALLBACK_CARD_IMAGE,
  getBlogHubPosts,
  mergeBlogListing,
} from '@/lib/blogContent';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Electric Boat Blog | Duffy Repair & Maintenance Tips',
  description:
    "Expert advice on Duffy boat repair, electric boat maintenance, battery upgrades, and troubleshooting from EBR — Southern California's electric boat specialists.",
  path: '/blog',
  image: BLOG_FALLBACK_CARD_IMAGE,
});

export default async function BlogPage() {
  let sanityPosts: BlogPostCard[] = [];
  try {
    const raw: any[] = await sanityFetch(ALL_POSTS_QUERY);
    sanityPosts = raw.map((post) => ({
      id: post._id,
      slug: post.slug.current,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category?.replace(/-/g, ' '),
      publishedDate: post.publishedDate
        ? new Date(post.publishedDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        : undefined,
      imageSrc: post.featuredImage?.asset
        ? urlFor(post.featuredImage.asset).width(600).height(338).url()
        : BLOG_FALLBACK_CARD_IMAGE,
      imageAlt: post.featuredImage?.alt || post.title,
      href: `/blog/${post.slug.current}`,
    }));
  } catch {}

  const displayPosts = mergeBlogListing(sanityPosts, getBlogHubPosts());

  return (
    <>
      <Header />
      <BlogPageView posts={displayPosts} />
      <Footer />
    </>
  );
}
