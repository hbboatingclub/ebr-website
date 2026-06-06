import type { Metadata } from 'next';
import { ebrImage } from '@/lib/mediaPaths';
import { SUPPORTING_SERVICE_SLUGS, getSupportingServiceContent } from '@/lib/supportingServiceContent';
import { CONTROLLER_REPAIR_SLUG, controllerHero } from '@/lib/controllerRepairContent';
import { BATTERY_UPGRADE_SLUG, batteryHero } from '@/lib/batteryUpgradeContent';
import { ELECTRICAL_DIAGNOSTICS_SLUG, diagnosticsHero } from '@/lib/electricalDiagnosticsContent';
import { MOTOR_REPAIR_SLUG, motorHero } from '@/lib/motorRepairContent';
import { CHARGER_UPGRADE_SLUG, chargerHero } from '@/lib/chargerUpgradeContent';
import { DUFFY_RESTORATION_SLUG } from '@/lib/duffyRestorationContent';
import { HARBOR_CARE_SLUG, harborCareHero } from '@/lib/harborCareContent';
import { BOTTOM_PAINT_SLUG, bottomPaintHero } from '@/lib/bottomPaintContent';
import { UPHOLSTERY_SLUG } from '@/lib/upholsteryContent';
import { BOAT_TRANSPORT_SLUG, transportHero } from '@/lib/boatTransportContent';

export const SITE_URL = 'https://electricboatrepair.com';

/** Branded dockside service hero — used when a page has no dedicated hero image */
export const DEFAULT_OG_IMAGE = `${SITE_URL}${ebrImage('services', 'premium-mobile-dockside-service-hero1.jpg')}`;

export const LOCAL_SERVICE_SLUGS = [
  CONTROLLER_REPAIR_SLUG,
  BATTERY_UPGRADE_SLUG,
  ELECTRICAL_DIAGNOSTICS_SLUG,
  MOTOR_REPAIR_SLUG,
  CHARGER_UPGRADE_SLUG,
  DUFFY_RESTORATION_SLUG,
  HARBOR_CARE_SLUG,
  BOTTOM_PAINT_SLUG,
  UPHOLSTERY_SLUG,
  BOAT_TRANSPORT_SLUG,
  ...SUPPORTING_SERVICE_SLUGS,
] as const;

const PREMIUM_SERVICE_HERO_IMAGES: Record<string, string> = {
  [CONTROLLER_REPAIR_SLUG]: controllerHero.src,
  [BATTERY_UPGRADE_SLUG]: batteryHero.src,
  [ELECTRICAL_DIAGNOSTICS_SLUG]: diagnosticsHero.src,
  [MOTOR_REPAIR_SLUG]: motorHero.src,
  [CHARGER_UPGRADE_SLUG]: chargerHero.src,
  [DUFFY_RESTORATION_SLUG]: ebrImage(
    'Boat Restoration',
    'luxury-electric-boat-restoration-newport-harbor.JPG',
  ),
  [HARBOR_CARE_SLUG]: harborCareHero.src,
  [BOTTOM_PAINT_SLUG]: bottomPaintHero.src,
  [UPHOLSTERY_SLUG]: ebrImage('cushions', 'premium-duffy-cushion-upholstery-hero.jpg'),
  [BOAT_TRANSPORT_SLUG]: transportHero.src,
};

export function canonicalUrl(path: string): string {
  if (!path || path === '/') return SITE_URL;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function absoluteImageUrl(src: string): string {
  if (src.startsWith('http')) return src;
  return `${SITE_URL}${src.startsWith('/') ? src : `/${src}`}`;
}

export function getLocalServiceHeroImage(slug: string): string | undefined {
  const supporting = getSupportingServiceContent(slug);
  if (supporting) return supporting.hero.src;
  return PREMIUM_SERVICE_HERO_IMAGES[slug];
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = canonicalUrl(path);
  const ogImage = image ? absoluteImageUrl(image) : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: 'EBR Electric Boat Repair',
      title,
      description,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
