import react from "eslint-plugin-react"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
 
export default [

  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
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
    ignores: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-unescaped-entities': ['error'],
     },
    // ... others are omitted for brevity
  },

];