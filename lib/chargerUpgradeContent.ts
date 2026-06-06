import { ebrImage } from '@/lib/mediaPaths';

export const CHARGER_UPGRADE_SLUG = 'charger-upgrades';

export const chargerUpgradeMeta = {
  title: 'Marine Charger Upgrades & Smart Charging Systems',
  description:
    'EBR installs lithium-compatible charger upgrades, Victron monitoring, and modern onboard charging systems for Duffy and electric harbor boats — faster, safer charging across Southern California.',
};

export const chargerHero = {
  src: ebrImage('charger diagnostics: upgrades', 'charger-upgrades-hero.jpg'),
  alt: 'EBR marine charger upgrade and smart charging systems on electric harbor boat',
  position: '68% 44%',
};

export const chargerIssues = [
  'Charger not charging or shutting off',
  'Flashing charger fault codes',
  'Slow or incomplete charging cycles',
  'Incompatible charger for lithium systems',
  'Overheated charger or wiring',
  'Battery imbalance during charging',
  'Unreliable shore power charging',
  'Outdated onboard charging architecture',
];

export const chargerWhyEbr = {
  title: 'Why EBR for Charger Upgrades',
  paragraphs: [
    'Modern electric boats demand charging systems engineered for lithium profiles, monitoring visibility, and marine-grade reliability — not legacy chargers left over from older battery architectures.',
    'EBR evaluates your battery bank, BMS behavior, shore power path, and onboard electrical layout before specifying Delta-Q, Victron, Lester, NOCO, or integrated smart charging solutions.',
    'You get high-end marine electrical authority: correct charge profiles, safer wiring, monitoring integration, and dockside performance you can trust every day.',
  ],
  pillars: [
    'Charger & battery compatibility',
    'Lithium-safe charge profiles',
    'Victron monitoring integration',
    'Proper charge curve configuration',
    'Onboard charging architecture',
    'Marine-grade wiring & protection',
    'Safer electrical systems',
    'Charging performance optimization',
  ],
};

export const chargerProcess = [
  {
    step: '01',
    title: 'Evaluate',
    description:
      'Assessment of existing chargers, shore power delivery, battery type, BMS communication, and daily charging patterns before any hardware is specified.',
  },
  {
    step: '02',
    title: 'Verify Compatibility',
    description:
      'Battery architecture, voltage, and profile requirements are confirmed so the new charging system matches lithium or legacy platforms safely.',
  },
  {
    step: '03',
    title: 'Install & Configure',
    description:
      'Marine-grade install with proper fusing, cabling, charger programming, and monitoring integration for a complete onboard charging ecosystem.',
  },
  {
    step: '04',
    title: 'Test & Monitor',
    description:
      'Charging performance validation, fault verification, and monitoring handoff — confirming reliable dockside operation and system visibility.',
  },
];

export const chargerSystemOptions = [
  {
    title: 'Victron Charging Ecosystem',
    description: 'GX, Cerbo, and display integration for intelligent charge control and system visibility.',
  },
  {
    title: 'Delta-Q Chargers',
    description: 'Profile-matched onboard chargers engineered for lithium and advanced battery platforms.',
  },
  {
    title: 'Lester Charging Systems',
    description: 'Reliable harbor charging solutions with proper marine integration and protection.',
  },
  {
    title: 'NOCO & Smart Chargers',
    description: 'Modern smart charging hardware with profile control and operational convenience.',
  },
  {
    title: 'Lithium-Compatible Systems',
    description: 'Charge architecture designed for lithium acceptance, BMS coordination, and thermal safety.',
  },
  {
    title: 'Shore Power Integration',
    description: 'Dockside path optimization for consistent, protected shore-to-boat charging delivery.',
  },
  {
    title: 'Monitoring Systems',
    description: 'Real-time state of charge, alarms, and charge-state visibility across the electrical system.',
  },
  {
    title: 'DC Charging Upgrades',
    description: 'Auxiliary DC charging paths and integration with broader electrical modernization.',
  },
];

export const chargerSmartHighlights = [
  {
    label: 'Speed',
    value: 'Faster',
    detail: 'Optimized charge profiles reduce dockside turnaround time',
  },
  {
    label: 'Safety',
    value: 'Protected',
    detail: 'Lithium-safe charging with marine-grade protection architecture',
  },
  {
    label: 'Monitoring',
    value: 'Smarter',
    detail: 'Victron and onboard visibility for charge state and system health',
  },
  {
    label: 'Lithium',
    value: 'Optimized',
    detail: 'Profiles matched to BMS behavior and cell architecture',
  },
  {
    label: 'Shore Power',
    value: 'Reliable',
    detail: 'Consistent dockside charging for daily harbor operation',
  },
];

export const chargerGallery = [
  {
    src: ebrImage('charger diagnostics: upgrades', 'noco-smart-charger-integration.jpg'),
    alt: 'EBR NOCO smart charger integration and onboard charging system install',
    caption: 'Smart charging systems · Onboard integration',
    position: 'center 44%',
  },
  {
    src: ebrImage('charger diagnostics: upgrades', 'DeltaQ-charging-system-monitoring.jpg'),
    alt: 'EBR Delta-Q charging system monitoring and marine charger status verification',
    caption: 'Charging monitoring · System status',
    position: 'center 46%',
  },
];

export const chargerFaqs = [
  {
    question: 'Why is my boat charger flashing fault codes?',
    answer:
      'Flashing codes often indicate profile mismatch, BMS communication faults, AC supply issues, thermal protection, or battery-side faults. EBR reads fault behavior, verifies output, and tests the full charging path before replacing hardware.',
  },
  {
    question: 'Do I need a special charger for lithium batteries?',
    answer:
      'Yes. Lithium requires correct voltage limits, charge curves, and often BMS coordination. Using a legacy lead-acid profile on lithium can cause incomplete charging, faults, or safety risks. We specify lithium-compatible systems matched to your bank.',
  },
  {
    question: 'How long will charging take after an upgrade?',
    answer:
      'Charge time depends on bank capacity, available shore power, and charger output. After evaluation, we size charger output and profiles for your operating schedule — targeting faster, reliable dockside cycles.',
  },
  {
    question: 'Can you upgrade my onboard charger without changing the whole electrical system?',
    answer:
      'Often yes, when wiring, fusing, and battery architecture support it. Sometimes a broader electrical modernization is recommended for safety and monitoring. We scope the minimum correct upgrade — not unnecessary rework.',
  },
  {
    question: 'What are smart charging systems for electric boats?',
    answer:
      'Smart systems use profile-controlled chargers with monitoring integration — Victron and similar platforms — so you see charge state, faults, and system health in real time. EBR configures these as part of a complete charging ecosystem.',
  },
  {
    question: 'How do you improve shore power charging reliability?',
    answer:
      'We evaluate shore cord path, onboard protection, charger input quality, and dockside behavior under load. Upgrades may include better integration, monitoring, and hardware matched to your marina operating pattern.',
  },
];
