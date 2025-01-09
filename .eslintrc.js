module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
  },
  parser: '@babel/eslint-parser',
  parserOptions: {requireConfigFile: 'false'},
  babelOptions: {configFile: './.babelrc'},
};
