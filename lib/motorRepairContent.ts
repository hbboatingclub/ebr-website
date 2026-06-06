import { ebrImage } from '@/lib/mediaPaths';

export const MOTOR_REPAIR_SLUG = 'motor-repair';

export const motorRepairMeta = {
  title: 'Electric Motor Repair & Drivetrain Service for Duffy Boats',
  description:
    'EBR provides premium electric motor repair, rebuilds, and drivetrain service for Duffy and electric harbor boats — overheating, performance loss, bearings, brushes, alignment, and propulsion testing across Southern California.',
};

export const motorHero = {
  src: ebrImage('motor replacemants', 'premium-electric-motor-repair-hero.jpg'),
  alt: 'EBR technician servicing electric drive motor and propulsion systems on Duffy boat',
  position: '62% 44%',
};

export const motorIssues = [
  'Reduced speed or weak acceleration',
  'Overheating motors under load',
  'Excessive noise from propulsion',
  'Vibration through the drivetrain',
  'Bearing wear or rough rotation',
  'Worn brushes or commutation issues',
  'Drivetrain inefficiency or drag',
  'Intermittent motor operation',
  'Poor torque delivery at harbor speeds',
];

export const motorWhyEbr = {
  title: 'Why EBR for Electric Motor Repair',
  paragraphs: [
    'Electric propulsion is a drivetrain discipline — not a generic motor swap. EBR evaluates motors, couplers, alignment, controller delivery, and load behavior as one integrated propulsion system.',
    'Whether your Duffy needs bearing service, brush replacement, a controlled rebuild, or a performance-focused repair path, work is scoped to restore smooth torque, efficiency, and long-term reliability in real harbor operation.',
    'You get premium marine engineering: measured findings, rebuild-vs-replace clarity, and water-tested validation — the standard expected from luxury electric drivetrain specialists.',
  ],
  pillars: [
    'Drivetrain & propulsion expertise',
    'Duffy electric motor systems',
    'Alignment & efficiency tuning',
    'Rebuild vs. replacement guidance',
    'Marine electrical integration',
    'Load & performance testing',
    'Long-term reliability focus',
  ],
};

export const motorProcess = [
  {
    step: '01',
    title: 'Inspect',
    description:
      'Full propulsion inspection — motor, coupler, mounts, wiring, controller delivery, and thermal behavior — before disassembly or parts replacement.',
  },
  {
    step: '02',
    title: 'Diagnose',
    description:
      'Motor and load-performance testing to isolate overheating, bearing wear, brush issues, alignment faults, and controller-related symptoms.',
  },
  {
    step: '03',
    title: 'Repair / Rebuild',
    description:
      'Targeted repair, bearing service, brush replacement, or controlled rebuild — with upgrade paths when reliability and efficiency gains justify it.',
  },
  {
    step: '04',
    title: 'Water Test',
    description:
      'On-water calibration and propulsion validation for smooth torque delivery, thermal stability, and confirmed drivetrain performance.',
  },
];

export const motorComponents = [
  {
    title: 'PM Drive Motors',
    description: 'Permanent-magnet motor inspection, performance testing, and harbor-load validation.',
  },
  {
    title: 'Series Drive Motors',
    description: 'Series-wound motor diagnostics, brush service, and propulsion response verification.',
  },
  {
    title: 'Bearings & Shaft Support',
    description: 'Bearing condition analysis, replacement, and rotational smoothness restoration.',
  },
  {
    title: 'Brushes & Commutation',
    description: 'Brush wear assessment, seating, and commutation performance under load.',
  },
  {
    title: 'Couplers & Drivetrain',
    description: 'Coupler alignment, driveline integrity, and power transfer efficiency.',
  },
  {
    title: 'Motor Controllers',
    description: 'Integration testing between motor performance and controller output delivery.',
  },
  {
    title: 'Propulsion Alignment',
    description: 'Mounting, shaft alignment, and mechanical path tuning for reduced wear.',
  },
  {
    title: 'Thermal & Load Systems',
    description: 'Heat management, duty-cycle behavior, and sustained harbor-speed operation.',
  },
];

export const motorPerformanceStats = [
  {
    label: 'Propulsion',
    value: 'Smooth',
    detail: 'Refined torque delivery for calm, confident harbor operation',
  },
  {
    label: 'Torque',
    value: 'Stronger',
    detail: 'Restored acceleration and response at real operating loads',
  },
  {
    label: 'Efficiency',
    value: 'Optimized',
    detail: 'Reduced drivetrain drag and improved power transfer',
  },
  {
    label: 'Operation',
    value: 'Quieter',
    detail: 'Less mechanical noise and vibration through the system',
  },
  {
    label: 'Reliability',
    value: 'Lasting',
    detail: 'Repairs and rebuilds aimed at long-term propulsion longevity',
  },
];

export const motorGallery = [
  {
    src: ebrImage('motor replacemants', 'duffy-boat-electric-motor-replacement.jpg'),
    alt: 'EBR Duffy electric motor replacement and propulsion systems service',
    caption: 'Motor replacement · Electric propulsion systems',
    position: 'center 44%',
  },
  {
    src: ebrImage('motor replacemants', 'duffy-boat-drivetrain-replacement-service.jpg'),
    alt: 'EBR Duffy drivetrain replacement and precision alignment service',
    caption: 'Drivetrain service · Precision alignment',
    position: 'center 44%',
  },
];

export const motorFaqs = [
  {
    question: 'Why is my electric boat motor overheating?',
    answer:
      'Overheating often traces to excessive load, poor alignment, worn bearings, weak brush contact, controller delivery issues, or sustained operation beyond design duty. EBR tests motor thermal behavior under realistic harbor loads before recommending repair scope.',
  },
  {
    question: 'Why has my Duffy lost speed or acceleration?',
    answer:
      'Speed loss can stem from motor wear, brush deterioration, bearing drag, coupler misalignment, voltage delivery problems, or controller limitations. We isolate whether the fault is mechanical, electrical, or integrated across the drivetrain.',
  },
  {
    question: 'Can electric boat motors be rebuilt?',
    answer:
      'Many motors can be rebuilt when bearings, brushes, and internal components are serviceable. When rebuild economics or reliability do not make sense, we recommend controlled replacement with proper integration and water testing.',
  },
  {
    question: 'Why is my motor noisy or vibrating?',
    answer:
      'Noise and vibration frequently indicate bearing wear, alignment issues, coupler problems, or mounting stress. Structured inspection identifies mechanical root cause before unnecessary motor replacement.',
  },
  {
    question: 'How do you improve drivetrain efficiency?',
    answer:
      'Efficiency gains come from correcting alignment, reducing mechanical drag, restoring brush and bearing performance, and verifying controller-motor delivery. EBR treats efficiency as a system outcome — not a single component fix.',
  },
  {
    question: 'How long do Duffy electric motors last?',
    answer:
      'Lifespan depends on usage, thermal history, maintenance, and operating environment. Proper rebuilds, alignment, and integration can significantly extend service life. We provide clear condition assessment and longevity guidance after inspection.',
  },
];
