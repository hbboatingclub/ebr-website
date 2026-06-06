import { ebrImage } from '@/lib/mediaPaths';
import {
  buildShowcaseGallery,
  projectCaseStudyCta,
  relatedServicesFromPaths,
} from '@/lib/projectCaseStudies/shared';
import type { ProjectCaseStudy } from '@/lib/projectCaseStudies/types';

const defaultSnapshot = (service: string, completionTime: string, projectType: string) => ({
  heading: 'Project Snapshot',
  items: [
    { label: 'Boat', value: 'Duffy Electric Boat' },
    { label: 'Service', value: service },
    { label: 'Location', value: 'Southern California' },
    { label: 'Completion Time', value: completionTime },
    { label: 'Status', value: 'Completed' },
  ],
  factsStrip: [
    { label: 'Project Type', value: projectType },
    { label: 'Boat Model', value: 'Duffy Electric Boat' },
    { label: 'Service Duration', value: completionTime },
    { label: 'Location', value: 'Orange County, CA' },
  ],
});

export const duffyRestorationCaseStudy: ProjectCaseStudy = {
  slug: 'duffy-restoration',
  seo: {
    title: 'Duffy Boat Restoration Case Study',
    description:
      'Full cosmetic and systems restoration for Duffy and electric harbor boats — refinishing, repairs, upgrades, and presentation improvements by EBR.',
  },
  hero: {
    badge: 'Project Case Study',
    title: 'Duffy Boat Restoration',
    subtitle:
      'Full cosmetic and systems restoration for Duffy and electric harbor boats — refinishing, repairs, upgrades, and presentation improvements.',
    imageSrc: ebrImage('Boat Restoration', 'luxury-electric-boat-restoration-newport-harbor.JPG'),
    imageAlt: 'Luxury Duffy boat restoration in Newport Harbor by EBR',
    imagePosition: 'center 42%',
  },
  snapshot: {
    heading: 'Project Snapshot',
    items: [
      { label: 'Boat', value: 'Duffy Electric Boat' },
      { label: 'Service', value: 'Full Duffy Restoration' },
      { label: 'Location', value: 'Orange County, CA' },
      { label: 'Timeline', value: 'Multi-Phase' },
      { label: 'Status', value: 'Completed' },
    ],
    factsStrip: [],
  },
  problem: {
    heading: 'The Problem',
    paragraphs: [
      'This Duffy required more than a single-service refresh. Cosmetic wear, dated finishes, and mixed-condition exterior details reduced overall presentation and owner confidence in the boat.',
      'Multiple areas needed coordinated refinishing, repair, and systems attention to bring the vessel back to a turnkey harbor standard.',
      'The goal was a cohesive restoration — not isolated fixes — that improved appearance, function, and long-term maintainability.',
    ],
  },
  inspectionFindings: {
    heading: 'Inspection Findings',
    items: [
      'Faded Exterior Finish',
      'Worn Brightwork',
      'Cosmetic Gelcoat Wear',
      'Interior Presentation Gaps',
      'Systems Coordination Needs',
      'Inconsistent Overall Presentation',
    ],
  },
  process: {
    heading: 'Restoration Process',
    steps: [
      {
        step: 'Step 1',
        title: 'Condition Assessment',
        description:
          'The vessel was evaluated across cosmetic, structural, and systems needs to define restoration priorities and sequencing.',
      },
      {
        step: 'Step 2',
        title: 'Surface & Finish Correction',
        description:
          'Exterior refinishing, brightwork, and cosmetic corrections were executed to restore presentation and uniformity.',
      },
      {
        step: 'Step 3',
        title: 'Repairs & Upgrades',
        description:
          'Targeted repairs and upgrade work were coordinated to address wear areas and improve overall function.',
      },
      {
        step: 'Step 4',
        title: 'Final Detailing & Delivery',
        description:
          'The boat was detailed, inspected, and prepared for harbor-ready delivery with a refined finished presentation.',
      },
    ],
  },
  gallery: {
    heading: 'Restoration Highlights',
    subtitle: 'A look at the condition, restoration work, and finished presentation.',
    placement: 'after-hero',
    layout: 'editorial',
    items: [
      {
        id: 'project-condition',
        title: 'Initial Interior Condition',
        imageSrc: ebrImage('Boat Restoration', 'duffy-electric-boat-restoration-newport-beach.JPG'),
        imageAlt: 'Duffy boat interior condition before full restoration',
        imagePosition: 'center center',
        caption:
          'Initial interior condition documented before restoration planning, cleaning, and repair coordination.',
      },
      {
        id: 'active-restoration',
        title: 'Interior Restoration Detail',
        imageSrc: ebrImage('Boat Restoration', 'duffy-restoration-work-in-progress.jpg'),
        imageAlt: 'Duffy interior restoration work in progress',
        imagePosition: 'center center',
        caption:
          'Interior restoration work across seating, helm, trim, and presentation details.',
      },
      {
        id: 'completed-restoration',
        title: 'Completed Result',
        imageSrc: ebrImage('Boat Restoration', 'duffy-restoration-completed.jpg'),
        imageAlt: 'Completed Duffy boat restoration',
        imagePosition: 'center center',
        caption:
          'Completed restoration with refined finish, coordinated details, and harbor-ready presentation.',
      },
    ],
  },
  results: {
    heading: 'Results',
    metrics: ['Unified Finish', 'Improved Presentation', 'Coordinated Repairs', 'Harbor-Ready Delivery'],
  },
  outcome: {
    heading: 'Project Outcome',
    paragraphs: [
      'The restoration brought the Duffy back to a cohesive, refined standard across exterior presentation and owner-facing details.',
      'By coordinating cosmetic, repair, and upgrade work under one plan, the vessel left with stronger visual impact and a more complete turnkey feel on the water.',
    ],
  },
  relatedServices: {
    heading: 'Related Services',
    items: relatedServicesFromPaths([
      '/services/duffy-restoration',
      '/services/buff-wax',
      '/services/wood-varnishing',
      '/services/fiberglass-repair',
    ]),
  },
  cta: projectCaseStudyCta(
    'Planning a Full Duffy Restoration?',
    'EBR coordinates refinishing, repairs, and upgrade work to restore Duffy and electric harbor boats to a complete, premium standard.',
  ),
};

