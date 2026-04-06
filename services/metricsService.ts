import {
  OrganizationMetrics,
  TeamMetrics,
  FeatureMetrics,
  UserMetrics,
  ReleaseMetrics,
  ComparisonMetrics,
} from '@/types/metrics'
import { githubCopilotService } from './githubCopilotService'
import { jiraService } from './jiraService'
import { config } from '@/lib/config'
import {
  mockOrganizationMetrics,
  mockTeamsData,
  mockFeaturesData,
  mockUsersData,
  mockReleasesData,
  mockComparisonData,
  mockTeamMembers,
  mockAllUsers,
  mockAllFeatures,
  mockAllReleases,
} from '@/mockData'

export class MetricsService {
  async getOrganizationMetrics(organizationId: string): Promise<OrganizationMetrics> {
    if (config.useMockData) {
      return mockOrganizationMetrics
    }

    // Combine data from GitHub Copilot and JIRA
    const [githubMetrics] = await Promise.all([
      githubCopilotService.getOrganizationMetrics(organizationId),
    ])

    return {
      organizationId,
      organizationName: 'AAVA Organization',
      totalCopilotAcceptanceRate: githubMetrics.acceptanceRate,
      totalProductivityGain: 35.5,
      totalCostSavings: 245000,
      averageTimePerTask: 4.2,
      teamCount: 8,
      membersCount: 52,
      metrics: [
        {
          id: '1',
          timestamp: new Date(),
          value: githubMetrics.acceptanceRate,
          unit: '%',
          category: 'efficiency',
        },
      ],
      trend: 'up',
      trendPercentage: 5.8,
    }
  }

  async getTeamMetrics(teamId: string): Promise<TeamMetrics> {
    if (config.useMockData) {
      return mockTeamsData[teamId] || Object.values(mockTeamsData)[0]
    }

    // Team-level metrics
    const teams: Record<string, TeamMetrics> = {
      'team-1': {
        teamId: 'team-1',
        teamName: 'Backend Team',
        copilotAcceptanceRate: 84.2,
        productivityGain: 38.5,
        costSavings: 65000,
        averageTimePerTask: 3.8,
        membersCount: 8,
        activeTickets: 24,
        completedTickets: 156,
        metrics: [],
        trend: 'up',
        trendPercentage: 8.2,
      },
      'team-2': {
        teamId: 'team-2',
        teamName: 'Frontend Team',
        copilotAcceptanceRate: 79.5,
        productivityGain: 32.1,
        costSavings: 58000,
        averageTimePerTask: 4.5,
        membersCount: 6,
        activeTickets: 18,
        completedTickets: 142,
        metrics: [],
        trend: 'stable',
        trendPercentage: 1.2,
      },
    }

    return teams[teamId] || teams['team-1']
  }

  async getFeatureMetrics(featureId: string): Promise<FeatureMetrics> {
    if (config.useMockData) {
      return mockFeaturesData[featureId] || Object.values(mockFeaturesData)[0]
    }

    const features: Record<string, FeatureMetrics> = {
      'feat-1': {
        featureId: 'feat-1',
        featureName: 'User Authentication v2',
        developmentTime: 45,
        estimatedTime: 60,
        copilotContribution: 35,
        qualityScore: 9.1,
        defectRate: 0.8,
        timeToMarket: 45,
        status: 'released',
        metrics: [],
      },
      'feat-2': {
        featureId: 'feat-2',
        featureName: 'Analytics Dashboard',
        developmentTime: 52,
        estimatedTime: 80,
        copilotContribution: 42,
        qualityScore: 8.7,
        defectRate: 1.2,
        timeToMarket: 52,
        status: 'in-progress',
        metrics: [],
      },
    }

    return features[featureId] || features['feat-1']
  }

  async getUserMetrics(userId: string): Promise<UserMetrics> {
    if (config.useMockData) {
      return mockUsersData[userId] || Object.values(mockUsersData)[0]
    }

    const users: Record<string, UserMetrics> = {
      'user-1': {
        userId: 'user-1',
        userName: 'Alice Johnson',
        email: 'alice@example.com',
        copilotUsageHours: 124,
        copilotAcceptanceRate: 85,
        tasksCompleted: 34,
        productivityScore: 8.9,
        codeQualityScore: 9.2,
        timePerTask: 3.6,
        metrics: [],
        trend: 'up',
        trendPercentage: 6.5,
      },
      'user-2': {
        userId: 'user-2',
        userName: 'Bob Smith',
        email: 'bob@example.com',
        copilotUsageHours: 98,
        copilotAcceptanceRate: 78,
        tasksCompleted: 28,
        productivityScore: 8.1,
        codeQualityScore: 8.5,
        timePerTask: 4.2,
        metrics: [],
        trend: 'up',
        trendPercentage: 3.2,
      },
    }

    return users[userId] || users['user-1']
  }

  async getReleaseMetrics(releaseId: string): Promise<ReleaseMetrics> {
    if (config.useMockData) {
      return mockReleasesData[releaseId] || Object.values(mockReleasesData)[0]
    }

    const releases: Record<string, ReleaseMetrics> = {
      'v1.0.0': {
        releaseId: 'v1.0.0',
        releaseName: 'v1.0.0 - Initial Release',
        releaseDate: new Date('2024-01-15'),
        featuresIncluded: 12,
        bugsFixed: 8,
        developmentDaysUsed: 90,
        copilotContribution: 38,
        qualityScore: 8.9,
        deploymentSuccess: true,
        timeToMarket: 90,
      },
      'v1.1.0': {
        releaseId: 'v1.1.0',
        releaseName: 'v1.1.0 - Feature Release',
        releaseDate: new Date('2024-02-28'),
        featuresIncluded: 8,
        bugsFixed: 15,
        developmentDaysUsed: 45,
        copilotContribution: 42,
        qualityScore: 8.7,
        deploymentSuccess: true,
        timeToMarket: 45,
      },
    }

    return releases[releaseId] || releases['v1.0.0']
  }

  async getComparisonMetrics(period1: string, period2: string): Promise<ComparisonMetrics> {
    if (config.useMockData) {
      return mockComparisonData['Q1-Q2'] // Return default comparison
    }

    return {
      period1,
      period2,
      organizationName: 'AAVA Organization',
      metrics: {
        acceptanceRate: { period1: 75.2, period2: 81.2 },
        productivity: { period1: 28.5, period2: 35.5 },
        costSavings: { period1: 180000, period2: 245000 },
        bugRate: { period1: 3.2, period2: 1.8 },
      },
    }
  }

  // Helper methods to get lists
  getTeamsList() {
    return Object.values(mockTeamsData).map((team) => ({
      id: team.teamId,
      name: team.teamName,
      members: team.membersCount,
    }))
  }

  getTeamMembers(teamId: string) {
    return mockTeamMembers(teamId)
  }

  getUsersList() {
    return mockAllUsers
  }

  getFeaturesList() {
    return mockAllFeatures
  }

  getReleasesList() {
    return mockAllReleases
  }
}

export const metricsService = new MetricsService()
