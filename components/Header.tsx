'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/siteContact';

const serviceCategories = [
  {
    label: 'Electrical Systems',
    services: [
      { title: 'Controller Repair', href: '/services/controller-repair' },
      { title: 'Motor Repair', href: '/services/motor-repair' },
      { title: 'Battery Upgrades', href: '/services/battery-upgrades' },
      { title: 'Charger Upgrades', href: '/services/charger-upgrades' },
      { title: 'Electrical Diagnostics', href: '/services/electrical-diagnostics' },
      { title: 'Throttle Repair', href: '/services/throttle-repair' },
    ],
  },
  {
    label: 'Restoration',
    services: [
      { title: 'Duffy Restoration', href: '/services/duffy-restoration' },
      { title: 'Fiberglass Repair', href: '/services/fiberglass-repair' },
      { title: 'Bottom Paint', href: '/services/bottom-paint' },
      { title: 'Buff & Wax', href: '/services/buff-wax' },
      { title: 'Wood Varnishing', href: '/services/wood-varnishing' },
    ],
  },
  {
    label: 'Upholstery & Exterior',
    services: [
      { title: 'Cushions & Upholstery', href: '/services/upholstery' },
      { title: 'Surrey Tops', href: '/services/surrey-tops' },
      { title: 'Isinglass Windows', href: '/services/isinglass-windows' },
      { title: 'Covers', href: '/services/covers' },
    ],
  },
  {
    label: 'Maintenance',
    services: [
      { title: 'Harbor Care Program', href: '/services/harbor-care' },
      { title: 'Monthly Cleaning', href: '/services/monthly-cleaning' },
      { title: 'Boat Transport', href: '/services/boat-transport' },
      { title: 'Mobile Service', href: '/services/mobile-service' },
    ],
  },
];

const mobileServiceLinks = [
  { label: 'View All Services', href: '/services' },
  { label: 'Mobile Dockside Service', href: '/services/mobile-service' },
  { label: 'Boat Transport', href: '/services/boat-transport' },
  { label: 'Harbor Care', href: '/services/harbor-care' },
  { label: 'Monthly Cleaning', href: '/services/monthly-cleaning' },
  { label: 'Duffy Restoration', href: '/services/duffy-restoration' },
  { label: 'Fiberglass Repair', href: '/services/fiberglass-repair' },
  { label: 'Buff & Wax', href: '/services/buff-wax' },
  { label: 'Wood Varnishing', href: '/services/wood-varnishing' },
  { label: 'Surrey Tops', href: '/services/surrey-tops' },
  { label: 'Isinglass Windows', href: '/services/isinglass-windows' },
  { label: 'Covers', href: '/services/covers' },
  { label: 'Bottom Paint', href: '/services/bottom-paint' },
  { label: 'Cushions & Upholstery', href: '/services/upholstery' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, []);
  const closeServices = useCallback(() => setServicesOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen && !servicesOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobile();
        closeServices();
      }
    };

    const onPointerDown = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        closeServices();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [mobileOpen, servicesOpen, closeMobile, closeServices]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 header-glass ${
        scrolled ? 'header-glass-scrolled' : ''
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-[4.125rem]">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Electric Boat Repair"
              width={1759}
              height={894}
              priority
              className="w-[165px] md:w-[284px] h-auto max-h-11 md:max-h-16 object-contain object-left translate-y-[1px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
            <Link href="/" className="nav-link">
              Home
            </Link>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="nav-link flex items-center gap-1.5"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <svg
                  className={`w-3 h-3 opacity-60 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px] z-[60] ${
                  servicesOpen ? 'pointer-events-auto' : 'pointer-events-none invisible'
                }`}
              >
                <div className="bg-midnight/95 backdrop-blur-xl border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
                  <div className="p-6 grid grid-cols-2 gap-6">
                    {serviceCategories.map((cat) => (
                      <div key={cat.label}>
                        <p className="label-category mb-3 text-teal/90">{cat.label}</p>
                        <ul className="space-y-1.5">
                          {cat.services.map((svc) => (
                            <li key={svc.href}>
                              <Link
                                href={svc.href}
                                className="block text-white/60 hover:text-white text-sm transition-colors duration-300 py-0.5 focus-visible:outline-none focus-visible:text-teal"
                                onClick={closeServices}
                              >
                                {svc.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/[0.06] px-6 py-3">
                    <Link
                      href="/services"
                      className="text-teal/90 text-xs font-medium uppercase tracking-wider hover:text-teal transition-colors"
                      onClick={closeServices}
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <a
              href={SITE_PHONE_TEL}
              className="font-mono text-[11px] text-white/50 hover:text-teal transition-colors duration-300 tracking-wider"
            >
              {SITE_PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-primary-glow !px-6 !py-2.5 !text-[11px]">
              Request Service
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-white/80 min-h-11 min-w-11 flex items-center justify-center -mr-2 hover:text-white transition-colors relative z-[70]"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-16 bg-black/50 z-[55]"
            aria-label="Close menu"
            onClick={closeMobile}
          />
          <div className="lg:hidden relative z-[60] bg-ink/98 backdrop-blur-xl border-t border-white/[0.06] max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="container-site py-6 space-y-0">
              <Link
                href="/"
                className="block text-white/70 hover:text-white text-sm font-medium py-3 border-b border-white/10 transition-colors duration-300 focus-visible:outline-none focus-visible:text-teal"
                onClick={closeMobile}
              >
                Home
              </Link>

              <div className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-sm font-medium text-white/70 hover:text-white tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:text-teal"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-submenu"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  Services
                  <svg
                    className={`w-3.5 h-3.5 shrink-0 opacity-60 transition-transform duration-300 ease-in-out ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id="mobile-services-submenu"
                  className={`grid transition-all duration-300 ease-in-out ${
                    mobileServicesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <ul className="overflow-hidden pb-2">
                    {mobileServiceLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block pl-3 pr-1 py-2.5 text-sm text-white/70 hover:text-white tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:text-teal"
                          onClick={closeMobile}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {[
                { href: '/projects', label: 'Projects' },
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-white/70 hover:text-white text-sm font-medium py-3 border-b border-white/10 transition-colors duration-300 focus-visible:outline-none focus-visible:text-teal"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-5 space-y-3">
                <a
                  href={SITE_PHONE_TEL}
                  className="btn-ghost-premium w-full justify-center min-h-11"
                  onClick={closeMobile}
                >
                  Call / Text Now
                </a>
                <Link
                  href="/contact"
                  className="btn-primary-glow w-full justify-center min-h-11"
                  onClick={closeMobile}
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
