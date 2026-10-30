# Architecture

Astro 7.4.4 static output; Node 24+; locked npm dependencies. A small custom remark plugin renders explicit math delimiters through KaTeX. Markdown processing uses Astro's supported unified processor. Fonts are served locally, with no external font API or runtime app integration.

`src/layouts/Base.astro` owns semantic header, mobile navigation, footer, metadata and noindex preference. `src/components/ProjectCard.astro` owns image/no-image project tiles. Dynamic static routes read typed content collections. All local UI URLs use the BASE_URL helper. Relative Markdown download links preserve the repository prefix.

There is no server backend, form service, analytics, account system or database. JavaScript supports only the menu, project filters and course search; all content/navigation is prerendered. Reduced-motion and print styles are included.

Only public/ content and rendered pages become dist/. Research and private progress records are source-only. The source repository must remain private until explicitly approved otherwise.

Source ZIP includes the compiled root-path build for local review and a Git bundle. node_modules, scratch QA harnesses, temporary browser screenshots, credentials and original private academic records are excluded.
