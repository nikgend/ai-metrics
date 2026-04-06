import { BaseService } from './baseService'
import { JiraProject } from '@/types/metrics'
import { config } from '@/lib/config'
import {
  mockJiraProjects,
  mockJiraTeamMetrics,
  mockJiraUserMetrics,
  mockJiraSprintMetrics,
  mockJiraReleaseMetrics,
} from '@/mockData'

export class JiraService extends BaseService {
  private baseUrl: string

  constructor() {
    super(config.jiraBaseUrl || 'https://api.atlassian.net')
    this.baseUrl = config.jiraBaseUrl || ''

    if (config.jiraUsername && config.jiraApiToken) {
      const token = Buffer.from(`${config.jiraUsername}:${config.jiraApiToken}`).toString('base64')
      this.client.defaults.headers['Authorization'] = `Basic ${token}`
    }
  }

  async getProjectMetrics(projectKey: string): Promise<JiraProject> {
    if (config.useMockData) {
      return mockJiraProjects[projectKey] || mockJiraProjects['PROJ-001']
    }

    // In production, this would call JIRA's actual API
    return this.handleRequest(
      Promise.resolve({
        projectId: 'PROJ-001',
        projectKey,
        projectName: `Project ${projectKey}`,
        description: 'Sample project metrics',
        leadName: 'Project Lead',
        issuesCount: 245,
        resolvedIssuesCount: 198,
        averageResolutionTime: 4.5,
      })
    )
  }

  async getTeamMetrics(teamFilter: string): Promise<any> {
    if (config.useMockData) {
      return mockJiraTeamMetrics(teamFilter)
    }

    // Team-based metrics
    return this.handleRequest(
      Promise.resolve({
        team: teamFilter,
        totalIssues: 524,
        openIssues: 89,
        closedIssues: 435,
        averageTimeToResolution: 3.2,
        velocityLastSprint: 45,
        velocityAverage: 42,
        qualityScore: 8.5,
        burndownTrend: 'positive',
      })
    )
  }

  async getUserMetrics(username: string): Promise<any> {
    if (config.useMockData) {
      return mockJiraUserMetrics(username)
    }

    // Individual user metrics from JIRA
    return this.handleRequest(
      Promise.resolve({
        username,
        assignedIssues: 12,
        completedIssues: 34,
        inProgressIssues: 5,
        averageTimeToComplete: 2.8,
        qualityScore: 9.1,
        codeReviewsCompleted: 28,
        codeReviewApprovalRate: 92,
      })
    )
  }

  async getSprintMetrics(sprintId: string): Promise<any> {
    if (config.useMockData) {
      return mockJiraSprintMetrics(sprintId)
    }

    // Sprint-specific metrics
    return this.handleRequest(
      Promise.resolve({
        sprintId,
        sprintName: `Sprint ${sprintId}`,
        completedPoints: 89,
        plannedPoints: 100,
        remainingPoints: 11,
        completionRate: 89,
        velocityScore: 89,
        issuesCount: 24,
        completedIssues: 21,
      })
    )
  }

  async getReleaseMetrics(releaseVersion: string): Promise<any> {
    if (config.useMockData) {
      return mockJiraReleaseMetrics(releaseVersion)
    }

    // Release-specific metrics
    return this.handleRequest(
      Promise.resolve({
        releaseVersion,
        releaseName: `Release ${releaseVersion}`,
        issuesIncluded: 156,
        issuesResolved: 156,
        defectRate: 2.5,
        qualityScore: 8.8,
        timeToMarket: 14,
        deploymentSuccess: true,
      })
    )
  }
}

export const jiraService = new JiraService()
