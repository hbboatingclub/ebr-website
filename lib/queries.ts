// ─── Blog Queries ─────────────────────────────────────────────
export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedDate desc) {
    _id, title, slug, category, excerpt, publishedDate,
    "author": author->name,
    "featuredImage": featuredImage { asset->, alt },
    seo
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, category, excerpt, publishedDate,
    "author": author->name,
    "featuredImage": featuredImage { asset->, alt },
    body,
    "relatedServices": relatedServices[]->{ title, slug },
    seo
  }
`;

export const FEATURED_POSTS_QUERY = `
  *[_type == "post"] | order(publishedDate desc) [0...3] {
    _id, title, slug, category, excerpt, publishedDate,
    "featuredImage": featuredImage { asset->, alt }
  }
`;

// ─── Project Queries ───────────────────────────────────────────
export const ALL_PROJECTS_QUERY = `
  *[_type == "project"] | order(completionDate desc) {
    _id, projectTitle, slug, projectCategory, location, shortDescription,
    "featuredImage": featuredImage { asset->, alt },
    completionDate, featuredProject, seo
  }
`;

export const FEATURED_PROJECTS_QUERY = `
  *[_type == "project" && featuredProject == true] | order(completionDate desc) {
    _id, projectTitle, slug, projectCategory, location, shortDescription,
    "featuredImage": featuredImage { asset->, alt },
    "beforeImage": beforeImage { asset->, alt },
    "afterImage": afterImage { asset->, alt },
    completionDate
  }
`;

export const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id, projectTitle, slug, projectCategory, location, shortDescription,
    problem, solution, servicesPerformed, completionDate,
    "featuredImage": featuredImage { asset->, alt },
    "beforeImage": beforeImage { asset->, alt },
    "afterImage": afterImage { asset->, alt },
    "galleryImages": galleryImages[] { asset->, alt },
    "relatedServices": relatedServices[]->{ serviceTitle, slug },
    seo
  }
`;

// ─── Service Queries ───────────────────────────────────────────
export const ALL_SERVICES_QUERY = `
  *[_type == "service"] | order(serviceTitle asc) {
    _id, serviceTitle, slug, serviceCategory,
    "heroImage": heroImage { asset->, alt },
    introCopy, seo
  }
`;

export const SERVICE_BY_SLUG_QUERY = `
  *[_type == "service" && slug.current == $slug][0] {
    _id, serviceTitle, slug, serviceCategory, introCopy,
    commonProblems, servicesIncluded, processSteps,
    "heroImage": heroImage { asset->, alt },
    "galleryImages": galleryImages[] { asset->, alt },
    faqs,
    "relatedProjects": relatedProjects[]->{ projectTitle, slug, "featuredImage": featuredImage { asset-> } },
    "relatedServices": relatedServices[]->{ serviceTitle, slug },
    seo
  }
`;

export const SERVICES_BY_CATEGORY_QUERY = `
  *[_type == "service"] | order(serviceTitle asc) {
    _id, serviceTitle, slug, serviceCategory,
    "heroImage": heroImage { asset->, alt }
  }
`;

// ─── Location Queries ──────────────────────────────────────────
export const ALL_LOCATIONS_QUERY = `
  *[_type == "location"] | order(locationName asc) {
    _id, locationName, slug,
    "heroImage": heroImage { asset->, alt },
    introCopy, seo
  }
`;

export const LOCATION_BY_SLUG_QUERY = `
  *[_type == "location" && slug.current == $slug][0] {
    _id, locationName, slug,
    "heroImage": heroImage { asset->, alt },
    introCopy, localContent,
    "servicesAvailable": servicesAvailable[]->{ serviceTitle, slug },
    "relatedProjects": relatedProjects[]->{ projectTitle, slug, "featuredImage": featuredImage { asset-> } },
    seo
  }
`;

// ─── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id, customerName, location, reviewText, rating,
    "relatedService": relatedService->{ serviceTitle, slug },
    "image": image { asset-> },
    featured
  }
`;

export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && featured == true] | order(_createdAt desc) [0...6] {
    _id, customerName, location, reviewText, rating,
    "relatedService": relatedService->{ serviceTitle, slug }
  }
`;

// ─── FAQs ──────────────────────────────────────────────────────
export const FAQS_QUERY = `
  *[_type == "faq"] | order(category asc) {
    _id, question, answer, category,
    "relatedService": relatedService->{ serviceTitle, slug }
  }
`;

// ─── Site Settings ─────────────────────────────────────────────
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    businessName, phoneNumber, email, serviceAreas, socialLinks,
    "logo": logo { asset-> },
    footerText, ctaText, defaultSeoTitle, defaultSeoDescription
  }
`;
