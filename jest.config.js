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
      statements: 94,
      branches: 80,
      functions: 88,
      lines: 94
    }
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
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
