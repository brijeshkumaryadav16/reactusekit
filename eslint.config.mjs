import { FlatCompat } from "@eslint/eslintrc"
import eslintPluginPrettier from "eslint-plugin-prettier"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("prettier"),
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
]

export default eslintConfig
