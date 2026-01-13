// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://agustindiazcano.com',
  vite: {
    build: {
      sourcemap: false
    },
    // @ts-ignore
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});