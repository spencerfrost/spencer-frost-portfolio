// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vue from 'eslint-plugin-vue'

export default withNuxt(
  {
    plugins: { vue },
    rules: {
      // Enforce multi-line if more than 3 attributes
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: 1,
      }],
    },
  }
)
