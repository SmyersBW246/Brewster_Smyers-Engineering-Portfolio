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
    // Optional 2 x 2 collage shown in place of the single hero image (tile and project page).
    heroGallery: z.array(z.object({ src: z.string(), alt: z.string() })).max(4).optional(),
    // Hidden projects stay in the source but are not built or listed on the site.
    hidden: z.boolean().optional(),
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
    // featured: full page with hands-on work. core: one row on the index. foundation: one line.
    tier: z.enum(['featured', 'core', 'foundation']),
    // Shown only when confirmed, e.g. "In progress · Fall 2026".
    term: z.string().optional(),
    // One line of skills for the index.
    skills: z.string(),
    // Featured pages show at most three of their equations, picked by title.
    keyEquations: z.array(z.string()).max(3).optional(),
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
