import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://nemutas.github.io',
  base: 'astro-prettier-test',
  vite: {
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
    },
  },
})
