import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ControllerRepairPageView from '@/components/ControllerRepairPageView';
import BatteryUpgradePageView from '@/components/BatteryUpgradePageView';
import ElectricalDiagnosticsPageView from '@/components/ElectricalDiagnosticsPageView';
import MotorRepairPageView from '@/components/MotorRepairPageView';
import ChargerUpgradePageView from '@/components/ChargerUpgradePageView';
import DuffyRestorationPageView from '@/components/DuffyRestorationPageView';
import HarborCarePageView from '@/components/HarborCarePageView';
import BottomPaintPageView from '@/components/BottomPaintPageView';
import UpholsteryPageView from '@/components/UpholsteryPageView';
import BoatTransportPageView from '@/components/BoatTransportPageView';
import SupportingServicePageView from '@/components/SupportingServicePageView';
import { sanityFetch, urlFor } from '@/lib/sanity.client';
import { SERVICE_BY_SLUG_QUERY, ALL_SERVICES_QUERY } from '@/lib/queries';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/siteContact';
import {
  BATTERY_UPGRADE_SLUG,
  batteryUpgradeMeta,
} from '@/lib/batteryUpgradeContent';
import {
  CONTROLLER_REPAIR_SLUG,
  controllerRepairMeta,
} from '@/lib/controllerRepairContent';
import {
  ELECTRICAL_DIAGNOSTICS_SLUG,
  electricalDiagnosticsMeta,
} from '@/lib/electricalDiagnosticsContent';
import { MOTOR_REPAIR_SLUG, motorRepairMeta } from '@/lib/motorRepairContent';
import { CHARGER_UPGRADE_SLUG, chargerUpgradeMeta } from '@/lib/chargerUpgradeContent';
import { DUFFY_RESTORATION_SLUG, duffyRestorationMeta } from '@/lib/duffyRestorationContent';
import { HARBOR_CARE_SLUG, harborCareMeta } from '@/lib/harborCareContent';
import { BOTTOM_PAINT_SLUG, bottomPaintMeta } from '@/lib/bottomPaintContent';
import { UPHOLSTERY_SLUG, upholsteryMeta } from '@/lib/upholsteryContent';
import { BOAT_TRANSPORT_SLUG, boatTransportMeta } from '@/lib/boatTransportContent';
import {
  isSupportingServiceSlug,
  getSupportingServiceMeta,
  type SupportingServiceSlug,
} from '@/lib/supportingServiceContent';
import {
  LOCAL_SERVICE_SLUGS,
  buildPageMetadata,
  getLocalServiceHeroImage,
} from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const local = LOCAL_SERVICE_SLUGS.map((slug) => ({ slug }));

  try {
    const services: any[] = await sanityFetch(ALL_SERVICES_QUERY);
    const sanity = services.map((s) => ({ slug: s.slug.current }));
    const seen = new Set(local.map((entry) => entry.slug));
    return [...local, ...sanity.filter((entry) => !seen.has(entry.slug))];
  } catch {
    return local;
  }
}

function buildServicePageMetadata(
  slug: string,
  title: string,
  description: string,
): Metadata {
  return buildPageMetadata({
    title,
    description,
    path: `/services/${slug}`,
    image: getLocalServiceHeroImage(slug),
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.slug === CONTROLLER_REPAIR_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      controllerRepairMeta.title,
      controllerRepairMeta.description,
    );
  }

  if (params.slug === BATTERY_UPGRADE_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      batteryUpgradeMeta.title,
      batteryUpgradeMeta.description,
    );
  }

  if (params.slug === ELECTRICAL_DIAGNOSTICS_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      electricalDiagnosticsMeta.title,
      electricalDiagnosticsMeta.description,
    );
  }

  if (params.slug === MOTOR_REPAIR_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      motorRepairMeta.title,
      motorRepairMeta.description,
    );
  }

  if (params.slug === CHARGER_UPGRADE_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      chargerUpgradeMeta.title,
      chargerUpgradeMeta.description,
    );
  }

  if (params.slug === DUFFY_RESTORATION_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      duffyRestorationMeta.title,
      duffyRestorationMeta.description,
    );
  }

  if (params.slug === HARBOR_CARE_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      harborCareMeta.title,
      harborCareMeta.description,
    );
  }

  if (params.slug === BOTTOM_PAINT_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      bottomPaintMeta.title,
      bottomPaintMeta.description,
    );
  }

  if (params.slug === UPHOLSTERY_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      upholsteryMeta.title,
      upholsteryMeta.description,
    );
  }

  if (params.slug === BOAT_TRANSPORT_SLUG) {
    return buildServicePageMetadata(
      params.slug,
      boatTransportMeta.title,
      boatTransportMeta.description,
    );
  }

  const supportingMeta = getSupportingServiceMeta(params.slug);
  if (supportingMeta) {
    return buildServicePageMetadata(
      params.slug,
      supportingMeta.title,
      supportingMeta.description,
    );
  }

  try {
    const service: any = await sanityFetch(SERVICE_BY_SLUG_QUERY, { slug: params.slug });
    if (!service) return {};
    const title = service.seo?.seoTitle || service.serviceTitle;
    const description = service.seo?.seoDescription || service.introCopy;
    return buildPageMetadata({
      title,
      description,
      path: `/services/${params.slug}`,
    });
  } catch {
    return {};
  }
}

