import { defineType, defineField } from 'sanity';

export const postSchema = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Electrical Systems', value: 'electrical-systems' },
          { title: 'Battery & Charging', value: 'battery-charging' },
          { title: 'Duffy Troubleshooting', value: 'duffy-troubleshooting' },
          { title: 'Restoration', value: 'restoration' },
          { title: 'Maintenance', value: 'maintenance' },
          { title: 'Buying Guides', value: 'buying-guides' },
        ],
      },
    }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'object',
      fields: [
        { name: 'asset', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    }),
    defineField({ name: 'body', title: 'Body Content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'publishedDate', title: 'Published Date', type: 'datetime' }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] }),
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
    select: { title: 'title', media: 'featuredImage.asset' },
  },
});
