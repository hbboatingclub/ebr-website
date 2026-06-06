import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import { urlFor } from '@/lib/sanity.client';
import { getServiceAreaBySlug } from '@/lib/serviceAreas';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SCHEMA, SITE_PHONE_TEL } from '@/lib/siteContact';

const LOCATION_SERVICES = [
  'Controller Repair & Rebuilds',
  'Electric Motor Repair & Replacement',
  'Lithium Battery Upgrades',
  'Charger Upgrades & Installation',
  'Electrical System Diagnostics',
  'Full Duffy Boat Restoration',
  'Harbor Care & Dockside Maintenance',
];

interface LocationPageViewProps {
  slug: string;
  location?: {
    locationName?: string;
    introCopy?: string;
    heroImage?: { asset?: { _ref?: string }; alt?: string };
    localContent?: any;
  } | null;
}

export default function LocationPageView({ slug, location }: LocationPageViewProps) {
  const fallback = getServiceAreaBySlug(slug);
  const name = location?.locationName || fallback?.name || slug;
  const description = location?.introCopy || fallback?.description || '';

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-navy-DEFAULT pt-32 pb-20 overflow-hidden">
          {location?.heroImage?.asset && (
            <div className="absolute inset-0">
              <Image
                src={urlFor(location.heroImage.asset).width(1600).height(600).url()}
                alt={location.heroImage.alt || name}
                fill
                className="object-cover opacity-15"
              />
            </div>
          )}
          <div className="container-site relative z-10">
            <span className="label-category block mb-4">Service Area</span>
            <h1 className="font-display text-softwhite text-5xl md:text-6xl mb-4">
              Electric Boat Repair in {name}
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl">{description}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="btn-primary">
                Request Service in {name}
              </Link>
              <a href={SITE_PHONE_TEL} className="btn-outline">
                {SITE_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="teal-rule" />
                <h2 className="font-display text-navy-DEFAULT text-4xl mb-6">
                  Services Available in {name}
                </h2>
                <div className="space-y-3">
                  {LOCATION_SERVICES.map((svc) => (
                    <div key={svc} className="flex items-center gap-3 py-2 border-b border-gray-50">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-DEFAULT flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{svc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-navy-DEFAULT p-8">
                  <p className="label-category mb-4 text-teal-DEFAULT">Request Service in {name}</p>
                  <ServiceRequestForm compact />
                </div>
              </div>
            </div>
          </div>
        </section>

        {location?.localContent && (
          <section className="section-pad bg-softwhite">
            <div className="container-site max-w-3xl">
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy-DEFAULT">
                <PortableText value={location.localContent} />
              </div>
            </div>
          </section>
        )}

        <section className="section-pad bg-white">
          <div className="container-site max-w-3xl">
            <span className="teal-rule" />
            <h2 className="font-display text-navy-DEFAULT text-3xl mb-6">
              Duffy Boat Specialists Serving {name}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                EBR is {name}&apos;s go-to resource for Duffy boat and electric boat repair. Unlike general marine shops, we specialize exclusively in electric boat systems — which means faster diagnosis, more accurate repairs, and results that last.
              </p>
              <p>
                Whether your Duffy needs a controller rebuild, lithium battery upgrade, motor service, or full restoration — EBR has the expertise to handle it correctly.
              </p>
              <p>
                We offer mobile dockside service throughout {name} for diagnostics, minor repairs, and harbor maintenance. For larger projects, we transport boats to our facility and keep you informed throughout the process.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `EBR Electric Boat Repair — ${name}`,
            description: `Duffy boat repair and electric boat service in ${name}, California.`,
            url: `https://electricboatrepair.com/service-areas/${slug}`,
            telephone: SITE_PHONE_SCHEMA,
            areaServed: name,
            serviceType: 'Marine Repair and Restoration',
          }),
        }}
      />
    </>
  );
}
