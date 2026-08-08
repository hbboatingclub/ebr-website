import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import { SERVICE_AREAS, SERVICE_AREA_COUNT } from '@/lib/serviceAreas';
import { SITE_PHONE_DISPLAY, SITE_PHONE_SMS, SITE_PHONE_TEL } from '@/lib/siteContact';
import { sanityFetch } from '@/lib/sanity.client';
import {
  FEATURED_PROJECTS_QUERY,
  FEATURED_POSTS_QUERY,
  FEATURED_TESTIMONIALS_QUERY,
} from '@/lib/queries';
import { urlFor } from '@/lib/sanity.client';
import { buildPageMetadata } from '@/lib/seo';

const homeMetadata = buildPageMetadata({
  title: 'Electric Boat Repair & Duffy Boat Specialists',
  description:
    'Expert Duffy boat repair, controller rebuilds, motor repair, lithium conversions & restoration. Mobile service from $120/hr. Call (949) 213-1500.',
  path: '/',
  image: '/images/hero-duffy.JPG',
});

export const metadata: Metadata = {
  ...homeMetadata,
  title: {
    absolute: 'Electric Boat Repair & Duffy Boat Specialists | EBR Electric Boat Repair',
  },
};

const premiumServices = [
  {
    title: 'Electric Drive Systems',
    description:
      'Controller, motor, and throttle service — factory-spec diagnostics for Duffy and electric harbor cruisers.',
    href: '/services/controller-repair',
    image: '/images/ebr-electric-drive-systems.jpg',
    imageAlt: 'EBR technician servicing electric drive systems on a Duffy boat',
    imagePosition: 'center 42%',
  },
  {
    title: 'Lithium Battery Upgrades',
    description:
      'Lithium conversions and charger upgrades engineered for range, safety, and reliability.',
    href: '/services/battery-upgrades',
    image: '/images/ebr-lithium-battery-upgrades.jpg',
    imageAlt: 'Professional lithium battery upgrade installation on an electric boat',
    imagePosition: 'center 48%',
  },
  {
    title: 'Premium Restoration',
    description:
      'Full Duffy restoration and precision finishing — dockside craftsmanship to a luxury marine standard.',
    href: '/services/duffy-restoration',
    image: '/images/ebr-premium-restoration.jpg',
    imageAlt: 'Premium Duffy hull buffing and restoration by EBR',
    imagePosition: '42% center',
  },
];

const restorationServices = [
  { title: 'Fiberglass & Gelcoat', href: '/services/fiberglass-repair' },
  { title: 'Bottom Paint', href: '/services/bottom-paint' },
  { title: 'Cushions & Upholstery', href: '/services/upholstery' },
  { title: 'Surrey Tops & Isinglass', href: '/services/surrey-tops' },
  { title: 'Wood Varnishing', href: '/services/wood-varnishing' },
  { title: 'Buff & Wax', href: '/services/buff-wax' },
];

const harborCareItems = [
  'Monthly hull & deck wash',
  'Dockside systems inspection',
  'Battery state-of-charge check',
  'Charger operation verify',
  'Upholstery wipe-down',
  'Bilge inspection & pump test',
  'Photo update to owner',
  'Priority service scheduling',
];

