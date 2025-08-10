import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        test: "readonly",
        expect: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];
