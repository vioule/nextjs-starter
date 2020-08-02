module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-props-no-spreading': { exceptions: ['App', 'Component'] },
    'prettier/prettier': ['error'],
  },
  env: {
    browser: true,
  },
}
