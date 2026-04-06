# Testing Guide

This guide explains how to run unit tests using the mock data infrastructure.

## Overview

The project includes two main test suites that validate the metrics service and mock data:

1. **metricsService.test.ts** - Tests for the MetricsService facade and its integration with mock data
2. **mockData.test.ts** - Validation tests for mock data structure and values

## Setup

### 1. Install Testing Dependencies

```bash
npm install
```

This installs:
- `jest` - Test framework
- `ts-jest` - TypeScript support for Jest
- `@types/jest` - TypeScript types for Jest
- `@testing-library/react` - React testing utilities (optional, for component tests)

### 2. Verify Configuration

Check that these files exist in the project root:
- `jest.config.js` - Jest configuration
- `jest.setup.js` - Global test setup

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode (auto-rerun on file changes)
```bash
npm run test:watch
```

### Run tests with coverage report
```bash
npm run test:coverage
```

This generates a coverage report showing:
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage

## Test Structure

### MetricsService Tests (`__tests__/metricsService.test.ts`)

Tests the main service methods:

**Organization Metrics**
- ✅ Returns organization metrics
- ✅ Validates organization structure
- ✅ Verifies trend data

**Team Metrics**
- ✅ Returns team metrics for valid team ID
- ✅ Validates all required team properties
- ✅ Checks metric ranges (0-100 for percentages)

**User Metrics**
- ✅ Returns user metrics for valid user ID
- ✅ Validates all required user properties
- ✅ Checks productivity score ranges (0-10)

**Feature Metrics**
- ✅ Returns feature metrics for valid feature ID
- ✅ Validates all required feature properties
- ✅ Verifies development time vs estimated time

**Release Metrics**
- ✅ Returns release metrics for valid release ID
- ✅ Validates all required release properties
- ✅ Verifies release dates are valid

**List Methods**
- ✅ getTeamsList() returns array of teams
- ✅ getUsersList() returns array of users
- ✅ getFeaturesList() returns array of features
- ✅ getReleasesList() returns array of releases

### Mock Data Validation Tests (`__tests__/mockData.test.ts`)

Validates mock data integrity:

**Organization Metrics**
- ✅ Acceptance rate is valid (0-100)
- ✅ Cost savings are positive
- ✅ Team and member counts are valid

**Teams Data**
- ✅ Multiple teams exist
- ✅ Each team has valid structure
- ✅ Metrics are within valid ranges

**Users Data**
- ✅ Multiple users exist
- ✅ Each user has complete data
- ✅ Productivity scores are 0-10

**Features Data**
- ✅ Multiple features exist
- ✅ Each feature has required properties
- ✅ Development time ≤ estimated time
- ✅ Status is one of: released, in-progress, testing, planning

**Releases Data**
- ✅ Multiple releases exist
- ✅ Each release has valid structure
- ✅ Release dates are valid (not in future)
- ✅ Quality scores are 0-10

**Comparison Data**
- ✅ Comparison periods exist
- ✅ Metrics structure is valid
- ✅ All comparisons have required fields

**GitHub Metrics**
- ✅ Acceptance rate is valid
- ✅ Suggestions count is positive
- ✅ Language breakdown totals to 100%

**JIRA Projects**
- ✅ Multiple projects exist
- ✅ Each project has valid structure
- ✅ Resolved issues ≤ total issues
- ✅ Resolution time is positive

## Using Mock Data in Tests

### Importing Mock Data

```typescript
import {
  mockOrganizationMetrics,
  mockTeamsData,
  mockUsersData,
  mockFeaturesData,
  mockReleasesData,
} from '@/mockData'

// Use in tests
describe('My Test Suite', () => {
  it('should work with mock data', () => {
    const org = mockOrganizationMetrics
    expect(org.totalCopilotAcceptanceRate).toBeGreaterThan(0)
  })
})
```

### Available Mock Data Exports

See `mockData/index.ts` for all 50+ available exports:

