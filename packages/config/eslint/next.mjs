// @ts-check
import react from "eslint-plugin-react"
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser"
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
  
});

const patchedConfig = fixupConfigRules([...compat.extends("next/core-web-vitals")]);

const config = [
  ...patchedConfig,
  
  // Add more flat configs here
  {
    ignores: [".next/*"],
    plugins: {
      react,
    }
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },

  },
];

export default config;