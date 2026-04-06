// __tests__/mockData.test.ts
/**
 * Mock Data Validation Tests
 * Ensures all mock data files have correct structure and values
 */

import {
  mockOrganizationMetrics,
  mockTeamsData,
  mockUsersData,
  mockFeaturesData,
  mockReleasesData,
  mockComparisonData,
  mockGithubCopilotMetrics,
  mockJiraProjects,
} from '@/mockData'

describe('Mock Data Validation', () => {
  describe('Organization Metrics', () => {
    it('should have valid acceptance rate', () => {
      expect(mockOrganizationMetrics.totalCopilotAcceptanceRate).toBeGreaterThan(0)
      expect(mockOrganizationMetrics.totalCopilotAcceptanceRate).toBeLessThanOrEqual(100)
    })

    it('should have positive cost savings', () => {
      expect(mockOrganizationMetrics.totalCostSavings).toBeGreaterThan(0)
    })

    it('should have team and member counts', () => {
      expect(mockOrganizationMetrics.teamCount).toBeGreaterThan(0)
      expect(mockOrganizationMetrics.membersCount).toBeGreaterThan(0)
    })
  })

  describe('Teams Data', () => {
    it('should have multiple teams', () => {
      expect(Object.keys(mockTeamsData).length).toBeGreaterThan(0)
    })

    it('each team should have valid structure', () => {
      Object.values(mockTeamsData).forEach((team) => {
        expect(team.teamId).toBeDefined()
        expect(team.teamName).toBeDefined()
        expect(team.copilotAcceptanceRate).toBeGreaterThanOrEqual(0)
        expect(team.copilotAcceptanceRate).toBeLessThanOrEqual(100)
        expect(team.membersCount).toBeGreaterThan(0)
      })
    })
  })

  describe('Users Data', () => {
    it('should have multiple users', () => {
      expect(Object.keys(mockUsersData).length).toBeGreaterThan(0)
    })

    it('each user should have valid structure', () => {
      Object.values(mockUsersData).forEach((user) => {
        expect(user.userId).toBeDefined()
        expect(user.userName).toBeDefined()
        expect(user.email).toBeDefined()
        expect(user.copilotAcceptanceRate).toBeGreaterThanOrEqual(0)
        expect(user.copilotAcceptanceRate).toBeLessThanOrEqual(100)
        expect(user.productivityScore).toBeGreaterThanOrEqual(0)
        expect(user.productivityScore).toBeLessThanOrEqual(10)
      })
    })
  })

  describe('Features Data', () => {
    it('should have multiple features', () => {
      expect(Object.keys(mockFeaturesData).length).toBeGreaterThan(0)
    })

    it('each feature should have valid structure', () => {
      Object.values(mockFeaturesData).forEach((feature) => {
        expect(feature.featureId).toBeDefined()
        expect(feature.featureName).toBeDefined()
        expect(feature.estimatedTime).toBeGreaterThan(0)
        expect(feature.developmentTime).toBeGreaterThanOrEqual(0)
        expect(['released', 'in-progress', 'testing', 'planning']).toContain(feature.status)
      })
    })
  })

  describe('Releases Data', () => {
    it('should have multiple releases', () => {
      expect(Object.keys(mockReleasesData).length).toBeGreaterThan(0)
    })

    it('each release should have valid structure', () => {
      Object.values(mockReleasesData).forEach((release) => {
        expect(release.releaseId).toBeDefined()
        expect(release.releaseName).toBeDefined()
        expect(release.releaseDate).toBeInstanceOf(Date)
        expect(release.featuresIncluded).toBeGreaterThanOrEqual(0)
        expect(release.bugsFixed).toBeGreaterThanOrEqual(0)
        expect(release.qualityScore).toBeGreaterThan(0)
        expect(release.qualityScore).toBeLessThanOrEqual(10)
      })
    })
  })

  describe('Comparison Data', () => {
    it('should have comparison periods', () => {
      expect(Object.keys(mockComparisonData).length).toBeGreaterThan(0)
    })

    it('each comparison should have valid metrics', () => {
      Object.values(mockComparisonData).forEach((comparison) => {
        expect(comparison.period1).toBeDefined()
        expect(comparison.period2).toBeDefined()
        expect(comparison.metrics.acceptanceRate).toBeDefined()
        expect(comparison.metrics.productivity).toBeDefined()
        expect(comparison.metrics.costSavings).toBeDefined()
      })
    })
  })

  describe('GitHub Metrics', () => {
    it('should have valid GitHub organization metrics', () => {
      expect(mockGithubCopilotMetrics.acceptanceRate).toBeGreaterThan(0)
      expect(mockGithubCopilotMetrics.acceptanceRate).toBeLessThanOrEqual(100)
      expect(mockGithubCopilotMetrics.acceptedSuggestions).toBeGreaterThan(0)
      expect(mockGithubCopilotMetrics.topContributors.length).toBeGreaterThan(0)
    })

    it('should have language breakdown', () => {
      const total = Object.values(mockGithubCopilotMetrics.languageBreakdown).reduce((a, b) => a + b, 0)
      expect(total).toBe(100)
    })
  })

  describe('JIRA Projects', () => {
    it('should have multiple JIRA projects', () => {
      expect(Object.keys(mockJiraProjects).length).toBeGreaterThan(0)
    })

    it('each project should have valid structure', () => {
      Object.values(mockJiraProjects).forEach((project) => {
        expect(project.projectId).toBeDefined()
        expect(project.projectKey).toBeDefined()
        expect(project.projectName).toBeDefined()
        expect(project.issuesCount).toBeGreaterThanOrEqual(0)
        expect(project.resolvedIssuesCount).toBeLessThanOrEqual(project.issuesCount)
        expect(project.averageResolutionTime).toBeGreaterThan(0)
      })
    })
  })
})
