import { ebrImage } from '@/lib/mediaPaths';

export const CONTROLLER_REPAIR_SLUG = 'controller-repair';

export const controllerRepairMeta = {
  title: 'Duffy Boat Controller Repair & Upgrades',
  description:
    'EBR provides Duffy boat controller repair, diagnostics, rebuilds, replacements, and upgrades for Alltrax, Curtis, Sigma, and electric boat drive systems across Southern California.',
};

export const controllerHero = {
  src: ebrImage('controller diagnostics: upgrades', 'controller-hero-cinematic.jpg'),
  alt: 'EBR technician servicing Duffy boat controller and electric drive systems',
  position: '68% 44%',
};

export const controllerSymptoms = [
  'Boat won\'t move',
  'Intermittent throttle response',
  'Forward/reverse issues',
  'Sudden power loss',
  'Controller overheating',
  'Flash codes or fault lights',
  'Reduced speed or weak acceleration',
  'Burning smell or electrical failure',
];

export const controllerProcess = [
  {
    step: '01',
    title: 'Inspect',
    description:
      'Dockside and shop inspection of the controller, wiring harness, contactors, throttle input, and display indicators before any parts are replaced.',
  },
  {
    step: '02',
    title: 'Diagnose',
    description:
      'Electrical testing, fault-code review, load checks, and system verification to isolate controller, battery, charger, or throttle-related failures.',
  },
  {
    step: '03',
    title: 'Repair / Upgrade',
    description:
      'Component-level repair, rebuild, or replacement with modern controller options when an upgrade improves reliability and performance.',
  },
  {
    step: '04',
    title: 'Water Test',
    description:
      'Final propulsion, direction, and throttle validation under load so your Duffy returns to service with confirmed drive-system performance.',
  },
];

export const controllerSystems = [
  'Alltrax',
  'Curtis',
  'Sigma',
  'OEM Duffy controller systems',
  'Throttle and direction control systems',
  'Wiring and contactor systems',
];

export const controllerGallery = [
  {
    src: ebrImage('controller diagnostics: upgrades', 'premium-sigma-controller-diagnostics.jpg'),
    alt: 'EBR premium Sigma controller diagnostics on Duffy electric drive system',
    label: 'SIGMA DRIVE SYSTEMS',
    title: 'Legacy Sigma diagnostics',
    position: 'center 42%',
  },
  {
    src: ebrImage('controller diagnostics: upgrades', 'premium-alltrax-controller-upgrade.jpg'),
    alt: 'EBR premium Alltrax controller upgrade on Duffy boat',
    label: 'ALLTRAX UPGRADES',
    title: 'Modern controller integration',
    position: 'center 44%',
  },
];

export const controllerFaqs = [
  {
    question: 'How do I know if my Duffy controller is bad?',
    answer:
      'Common signs include no response from the throttle, sudden loss of power, overheating, fault lights, or inconsistent forward/reverse behavior. We perform full electrical diagnostics to confirm whether the controller, wiring, throttle, or battery system is the root cause.',
  },
  {
    question: 'Can a controller be rebuilt or does it need replacement?',
    answer:
      'Many controllers can be repaired or rebuilt after proper diagnosis. When internal damage, obsolete components, or reliability concerns make a rebuild impractical, we recommend replacement or a controlled upgrade path.',
  },
  {
    question: 'Do you upgrade old Duffy controllers?',
    answer:
      'Yes. When appropriate, we modernize older drive systems with current controller platforms that improve throttle response, reliability, and serviceability while maintaining safe integration with your boat\'s electrical architecture.',
  },
  {
    question: 'Can controller problems be caused by batteries or chargers?',
    answer:
      'Absolutely. Low voltage, weak cells, charger faults, and poor connections can mimic controller failure. We test the full propulsion circuit so the correct component is repaired — not just the most obvious symptom.',
  },
  {
    question: 'Do you service Alltrax, Curtis, and Sigma controllers?',
    answer:
      'Yes. EBR works with Alltrax, Curtis, Sigma, and OEM Duffy electric drive systems, including throttle, direction, and contactor subsystems tied to the controller.',
  },
];
