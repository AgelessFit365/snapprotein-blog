import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://snapprotein.com',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => !page.includes('/test-blog/') && !page.includes('/test-post/')
  })],
});