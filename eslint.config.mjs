// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(
  // Your custom configs here
  eslintPluginPrettierRecommended,
  {
    rules: {
      'vue/no-multiple-template-root': 'off',
      'no-console': 'warn',
      'prettier/prettier': 'error', // usually auto-included by eslint-plugin-prettier
      'vue/multi-word-component-names': 'off',
      'vue/attribute-hyphenation': 'off',
    },
  }
)
