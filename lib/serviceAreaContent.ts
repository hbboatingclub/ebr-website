import { ebrImage } from '@/lib/mediaPaths';

export const SERVICE_AREA_SLUGS = [
  'newport-harbor',
  'huntington-harbour',
  'orange-county',
  'dana-point',
  'long-beach',
  'lake-forest',
  'mission-viejo',
  'yorba-linda',
] as const;

export type ServiceAreaSlug = (typeof SERVICE_AREA_SLUGS)[number];

export type ServiceAreaLink = {
  name: string;
  href: string;
  description: string;
};

export type ServiceAreaService = {
  title: string;
  description: string;
  href: string;
};

export type ServiceAreaCategory = {
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  tone: 'light' | 'dark';
  imageSide: 'left' | 'right';
  services: ServiceAreaService[];
};

export type ServiceAreaContent = {
  name: string;
  slug: ServiceAreaSlug;
  heroTitle: string;
  heroLead: string;
  heroImage: string;
  heroImageAlt: string;
  heroImagePosition: string;
  localIntroHeading: string;
  localIntroBody: string[];
  localStoryImage: string;
  localStoryImageAlt: string;
  localStoryImagePosition: string;
  areaLinks?: ServiceAreaLink[];
  finalCta: {
    heading: string;
    lead: string;
  };
  seoTitle: string;
  seoDescription: string;
};

export const SERVICE_AREA_HERO_TRUST = [
  'Mobile Dockside Service',
  'Duffy Specialists',
  'Harbor Care Programs',
  'Southern California Coverage',
] as const;

export const SERVICE_AREA_WHY_CARDS = [
  {
    title: 'Electric Boat Specialists',
    description:
      'Focused on Duffy boats, electric drive systems, batteries, chargers, controllers, and marine wiring.',
  },
  {
    title: 'Mobile Dockside Service',
    description: 'We come to private docks, harbors, and marinas across Southern California.',
  },
  {
    title: 'Harbor Care Programs',
    description:
      'Recurring dockside care, battery health checks, and priority scheduling when something changes.',
  },
  {
    title: 'Restoration & Refinishing',
    description:
      'Gelcoat, varnish, bottom paint, upholstery, and full Duffy restoration to luxury standards.',
  },
] as const;

export function getServiceAreaWhyTitle(areaName: string): string {
  return `Why ${areaName} Owners Choose EBR`;
}

export type ServiceAreaCategoryId = 'care' | 'electrical' | 'restoration' | 'exterior' | 'transport';

type CategoryImageOverride = Pick<ServiceAreaCategory, 'image' | 'imageAlt' | 'imagePosition'>;

type CategoryFieldOverride = Partial<
  Pick<ServiceAreaCategory, 'label' | 'description' | 'tone' | 'imageSide'>
> &
  CategoryImageOverride;

