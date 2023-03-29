module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-prettier',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-high-performance-animation',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    'prettier/prettier': [true, { severity: 'warning' }],
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-low-performance-animation-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        browsers: ['> 1%', 'Last 2 versions'],
        ignore: ['rem', 'flexbox', 'border-radius'],
        ignorePartialSupport: true,
        severity: 'warning',
      },
    ],
    // For use with Tailwindcss
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.astro'],
      rules: {
        'prettier/prettier': null,
      },
    },
  ],
}
