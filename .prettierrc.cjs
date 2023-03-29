module.exports = {
  arrowParens: 'always',
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,

  // plugin autoloading is not supported when using certain package managers, such as pnpm or Yarn PnP.
  // In this case you may need to add the plugin to your Prettier config explicitly.
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
