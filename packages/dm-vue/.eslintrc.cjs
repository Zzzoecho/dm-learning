/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/max-attributes-per-line': ['warn', {
      singleline: 3,
      multiline: { max: 1 }
    }]
  }
}
