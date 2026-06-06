import Image from 'next/image';
import Link from 'next/link';
import { SERVICE_AREAS } from '@/lib/serviceAreas';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/siteContact';

const serviceLinks = [
  { title: 'Controller Repair', href: '/services/controller-repair' },
  { title: 'Motor Repair', href: '/services/motor-repair' },
  { title: 'Battery Upgrades', href: '/services/battery-upgrades' },
  { title: 'Charger Upgrades', href: '/services/charger-upgrades' },
  { title: 'Electrical Diagnostics', href: '/services/electrical-diagnostics' },
  { title: 'Duffy Restoration', href: '/services/duffy-restoration' },
  { title: 'Bottom Paint', href: '/services/bottom-paint' },
  { title: 'Upholstery', href: '/services/upholstery' },
  { title: 'Harbor Care Program', href: '/services/harbor-care' },
  { title: 'Boat Transport', href: '/services/boat-transport' },
];

const locationLinks = SERVICE_AREAS.map((area) => ({
  title: area.name,
  href: area.href,
}));

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="container-site footer-premium__main">
        <div className="footer-premium__grid">
          {/* Brand column */}
          <div className="footer-premium__brand-col">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Electric Boat Repair"
                width={1759}
                height={894}
                className="footer-premium__logo"
              />
            </Link>
            <p className="footer-premium__copy mb-4 max-w-xs">
              Southern California&apos;s electric boat specialists. Expert Duffy repair, restoration, and ongoing harbor maintenance.
            </p>
            <div className="space-y-2">
              <a href={SITE_PHONE_TEL} className="footer-premium__contact-phone">
                {SITE_PHONE_DISPLAY}
              </a>
              <a href="mailto:service@electricboatrepair.com" className="footer-premium__contact-email">
                service@electricboatrepair.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-premium__heading">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-premium__link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas — 2-column mini grid */}
          <div className="footer-premium__areas-col">
            <h4 className="footer-premium__heading">Service Areas</h4>
            <ul className="footer-premium__areas-grid">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-premium__areas-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + CTA */}
          <div className="footer-premium__company-col">
            <h4 className="footer-premium__heading">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="footer-premium__link">About EBR</Link></li>
              <li><Link href="/projects" className="footer-premium__link">Projects</Link></li>
              <li><Link href="/blog" className="footer-premium__link">Blog</Link></li>
              <li><Link href="/contact" className="footer-premium__link">Contact</Link></li>
            </ul>
            <div className="footer-premium__cta">
              <Link href="/contact" className="btn-primary text-xs w-full sm:w-auto">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-premium__bar">
        <div className="container-site footer-premium__bar-inner flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="footer-premium__copyright">
            © {new Date().getFullYear()} EBR Electric Boat Repair & Restoration. All rights reserved.
          </p>
          <p className="footer-premium__tagline">
            Precision electric boat repair, lithium upgrades, and luxury Duffy restoration throughout Southern California.
          </p>
        </div>
      </div>
    </footer>
  );
}
