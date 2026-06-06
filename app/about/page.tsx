import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutPageView from '@/components/AboutPageView';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'About EBR | Electric Boat Repair & Restoration Specialists',
  description:
    "EBR is Southern California's trusted electric boat specialists. Expert Duffy boat repair, restoration, and maintenance serving Newport Harbor, Huntington Harbour, and the OC coast.",
  path: '/about',
  image: '/images/ebr-premium-restoration.jpg',
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutPageView />
      <Footer />
    </>
  );
}
