module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'json-format'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-hooks/exhaustive-deps': 'off'
      }
    }
  ],
  ignorePatterns: ['android', 'ios', 'tsconfig.json'],
  rules: {
    'comma-dangle': 'off',
    semi: 'off',
    'json/json-with-comments-files': 'off'
  }
}