- Organization: `mockOrganizationMetrics`, `mockOrganizationMetricsHistory`
- Teams: `mockTeamsData`, `mockTeamWeeklyData`, `mockTeamMembers`
- Users: `mockUsersData`, `mockUserWeeklyData`, `mockUserLanguages`, `mockAllUsers`
- Features: `mockFeaturesData`, `mockFeatureDevelopmentTimeline`, `mockAllFeatures`
- Releases: `mockReleasesData`, `mockReleaseTimeline`, `mockAllReleases`
- Comparison: `mockComparisonData`, `mockComparisonChartData`, `mockComparisonTableData`
- GitHub: `mockGithubCopilotMetrics`, `mockRepositoryMetrics`, `mockGithubUserMetrics`, `mockGithubTrendData`
- JIRA: `mockJiraProjects`, `mockJiraIssues`, `mockJiraSprintMetrics`, `mockJiraReleaseMetrics`

## Test Environment

Tests automatically set:
- `USE_MOCK_DATA=true` - Ensures tests use mock data
- `GITHUB_API_TOKEN=test-token` - Test credentials
- `JIRA_BASE_URL=https://test.atlassian.net` - Test JIRA URL
- `JIRA_API_TOKEN=test-token` - Test credentials
- Jest timeout: 10 seconds per test

See `jest.setup.js` to modify these values.

## Writing New Tests

### Example: Testing a Team Metrics Calculation

```typescript
import { metricsService } from '@/services'
import { mockTeamsData } from '@/mockData'

describe('Team Metrics Calculations', () => {
  it('should calculate average productivity for team', async () => {
    const teamId = 'team-1'
    const team = mockTeamsData[teamId]
    const metrics = await metricsService.getTeamMetrics(teamId)

    // Verify calculations
    expect(metrics.productivity).toBeLessThanOrEqual(team.membersCount * 10)
  })
})
```

### Example: Testing a Comparison

```typescript
import { metricsService } from '@/services'
import { mockComparisonData } from '@/mockData'

describe('Comparison Metrics', () => {
  it('should show positive trend', async () => {
    const comparison = mockComparisonData['Q1-Q2']
    const metrics = await metricsService.getComparisonMetrics('Q1-Q2')

    expect(metrics.acceptanceRateChange).toBeGreaterThan(0)
  })
})
```

## Continuous Integration

To run tests in CI/CD pipeline:

```bash
# Run tests once (no watch mode)
npm test -- --no-coverage

# Run with coverage report
npm run test:coverage

# Run specific test file
npm test -- metricsService.test.ts

# Run tests matching pattern
npm test -- --testNamePattern="Organization"
```

## Troubleshooting

### Tests not running
- Verify `jest` is installed: `npm install jest`
- Check `jest.config.js` exists in project root
- Ensure `__tests__` folder exists

### Import errors
- Verify path alias `@/` is configured in `tsconfig.json`
- Check mock data files are in `mockData/` folder
- Ensure `package.json` includes test scripts

### Configuration error
- Verify `jest.setup.js` exists and references correct environment variables
- Check `USE_MOCK_DATA=true` is set
- Ensure all mock data files export correctly

### Type errors
- Run `npm install @types/jest` to install Jest types
- Verify `tsconfig.json` includes `jest` in types array
- Check TypeScript version supports test files

## Coverage Goals

Recommended coverage targets:
- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

Run `npm run test:coverage` to see current coverage.

## Best Practices

1. **Test one thing per test** - Focus on single aspect
2. **Use descriptive test names** - Explain what's being tested
3. **Arrange-Act-Assert pattern** - Setup → Execute → Verify
4. **Mock external dependencies** - Already done with mock data
5. **Test edge cases** - Boundary conditions, invalid inputs
6. **Keep tests independent** - No test should depend on another

## Next Steps

1. Run tests: `npm run test:coverage`
2. Review coverage report in `coverage/` folder
3. Write additional tests for uncovered code paths
4. Integrate tests into CI/CD pipeline
5. Maintain >80% code coverage

For more Jest documentation, see [Jest Docs](https://jestjs.io/docs/getting-started)
