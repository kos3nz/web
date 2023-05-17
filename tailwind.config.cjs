const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: [
        'Helvetica Neue', // macOS English
        'Arial', // window English
        'Hiragino Sans', // macOS Japanese
        'Hiragino Kaku Gothic ProN', // macOS Japanese
        'BIZ UDPGothic', // window Japanese
        'Meiryo', // window Japanese
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
              margin: '40px 0 28px',
              width: 'fit-content',
            },
            thead: {
              borderBottomColor: theme('colors.slate.400'),
            },
            a: {
              color: colors.slate[100],
              'text-decoration-color': colors.cyan[600],
              'text-underline-offset': '2px',
            },
            blockquote: {
              color: colors.slate[500],
              'border-color': colors.cyan[500],
              'border-left-width': '2px',
              'border-radius': '0.375rem',
              padding: defaultTheme.spacing[4],
              'background-color': 'rgb(30 41 59 / 50%)',
            },
            'blockquote p': {
              margin: 0,
              color: theme('colors.slate.300'),
              'font-style': 'normal',
            },
            'blockquote code': {
              color: theme('colors.slate.300'),
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            pre: {
              'padding-top': defaultTheme.spacing[4],
              'padding-bottom': defaultTheme.spacing[4],
              'padding-left': 0,
              'padding-right': 0,
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
