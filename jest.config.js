module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    }
  },
  // setupFilesAfterEnv: [
  //   './tests/setup.js'
  // ],
  // transform: {
  //   'vee-validate/dist/rules': 'babel-jest',
  // },
  // transformIgnorePatterns: [
  //   '<rootDir>/node_modules/(?!vee-validate/dist/rules)',
  // ]
};
