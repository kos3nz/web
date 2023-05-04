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

      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1,h2,h3,h4': {
              position: 'relative',
              'scroll-margin-top': defaultTheme.spacing[24],
            },
            thead: {
              borderBottomColor: theme('colors.slate.400'),
            },
            blockquote: {
              color: theme('colors.slate.500'),
            },
            'blockquote code': {
              color: theme('colors.slate.300'),
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            pre: {
              'padding-top': defaultTheme.spacing[4],
              'padding-bottom': defaultTheme.spacing[4],
            },
            code: {
              'background-color': 'rgb(148 163 184 / 20%)',
              color: theme('colors.slate.300'),
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
