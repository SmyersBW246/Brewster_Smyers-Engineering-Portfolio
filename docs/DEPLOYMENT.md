# GitHub and publishing

## Current state

No GitHub repository or live public site has been created. This portable repository is ready for account-specific setup. The site is static and does not require a paid database or backend.

## Straightforward first setup

1. Review the local draft using README instructions. Confirm the resume, coursework statuses, email/LinkedIn and desired public contact details.
2. Sign into your own GitHub account securely. Use GitHub Desktop (https://desktop.github.com/) if you prefer a graphical app; no password or verification code belongs in a chat.
3. Create a **private** repository called `brewster-engineering-portfolio`. Add this source folder, including the dotfiles `.github/` and `.gitignore`. GitHub Desktop can create a repository from this folder and publish it privately. No public-repository creation is approved yet.
4. Keep `research/`, `docs/` and recovery files in the private source only. Astro deploys only `dist/`. Do not upload the full source archive as a public release.
5. Before launch, explicitly approve publication and decide whether to keep or remove the resume phone number. Private source does not necessarily mean private GitHub Pages hosting.
6. After approval, check your account supports Pages from private repositories. If it does not, discuss a hosting option or approve a public-source change separately. Do not change visibility silently.
7. In Settings → Pages, choose GitHub Actions as the source. The workflow remains inactive on pushes.
8. In Actions → Publish approved portfolio → Run workflow, check the publication approval box and run it. This publishes the `dist/` artifact. Subsequent updates also require a manual run.
9. Open the returned Pages URL and check the homepage, two nested pages, PDF and MATLAB downloads on phone and desktop. Record the real repository and live URL in PROJECT_MASTER.md and PROGRESS.md.

## Base paths

`astro.config.mjs` derives the Pages URL and repository prefix from GitHub Actions environment variables. A normal repository gets `/repository-name`; an `owner.github.io` repository gets `/`. Override using `SITE_URL` and `SITE_BASE` for a custom domain or nonstandard deployment. For a custom domain, set SITE_URL to the full HTTPS domain and SITE_BASE to `/`, and configure DNS/CNAME following official documentation.

Test a project prefix locally:

```bash
SITE_BASE=/portfolio npm run build
SITE_BASE=/portfolio QA_OUTPUT=docs/base-path-verification.json npm run verify
```

On PowerShell set `$env:SITE_BASE='/portfolio'`, then run the npm commands. Remove it with `Remove-Item Env:SITE_BASE` and rebuild for a local root preview.

## Verified implementation sources

- Astro official GitHub Pages guide: https://docs.astro.build/en/guides/deploy/github/ . Its official source was retrieved at https://raw.githubusercontent.com/withastro/docs/main/src/content/docs/en/guides/deploy/github.mdx on 2026-10-30; retained in research/source-register/astro-github.mdx.
- GitHub custom Pages workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages . Retrieved 2026-10-30.

The checked official Astro guide specifies checkout@v7, withastro/action@v6, deploy-pages@v5 and Node 24. The supplied workflow follows that guidance with a manual publication gate. No credentials or authentication tokens are included.
