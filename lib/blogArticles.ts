import { ebrImage } from '@/lib/mediaPaths';
import type { BlogPostCard } from '@/components/BlogPageView';

export const BLOG_PLACEHOLDER_BODY = 'ARTICLE CONTENT TO BE INSERTED';

export type BlogArticleSection = {
  id: string;
  heading: string;
  content: string;
};

export type BlogArticleRelatedService = {
  title: string;
  href: string;
  description: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  readingTimeMinutes: number;
  heroImage: string;
  heroImageAlt: string;
  heroImagePosition: string;
  seoTitle: string;
  seoDescription: string;
  sections: BlogArticleSection[];
  relatedServices: BlogArticleRelatedService[];
  relatedArticleSlugs: string[];
};

export const BLOG_ARTICLE_SLUGS = [
  'why-duffy-wont-move',
  'lead-acid-vs-lithium',
  'duffy-battery-lifespan',
  'controller-failure-signs',
  'duffy-charger-problems',
  'duffy-maintenance-checklist',
] as const;

export type BlogArticleSlug = (typeof BLOG_ARTICLE_SLUGS)[number];

export const BLOG_ARTICLES: Record<BlogArticleSlug, BlogArticle> = {
  'why-duffy-wont-move': {
    slug: 'why-duffy-wont-move',
    title: "Why Your Duffy Boat Won't Move",
    excerpt:
      'Common reasons electric boats stop moving — from dead batteries and blown fuses to failed controllers and motor problems.',
    category: 'Duffy Troubleshooting',
    publishedDate: '2025-11-12',
    readingTimeMinutes: 7,
    heroImage: ebrImage('motor replacemants', 'duffy-boat-drive-motor-restoration.jpg'),
    heroImageAlt: 'Duffy boat drive motor restoration',
    heroImagePosition: 'center 38%',
    seoTitle: "Why Your Duffy Boat Won't Move",
    seoDescription:
      'Diagnose why your Duffy electric boat will not move — batteries, fuses, controllers, motors, and throttle issues explained by EBR specialists.',
    sections: [
      {
        id: 'start-with-the-battery-bank',
        heading: 'Start With the Battery Bank',
        content: [
          'If your Duffy boat will not move, the first thing to check is the battery bank. Low voltage, weak batteries, loose battery cables, or failed connections can prevent the boat from operating even when lights and accessories appear to function normally.',
          'Many battery problems only become obvious when the system is placed under load. A battery bank may appear charged while sitting idle but experience a major voltage drop the moment the throttle is applied.',
          'Corroded terminals, damaged cables, poor connections, and aging batteries are among the most common causes of no-movement complaints. Before replacing expensive components, the battery system should always be inspected and tested thoroughly.',
        ].join('\n\n'),
      },
      {
        id: 'throttle-key-switch-and-control-circuit-problems',
        heading: 'Throttle, Key Switch, and Control Circuit Problems',
        content: [
          'Once the battery bank has been verified, the next step is evaluating the control circuit. The key switch, throttle assembly, microswitches, neutral safety systems, and related wiring all play a role in allowing the controller to operate the motor.',
          'A failed throttle signal can make the boat feel completely dead. In some cases the contactor may click when the throttle is pressed but the motor never responds. In other situations nothing happens at all.',
          'Proper testing is critical because many symptoms can appear similar. Replacing parts based on guesswork often wastes time and money while the real problem remains unresolved.',
        ].join('\n\n'),
      },
      {
        id: 'controller-contactor-and-motor-issues',
        heading: 'Controller, Contactor, and Motor Issues',
        content: [
          'Electric boats rely on the controller, contactor, and motor working together. If one of these components fails, the boat may stop moving even though the rest of the electrical system still appears functional.',
          'Common failures include damaged contactors, burned connections, controller faults, wiring problems, and motor issues. Some controllers provide fault indicators while others require voltage testing and signal verification to identify the cause.',
          'At EBR, diagnostics typically include battery testing, throttle signal verification, controller inspection, contactor testing, and motor circuit evaluation to isolate the problem quickly and accurately.',
        ].join('\n\n'),
      },
      {
        id: 'when-professional-diagnostics-make-sense',
        heading: 'When Professional Diagnostics Make Sense',
        content: [
          'If your Duffy boat suddenly stops moving, repeatedly cycling the key switch or continuing to apply throttle rarely solves the problem and can sometimes create additional electrical issues.',
          'A structured diagnostic process can quickly determine whether the fault originates in the batteries, throttle system, controller, contactor, motor, or wiring. This prevents unnecessary parts replacement and reduces downtime.',
          'Electric Boat Repair provides dockside diagnostics throughout Southern California. Our goal is to identify the root cause, explain the findings clearly, and recommend the most practical repair path for your specific boat.',
        ].join('\n\n'),
      },
    ],
    relatedServices: [
      {
        title: 'Mobile Dockside Service',
        href: '/services/mobile-service',
        description: 'On-site troubleshooting and repairs at your marina slip.',
      },
      {
        title: 'Controller Repair',
        href: '/services/controller-repair',
        description: 'Factory-spec controller diagnostics and rebuilds.',
      },
      {
        title: 'Electrical Diagnostics',
        href: '/services/electrical-diagnostics',
        description: 'System-wide troubleshooting for propulsion and charging faults.',
      },
      {
        title: 'Motor Repair',
        href: '/services/motor-repair',
        description: 'Electric motor service, alignment, and performance restoration.',
      },
    ],
    relatedArticleSlugs: ['controller-failure-signs', 'duffy-charger-problems', 'duffy-battery-lifespan'],
  },

  'lead-acid-vs-lithium': {
    slug: 'lead-acid-vs-lithium',
    title: 'Lead Acid vs Lithium Batteries for Duffy Boats',
    excerpt: 'Weight, range, lifespan, and cost compared. Which battery type is right for your Duffy?',
    category: 'Battery & Charging',
    publishedDate: '2025-10-28',
    readingTimeMinutes: 8,
    heroImage: ebrImage('Battery replacements: Upgrades', 'duffy-lithium-battery-conversion-newport-beach.png'),
    heroImageAlt: 'Duffy lithium battery conversion in Newport Beach',
    heroImagePosition: 'center 42%',
    seoTitle: 'Lead Acid vs Lithium Batteries for Duffy Boats',
    seoDescription:
      'Compare lead-acid and lithium batteries for Duffy electric boats — weight, range, lifespan, charging, and upgrade considerations.',
    sections: [
      {
        id: 'how-duffy-battery-banks-are-used',
        heading: 'How Duffy Battery Banks Are Used',
        content: [
          'Most Duffy boats were originally equipped with flooded lead-acid battery banks such as Trojan T105 or T125 batteries. These batteries have powered electric boats reliably for decades and remain a cost-effective solution for many owners.',
          'The battery bank supplies power to the motor, onboard accessories, lighting, and other electrical systems. Over time, battery performance naturally declines, which can reduce cruising range, charging efficiency, and overall reliability.',
          'Many owners begin exploring alternatives when their existing battery bank reaches the end of its service life or no longer provides the runtime they need.',
        ].join('\n\n'),
      },
      {
        id: 'lead-acid-vs-lithium-key-differences',
        heading: 'Lead-Acid vs Lithium: Key Differences',
        content: [
          'Lead-acid batteries offer a lower upfront cost and have been used successfully in Duffy boats for many years. They are widely available, familiar to most marine technicians, and generally work with existing charging equipment.',
          'Lithium batteries require a larger initial investment but provide significant advantages in lifespan, charging speed, usable capacity, and overall performance.',
          'Unlike lead-acid batteries, lithium batteries maintain voltage much more consistently throughout the discharge cycle. This allows the boat to feel stronger and more responsive even after several hours on the water.',
          'Many owners also appreciate that lithium batteries require far less maintenance and can often last substantially longer than traditional lead-acid battery banks.',
        ].join('\n\n'),
      },
      {
        id: 'charging-wiring-and-range-considerations',
        heading: 'Charging, Wiring, and Range Considerations',
        content: [
          'One of the biggest advantages of lithium technology is the amount of usable energy available. Lead-acid batteries should generally not be discharged deeply on a regular basis, while lithium systems can safely utilize a much larger percentage of their capacity.',
          'This often translates into longer cruising times, more predictable performance, and less concern about battery voltage dropping throughout the day.',
          'However, a lithium conversion is more than simply swapping batteries. Charger compatibility, wiring condition, battery monitoring, and controller compatibility should all be evaluated before an upgrade is performed.',
          'A properly designed system will deliver better performance while maintaining safety and long-term reliability.',
        ].join('\n\n'),
      },
      {
        id: 'planning-a-lithium-upgrade',
        heading: 'Planning a Lithium Upgrade',
        content: [
          'Every Duffy boat is different, which is why battery upgrades should begin with an evaluation of the existing electrical system.',
          'Important factors include battery bank configuration, charger type, wiring condition, controller compatibility, and how the boat is actually used.',
          'For some owners, replacing lead-acid batteries with new lead-acid batteries remains the most cost-effective solution. For others, a lithium conversion can dramatically improve the ownership experience.',
          'Electric Boat Repair evaluates each boat individually and recommends solutions based on performance goals, budget, and long-term reliability rather than a one-size-fits-all approach.',
        ].join('\n\n'),
      },
    ],
    relatedServices: [
      {
        title: 'Battery Upgrades',
        href: '/services/battery-upgrades',
        description: 'Lithium conversions engineered for range and reliability.',
      },
      {
        title: 'Charger Upgrades',
        href: '/services/charger-upgrades',
        description: 'Dockside charging profiles matched to your battery architecture.',
      },
      {
        title: 'Electrical Diagnostics',
        href: '/services/electrical-diagnostics',
        description: 'Evaluate existing wiring and charging before a conversion.',
      },
    ],
    relatedArticleSlugs: ['duffy-battery-lifespan', 'duffy-charger-problems', 'why-duffy-wont-move'],
  },

  'duffy-battery-lifespan': {
    slug: 'duffy-battery-lifespan',
    title: 'How Long Do Duffy Boat Batteries Last?',
    excerpt: 'With proper maintenance, what is a realistic lifespan for lead-acid and lithium Duffy batteries?',
    category: 'Battery & Charging',
    publishedDate: '2025-10-14',
    readingTimeMinutes: 6,
    heroImage: ebrImage(
      'Battery replacements: Upgrades',
      'duffy-lithium-battery-upgrade-victron-system-banner.jpg'
    ),
    heroImageAlt: 'Duffy lithium battery upgrade with Victron system',
    heroImagePosition: 'center 45%',
    seoTitle: 'How Long Do Duffy Boat Batteries Last?',
    seoDescription:
      'Realistic lead-acid and lithium battery lifespan for Duffy electric boats — maintenance habits, charging, and replacement timing.',
    sections: [
      {
        id: 'typical-battery-life-in-a-duffy-boat',
        heading: 'Typical Battery Life in a Duffy Boat',
        content: [
          'One of the most common questions Duffy boat owners ask is how long their batteries should last. The answer depends on battery type, charging habits, usage patterns, and maintenance.',
          'Most traditional lead-acid battery banks last between 4 and 7 years under normal recreational use. Some owners may see longer service life, while others experience battery decline much sooner due to heavy use, improper charging, or extended periods of storage.',
          'Lithium battery systems often last significantly longer than lead-acid batteries because they tolerate deeper discharge cycles and experience less long-term degradation.',
          'Understanding what affects battery lifespan can help owners avoid unexpected failures and plan for replacement before performance becomes a problem.',
        ].join('\n\n'),
      },
      {
        id: 'signs-your-batteries-may-be-nearing-replacement',
        heading: 'Signs Your Batteries May Be Nearing Replacement',
        content: [
          'Battery performance usually declines gradually rather than failing overnight. Many owners notice subtle changes before realizing the battery bank is reaching the end of its useful life.',
          'Common warning signs include reduced cruising range, slower performance, longer charging times, batteries that fail to reach a full charge, or noticeable voltage drops under load.',
          'In some cases, batteries may appear to charge normally but lose capacity rapidly once the boat is in use. This often indicates aging cells that can no longer store energy effectively.',
          'Regular testing can help identify these issues before they leave you stranded or shorten a day on the water.',
        ].join('\n\n'),
      },
      {
        id: 'factors-that-affect-battery-life',
        heading: 'Factors That Affect Battery Life',
        content: [
          'Several factors influence how long a Duffy boat battery bank will last.',
          'Charging habits play a major role. Batteries that are consistently left discharged for long periods often experience accelerated deterioration. Extreme temperatures, frequent deep discharges, poor maintenance, and improper charging equipment can also shorten battery life.',
          'Usage patterns matter as well. Boats used frequently and maintained properly often perform better than boats that sit unused for months at a time.',
          'For lead-acid systems, water levels, terminal condition, and equalization charging can also impact longevity and overall performance.',
        ].join('\n\n'),
      },
      {
        id: 'when-to-replace-and-when-to-upgrade',
        heading: 'When to Replace and When to Upgrade',
        content: [
          'If your battery bank is approaching the end of its service life, replacement is often the ideal time to evaluate upgrade options.',
          'Many owners choose to replace aging lead-acid batteries with a new lead-acid bank because it provides a familiar and cost-effective solution. Others use the opportunity to upgrade to lithium technology for improved range, faster charging, lower maintenance, and longer overall lifespan.',
          'The right decision depends on how the boat is used, how long you plan to keep it, and your performance goals.',
          'Electric Boat Repair can evaluate your current battery system, test battery health, and help determine whether a standard replacement or lithium conversion is the best fit for your boat.',
        ].join('\n\n'),
      },
    ],
    relatedServices: [
      {
        title: 'Battery Upgrades',
        href: '/services/battery-upgrades',
        description: 'Plan a lithium conversion when replacement makes sense.',
      },
      {
        title: 'Harbor Care Program',
        href: '/services/harbor-care',
        description: 'Recurring battery health checks and dockside care.',
      },
      {
        title: 'Charger Upgrades',
        href: '/services/charger-upgrades',
        description: 'Match charging profiles to your battery bank.',
      },
    ],
    relatedArticleSlugs: ['lead-acid-vs-lithium', 'duffy-charger-problems', 'controller-failure-signs'],
  },

  'controller-failure-signs': {
    slug: 'controller-failure-signs',
    title: 'Signs Your Electric Boat Controller Is Failing',
    excerpt:
      'Jerky throttle response, uneven power, battery drain — how to spot controller issues before they leave you stranded.',
    category: 'Electrical Systems',
    publishedDate: '2025-09-22',
    readingTimeMinutes: 7,
    heroImage: ebrImage('electrical', 'premium-electric-boat-electrical-diagnostics-hero.jpg'),
    heroImageAlt: 'Electric boat controller and electrical diagnostics',
    heroImagePosition: 'center 42%',
    seoTitle: 'Signs Your Electric Boat Controller Is Failing',
    seoDescription:
      'Learn the warning signs of a failing Duffy boat controller — throttle response, power delivery, and battery drain symptoms.',
    sections: [
      {
        id: 'what-does-an-electric-boat-controller-do',
        heading: 'What Does an Electric Boat Controller Do?',
        content: [
          'The controller is one of the most important components in an electric boat. It acts as the bridge between the battery bank, throttle, and motor, regulating how much power reaches the propulsion system.',
          'When the throttle is pressed, the controller interprets the signal and delivers the appropriate amount of power to the motor. Without a properly functioning controller, the boat may lose performance, behave unpredictably, or stop moving entirely.',
          'Because the controller manages high current loads, it is exposed to heat, vibration, moisture, and years of electrical stress. Over time, failures can develop that affect reliability and performance.',
        ].join('\n\n'),
      },
      {
        id: 'common-symptoms-of-controller-failure',
        heading: 'Common Symptoms of Controller Failure',
        content: [
          'Controller problems can appear in several different ways. Some boats lose power gradually, while others stop operating without warning.',
          'Common symptoms include reduced speed, intermittent operation, sudden shutdowns, inconsistent throttle response, fault lights, error codes, or a boat that will not move despite having charged batteries.',
          'In some situations, the controller may function normally when the boat is cold but begin acting up once components warm up during use. These intermittent failures are often among the most difficult problems for owners to diagnose on their own.',
        ].join('\n\n'),
      },
      {
        id: 'why-controllers-are-often-misdiagnosed',
        heading: 'Why Controllers Are Often Misdiagnosed',
        content: [
          'Many electrical problems can mimic controller failure. Weak batteries, damaged wiring, faulty contactors, throttle issues, and charging problems can all create symptoms that appear similar to a bad controller.',
          'This is why replacing the controller without proper testing can become expensive. We frequently inspect boats where a controller was suspected, only to discover the actual fault was elsewhere in the electrical system.',
          'A structured diagnostic process helps separate controller faults from battery, throttle, motor, and wiring issues before parts are replaced.',
        ].join('\n\n'),
      },
      {
        id: 'professional-controller-diagnostics',
        heading: 'Professional Controller Diagnostics',
        content: [
          'At Electric Boat Repair, controller diagnostics begin with a complete evaluation of the propulsion system. Battery voltage, throttle signals, wiring integrity, contactor operation, and motor circuits are all verified before a controller is condemned.',
          'Many modern controllers also provide diagnostic indicators or fault information that can help narrow down the source of the problem.',
          'Whether your boat uses a Curtis, Alltrax, Sigma, or another controller platform, proper testing can identify the root cause quickly and prevent unnecessary replacement of expensive components. The goal is always to recommend the most effective and reliable repair solution based on actual test results.',
        ].join('\n\n'),
      },
    ],
    relatedServices: [
      {
        title: 'Controller Repair',
        href: '/services/controller-repair',
        description: 'Factory-spec controller diagnostics and rebuilds.',
      },
      {
        title: 'Throttle Repair',
        href: '/services/throttle-repair',
        description: 'Throttle response, linkage, and drive control calibration.',
      },
      {
        title: 'Electrical Diagnostics',
        href: '/services/electrical-diagnostics',
        description: 'Isolate controller faults from wiring and battery issues.',
      },
    ],
    relatedArticleSlugs: ['why-duffy-wont-move', 'duffy-charger-problems', 'duffy-battery-lifespan'],
  },

  'duffy-charger-problems': {
    slug: 'duffy-charger-problems',
    title: "Why Your Duffy Boat Charger Isn't Working",
    excerpt: "Charger lights blinking, won't start, or stops mid-charge? Diagnose common Duffy charger faults.",
    category: 'Duffy Troubleshooting',
    publishedDate: '2025-09-08',
    readingTimeMinutes: 6,
    heroImage: ebrImage('charger diagnostics: upgrades', 'charger-upgrades-hero.jpg'),
    heroImageAlt: 'Duffy charger upgrade and dockside charging diagnostics',
    heroImagePosition: 'center 40%',
    seoTitle: "Why Your Duffy Boat Charger Isn't Working",
    seoDescription:
      'Troubleshoot Duffy boat charger problems — blinking lights, incomplete charging, and dockside charging faults explained.',
    sections: [
      {
        id: 'common-signs-of-charger-problems',
        heading: 'Common Signs of Charger Problems',
        content: [
          'One of the most common service calls we receive involves boats that are not charging properly. Owners often notice shorter run times, batteries that never seem to reach a full charge, or chargers that fail to start altogether.',
          'In some cases, the charger appears completely dead. In others, indicator lights flash error codes, charging stops prematurely, or batteries remain undercharged even after being plugged in overnight.',
          'Because charging problems can originate from the charger, batteries, wiring, or shore power connection, proper diagnosis is important before replacing parts.',
        ].join('\n\n'),
      },
      {
        id: 'battery-problems-can-look-like-charger-problems',
        heading: 'Battery Problems Can Look Like Charger Problems',
        content: [
          'Many boat owners assume the charger is faulty when the real issue is the battery bank itself. Aging batteries can develop internal resistance, weak cells, or voltage imbalances that prevent normal charging.',
          'A charger may refuse to start charging if battery voltage falls outside its operating range. Some chargers will also display fault codes when connected to severely damaged batteries.',
          'This is why charger testing should always include battery testing. Replacing a charger without verifying battery health can lead to unnecessary expense and continued performance issues.',
        ].join('\n\n'),
      },
      {
        id: 'wiring-connections-and-shore-power-issues',
        heading: 'Wiring, Connections, and Shore Power Issues',
        content: [
          'Charging systems depend on more than just the charger itself. Corroded terminals, loose wiring, damaged connectors, blown fuses, tripped breakers, and shore power issues can all interrupt charging.',
          'We frequently find charging problems caused by simple connection failures rather than defective chargers. Saltwater environments are particularly hard on electrical connections and can create hidden resistance that affects charging performance.',
          'A complete charging-system inspection includes verifying incoming power, charger output, wiring condition, and battery-bank connections.',
        ].join('\n\n'),
      },
      {
        id: 'diagnosing-the-right-solution',
        heading: 'Diagnosing the Right Solution',
        content: [
          'Modern electric boats use a variety of charging systems, including Delta-Q, Lester, Zivan, Eagle, and other marine chargers. Each system has different charging profiles, fault indicators, and compatibility requirements.',
          'Professional testing allows technicians to determine whether the charger, battery bank, wiring, or another component is responsible for the problem. This prevents unnecessary parts replacement and ensures the correct repair is performed the first time.',
          'Electric Boat Repair provides dockside charging-system diagnostics throughout Southern California. Whether your charger will not turn on, displays fault codes, or simply is not charging properly, we can identify the cause and recommend the best solution.',
        ].join('\n\n'),
      },
    ],
    relatedServices: [
      {
        title: 'Charger Upgrades',
        href: '/services/charger-upgrades',
        description: 'Smart charging integration and profile matching.',
      },
      {
        title: 'Electrical Diagnostics',
        href: '/services/electrical-diagnostics',
        description: 'Charging, wiring, and propulsion fault isolation.',
      },
      {
        title: 'Battery Upgrades',
        href: '/services/battery-upgrades',
        description: 'Align charger architecture with lithium conversions.',
      },
    ],
    relatedArticleSlugs: ['lead-acid-vs-lithium', 'duffy-battery-lifespan', 'why-duffy-wont-move'],
  },

  'duffy-maintenance-checklist': {
    slug: 'duffy-maintenance-checklist',
    title: 'Duffy Boat Maintenance Checklist',
    excerpt: 'Monthly, quarterly, and annual maintenance tasks every Duffy boat owner should know.',
    category: 'Maintenance',
    publishedDate: '2025-07-22',
    readingTimeMinutes: 6,
    heroImage: ebrImage('harbor care', 'premium-harbor-care-program-hero.jpg'),
    heroImageAlt: 'EBR Harbor Care and Duffy maintenance at the marina',
    heroImagePosition: 'center 42%',
    seoTitle: 'Duffy Boat Maintenance Checklist',
    seoDescription:
      'Monthly Duffy boat maintenance checklist — battery and charging checks, exterior care, inspection basics, and when to schedule professional service.',
    sections: [
      {
        id: 'monthly-inspection-basics',
        heading: 'Monthly Inspection Basics',
        content: [
          'Routine inspections are one of the easiest ways to prevent expensive repairs and unexpected breakdowns. A quick monthly walk-around can identify small issues before they become larger problems.',
          'Owners should inspect battery connections, charger operation, shore power cords, navigation lights, bilge areas, steering components, and visible wiring. Look for corrosion, loose hardware, damaged insulation, and signs of water intrusion.',
          'Keeping a simple maintenance routine helps improve reliability and extends the life of electrical and mechanical components throughout the boat.',
        ].join('\n\n'),
      },
      {
        id: 'battery-and-charging-system-checks',
        heading: 'Battery and Charging System Checks',
        content: [
          'The battery bank is the heart of every electric boat. Regular battery inspections help ensure the boat is ready whenever you want to get on the water.',
          'Battery terminals should be clean and free of corrosion. Connections should remain tight, and charging systems should be operating properly. Owners should also verify that batteries are reaching full charge and maintaining expected voltage levels.',
          'If range begins decreasing or charging behavior changes, battery testing should be performed before larger problems develop.',
        ].join('\n\n'),
      },
      {
        id: 'exterior-hull-and-cosmetic-maintenance',
        heading: 'Exterior, Hull, and Cosmetic Maintenance',
        content: [
          'A well-maintained exterior not only improves appearance but also protects the long-term value of the boat.',
          'Regular washing removes salt, dirt, bird droppings, and environmental contaminants that can damage finishes over time. Gelcoat, brightwork, upholstery, canvas tops, and isinglass windows all benefit from routine care.',
          'Owners should also inspect the hull for damage, monitor bottom paint condition, and address cosmetic issues before they become larger restoration projects.',
        ].join('\n\n'),
      },
      {
        id: 'when-professional-service-makes-sense',
        heading: 'When Professional Service Makes Sense',
        content: [
          'Some maintenance tasks are simple enough for owners to perform themselves, while others benefit from professional inspection and servicing.',
          'Electrical diagnostics, battery testing, charger troubleshooting, controller evaluation, bottom paint assessments, restoration work, and dockside repairs often require specialized tools and experience.',
          'Programs such as Harbor Care and scheduled maintenance visits help boat owners stay ahead of problems while keeping their vessels clean, reliable, and ready for use throughout the year.',
          'Regular professional inspections can often identify developing issues long before they result in unexpected downtime or costly repairs.',
        ].join('\n\n'),
      },
    ],
    relatedServices: [
      {
        title: 'Harbor Care Program',
        href: '/services/harbor-care',
        description: 'Recurring dockside care, inspections, and preventive maintenance.',
      },
      {
        title: 'Monthly Cleaning',
        href: '/services/monthly-cleaning',
        description: 'Scheduled wash, detail, and cosmetic upkeep at your slip.',
      },
      {
        title: 'Electrical Diagnostics',
        href: '/services/electrical-diagnostics',
        description: 'Battery, charger, and propulsion system health checks.',
      },
      {
        title: 'Battery Upgrades',
        href: '/services/battery-upgrades',
        description: 'Battery testing, replacement, and lithium conversion planning.',
      },
    ],
    relatedArticleSlugs: ['duffy-battery-lifespan', 'duffy-charger-problems', 'lead-acid-vs-lithium'],
  },
};

