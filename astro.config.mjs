import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://galihfajar.github.io',
  base: '/salt/',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
