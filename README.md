# Brewster Smyers · Engineering portfolio

An Astro static website, recovered and extended from the earlier portfolio work. The source is connected to GitHub at https://github.com/SmyersBW246/Brewster_Smyers-Engineering-Portfolio and is published to GitHub Pages only when the manual workflow is run (see `docs/DEPLOYMENT.md`).

## Refinement checkpoint v2

Homepage and About are refined, six personal photographs integrated, bicycle mount removed. See docs/REFINEMENT_QA.md for changes and validation, NEXT_ACTION.md for continuation.

## Open the finished draft

Install Node.js 24 or later from https://nodejs.org/ if needed. The ZIP includes a finished `dist/` build, so no dependency installation is needed to review it.

On Windows, double-click `START_PREVIEW.cmd`. Otherwise run `node scripts/serve-build.mjs` from this folder. Open http://127.0.0.1:4321. Keep the terminal open while reviewing. The server listens only on your own computer. Opening `dist/index.html` directly as a file does not resolve website links correctly.

## Edit and rebuild

```bash
npm ci
npm run dev
```

Open the local address printed by Astro. After edits:

```bash
npm run check:content
npm run build
npm run verify
```

Project copy lives in `src/content/projects/`; subject notes live in `src/content/coursework/`. Content collections create pages automatically. Real media and approved downloads belong in `public/`. Research, progress records and handoff notes stay outside the public build.

## Included

- 22 pages: Home, project index, ten case studies, tiered coursework index with three featured course pages, AI + Learning, Brewster's Desk, About, Resume, Contact and a 404 page.
- Homepage built on three themes (build, ask why, lead) with six project tiles: chair, coaster mold, bronze rook, pipe bracket, underwater vehicle + water tunnel and biplane.
- 110 governing-equation cards plus equations in the teaching prose, rendered with KaTeX and accessible MathML.
- Three concise project PDF briefs, the supplied MATLAB archive and supplied resume PDF.
- Recovery records, source references, content/asset inventories, QA records and maintenance/deployment guides.
- Git history in `checkpoints/portfolio-history.bundle` in the packaged ZIP.

## Read before publishing

See `docs/DEPLOYMENT.md` and `docs/REVIEW_QUESTIONS.md`. Course notes are not a completed-course transcript. Many personal course statuses still require confirmation. The supplied resume is dated September 27 and contains a phone number and email address. The site currently includes `noindex,nofollow`; this is an indexing preference, not access control.

Publication requires explicit approval. The workflow is manual-only, requires its approval checkbox, and never runs on a source push. Do not make a repository public to get free hosting without approval. GitHub Pages availability for private repositories depends on the account plan.

## Resume in a new Work session

Upload this ZIP and say: “Continue from NEXT_ACTION.md. Preserve finished work, validate the current build, and finish the next unresolved milestone. Do not publish or push without my approval.”

Use `WORK_RECOVERY_PROMPT.md` for a fuller restart. Recovered git history can optionally be restored with `git clone checkpoints/portfolio-history.bundle portfolio-restored`. The provided working tree includes the ready-made `dist/` preview; it is intentionally not tracked in Git.
