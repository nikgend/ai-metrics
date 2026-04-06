// mockData/githubMetrics.ts
import { GithubCopilotMetrics } from '@/types/metrics'

export const mockGithubCopilotMetrics: GithubCopilotMetrics = {
  repository: 'aava/*',
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
}

export const mockRepositoryMetrics: GithubCopilotMetrics = {
  repository: 'aava/ai-app',
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
}

export const mockGithubUserMetrics = (username: string) => ({
  username,
  totalSuggestions: 850,
  acceptedSuggestions: 721,
  rejectedSuggestions: 129,
  acceptanceRate: 84.8,
  hoursUsed: 124,
  timeEstimatedSaved: 245,
  topLanguages: ['TypeScript', 'Python', 'JavaScript'],
})

export const mockGithubLanguageStats = [
  { name: 'TypeScript', value: 38 },
  { name: 'Python', value: 25 },
  { name: 'JavaScript', value: 20 },
  { name: 'Java', value: 12 },
  { name: 'Other', value: 5 },
]

export const mockGithubTrendData = [
  {
    month: 'January',
    suggestions: 2000,
    acceptanceRate: 76,
    contributors: 35,
  },
  {
    month: 'February',
    suggestions: 2150,
    acceptanceRate: 77,
    contributors: 38,
  },
  {
    month: 'March',
    suggestions: 2300,
    acceptanceRate: 79,
    contributors: 40,
  },
  {
    month: 'April',
    suggestions: 2458,
    acceptanceRate: 81,
    contributors: 42,
  },
]
