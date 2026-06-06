import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_AREAS, SERVICE_AREA_COUNT } from '@/lib/serviceAreas';
import { SITE_PHONE_TEL } from '@/lib/siteContact';

const values = [
  {
    title: 'Technical Depth',
    desc: 'We specialize in electric propulsion systems — controllers, motors, batteries, and wiring — not just surface repairs.',
  },
  {
    title: 'Duffy Expertise',
    desc: 'Duffy boats are our core. We know every model, every electrical system, and every common failure mode.',
  },
  {
    title: 'Full-Service Capability',
    desc: 'From diagnostics to full restoration — hull, interior, upholstery, and systems — one shop handles everything.',
  },
  {
    title: 'Honest Communication',
    desc: 'We tell you what the boat actually needs, not what is most profitable. Photos, documentation, and clear estimates every time.',
  },
];

const stats = [
  { num: '500+', label: 'Boats Serviced' },
  { num: '15+', label: 'Years Experience' },
  { num: String(SERVICE_AREA_COUNT), label: 'Service Areas' },
  { num: '100%', label: 'Electric Focused' },
];

export default function AboutPageView() {
  return (
    <main className="hub-premium hub-premium--about">
      <section className="hub-premium-hero">
        <div className="hub-premium-hero__image">
          <Image
            src="/images/ebr-premium-restoration.jpg"
            alt="Premium Duffy boat restoration by EBR in Southern California"
            fill
            priority
            className="hub-premium-hero__photo object-cover"
            style={{ objectPosition: 'center 42%' }}
            sizes="100vw"
          />
        </div>
        <div className="hub-premium-hero__scrim" aria-hidden />
        <div className="hub-premium-hero__scrim-left" aria-hidden />
        <div className="hub-premium-hero__vignette" aria-hidden />
        <div className="container-site hub-premium-hero__content">
          <span className="label-hero hub-premium-hero__eyebrow block">Who We Are</span>
          <h1 className="hub-premium-hero__title">Southern California&apos;s Electric Boat Specialists</h1>
          <p className="hub-premium-hero__lead">
            EBR was built to solve the problem Duffy and electric boat owners kept running into — no shop in
            Southern California truly understood electric marine systems. We changed that.
          </p>
        </div>
      </section>

      <section className="hub-premium-trust" aria-label="EBR credentials">
        <div className="container-site">
          <ul className="hub-premium-trust__list">
            {['Duffy Specialists', 'Electric Systems', 'Full Restoration', 'Dockside Service', 'Southern California'].map(
              (item) => (
                <li key={item} className="hub-premium-trust__item">
                  <span className="hub-premium-trust__label">{item}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--light">
        <div className="hub-premium-section__texture" aria-hidden />
        <div className="container-site relative z-10">
          <div className="hub-premium-split">
            <div>
              <span className="teal-rule" />
              <h2 className="hub-premium-heading">Why EBR Exists</h2>
              <div className="hub-premium-prose">
                <p>
                  Electric boat repair is a niche that most general marine shops are not equipped for. Duffy boats —
                  the most popular electric cruisers on Southern California harbors — have unique systems that require
                  specific knowledge to diagnose and repair correctly.
                </p>
                <p>
                  EBR was founded to fill that gap. Our team has rebuilt hundreds of Duffy controllers, converted
                  lead-acid fleets to lithium, repaired motors that other shops said were unrepairable, and restored
                  boats to better-than-factory condition.
                </p>
                <p>
                  We serve boat owners across Orange County, Newport Harbor, Huntington Harbour, Long Beach, Dana Point,
                  and surrounding harbors — with mobile service available at the dock.
                </p>
              </div>
            </div>
            <div className="hub-premium-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hub-premium-stat">
                  <p className="hub-premium-stat__value">{stat.num}</p>
                  <p className="hub-premium-stat__label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--dark">
        <div className="hub-premium-section__glow" aria-hidden />
        <div className="container-site relative z-10">
          <div className="hub-premium-intro hub-premium-intro--center">
            <span className="teal-rule mx-auto" />
            <h2 className="hub-premium-heading hub-premium-heading--light">How We Work</h2>
          </div>
          <div className="hub-premium-values">
            {values.map((v) => (
              <div key={v.title} className="hub-premium-value-card">
                <h3 className="hub-premium-value-card__title">{v.title}</h3>
                <p className="hub-premium-value-card__text">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hub-premium-section hub-premium-section--light">
        <div className="container-site relative z-10 text-center">
          <span className="teal-rule mx-auto" />
          <h2 className="hub-premium-heading">Where We Serve</h2>
          <p className="hub-premium-lead mx-auto max-w-xl">
            EBR operates throughout Southern California&apos;s coast, with mobile dockside service available at most
            major marinas.
          </p>
          <div className="hub-premium-areas">
            {SERVICE_AREAS.map((area) => (
              <span key={area.slug} className="hub-premium-areas__tag">
                {area.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta-final hub-premium-cta">
        <div className="section-cta-final__glow" aria-hidden />
        <div className="section-cta-final__grid" aria-hidden />
        <div className="container-site section-cta-final__inner relative z-10">
          <div className="hub-premium-cta__copy mx-auto text-center max-w-2xl">
            <span className="label-hero mb-4 block">Get Started</span>
            <span className="teal-rule mx-auto" />
            <h2 className="section-cta-final__heading">Let&apos;s Talk About Your Boat</h2>
            <p className="section-cta-final__lead mx-auto">
              Whether it is a quick diagnostic or a full restoration, we are ready to help.
            </p>
            <div className="hub-premium-cta__actions">
              <Link href="/contact" className="btn-primary hub-premium-cta__btn">
                Request Service
              </Link>
              <a href={SITE_PHONE_TEL} className="btn-outline hub-premium-cta__btn">
                Call / Text Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
