import { defineType, defineField } from 'sanity';

export const serviceSchema = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'serviceTitle', title: 'Service Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'serviceTitle', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'serviceCategory',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          // Electrical Systems
          { title: 'Controller Repair', value: 'controller-repair' },
          { title: 'Motor Repair', value: 'motor-repair' },
          { title: 'Battery Upgrades', value: 'battery-upgrades' },
          { title: 'Charger Upgrades', value: 'charger-upgrades' },
          { title: 'Electrical Diagnostics', value: 'electrical-diagnostics' },
          { title: 'Throttle Repair', value: 'throttle-repair' },
          { title: 'Steering / Helm Repair', value: 'steering-helm-repair' },
          { title: 'Prop Replacement', value: 'prop-replacement' },
          // Restoration
          { title: 'Duffy Boat Restoration', value: 'duffy-restoration' },
          { title: 'Fiberglass Repair', value: 'fiberglass-repair' },
          { title: 'Gelcoat Repair', value: 'gelcoat-repair' },
          { title: 'Bottom Paint', value: 'bottom-paint' },
          { title: 'Buff & Wax', value: 'buff-wax' },
          { title: 'Wood Varnishing', value: 'wood-varnishing' },
          { title: 'Flooring', value: 'flooring' },
          // Upholstery & Exterior
          { title: 'Cushions & Upholstery', value: 'upholstery' },
          { title: 'Surrey Tops', value: 'surrey-tops' },
          { title: 'Isinglass Windows', value: 'isinglass-windows' },
          { title: 'Covers', value: 'covers' },
          { title: 'Interiors', value: 'interiors' },
          { title: 'Exteriors', value: 'exteriors' },
          // Maintenance & Transport
          { title: 'Harbor Care Program', value: 'harbor-care' },
          { title: 'Monthly Cleaning', value: 'monthly-cleaning' },
          { title: 'Boat Transport', value: 'boat-transport' },
          { title: 'Mobile Service', value: 'mobile-service' },
        ],
      },
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'object',
      fields: [
        { name: 'asset', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    }),
    defineField({ name: 'introCopy', title: 'Intro Copy', type: 'text', rows: 4 }),
    defineField({ name: 'commonProblems', title: 'Common Problems', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'servicesIncluded', title: 'Services Included', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'stepNumber', title: 'Step Number', type: 'number' },
          { name: 'title', title: 'Step Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
        ],
      }],
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'asset', type: 'image', options: { hotspot: true } },
          { name: 'alt', type: 'string' },
        ],
      }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text' },
        ],
      }],
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'seoTitle', title: 'SEO Title', type: 'string' },
        { name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 },
      ],
    }),
  ],
  preview: {
    select: { title: 'serviceTitle', media: 'heroImage.asset', subtitle: 'serviceCategory' },
  },
});