const SERVICE_AREA_CATEGORY_DEFS: Record<ServiceAreaCategoryId, ServiceAreaCategory> = {
  care: {
    id: 'care',
    label: 'Mobile Service & Care Programs',
    description:
      'Dockside troubleshooting, Harbor Care, monthly cleaning, and professional transport when your boat needs more than a quick visit.',
    image: ebrImage('boat maintance and cleaning', 'monthly-duffy-canopy-wash-service.jpg'),
    imageAlt: 'EBR monthly Duffy canopy wash and harbor care at the dock',
    imagePosition: 'center 42%',
    tone: 'light',
    imageSide: 'left',
    services: [
      {
        title: 'Mobile Dockside Service',
        description: 'On-site troubleshooting and repairs where you moor.',
        href: '/services/mobile-service',
      },
      {
        title: 'Harbor Care Program',
        description: 'Recurring dockside care, battery health, and priority EBR access.',
        href: '/services/harbor-care',
      },
      {
        title: 'Monthly Cleaning',
        description: 'Scheduled wash and presentation care at your marina slip.',
        href: '/services/monthly-cleaning',
      },
      {
        title: 'Boat Transport',
        description: 'Marina moves, haul-out transport, and careful logistics.',
        href: '/services/boat-transport',
      },
    ],
  },
  electrical: {
    id: 'electrical',
    label: 'Electrical Systems',
    description:
      'Diagnostics, controller repair, battery upgrades, chargers, motors, throttles, and marine electrical troubleshooting.',
    image: ebrImage('controller diagnostics: upgrades', 'controller-hero-cinematic.jpg'),
    imageAlt: 'EBR electric boat controller repair and diagnostics',
    imagePosition: 'center 38%',
    tone: 'dark',
    imageSide: 'right',
    services: [
      {
        title: 'Controller Repair',
        description: 'Factory-spec controller diagnostics and rebuilds for Duffy drive systems.',
        href: '/services/controller-repair',
      },
      {
        title: 'Battery Upgrades',
        description: 'Lithium conversions engineered for range and reliability.',
        href: '/services/battery-upgrades',
      },
      {
        title: 'Charger Upgrades',
        description: 'Dockside charging profiles matched to your battery architecture.',
        href: '/services/charger-upgrades',
      },
      {
        title: 'Electrical Diagnostics',
        description: 'System-wide troubleshooting for charging, wiring, and propulsion faults.',
        href: '/services/electrical-diagnostics',
      },
      {
        title: 'Motor Repair',
        description: 'Electric motor service, alignment, and performance restoration.',
        href: '/services/motor-repair',
      },
      {
        title: 'Throttle Repair',
        description: 'Throttle response, linkage, and drive control calibration.',
        href: '/services/throttle-repair',
      },
    ],
  },
  restoration: {
    id: 'restoration',
    label: 'Restoration & Refinishing',
    description:
      'Premium restoration for Duffy and electric harbor boats — fiberglass, bottom paint, varnish, gelcoat, upholstery, and full rebuilds.',
    image: ebrImage('varnishing', 'premium-duffy-wood-varnishing-hero.jpg'),
    imageAlt: 'Premium Duffy wood varnishing and restoration',
    imagePosition: 'center 42%',
    tone: 'light',
    imageSide: 'left',
    services: [
      {
        title: 'Duffy Restoration',
        description: 'Full cosmetic and systems restoration to luxury marine standards.',
        href: '/services/duffy-restoration',
      },
      {
        title: 'Fiberglass Repair',
        description: 'Structural and gelcoat repair with clean hull presentation.',
        href: '/services/fiberglass-repair',
      },
      {
        title: 'Bottom Paint',
        description: 'Hull prep, antifouling coatings, and long-term underwater protection.',
        href: '/services/bottom-paint',
      },
      {
        title: 'Wood Varnishing',
        description: 'Teak and brightwork refinished with marine varnish clarity.',
        href: '/services/wood-varnishing',
      },
      {
        title: 'Cushions & Upholstery',
        description: 'Premium marine upholstery and cushion upgrades for Duffy interiors.',
        href: '/services/upholstery',
      },
      {
        title: 'Gel Coat Repair',
        description: 'Color-matched gelcoat repair and premium hull refinishing.',
        href: '/services/gelcoat-repair',
      },
    ],
  },
  exterior: {
    id: 'exterior',
    label: 'Canvas, Covers & Exterior',
    description:
      'Custom-fit protection and finish details for surrey tops, isinglass, covers, flooring, and exterior presentation.',
    image: ebrImage('surrey tops: windows: covers', 'premium-duffy-canvas-upholstery-hero.jpg'),
    imageAlt: 'Custom Duffy canvas surrey top and exterior protection',
    imagePosition: 'center 44%',
    tone: 'dark',
    imageSide: 'right',
    services: [
      {
        title: 'Surrey Tops',
        description: 'Custom canvas surrey tops with clean fitment and harbor presentation.',
        href: '/services/surrey-tops',
      },
      {
        title: 'Isinglass Windows',
        description: 'Clear-window enclosures and enclosure service for year-round comfort.',
        href: '/services/isinglass-windows',
      },
      {
        title: 'Covers',
        description: 'Fitted marine covers for weather protection and storage confidence.',
        href: '/services/covers',
      },
      {
        title: 'Flooring',
        description: 'Marine flooring and deck restoration for Duffy interiors.',
        href: '/services/flooring',
      },
      {
        title: 'Buff & Wax',
        description: 'Oxidation removal, gelcoat revival, and protective harbor-ready finish.',
        href: '/services/buff-wax',
      },
    ],
  },
  transport: {
    id: 'transport',
    label: 'Transport & Logistics',
    description:
      'Marina-to-marina hauling, haul-out coordination, and careful transport when your boat needs shop time or a new home port.',
    image: ebrImage('Boat Transports', 'boat-transport-hero.jpg'),
    imageAlt: 'EBR professional Duffy boat transport and marina logistics',
    imagePosition: 'center 38%',
    tone: 'light',
    imageSide: 'left',
    services: [
      {
        title: 'Boat Transport',
        description: 'Marina moves, haul-out transport, and careful trailer logistics.',
        href: '/services/boat-transport',
      },
      {
        title: 'Mobile Dockside Service',
        description: 'On-site diagnostics and support before or after a move.',
        href: '/services/mobile-service',
      },
      {
        title: 'Electrical Diagnostics',
        description: 'Isolate charging and propulsion faults before major upgrades.',
        href: '/services/electrical-diagnostics',
      },
    ],
  },
};

