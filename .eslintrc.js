module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-props-no-spreading': [1, { exceptions: ['App', 'Component'] }],
    'react/prop-types': 0,
    'prettier/prettier': ['error'],
  },
  env: {
    browser: true,
  },
}
