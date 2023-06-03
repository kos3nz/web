const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

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
              color: colors.slate[200],
              position: 'relative',
              'scroll-margin-top': defaultTheme.spacing[24],
              margin: '40px 0 28px',
              width: 'fit-content',
            },
            'h3 code': {
              'font-weight': 'bold',
            },
            p: {
              color: colors.slate[400],
            },
            strong: {
              color: colors.slate[200],
            },
            li: {
              color: colors.slate[400],
            },
            a: {
              color: colors.slate[200],
              'text-decoration-color': colors.cyan[600],
              'text-underline-offset': '2px',
            },
            thead: {
              'border-bottom-color': `${colors.slate[800]} !important`,
            },
            th: {
              color: colors.slate[300],
            },
            tr: {
              'border-bottom-color': `${colors.slate[800]} !important`,
            },
            td: {
              color: colors.slate[400],
            },
            blockquote: {
              color: colors.slate[400],
              'border-color': colors.cyan[500],
              'border-left-width': '2px',
              'border-radius': '0.375rem',
              padding: defaultTheme.spacing[4],
              'background-color': 'rgb(30 41 59 / 50%)',
            },
            'blockquote p': {
              margin: 0,
              color: colors.slate[400],
              'font-style': 'normal',
              'font-weight': 'normal',
            },
            'blockquote code': {
              color: colors.slate[200],
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            pre: {
              'margin-top': '0 !important',
              'padding-top': defaultTheme.spacing[4],
              'padding-bottom': defaultTheme.spacing[4],
              'padding-left': 0,
              'padding-right': 0,
            },
            code: {
              'border-radius': '0.375rem !important',
              'background-color': 'rgb(148 163 184 / 20%)',
              color: theme('colors.slate.300'),
              'font-weight': 'normal',
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
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.bg-grid': {
          'background-size': '20px 20px',
          'background-position': '10px 10px',
          'background-image':
            'linear-gradient(to right, rgb(148 163 184 / 8%) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 8%) 1px, transparent 1px)',
          'image-rendering': 'pixelated',
          // 'mask-image':
          //   'linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)',
          // '-webkit-mask-image':
          //   'linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)',
        },
        '.bg-dot': {
          'background-size': '20px 20px',
          'background-position': '8px 8px',
          'background-image':
            'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 8%) 1px, transparent 0)',
        },
      })
    }),
  ],

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
