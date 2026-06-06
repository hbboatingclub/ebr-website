import { ebrImage } from '@/lib/mediaPaths';

export type ProjectsGalleryItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  category?: string;
  caseStudyComingSoon?: boolean;
  linkLabel?: string;
};

export type ProjectsTrustPoint = {
  title: string;
  description: string;
};

/** Active before/after slides rendered on /projects. Append entries to add more sliders later. */
export type ProjectsBeforeAfterSlide = {
  id: string;
  sectionTitle: string;
  sectionSubtitle: string;
  beforeSrc: string;
  beforeAlt: string;
  beforeObjectPosition: string;
  beforeScale: number;
  afterSrc: string;
  afterAlt: string;
  afterObjectPosition: string;
  afterScale: number;
  details: {
    title: string;
    description: string;
    pills: readonly string[];
  };
  ctaLabel: string;
  ctaHref: string;
};

/**
 * TODO: Future before/after slider candidates — add to PROJECTS_FEATURED_SLIDES when assets are ready.
 * Do not render until image pairs and alignment values are defined.
 *
 * - Rudder compartment restoration
 * - Hull oxidation removal
 * - Gelcoat repair
 * - Wood varnish restoration
 * - Lithium conversion
 */
export const PROJECTS_FUTURE_BEFORE_AFTER_CANDIDATES = [
  'rudder-compartment-restoration',
  'hull-oxidation-removal',
  'gelcoat-repair',
  'wood-varnish-restoration',
  'lithium-conversion',
] as const;

export const PROJECTS_FEATURED_SLIDES: ProjectsBeforeAfterSlide[] = [
  {
    id: 'duffy-hull-oxidation-removal',
    sectionTitle: 'Before & After Restoration',
    sectionSubtitle:
      'See how professional restoration, polishing, and refinishing can dramatically improve the appearance of a Duffy or electric harbor boat.',
    beforeSrc: ebrImage('Before and After Photos', 'duffy-before-slider.jpg'),
    beforeAlt: 'Duffy hull before oxidation removal — faded gelcoat and dull finish',
    beforeObjectPosition: 'center 42%',
    beforeScale: 1,
    afterSrc: ebrImage('Before and After Photos', 'duffy-after-slider.jpg'),
    afterAlt: 'Duffy hull after gloss restoration — deep shine and refreshed exterior finish',
    afterObjectPosition: 'center 42%',
    afterScale: 1,
    details: {
      title: 'Duffy Hull Oxidation Removal',
      description:
        'Heavy oxidation removed through multi-stage compounding, polishing, and protection — restoring deep gloss, color, and reflection to the hull.',
      pills: ['Oxidation Removal', 'Gelcoat Restoration', 'Buff & Wax', 'Marine Protection'],
    },
    ctaLabel: 'View Buff & Wax Service',
    ctaHref: '/services/buff-wax',
  },
];

/** @deprecated Use PROJECTS_FEATURED_SLIDES[0] — kept for reference during multi-slider rollout */
export const PROJECTS_FEATURED_BEFORE_AFTER = PROJECTS_FEATURED_SLIDES[0];

export const PROJECTS_FEATURED_PROOF = [
  '48 Hour Turnaround',
  'Multi-Stage Polish',
  'Deep Gloss Finish',
  'Protected Hull',
] as const;

export const PROJECTS_TESTIMONIAL = {
  quote:
    'The EBR team completely transformed our Duffy. The boat looked newer than when we bought it.',
  attribution: 'Mike Bailey',
} as const;

/**
 * TODO: Future case study pages to build (do not render publicly yet):
 * - Duffy Hull Oxidation Removal
 * - Complete Bottom Paint Restoration
 * - Electric Drive System Rebuild
 * - Lithium Battery Conversion
 * - Fiberglass & Gelcoat Repair
 */
export const PROJECTS_FUTURE_CASE_STUDY_SLUGS = [
  'complete-bottom-paint-restoration',
  'electric-drive-system-rebuild',
  'lithium-battery-conversion',
  'fiberglass-gelcoat-repair',
] as const;

