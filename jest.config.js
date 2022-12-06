/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    'index.ts'
  ],
  modulePaths: [
    '<rootDir>/src/'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 47.91,
      functions: 76,
      lines: 80.7,
      statements: 82.11
    }
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json'
      },
    ],
    '^.+\\.xml?$': "<rootDir>/fileTransformer.js"
  },
  verbose: true
};
