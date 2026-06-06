import { ebrImage } from '@/lib/mediaPaths';

export { getBlogHubPosts, mergeBlogListing } from '@/lib/blogArticles';

export const BLOG_HERO = {
  src: ebrImage('motor replacemants', 'electric-boat-motor-rebuild-huntington-beach.png'),
  alt: 'Electric boat motor rebuild in Huntington Beach',
  position: 'center 38%',
} as const;

export const BLOG_INTRO =
  'Practical electric boat repair insights from EBR\u2019s dockside service team.';

export const BLOG_FALLBACK_CARD_IMAGE = ebrImage('services', 'premium-mobile-dockside-service-hero1.jpg');