export const PROJECTS_GALLERY = {
  title: 'Recent Restorations & Repairs',
  intro:
    'Real restoration, electrical, battery, fiberglass, and refinishing projects completed for Duffy and electric harbor boats throughout Southern California.',
  items: [
    {
      id: 'duffy-hull-oxidation-removal',
      title: 'Duffy Hull Oxidation Removal',
      description:
        'Restore gloss, depth, and color through professional oxidation removal and multi-stage polishing.',
      href: '/projects/duffy-hull-oxidation-removal',
      imageSrc: ebrImage('Before and After Photos', 'duffy-after-slider.jpg'),
      imageAlt: 'Duffy hull after oxidation removal and gelcoat restoration',
      imagePosition: 'center center',
      linkLabel: 'View case study',
    },
    {
      id: 'duffy-restoration',
      title: 'Duffy Restoration',
      description:
        'Comprehensive cosmetic and systems restoration for aging Duffy and electric harbor boats.',
      href: '/projects/duffy-restoration',
      imageSrc: ebrImage('Boat Restoration', 'duffy_restoration_main.jpg'),
      imageAlt: 'Luxury Duffy boat restoration in Newport Harbor',
      imagePosition: 'center center',
      linkLabel: 'View case study',
    },
    {
      id: 'lithium-conversion',
      title: 'Duffy Battery Replacement',
      description:
        'Lead-acid, AGM, and lithium battery replacement solutions with charging-system verification.',
      href: '/projects/lithium-battery-conversion',
      imageSrc: ebrImage('Battery replacements: Upgrades', 'duffy-lithium-battery-conversion-newport-beach.png'),
      imageAlt: 'Duffy boat battery replacement service',
      imagePosition: 'center center',
      linkLabel: 'View case study',
    },
    {
      id: 'bottom-paint',
      title: 'Bottom Paint Restoration',
      description:
        'Failing antifouling stripped, hull prepared, and bottom paint refinished for durable underwater protection.',
      href: '/projects/bottom-paint-restoration',
      imageSrc: ebrImage('Before and After Photos', 'boat-bottom-paint-restoration-after.jpg'),
      imageAlt: 'Duffy hull bottom after bottom paint restoration',
      imagePosition: 'center center',
      linkLabel: 'View case study',
    },
    {
      id: 'fiberglass-repair',
      title: 'Fiberglass Repair',
      description:
        'Hull and gelcoat damage repaired, faired, and refinished for a seamless marine-grade finish.',
      href: '/projects/fiberglass-repair',
      imageSrc: ebrImage('Before and After Photos', 'before:after2.JPG'),
      imageAlt: 'Duffy fiberglass and gelcoat repair',
      imagePosition: 'center center',
      linkLabel: 'View case study',
    },
    {
      id: 'wood-varnishing',
      title: 'Wood Varnishing',
      description:
        'Marine brightwork sanded, prepped, and varnished to restore depth, gloss, and weather resistance.',
      href: '/projects/wood-varnishing',
      imageSrc: ebrImage('varnishing', 'marine-woodwork-restoration-southern-california.png'),
      imageAlt: 'Premium Duffy wood varnishing and brightwork',
      imagePosition: 'center center',
      linkLabel: 'View case study',
    },
    {
      id: 'electrical-diagnostics',
      title: 'Duffy Electrical Diagnostics',
      description:
        'Systematic troubleshooting of wiring, controls, charging systems, and electrical faults.',
      category: 'Electrical Systems',
      href: '/projects/electrical-diagnostics',
      imageSrc: ebrImage('electrical', 'duffy-electrical-system-troubleshooting.jpg'),
      imageAlt: 'Duffy electric boat electrical system troubleshooting',
      imagePosition: 'center center',
      linkLabel: 'View case study',
    },
    {
      id: 'duffy-electric-motor-repair',
      title: 'Duffy Electric Motor Repair',
      description:
        'Electric propulsion diagnosis, motor replacement, and drivetrain repair for harbor boats.',
      category: 'Electric Propulsion',
      href: '/projects/duffy-electric-motor-repair',
      imageSrc: ebrImage('motor replacemants', 'electric-boat-drive-system-upgrade copy.png'),
      imageAlt: 'Duffy electric drive motor restoration by EBR',
      imagePosition: 'center center',
      linkLabel: 'View case study',
    },
    {
      id: 'duffy-controller-diagnostics-repair',
      title: 'Duffy Controller Diagnostics & Repair',
      description:
        'Controller fault diagnosis, Alltrax upgrades, throttle repair, and propulsion system restoration.',
      category: 'Electrical Systems',
      href: '/projects/duffy-controller-diagnostics-repair',
      imageSrc: ebrImage('controller diagnostics: upgrades', 'alltrax-controller-upgrade-duffy-boat-after.png'),
      imageAlt: 'Alltrax controller upgrade on Duffy electric boat after installation',
      imagePosition: 'center center',
      linkLabel: 'View case study',
    },
  ] as ProjectsGalleryItem[],
};

export const PROJECTS_TRUST = {
  title: 'Built Around Real Electric Boat Work',
  subtitle:
    'Every project category ties back to the systems, finishes, and reliability standards EBR owners expect.',
  points: [
    {
      title: 'Before / After Refinishing',
      description:
        'Documented cosmetic transformations — buff, wax, gelcoat, and brightwork executed with measurable visual results.',
    },
    {
      title: 'Electric System Upgrades',
      description:
        'Lithium conversions, charger profiling, and controller work engineered for real-world harbor performance.',
    },
    {
      title: 'Dockside Diagnostics',
      description:
        'On-site troubleshooting isolates battery, charging, and propulsion faults before major parts are replaced.',
    },
    {
      title: 'Restoration Coordination',
      description:
        'Full Duffy restoration projects managed across fiberglass, upholstery, varnish, bottom paint, and electric systems.',
    },
  ] satisfies ProjectsTrustPoint[],
};

export const PROJECTS_FINAL_CTA = {
  title: 'Ready to Restore Your Boat?',
  lead: 'From oxidation removal and bottom paint to electric drive repairs and lithium upgrades, EBR can help bring your Duffy or electric boat back to life.',
  primaryHref: '/contact',
  primaryLabel: 'Request Service',
  secondaryHref: '/services',
  secondaryLabel: 'View Services',
} as const;
