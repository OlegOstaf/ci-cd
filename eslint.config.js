import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest, 
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-console": "warn",
      "eqeqeq": "error",
      "curly": "error",
    },
  },
];