export const bottomPaintRestorationCaseStudy: ProjectCaseStudy = {
  slug: 'bottom-paint-restoration',
  seo: {
    title: 'Duffy Bottom Paint Restoration Case Study',
    description:
      'See how EBR removed failing bottom paint, prepared the hull, and applied fresh antifouling protection for a Duffy electric harbor boat.',
  },
  hero: {
    badge: 'Project Case Study',
    title: 'Duffy Bottom Paint Restoration',
    subtitle:
      'Failing bottom paint removed and refinished with proper hull prep and fresh antifouling protection.',
    imageSrc: ebrImage('Bottom Paint', 'marine-bottom-painting-service.png'),
    imageAlt: 'Duffy hull after bottom paint restoration',
    imagePosition: 'center 40%',
  },
  slider: {
    beforeSrc: ebrImage('Before and After Photos', 'boat-bottom-restoration-before.jpg'),
    beforeAlt: 'Duffy hull bottom before paint restoration — worn antifouling and prep needs',
    afterSrc: ebrImage('Before and After Photos', 'boat-bottom-paint-restoration-after.jpg'),
    afterAlt: 'Duffy hull bottom after fresh antifouling and restoration',
    objectPosition: 'center 42%',
  },
  snapshot: defaultSnapshot('Bottom Paint & Haul-Out', 'Haul-Out Project', 'Hull Protection'),
  problem: {
    heading: 'The Problem',
    paragraphs: [
      'The hull bottom showed failing antifouling, uneven coating, and surface condition that required proper removal and prep before repainting.',
      'Without correct preparation, new bottom paint would not bond or perform reliably through the season.',
      'The owner needed a clean, professional bottom job coordinated with haul-out timing and electric-boat service standards.',
    ],
  },
  inspectionFindings: {
    heading: 'Inspection Findings',
    items: [
      'Failing Antifouling',
      'Uneven Coating',
      'Surface Contamination',
      'Prep Required',
      'Haul-Out Coordination',
      'Seasonal Protection Needs',
    ],
  },
  process: {
    heading: 'Restoration Process',
    steps: [
      {
        step: 'Step 1',
        title: 'Haul-Out & Inspection',
        description:
          'The vessel was hauled and the bottom inspected to confirm paint removal needs and surface condition.',
      },
      {
        step: 'Step 2',
        title: 'Strip & Surface Prep',
        description:
          'Failing coating was removed and the hull was prepared for proper adhesion and a uniform finish.',
      },
      {
        step: 'Step 3',
        title: 'Antifouling Application',
        description:
          'Fresh bottom paint was applied following prep standards for reliable marine protection.',
      },
      {
        step: 'Step 4',
        title: 'Launch Readiness',
        description:
          'The bottom was inspected and the vessel prepared for launch with restored protection and presentation.',
      },
    ],
  },
  gallery: {
    heading: 'Restoration Gallery',
    subtitle: 'Highlights from bottom prep, paint application, and finished protection.',
    placement: 'after-process',
    items: [
      {
        id: 'before-condition',
        title: 'Before Condition',
        imageSrc: ebrImage('Before and After Photos', 'boat-bottom-restoration-before.jpg'),
        imageAlt: 'Duffy hull bottom before bottom paint restoration',
        imagePosition: 'center 42%',
        caption: 'Initial bottom condition showing failing antifouling and prep requirements.',
      },
      {
        id: 'haulout-prep',
        title: 'Haul-Out & Prep',
        imageSrc: ebrImage('Bottom Paint', 'duffy-boat-haulout-bottom-paint.jpg'),
        imageAlt: 'Duffy boat haul-out for bottom paint service',
        imagePosition: 'center 42%',
        caption: 'Hull preparation and haul-out coordination for proper bottom paint application.',
      },
      {
        id: 'finished-bottom',
        title: 'Finished Bottom',
        imageSrc: ebrImage('Before and After Photos', 'boat-bottom-paint-restoration-after.jpg'),
        imageAlt: 'Duffy hull bottom after antifouling restoration',
        imagePosition: 'center 42%',
        caption: 'Completed bottom with fresh antifouling and restored hull protection.',
      },
    ],
  },
  results: {
    heading: 'Results',
    metrics: ['Fresh Antifouling', 'Proper Hull Prep', 'Even Coating', 'Season-Ready Protection'],
  },
  outcome: {
    heading: 'Project Outcome',
    paragraphs: [
      'The bottom was restored with proper prep and a clean antifouling application suited for harbor use.',
      'The finished result improved protection, presentation, and confidence heading into the season.',
    ],
  },
  relatedServices: {
    heading: 'Related Services',
    items: relatedServicesFromPaths([
      '/services/bottom-paint',
      '/services/duffy-restoration',
      '/services/fiberglass-repair',
    ]),
  },
  cta: projectCaseStudyCta(
    'Need Bottom Paint for Your Duffy?',
    'EBR coordinates haul-out timing, hull prep, and antifouling application for electric harbor boats throughout Southern California.',
  ),
};

