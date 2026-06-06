import { defineType, defineField } from 'sanity';

export const projectSchema = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'projectTitle', title: 'Project Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'projectTitle', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectCategory',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          { title: 'Controller Rebuilds', value: 'controller-rebuilds' },
          { title: 'Battery Upgrades', value: 'battery-upgrades' },
          { title: 'Charger Upgrades', value: 'charger-upgrades' },
          { title: 'Motor Repair', value: 'motor-repair' },
          { title: 'Full Restorations', value: 'full-restorations' },
          { title: 'Bottom Paint', value: 'bottom-paint' },
          { title: 'Fiberglass', value: 'fiberglass' },
          { title: 'Upholstery', value: 'upholstery' },
          { title: 'Surrey Tops', value: 'surrey-tops' },
          { title: 'Maintenance', value: 'maintenance' },
          { title: 'Boat Transport', value: 'boat-transport' },
        ],
      },
    }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'problem', title: 'The Problem', type: 'text', rows: 4 }),
    defineField({ name: 'solution', title: 'The Solution', type: 'text', rows: 4 }),
    defineField({ name: 'servicesPerformed', title: 'Services Performed', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'object',
      fields: [
        { name: 'asset', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'object',
      fields: [
        { name: 'asset', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'object',
      fields: [
        { name: 'asset', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
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
    defineField({ name: 'completionDate', title: 'Completion Date', type: 'date' }),
    defineField({ name: 'featuredProject', title: 'Featured on Homepage?', type: 'boolean', initialValue: false }),
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
    select: { title: 'projectTitle', media: 'featuredImage.asset', subtitle: 'projectCategory' },
  },
});