export default async function HomePage() {
  // Fetch CMS data — gracefully handle missing data during initial setup
  let featuredProjects: any[] = [];
  let featuredPosts: any[] = [];
  let testimonials: any[] = [];

  try {
    [featuredProjects, featuredPosts, testimonials] = (await Promise.all([
      sanityFetch(FEATURED_PROJECTS_QUERY),
      sanityFetch(FEATURED_POSTS_QUERY),
      sanityFetch(FEATURED_TESTIMONIALS_QUERY),
    ])) as [any[], any[], any[]];
  } catch {
    // Sanity not yet configured — render with static fallback content
  }

  return (
    <>
      <Header />
      <main className="home-premium">
        {/* ── 1. HERO ───────────────────────────────────────── */}
        <section className="home-hero noise-overlay">
          <div className="home-hero__grid" aria-hidden />
          <div className="home-hero__image">
            <Image
              src="/images/hero-duffy.JPG"
              alt="Duffy electric boat on Southern California harbor water"
              fill
              priority
              className="home-hero__photo object-cover"
              sizes="100vw"
            />
            <div className="home-hero__scrim" aria-hidden />
            <div className="home-hero__scrim-left" aria-hidden />
            <div className="home-hero__depth" aria-hidden />
            <div className="home-hero__vignette" aria-hidden />
          </div>
          <div className="home-hero__fade-bottom" aria-hidden />

          <div className="container-site home-hero__content">
            <div className="home-hero__copy">
              <span
                className="home-hero__eyebrow label-hero block animate-fade-up opacity-0"
                style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
              >
                Southern California&apos;s Premium Electric Boat Specialists
              </span>

              <h1
                className="home-hero__title animate-fade-up opacity-0"
                style={{ animationDelay: '120ms', animationFillMode: 'forwards' }}
              >
                EBR Electric
                <br />
                <span className="text-teal italic font-normal">Boat Repair</span>
                <br />
                <span className="text-white/95">&amp; Restoration</span>
              </h1>

              <p
                className="home-hero__lead animate-fade-up opacity-0"
                style={{ animationDelay: '220ms', animationFillMode: 'forwards' }}
              >
                Duffy boat controller rebuilds, motor repair, lithium battery upgrades, charger systems, diagnostics, restoration, and premium harbor maintenance.
              </p>

              <p
                className="home-hero__trust animate-fade-up opacity-0"
                style={{ animationDelay: '280ms', animationFillMode: 'forwards' }}
              >
                Newport · Huntington · Long Beach · Dana Point · Mobile service from $120/hr
              </p>

              <div
                className="home-hero__actions animate-fade-up opacity-0"
                style={{ animationDelay: '360ms', animationFillMode: 'forwards' }}
              >
                <Link
                  href="/contact"
                  className="btn-primary-glow !px-9 !py-4 !text-[11px] !tracking-[0.16em] transition-all duration-500 ease-out hover:!-translate-y-0.5 hover:!shadow-teal-glow-lg active:!translate-y-0"
                >
                  Request Service
                </Link>
                <Link
                  href="/projects"
                  className="btn-ghost-premium !px-9 !py-4 !text-[11px] !tracking-[0.16em] transition-all duration-500 ease-out hover:!-translate-y-0.5 hover:!border-white/35 hover:!bg-white/[0.1] active:!translate-y-0"
                >
                  View Projects →
                </Link>
              </div>
            </div>
          </div>

        </section>

        {/* ── 2. AUTHORITY BAR ─────────────────────────────── */}
        <section className="home-authority">
          <div className="container-site">
            <p className="home-authority__tagline font-mono text-[10px] text-navy/70 uppercase tracking-[0.22em] text-center mb-5 md:mb-6">
              Trusted across Southern California harbors
            </p>
            <div className="home-authority__stats">
              {[
                { num: '500+', label: 'Boats Serviced' },
                { num: '15+', label: 'Years Experience' },
                { num: String(SERVICE_AREA_COUNT), label: 'Service Areas' },
                { num: '5★', label: 'Google Reviews' },
              ].map((stat) => (
                <div key={stat.label} className="home-authority__stat">
                  <p className="home-authority__stat-value">{stat.num}</p>
                  <p className="home-authority__stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. PREMIUM SERVICES ───────────────────────────── */}
        <section className="section-services-showcase home-showcase relative bg-ink overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1528] via-ink to-ink pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
              backgroundSize: '72px 72px',
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(83,209,200,0.08), transparent 65%)',
            }}
          />
          <div className="section-services-showcase__fade" aria-hidden />

          <div className="container-site relative z-10">
            <div className="home-showcase__intro">
              <span className="label-hero home-showcase__eyebrow block">
                Southern California Expertise
              </span>
              <h2 className="home-showcase__heading">
                Precision Service for
                <br />
                <span className="text-teal italic">Electric Boats</span>
              </h2>
              <p className="home-showcase__lead">
                Dockside craftsmanship with the polish of a luxury marine brand.
              </p>
            </div>

            <div className="home-showcase__grid">
              {premiumServices.map((svc, index) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="service-card-cinematic group animate-fade-up opacity-0"
                  style={{
                    animationDelay: `${120 + index * 100}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    fill
                    className="service-card-cinematic__image"
                    style={{ objectPosition: svc.imagePosition }}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink from-[0%] via-ink/75 via-[18%] to-transparent to-[46%]" />
                  <div className="service-card-cinematic__content">
                    <h3 className="service-card-cinematic__title">{svc.title}</h3>
                    <p className="service-card-cinematic__description">{svc.description}</p>
                    <span className="service-card-cinematic__link">
                      Learn More
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. RESTORATION SECTION ───────────────────────── */}
        <section className="section-restoration home-restoration -mt-5 md:-mt-6 lg:-mt-8">
          <div className="section-restoration__edge" aria-hidden />
          <div className="section-restoration__bridge" aria-hidden />
          <div className="section-restoration__glow" aria-hidden />
          <div className="section-restoration__grid" aria-hidden />
          <div className="container-site relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 items-start">
              <div className="home-editorial-copy max-w-lg lg:pt-1">
                <span className="label-hero home-editorial-copy__eyebrow block">Full-Service Restoration</span>
                <span className="teal-rule" />
                <h2 className="home-editorial-copy__heading">
                  Repair. Restore. Modernize.
                </h2>
                <p className="home-editorial-copy__lead max-w-md">
                  Beyond the electrical systems, EBR handles every aspect of Duffy restoration — from hull refinishing to premium interior upholstery. We bring boats back to better than original condition.
                </p>
                <Link href="/services" className="btn-outline">
                  All Restoration Services
                </Link>
              </div>

              <div className="restoration-services-panel">
                <p className="font-mono text-[10px] text-teal uppercase tracking-[0.2em] mb-4">
                  Restoration Services
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {restorationServices.map((svc) => (
                    <Link key={svc.href} href={svc.href} className="group restoration-tile">
                      <span className="w-1 h-1 rounded-full bg-teal flex-shrink-0" />
                      <span className="restoration-tile__title">{svc.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. BEFORE & AFTER (CMS only — hidden until projects exist) ─ */}
        {featuredProjects.length > 0 && (
          <section className="section-light section-light--white section-pad-tight">
            <div className="section-light__wash" />
            <div className="section-light__grid" />
            <div className="container-site relative z-10">
              <div className="section-intro section-intro--center mb-7 md:mb-8">
                <span className="teal-rule mx-auto" />
                <h2 className="section-heading">
                  Real Electric Boat Transformations
                </h2>
                <p className="section-lead mx-auto">
                  Before and after results from real EBR projects across Southern California.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {featuredProjects.slice(0, 6).map((project: any) => (
                  <Link key={project._id} href={`/projects/${project.slug.current}`} className="group card-premium">
                    <div className="relative aspect-video bg-gray-100 overflow-hidden">
                      {project.afterImage?.asset ? (
                        <Image
                          src={urlFor(project.afterImage.asset).width(600).height(338).url()}
                          alt={project.afterImage.alt || project.projectTitle}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-navy-DEFAULT/10 flex items-center justify-center">
                          <span className="font-mono text-xs text-gray-400">Photo Coming Soon</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="bg-navy-DEFAULT/90 backdrop-blur text-teal-DEFAULT font-mono text-[10px] uppercase tracking-widest px-2 py-1">
                          {project.projectCategory?.replace(/-/g, ' ')}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-navy-DEFAULT text-lg mb-1 group-hover:text-teal-DEFAULT transition-colors">
                        {project.projectTitle}
                      </h3>
                      {project.location && (
                        <p className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">{project.location}</p>
                      )}
                      {project.shortDescription && (
                        <p className="text-gray-600 text-sm line-clamp-2">{project.shortDescription}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link href="/projects" className="btn-primary">
                  View All Projects
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── 6. HARBOR CARE PROGRAM ───────────────────────── */}
        <section className="section-harbor-care home-harbor">
          <div className="section-harbor-care__divider" aria-hidden />
          <div className="section-harbor-care__grid" aria-hidden />
          <div className="section-harbor-care__glow" aria-hidden />
          <div className="container-site relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 items-start">
              <div className="home-editorial-copy max-w-lg">
                <span className="label-hero home-editorial-copy__eyebrow block">Dockside Maintenance</span>
                <span className="teal-rule" />
                <h2 className="home-editorial-copy__heading">
                  Monthly Duffy Boat Maintenance
                </h2>
                <p className="home-editorial-copy__lead">
                  The Harbor Care Program keeps your Duffy boat running, looking great, and protected year-round — without you having to think about it. We handle everything dockside.
                </p>
                <Link href="/services/harbor-care" className="btn-primary">
                  Join Harbor Care
                </Link>
              </div>

              <div className="harbor-care-panel">
                <p className="harbor-care-panel__label">What&apos;s Included</p>
                <ul className="space-y-2.5">
                  {harborCareItems.map((item) => (
                    <li key={item} className="harbor-care-panel__item">
                      <span className="w-4 h-4 rounded-full border border-teal flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. TESTIMONIALS ──────────────────────────────── */}
        {testimonials.length > 0 && (
          <section className="section-light section-light--soft section-pad-tight">
            <div className="section-light__wash" />
            <div className="container-site relative z-10">
              <div className="section-intro section-intro--center mb-7 md:mb-8">
                <span className="teal-rule mx-auto" />
                <h2 className="section-heading">What Boat Owners Say</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {testimonials.map((t: any) => (
                  <div key={t._id} className="card-premium p-7 md:p-8">
                    <div className="flex mb-3">
                      {Array.from({ length: t.rating || 5 }).map((_, i) => (
                        <span key={i} className="text-gold-DEFAULT text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.reviewText}"</p>
                    <div>
                      <p className="font-semibold text-navy-DEFAULT text-sm">{t.customerName}</p>
                      {t.location && <p className="font-mono text-xs text-gray-400 mt-0.5">{t.location}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 8. SERVICE AREAS ─────────────────────────────── */}
        <section className="section-service-areas">
          <div className="section-service-areas__fade-top" aria-hidden />
          <div className="section-service-areas__texture" aria-hidden />
          <div className="section-service-areas__wash" aria-hidden />
          <div className="section-service-areas__fade-bottom" aria-hidden />
          <div className="container-site section-service-areas__inner relative z-10">
            <div className="section-service-areas__intro">
              <span className="teal-rule mx-auto" />
              <h2 className="section-service-areas__heading">Service Areas</h2>
              <p className="section-service-areas__lead">
                EBR serves marinas and harbors throughout Southern California&apos;s coast.
              </p>
            </div>
            <div className="service-areas-panel">
              <div className="service-areas-pills">
                {SERVICE_AREAS.map((area) => (
                  <Link key={area.href} href={area.href} className="group area-pill">
                    <span className="w-1 h-1 rounded-full bg-teal/80 flex-shrink-0" />
                    <span className="area-pill__label">{area.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. BLOG PREVIEW ──────────────────────────────── */}
        {featuredPosts.length > 0 && (
          <section className="section-light section-light--soft section-pad-tight">
            <div className="section-light__wash" />
            <div className="container-site relative z-10">
              <div className="flex items-end justify-between mb-7 md:mb-8">
                <div>
                  <span className="teal-rule" />
                  <h2 className="section-heading">From the Blog</h2>
                </div>
                <Link href="/blog" className="font-mono text-xs text-teal-DEFAULT uppercase tracking-wider hover:underline hidden md:block">
                  All Articles →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredPosts.map((post: any) => (
                  <Link key={post._id} href={`/blog/${post.slug.current}`} className="group card-premium bg-white">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      {post.featuredImage?.asset && (
                        <Image
                          src={urlFor(post.featuredImage.asset).width(600).height(338).url()}
                          alt={post.featuredImage.alt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      {post.category && (
                        <span className="label-category block mb-2">
                          {post.category.replace(/-/g, ' ')}
                        </span>
                      )}
                      <h3 className="font-display text-navy-DEFAULT text-lg leading-tight group-hover:text-teal-DEFAULT transition-colors">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 10. FINAL CTA ────────────────────────────────── */}
        <section className="section-cta-final home-cta-final">
          <div className="section-cta-final__fade-top" aria-hidden />
          <div className="section-cta-final__glow" aria-hidden />
          <div className="section-cta-final__grid" aria-hidden />
          <div className="container-site section-cta-final__inner relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 lg:items-center">
              <div className="section-cta-final__copy">
                <span className="label-hero mb-4 block text-teal">Concierge Service Request</span>
                <span className="teal-rule" />
                <h2 className="section-cta-final__heading">
                  Need Help With Your Duffy or Electric Boat?
                </h2>
                <p className="section-cta-final__lead">
                  From a dead controller to a full restoration — our team handles it. Tell us what&apos;s going on and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="section-cta-final__actions flex flex-wrap gap-3">
                  <a href={SITE_PHONE_TEL} className="btn-outline">
                    {SITE_PHONE_DISPLAY}
                  </a>
                  <a href={SITE_PHONE_SMS} className="btn-ghost">
                    Text Us
                  </a>
                </div>
              </div>

              <div className="cta-form-panel">
                <p className="cta-form-panel__title">Service Request</p>
                <ServiceRequestForm compact luxury />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
