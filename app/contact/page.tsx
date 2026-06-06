import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactPageView from '@/components/ContactPageView';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact EBR | Request Duffy Boat Repair Service',
  description:
    'Contact EBR Electric Boat Repair for Duffy boat service, controller rebuilds, battery upgrades, and restoration across Newport Harbor, Huntington Harbour, and Southern California.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageView />
      <Footer />
    </>
  );
}
