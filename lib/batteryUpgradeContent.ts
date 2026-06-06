import { ebrImage } from '@/lib/mediaPaths';

export const BATTERY_UPGRADE_SLUG = 'battery-upgrades';

export const batteryUpgradeMeta = {
  title: 'Lithium Battery Upgrades for Duffy & Electric Boats',
  description:
    'EBR designs and installs marine-grade lithium battery upgrades for Duffy and electric harbor boats — longer runtime, faster charging, Victron monitoring, and OEM-level electrical integration across Southern California.',
};

export const batteryHero = {
  src: ebrImage('Battery replacements: Upgrades', 'duffy-lithium-battery-upgrade-victron-system-banner.jpg'),
  alt: 'EBR Victron Lynx lithium battery upgrade system on Duffy electric boat',
  position: '68% 44%',
};

export const batteryComparisons = [
  {
    legacy: 'Heavy lead-acid battery banks',
    modern: 'Lightweight lithium battery packs',
  },
  {
    legacy: 'Slow overnight charging cycles',
    modern: 'Rapid, efficient lithium charging',
  },
  {
    legacy: 'Voltage sag under load',
    modern: 'Stable power delivery all day',
  },
  {
    legacy: 'Limited harbor runtime',
    modern: 'Extended all-day electric operation',
  },
  {
    legacy: 'Ongoing watering & maintenance',
    modern: 'Maintenance-free lithium architecture',
  },
];

export const batteryWhyEbr = {
  title: 'Why EBR for Lithium Battery Upgrades',
  paragraphs: [
    'EBR engineers lithium upgrades as complete propulsion systems — not drop-in battery swaps. Every install accounts for charger compatibility, BMS behavior, wiring capacity, monitoring, and how your Duffy actually runs in harbor service.',
    'We integrate Victron monitoring, marine-grade cabling, proper fusing, and safety interlocks so your boat gains modern range and reliability without compromising electrical integrity.',
    'From power planning through water testing, you get OEM-level execution, clear documentation, and a system built for Southern California electric harbor operation.',
  ],
  pillars: [
    'Marine-grade wiring & terminations',
    'Victron monitoring integration',
    'Charger & BMS compatibility',
    'Safety systems & proper fusing',
    'Battery management architecture',
    'Duffy-specific power planning',
    'Custom runtime & load analysis',
  ],
};

export const batteryProcess = [
  {
    step: '01',
    title: 'Evaluate',
    description:
      'We assess your existing battery bank, charger, wiring, motor load, and daily usage to define the right lithium architecture and runtime targets.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Custom lithium layout, BMS selection, Victron monitoring plan, charger strategy, and integration path — engineered for your boat and operating profile.',
  },
  {
    step: '03',
    title: 'Install & Configure',
    description:
      'Professional install with marine-grade wiring, proper mounting, charger setup, monitoring configuration, and full electrical verification before launch.',
  },
  {
    step: '04',
    title: 'Water Test & Delivery',
    description:
      'On-water validation of runtime, charging behavior, voltage stability, and propulsion performance — with clear handoff on operation and care.',
  },
];

export const batterySystemOptions = [
  {
    title: '36V Lithium Systems',
    description: 'Engineered packs and BMS architecture for legacy 36V Duffy and harbor boat platforms.',
  },
  {
    title: '48V Lithium Systems',
    description: 'Higher-voltage lithium banks for improved efficiency, range, and modern drive compatibility.',
  },
  {
    title: 'Victron Monitoring',
    description: 'Cerbo, GX, and display integration for real-time state of charge, alarms, and system visibility.',
  },
  {
    title: 'Smart Chargers',
    description: 'Lithium-profile charging with proper current limits, temperature awareness, and dockside reliability.',
  },
  {
    title: 'DC-DC Systems',
    description: 'Auxiliary power conversion and house-load support integrated with the propulsion architecture.',
  },
  {
    title: 'Full Electrical Modernization',
    description: 'End-to-end upgrade of batteries, wiring, monitoring, and charging for next-generation harbor operation.',
  },
];

export const batteryPerformanceStats = [
  {
    label: 'Runtime',
    value: 'Extended',
    detail: 'All-day harbor operation with properly sized lithium banks',
  },
  {
    label: 'Weight',
    value: 'Reduced',
    detail: 'Significant mass savings vs. lead-acid for better efficiency',
  },
  {
    label: 'Recharge',
    value: 'Faster',
    detail: 'Shorter dockside turnaround with lithium-optimized charging',
  },
  {
    label: 'Voltage',
    value: 'Stable',
    detail: 'Consistent delivery under throttle without heavy sag',
  },
  {
    label: 'Operation',
    value: 'Quieter',
    detail: 'More efficient propulsion with less electrical stress',
  },
];

export const batteryGallery = [
  {
    src: ebrImage('Battery replacements: Upgrades', 'duffy-lithium-battery-installation.jpg'),
    alt: 'EBR Duffy lithium battery installation with marine electrical integration',
    caption: 'Battery install · Marine integration',
    position: 'center 44%',
  },
  {
    src: ebrImage('Battery replacements: Upgrades', 'victron-lithium-system-integration.jpg'),
    alt: 'EBR Victron lithium system integration on electric harbor boat',
    caption: 'Victron system · Clean integration',
    position: 'center 44%',
  },
];

export const batteryFaqs = [
  {
    question: 'How long do marine lithium batteries last?',
    answer:
      'Quality lithium cells in a properly engineered marine install typically deliver many years of reliable service. Lifespan depends on usage, charging habits, temperature, and BMS configuration — which is why EBR designs systems with correct charging profiles and monitoring from day one.',
  },
  {
    question: 'How much runtime can I expect after a lithium upgrade?',
    answer:
      'Runtime gains depend on your current bank, motor load, and how you operate the boat. After evaluation, we size lithium capacity for your actual harbor schedule — targeting meaningful all-day improvement vs. aging lead-acid performance.',
  },
  {
    question: 'How long does charging take with lithium?',
    answer:
      'Lithium accepts charge more efficiently than lead-acid when paired with the right charger profile. We match charger output to bank capacity so you get faster, safer dockside turnaround without stressing cells or wiring.',
  },
  {
    question: 'Will lithium work with my existing charger and electrical system?',
    answer:
      'Compatibility is evaluated during the design phase. Some installs require charger upgrades, BMS integration, or wiring improvements. EBR maps the full circuit — charger, contactors, monitoring, and motor load — before any install begins.',
  },
  {
    question: 'Are lithium upgrades safe on electric boats?',
    answer:
      'Yes, when engineered correctly. EBR uses marine-grade wiring, proper fusing, BMS protection, and installation practices aligned to electric propulsion loads. Safety architecture is part of the upgrade — not an afterthought.',
  },
  {
    question: 'What maintenance do lithium systems require?',
    answer:
      'Lithium eliminates lead-acid watering and reduces routine upkeep. Ongoing care focuses on monitoring state of charge, keeping connections secure, and following charging best practices — with Victron visibility when integrated.',
  },
];
