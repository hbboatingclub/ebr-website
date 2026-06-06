import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'ebr-studio',
  title: 'EBR Electric Boat Repair — Content Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('EBR Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem().title('Services').child(S.documentTypeList('service')),
            S.listItem().title('Projects').child(S.documentTypeList('project')),
            S.listItem().title('Blog Posts').child(S.documentTypeList('post')),
            S.divider(),
            S.listItem().title('Locations').child(S.documentTypeList('location')),
            S.listItem().title('Testimonials').child(S.documentTypeList('testimonial')),
            S.listItem().title('FAQs').child(S.documentTypeList('faq')),
            S.listItem().title('Authors').child(S.documentTypeList('author')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
