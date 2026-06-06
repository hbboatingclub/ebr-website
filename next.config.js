/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/controller-repair', destination: '/services/controller-repair', permanent: true },
      { source: '/motor-repair', destination: '/services/motor-repair', permanent: true },
      { source: '/battery-upgrades', destination: '/services/battery-upgrades', permanent: true },
      { source: '/charger-upgrades', destination: '/services/charger-upgrades', permanent: true },
      { source: '/duffy-restoration', destination: '/services/duffy-restoration', permanent: true },
      { source: '/bottom-paint', destination: '/services/bottom-paint', permanent: true },
      { source: '/boat-transport', destination: '/services/boat-transport', permanent: true },
      {
        source: '/services/harbor-care-program',
        destination: '/services/harbor-care',
        permanent: true,
      },
      {
        source: '/services/cushions-upholstery',
        destination: '/services/upholstery',
        permanent: true,
      },
      {
        source: '/service-areas/newport-beach',
        destination: '/service-areas/newport-harbor',
        permanent: true,
      },
      {
        source: '/service-areas/huntington-beach',
        destination: '/service-areas/huntington-harbour',
        permanent: true,
      },
      {
        source: '/locations/newport-beach',
        destination: '/service-areas/newport-harbor',
        permanent: true,
      },
      {
        source: '/locations/huntington-beach',
        destination: '/service-areas/huntington-harbour',
        permanent: true,
      },
      {
        source: '/locations/:slug',
        destination: '/service-areas/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
