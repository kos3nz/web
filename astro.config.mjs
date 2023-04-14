import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import preact from '@astrojs/preact'
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), preact(), solidJs()],
})
