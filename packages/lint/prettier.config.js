/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef  {import("@trivago/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
export default {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '<BUILT_IN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^#(.*)/(.*)$',
    '^@(.*)/(.*)$',
    '^~/',
    '^[../]',
    '^[./]',
  ],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tailwindStylesheet: './src/index.css',
};
