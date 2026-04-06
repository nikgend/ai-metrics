// mockData/organizationMetrics.ts
import { OrganizationMetrics } from '@/types/metrics'

export const mockOrganizationMetrics: OrganizationMetrics = {
  organizationId: 'org-aava-001',
  organizationName: 'AAVA Organization',
  totalCopilotAcceptanceRate: 81.2,
  totalProductivityGain: 35.5,
  totalCostSavings: 245000,
  averageTimePerTask: 4.2,
  teamCount: 8,
  membersCount: 52,
  metrics: [
    {
      id: 'metric-org-001',
      timestamp: new Date('2024-04-01'),
      value: 81.2,
      unit: '%',
      category: 'efficiency',
    },
    {
      id: 'metric-org-002',
      timestamp: new Date('2024-04-02'),
      value: 35.5,
      unit: '%',
      category: 'productivity',
    },
    {
      id: 'metric-org-003',
      timestamp: new Date('2024-04-03'),
      value: 245000,
      unit: 'USD',
      category: 'cost-savings',
    },
  ],
  trend: 'up',
  trendPercentage: 5.8,
}

export const mockOrganizationMetricsHistory = [
  {
    month: 'January',
    acceptanceRate: 72.5,
    productivity: 26.8,
    costSavings: 180000,
  },
  {
    month: 'February',
    acceptanceRate: 75.8,
    productivity: 30.2,
    costSavings: 210000,
  },
  {
    month: 'March',
    acceptanceRate: 78.5,
    productivity: 33.1,
    costSavings: 227500,
  },
  {
    month: 'April',
    acceptanceRate: 81.2,
    productivity: 35.5,
    costSavings: 245000,
  },
]
