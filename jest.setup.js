// jest.setup.js
/**
 * Jest Setup Configuration
 * Global test setup and teardown
 */

// Mock environment variables for tests
process.env.USE_MOCK_DATA = 'true'
process.env.GITHUB_API_TOKEN = 'test-token'
process.env.JIRA_BASE_URL = 'https://test.atlassian.net'
process.env.JIRA_API_TOKEN = 'test-token'
process.env.JIRA_USERNAME = 'test@example.com'

// Set test timeout (in milliseconds)
jest.setTimeout(10000)