export default async function ServicePage({ params }: Props) {
  if (params.slug === CONTROLLER_REPAIR_SLUG) {
    return (
      <>
        <Header />
        <ControllerRepairPageView />
        <Footer />
      </>
    );
  }

  if (params.slug === BATTERY_UPGRADE_SLUG) {
    return (
      <>
        <Header />
        <BatteryUpgradePageView />
        <Footer />
      </>
    );
  }

  if (params.slug === ELECTRICAL_DIAGNOSTICS_SLUG) {
    return (
      <>
        <Header />
        <ElectricalDiagnosticsPageView />
        <Footer />
      </>
    );
  }

  if (params.slug === MOTOR_REPAIR_SLUG) {
    return (
      <>
        <Header />
        <MotorRepairPageView />
        <Footer />
      </>
    );
  }

  if (params.slug === CHARGER_UPGRADE_SLUG) {
    return (
      <>
        <Header />
        <ChargerUpgradePageView />
        <Footer />
      </>
    );
  }

  if (params.slug === DUFFY_RESTORATION_SLUG) {
    return (
      <>
        <Header />
        <DuffyRestorationPageView />
        <Footer />
      </>
    );
  }

  if (params.slug === HARBOR_CARE_SLUG) {
    return (
      <>
        <Header />
        <HarborCarePageView />
        <Footer />
      </>
    );
  }

  if (params.slug === BOTTOM_PAINT_SLUG) {
    return (
      <>
        <Header />
        <BottomPaintPageView />
        <Footer />
      </>
    );
  }

  if (params.slug === UPHOLSTERY_SLUG) {
    return (
      <>
        <Header />
        <UpholsteryPageView />
        <Footer />
      </>
    );
  }

  if (params.slug === BOAT_TRANSPORT_SLUG) {
    return (
      <>
        <Header />
        <BoatTransportPageView />
        <Footer />
      </>
    );
  }

  if (isSupportingServiceSlug(params.slug)) {
    return (
      <>
        <Header />
        <SupportingServicePageView slug={params.slug as SupportingServiceSlug} />
        <Footer />
      </>
    );
  }

  let service: any = null;
  try {
    service = await sanityFetch(SERVICE_BY_SLUG_QUERY, { slug: params.slug });
  } catch {}

  // For services not yet in CMS, render a placeholder page
  const title = service?.serviceTitle || params.slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy-DEFAULT pt-32 pb-16 overflow-hidden">
          {service?.heroImage?.asset && (
            <div className="absolute inset-0">
              <Image
                src={urlFor(service.heroImage.asset).width(1600).height(600).url()}
                alt={service.heroImage.alt || title}
                fill
                className="object-cover opacity-20"
              />
            </div>
          )}
          <div className="container-site relative z-10">
            <Link href="/services" className="font-mono text-xs text-gray-400 uppercase tracking-wider hover:text-teal-DEFAULT transition-colors mb-6 block">
              ← All Services
            </Link>
            {service?.serviceCategory && (
              <span className="label-category block mb-3">
                {service.serviceCategory.replace(/-/g, ' ')}
              </span>
            )}
            <h1 className="font-display text-softwhite text-5xl md:text-6xl mb-4">{title}</h1>
            {service?.introCopy && (
              <p className="text-gray-300 text-xl max-w-2xl">{service.introCopy}</p>
            )}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#request" className="btn-primary">Request This Service</a>
              <a href={SITE_PHONE_TEL} className="btn-outline">{SITE_PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="container-site py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Common Problems */}
              {service?.commonProblems?.length > 0 && (
                <div>
                  <span className="teal-rule" />
                  <h2 className="font-display text-navy-DEFAULT text-3xl mb-6">Common Problems We Solve</h2>
                  <ul className="space-y-3">
                    {service.commonProblems.map((problem: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="w-5 h-5 bg-teal-DEFAULT/10 border border-teal-DEFAULT/30 flex items-center justify-center text-teal-DEFAULT text-xs flex-shrink-0 mt-0.5">✓</span>
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Services Included */}
              {service?.servicesIncluded?.length > 0 && (
                <div>
                  <span className="teal-rule" />
                  <h2 className="font-display text-navy-DEFAULT text-3xl mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.servicesIncluded.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-softwhite border border-gray-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-DEFAULT flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Steps */}
              {service?.processSteps?.length > 0 && (
                <div>
                  <span className="teal-rule" />
                  <h2 className="font-display text-navy-DEFAULT text-3xl mb-6">Our Process</h2>
                  <div className="space-y-4">
                    {service.processSteps.map((step: any, i: number) => (
                      <div key={i} className="flex gap-5 p-5 bg-white border border-gray-100">
                        <span className="font-mono text-2xl text-teal-DEFAULT/40 font-bold leading-none w-8 flex-shrink-0">
                          {String(step.stepNumber || i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h4 className="font-semibold text-navy-DEFAULT mb-1">{step.title}</h4>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {service?.galleryImages?.length > 0 && (
                <div>
                  <span className="teal-rule" />
                  <h2 className="font-display text-navy-DEFAULT text-3xl mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {service.galleryImages.map((img: any, i: number) => (
                      <div key={i} className="aspect-square relative overflow-hidden">
                        <Image
                          src={urlFor(img.asset).width(400).height(400).url()}
                          alt={img.alt || `${title} gallery`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Projects */}
              {service?.relatedProjects?.length > 0 && (
                <div>
                  <span className="teal-rule" />
                  <h2 className="font-display text-navy-DEFAULT text-3xl mb-6">Related Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.relatedProjects.map((project: any) => (
                      <Link key={project._id} href={`/projects/${project.slug.current}`} className="group card-premium p-4 bg-white flex gap-4">
                        {project.featuredImage?.asset && (
                          <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden">
                            <Image
                              src={urlFor(project.featuredImage.asset).width(160).height(160).url()}
                              alt={project.projectTitle}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className="font-display text-navy-DEFAULT text-sm group-hover:text-teal-DEFAULT transition-colors">{project.projectTitle}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {service?.faqs?.length > 0 && (
                <div>
                  <span className="teal-rule" />
                  <h2 className="font-display text-navy-DEFAULT text-3xl mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq: any, i: number) => (
                      <details key={i} className="group border border-gray-200 bg-white">
                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-navy-DEFAULT">
                          {faq.question}
                          <span className="text-teal-DEFAULT group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA card */}
              <div id="request" className="bg-navy-DEFAULT p-7">
                <p className="label-category mb-4 text-teal-DEFAULT">Request Service</p>
                <h3 className="font-display text-softwhite text-2xl mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-6">Ready to get started? Fill out the form and we'll get back to you within 24 hours.</p>
                <ServiceRequestForm compact />
              </div>

              {/* Related services */}
              {service?.relatedServices?.length > 0 && (
                <div className="bg-softwhite p-6 border border-gray-100">
                  <p className="label-category mb-4">Related Services</p>
                  <ul className="space-y-2">
                    {service.relatedServices.map((s: any) => (
                      <li key={s.slug.current}>
                        <Link href={`/services/${s.slug.current}`} className="text-sm text-gray-600 hover:text-teal-DEFAULT transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-teal-DEFAULT" />
                          {s.serviceTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
