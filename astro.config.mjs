import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-ink.vercel.app',
  vite: {
    resolve: {
      alias: {
        '$': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    svelte(),
  ],
});
