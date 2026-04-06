import { BaseService } from './baseService'
import { GithubCopilotMetrics } from '@/types/metrics'
import { config } from '@/lib/config'
import { mockGithubCopilotMetrics, mockRepositoryMetrics, mockGithubUserMetrics } from '@/mockData'

export class GitHubCopilotService extends BaseService {
  constructor() {
    super('https://api.github.com')
    if (config.githubApiToken) {
      this.client.defaults.headers['Authorization'] = `token ${config.githubApiToken}`
    }
  }

  async getRepositoryMetrics(owner: string, repo: string): Promise<GithubCopilotMetrics> {
    if (config.useMockData) {
      return mockRepositoryMetrics
    }

    // In production, this would call GitHub's actual Copilot metrics endpoint
    return this.handleRequest(
      Promise.resolve({
        repository: `${owner}/${repo}`,
        acceptanceRate: 82.5,
        suggestionsPerDay: 124,
        acceptedSuggestions: 3612,
        rejectedSuggestions: 757,
        languageBreakdown: {
          TypeScript: 35,
          Python: 28,
          JavaScript: 22,
          Java: 10,
          Other: 5,
        },
        topContributors: [
          { name: 'Alice Johnson', contributions: 1200, acceptanceRate: 85 },
          { name: 'Bob Smith', contributions: 950, acceptanceRate: 78 },
          { name: 'Carol Davis', contributions: 840, acceptanceRate: 88 },
        ],
      })
    )
  }

  async getOrganizationMetrics(org: string): Promise<GithubCopilotMetrics> {
    if (config.useMockData) {
      return mockGithubCopilotMetrics
    }

    // Aggregated metrics across organization
    return this.handleRequest(
      Promise.resolve({
        repository: `${org}/*`,
        acceptanceRate: 81.2,
        suggestionsPerDay: 2458,
        acceptedSuggestions: 72540,
        rejectedSuggestions: 16894,
        languageBreakdown: {
          TypeScript: 38,
          Python: 25,
          JavaScript: 20,
          Java: 12,
          Other: 5,
        },
        topContributors: [
          { name: 'Alice Johnson', contributions: 12000, acceptanceRate: 85 },
          { name: 'Bob Smith', contributions: 9500, acceptanceRate: 78 },
          { name: 'Carol Davis', contributions: 8400, acceptanceRate: 88 },
          { name: 'David Wilson', contributions: 7200, acceptanceRate: 82 },
          { name: 'Emma Brown', contributions: 6800, acceptanceRate: 79 },
        ],
      })
    )
  }

  async getUserMetrics(username: string): Promise<any> {
    if (config.useMockData) {
      return mockGithubUserMetrics(username)
    }

    // Individual user metrics
    return this.handleRequest(
      Promise.resolve({
        username,
        totalSuggestions: 850,
        acceptedSuggestions: 721,
        rejectedSuggestions: 129,
        acceptanceRate: 84.8,
        hoursUsed: 124,
        timeEstimatedSaved: 245,
        topLanguages: ['TypeScript', 'Python', 'JavaScript'],
      })
    )
  }
}

export const githubCopilotService = new GitHubCopilotService()