export const fiberglassRepairCaseStudy: ProjectCaseStudy = {
  slug: 'fiberglass-repair',
  seo: {
    title: 'Duffy Fiberglass & Gelcoat Repair Case Study',
    description:
      'Hull and fiberglass damage repaired, faired, and refinished for a clean marine-grade finish on a Duffy electric boat.',
  },
  hero: {
    badge: 'Project Case Study',
    title: 'Duffy Fiberglass & Gelcoat Repair Case Study',
    subtitle: 'Hull and fiberglass damage repaired, faired, and refinished for a clean marine-grade finish.',
    imageSrc: ebrImage('fiberglass', 'duffy-fiberglass-repair-hero.jpg'),
    imageAlt: 'Duffy fiberglass and gelcoat repair by EBR',
    imagePosition: 'center 40%',
  },
  snapshot: defaultSnapshot('Fiberglass & Gelcoat Repair', 'Project-Based', 'Structural / Cosmetic'),
  problem: {
    heading: 'The Problem',
    paragraphs: [
      'The hull showed fiberglass and gelcoat damage that affected both appearance and long-term durability.',
      'Impacted areas required proper repair, fairing, and finish work rather than cosmetic cover-up.',
      'The owner needed a marine-grade repair that blended cleanly with the surrounding hull.',
    ],
  },
  inspectionFindings: {
    heading: 'Inspection Findings',
    items: [
      'Gelcoat Damage',
      'Fiberglass Impact Areas',
      'Surface Fairing Needs',
      'Edge Blending Required',
      'Finish Matching',
      'Structural Review',
    ],
  },
  process: {
    heading: 'Repair Process',
    steps: [
      {
        step: 'Step 1',
        title: 'Damage Assessment',
        description:
          'Impacted areas were inspected to confirm repair scope, materials, and finish expectations.',
      },
      {
        step: 'Step 2',
        title: 'Fiberglass Repair',
        description:
          'Damaged sections were repaired and reinforced to restore hull integrity.',
      },
      {
        step: 'Step 3',
        title: 'Fairing & Gelcoat',
        description:
          'Surfaces were faired and gelcoat was applied to achieve a smooth, uniform finish.',
      },
      {
        step: 'Step 4',
        title: 'Finish Blending',
        description:
          'Repaired areas were blended and finished for a clean, marine-grade presentation.',
      },
    ],
  },
  gallery: {
    heading: 'Project Gallery',
    subtitle: 'Highlights from fiberglass repair, fairing, and gelcoat finishing.',
    placement: 'after-hero',
    items: buildShowcaseGallery([
      {
        id: 'hull-damage',
        imageSrc: ebrImage('fiberglass', 'electric-boat-hull-repair-huntington-beach.jpg'),
        imageAlt: 'Fiberglass and gelcoat damage on Duffy hull',
        imagePosition: 'center center',
        caption: 'Hull damage and gelcoat impact areas documented before repair began.',
      },
      {
        id: 'repair-process',
        imageSrc: ebrImage('Before and After Photos', 'before:after2.JPG'),
        imageAlt: 'Duffy fiberglass repair process in progress',
        imagePosition: 'center center',
        caption: 'Fiberglass repair, fairing, and gelcoat work to restore the hull surface.',
      },
      {
        id: 'finished-repair',
        imageSrc: ebrImage('Before and After Photos', 'electric-boat-interior-restoration after.JPG'),
        imageAlt: 'Finished Duffy fiberglass and gelcoat repair',
        imagePosition: 'center center',
        caption: 'Completed repair with blended gelcoat and a clean marine-grade finish.',
      },
    ]),
  },
  results: {
    heading: 'Results',
    metrics: ['Damage Repaired', 'Surface Faired', 'Gelcoat Restored', 'Clean Finish Blend'],
  },
  outcome: {
    heading: 'Project Outcome',
    paragraphs: [
      'The repaired areas were restored with proper structure, fairing, and finish blending.',
      'The hull returned with improved integrity and a cleaner, more uniform cosmetic presentation.',
    ],
  },
  relatedServices: {
    heading: 'Related Services',
    items: relatedServicesFromPaths([
      '/services/fiberglass-repair',
      '/services/gelcoat-repair',
      '/services/duffy-restoration',
    ]),
  },
  cta: projectCaseStudyCta(
    'Need Fiberglass or Gelcoat Repair?',
    'EBR repairs hull damage, fairs surfaces, and restores gelcoat finishes for Duffy and electric harbor boats.',
  ),
};

