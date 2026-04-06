// Metrics Types
export interface MetricsData {
  id: string
  timestamp: Date
  value: number
  unit: string
  category: 'efficiency' | 'productivity' | 'quality' | 'cost-savings'
}

export interface OrganizationMetrics {
  organizationId: string
  organizationName: string
  totalCopilotAcceptanceRate: number
  totalProductivityGain: number
  totalCostSavings: number
  averageTimePerTask: number
  teamCount: number
  membersCount: number
  metrics: MetricsData[]
  trend: 'up' | 'down' | 'stable'
  trendPercentage: number
}

export interface TeamMetrics {
  teamId: string
  teamName: string
  copilotAcceptanceRate: number
  productivityGain: number
  costSavings: number
  averageTimePerTask: number
  membersCount: number
  activeTickets: number
  completedTickets: number
  metrics: MetricsData[]
  trend: 'up' | 'down' | 'stable'
  trendPercentage: number
}

export interface FeatureMetrics {
  featureId: string
  featureName: string
  developmentTime: number
  estimatedTime: number
  copilotContribution: number
  qualityScore: number
  defectRate: number
  timeToMarket: number
  status: 'planning' | 'in-progress' | 'testing' | 'released'
  metrics: MetricsData[]
}

export interface UserMetrics {
  userId: string
  userName: string
  email: string
  copilotUsageHours: number
  copilotAcceptanceRate: number
  tasksCompleted: number
  productivityScore: number
  codeQualityScore: number
  timePerTask: number
  metrics: MetricsData[]
  trend: 'up' | 'down' | 'stable'
  trendPercentage: number
}

export interface ReleaseMetrics {
  releaseId: string
  releaseName: string
  releaseDate: Date
  featuresIncluded: number
  bugsFixed: number
  developmentDaysUsed: number
  copilotContribution: number
  qualityScore: number
  deploymentSuccess: boolean
  timeToMarket: number
}

export interface ComparisonMetrics {
  period1: string
  period2: string
  organizationName: string
  metrics: {
    acceptanceRate: { period1: number; period2: number }
    productivity: { period1: number; period2: number }
    costSavings: { period1: number; period2: number }
    bugRate: { period1: number; period2: number }
  }
}

// GitHub Copilot Types
export interface GithubCopilotMetrics {
  repository: string
  acceptanceRate: number
  suggestionsPerDay: number
  acceptedSuggestions: number
  rejectedSuggestions: number
  languageBreakdown: Record<string, number>
  topContributors: Array<{
    name: string
    contributions: number
    acceptanceRate: number
  }>
}

// JIRA Types
export interface JiraIssue {
  issueId: string
  issueKey: string
  summary: string
  status: string
  assignee: string
  created: Date
  updated: Date
  estimatedTime: number
  actualTime: number
  resolvedTime: number
  priority: 'highest' | 'high' | 'medium' | 'low' | 'lowest'
}

export interface JiraProject {
  projectId: string
  projectKey: string
  projectName: string
  description: string
  leadName: string
  issuesCount: number
  resolvedIssuesCount: number
  averageResolutionTime: number
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  timestamp: Date
}
