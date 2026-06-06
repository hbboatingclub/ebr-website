import { ebrImage } from '@/lib/mediaPaths';

export const SUPPORTING_SERVICE_SLUGS = [
  'throttle-repair',
  'fiberglass-repair',
  'gelcoat-repair',
  'buff-wax',
  'wood-varnishing',
  'surrey-tops',
  'isinglass-windows',
  'covers',
  'monthly-cleaning',
  'mobile-service',
  'flooring',
  'steering-helm-repair',
  'prop-replacement',
] as const;

export type SupportingServiceSlug = (typeof SUPPORTING_SERVICE_SLUGS)[number];

export function isSupportingServiceSlug(slug: string): slug is SupportingServiceSlug {
  return (SUPPORTING_SERVICE_SLUGS as readonly string[]).includes(slug);
}

export type SupportingServiceContent = {
  slug: SupportingServiceSlug;
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  trust: string;
  hero: { src: string; alt: string; position: string };
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  details: {
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  gallery: { src: string; alt: string; caption: string; position: string }[];
  faqs: { question: string; answer: string }[];
  ctaHeading: string;
  ctaLead: string;
};

const supportingServices: Record<SupportingServiceSlug, SupportingServiceContent> = {
  'throttle-repair': {
    slug: 'throttle-repair',
    meta: {
      title: 'Duffy Throttle Repair & Control Service',
      description:
        'EBR repairs and upgrades Duffy throttle controls for smooth acceleration, responsive handling, and reliable electric drivability across Southern California harbors.',
    },
    eyebrow: 'Electric Controls',
    title: 'Duffy Throttle Repair & Control Service',
    lead:
      'Restore smooth acceleration and confident control on your Duffy — throttle diagnostics, rebuilds, and upgrades from electric boat specialists.',
    trust: 'Throttle response · Smooth acceleration · Control systems · Drivability · Duffy specialists',
    hero: {
      src: ebrImage('throttle repairs : upgrades', 'duffy-throttle-control-service-hero.jpg'),
      alt: 'EBR Duffy throttle control service — technician at helm and throttle controls',
      position: '58% 38%',
    },
    benefits: [
      { title: 'Smooth Acceleration', description: 'Eliminate jerky or hesitant throttle response for calmer harbor cruising.' },
      { title: 'Control Diagnostics', description: 'Throttle, controller, and input path evaluated as one drivability system.' },
      { title: 'Rebuild & Repair', description: 'Wear components and faulty controls addressed with marine-grade solutions.' },
      { title: 'Upgrade Options', description: 'Modern throttle upgrades when reliability and feel need improvement.' },
      { title: 'Duffy Experience', description: 'Service calibrated to how Duffy electric boats are actually driven daily.' },
    ],
    process: [
      { step: '01', title: 'Diagnose', description: 'Throttle behavior, controller communication, and control inputs are tested under load.' },
      { step: '02', title: 'Scope', description: 'Repair, rebuild, or upgrade path is defined with clear expectations before work begins.' },
      { step: '03', title: 'Restore', description: 'Components serviced or replaced with proper configuration for your drivetrain.' },
      { step: '04', title: 'Verify', description: 'Smooth acceleration and control response confirmed before handoff.' },
    ],
    details: {
      title: 'Precision Control for Electric Harbor Boats',
      paragraphs: [
        'Throttle issues on electric boats often involve more than a single lever — controller profiles, wiring, and mechanical wear all affect drivability.',
        'EBR approaches throttle service with electric propulsion expertise, so repairs align with how your Duffy accelerates, cruises, and docks.',
      ],
      bullets: ['Throttle & pedal diagnostics', 'Speed control rebuilds', 'Controller integration', 'Smooth response tuning', 'Dockside testing'],
    },
    gallery: [
      {
        src: ebrImage('throttle repairs : upgrades', 'duffy-throttle-linkage-repair.jpg'),
        alt: 'EBR Duffy throttle linkage repair and drive controls service',
        caption: 'THROTTLE RESPONSE · DRIVE CONTROLS',
        position: 'center 48%',
      },
      {
        src: ebrImage('throttle repairs : upgrades', 'duffy-throttle-control-diagnostics.jpg'),
        alt: 'EBR Duffy throttle control diagnostics and system calibration',
        caption: 'CONTROL DIAGNOSTICS · SYSTEM CALIBRATION',
        position: 'center 42%',
      },
    ],
    faqs: [
      {
        question: 'What throttle problems are common on Duffy boats?',
        answer:
          'Common issues include delayed response, uneven acceleration, sticking controls, and faults tied to controller or wiring. We diagnose the full control path before recommending repair scope.',
      },
      {
        question: 'Can you upgrade throttle controls?',
        answer:
          'Yes. When stock components are worn or outdated, upgrades can improve feel and reliability. Options depend on your controller and drivetrain configuration.',
      },
      {
        question: 'Is throttle repair related to controller issues?',
        answer:
          'Often yes. Throttle input and controller behavior work together on electric boats. EBR evaluates both to avoid replacing the wrong component.',
      },
      {
        question: 'How long does throttle service take?',
        answer:
          'Timeline depends on parts availability and whether rebuild or upgrade is required. We provide an estimate after initial diagnostics.',
      },
    ],
    ctaHeading: 'Restore smooth control on your Duffy.',
    ctaLead: 'Describe throttle behavior and we will outline diagnostics and repair options.',
  },

  'fiberglass-repair': {
    slug: 'fiberglass-repair',
    meta: {
      title: 'Duffy Fiberglass & Gelcoat Repair',
      description:
        'EBR repairs fiberglass cracks, dock damage, and gelcoat issues on Duffy and electric harbor boats — structural and cosmetic finish work across Southern California.',
    },
    eyebrow: 'Hull & Gelcoat',
    title: 'Duffy Fiberglass & Gelcoat Repair',
    lead:
      'Repair cracks, dock damage, and gelcoat imperfections with premium marine fiberglass work — structural integrity and clean cosmetic finish.',
    trust: 'Crack repair · Dock damage · Gelcoat · Cosmetic finish · Duffy hull care',
    hero: {
      src: ebrImage('fiberglass', 'duffy-fiberglass-repair-hero.jpg'),
      alt: 'EBR Duffy fiberglass and gelcoat repair',
      position: 'center 32%',
    },
    benefits: [
      { title: 'Crack & Impact Repair', description: 'Structural and cosmetic correction for dock bumps and hull damage.' },
      { title: 'Gelcoat Restoration', description: 'Color-matched gelcoat repair for a clean, uniform hull appearance.' },
      { title: 'Dock Damage Recovery', description: 'Focused repair after marina contact, piling strikes, and slip incidents.' },
      { title: 'Cosmetic Refinement', description: 'Finish work that keeps your Duffy presentation-worthy at the harbor.' },
      { title: 'Prevent Further Damage', description: 'Early repair stops small issues from spreading into costly hull work.' },
    ],
    process: [
      { step: '01', title: 'Assess', description: 'Damage depth, laminate condition, and finish requirements are documented.' },
      { step: '02', title: 'Prep', description: 'Affected areas are ground, shaped, and prepared for proper adhesion.' },
      { step: '03', title: 'Repair', description: 'Fiberglass laminate and gelcoat restored to marine standards.' },
      { step: '04', title: 'Finish', description: 'Blend, polish, and detail for a cohesive hull appearance.' },
    ],
    details: {
      title: 'Structural Repair With Cosmetic Discipline',
      paragraphs: [
        'Fiberglass damage on harbor boats ranges from superficial gelcoat chips to laminate issues that need proper structural attention.',
        'EBR combines cosmetic discipline with sound repair practice — so your Duffy looks right and remains reliable season after season.',
      ],
      bullets: ['Gelcoat color match', 'Laminate repair', 'Fairing & shaping', 'Dock damage correction', 'Finish blending'],
    },
    gallery: [
      {
        src: ebrImage('fiberglass', 'duffy-structural-fiberglass-repair.jpg'),
        alt: 'Duffy structural fiberglass repair — damage restoration',
        caption: 'STRUCTURAL REPAIR · DAMAGE RESTORATION',
        position: 'center 45%',
      },
      {
        src: ebrImage('fiberglass', 'duffy-gelcoat-restoration-service.jpg'),
        alt: 'Duffy gelcoat restoration service — hull refinishing',
        caption: 'GELCOAT REFINISHING · HULL RESTORATION',
        position: 'center 40%',
      },
    ],
    faqs: [
      {
        question: 'Can small gelcoat cracks be repaired?',
        answer:
          'Yes. Many chips and stress cracks are repairable with color-matched gelcoat when addressed early. We assess depth and spread before quoting scope.',
      },
      {
        question: 'Do you handle dock impact damage?',
        answer:
          'Dock and piling contact is common. We repair cosmetic and structural damage depending on severity and location on the hull.',
      },
      {
        question: 'Will the repair match my hull color?',
        answer:
          'We aim for the best practical color and finish match. Some aged gelcoat may require broader blending for uniform appearance.',
      },
      {
        question: 'How long does fiberglass repair take?',
        answer:
          'Small cosmetic repairs may be quick; larger laminate work needs cure time. Scope and timeline are confirmed after inspection.',
      },
    ],
    ctaHeading: 'Repair hull damage before it spreads.',
    ctaLead: 'Send photos or schedule an inspection — we will scope fiberglass and gelcoat repair.',
  },

  'buff-wax': {
    slug: 'buff-wax',
    meta: {
      title: 'Duffy Buff & Wax Detailing',
      description:
        'EBR buff and wax services for Duffy boats — oxidation removal, gelcoat revival, and protective finish for a premium harbor-ready appearance.',
    },
    eyebrow: 'Gelcoat Detailing',
    title: 'Duffy Buff & Wax Service',
    lead:
      'Restore shine, remove oxidation, and protect gelcoat with premium buff and wax detailing — harbor-ready presentation for your Duffy.',
    trust: 'Shine restoration · Oxidation removal · Gelcoat protection · Premium finish',
    hero: {
      src: ebrImage('buff and wax', 'premium-duffy-buff-wax-hero.jpg'),
      alt: 'EBR custom Duffy buff and wax detailing Newport Harbor',
      position: 'center 38%',
    },
    benefits: [
      { title: 'Gelcoat Revival', description: 'Bring back depth and clarity to faded or chalky hull surfaces.' },
      { title: 'Oxidation Removal', description: 'Compounding and buffing targeted to Southern California sun exposure.' },
      { title: 'Protective Wax', description: 'Marine-grade protection to help maintain finish between seasons.' },
      { title: 'Harbor Presentation', description: 'A polished Duffy that reflects pride of ownership at the slip.' },
    ],
    process: [
      { step: '01', title: 'Inspect', description: 'Gelcoat condition, oxidation level, and finish goals are reviewed.' },
      { step: '02', title: 'Prep', description: 'Wash, decontaminate, and mask as needed for clean buffing surfaces.' },
      { step: '03', title: 'Buff', description: 'Compounding and polishing to restore gelcoat clarity and shine.' },
      { step: '04', title: 'Protect', description: 'Wax or sealant application for lasting harbor-ready protection.' },
    ],
    details: {
      title: 'Premium Finish Care for Electric Harbor Boats',
      paragraphs: [
        'Sun, salt, and harbor life dull gelcoat over time. Professional buff and wax restores appearance and adds protection — without the guesswork of DIY products.',
        'EBR details Duffys with marine-focused process and finish standards appropriate for regular harbor use.',
      ],
      bullets: ['Wash & prep', 'Oxidation correction', 'Machine polish', 'Hand finish', 'Wax protection'],
    },
    gallery: [
      {
        src: ebrImage('buff and wax', 'duffy-detailing-polish-service.jpg'),
        alt: 'Duffy detailing polish service — buff and gloss restoration',
        caption: 'BUFF & POLISH · GLOSS RESTORATION',
        position: 'center 45%',
      },
      {
        src: ebrImage('buff and wax', 'high-end-electric-boat-detailing-specialists.jpg'),
        alt: 'High-end electric boat detailing specialists — finished harbor detail',
        caption: 'FINISHED DETAIL · HARBOR READY',
        position: 'center 40%',
      },
    ],
    faqs: [
      {
        question: 'How often should a Duffy be buffed and waxed?',
        answer:
          'Many owners schedule annually or seasonally depending on sun exposure and how often the boat sits at the dock. We recommend based on current gelcoat condition.',
      },
      {
        question: 'Will buffing remove heavy oxidation?',
        answer:
          'Moderate oxidation often responds well to professional compounding. Severe cases may need more aggressive correction or additional cosmetic work.',
      },
      {
        question: 'Is wax enough to protect gelcoat?',
        answer:
          'Wax adds meaningful protection and shine. We select products suited to marine gelcoat and your maintenance habits.',
      },
      {
        question: 'Can buff and wax be combined with other cosmetic services?',
        answer:
          'Yes. Detailing pairs naturally with fiberglass touch-up, upholstery care, and broader restoration projects.',
      },
    ],
    ctaHeading: 'Bring back your Duffy harbor shine.',
    ctaLead: 'Tell us about gelcoat condition — we will recommend buff, wax, and protection scope.',
  },

  'wood-varnishing': {
    slug: 'wood-varnishing',
    meta: {
      title: 'Marine Wood Varnishing for Duffy Boats',
      description:
        'EBR marine wood varnishing for Duffy boats — teak and brightwork gloss finish, UV protection, and craftsmanship-focused refinishing in Southern California.',
    },
    eyebrow: 'Brightwork & Teak',
    title: 'Marine Wood Varnishing',
    lead:
      'Refinish teak and brightwork with premium marine varnish — gloss clarity, UV protection, and craftsmanship worthy of your Duffy.',
    trust: 'Teak refinishing · Gloss finish · UV protection · Marine craftsmanship',
    hero: {
      src: ebrImage('varnishing', 'premium-duffy-wood-varnishing-hero.jpg'),
      alt: 'Classic boat varnish refinishing California — EBR marine woodwork',
      position: 'center 36%',
    },
    benefits: [
      { title: 'Teak Refinishing', description: 'Restore warm wood tone and satin-to-gloss clarity on deck brightwork.' },
      { title: 'Gloss Finish', description: 'Multiple-coat systems built for depth, uniformity, and marine appearance.' },
      { title: 'UV Protection', description: 'Varnish systems selected for Southern California sun and harbor exposure.' },
      { title: 'Craftsmanship', description: 'Careful prep and application — finish that reads premium at the dock.' },
    ],
    process: [
      { step: '01', title: 'Evaluate', description: 'Wood condition, existing coatings, and finish target are assessed.' },
      { step: '02', title: 'Strip & Prep', description: 'Old finish removed and surfaces prepared for adhesion and clarity.' },
      { step: '03', title: 'Seal', description: 'Proper sealing and build coats for durable marine varnish systems.' },
      { step: '04', title: 'Finish', description: 'Final coats, leveling, and detail for consistent brightwork presentation.' },
    ],
    details: {
      title: 'Brightwork Finished to Marine Standards',
      paragraphs: [
        'Wood varnish on harbor boats is both protection and presentation. Peeling or dull brightwork undermines an otherwise refined Duffy.',
        'EBR approaches varnishing with patience in prep and application — the foundation of a finish that lasts.',
      ],
      bullets: ['Teak & trim', 'Coat build systems', 'Sanding between coats', 'UV-rated varnish', 'Detail & masking'],
    },
    gallery: [
      {
        src: ebrImage('varnishing', 'marine-varnish-table-restoration.jpg'),
        alt: 'Marine varnish table restoration — EBR wood refinishing',
        caption: 'MARINE VARNISH · TABLE RESTORATION',
        position: 'center 45%',
      },
      {
        src: ebrImage('varnishing', 'electric-boat-brightwork-restoration.jpg'),
        alt: 'Electric boat brightwork restoration — gloss finish',
        caption: 'BRIGHTWORK RESTORATION · GLOSS FINISH',
        position: 'center 40%',
      },
    ],
    faqs: [
      {
        question: 'How many varnish coats are typical?',
        answer:
          'Systems vary by wood condition and desired gloss. Multiple build coats with sanding between layers are standard for durable brightwork.',
      },
      {
        question: 'Can you refinish only sections of teak?',
        answer:
          'Yes. Localized repair is possible when damage is isolated. We match sheen and color as closely as practical.',
      },
      {
        question: 'How long does varnish work take?',
        answer:
          'Cure time between coats affects schedule. Larger brightwork projects are planned with realistic drying windows.',
      },
      {
        question: 'How do I maintain varnish after refinishing?',
        answer:
          'Regular wash, avoiding harsh cleaners, and periodic inspection extend life. We provide care guidance at handoff.',
      },
    ],
    ctaHeading: 'Refinish brightwork with clarity and depth.',
    ctaLead: 'Share your wood condition — we will outline varnish scope and timeline.',
  },

  'surrey-tops': {
    slug: 'surrey-tops',
    meta: {
      title: 'Duffy Surrey Top Service',
      description:
        'EBR surrey top replacement and installation for Duffy boats — weather protection, precise fitment, and premium appearance across Southern California.',
    },
    eyebrow: 'Canvas & Tops',
    title: 'Duffy Surrey Top Service',
    lead:
      'Replace or refresh surrey tops with precise fitment, weather protection, and clean harbor-ready appearance for your Duffy.',
    trust: 'Weather protection · Fitment · Replacement · Premium appearance',
    hero: {
      src: ebrImage('surrey tops: windows: covers', 'premium-duffy-canvas-upholstery-hero.jpg'),
      alt: 'Premium Duffy surrey top and canvas — Newport marina with canopy in frame',
      position: 'center 35%',
    },
    benefits: [
      { title: 'Weather Protection', description: 'Shade and coverage for passengers without compromising harbor style.' },
      { title: 'Precise Fitment', description: 'Tops measured and installed for clean lines on Duffy cockpit layouts.' },
      { title: 'Replacement Service', description: 'Worn, faded, or damaged surreys replaced with marine-grade materials.' },
      { title: 'Appearance Upgrade', description: 'Refresh the profile of your boat with coordinated canvas color and shape.' },
    ],
    process: [
      { step: '01', title: 'Measure', description: 'Frame dimensions and fabric requirements confirmed for your Duffy model.' },
      { step: '02', title: 'Build', description: 'Top fabricated or sourced to spec with marine canvas standards.' },
      { step: '03', title: 'Install', description: 'Fitment, tension, and hardware adjusted for secure harbor use.' },
      { step: '04', title: 'Detail', description: 'Final alignment and walkthrough for care and operation.' },
    ],
    details: {
      title: 'Canvas Tops Built for Harbor Life',
      paragraphs: [
        'A sagging or sun-faded surrey changes the whole presentation of your Duffy. Proper fitment and marine fabrics matter for daily use.',
        'EBR handles surrey replacement and installation with attention to frame geometry, snap alignment, and finished appearance.',
      ],
      bullets: ['Surrey replacement', 'Frame inspection', 'Marine canvas', 'Snap & hardware', 'Color coordination'],
    },
    gallery: [
      {
        src: ebrImage('surrey tops: windows: covers', 'duffy-surrey-top-canvas-install.jpg'),
        alt: 'EBR Duffy surrey top canvas installation',
        caption: 'SURREY TOP INSTALL · CANVAS CRAFT',
        position: 'center 48%',
      },
      {
        src: ebrImage('surrey tops: windows: covers', 'duffy-bimini-window-enclosure-service.jpg'),
        alt: 'EBR Duffy bimini and window enclosure service',
        caption: 'SURREY & BIMINI · DUFFY TOPS',
        position: 'center 45%',
      },
    ],
    faqs: [
      {
        question: 'Can you replace an old Duffy surrey top?',
        answer:
          'Yes. We measure, specify materials, and install replacement tops suited to your frame and model.',
      },
      {
        question: 'What materials do you use for surrey tops?',
        answer:
          'Marine-grade canvas and hardware rated for sun and salt exposure. Material options are discussed during measurement.',
      },
      {
        question: 'How long does surrey installation take?',
        answer:
          'Simple replacements may be quick; custom fabrication depends on lead time. We confirm schedule at measurement.',
      },
      {
        question: 'Can surrey work be combined with enclosure projects?',
        answer:
          'Yes. Surrey, isinglass, and cover work are often coordinated for consistent appearance and fitment.',
      },
    ],
    ctaHeading: 'Refresh your Duffy surrey top.',
    ctaLead: 'Tell us about your current top — we will outline replacement or upgrade options.',
  },

  'isinglass-windows': {
    slug: 'isinglass-windows',
    meta: {
      title: 'Duffy Isinglass Window Service',
      description:
        'EBR isinglass and clear vinyl enclosure service for Duffy boats — clarity, visibility, and marine-grade window replacement in Southern California.',
    },
    eyebrow: 'Clear Enclosures',
    title: 'Duffy Isinglass Window Service',
    lead:
      'Restore clarity and visibility with marine-grade isinglass replacement — enclosure refresh for a cleaner, brighter Duffy cockpit.',
    trust: 'Clarity · Visibility · Enclosure refresh · Marine-grade vinyl',
    hero: {
      src: ebrImage('surrey tops: windows: covers', 'isinglass-window-enclosure-hero.jpg'),
      alt: 'Duffy isinglass window enclosure — tan surrey top and clear panels at Newport marina',
      position: 'center 12%',
    },
    benefits: [
      { title: 'Optical Clarity', description: 'Replace cloudy or scratched panels for improved visibility and appearance.' },
      { title: 'Enclosure Refresh', description: 'Full or partial panel replacement coordinated with existing frames.' },
      { title: 'Marine-Grade Vinyl', description: 'Materials selected for flexibility, UV exposure, and harbor use.' },
      { title: 'Zipper & Track Care', description: 'Hardware inspected so new panels operate smoothly.' },
    ],
    process: [
      { step: '01', title: 'Template', description: 'Existing panels measured or templated for accurate replacement.' },
      { step: '02', title: 'Fabricate', description: 'Clear vinyl cut and assembled to marine enclosure standards.' },
      { step: '03', title: 'Install', description: 'Panels fitted, zipped, and adjusted for proper tension.' },
      { step: '04', title: 'Inspect', description: 'Visibility, seals, and operation verified at handoff.' },
    ],
    details: {
      title: 'Clear Panels That Read Premium',
      paragraphs: [
        'Hazy isinglass reduces visibility and makes an otherwise well-kept Duffy look tired. Replacement restores both function and presentation.',
        'EBR works with marine clear vinyl systems appropriate for electric harbor boat enclosures.',
      ],
      bullets: ['Panel replacement', 'Template & fitment', 'UV-rated vinyl', 'Zipper alignment', 'Enclosure detailing'],
    },
    gallery: [
      {
        src: ebrImage('surrey tops: windows: covers', 'premium-isinglass-window-service.jpg'),
        alt: 'EBR premium isinglass window service on Duffy enclosure',
        caption: 'ISINGLASS WINDOWS · CLEAR ENCLOSURE',
        position: 'center 48%',
      },
      {
        src: ebrImage('surrey tops: windows: covers', 'duffy-isinglass-window-enclosure.jpg'),
        alt: 'EBR Duffy isinglass window enclosure and canvas panels',
        caption: 'CANVAS PANELS · WEATHER PROTECTION',
        position: 'center 45%',
      },
    ],
    faqs: [
      {
        question: 'When should isinglass be replaced?',
        answer:
          'Replace when panels are yellowed, cracked, stiff, or scratched enough to impair visibility. Early replacement prevents zipper and frame stress.',
      },
      {
        question: 'Can you replace one panel only?',
        answer:
          'Often yes. We match new panels to existing enclosure geometry and hardware.',
      },
      {
        question: 'How do I care for new isinglass?',
        answer:
          'Use approved cleaners and avoid ammonia-based products. We provide care instructions to extend clarity.',
      },
      {
        question: 'Do you service full enclosures?',
        answer:
          'Yes. Partial and full enclosure refresh projects are scoped after inspection.',
      },
    ],
    ctaHeading: 'Restore enclosure clarity on your Duffy.',
    ctaLead: 'Describe panel condition — we will outline isinglass replacement scope.',
  },

  'covers': {
    slug: 'covers',
    meta: {
      title: 'Duffy Boat Cover Service',
      description:
        'EBR custom boat covers for Duffy and electric harbor boats — weather protection, storage coverage, and sun protection with premium fitment.',
    },
    eyebrow: 'Boat Covers',
    title: 'Duffy Boat Cover Service',
    lead:
      'Protect your Duffy with fitted marine covers — weather resistance, sun protection, and clean storage coverage between harbor days.',
    trust: 'Weather protection · Storage · Sun protection · Custom fitment',
    hero: {
      src: ebrImage('surrey tops: windows: covers', 'premium-duffy-boat-cover-hero.jpg'),
      alt: 'Premium Duffy boat cover at Newport marina — EBR custom marine canvas protection',
      position: 'center 40%',
    },
    benefits: [
      { title: 'Weather Protection', description: 'Shield upholstery and surfaces from rain, dew, and harbor exposure.' },
      { title: 'Sun Protection', description: 'Reduce UV damage to interior, vinyl, and gelcoat while at the slip.' },
      { title: 'Storage Coverage', description: 'Confident coverage between outings or seasonal downtime.' },
      { title: 'Custom Fitment', description: 'Covers shaped for Duffy layouts — not generic one-size solutions.' },
    ],
    process: [
      { step: '01', title: 'Measure', description: 'Boat dimensions and coverage goals documented for proper fit.' },
      { step: '02', title: 'Specify', description: 'Fabric, color, and hardware selected for your marina environment.' },
      { step: '03', title: 'Build', description: 'Cover fabricated to measured specifications.' },
      { step: '04', title: 'Fit', description: 'Installation, straps, and tie-downs adjusted for secure coverage.' },
    ],
    details: {
      title: 'Protection That Fits Your Duffy',
      paragraphs: [
        'A poorly fitted cover flaps in harbor wind and fails to protect. Custom coverage keeps your Duffy cleaner and more ready between trips.',
        'EBR coordinates cover work with broader canvas and enclosure services when needed.',
      ],
      bullets: ['Full boat covers', 'Cockpit covers', 'Marine fabric', 'Tie-down systems', 'Seasonal storage'],
    },
    gallery: [
      {
        src: ebrImage('surrey tops: windows: covers', 'custom-duffy-cover-install.jpg'),
        alt: 'EBR custom Duffy cover installation',
        caption: 'CUSTOM COVERS · FITTED PROTECTION',
        position: 'center 48%',
      },
      {
        src: ebrImage('surrey tops: windows: covers', 'duffy-full-boat-cover-service.jpg'),
        alt: 'EBR Duffy full boat cover service at the harbor',
        caption: 'FULL BOAT COVER · MARINE CANVAS',
        position: 'center 45%',
      },
    ],
    faqs: [
      {
        question: 'Do you make custom covers for Duffy boats?',
        answer:
          'Yes. We measure and specify covers suited to Duffy cockpit and deck layouts rather than generic universal sizes.',
      },
      {
        question: 'What cover materials do you recommend?',
        answer:
          'Materials depend on whether the priority is breathability, water resistance, or UV blocking. We recommend based on how you store the boat.',
      },
      {
        question: 'Can covers be combined with surrey tops?',
        answer:
          'Yes. Cover and top systems can be planned together for consistent fit and appearance.',
      },
      {
        question: 'How long does a custom cover take?',
        answer:
          'Lead time depends on fabrication schedule. Measurement and material choices are confirmed upfront.',
      },
    ],
    ctaHeading: 'Protect your Duffy between harbor days.',
    ctaLead: 'Tell us how you store and use your boat — we will recommend cover options.',
  },

  'monthly-cleaning': {
    slug: 'monthly-cleaning',
    meta: {
      title: 'Duffy Monthly Cleaning & Maintenance',
      description:
        'EBR monthly cleaning for Duffy boats — recurring dockside care, premium maintenance, and harbor-ready appearance across Southern California marinas.',
    },
    eyebrow: 'Recurring Care',
    title: 'Duffy Monthly Cleaning Service',
    lead:
      'Recurring dockside cleaning and premium maintenance for Duffy owners who want a harbor-ready boat every time they step aboard.',
    trust: 'Recurring care · Dockside cleaning · Premium maintenance · Harbor-ready',
    hero: {
      src: ebrImage('boat maintance and cleaning', 'premium-monthly-boat-cleaning-hero.jpg'),
      alt: 'Duffy boat maintenance and cleaning Orange County — EBR',
      position: 'center 42%',
    },
    benefits: [
      { title: 'Recurring Schedule', description: 'Predictable cleaning rhythm aligned to how you use the harbor.' },
      { title: 'Dockside Service', description: 'Care performed at your slip — minimal disruption to ownership.' },
      { title: 'Premium Detailing', description: 'Wash, wipe-down, and presentation standards beyond basic rinsing.' },
      { title: 'Ready to Use', description: 'Step aboard a cleaner, more inviting Duffy every outing.' },
      { title: 'Maintenance Awareness', description: 'Regular visits help spot issues before they become repairs.' },
    ],
    process: [
      { step: '01', title: 'Plan', description: 'Cleaning scope and frequency matched to your marina and usage.' },
      { step: '02', title: 'Execute', description: 'Dockside wash, detail, and interior touch per agreed checklist.' },
      { step: '03', title: 'Maintain', description: 'Consistent standards visit after visit for reliable presentation.' },
      { step: '04', title: 'Report', description: 'Notable wear or issues flagged for optional follow-up service.' },
    ],
    details: {
      title: 'Consistent Care for Harbor Ownership',
      paragraphs: [
        'Monthly cleaning is ownership support — not just aesthetics. Salt, sun, and harbor dust accumulate quickly on electric boats used regularly.',
        'EBR provides recurring dockside care so your Duffy stays presentation-ready without coordinating every visit yourself.',
      ],
      bullets: ['Exterior wash', 'Interior wipe-down', 'Stainless & trim', 'Dockside convenience', 'Flexible scheduling'],
    },
    gallery: [
      {
        src: ebrImage('boat maintance and cleaning', 'duffy-harbor-cleaning-service.jpg'),
        alt: 'Duffy harbor cleaning service — monthly interior care',
        caption: 'MONTHLY CLEANING · INTERIOR CARE',
        position: 'center 45%',
      },
      {
        src: ebrImage('boat maintance and cleaning', 'monthly-duffy-canopy-wash-service.jpg'),
        alt: 'Monthly Duffy canopy wash service — harbor ready',
        caption: 'CANOPY WASH · HARBOR READY',
        position: 'center 40%',
      },
    ],
    faqs: [
      {
        question: 'What is included in monthly cleaning?',
        answer:
          'Scope typically covers exterior wash, basic interior wipe-down, and presentation detailing. Custom checklists can be built for your boat and marina.',
      },
      {
        question: 'Do you service all Southern California marinas?',
        answer:
          'We serve major harbor areas including Newport, Huntington, Long Beach, and Dana Point. Confirm slip access when scheduling.',
      },
      {
        question: 'Can monthly cleaning include wax or maintenance?',
        answer:
          'Yes. Add-on detailing, electrical checkups, or Harbor Care coordination can be bundled by agreement.',
      },
      {
        question: 'How do I start a recurring schedule?',
        answer:
          'Contact us with your marina, boat model, and preferred frequency. We propose a plan before the first visit.',
      },
    ],
    ctaHeading: 'Keep your Duffy harbor-ready every month.',
    ctaLead: 'Tell us your marina and schedule preferences — we will outline recurring care.',
  },

  'mobile-service': {
    slug: 'mobile-service',
    meta: {
      title: 'Mobile Dockside Service for Duffy Boats',
      description:
        'EBR mobile dockside service for Duffy and electric harbor boats — on-site troubleshooting, marina service, and ownership convenience across Southern California.',
    },
    eyebrow: 'Dockside Service',
    title: 'Mobile Dockside Service',
    lead:
      'On-site marina service for Duffy and electric harbor boats — dockside troubleshooting, convenience, and specialist support at your slip.',
    trust: 'Dockside convenience · Marina service · On-site support · Duffy specialists',
    hero: {
      src: ebrImage('services', 'premium-mobile-dockside-service-hero1.jpg'),
      alt: 'EBR marine electric system service at Newport Harbor — mobile dockside',
      position: 'center 40%',
    },
    benefits: [
      { title: 'Dockside Convenience', description: 'Service at your marina — less haul-out coordination for many issues.' },
      { title: 'On-Site Troubleshooting', description: 'Electrical and systems diagnosis performed at the slip when practical.' },
      { title: 'Marina Coordination', description: 'We work within harbor access rules and your schedule.' },
      { title: 'Ownership Support', description: 'Responsive help when something needs attention before the weekend.' },
    ],
    process: [
      { step: '01', title: 'Schedule', description: 'Marina location, access, and concern documented for the visit.' },
      { step: '02', title: 'Diagnose', description: 'On-site evaluation of reported issues and visible systems.' },
      { step: '03', title: 'Service', description: 'Repairs or stabilization performed when dockside scope allows.' },
      { step: '04', title: 'Follow Up', description: 'Parts, yard work, or return visits planned if needed beyond mobile scope.' },
    ],
    details: {
      title: 'Specialist Support Where You Moor',
      paragraphs: [
        'Not every issue requires a yard visit. Mobile dockside service brings EBR expertise to your slip for troubleshooting and many maintenance tasks.',
        'We know Duffy and electric harbor boats — so mobile visits are focused and efficient.',
      ],
      bullets: ['Dockside electrical', 'Charging checks', 'Systems troubleshooting', 'Minor repairs', 'Service coordination'],
    },
    gallery: [
      {
        src: ebrImage('services', 'duffy-helm-steering-repair-service.jpg'),
        alt: 'Duffy helm and steering repair service with dockside diagnostics',
        caption: 'HELM & STEERING · DOCKSIDE DIAGNOSTICS',
        position: 'center 42%',
      },
      {
        src: ebrImage('services', 'electric-boat-battery-service-upgrade.jpg'),
        alt: 'Electric boat battery service upgrade and dockside electrical support',
        caption: 'BATTERY SERVICE · ELECTRICAL SUPPORT',
        position: 'center 42%',
      },
    ],
    faqs: [
      {
        question: 'What can mobile service address?',
        answer:
          'Many electrical diagnostics, charging issues, minor repairs, and inspections can be handled dockside. Larger work may require yard or transport coordination.',
      },
      {
        question: 'Which marinas do you visit?',
        answer:
          'We serve Southern California harbors including Newport, Huntington, Long Beach, and Dana Point. Confirm access when booking.',
      },
      {
        question: 'Is mobile service available for non-Duffy boats?',
        answer:
          'Our focus is Duffy and electric harbor boats. Contact us with your vessel type and we confirm fit.',
      },
      {
        question: 'How do I schedule a mobile visit?',
        answer:
          'Call or text with marina, slip location, and symptoms. We schedule a dockside visit and confirm access requirements.',
      },
      {
        question: 'Can mobile service tie into Harbor Care?',
        answer:
          'Yes. Mobile visits complement ongoing Harbor Care and preventative programs for regular owners.',
      },
    ],
    ctaHeading: 'Get specialist help at your slip.',
    ctaLead: 'Share marina location and symptoms — we will schedule dockside service.',
  },

  'gelcoat-repair': {
    slug: 'gelcoat-repair',
    meta: {
      title: 'Duffy Gelcoat Repair & Refinishing',
      description:
        'EBR gelcoat repair and refinishing for Duffy and electric harbor boats — color match, chip repair, and premium hull presentation across Southern California.',
    },
    eyebrow: 'Gelcoat & Finish',
    title: 'Duffy Gelcoat Repair',
    lead:
      'Restore chips, scratches, and faded gelcoat with color-matched repair and premium marine finishing — clean hull presentation for harbor-ready ownership.',
    trust: 'Color match · Chip repair · Hull refinishing · Premium finish · Duffy specialists',
    hero: {
      src: ebrImage('fiberglass', 'duffy-gelcoat-restoration-service.jpg'),
      alt: 'Duffy gelcoat restoration and hull refinishing — EBR',
      position: 'center 40%',
    },
    benefits: [
      { title: 'Color-Matched Repair', description: 'Gelcoat chips and stress cracks repaired to blend with your hull tone.' },
      { title: 'Scratch & Chip Correction', description: 'Cosmetic damage corrected before it spreads into larger refinishing work.' },
      { title: 'Hull Refinishing', description: 'Targeted blending and finish work for uniform appearance at the slip.' },
      { title: 'Premium Presentation', description: 'Harbor-ready gelcoat clarity that reflects pride of ownership.' },
    ],
    process: [
      { step: '01', title: 'Assess', description: 'Damage depth, spread, and color variation documented before scope is set.' },
      { step: '02', title: 'Prep', description: 'Affected areas are ground, shaped, and prepared for proper gelcoat adhesion.' },
      { step: '03', title: 'Repair', description: 'Color-matched gelcoat applied and built to marine finishing standards.' },
      { step: '04', title: 'Finish', description: 'Blend, polish, and detail for cohesive hull presentation.' },
    ],
    details: {
      title: 'Gelcoat Repair With Cosmetic Discipline',
      paragraphs: [
        'Gelcoat damage on harbor boats is often more visible than structural — but it still deserves proper prep and finish discipline.',
        'EBR approaches gelcoat work with the same care as broader restoration projects — so your Duffy looks refined, not patched.',
      ],
      bullets: ['Color matching', 'Chip & crack repair', 'Fairing & blending', 'Polish & protection', 'Finish quality control'],
    },
    gallery: [
      {
        src: ebrImage('duffy exteriors', 'duffy-boat-gelcoat-restoration-newport-beach.JPG'),
        alt: 'Duffy gelcoat restoration Newport Beach',
        caption: 'GELCOAT RESTORATION · HULL REFINISHING',
        position: 'center 42%',
      },
      {
        src: ebrImage('fiberglass', 'duffy-fiberglass-repair-hero.jpg'),
        alt: 'Duffy fiberglass and gelcoat repair — EBR',
        caption: 'COLOR MATCH · PREMIUM FINISH',
        position: 'center 38%',
      },
    ],
    faqs: [
      {
        question: 'Can gelcoat chips be repaired without repainting the whole hull?',
        answer:
          'Yes. Many localized chips and cracks are repairable with color-matched gelcoat when addressed early. We assess depth and spread before quoting scope.',
      },
      {
        question: 'How is gelcoat repair different from fiberglass repair?',
        answer:
          'Fiberglass addresses laminate structure; gelcoat is the cosmetic outer layer. EBR handles both and recommends the right scope for your hull condition.',
      },
      {
        question: 'Will the repair match aged gelcoat?',
        answer:
          'We aim for the best practical color and finish match. Some aged hulls may benefit from broader blending for uniform appearance.',
      },
      {
        question: 'How long does gelcoat repair take?',
        answer:
          'Small cosmetic repairs may be quick; larger blending work needs cure time. Timeline is confirmed after inspection.',
      },
    ],
    ctaHeading: 'Restore your hull finish.',
    ctaLead: 'Send photos or schedule an inspection — we will scope gelcoat repair and refinishing.',
  },

  'flooring': {
    slug: 'flooring',
    meta: {
      title: 'Duffy Marine Flooring & Deck Restoration',
      description:
        'EBR marine flooring and deck restoration for Duffy boats — non-skid surfaces, deck replacement, and premium interior finishing across Southern California.',
    },
    eyebrow: 'Deck & Flooring',
    title: 'Marine Flooring & Deck Restoration',
    lead:
      'Replace worn decking and refresh non-skid surfaces with marine-grade materials and clean installation — safer footing and a refined Duffy interior.',
    trust: 'Deck replacement · Non-skid surfaces · Marine materials · Clean install · Duffy interiors',
    hero: {
      src: ebrImage('duffy interiors', 'duffy-boat-flooring-and-interior-restoration.JPG'),
      alt: 'Duffy boat flooring and interior restoration — EBR',
      position: 'center 42%',
    },
    benefits: [
      { title: 'Deck Replacement', description: 'Worn or damaged decking removed and replaced with marine-appropriate materials.' },
      { title: 'Non-Skid Surfaces', description: 'Safer footing with properly applied non-skid patterns and finish.' },
      { title: 'Marine-Grade Materials', description: 'Products selected for harbor moisture, UV, and regular use.' },
      { title: 'Refined Presentation', description: 'Deck surfaces that complement upholstery and overall interior restoration.' },
    ],
    process: [
      { step: '01', title: 'Evaluate', description: 'Deck condition, substrate, and material goals are reviewed before scope is set.' },
      { step: '02', title: 'Remove', description: 'Failed decking and adhesives are removed with care for underlying surfaces.' },
      { step: '03', title: 'Install', description: 'New flooring laid with proper adhesion and marine finishing standards.' },
      { step: '04', title: 'Detail', description: 'Edges, transitions, and non-skid finish completed for a cohesive look.' },
    ],
    details: {
      title: 'Deck Surfaces That Feel Intentional',
      paragraphs: [
        'Flooring and decking take daily wear on harbor boats — moisture, sun, and foot traffic break down surfaces over time.',
        'EBR restores Duffy decks with materials and installation discipline suited to electric harbor use and premium presentation.',
      ],
      bullets: ['Substrate prep', 'Marine adhesives', 'Non-skid application', 'Edge detailing', 'Finish protection'],
    },
    gallery: [
      {
        src: ebrImage('duffy interiors', 'duffy-boat-interior-restoration-orange-county.JPG'),
        alt: 'Duffy interior restoration Orange County',
        caption: 'INTERIOR RESTORATION · DECK REFINISH',
        position: 'center 45%',
      },
      {
        src: ebrImage('duffy interiors', 'custom-duffy-interior-upgrade-huntington-beach.JPG'),
        alt: 'Custom Duffy interior upgrade Huntington Beach',
        caption: 'FLOORING UPGRADE · PREMIUM FINISH',
        position: 'center 40%',
      },
    ],
    faqs: [
      {
        question: 'What flooring materials do you use on Duffy boats?',
        answer:
          'Material selection depends on use, moisture exposure, and finish goals. We recommend marine-appropriate products during evaluation.',
      },
      {
        question: 'Can flooring be part of a larger restoration?',
        answer:
          'Yes. Deck and flooring work pairs naturally with upholstery, varnish, and full Duffy restoration projects.',
      },
      {
        question: 'How long does deck replacement take?',
        answer:
          'Timeline depends on scope, curing requirements, and material lead times. We confirm schedule after inspection.',
      },
      {
        question: 'Do you handle non-skid patterns?',
        answer:
          'Yes. Non-skid layout and application are part of delivering safe, attractive deck surfaces.',
      },
    ],
    ctaHeading: 'Refresh your Duffy deck surfaces.',
    ctaLead: 'Describe current deck condition — we will outline flooring restoration scope.',
  },

  'steering-helm-repair': {
    slug: 'steering-helm-repair',
    meta: {
      title: 'Duffy Steering & Helm Repair',
      description:
        'EBR steering and helm repair for Duffy boats — cable service, helm alignment, and responsive control feel across Southern California harbors.',
    },
    eyebrow: 'Steering & Helm',
    title: 'Steering & Helm Repair',
    lead:
      'Restore confident helm response with cable, linkage, and steering system service — precise control feel for electric harbor cruising.',
    trust: 'Cable service · Helm alignment · Linkage repair · Responsive control · Duffy specialists',
    hero: {
      src: ebrImage('steering cable: helm : shaft', 'duffy-boat-helm-and-steering-system-repair.png'),
      alt: 'Duffy helm and steering system repair — EBR',
      position: 'center 42%',
    },
    benefits: [
      { title: 'Cable Inspection', description: 'Steering cables evaluated for wear, binding, and corrosion.' },
      { title: 'Helm Alignment', description: 'Helm and linkage adjusted for smooth, predictable response.' },
      { title: 'Linkage Service', description: 'Worn components identified and corrected before they fail underway.' },
      { title: 'Confident Handling', description: 'Steering that matches the calm, precise feel Duffy owners expect.' },
    ],
    process: [
      { step: '01', title: 'Diagnose', description: 'Steering effort, play, and binding are evaluated at the helm and linkage.' },
      { step: '02', title: 'Inspect', description: 'Cables, pulleys, and hardware are checked for wear and proper routing.' },
      { step: '03', title: 'Repair', description: 'Components are serviced or replaced to restore smooth operation.' },
      { step: '04', title: 'Verify', description: 'Range of motion and response verified before return to service.' },
    ],
    details: {
      title: 'Steering Systems You Can Trust',
      paragraphs: [
        'Heavy or vague steering undermines confidence at the harbor. Often the issue is cable wear, misalignment, or linkage fatigue — not the helm wheel itself.',
        'EBR services Duffy steering systems with mechanical discipline and electric-boat awareness throughout the repair.',
      ],
      bullets: ['Cable routing', 'Helm service', 'Linkage adjustment', 'Hardware inspection', 'Sea-trial verification'],
    },
    gallery: [
      {
        src: ebrImage('services', 'duffy-helm-steering-repair-service.jpg'),
        alt: 'Duffy helm steering repair service',
        caption: 'HELM SERVICE · DOCKSIDE DIAGNOSTICS',
        position: 'center 45%',
      },
      {
        src: ebrImage('steering cable: helm : shaft', 'duffy-boat-steering-cable-replacement-orange-county.png'),
        alt: 'Duffy steering cable replacement Orange County',
        caption: 'CABLE REPLACEMENT · PRECISE CONTROL',
        position: 'center 40%',
      },
    ],
    faqs: [
      {
        question: 'What are signs of steering problems on a Duffy?',
        answer:
          'Stiff helm effort, excessive play, binding in certain positions, or uneven response often point to cable or linkage issues.',
      },
      {
        question: 'Can steering repair be done dockside?',
        answer:
          'Many inspections and some repairs can be handled dockside. Larger cable work may require yard access depending on routing.',
      },
      {
        question: 'Is steering related to throttle or controller issues?',
        answer:
          'Steering is mechanical; throttle and drive are electrical. We clarify which system is causing symptoms before recommending work.',
      },
      {
        question: 'How long does helm service take?',
        answer:
          'Timeline depends on parts and access. We provide scope after evaluating cables, helm, and linkage condition.',
      },
    ],
    ctaHeading: 'Restore confident helm response.',
    ctaLead: 'Describe steering behavior — we will outline helm and cable service options.',
  },

  'prop-replacement': {
    slug: 'prop-replacement',
    meta: {
      title: 'Duffy Propeller Replacement & Drive Service',
      description:
        'EBR propeller replacement and drive-end service for Duffy electric boats — correct sizing, damage inspection, and efficient harbor performance.',
    },
    eyebrow: 'Propulsion Hardware',
    title: 'Propeller Replacement',
    lead:
      'Replace damaged or inefficient props with correctly sized hardware — protect your motor and restore smooth electric drive performance.',
    trust: 'Prop sizing · Damage inspection · Drive-end service · Efficient performance · Duffy specialists',
    hero: {
      src: ebrImage('props', 'duffy-boat-propeller-replacement-orange-county.jpg'),
      alt: 'Duffy propeller replacement Orange County — EBR',
      position: 'center 42%',
    },
    benefits: [
      { title: 'Correct Prop Sizing', description: 'Props matched to motor, usage, and harbor operating profile.' },
      { title: 'Damage Inspection', description: 'Impact damage and wear identified before they stress the drivetrain.' },
      { title: 'Drive-End Service', description: 'Hub, hardware, and alignment checked during replacement.' },
      { title: 'Efficient Performance', description: 'Smoother running and better range when propulsion hardware is right.' },
    ],
    process: [
      { step: '01', title: 'Inspect', description: 'Prop condition, hub hardware, and drive alignment are evaluated.' },
      { step: '02', title: 'Specify', description: 'Replacement prop selected for your motor and usage pattern.' },
      { step: '03', title: 'Install', description: 'Hardware torqued and secured to marine standards.' },
      { step: '04', title: 'Verify', description: 'Vibration and performance checked before return to service.' },
    ],
    details: {
      title: 'Propulsion Hardware Matched to Your Duffy',
      paragraphs: [
        'A bent or incorrectly sized prop can rob efficiency and stress electric drive components over time.',
        'EBR replaces and services Duffy propulsion hardware with attention to sizing, installation, and overall drive health.',
      ],
      bullets: ['Prop inspection', 'Impact assessment', 'Hardware torque', 'Alignment check', 'Performance verification'],
    },
    gallery: [
      {
        src: ebrImage('props', 'duffy-boat-drive-prop-repair-newport-beach.jpg'),
        alt: 'Duffy drive prop repair Newport Beach',
        caption: 'PROP SERVICE · DRIVE-END CARE',
        position: 'center 45%',
      },
      {
        src: ebrImage('props', 'electric-boat-prop-upgrade-huntington-beach.jpg'),
        alt: 'Electric boat prop upgrade Huntington Beach',
        caption: 'PROP UPGRADE · EFFICIENT DRIVE',
        position: 'center 40%',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my prop needs replacement?',
        answer:
          'Vibration, reduced range, visible damage, or recurring impact strikes are common indicators. We inspect before recommending replacement.',
      },
      {
        question: 'Can the wrong prop damage an electric motor?',
        answer:
          'Incorrect sizing or severe damage can increase load on the drivetrain. Proper prop selection helps protect motor and controller performance.',
      },
      {
        question: 'Do you service prop impacts after docking incidents?',
        answer:
          'Yes. Impact damage is common in harbor environments. We assess whether repair or replacement is appropriate.',
      },
      {
        question: 'Can prop work be combined with motor service?',
        answer:
          'Yes. Prop and motor service are often evaluated together for complete drivetrain confidence.',
      },
    ],
    ctaHeading: 'Restore efficient drive performance.',
    ctaLead: 'Describe prop condition or vibration — we will outline replacement and inspection scope.',
  },
};

export function getSupportingServiceContent(slug: string): SupportingServiceContent | null {
  if (!isSupportingServiceSlug(slug)) return null;
  return supportingServices[slug];
}

export function getSupportingServiceMeta(slug: string) {
  const content = getSupportingServiceContent(slug);
  return content?.meta ?? null;
}