export const woodVarnishingCaseStudy: ProjectCaseStudy = {
  slug: 'wood-varnishing',
  seo: {
    title: 'Duffy Wood Varnishing & Brightwork Case Study',
    description:
      'Marine wood and brightwork refinished with sanding, prep, varnish, and gloss restoration for a Duffy electric boat.',
  },
  hero: {
    badge: 'Project Case Study',
    title: 'Duffy Wood Varnishing & Brightwork',
    subtitle:
      'Marine wood and brightwork refinished with sanding, prep, varnish, and gloss restoration.',
    imageSrc: ebrImage('varnishing', 'premium-duffy-wood-varnishing-hero.jpg'),
    imageAlt: 'Premium Duffy wood varnishing and brightwork by EBR',
    imagePosition: 'center 42%',
  },
  snapshot: defaultSnapshot('Wood Varnishing & Brightwork', 'Multi-Day', 'Cosmetic Restoration'),
  problem: {
    heading: 'The Problem',
    paragraphs: [
      'Teak and brightwork showed UV damage, dull varnish, and uneven gloss that aged the boat\'s overall presentation.',
      'Worn coatings allowed moisture intrusion and made routine maintenance more difficult.',
      'The owner wanted brightwork restored to a deep, uniform gloss with proper marine protection.',
    ],
  },
  inspectionFindings: {
    heading: 'Inspection Findings',
    items: [
      'UV-Damaged Varnish',
      'Dull Brightwork',
      'Uneven Gloss',
      'Surface Prep Required',
      'Moisture Exposure',
      'Finish Restoration Needs',
    ],
  },
  process: {
    heading: 'Restoration Process',
    steps: [
      {
        step: 'Step 1',
        title: 'Surface Prep',
        description:
          'Brightwork was cleaned, sanded, and prepared to accept fresh marine varnish.',
      },
      {
        step: 'Step 2',
        title: 'Defect Correction',
        description:
          'Worn areas were addressed to improve adhesion and final appearance.',
      },
      {
        step: 'Step 3',
        title: 'Varnish Application',
        description:
          'Marine varnish was applied in controlled coats to rebuild depth and gloss.',
      },
      {
        step: 'Step 4',
        title: 'Final Finish',
        description:
          'Brightwork was finished and inspected for uniform gloss and UV protection.',
      },
    ],
  },
  gallery: {
    heading: 'Restoration Gallery',
    subtitle: 'Highlights from brightwork prep, varnishing, and finished gloss.',
    placement: 'after-hero',
    items: buildShowcaseGallery([
      {
        id: 'weathered-wood',
        imageSrc: ebrImage('varnishing', 'teak-boat-restoration-electric-harbor-boat1.png'),
        imageAlt: 'Weathered Duffy brightwork before varnishing',
        imagePosition: 'center center',
        caption: 'Weathered teak and brightwork showing UV damage and dull varnish.',
      },
      {
        id: 'sanding-prep',
        imageSrc: ebrImage('varnishing', 'premium-marine-varnish-service-huntington.png'),
        imageAlt: 'Duffy brightwork sanding and varnish prep',
        imagePosition: 'center center',
        caption: 'Sanding, surface prep, and varnish application to rebuild gloss.',
      },
      {
        id: 'finished-varnish',
        imageSrc: ebrImage('varnishing', 'marine-woodwork-restoration-southern-california.png'),
        imageAlt: 'Finished Duffy brightwork with restored gloss',
        imagePosition: 'center center',
        caption: 'Completed varnish with deep gloss and UV-protected brightwork.',
      },
    ]),
  },
  results: {
    heading: 'Results',
    metrics: ['Gloss Restored', 'UV Protection Applied', 'Uniform Finish', 'Refined Presentation'],
  },
  outcome: {
    heading: 'Project Outcome',
    paragraphs: [
      'Brightwork was restored with improved gloss, uniformity, and protection against harbor UV exposure.',
      'The finished details elevated the boat\'s overall presentation and owner pride on the water.',
    ],
  },
  relatedServices: {
    heading: 'Related Services',
    items: relatedServicesFromPaths([
      '/services/wood-varnishing',
      '/services/duffy-restoration',
      '/services/buff-wax',
    ]),
  },
  cta: projectCaseStudyCta(
    'Need Brightwork Refinished?',
    'EBR restores teak and brightwork with marine varnish clarity, gloss, and UV protection for Duffy boats.',
  ),
};

