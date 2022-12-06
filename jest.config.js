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
      statements: 80,
      branches: 40,
      functions: 70,
      lines: 75
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
