import { redirect } from 'next/navigation';
import { getServiceAreaBySlug, getServiceAreaRedirect, getServiceAreaSlugs } from '@/lib/serviceAreas';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getServiceAreaSlugs().map((slug) => ({ slug }));
}

/** Legacy /locations/* URLs redirect to canonical /service-areas/* routes */
export default function LocationRedirectPage({ params }: Props) {
  const legacyRedirect = getServiceAreaRedirect(params.slug);
  if (legacyRedirect) {
    redirect(legacyRedirect);
  }

  const area = getServiceAreaBySlug(params.slug);
  if (!area) {
    redirect('/contact');
  }
  redirect(area.href);
}
