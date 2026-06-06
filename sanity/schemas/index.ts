import { postSchema } from './post.schema';
import { projectSchema } from './project.schema';
import { serviceSchema } from './service.schema';
import {
  locationSchema,
  testimonialSchema,
  faqSchema,
  authorSchema,
  siteSettingsSchema,
} from './other.schemas';

export const schemaTypes = [
  postSchema,
  projectSchema,
  serviceSchema,
  locationSchema,
  testimonialSchema,
  faqSchema,
  authorSchema,
  siteSettingsSchema,
];
