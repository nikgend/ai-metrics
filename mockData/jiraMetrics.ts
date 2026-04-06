// mockData/jiraMetrics.ts
import { JiraProject, JiraIssue } from '@/types/metrics'

export const mockJiraProjects: Record<string, JiraProject> = {
  'PROJ-001': {
    projectId: 'PROJ-001',
    projectKey: 'PROJ',
    projectName: 'AI Metrics Platform',
    description: 'ROI measurement platform for GitHub Copilot & JIRA',
    leadName: 'Alice Johnson',
    issuesCount: 245,
    resolvedIssuesCount: 198,
    averageResolutionTime: 4.5,
  },
  'DATA-001': {
    projectId: 'DATA-001',
    projectKey: 'DATA',
    projectName: 'Data Pipeline',
    description: 'Data processing and analytics pipeline',
    leadName: 'Carol Davis',
    issuesCount: 156,
    resolvedIssuesCount: 142,
    averageResolutionTime: 3.8,
  },
  'INFRA-001': {
    projectId: 'INFRA-001',
    projectKey: 'INFRA',
    projectName: 'Infrastructure',
    description: 'Cloud infrastructure and DevOps',
    leadName: 'David Wilson',
    issuesCount: 89,
    resolvedIssuesCount: 78,
    averageResolutionTime: 3.2,
  },
}

export const mockJiraIssues: JiraIssue[] = [
  {
    issueId: 'PROJ-001',
    issueKey: 'PROJ-001',
    summary: 'Implement organization dashboard',
    status: 'Done',
    assignee: 'Alice Johnson',
    created: new Date('2024-02-15'),
    updated: new Date('2024-03-10'),
    estimatedTime: 40,
    actualTime: 35,
    resolvedTime: 24,
    priority: 'high',
  },
  {
    issueId: 'PROJ-002',
    issueKey: 'PROJ-002',
    summary: 'Add team metrics API endpoint',
    status: 'Done',
    assignee: 'Bob Smith',
    created: new Date('2024-02-20'),
    updated: new Date('2024-03-05'),
    estimatedTime: 24,
    actualTime: 18,
    resolvedTime: 14,
    priority: 'high',
  },
  {
    issueId: 'PROJ-003',
    issueKey: 'PROJ-003',
    summary: 'Create comparison dashboard',
    status: 'In Progress',
    assignee: 'Carol Davis',
    created: new Date('2024-03-15'),
    updated: new Date('2024-04-02'),
    estimatedTime: 32,
    actualTime: 18,
    resolvedTime: 0,
    priority: 'medium',
  },
  {
    issueId: 'PROJ-004',
    issueKey: 'PROJ-004',
    summary: 'Optimize database queries',
    status: 'In Progress',
    assignee: 'David Wilson',
    created: new Date('2024-03-20'),
    updated: new Date('2024-04-01'),
    estimatedTime: 16,
    actualTime: 12,
    resolvedTime: 0,
    priority: 'medium',
  },
  {
    issueId: 'PROJ-005',
    issueKey: 'PROJ-005',
    summary: 'Fix authentication bug',
    status: 'Done',
    assignee: 'Emma Brown',
    created: new Date('2024-03-25'),
    updated: new Date('2024-03-28'),
    estimatedTime: 8,
    actualTime: 5,
    resolvedTime: 3,
    priority: 'highest',
  },
]

export const mockJiraTeamMetrics = (teamName: string) => ({
  team: teamName,
  totalIssues: 524,
  openIssues: 89,
  closedIssues: 435,
  averageTimeToResolution: 3.2,
  velocityLastSprint: 45,
  velocityAverage: 42,
  qualityScore: 8.5,
  burndownTrend: 'positive' as const,
})

export const mockJiraUserMetrics = (username: string) => ({
  username,
  assignedIssues: 12,
  completedIssues: 34,
  inProgressIssues: 5,
  averageTimeToComplete: 2.8,
  qualityScore: 9.1,
  codeReviewsCompleted: 28,
  codeReviewApprovalRate: 92,
})

export const mockJiraSprintMetrics = (sprintId: string) => ({
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

export const mockJiraReleaseMetrics = (releaseVersion: string) => ({
  releaseVersion,
  releaseName: `Release ${releaseVersion}`,
  issuesIncluded: 156,
  issuesResolved: 156,
  defectRate: 2.5,
  qualityScore: 8.8,
  timeToMarket: 14,
  deploymentSuccess: true,
})

export const mockJiraSprintTrendData = [
  { sprint: 'Sprint 1', velocity: 35, issues: 28, completion: 82 },
  { sprint: 'Sprint 2', velocity: 38, issues: 30, completion: 85 },
  { sprint: 'Sprint 3', velocity: 42, issues: 33, completion: 88 },
  { sprint: 'Sprint 4', velocity: 45, issues: 35, completion: 91 },
]

export const mockJiraIssueStats = [
  { status: 'Done', count: 198 },
  { status: 'In Progress', count: 32 },
  { status: 'To Do', count: 15 },
]