const SERVICE_AREA_CATEGORY_PROFILES: Record<
  ServiceAreaSlug,
  {
    ids: ServiceAreaCategoryId[];
    overrides?: Partial<Record<ServiceAreaCategoryId, CategoryFieldOverride>>;
    categoriesLead?: string;
  }
> = {
  'newport-harbor': {
    ids: ['care', 'electrical', 'restoration', 'exterior'],
    overrides: {
      care: {
        image: ebrImage('boat maintance and cleaning', 'monthly-duffy-canopy-wash-service.jpg'),
        imageAlt: 'EBR monthly Duffy cleaning at a Newport Harbor slip',
        imagePosition: 'center 42%',
      },
      electrical: {
        image: ebrImage('electrical', 'marine-electric-system-service-newport-harbor.JPG'),
        imageAlt: 'Marine electric system service in Newport Harbor',
        imagePosition: 'center 40%',
      },
      restoration: {
        image: ebrImage('Boat Restoration', 'luxury-electric-boat-restoration-newport-harbor.JPG'),
        imageAlt: 'Luxury Duffy restoration in Newport Harbor',
        imagePosition: 'center 42%',
      },
      exterior: {
        image: ebrImage('surrey tops: windows: covers', 'custom-electric-boat-canvas-top-newport-harbor.jpg'),
        imageAlt: 'Custom electric boat canvas top in Newport Harbor',
        imagePosition: 'center 44%',
      },
    },
  },
  'huntington-harbour': {
    ids: ['care', 'electrical', 'restoration', 'exterior'],
    overrides: {
      care: {
        image: ebrImage('harbor care', 'premium-harbor-care-program-hero.jpg'),
        imageAlt: 'EBR Harbor Care along Huntington Harbour private waterways',
        imagePosition: 'center 40%',
      },
      electrical: {
        image: ebrImage('electrical', 'duffy-boat-wiring-repair-huntington-harbor.png'),
        imageAlt: 'Duffy boat wiring repair in Huntington Harbour',
        imagePosition: 'center 42%',
      },
      restoration: {
        image: ebrImage('duffy exteriors', 'electric-harbor-boat-exterior-refinishing.JPG'),
        imageAlt: 'Vintage Duffy restoration in Huntington Harbour',
        imagePosition: 'center 42%',
      },
      exterior: {
        image: ebrImage('surrey tops: windows: covers', 'custom-electric-boat-canvas-top-newport-harbor.jpg'),
        imageAlt: 'Duffy weather enclosure and canvas in Huntington Harbour',
        imagePosition: 'center 44%',
      },
    },
  },
  'dana-point': {
    ids: ['care', 'electrical', 'restoration', 'exterior'],
    overrides: {
      care: {
        image: ebrImage('harbor care', 'duffy-harbor-care-wash-service.jpg'),
        imageAlt: 'Duffy harbor care wash service at Dana Point Harbor',
        imagePosition: 'center 40%',
      },
      electrical: {
        image: ebrImage('electrical', 'premium-electric-boat-electrical-diagnostics-hero.jpg'),
        imageAlt: 'Electric boat electrical diagnostics in South Orange County',
        imagePosition: 'center 42%',
      },
      restoration: {
        image: ebrImage('Boat Transports', 'boat-transport-card-2.jpg'),
        imageAlt: 'Premium Duffy bottom paint and hull prep',
        imagePosition: 'center 42%',
      },
      exterior: {
        image: ebrImage('surrey tops: windows: covers', 'electric-harbor-boat-cover-replacement.jpg'),
        imageAlt: 'Electric harbor boat cover replacement',
        imagePosition: 'center 44%',
      },
    },
  },
  'long-beach': {
    ids: ['care', 'electrical', 'transport'],
    overrides: {
      care: {
        label: 'Mobile Dockside Service',
        description:
          'On-site diagnostics and dockside support for Long Beach and LA County marina slips — before transport or major electrical work.',
        image: ebrImage('services', 'premium-mobile-dockside-service-hero5.jpg'),
        imageAlt: 'EBR mobile dockside service at a Long Beach marina',
        imagePosition: 'center 38%',
      },
      electrical: {
        image: ebrImage('electrical', 'premium-electric-boat-electrical-diagnostics-hero.jpg'),
        imageAlt: 'Electric boat electrical diagnostics for LA County marinas',
        imagePosition: 'center 42%',
      },
      transport: {
        image: ebrImage('Boat Transports', 'boat-transport-hero.jpg'),
        imageAlt: 'EBR boat transport serving Long Beach marinas',
        imagePosition: 'center 38%',
      },
    },
    categoriesLead:
      'Three service paths for Long Beach marina owners — mobile dockside support, electrical systems, and coordinated transport.',
  },
  'lake-forest': {
    ids: ['care', 'electrical', 'transport'],
    overrides: {
      care: {
        label: 'Mobile Dockside Service',
        description:
          'Mobile diagnostics and dockside support for lake-community owners who store or launch away from major harbors.',
        image: ebrImage('services', 'premium-mobile-dockside-service-hero6.jpg'),
        imageAlt: 'EBR mobile electric boat service for inland owners',
        imagePosition: 'center 38%',
      },
      electrical: {
        image: ebrImage(
          'Battery replacements: Upgrades',
          'duffy-lithium-battery-upgrade-victron-system-banner.jpg'
        ),
        imageAlt: 'Duffy lithium battery upgrade installation',
        imagePosition: 'center 45%',
      },
      transport: {
        image: ebrImage('Boat Transports', 'marine-trailer-transport-huntington-harbor.png'),
        imageAlt: 'Marine trailer transport for inland electric boat owners',
        imagePosition: 'center 40%',
      },
    },
    categoriesLead:
      'Three service paths for Lake Forest owners — mobile diagnostics, electrical upgrades, and transport to harbor or shop.',
  },
  'mission-viejo': {
    ids: ['care', 'electrical', 'transport'],
    overrides: {
      care: {
        label: 'Mobile Dockside Service',
        description:
          'Structured mobile diagnostics and dockside support for Mission Viejo and surrounding lake communities.',
        image: ebrImage('services', 'electric-boat-battery-service-upgrade.jpg'),
        imageAlt: 'Electric boat battery service and mobile support',
        imagePosition: 'center 42%',
      },
      electrical: {
        image: ebrImage('charger diagnostics: upgrades', 'charger-upgrades-hero.jpg'),
        imageAlt: 'Duffy charger upgrade and electrical systems work',
        imagePosition: 'center 40%',
      },
      transport: {
        image: ebrImage('Boat Transports', 'boat-transport-card-1.jpg'),
        imageAlt: 'EBR electric boat transport for lake-community owners',
        imagePosition: 'center 40%',
      },
    },
    categoriesLead:
      'Three service paths for Mission Viejo lake-community owners — mobile diagnostics, electrical upgrades, and transport coordination.',
  },
  'yorba-linda': {
    ids: ['care', 'electrical', 'transport'],
    overrides: {
      care: {
        label: 'Mobile Dockside Service',
        description:
          'Mobile dockside diagnostics and on-site support for North OC owners outside the core harbor loop.',
        image: ebrImage('services', 'premium-mobile-dockside-service-hero2.jpg'),
        imageAlt: 'EBR mobile dockside electric boat service in North Orange County',
        imagePosition: 'center 38%',
      },
      electrical: {
        image: ebrImage('controller diagnostics: upgrades', 'controller-hero-cinematic.jpg'),
        imageAlt: 'EBR controller repair and electrical diagnostics',
        imagePosition: 'center 38%',
      },
      transport: {
        image: ebrImage('Boat Transports', 'electric-harbor-boat-delivery-service.JPG'),
        imageAlt: 'Electric boat delivery and transport service',
        imagePosition: 'center 42%',
      },
    },
    categoriesLead:
      'Three service paths for Yorba Linda owners — mobile diagnostics, controller and electrical work, and transport logistics.',
  },
  'orange-county': {
    ids: ['care', 'electrical', 'restoration', 'exterior'],
    overrides: {
      care: {
        image: ebrImage('harbor care', 'Duffy_care_newport_ Beach.png'),
        imageAlt: 'EBR Duffy care service across Orange County harbors',
        imagePosition: 'center 40%',
      },
      electrical: {
        image: ebrImage('controller diagnostics: upgrades', 'controller-hero-cinematic.jpg'),
        imageAlt: 'EBR electric boat controller repair across Orange County',
        imagePosition: 'center 38%',
      },
      restoration: {
        image: '/images/ebr-premium-restoration.jpg',
        imageAlt: 'Premium EBR electric boat restoration in Orange County',
        imagePosition: 'center 42%',
      },
      exterior: {
        image: ebrImage('surrey tops: windows: covers', 'premium-duffy-canvas-upholstery-hero.jpg'),
        imageAlt: 'Premium Duffy canvas and exterior protection',
        imagePosition: 'center 44%',
      },
    },
    categoriesLead:
      'County-wide capability across Orange County harbors and inland communities — four disciplines with dedicated service pages.',
  },
};

