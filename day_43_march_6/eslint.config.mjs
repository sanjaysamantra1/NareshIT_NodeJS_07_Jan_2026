import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-var': 2,   // (0 = off, 1 = warn, 2 = error)
      'eqeqeq': 2,
      'prefer-template': 2,
      'no-multi-spaces': 2,
      'max-params': ["error", 3]
    }

  }
]);
