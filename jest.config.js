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
      statements: 75,
      branches: 55,
      functions: 60,
      lines: 75
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