export function isBlogArticleSlug(slug: string): slug is BlogArticleSlug {
  return (BLOG_ARTICLE_SLUGS as readonly string[]).includes(slug);
}

export function getBlogArticle(slug: string): BlogArticle | null {
  if (!isBlogArticleSlug(slug)) return null;
  return BLOG_ARTICLES[slug];
}

export function getBlogArticleSlugs(): BlogArticleSlug[] {
  return [...BLOG_ARTICLE_SLUGS];
}

export function formatBlogPublishedDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function blogArticleToCard(article: BlogArticle): BlogPostCard {
  return {
    id: article.slug,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    publishedDate: formatBlogPublishedDate(article.publishedDate),
    imageSrc: article.heroImage,
    imageAlt: article.heroImageAlt,
    href: `/blog/${article.slug}`,
  };
}

export function getBlogHubPosts(): BlogPostCard[] {
  return BLOG_ARTICLE_SLUGS.map((slug) => blogArticleToCard(BLOG_ARTICLES[slug]));
}

export function getRelatedBlogArticles(slugs: string[]): BlogPostCard[] {
  return slugs
    .map((slug) => getBlogArticle(slug))
    .filter((article): article is BlogArticle => article !== null)
    .map(blogArticleToCard);
}

export function mergeBlogListing(sanityPosts: BlogPostCard[], localPosts: BlogPostCard[]): BlogPostCard[] {
  const sanitySlugs = new Set(sanityPosts.map((post) => post.slug));
  const locals = localPosts.filter((post) => !sanitySlugs.has(post.slug));
  return [...sanityPosts, ...locals];
}
