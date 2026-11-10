import { defineConfig } from 'astro/config';
import math from './scripts/remark-math.mjs';
import { unified } from '@astrojs/markdown-remark';

const repository = process.env.GITHUB_REPOSITORY || '';
const owner = process.env.GITHUB_REPOSITORY_OWNER || repository.split('/')[0];
const name = repository.split('/')[1];
// A normal repository is served under /<repository>; an <owner>.github.io repository at the root.
// GitHub names are case-insensitive (scripts/verify-build.mjs applies the same rule).
const base = process.env.SITE_BASE || (name && name.toLowerCase() !== `${owner}.github.io`.toLowerCase() ? `/${name}` : '/');

export default defineConfig({
  output: 'static',
  // Keep layout styles with their HTML during GitHub Pages cache/deployment changes.
  build: { inlineStylesheets: 'always' },
  markdown: { processor: unified({ remarkPlugins: [math] }) },
  site: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : undefined),
  base,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  server: { host: true, port: Number(process.env.PORT || 4321) },
  vite: { server: { host: true, allowedHosts: true } },
});
