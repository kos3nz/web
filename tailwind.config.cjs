const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: [
        // 'Helvetica Neue', // macOS English
        // 'Arial', // window English
        // 'Hiragino Sans', // macOS Japanese
        // 'Hiragino Kaku Gothic ProN', // macOS Japanese
        // 'BIZ UDPGothic', // window Japanese
        // 'Meiryo', // window Japanese
        ...defaultTheme.fontFamily.sans, // sans-serif for android
      ],
    },

    extend: {
      boxShadow: {
        highlight: 'inset 0 2px 0 0 rgb(255 255 255 / 5%)',
      },
    },
  },
  plugins: [],
}