const CATEGORY_TONES: Record<ServiceAreaCategoryId, 'light' | 'dark'> = {
  care: 'light',
  electrical: 'dark',
  restoration: 'light',
  exterior: 'dark',
  transport: 'light',
};

export function getServiceAreaCategories(slug: ServiceAreaSlug): ServiceAreaCategory[] {
  const profile = SERVICE_AREA_CATEGORY_PROFILES[slug];
  return profile.ids.map((id, index) => {
    const base = SERVICE_AREA_CATEGORY_DEFS[id];
    const override = profile.overrides?.[id];
    const imageSide = index % 2 === 0 ? 'left' : 'right';
    return {
      ...base,
      ...override,
      tone: override?.tone ?? CATEGORY_TONES[id],
      imageSide: override?.imageSide ?? imageSide,
      image: override?.image ?? base.image,
      imageAlt: override?.imageAlt ?? base.imageAlt,
      imagePosition: override?.imagePosition ?? base.imagePosition,
    };
  });
}

export function getServiceAreaCategoriesLead(slug: ServiceAreaSlug, areaName: string): string {
  const profile = SERVICE_AREA_CATEGORY_PROFILES[slug];
  if (profile.categoriesLead) return profile.categoriesLead;
  const count = profile.ids.length;
  if (count === 3) {
    return `Three service paths built for ${areaName} owners — each with a dedicated page, clear scope, and request options.`;
  }
  return `Four disciplines available in ${areaName} — each with a dedicated service page, clear scope, and request options.`;
}

