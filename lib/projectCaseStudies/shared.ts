import type {
  ProjectCaseStudyGalleryItem,
  ProjectCaseStudyRelatedService,
} from '@/lib/projectCaseStudies/types';

const SHOWCASE_GALLERY_TITLES = [
  'Initial Condition / Inspection',
  'Work In Progress',
  'Completed Result',
] as const;

type ShowcaseGalleryInput = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  caption: string;
};

export function buildShowcaseGallery(
  items: [ShowcaseGalleryInput, ShowcaseGalleryInput, ShowcaseGalleryInput],
): ProjectCaseStudyGalleryItem[] {
  return items.map((item, index) => ({
    id: item.id,
    title: SHOWCASE_GALLERY_TITLES[index],
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt,
    imagePosition: item.imagePosition ?? 'center 42%',
    caption: item.caption,
  }));
}

export const PROJECT_CASE_STUDY_CTA_TRUST =
  'Serving Huntington Harbour, Newport Beach, Long Beach, Dana Point, and surrounding Southern California marinas.';

const SERVICE_TITLES: Record<string, string> = {
  'buff-wax': 'Buff & Wax',
  'duffy-restoration': 'Duffy Restoration',
  'wood-varnishing': 'Wood Varnishing',
  'fiberglass-repair': 'Fiberglass Repair',
  'gelcoat-repair': 'Gelcoat Repair',
  'bottom-paint': 'Bottom Paint',
  'battery-upgrades': 'Battery Upgrades',
  'charger-upgrades': 'Charger Upgrades',
  'electrical-diagnostics': 'Electrical Diagnostics',
  'controller-repair': 'Controller Repair',
  'throttle-repair': 'Throttle Repair',
  'motor-repair': 'Motor Repair',
  'mobile-service': 'Mobile Service',
};

export function relatedServicesFromPaths(paths: string[]): ProjectCaseStudyRelatedService[] {
  return paths.map((href) => {
    const slug = href.replace(/^\/services\//, '');
    return {
      href,
      title: SERVICE_TITLES[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    };
  });
}

export function projectCaseStudyCta(heading: string, lead: string) {
  return {
    serviceAreaTrust: PROJECT_CASE_STUDY_CTA_TRUST,
    heading,
    lead,
    primaryHref: '/contact',
    primaryLabel: 'Request Service',
    secondaryHref: '/services',
    secondaryLabel: 'View Services',
  };
}
