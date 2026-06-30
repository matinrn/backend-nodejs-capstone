module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    eqeqeq: ['error', 'always']
  }
}