export const SERVICE_AREA_NEARBY_LINKS: ServiceAreaLink[] = [
  {
    name: 'Newport Harbor',
    href: '/service-areas/newport-harbor',
    description: 'Slips, moorings, and premium harbor service.',
  },
  {
    name: 'Huntington Harbour',
    href: '/service-areas/huntington-harbour',
    description: 'Private waterways and dockside Duffy support.',
  },
  {
    name: 'Long Beach',
    href: '/service-areas/long-beach',
    description: 'LA County marina service and transport.',
  },
  {
    name: 'Dana Point',
    href: '/service-areas/dana-point',
    description: 'South OC harbor maintenance and restoration.',
  },
  {
    name: 'Orange County',
    href: '/service-areas/orange-county',
    description: 'County-wide electric boat specialists.',
  },
];

export function getServiceAreaNearbyLinks(slug: ServiceAreaSlug): ServiceAreaLink[] {
  return SERVICE_AREA_NEARBY_LINKS.filter((link) => !link.href.endsWith(slug));
}

export function isServiceAreaSlug(slug: string): slug is ServiceAreaSlug {
  return (SERVICE_AREA_SLUGS as readonly string[]).includes(slug);
}

export function getServiceAreaContent(slug: string): ServiceAreaContent | null {
  if (!isServiceAreaSlug(slug)) return null;
  return SERVICE_AREA_CONTENT[slug];
}

export function getServiceAreaMeta(slug: string): { title: string; description: string } | null {
  const content = getServiceAreaContent(slug);
  if (!content) return null;
  return { title: content.seoTitle, description: content.seoDescription };
}

