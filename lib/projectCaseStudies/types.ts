export type ProjectCaseStudySnapshotItem = {
  label: string;
  value: string;
};

export type ProjectCaseStudyProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ProjectCaseStudyGalleryItem = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
  caption: string;
};

export type ProjectCaseStudyRelatedService = {
  title: string;
  href: string;
};

export type ProjectCaseStudy = {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition: string;
  };
  slider?: {
    beforeSrc: string;
    beforeAlt: string;
    afterSrc: string;
    afterAlt: string;
    objectPosition: string;
  };
  featuredImage?: {
    imageSrc: string;
    imageAlt: string;
    imagePosition: string;
  };
  snapshot: {
    heading: string;
    items: ProjectCaseStudySnapshotItem[];
    factsStrip: ProjectCaseStudySnapshotItem[];
  };
  problem: {
    heading: string;
    paragraphs: string[];
  };
  inspectionFindings: {
    heading: string;
    items: string[];
  };
  process: {
    heading: string;
    steps: ProjectCaseStudyProcessStep[];
  };
  gallery: {
    heading: string;
    subtitle: string;
    /** after-hero replaces slider slot; after-process keeps secondary gallery below process (slider pages). */
    placement: 'after-hero' | 'after-process';
    /** grid = three equal cards; editorial = featured + stacked (duffy-restoration only). */
    layout?: 'grid' | 'editorial';
    items: ProjectCaseStudyGalleryItem[];
  };
  results: {
    heading: string;
    metrics: string[];
  };
  outcome: {
    heading: string;
    paragraphs: string[];
  };
  testimonial?: {
    heading: string;
    quote: string;
    attribution: string;
  };
  relatedServices: {
    heading: string;
    items: ProjectCaseStudyRelatedService[];
  };
  cta: {
    serviceAreaTrust: string;
    heading: string;
    lead: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref: string;
    secondaryLabel: string;
  };
};
