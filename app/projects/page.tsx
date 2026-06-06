import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsPageView from '@/components/ProjectsPageView';
import { ebrImage } from '@/lib/mediaPaths';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Projects | Duffy Boat Repair & Restoration Gallery',
  description:
    'Real Duffy boat and electric boat repair projects by EBR — refinishing transformations, lithium conversions, restorations, and more across Southern California.',
  path: '/projects',
  image: ebrImage('Boat Restoration', 'luxury-electric-boat-restoration-newport-harbor.JPG'),
});

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsPageView />
      <Footer />
    </>
  );
}