export const lithiumBatteryConversionCaseStudy: ProjectCaseStudy = {
  slug: 'lithium-battery-conversion',
  seo: {
    title: 'Duffy Battery Replacement & Lithium Upgrade Planning',
    description:
      'Lead-acid battery replacement on a Duffy electric boat with charging system review, AGM options, and lithium upgrade planning for Southern California harbor use.',
  },
  hero: {
    badge: 'Project Case Study',
    title: 'Duffy Battery Replacement & Lithium Upgrade Planning',
    subtitle:
      'Lead-acid batteries replaced and the charging system reviewed for reliable Duffy performance, with AGM options and lithium upgrade planning when appropriate.',
    imageSrc: ebrImage(
      'Battery replacements: Upgrades',
      'electric-boat-battery-upgrade-huntington-beach copy.png',
    ),
    imageAlt: 'Duffy boat battery replacement and charging system review',
    imagePosition: 'center 45%',
  },
  snapshot: defaultSnapshot('Duffy Battery Replacement', '1–2 Hours', 'Battery Service'),
  problem: {
    heading: 'The Problem',
    paragraphs: [
      'The existing lead-acid battery bank was aging, reducing reliability and making charging behavior less predictable for harbor use.',
      'The owner needed a proper replacement path — with battery cables, terminals, and charger compatibility reviewed before installation.',
      'EBR planned battery replacement and upgrade options across lead-acid, AGM where appropriate, and lithium when the system was a good fit.',
    ],
  },
  inspectionFindings: {
    heading: 'Inspection Findings',
    items: [
      'Aging Lead-Acid Bank',
      'Terminal & Cable Wear',
      'Charger Compatibility',
      'AGM Fit Assessment',
      'Lithium Upgrade Planning',
      'Harbor-Use Profile',
    ],
  },
  process: {
    heading: 'Battery Replacement Process',
    steps: [
      {
        step: 'Step 1',
        title: 'System Assessment',
        description:
          'Battery bank, charger, cables, terminals, and electrical loads were evaluated to define the right replacement or upgrade path.',
      },
      {
        step: 'Step 2',
        title: 'Replacement Installation',
        description:
          'Lead-acid batteries were replaced with marine-grade installation, mounting, and connection standards.',
      },
      {
        step: 'Step 3',
        title: 'Charging & Cable Review',
        description:
          'Charger compatibility, cable routing, and terminal connections were verified for safe, reliable charging.',
      },
      {
        step: 'Step 4',
        title: 'System Testing',
        description:
          'The electrical system was tested after installation to confirm charging behavior and dependable harbor operation.',
      },
    ],
  },
  gallery: {
    heading: 'Project Gallery',
    subtitle: 'Highlights from battery assessment, replacement work, and completed installation.',
    placement: 'after-hero',
    items: buildShowcaseGallery([
      {
        id: 'original-battery-bank',
        imageSrc: ebrImage('Battery replacements: Upgrades', 'duffy-boat-battery-replacement-orange-county.png'),
        imageAlt: 'Lead-acid battery bank on Duffy electric boat before replacement',
        imagePosition: 'center center',
        caption:
          'Existing lead-acid battery bank and charging layout assessed before replacement planning.',
      },
      {
        id: 'battery-replacement-work',
        imageSrc: ebrImage('Battery replacements: Upgrades', 'marine-battery-installation-long-beach-california.png'),
        imageAlt: 'Duffy battery replacement installation in progress',
        imagePosition: 'center center',
        caption:
          'Battery replacement and connection work with cable, terminal, and mounting review.',
      },
      {
        id: 'completed-battery-system',
        imageSrc: ebrImage('Battery replacements: Upgrades', 'custom-electric-boat-power-upgrade-california.JPG'),
        imageAlt: 'Completed Duffy battery replacement and charging system',
        imagePosition: 'center center',
        caption:
          'Completed battery installation with charging review and post-installation system testing.',
      },
    ]),
  },
  results: {
    heading: 'Results',
    metrics: [
      'Battery Replacement',
      'Lead-Acid Batteries',
      'AGM Options',
      'Lithium Upgrade Planning',
      'Charging Review',
    ],
  },
  outcome: {
    heading: 'Project Outcome',
    paragraphs: [
      'The vessel received a dependable lead-acid battery replacement with charging and connection details reviewed for everyday Duffy harbor use.',
      'AGM and lithium upgrade paths were documented where appropriate, giving the owner clear options without a conversion-only outcome.',
    ],
  },
  relatedServices: {
    heading: 'Related Services',
    items: relatedServicesFromPaths([
      '/services/battery-upgrades',
      '/services/charger-upgrades',
      '/services/electrical-diagnostics',
      '/services/mobile-service',
    ]),
  },
  cta: projectCaseStudyCta(
    'Need Battery Replacement for Your Duffy?',
    'EBR replaces lead-acid and AGM batteries, reviews chargers and connections, and plans lithium upgrades when the system is a good fit.',
  ),
};

