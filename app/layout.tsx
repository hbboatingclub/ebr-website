import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { SITE_PHONE_SCHEMA } from '@/lib/siteContact';
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo';

import { GA_MEASUREMENT_ID } from '@/lib/gaConfig';

export const metadata: Metadata = {
  title: {
    default: 'EBR Electric Boat Repair',
    template: '%s | EBR Electric Boat Repair',
  },
  description:
    'EBR specializes in Duffy boat repair, controller rebuilds, lithium battery upgrades, charger systems, motor repair, restoration, and monthly maintenance across Orange County, Newport Harbor, Huntington Harbour, and Long Beach.',
  keywords: [
    'Duffy boat repair', 'electric boat repair', 'controller rebuild', 'lithium battery upgrade',
    'Newport Harbor boat repair', 'Huntington Harbour electric boat', 'Orange County marine repair',
    'Duffy boat restoration', 'electric boat motor repair', 'boat charger upgrade',
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'EBR Electric Boat Repair',
    title: 'Electric Boat Repair & Duffy Boat Specialists | EBR Southern California',
    description: 'Southern California\'s premier Duffy boat and electric boat specialists. Controller rebuilds, lithium upgrades, restoration, and more.',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EBR Electric Boat Repair | Southern California',
    description: 'Duffy boat specialists. Controller rebuilds, lithium upgrades, restoration, and monthly maintenance.',
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'icon',
        url: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'EBR Electric Boat Repair & Restoration',
              description: 'Southern California\'s electric boat specialists. Duffy boat repair, controller rebuilds, lithium battery upgrades, restoration.',
              url: 'https://electricboatrepair.com',
              telephone: SITE_PHONE_SCHEMA,
              areaServed: [
                'Orange County',
                'Huntington Harbour',
                'Newport Harbor',
                'Long Beach',
                'Dana Point',
                'Lake Forest',
                'Mission Viejo',
                'Yorba Linda',
              ],
              serviceType: 'Marine Repair and Restoration',
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
