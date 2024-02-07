/**
 * @type {import("prettier").Config &
 * import("@ianvs/prettier-plugin-sort-imports").PluginConfig &
 * import("prettier-plugin-tailwindcss").PluginOptions}
 */
module.exports = {
  arrowParens: "always",
  printWidth: 90,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,

  importOrder: ["<THIRD_PARTY_MODULES>", "", "^@/(.*)$", "", "^[./]"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",

  // plugin autoloading is not supported when using certain package managers, such as pnpm or Yarn PnP.
  // In this case you may need to add the plugin to your Prettier config explicitly.
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
    // require("prettier-plugin-tailwindcss"),
  ],

  overrides: [
    {
      files: "**/*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
