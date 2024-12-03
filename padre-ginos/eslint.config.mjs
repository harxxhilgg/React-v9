import js from "eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.config[]} */
export default [
  js.cofigs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      gloabls: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      },
    },
  },
  prettier,
]