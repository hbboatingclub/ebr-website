import { defineType, defineField } from 'sanity';

// ─── Location Schema ───────────────────────────────────────────
export const locationSchema = defineType({
  name: 'location',
  title: 'Location Page',
  type: 'document',
  fields: [
    defineField({ name: 'locationName', title: 'Location Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'locationName', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'object',
      fields: [
        { name: 'asset', type: 'image', options: { hotspot: true } },
        { name: 'alt', type: 'string' },
      ],
    }),
    defineField({ name: 'introCopy', title: 'Intro Copy', type: 'text', rows: 4 }),
    defineField({ name: 'localContent', title: 'Local Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'servicesAvailable',
      title: 'Services Available',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'seoTitle', type: 'string' },
        { name: 'seoDescription', type: 'text', rows: 2 },
      ],
    }),
  ],
  preview: { select: { title: 'locationName' } },
});

// ─── Testimonial Schema ────────────────────────────────────────
export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'customerName', title: 'Customer Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'reviewText', title: 'Review', type: 'text', rows: 5, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
    defineField({ name: 'relatedService', title: 'Related Service', type: 'reference', to: [{ type: 'service' }] }),
    defineField({ name: 'image', title: 'Customer Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'featured', title: 'Featured?', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'customerName', subtitle: 'location' },
  },
});

// ─── FAQ Schema ────────────────────────────────────────────────
export const faqSchema = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'relatedService', title: 'Related Service', type: 'reference', to: [{ type: 'service' }] }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Electrical Systems', value: 'electrical' },
          { title: 'Battery & Charging', value: 'battery' },
          { title: 'Restoration', value: 'restoration' },
          { title: 'Maintenance', value: 'maintenance' },
          { title: 'Pricing & Booking', value: 'pricing' },
          { title: 'General', value: 'general' },
        ],
      },
    }),
  ],
  preview: { select: { title: 'question', subtitle: 'category' } },
});

// ─── Author Schema ─────────────────────────────────────────────
export const authorSchema = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'name', media: 'image' } },
});

// ─── Site Settings Schema ──────────────────────────────────────
export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'businessName', title: 'Business Name', type: 'string', initialValue: 'EBR Electric Boat Repair' }),
    defineField({ name: 'phoneNumber', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'serviceAreas', title: 'Service Areas', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'google', title: 'Google Business URL', type: 'url' },
      ],
    }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'footerText', title: 'Footer Text', type: 'text', rows: 2 }),
    defineField({ name: 'ctaText', title: 'Default CTA Text', type: 'string', initialValue: 'Request Service' }),
    defineField({ name: 'defaultSeoTitle', title: 'Default SEO Title', type: 'string' }),
    defineField({ name: 'defaultSeoDescription', title: 'Default SEO Description', type: 'text', rows: 2 }),
  ],
});
