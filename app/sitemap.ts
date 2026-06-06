import { MetadataRoute } from 'next';
import { sanityFetch } from '@/lib/sanity.client';
import { ALL_POSTS_QUERY, ALL_PROJECTS_QUERY, ALL_SERVICES_QUERY } from '@/lib/queries';
import { getServiceAreaSlugs } from '@/lib/serviceAreas';
import { getBlogArticleSlugs } from '@/lib/blogArticles';
import { getProjectCaseStudySlugs } from '@/lib/projectCaseStudies';
import { LOCAL_SERVICE_SLUGS } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://electricboatrepair.com';

  let posts: any[] = [];
  let projects: any[] = [];
  let services: any[] = [];

  try {
    [posts, projects, services] = (await Promise.all([
      sanityFetch(ALL_POSTS_QUERY),
      sanityFetch(ALL_PROJECTS_QUERY),
      sanityFetch(ALL_SERVICES_QUERY),
    ])) as [any[], any[], any[]];
  } catch {}

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...getServiceAreaSlugs().map((slug) => ({
      url: `${baseUrl}/service-areas/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  const dynamicPages: MetadataRoute.Sitemap = [
    ...LOCAL_SERVICE_SLUGS.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...services
      .filter(
        (s: any) => !(LOCAL_SERVICE_SLUGS as readonly string[]).includes(s.slug?.current),
      )
      .map((s: any) => ({
        url: `${baseUrl}/services/${s.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
    ...projects.map((p: any) => ({
      url: `${baseUrl}/projects/${p.slug.current}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...posts.map((p: any) => ({
      url: `${baseUrl}/blog/${p.slug.current}`,
      lastModified: p.publishedDate ? new Date(p.publishedDate) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...getBlogArticleSlugs()
      .filter((slug) => !posts.some((p: any) => p.slug?.current === slug))
      .map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
    ...getProjectCaseStudySlugs()
      .filter((slug) => !projects.some((p: any) => p.slug?.current === slug))
      .map((slug) => ({
        url: `${baseUrl}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      })),
  ];

  return [...staticPages, ...dynamicPages];
}
