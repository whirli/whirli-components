module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleFileExtensions: ['js', 'ts', 'scss', 'vue', 'scss?module'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^@whirli-components(.*)$': '<rootDir>/src/$1',
    '^@whirli-local(.*)\\?module': '<rootDir>/whirli/$1',
    '^@whirli-local(.*)$': '<rootDir>/whirli/$1',
    '^@composition$': 'vue',
  },
  setupFilesAfterEnv: ['./tests/setup.js'],
};
