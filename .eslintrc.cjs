/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    // 'prettier'
  ],
  // Requires typescript parser here to parse typescript in Astro <script> tag
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true, // Find the nearest tsconfig.json file from each source file being linted in your editor.
    tsconfigRootDir: __dirname,
  },
  rules: {
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "[iI]gnored" },
    ],
  },

  overrides: [
    // Configuration for Javascript/Typescript
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      extends: [
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:solid/typescript",
        "plugin:jsx-a11y/recommended",
      ],

      rules: {
        semi: "off",
        // Allow indentation for decorators
        // indent: ['error', 2, { ignoredNodes: ['PropertyDefinition'] }],
        indent: "off",
        // Suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        // Allow jsx syntax in jsx and tsx files
        "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
        "react/no-unknown-property": "off",
        "solid/no-react-specific-props": "off",
        "solid/no-destructure": "off",
      },

      settings: {
        "import/resolver": {
          typescript: true,
        },
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "react/prop-types": "off",
        "solid/prefer-for": "off",
        "@typescript-eslint/ban-types": [
          "error",
          {
            extendDefaults: true,
            types: {
              "{}": false,
            },
          },
        ],
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },

    // Configuration for Astro
    // This configuration is the same as {extends: ["plugin:astro/recommended"]} would do
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Enable eslint-plugin-astro
      plugins: ["astro"],
      env: {
        // Enables global variables available in Astro files
        node: true,
        es2020: true,
        "astro/astro": true,
      },
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: false,
        extraFileExtensions: [".astro"],
        // The script of Astro components uses ESM.
        sourceType: "module",
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        "astro/no-conflict-set-directives": "error",
        "astro/no-deprecated-astro-canonicalurl": "error",
        "astro/no-deprecated-astro-fetchcontent": "error",
        "astro/no-deprecated-astro-resolve": "error",
        "astro/no-unused-define-vars-in-style": "error",
        "astro/valid-compile": "error",
        react: "off",
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        // 'prettier/prettier': 'off',
      },
    },

    {
      files: ["*.md", "*.mdx"],
      extends: ["plugin:mdx/recommended"],
      rules: {
        "no-unused-vars": "off",
        "react/jsx-no-undef": "off",
      },
      settings: {
        // optional, if you want to lint code blocks at the same time
        // 'mdx/code-blocks': true,
        // optional, if you want to disable language mapper, set it to `false`
        // if you want to override the default language mapper inside, you can provide your own
        // "mdx/language-mapper": {},
      },
    },

    {
      files: ["*.jsx", "*.tsx", "*.mdx", "*.astro"],
      extends: ["plugin:tailwindcss/recommended"],
      rules: {
        "tailwindcss/no-custom-classname": "off",
        // "tailwindcss/enforces-shorthand": "off",
      },
      settings: {
        tailwindcss: {
          callees: ["classnames", "clsx", "cx", "cn", "cva", "tv"],
        },
      },
    },
  ],

  ignorePatterns: ["node_modules", "public"],
}
