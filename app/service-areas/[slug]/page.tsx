import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceAreaPageView from '@/components/ServiceAreaPageView';
import { sanityFetch } from '@/lib/sanity.client';
import { LOCATION_BY_SLUG_QUERY } from '@/lib/queries';
import {
  getServiceAreaBySlug,
  getServiceAreaRedirect,
  getServiceAreaSlugs,
} from '@/lib/serviceAreas';
import {
  getServiceAreaContent,
  getServiceAreaMeta,
  isServiceAreaSlug,
} from '@/lib/serviceAreaContent';
import { buildPageMetadata } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getServiceAreaContent(params.slug);
  const meta = getServiceAreaMeta(params.slug);
  if (meta) {
    return buildPageMetadata({
      title: meta.title,
      description: meta.description,
      path: `/service-areas/${params.slug}`,
      image: content?.heroImage,
    });
  }

  const area = getServiceAreaBySlug(params.slug);
  const name = area?.name || params.slug;
  return buildPageMetadata({
    title: `Duffy Boat Repair in ${name}`,
    description: `EBR provides expert Duffy boat repair, controller rebuilds, lithium battery upgrades, and electric boat maintenance in ${name}, California.`,
    path: `/service-areas/${params.slug}`,
  });
}

export default async function ServiceAreaPage({ params }: Props) {
  const legacyRedirect = getServiceAreaRedirect(params.slug);
  if (legacyRedirect) {
    redirect(legacyRedirect);
  }

  if (!isServiceAreaSlug(params.slug)) {
    notFound();
  }

  const content = getServiceAreaContent(params.slug);
  if (!content) notFound();

  let location: {
    locationName?: string;
    introCopy?: string;
    heroImage?: { asset?: { _ref?: string }; alt?: string };
    localContent?: any;
  } | null = null;

  try {
    location = await sanityFetch(LOCATION_BY_SLUG_QUERY, { slug: params.slug });
  } catch {
    // Sanity optional
  }

  return (
    <>
      <Header />
      <ServiceAreaPageView slug={params.slug} location={location} />
      <Footer />
    </>
  );
}
