import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import checkFile from "eslint-plugin-check-file";
import nodePlugin from "eslint-plugin-n";
import prettierConfig from "eslint-plugin-prettier/recommended";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,
  {
    // optional: add this processor to files which not processed by other processors but still require linting
    files: ["**/*.yaml", "**/*.webp"],
    processor: "check-file/eslint-processor-check-file",
  },
  {
    plugins: {
      "check-file": checkFile,
      n: nodePlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      semi: ["error"],
      quotes: ["error", "double"],
      "n/no-process-env": ["error"],
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**": "NEXT_JS_APP_ROUTER_CASE",
        },
      ],
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
