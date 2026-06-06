import { ebrImage } from '@/lib/mediaPaths';

export const ELECTRICAL_DIAGNOSTICS_SLUG = 'electrical-diagnostics';

export const electricalDiagnosticsMeta = {
  title: 'Advanced Electrical Diagnostics for Duffy & Electric Boats',
  description:
    'EBR provides factory-spec marine electrical diagnostics for Duffy and electric boats — intermittent faults, charging issues, controller analysis, voltage testing, and root-cause troubleshooting across Southern California.',
};

export const diagnosticsHero = {
  src: ebrImage('electrical', 'premium-electric-boat-electrical-diagnostics-hero.jpg'),
  alt: 'EBR premium electric boat electrical diagnostics — components, contactors, and organized marine wiring',
  position: '58% 44%',
};

export const diagnosticsIssues = [
  'Boat randomly shuts off',
  'Charger not charging properly',
  'Intermittent power loss',
  'Reduced runtime or weak performance',
  'Throttle response issues',
  'Controller fault codes or warning lights',
  'Battery voltage imbalance',
  'Parasitic electrical drain',
];

export const diagnosticsWhyEbr = {
  title: 'Why EBR for Electrical Diagnostics',
  paragraphs: [
    'When a fault is intermittent or multi-system, guesswork wastes time and money. EBR applies structured, factory-spec diagnostics to isolate root cause — not just the most obvious symptom.',
    'We test voltage under load, analyze controller logic, verify charger behavior, and validate lithium integration as one propulsion architecture. That is how complex Duffy and electric harbor boat issues get solved correctly.',
    'You get calm, technical authority: clear findings, measured recommendations, and repair paths grounded in evidence — not parts swapping.',
  ],
  pillars: [
    'Factory-spec diagnostic protocols',
    'Voltage & load testing',
    'Controller logic analysis',
    'Charger & BMS diagnostics',
    'Lithium integration verification',
    'Marine-grade troubleshooting',
    'Root-cause fault isolation',
  ],
};

export const diagnosticsProcess = [
  {
    step: '01',
    title: 'System Inspection',
    description:
      'Comprehensive review of batteries, chargers, controllers, wiring, contactors, throttle input, and monitoring — documenting symptoms and system history before testing begins.',
  },
  {
    step: '02',
    title: 'Electrical Testing',
    description:
      'Structured voltage, load, continuity, and thermal checks across the propulsion circuit to capture faults that only appear under real operating conditions.',
  },
  {
    step: '03',
    title: 'Fault Isolation',
    description:
      'Controlled isolation of controller, battery, charger, throttle, and wiring subsystems to identify the true failure point — including intermittent and parasitic issues.',
  },
  {
    step: '04',
    title: 'Recommendations & Water Test',
    description:
      'Clear repair or upgrade recommendations with prioritized scope, followed by on-water validation when propulsion behavior must be confirmed under load.',
  },
];

export const diagnosticsSystems = [
  {
    title: 'Curtis Controller Systems',
    description: 'Logic, input, and output diagnostics for Curtis-based Duffy and harbor boat drive platforms.',
  },
  {
    title: 'Sigma Controller Systems',
    description: 'Fault-code review, throttle/direction input testing, and drive-output verification.',
  },
  {
    title: 'Alltrax Controller Systems',
    description: 'Parameter review, contactor circuit analysis, and propulsion response validation.',
  },
  {
    title: 'Chargers & Charging Circuits',
    description: 'Profile verification, output testing, and dockside charging fault isolation.',
  },
  {
    title: 'Lithium & BMS Integration',
    description: 'Cell balance, BMS behavior, and lithium-to-charger-controller compatibility testing.',
  },
  {
    title: 'DC & Auxiliary Circuits',
    description: 'House loads, DC-DC paths, and auxiliary draw analysis tied to propulsion stability.',
  },
  {
    title: 'Throttle & Direction Systems',
    description: 'Input signal integrity, neutral safety, and forward/reverse control verification.',
  },
  {
    title: 'Onboard Wiring & Contactors',
    description: 'Harness integrity, termination quality, contactor timing, and high-current path testing.',
  },
];

export const diagnosticsPrecisionTests = [
  {
    label: 'Voltage Testing',
    value: 'Load-Based',
    detail: 'Resting and under-load measurements across the full propulsion circuit',
  },
  {
    label: 'Load Analysis',
    value: 'Structured',
    detail: 'Motor, battery, and charger performance under realistic harbor demand',
  },
  {
    label: 'Controller Diagnostics',
    value: 'OEM-Level',
    detail: 'Fault codes, logic states, and throttle/direction input verification',
  },
  {
    label: 'Charging Verification',
    value: 'Profile-Matched',
    detail: 'Output, timing, and compatibility with battery architecture',
  },
  {
    label: 'Thermal Monitoring',
    value: 'Continuous',
    detail: 'Heat signatures across controllers, wiring, and high-current paths',
  },
];

export const diagnosticsGallery = [
  {
    src: ebrImage('electrical', 'duffy-electrical-system-troubleshooting.jpg'),
    alt: 'EBR Duffy live electrical system troubleshooting and diagnostics',
    caption: 'Live system troubleshooting · Electrical diagnostics',
    position: 'center 44%',
  },
  {
    src: ebrImage('electrical', 'custom-electric-boat-switch-panel.jpg'),
    alt: 'EBR custom electric boat switch panel and clean electrical restoration',
    caption: 'Custom switch panel · Clean electrical restoration',
    position: 'center 44%',
  },
];

export const diagnosticsFaqs = [
  {
    question: 'Why does my electric boat lose power randomly?',
    answer:
      'Random shutdowns often trace to voltage sag, loose high-current connections, controller protection, weak cells, or intermittent throttle input. EBR tests the full circuit under load to identify whether the fault is battery, controller, charger, wiring, or control-input related.',
  },
  {
    question: 'Why is my charger flashing errors or not charging?',
    answer:
      'Charger faults can stem from incorrect profile settings, BMS communication issues, AC supply problems, or battery-side faults that trigger protection. We verify charger output, battery acceptance, and communication paths before recommending repair or replacement.',
  },
  {
    question: 'How long do electrical diagnostics take?',
    answer:
      'Simple faults may be isolated in a single visit. Intermittent or multi-system issues often require structured testing over one to two sessions. We scope diagnostics clearly up front so you know what we are measuring and why.',
  },
  {
    question: 'Can you diagnose intermittent electrical problems?',
    answer:
      'Yes — intermittent faults are a core focus. We use load testing, thermal monitoring, and subsystem isolation to capture faults that do not appear at rest, which is where most general shops stop.',
  },
  {
    question: 'Do you test controllers or just replace them?',
    answer:
      'We diagnose first. Controller logic, fault codes, throttle input, and contactor behavior are tested before any replacement is recommended. Many issues originate in wiring, batteries, or chargers — not the controller itself.',
  },
  {
    question: 'Can you diagnose lithium and lead-acid systems?',
    answer:
      'Yes. EBR tests lithium BMS behavior, cell balance, charger compatibility, and legacy lead-acid architectures. Diagnostic approach follows the installed system — with factory-spec methods for each platform.',
  },
];
