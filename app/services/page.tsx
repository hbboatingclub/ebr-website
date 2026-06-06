import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHubPageView from '@/components/ServicesHubPageView';
import { servicesHubMeta, servicesHubHero } from '@/lib/servicesHubContent';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: servicesHubMeta.title,
  description: servicesHubMeta.description,
  path: '/services',
  image: servicesHubHero.src,
});

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesHubPageView />
      <Footer />
    </>
  );
}
