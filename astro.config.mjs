import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const site = process.env.SITE_URL || 'https://varshithulisi.github.io';
const base = process.env.BASE_PATH || '/';
if (process.env.REQUIRE_SITE_URL === 'true' && site === 'https://example.com') throw new Error('Set SITE_URL to the final public origin before deploying.');
export default defineConfig({ site, base, devToolbar: { enabled: false }, output: 'static', trailingSlash: 'always', integrations: [sitemap({filter: (page) => !page.endsWith('/404/') && !page.endsWith('/studio/')})] });
