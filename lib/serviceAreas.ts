export type ServiceArea = {
  name: string;
  slug: string;
  area: string;
  description: string;
  href: string;
};

/** Canonical service areas — single source of truth (8 areas) */
export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Huntington Harbour',
    slug: 'huntington-harbour',
    area: 'Huntington Harbour',
    href: '/service-areas/huntington-harbour',
    description:
      'Huntington Harbour\'s private waterways are home to hundreds of electric boats. EBR specializes in mobile dockside service, diagnostics, and full-facility repairs for Huntington Harbour owners.',
  },
  {
    name: 'Newport Harbor',
    slug: 'newport-harbor',
    area: 'Newport Harbor',
    href: '/service-areas/newport-harbor',
    description:
      'With more electric boats per capita than almost any harbor in California, Newport Harbor is core to EBR\'s service area. We service boats at slips and moorings throughout the harbor.',
  },
  {
    name: 'Long Beach',
    slug: 'long-beach',
    area: 'Los Angeles County',
    href: '/service-areas/long-beach',
    description:
      'EBR provides electric boat repair and Duffy service in Long Beach, including controller rebuilds, motor repair, charger upgrades, lithium battery upgrades, diagnostics, restoration, and harbor maintenance.',
  },
  {
    name: 'Dana Point',
    slug: 'dana-point',
    area: 'South Orange County',
    href: '/service-areas/dana-point',
    description:
      'Dana Point Harbor electric boat owners rely on EBR for controller repair, motor service, lithium upgrades, electrical diagnostics, restoration, and ongoing harbor care.',
  },
  {
    name: 'Orange County',
    slug: 'orange-county',
    area: 'Southern California',
    href: '/service-areas/orange-county',
    description:
      'EBR serves electric boat and Duffy owners throughout Orange County — controller repair, motor service, charger upgrades, lithium conversions, diagnostics, restoration, and harbor maintenance.',
  },
  {
    name: 'Lake Forest',
    slug: 'lake-forest',
    area: 'South Orange County',
    href: '/service-areas/lake-forest',
    description:
      'EBR supports Lake Forest electric boat owners with controller repair, motor service, charger upgrades, lithium battery upgrades, electrical diagnostics, restoration, and harbor maintenance — mobile dockside service available.',
  },
  {
    name: 'Mission Viejo',
    slug: 'mission-viejo',
    area: 'South Orange County',
    href: '/service-areas/mission-viejo',
    description:
      'Mission Viejo and surrounding lake communities trust EBR for precision electric boat service — from controller and motor repair to lithium upgrades, diagnostics, restoration, and harbor care.',
  },
  {
    name: 'Yorba Linda',
    slug: 'yorba-linda',
    area: 'North Orange County',
    href: '/service-areas/yorba-linda',
    description:
      'EBR provides expert electric boat repair for Yorba Linda owners, including controller repair, motor service, charger upgrades, lithium battery upgrades, electrical diagnostics, restoration, and harbor maintenance.',
  },
];

/** Retired slugs → canonical service area routes */
export const SERVICE_AREA_SLUG_REDIRECTS: Record<string, string> = {
  'newport-beach': '/service-areas/newport-harbor',
  'huntington-beach': '/service-areas/huntington-harbour',
};

export const SERVICE_AREA_COUNT = SERVICE_AREAS.length;

export function getServiceAreaRedirect(slug: string): string | undefined {
  return SERVICE_AREA_SLUG_REDIRECTS[slug];
}

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}

export function getServiceAreaSlugs(): string[] {
  return SERVICE_AREAS.map((area) => area.slug);
}

/** @deprecated Use SERVICE_AREAS — retained for location route static data map */
export function getServiceAreasRecord(): Record<string, Omit<ServiceArea, 'href'>> {
  return Object.fromEntries(
    SERVICE_AREAS.map(({ name, slug, area, description }) => [slug, { name, slug, area, description }])
  );
}