export const electricalDiagnosticsCaseStudy: ProjectCaseStudy = {
  slug: 'electrical-diagnostics',
  seo: {
    title: 'Duffy Electrical System Repair Case Study',
    description:
      'Electrical troubleshooting and switch panel restoration on a Duffy electric boat — wiring traced, switches replaced, and systems tested for reliable operation.',
  },
  hero: {
    badge: 'Project Case Study',
    title: 'Duffy Electrical System Repair',
    subtitle:
      'Electrical troubleshooting and switch panel restoration completed on a Duffy electric boat. Existing wiring was traced, tested, cleaned up, and organized before installing new switches and restoring reliable operation throughout the vessel.',
    imageSrc: ebrImage('electrical', 'duffy-boat-wiring-repair-huntington-harbor.png'),
    imageAlt: 'Duffy boat wiring repair and electrical system restoration',
    imagePosition: 'center center',
  },
  snapshot: {
    heading: 'Project Snapshot',
    items: [
      { label: 'Boat', value: 'Duffy Electric Boat' },
      { label: 'Service', value: 'Electrical System Repair' },
      { label: 'Location', value: 'Orange County, CA' },
      { label: 'Completion Time', value: '3–4 Hours' },
      { label: 'Status', value: 'Completed' },
    ],
    factsStrip: [
      { label: 'Project Type', value: 'Electrical Repair' },
      { label: 'Boat Model', value: 'Duffy Electric Boat' },
      { label: 'Service Duration', value: '3–4 Hours' },
      { label: 'Location', value: 'Orange County, CA' },
    ],
  },
  problem: {
    heading: 'The Challenge',
    paragraphs: [
      'The vessel had aging switches, inconsistent electrical operation, and wiring that required tracing and verification before repairs could begin.',
      'Faulty switches and an outdated panel made everyday controls unreliable and increased the risk of further electrical issues.',
      'The owner needed every circuit tested, wiring cleaned up, and the switch panel rebuilt with dependable marine-grade components.',
    ],
  },
  inspectionFindings: {
    heading: 'Inspection Findings',
    items: [
      'Aging Switch Panel',
      'Faulty Switches',
      'Wiring Organization Needs',
      'Circuit Tracing Required',
      'Intermittent Operation',
      'Full System Testing Needed',
    ],
  },
  process: {
    heading: 'Repair Process',
    steps: [
      {
        step: 'Step 1',
        title: 'Electrical Inspection',
        description:
          'Existing wiring, switches, and electrical systems were inspected to identify failures and define the repair plan.',
      },
      {
        step: 'Step 2',
        title: 'Circuit Tracing & Testing',
        description:
          'Every circuit was tested and traced to isolate faults and verify wiring paths before component replacement.',
      },
      {
        step: 'Step 3',
        title: 'Switch Panel & Wiring Repair',
        description:
          'Wiring was cleaned up and organized, faulty components were identified, and the switch panel was rebuilt with new marine-grade switches.',
      },
      {
        step: 'Step 4',
        title: 'System Validation',
        description:
          'All electrical functions were tested to confirm reliable operation across the vessel after repairs were completed.',
      },
    ],
  },
  gallery: {
    heading: 'Project Gallery',
    subtitle: 'Highlights from inspection, troubleshooting, and switch panel restoration.',
    placement: 'after-hero',
    items: [
      {
        id: 'initial-inspection',
        title: 'Initial Electrical Inspection',
        imageSrc: ebrImage('electrical', 'electric-harbor-boat-electrical-repair.JPG'),
        imageAlt: 'Initial electrical inspection on Duffy electric harbor boat',
        imagePosition: 'center center',
        caption:
          'Existing wiring, switches, and electrical systems inspected to identify failures and create a repair plan.',
      },
      {
        id: 'troubleshooting',
        title: 'Electrical Troubleshooting',
        imageSrc: ebrImage('electrical', 'duffy-electrical-system-troubleshooting.jpg'),
        imageAlt: 'Duffy electric boat electrical troubleshooting',
        imagePosition: 'center center',
        caption:
          'Circuits traced, wiring tested, and electrical faults isolated before repairs and switch replacement.',
      },
      {
        id: 'completed-switch-panel',
        title: 'Completed Switch Panel Upgrade',
        imageSrc: ebrImage('electrical', 'custom-electric-boat-switch-panel.jpg'),
        imageAlt: 'Completed custom electric boat switch panel upgrade',
        imagePosition: 'center center',
        caption:
          'New switches installed, wiring organized, and all electrical systems tested for dependable operation.',
      },
    ],
  },
  results: {
    heading: 'Results',
    metrics: [
      'Electrical Repair',
      'Switch Panel Upgrade',
      'Wiring Troubleshooting',
      'System Testing',
    ],
  },
  outcome: {
    heading: 'Project Outcome',
    paragraphs: [
      'All electrical systems were restored to proper operation, controls became more reliable, and the switch panel was updated for long-term dependability.',
      'The vessel left with organized wiring, new switches, and verified function across every circuit tested during the project.',
    ],
  },
  relatedServices: {
    heading: 'Related Services',
    items: [
      { title: 'Duffy Controller Repair', href: '/services/controller-repair' },
      { title: 'Duffy Motor Repair', href: '/services/motor-repair' },
      { title: 'Battery Replacement', href: '/services/battery-upgrades' },
      { title: 'Fiberglass Repair', href: '/services/fiberglass-repair' },
    ],
  },
  cta: projectCaseStudyCta(
    'Need Electrical System Repair?',
    'EBR traces circuits, rebuilds switch panels, and restores reliable electrical operation for Duffy and electric harbor boats.',
  ),
};

