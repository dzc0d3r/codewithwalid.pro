/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  semi: false,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  proseWrap: "always", // printWidth line breaks in md/mdx
  overrides: [
    {
      files: "*.css",
      options: {
        // You can define additional rules here
        printWidth: 100, // Custom print width for CSS
        singleQuote: false, // Use double quotes for CSS consistency
        tabWidth: 2, // Customize tab width for CSS
      },
    },
  ],
};

module.exports = config;