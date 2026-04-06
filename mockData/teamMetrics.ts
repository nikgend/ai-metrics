// mockData/teamMetrics.ts
import { TeamMetrics } from '@/types/metrics'

export const mockTeamsData: Record<string, TeamMetrics> = {
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
    metrics: [
      {
        id: 'metric-team-1-001',
        timestamp: new Date('2024-04-01'),
        value: 84.2,
        unit: '%',
        category: 'efficiency',
      },
    ],
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
    metrics: [
      {
        id: 'metric-team-2-001',
        timestamp: new Date('2024-04-01'),
        value: 79.5,
        unit: '%',
        category: 'efficiency',
      },
    ],
    trend: 'stable',
    trendPercentage: 1.2,
  },
  'team-3': {
    teamId: 'team-3',
    teamName: 'DevOps Team',
    copilotAcceptanceRate: 86.1,
    productivityGain: 40.2,
    costSavings: 72000,
    averageTimePerTask: 3.2,
    membersCount: 4,
    activeTickets: 12,
    completedTickets: 98,
    metrics: [
      {
        id: 'metric-team-3-001',
        timestamp: new Date('2024-04-01'),
        value: 86.1,
        unit: '%',
        category: 'efficiency',
      },
    ],
    trend: 'up',
    trendPercentage: 6.5,
  },
  'team-4': {
    teamId: 'team-4',
    teamName: 'QA Team',
    copilotAcceptanceRate: 75.3,
    productivityGain: 28.5,
    costSavings: 52000,
    averageTimePerTask: 5.2,
    membersCount: 5,
    activeTickets: 34,
    completedTickets: 178,
    metrics: [
      {
        id: 'metric-team-4-001',
        timestamp: new Date('2024-04-01'),
        value: 75.3,
        unit: '%',
        category: 'efficiency',
      },
    ],
    trend: 'down',
    trendPercentage: -2.1,
  },
  'team-5': {
    teamId: 'team-5',
    teamName: 'Data Team',
    copilotAcceptanceRate: 82.8,
    productivityGain: 36.4,
    costSavings: 68000,
    averageTimePerTask: 4.1,
    membersCount: 5,
    activeTickets: 15,
    completedTickets: 125,
    metrics: [
      {
        id: 'metric-team-5-001',
        timestamp: new Date('2024-04-01'),
        value: 82.8,
        unit: '%',
        category: 'efficiency',
      },
    ],
    trend: 'up',
    trendPercentage: 7.3,
  },
}

export const mockTeamWeeklyData = (teamId: string) => [
  { name: 'Week 1', value: 80, productivity: 34 },
  { name: 'Week 2', value: 82, productivity: 35 },
  { name: 'Week 3', value: 83, productivity: 36 },
  { name: 'Week 4', value: 84.2, productivity: 38.5 },
]

export const mockTeamMembers = (teamId: string) => [
  {
    memberId: 'user-1',
    name: 'Alice Johnson',
    tasks: 34,
    acceptance: '85%',
    quality: '9.2',
  },
  {
    memberId: 'user-2',
    name: 'Bob Smith',
    tasks: 28,
    acceptance: '78%',
    quality: '8.5',
  },
  {
    memberId: 'user-3',
    name: 'Carol Davis',
    tasks: 31,
    acceptance: '88%',
    quality: '9.4',
  },
  {
    memberId: 'user-4',
    name: 'David Wilson',
    tasks: 26,
    acceptance: '82%',
    quality: '8.8',
  },
]
