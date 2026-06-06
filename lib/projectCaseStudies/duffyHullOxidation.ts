import { ebrImage } from '@/lib/mediaPaths';
import { projectCaseStudyCta } from '@/lib/projectCaseStudies/shared';
import type { ProjectCaseStudy } from '@/lib/projectCaseStudies/types';

export const duffyHullOxidationCaseStudy: ProjectCaseStudy = {
  slug: 'duffy-hull-oxidation-removal',
  seo: {
    title: 'Duffy Hull Oxidation Removal & Gelcoat Restoration Case Study',
    description:
      'See how EBR restored a heavily oxidized Duffy boat through professional compounding, polishing, and gelcoat restoration to bring back deep gloss and color.',
  },
  hero: {
    badge: 'Project Case Study',
    title: 'Duffy Hull Oxidation Removal & Gelcoat Restoration',
    subtitle:
      'Severe oxidation removed through multi-stage compounding, polishing, and marine protection to restore deep gloss, color, and reflection.',
    imageSrc: ebrImage('Bottom Paint', 'duffy-hull-paint-service-newport beach.jpg'),
    imageAlt: 'Duffy hull after oxidation removal and gelcoat restoration by EBR',
    imagePosition: 'center center',
  },
  slider: {
    beforeSrc: ebrImage('Before and After Photos', 'duffy-before-slider.jpg'),
    beforeAlt: 'Duffy hull before oxidation removal — faded gelcoat and dull finish',
    afterSrc: ebrImage('Before and After Photos', 'duffy-after-slider.jpg'),
    afterAlt: 'Duffy hull after gloss restoration — deep shine and refreshed exterior finish',
    objectPosition: 'center 42%',
  },
  snapshot: {
    heading: 'Project Snapshot',
    items: [
      { label: 'Boat', value: 'Duffy Electric Boat' },
      { label: 'Service', value: 'Oxidation Removal & Gelcoat Restoration' },
      { label: 'Location', value: 'Huntington Beach, California' },
      { label: 'Completion Time', value: '2 Days' },
      { label: 'Status', value: 'Completed' },
    ],
    factsStrip: [
      { label: 'Project Type', value: 'Cosmetic Restoration' },
      { label: 'Boat Model', value: 'Duffy Electric Boat' },
      { label: 'Service Duration', value: '2 Days' },
      { label: 'Location', value: 'Huntington Beach, CA' },
    ],
  },
  problem: {
    heading: 'The Problem',
    paragraphs: [
      'This Duffy arrived with heavy oxidation throughout the hull sides. Years of sun exposure had left the gelcoat chalky, faded, and difficult to clean.',
      'The finish lacked depth and reflection, making the boat appear significantly older than its actual age.',
      'Before restoration, the hull showed severe loss of gloss and widespread oxidation that could not be corrected through simple washing or wax application.',
    ],
  },
  inspectionFindings: {
    heading: 'Inspection Findings',
    items: [
      'Heavy Surface Oxidation',
      'Loss of Gloss',
      'UV Damage',
      'Water Staining',
      'Embedded Contamination',
      'Faded Appearance',
    ],
  },
  process: {
    heading: 'Restoration Process',
    steps: [
      {
        step: 'Step 1',
        title: 'Deep Cleaning',
        description:
          'The hull was thoroughly washed and decontaminated to remove surface buildup, dirt, and environmental contaminants.',
      },
      {
        step: 'Step 2',
        title: 'Multi-Stage Compounding',
        description:
          'Professional marine compounds were used to remove oxidation and restore the gelcoat surface.',
      },
      {
        step: 'Step 3',
        title: 'Machine Polishing',
        description:
          'The hull was polished to restore depth, reflection, and clarity throughout the finish.',
      },
      {
        step: 'Step 4',
        title: 'Marine Protection',
        description:
          'Protective products were applied to help preserve the restored finish and protect against future UV exposure.',
      },
    ],
  },
  gallery: {
    heading: 'Restoration Gallery',
    subtitle: 'Highlights from the restoration process and final finish.',
    placement: 'after-process',
    items: [
      {
        id: 'inspection-condition',
        title: 'Inspection / Condition',
        imageSrc: ebrImage('Before and After Photos', 'duffy-before-slider.jpg'),
        imageAlt: 'Inspection view showing oxidation and dull gelcoat on Duffy hull',
        imagePosition: 'center 42%',
        caption:
          'Initial inspection showing heavy oxidation and loss of gloss throughout the hull surface.',
      },
      {
        id: 'compounding-polishing',
        title: 'Compounding & Polishing',
        imageSrc: ebrImage('buff and wax', 'premium-duffy-buff-wax-hero.jpg'),
        imageAlt: 'Compounding and polishing stage during Duffy hull restoration',
        imagePosition: 'center 42%',
        caption:
          'Multi-stage compounding and machine polishing used to restore depth and reflection.',
      },
      {
        id: 'final-restored-finish',
        title: 'Final Restored Finish',
        imageSrc: ebrImage('Before and After Photos', 'duffy-after-slider.jpg'),
        imageAlt: 'Final restored Duffy hull finish with deep gloss and reflection',
        imagePosition: 'center 42%',
        caption: 'Finished hull after restoration, polishing, and marine protection.',
      },
    ],
  },
  results: {
    heading: 'Results',
    metrics: ['95% Oxidation Removed', 'Deep Gloss Restored', 'Reflection Returned', 'Protected Finish'],
  },
  outcome: {
    heading: 'Project Outcome',
    paragraphs: [
      "Following restoration, the hull regained deep gloss, improved reflection, and a significantly more refined appearance. The oxidation that had dulled the finish was removed through a multi-stage correction process, helping restore the boat's overall presentation and long-term protection.",
      'The finished result dramatically improved curb appeal, reflected light more evenly, and gave the boat a cleaner, newer appearance on the water.',
    ],
  },
  testimonial: {
    heading: 'Customer Feedback',
    quote:
      'The EBR team completely transformed our Duffy. The boat looked newer than when we bought it.',
    attribution: 'Mike Bailey',
  },
  relatedServices: {
    heading: 'Related Services',
    items: [
      { title: 'Buff & Wax', href: '/services/buff-wax' },
      { title: 'Fiberglass Repair', href: '/services/fiberglass-repair' },
      { title: 'Duffy Restoration', href: '/services/duffy-restoration' },
      { title: 'Wood Varnishing', href: '/services/wood-varnishing' },
    ],
  },
  cta: projectCaseStudyCta(
    'Need Your Duffy Restored?',
    'Whether your boat needs oxidation removal, buffing, polishing, gelcoat restoration, or a complete cosmetic refresh, EBR can help bring it back to life.',
  ),
};