export const duffyElectricMotorRepairCaseStudy: ProjectCaseStudy = {
  slug: 'duffy-electric-motor-repair',
  seo: {
    title: 'Duffy Electric Motor Repair Case Study',
    description:
      'Electric propulsion troubleshooting, motor removal, replacement, and system testing for Duffy and electric harbor boats.',
  },
  hero: {
    badge: 'Project Case Study',
    title: 'Duffy Electric Motor Repair',
    subtitle:
      'Electric propulsion troubleshooting, motor removal, replacement, and system testing for Duffy and electric harbor boats.',
    imageSrc: ebrImage('motor replacemants', 'marine-electric-drivetrain-repair-newport-beach.jpg'),
    imageAlt: 'Duffy electric drive motor restoration by EBR',
    imagePosition: 'center center',
  },
  snapshot: defaultSnapshot('Electric Motor Repair', '2–4 Days', 'Propulsion Service'),
  problem: {
    heading: 'The Problem',
    paragraphs: [
      'The propulsion system showed performance loss, noise, or reliability concerns that pointed to motor or drivetrain issues.',
      'Continued operation risked further damage without proper removal, inspection, and testing.',
      'The owner needed accurate diagnosis and repair or replacement aligned to Duffy electric drive standards.',
    ],
  },
  inspectionFindings: {
    heading: 'Inspection Findings',
    items: [
      'Reduced Performance',
      'Motor Noise / Vibration',
      'Drivetrain Wear',
      'Thermal Concerns',
      'Alignment Review',
      'Propulsion Testing Needed',
    ],
  },
  process: {
    heading: 'Repair Process',
    steps: [
      {
        step: 'Step 1',
        title: 'Propulsion Diagnosis',
        description:
          'Motor and drivetrain symptoms were evaluated to confirm repair or replacement scope.',
      },
      {
        step: 'Step 2',
        title: 'Motor Removal',
        description:
          'The motor was removed safely for inspection, repair, or replacement planning.',
      },
      {
        step: 'Step 3',
        title: 'Repair or Replacement',
        description:
          'Service was completed with appropriate components and marine electric standards.',
      },
      {
        step: 'Step 4',
        title: 'System Testing',
        description:
          'Propulsion was tested for response, alignment, and reliable harbor operation.',
      },
    ],
  },
  gallery: {
    heading: 'Project Gallery',
    subtitle: 'Highlights from diagnosis, motor service, and propulsion testing.',
    placement: 'after-hero',
    items: buildShowcaseGallery([
      {
        id: 'motor-condition',
        imageSrc: ebrImage('motor replacemants', 'marine-electric-motor-repair-specialists-before.png'),
        imageAlt: 'Duffy electric motor condition before repair',
        imagePosition: 'center center',
        caption: 'Drive motor and propulsion symptoms inspected before service began.',
      },
      {
        id: 'motor-service',
        imageSrc: ebrImage('motor replacemants', 'marine-electric-motor-repair-specialists-during.jpeg'),
        imageAlt: 'Electric boat motor rebuild and service in progress',
        imagePosition: 'center center',
        caption: 'Motor removal, repair, or replacement work on the electric drive system.',
      },
      {
        id: 'propulsion-ready',
        imageSrc: ebrImage('motor replacemants', 'marine-electric-motor-repair-specialists-after.png'),
        imageAlt: 'Completed electric motor repair service',
        imagePosition: 'center center',
        caption: 'Completed motor service with propulsion testing and harbor-ready operation.',
      },
    ]),
  },
  results: {
    heading: 'Results',
    metrics: ['Propulsion Restored', 'Motor Serviced', 'Drivetrain Checked', 'Harbor-Ready Operation'],
  },
  outcome: {
    heading: 'Project Outcome',
    paragraphs: [
      'Motor service addressed the performance issue and returned the boat to dependable electric propulsion.',
      'Testing confirmed proper response and owner confidence for everyday harbor use.',
    ],
  },
  relatedServices: {
    heading: 'Related Services',
    items: relatedServicesFromPaths([
      '/services/motor-repair',
      '/services/electrical-diagnostics',
      '/services/controller-repair',
    ]),
  },
  cta: projectCaseStudyCta(
    'Need Motor or Drivetrain Service?',
    'EBR diagnoses, repairs, and replaces electric drive motors for Duffy and harbor electric boats.',
  ),
};

