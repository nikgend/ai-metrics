// jest.config.js
/**
 * Jest Configuration for Unit Tests
 * Configured to work with Next.js and TypeScript
 */

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
  collectCoverageFrom: [
    'app/**/*.ts',
    'app/**/*.tsx',
    'services/**/*.ts',
    'lib/**/*.ts',
    'mockData/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
