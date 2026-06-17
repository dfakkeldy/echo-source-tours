// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  site: 'https://dfakkeldy.github.io',
  base: '/echo-source-tours',
  integrations: [
    starlight({
      title: 'Echo Source Tours',
      description: 'Learn iOS/macOS development by touring the Echo codebase.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/dfakkeldy/Echo' },
      ],
      sidebar: [
        { label: 'Start here', items: [{ label: 'Welcome', slug: '' }] },
        { label: 'Tours', items: [{ autogenerate: { directory: 'tours' } }] },
        { label: 'Concepts', items: [{ autogenerate: { directory: 'concepts' } }] },
      ],
      expressiveCode: { themes: ['github-dark', 'github-light'] },
      plugins: [starlightLinksValidator()],
    }),
  ],
});