export const duffyControllerDiagnosticsRepairCaseStudy: ProjectCaseStudy = {
  slug: 'duffy-controller-diagnostics-repair',
  seo: {
    title: 'Duffy Controller Diagnostics & Alltrax Upgrade Case Study',
    description:
      'Sigma controller critical fault diagnosed on a Duffy with no forward or reverse operation. EBR upgraded the system with an Alltrax controller and rebuilt throttle setup.',
  },
  hero: {
    badge: 'Project Case Study',
    title: 'Duffy Controller Diagnostics & Alltrax Upgrade',
    subtitle:
      'A Duffy boat with no forward or reverse operation was diagnosed with a critical Sigma controller fault. The potted controller could not be properly refurbished, so EBR upgraded the system with a rebuilt Alltrax controller and throttle setup to restore reliable operation.',
    imageSrc: ebrImage('controller diagnostics: upgrades', 'controller-hero-cinematic.jpg'),
    imageAlt: 'Controller diagnostics and Alltrax upgrade on Duffy electric boat',
    imagePosition: 'center center',
  },
  snapshot: {
    heading: 'Project Snapshot',
    items: [
      { label: 'Boat', value: 'Duffy Electric Boat' },
      { label: 'Service', value: 'Controller Diagnostics & Alltrax Upgrade' },
      { label: 'Location', value: 'Orange County, CA' },
      { label: 'Completion Time', value: 'Same-Day Diagnosis + Scheduled Upgrade' },
      { label: 'Status', value: 'Completed' },
    ],
    factsStrip: [
      { label: 'Project Type', value: 'Electrical Propulsion Repair' },
      { label: 'Boat Model', value: 'Duffy Electric Boat' },
      { label: 'Service Duration', value: 'Diagnosis + Controller Upgrade' },
      { label: 'Location', value: 'Orange County, CA' },
    ],
  },
  problem: {
    heading: 'The Problem',
    paragraphs: [
      'The customer contacted EBR because their Duffy boat would not run in forward or reverse. During dockside diagnostics, the existing Sigma controller was found flashing a critical error code.',
      'Because this style of Sigma controller is potted, it could not be properly refurbished internally in a reliable way. EBR reviewed the findings with the customer and recommended replacing the failed unit with an Alltrax controller upgrade.',
    ],
  },
  inspectionFindings: {
    heading: 'Inspection Findings',
    items: [
      'No Forward Operation',
      'No Reverse Operation',
      'Sigma Critical Fault',
      'Potted Controller',
      'Throttle System Review',
      'Upgrade Recommended',
    ],
  },
  process: {
    heading: 'Upgrade Process',
    steps: [
      {
        step: 'Step 1',
        title: 'Dockside Diagnostics',
        description:
          'Forward and reverse operation were tested, wiring was inspected, and the existing Sigma controller fault code was documented.',
      },
      {
        step: 'Step 2',
        title: 'Controller Evaluation',
        description:
          'The Sigma controller was evaluated and confirmed to be a poor refurbishment candidate because the internal components were potted and not serviceable in a dependable way.',
      },
      {
        step: 'Step 3',
        title: 'Alltrax Controller Build',
        description:
          'A replacement Alltrax controller setup was prepared along with the required throttle configuration and wiring connections.',
      },
      {
        step: 'Step 4',
        title: 'Installation & Testing',
        description:
          'The upgraded controller system was installed, forward and reverse operation were tested, and the boat was returned to reliable harbor use.',
      },
    ],
  },
  gallery: {
    heading: 'Project Gallery',
    subtitle: 'Highlights from Sigma fault diagnosis, Alltrax upgrade, and propulsion testing.',
    placement: 'after-hero',
    items: [
      {
        id: 'original-sigma-controller',
        title: 'Original Sigma Controller',
        imageSrc: ebrImage('controller diagnostics: upgrades', 'alltrax-controller-upgrade-duffy-boat-before.png'),
        imageAlt: 'Original Sigma controller with critical fault on Duffy electric boat',
        imagePosition: 'center center',
        caption:
          'The existing Sigma controller was flashing a critical fault code and the boat would not run in forward or reverse.',
      },
      {
        id: 'controller-upgrade-progress',
        title: 'Controller Upgrade In Progress',
        imageSrc: ebrImage('controller diagnostics: upgrades', 'alltrax-controller-upgrade-duffy-boat-during.png'),
        imageAlt: 'Alltrax controller upgrade in progress on Duffy boat',
        imagePosition: 'center center',
        caption:
          'After confirming the potted Sigma unit was not a good internal repair candidate, the controller and throttle setup were rebuilt for the Alltrax upgrade.',
      },
      {
        id: 'alltrax-installed',
        title: 'Alltrax Controller Installed',
        imageSrc: ebrImage('controller diagnostics: upgrades', 'alltrax-controller-upgrade-duffy-boat-after.png'),
        imageAlt: 'Installed Alltrax controller system on Duffy electric boat',
        imagePosition: 'center center',
        caption:
          'The new Alltrax controller system was installed, connected, and tested for smooth forward and reverse operation.',
      },
    ],
  },
  results: {
    heading: 'Results',
    metrics: [
      'Forward Restored',
      'Reverse Restored',
      'Alltrax Controller Upgrade',
      'Throttle Rebuilt',
      'Reliable Harbor Operation',
    ],
  },
  outcome: {
    heading: 'Project Outcome',
    paragraphs: [
      'The failed Sigma controller was replaced with an upgraded Alltrax controller setup, restoring both forward and reverse operation. The throttle configuration and wiring were reviewed as part of the installation to help ensure dependable control response.',
      'After testing, the customer had a smooth-running Duffy boat again with a more serviceable controller platform for future support.',
    ],
  },
  relatedServices: {
    heading: 'Related Services',
    items: relatedServicesFromPaths([
      '/services/controller-repair',
      '/services/electrical-diagnostics',
      '/services/throttle-repair',
      '/services/motor-repair',
    ]),
  },
  cta: projectCaseStudyCta(
    'Need Controller or Throttle Help?',
    'If your Duffy will not move, is flashing controller faults, or has inconsistent throttle response, EBR can diagnose the system and recommend the right repair or upgrade path.',
  ),
};
