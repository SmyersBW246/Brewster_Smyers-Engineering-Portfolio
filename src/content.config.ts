import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const figure = z.object({ src: z.string(), alt: z.string(), caption: z.string() });
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), shortTitle: z.string(), summary: z.string(),
    status: z.string(), category: z.string(), order: z.number(), featured: z.boolean(),
    hero: z.string(), heroAlt: z.string(), heroCaption: z.string(), concept: z.boolean(),
    role: z.string(), period: z.string(), tools: z.array(z.string()),
    facts: z.array(z.object({ value: z.string(), label: z.string() })),
    figures: z.array(figure), document: z.string().optional(),
    courses: z.array(z.string()),
  }),
});
const coursework = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/coursework' }),
  schema: z.object({
    code: z.string(), title: z.string(), summary: z.string(), category: z.string(),
    officialTitle: z.string().optional(), enrollmentStatus: z.string().optional(),
    evidenceStatus: z.string().optional(), contentStatus: z.string().optional(),
    technicalReference: z.string().optional(),
    catalog: z.string(), catalogYear: z.string(), order: z.number(), documented: z.boolean(),
    connection: z.string(), relatedProjects: z.array(z.string()),
    topics: z.array(z.string()),
    equations: z.array(z.object({ title: z.string(), latex: z.string(), note: z.string() })),
    figures: z.array(figure),
    sources: z.array(z.object({ title: z.string(), url: z.string() })),
  }),
});
export const collections = { projects, coursework };
