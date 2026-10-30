# Updating your portfolio

## Change project text

Open the matching Markdown file in `src/content/projects`. Text between the first pair of `---` lines is metadata: title, category, status, image, tools, facts and related course IDs. The remainder is the case study. Keep real results separate from assumptions and planned tests.

To add a project, copy an existing file, give it a new lowercase filename with hyphens, change the metadata and body, and add genuine images to `public/images/`. Its route is generated automatically. Set `featured: true` only for the four chosen homepage projects, and control order with the `order` field. Use `hero: ''` if no authentic image exists. Add PDF downloads to `public/documents/` and put the corresponding `/documents/name.pdf` in `document`.

## Add photographs

Use descriptive lowercase filenames, WebP/JPEG/PNG and meaningful alt text. Keep originals in a separate evidence archive; use optimized copies at approximately 1200–1800 pixels in the site. Every figure needs an accurate caption. Images display individually and open at full size. No slideshow is used. Do not present an AI concept as manufactured or tested work.

## Add or correct a course

Copy a file in `src/content/coursework`, updating its code, title, catalog source/year, enrollmentStatus, category, equations, sources and body. Catalog descriptions prove course scope, not attendance or completion. Confirm personal reflections separately. Worked examples use explicitly assumed inputs.

Equation-card `latex` uses one LaTeX backslash inside plain YAML scalars. Put variable definitions, units, assumptions and use cases in `note`. Body math uses `$...$` or `$$...$$`; KaTeX renders it at build time. Source notes must not contain private evidence links or internal editorial instructions.

Related project and course fields use filename IDs without `.md`. Both indexes update automatically. The coursework search filters code, title, category and summary.

## Update resume and contact

Replace `public/resume/Brewster_Smyers_Resume.pdf` with the approved new PDF and update `src/pages/resume.astro` so the readable summary matches. Set professional email and LinkedIn in `src/lib/urls.ts`. Review contact details inside the PDF as well as the page. The website uses direct email/LinkedIn links, with no unimplemented contact form.

## Verify and preserve

Run `npm run check:content`, `npm run build`, `npm run verify`. Review at desktop and phone widths. Commit the finished change, update PROGRESS.md and NEXT_ACTION.md, and preserve the updated source ZIP or private GitHub remote. The optional PDF brief generator requires Python, Pillow and ReportLab, but building the website does not.

`npm run verify` checks all generated HTML routes, local links and anchors, image alt text, CSS font assets, one H1 per page, metadata and math error markers. It does not validate engineering claims or live external sites.
