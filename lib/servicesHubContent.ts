import { ebrImage } from '@/lib/mediaPaths';

export const servicesHubMeta = {
  title: 'Premium Electric Boat Services',
  description:
    'Southern California’s specialists in Duffy boats, electric marine systems, restoration, transport, and harbor care — dockside service across Newport, Huntington, Long Beach, and Dana Point.',
};

export const servicesHubHero = {
  src: ebrImage('services', 'premium-mobile-dockside-service-hero1.jpg'),
  alt: 'EBR premium mobile dockside service at Southern California marina',
  position: 'center 38%',
};

export const servicesHubTrustItems = [
  'Mobile Dockside Service',
  'Harbor Care Membership',
  'Duffy Restoration',
  'Electrical Specialists',
  'Southern California Coverage',
];

export type ServicesHubFeaturedItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
};

export const servicesHubFlagship: ServicesHubFeaturedItem = {
  title: 'Mobile Dockside Service',
  description:
    'On-site diagnostics, electrical support, and specialist care at your slip — without the yard hassle. EBR comes to you across Southern California harbors.',
  href: '/services/mobile-service',
  image: ebrImage('services', 'premium-mobile-dockside-service-hero1.jpg'),
  imageAlt: 'EBR mobile dockside service at marina',
  imagePosition: 'center 40%',
};

export const servicesHubFeaturedSupporting: ServicesHubFeaturedItem[] = [
  {
    title: 'Harbor Care Program',
    description:
      'White-glove ongoing maintenance, battery monitoring, and priority scheduling for confident harbor ownership.',
    href: '/services/harbor-care',
    image: ebrImage('harbor care', 'premium-harbor-care-program-hero.jpg'),
    imageAlt: 'EBR Harbor Care program at Southern California marina',
    imagePosition: 'center 40%',
  },
  {
    title: 'Duffy Restoration',
    description:
      'Complete cosmetic and systems restoration — gelcoat, upholstery, electrical, and luxury marine finishing.',
    href: '/services/duffy-restoration',
    image: ebrImage('Boat Restoration', 'luxury-electric-boat-restoration-newport-harbor.JPG'),
    imageAlt: 'Luxury Duffy electric boat restoration Newport Harbor',
    imagePosition: 'center 38%',
  },
  {
    title: 'Boat Transport',
    description:
      'Professional Duffy hauling, marina-to-marina moves, and careful trailer logistics across Southern California.',
    href: '/services/boat-transport',
    image: ebrImage('Boat Transports', 'boat-transport-hero.jpg'),
    imageAlt: 'EBR professional Duffy boat transport',
    imagePosition: 'center 36%',
  },
];

export type ServicesHubWhyCard = {
  title: string;
  description: string;
};

export const servicesHubWhy = {
  title: 'Why Boat Owners Choose EBR',
  subtitle: 'One team for electric systems, restoration, care programs, and dockside support.',
  cards: [
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
      title: 'Restoration-Level Detail',
      description:
        'From varnish and gelcoat to bottom paint and full Duffy restoration, every detail is treated like a finished yacht.',
    },
    {
      title: 'Care Beyond Repairs',
      description:
        'Harbor Care and monthly cleaning programs keep boats looking sharp and running reliably.',
    },
  ] satisfies ServicesHubWhyCard[],
};

export type ServicesHubService = {
  title: string;
  description: string;
  href: string;
};

export type ServicesHubChapter = {
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  tone: 'light' | 'dark';
  imageSide: 'left' | 'right';
  services: ServicesHubService[];
};

export const servicesHubChapters: ServicesHubChapter[] = [
  {
    id: 'electrical',
    label: 'Electrical Systems',
    description:
      'Diagnostics, controller repair, battery upgrades, chargers, motors, throttles, and marine electrical troubleshooting.',
    image: ebrImage('controller diagnostics: upgrades', 'controller-hero-cinematic.jpg'),
    imageAlt: 'EBR electric boat controller repair and diagnostics',
    imagePosition: 'center 38%',
    tone: 'light',
    imageSide: 'left',
    services: [
      {
        title: 'Controller Repair',
        description: 'Factory-spec controller diagnostics and rebuilds for Duffy drive systems.',
        href: '/services/controller-repair',
      },
      {
        title: 'Battery Upgrades',
        description: 'Lithium conversions and bank upgrades engineered for range and reliability.',
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
  {
    id: 'restoration',
    label: 'Restoration & Refinishing',
    description:
      'Premium restoration work for Duffy and electric harbor boats — fiberglass, bottom paint, varnish, gelcoat, upholstery, and full rebuilds.',
    image: ebrImage('varnishing', 'premium-duffy-wood-varnishing-hero.jpg'),
    imageAlt: 'Premium Duffy wood varnishing and restoration',
    imagePosition: 'center 42%',
    tone: 'dark',
    imageSide: 'right',
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
  {
    id: 'exterior',
    label: 'Canvas, Covers & Exterior Protection',
    description:
      'Custom-fit protection and finish details for surrey tops, isinglass windows, covers, flooring, and exterior upgrades.',
    image: ebrImage('surrey tops: windows: covers', 'premium-duffy-canvas-upholstery-hero.jpg'),
    imageAlt: 'Custom Duffy canvas surrey top and exterior protection',
    imagePosition: 'center 44%',
    tone: 'light',
    imageSide: 'left',
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
  {
    id: 'care',
    label: 'Care Programs & Logistics',
    description:
      'Keep your boat ready with mobile service, monthly cleaning, harbor care, and professional transport.',
    image: ebrImage('boat maintance and cleaning', 'monthly-duffy-canopy-wash-service.jpg'),
    imageAlt: 'EBR harbor care and electric boat maintenance',
    imagePosition: 'center 42%',
    tone: 'dark',
    imageSide: 'right',
    services: [
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
        title: 'Mobile Dockside Service',
        description: 'On-site troubleshooting and repairs where you moor.',
        href: '/services/mobile-service',
      },
      {
        title: 'Boat Transport',
        description: 'Marina-to-marina hauling and service transport coordination.',
        href: '/services/boat-transport',
      },
    ],
  },
];

export const servicesHubAreas = {
  title: 'Serving Southern California’s Electric Boat Communities',
  description:
    'From Huntington Harbour to Newport Harbor, Long Beach, Dana Point, and private docks across Orange County, EBR brings premium electric boat service directly to the water.',
};

export const servicesHubCoverageAreas = [
  { name: 'Huntington Harbour', href: '/service-areas/huntington-harbour' },
  { name: 'Newport Harbor', href: '/service-areas/newport-harbor' },
  { name: 'Long Beach', href: '/service-areas/long-beach' },
  { name: 'Dana Point', href: '/service-areas/dana-point' },
  { name: 'Orange County', href: '/service-areas/orange-county' },
];

export const servicesHubFinalCta = {
  title: 'Need help with your Duffy or electric boat?',
  lead: 'Tell us what is going on and we’ll point you toward the right repair, upgrade, care program, or transport option.',
};

/** @deprecated Use servicesHubChapters */
export type ServicesHubGroup = {
  label: string;
  services: ServicesHubService[];
};

/** @deprecated Use servicesHubChapters */
export const servicesHubGroups = servicesHubChapters.map(({ label, services }) => ({ label, services }));

/** @deprecated Use servicesHubFlagship + servicesHubFeaturedSupporting */
export const servicesHubFeatured = [servicesHubFlagship, ...servicesHubFeaturedSupporting];
