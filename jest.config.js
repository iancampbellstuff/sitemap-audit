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
      branches: 45,
      functions: 70,
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