export const SERVICE_AREA_CONTENT: Record<ServiceAreaSlug, ServiceAreaContent> = {
  'newport-harbor': {
    name: 'Newport Harbor',
    slug: 'newport-harbor',
    heroTitle: 'Premium Electric Boat Service in Newport Harbor',
    heroLead:
      'Newport Harbor has one of the highest concentrations of Duffy and electric boats in California. EBR provides dockside diagnostics, harbor care, restoration, and transport for slips and moorings throughout the harbor.',
    heroImage: ebrImage('Boat Restoration', 'luxury-electric-boat-restoration-newport-harbor.JPG'),
    heroImageAlt: 'Luxury Duffy electric boat restoration in Newport Harbor',
    heroImagePosition: 'center 42%',
    localStoryImage: ebrImage('harbor care', 'premium-harbor-care-program-hero.jpg'),
    localStoryImageAlt: 'EBR Harbor Care at Newport Harbor marina',
    localStoryImagePosition: 'center 40%',
    localIntroHeading: 'Built for Newport Slips and Moorings',
    localIntroBody: [
      'Newport Harbor sets a high bar — tight slips, busy mooring fields, and owners who expect yacht-level presentation without yard delays. EBR works where your Duffy actually lives: at the dock, on the water, and through the seasons that matter most.',
      'We plan mobile dockside visits around your slip access, battery health, and controller performance — not a generic outboard workflow. When haul-out or shop time is required, transport is coordinated with photos, clear scope, and one point of contact.',
      'From Harbor Care at your slip to lithium upgrades and full restoration, you get one specialist team for electric systems, cosmetics, and ongoing maintenance — the standard Newport owners expect.',
    ],
    finalCta: {
      heading: 'Need help with a Duffy or electric boat in Newport Harbor?',
      lead: 'Tell us your slip location and symptoms — we will recommend the right dockside visit, upgrade, or restoration path.',
    },
    seoTitle: 'Duffy & Electric Boat Repair in Newport Harbor',
    seoDescription:
      'EBR serves Newport Harbor with mobile dockside service, Harbor Care, Duffy restoration, lithium upgrades, and electric boat transport — specialists for slips and moorings.',
  },

  'huntington-harbour': {
    name: 'Huntington Harbour',
    slug: 'huntington-harbour',
    heroTitle: 'Duffy & Electric Boat Repair in Huntington Harbour',
    heroLead:
      'Huntington Harbour\'s private waterways are home to hundreds of electric boats. EBR supports owners with mobile dockside repair, controller expertise, Harbor Care, and lithium battery upgrades.',
    heroImage: ebrImage('duffy interiors', 'custom-duffy-interior-upgrade-huntington-beach.JPG'),
    heroImageAlt: 'Custom Duffy interior upgrade in Huntington Harbour area',
    heroImagePosition: 'center 45%',
    localStoryImage: ebrImage('harbor care', 'duffy-harbor-care-wash-service.jpg'),
    localStoryImageAlt: 'EBR Duffy wash service along Huntington Harbour channels',
    localStoryImagePosition: 'center 40%',
    localIntroHeading: 'Private Docks, Channels, and Waterfront Homes',
    localIntroBody: [
      'Huntington Harbour is a neighborhood on the water — narrow channels, private docks, and a deep concentration of Duffy owners who need technicians comfortable with tight access and electric propulsion.',
      'EBR documents symptoms dockside, tests controllers and charging systems, and outlines repair scope before work begins — so you are not coordinating separate vendors for electrical, cosmetic, and maintenance needs.',
      'Harbor Care fits the rhythm of waterfront living: scheduled wash, systems checks, and priority scheduling when something changes at your home dock.',
    ],
    finalCta: {
      heading: 'Need help with a Duffy or electric boat in Huntington Harbour?',
      lead: 'Share your dock location and what the boat is doing — we will schedule the right dockside or shop path.',
    },
    seoTitle: 'Huntington Harbour Duffy Repair & Dockside Service',
    seoDescription:
      'EBR electric boat repair in Huntington Harbour — mobile dockside service, controller rebuilds, Harbor Care, and lithium battery upgrades for private waterway Duffy owners.',
  },

  'orange-county': {
    name: 'Orange County',
    slug: 'orange-county',
    heroTitle: 'Orange County Electric Boat & Duffy Specialists',
    heroLead:
      'EBR serves Duffy and electric boat owners across Orange County — from Newport and Huntington harbors to Dana Point, inland lakes, and North OC communities. Mobile dockside service and transport connect every marina to the right repair path.',
    heroImage: '/images/ebr-premium-restoration.jpg',
    heroImageAlt: 'Premium EBR electric boat restoration in Southern California',
    heroImagePosition: 'center 42%',
    localStoryImage: '/images/ebr-premium-restoration.jpg',
    localStoryImageAlt: 'Premium EBR electric boat restoration in Orange County',
    localStoryImagePosition: 'center 42%',
    localIntroHeading: 'One Team Across Orange County Harbors and Inland Communities',
    localIntroBody: [
      'Orange County electric boat ownership is not one market — Newport slips, Huntington channels, Dana Point marinas, and inland lake communities each have different access, transport, and maintenance realities. EBR built its operation around that map.',
      'Use the area links below for harbor-specific guidance, or contact us if you are unsure which community you fall under. We route mobile dockside visits, lithium upgrades, restoration, and transport to the right team.',
      'Controllers, motors, chargers, batteries, cosmetics, and Harbor Care stay under one specialist roof — so county-wide owners are not bouncing between a general mechanic and a separate cosmetic shop.',
    ],
    areaLinks: [
      { name: 'Newport Harbor', href: '/service-areas/newport-harbor', description: 'Slips, moorings, and premium harbor market service.' },
      { name: 'Huntington Harbour', href: '/service-areas/huntington-harbour', description: 'Private waterways and dockside Duffy support.' },
      { name: 'Dana Point', href: '/service-areas/dana-point', description: 'South OC harbor maintenance and restoration.' },
      { name: 'Lake Forest', href: '/service-areas/lake-forest', description: 'Inland owners — mobile service and transport.' },
      { name: 'Mission Viejo', href: '/service-areas/mission-viejo', description: 'Lake-community diagnostics and upgrades.' },
      { name: 'Yorba Linda', href: '/service-areas/yorba-linda', description: 'North OC electric systems and transport.' },
    ],
    finalCta: {
      heading: 'Need help with a Duffy or electric boat in Orange County?',
      lead: 'Tell us where the boat is moored or stored — we will route you to the right harbor team or mobile visit.',
    },
    seoTitle: 'Orange County Duffy & Electric Boat Repair',
    seoDescription:
      'EBR serves Orange County electric boat owners with mobile dockside service, transport, lithium upgrades, and Duffy restoration — Newport, Huntington, Dana Point, and inland communities.',
  },

  'dana-point': {
    name: 'Dana Point',
    slug: 'dana-point',
    heroTitle: 'Electric Boat Service in Dana Point Harbor',
    heroLead:
      'Dana Point Harbor electric boat owners rely on EBR for Harbor Care, bottom paint coordination, mobile dockside service, and transport when projects require haul-out or shop time.',
    heroImage: ebrImage('harbor care', 'premium-harbor-care-program-hero.jpg'),
    heroImageAlt: 'EBR Harbor Care at Dana Point Harbor',
    heroImagePosition: 'center 40%',
    localStoryImage: ebrImage('Boat Transports', 'marine-electric-boat-logistics-california.png'),
    localStoryImageAlt: 'Duffy bottom paint and harbor prep in Dana Point area',
    localStoryImagePosition: 'center 42%',
    localIntroHeading: 'South OC Harbor Service, Marina to Marina',
    localIntroBody: [
      'Dana Point Harbor owners use their boats often and expect reliable electric systems with clean presentation year-round. EBR supports that with scheduled Harbor Care, dockside diagnostics, and restoration sized to how you actually use the marina.',
      'Bottom paint, underwater prep, and haul-out timing are coordinated with transport and clear scope — so South OC projects do not stall across multiple vendors.',
      'Controller faults, charging issues, and lithium upgrades start with documented diagnostics and straightforward communication before major work begins.',
    ],
    finalCta: {
      heading: 'Need help with a Duffy or electric boat in Dana Point?',
      lead: 'Describe your marina, symptoms, or maintenance goals — we will outline Harbor Care, dockside, or restoration options.',
    },
    seoTitle: 'Dana Point Harbor Electric Boat Repair',
    seoDescription:
      'EBR Dana Point Harbor service — Harbor Care, bottom paint, mobile dockside repair, boat transport, and Duffy restoration for South Orange County electric boat owners.',
  },

  'long-beach': {
    name: 'Long Beach',
    slug: 'long-beach',
    heroTitle: 'Long Beach & LA County Electric Boat Service',
    heroLead:
      'EBR supports Long Beach and Los Angeles County marina owners with boat transport, mobile dockside diagnostics, electrical troubleshooting, and charger upgrades for Duffy and electric harbor cruisers.',
    heroImage: ebrImage('Boat Transports', 'boat-transport-hero.jpg'),
    heroImageAlt: 'EBR boat transport serving Long Beach and LA County marinas',
    heroImagePosition: 'center 38%',
    localStoryImage: ebrImage('electrical', 'premium-electric-boat-electrical-diagnostics-hero.jpg'),
    localStoryImageAlt: 'Electric boat electrical diagnostics for Long Beach marinas',
    localStoryImagePosition: 'center 42%',
    localIntroHeading: 'LA County Marina Service with Coordinated Transport',
    localIntroBody: [
      'Long Beach and greater LA County marina owners face real logistics — traffic windows, access constraints, and the need for clear communication when a boat moves between dock, shop, and haul-out. EBR plans transport with the same discipline we use in Orange County harbors.',
      'Mobile dockside diagnostics isolate charging faults, controller issues, and battery performance before you commit to a major upgrade. Charger profiling matches your existing or planned lithium architecture.',
      'When restoration or haul-out work is required, one team handles electric systems, cosmetics, and transport coordination — fewer handoffs between shops that do not specialize in electric boats.',
    ],
    finalCta: {
      heading: 'Need help with a Duffy or electric boat in Long Beach?',
      lead: 'Share marina location and symptoms — we will coordinate transport, dockside diagnostics, or charger upgrades.',
    },
    seoTitle: 'Long Beach Electric Boat Repair & Transport',
    seoDescription:
      'EBR Long Beach and LA County electric boat service — boat transport, mobile dockside diagnostics, charger upgrades, and Duffy systems repair for marina owners.',
  },

  'lake-forest': {
    name: 'Lake Forest',
    slug: 'lake-forest',
    heroTitle: 'Lake Forest Electric Boat Service & Support',
    heroLead:
      'Lake Forest and South Orange County lake-community owners count on EBR for mobile dockside service, transport to harbor or shop, and lithium battery and charger upgrades — without general marine shop guesswork.',
    heroImage: ebrImage('services', 'premium-mobile-dockside-service-hero6.jpg'),
    heroImageAlt: 'EBR mobile dockside electric boat service',
    heroImagePosition: 'center 38%',
    localStoryImage: ebrImage('Battery replacements: Upgrades', 'duffy-lithium-battery-upgrade-victron-system-banner.jpg'),
    localStoryImageAlt: 'Duffy lithium battery upgrade for Lake Forest owners',
    localStoryImagePosition: 'center 45%',
    localIntroHeading: 'Lake-Community Owners, Harbor-Grade Expertise',
    localIntroBody: [
      'Lake Forest owners often store or launch away from major harbors — which makes mobile diagnostics, battery and charger support, and transport planning essential rather than optional. EBR coordinates pickup, service visits, and return delivery with clear timing.',
      'Lithium conversions and charger upgrades are engineered for how you actually use the boat: range goals, charging location, and existing wiring — not off-the-shelf packages that ignore your architecture.',
      'When controllers, motors, or charging are involved, we document tests and results so you understand what failed, what was replaced, and what to watch for next season.',
    ],
    finalCta: {
      heading: 'Need help with a Duffy or electric boat in Lake Forest?',
      lead: 'Tell us where the boat is stored and what you are experiencing — we will plan mobile service or transport.',
    },
    seoTitle: 'Lake Forest Electric Boat Repair & Mobile Service',
    seoDescription:
      'EBR Lake Forest electric boat support — mobile dockside service, transport, lithium battery upgrades, and charger installations for inland South Orange County owners.',
  },

  'mission-viejo': {
    name: 'Mission Viejo',
    slug: 'mission-viejo',
    heroTitle: 'Mission Viejo Electric Boat Diagnostics & Upgrades',
    heroLead:
      'Mission Viejo and surrounding lake communities trust EBR for battery upgrades, mobile dockside diagnostics, transport coordination, and charger systems tuned to real-world use.',
    heroImage: ebrImage('services', 'electric-boat-battery-service-upgrade.jpg'),
    heroImageAlt: 'Electric boat battery service and upgrade by EBR',
    heroImagePosition: 'center 42%',
    localStoryImage: ebrImage('Battery replacements: Upgrades', 'duffy-lithium-battery-conversion-newport-beach.png'),
    localStoryImageAlt: 'Duffy lithium conversion for Mission Viejo lake-community owners',
    localStoryImagePosition: 'center 42%',
    localIntroHeading: 'Diagnostics and Upgrades for Lake-Community Owners',
    localIntroBody: [
      'Mission Viejo and surrounding lake communities need a specialist in electric propulsion and charging — not a shop built around gas outboards. EBR isolates faults with structured mobile diagnostics before recommending parts or upgrades.',
      'Lithium battery projects include charger profiling, wiring review, and realistic range expectations explained in plain language — matched to how you store, charge, and use the boat.',
      'When dockside access is limited, transport is planned upfront with status updates so you always know where the boat is in the process.',
    ],
    finalCta: {
      heading: 'Need help with a Duffy or electric boat in Mission Viejo?',
      lead: 'Share symptoms and where the boat is kept — we will recommend diagnostics, upgrades, or transport.',
    },
    seoTitle: 'Mission Viejo Electric Boat Battery & Diagnostics',
    seoDescription:
      'EBR Mission Viejo electric boat service — lithium battery upgrades, mobile diagnostics, charger upgrades, and transport for lake-community Duffy owners.',
  },

  'yorba-linda': {
    name: 'Yorba Linda',
    slug: 'yorba-linda',
    heroTitle: 'North Orange County Electric Boat Service',
    heroLead:
      'Yorba Linda owners rely on EBR for mobile dockside diagnostics, boat transport, controller repair, and lithium battery upgrades — specialist electric marine support across North OC.',
    heroImage: ebrImage('Boat Transports', 'boat-transport-card-1.jpg'),
    heroImageAlt: 'EBR electric boat transport for North Orange County owners',
    heroImagePosition: 'center 40%',
    localStoryImage: ebrImage('controller diagnostics: upgrades', 'controller-hero-cinematic.jpg'),
    localStoryImageAlt: 'EBR controller repair for North Orange County electric boats',
    localStoryImagePosition: 'center 38%',
    localIntroHeading: 'North OC Systems Support Beyond the Harbor Loop',
    localIntroBody: [
      'Yorba Linda sits outside the core harbor loop but still demands harbor-grade expertise — especially for Duffy controllers, lithium conversions, and charging problems that general shops misdiagnose.',
      'EBR combines mobile dockside diagnostics with transport when the boat needs shop-level work. You get one point of contact for testing, parts, and scheduling.',
      'Controller rebuilds and battery upgrades are documented with photos and clear estimates — the same communication standard Newport and Huntington harbor clients receive.',
    ],
    finalCta: {
      heading: 'Need help with a Duffy or electric boat in Yorba Linda?',
      lead: 'Tell us what the boat is doing and where it is stored — we will plan mobile service, controller work, or transport.',
    },
    seoTitle: 'Yorba Linda Electric Boat Repair & Transport',
    seoDescription:
      'EBR Yorba Linda electric boat repair — mobile dockside service, boat transport, controller repair, and lithium battery upgrades for North Orange County owners.',
  },
};
