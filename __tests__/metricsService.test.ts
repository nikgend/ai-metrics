// __tests__/metricsService.test.ts
/**
 * Example unit tests for Metrics Service
 * Uses mock data from mockData/ folder
 */

import { metricsService } from '@/services'
import {
  mockOrganizationMetrics,
  mockTeamsData,
  mockUsersData,
  mockFeaturesData,
  mockReleasesData,
} from '@/mockData'

describe('MetricsService', () => {
  describe('Organization Metrics', () => {
    it('should return organization metrics', async () => {
      const metrics = await metricsService.getOrganizationMetrics('org-aava-001')
      
      expect(metrics).toBeDefined()
      expect(metrics.organizationName).toBe('AAVA Organization')
      expect(metrics.totalCopilotAcceptanceRate).toBeGreaterThan(0)
    })

    it('should have valid organization structure', () => {
      expect(mockOrganizationMetrics).toHaveProperty('organizationId')
      expect(mockOrganizationMetrics).toHaveProperty('totalCopilotAcceptanceRate')
      expect(mockOrganizationMetrics).toHaveProperty('totalProductivityGain')
      expect(mockOrganizationMetrics).toHaveProperty('totalCostSavings')
    })

    it('should have trend data', () => {
      expect(mockOrganizationMetrics.trend).toMatch(/up|down|stable/)
      expect(mockOrganizationMetrics.trendPercentage).toBeGreaterThan(0)
    })
  })

  describe('Team Metrics', () => {
    it('should return team metrics for valid team ID', async () => {
      const teamId = 'team-1'
      const metrics = await metricsService.getTeamMetrics(teamId)
      
      expect(metrics).toBeDefined()
      expect(metrics.teamId).toBe(teamId)
    })

    it('should have all required team properties', () => {
      const team = mockTeamsData['team-1']
      
      expect(team).toHaveProperty('teamId')
      expect(team).toHaveProperty('teamName')
      expect(team).toHaveProperty('copilotAcceptanceRate')
      expect(team).toHaveProperty('productivityGain')
      expect(team).toHaveProperty('membersCount')
    })

    it('should have valid metrics ranges', () => {
      const team = mockTeamsData['team-1']
      
      expect(team.copilotAcceptanceRate).toBeGreaterThanOrEqual(0)
      expect(team.copilotAcceptanceRate).toBeLessThanOrEqual(100)
      expect(team.membersCount).toBeGreaterThan(0)
    })
  })

  describe('User Metrics', () => {
    it('should return user metrics for valid user ID', async () => {
      const userId = 'user-1'
      const metrics = await metricsService.getUserMetrics(userId)
      
      expect(metrics).toBeDefined()
      expect(metrics.userId).toBe(userId)
      expect(metrics.userName).toBe('Alice Johnson')
    })

    it('should have all required user properties', () => {
      const user = mockUsersData['user-1']
      
      expect(user).toHaveProperty('userId')
      expect(user).toHaveProperty('userName')
      expect(user).toHaveProperty('copilotAcceptanceRate')
      expect(user).toHaveProperty('tasksCompleted')
      expect(user).toHaveProperty('productivityScore')
    })

    it('should have valid productivity scores', () => {
      const user = mockUsersData['user-1']
      
      expect(user.productivityScore).toBeGreaterThanOrEqual(0)
      expect(user.productivityScore).toBeLessThanOrEqual(10)
      expect(user.codeQualityScore).toBeGreaterThanOrEqual(0)
      expect(user.codeQualityScore).toBeLessThanOrEqual(10)
    })
  })

  describe('Feature Metrics', () => {
    it('should return feature metrics for valid feature ID', async () => {
      const featureId = 'feat-1'
      const metrics = await metricsService.getFeatureMetrics(featureId)
      
      expect(metrics).toBeDefined()
      expect(metrics.featureId).toBe(featureId)
    })

    it('should have all required feature properties', () => {
      const feature = mockFeaturesData['feat-1']
      
      expect(feature).toHaveProperty('featureId')
      expect(feature).toHaveProperty('featureName')
      expect(feature).toHaveProperty('developmentTime')
      expect(feature).toHaveProperty('estimatedTime')
      expect(feature).toHaveProperty('qualityScore')
    })

    it('should have valid development times', () => {
      const feature = mockFeaturesData['feat-1']
      
      expect(feature.developmentTime).toBeLessThanOrEqual(feature.estimatedTime)
      expect(feature.developmentTime).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Release Metrics', () => {
    it('should return release metrics for valid release ID', async () => {
      const releaseId = 'v1.0.0'
      const metrics = await metricsService.getReleaseMetrics(releaseId)
      
      expect(metrics).toBeDefined()
      expect(metrics.releaseId).toBe(releaseId)
    })

    it('should have all required release properties', () => {
      const release = mockReleasesData['v1.0.0']
      
      expect(release).toHaveProperty('releaseId')
      expect(release).toHaveProperty('releaseName')
      expect(release).toHaveProperty('featuresIncluded')
      expect(release).toHaveProperty('bugsFixed')
      expect(release).toHaveProperty('qualityScore')
    })

    it('should have valid release dates', () => {
      const release = mockReleasesData['v1.0.0']
      
      expect(release.releaseDate).toBeInstanceOf(Date)
      expect(release.releaseDate.getTime()).toBeLessThanOrEqual(Date.now())
    })
  })

  describe('List Methods', () => {
    it('should return teams list', () => {
      const teams = metricsService.getTeamsList()
      
      expect(Array.isArray(teams)).toBe(true)
      expect(teams.length).toBeGreaterThan(0)
      expect(teams[0]).toHaveProperty('id')
      expect(teams[0]).toHaveProperty('name')
    })

    it('should return users list', () => {
      const users = metricsService.getUsersList()
      
      expect(Array.isArray(users)).toBe(true)
      expect(users.length).toBeGreaterThan(0)
      expect(users[0]).toHaveProperty('name')
      expect(users[0]).toHaveProperty('team')
    })

    it('should return features list', () => {
      const features = metricsService.getFeaturesList()
      
      expect(Array.isArray(features)).toBe(true)
      expect(features.length).toBeGreaterThan(0)
      expect(features[0]).toHaveProperty('name')
      expect(features[0]).toHaveProperty('status')
    })

    it('should return releases list', () => {
      const releases = metricsService.getReleasesList()
      
      expect(Array.isArray(releases)).toBe(true)
      expect(releases.length).toBeGreaterThan(0)
      expect(releases[0]).toHaveProperty('name')
      expect(releases[0]).toHaveProperty('devDays')
    })
  })
})
