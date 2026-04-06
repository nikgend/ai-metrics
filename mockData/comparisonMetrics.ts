// mockData/comparisonMetrics.ts
import { ComparisonMetrics } from '@/types/metrics'

export const mockComparisonData: Record<string, ComparisonMetrics> = {
  'Q1-Q2': {
    period1: 'Q1-2024',
    period2: 'Q2-2024',
    organizationName: 'AAVA Organization',
    metrics: {
      acceptanceRate: { period1: 75.2, period2: 81.2 },
      productivity: { period1: 28.5, period2: 35.5 },
      costSavings: { period1: 180000, period2: 245000 },
      bugRate: { period1: 3.2, period2: 1.8 },
    },
  },
  'Q2-Q3': {
    period1: 'Q2-2024',
    period2: 'Q3-2024',
    organizationName: 'AAVA Organization',
    metrics: {
      acceptanceRate: { period1: 81.2, period2: 85.8 },
      productivity: { period1: 35.5, period2: 42.1 },
      costSavings: { period1: 245000, period2: 310000 },
      bugRate: { period1: 1.8, period2: 1.2 },
    },
  },
  'Q3-Q4': {
    period1: 'Q3-2024',
    period2: 'Q4-2024',
    organizationName: 'AAVA Organization',
    metrics: {
      acceptanceRate: { period1: 85.8, period2: 87.5 },
      productivity: { period1: 42.1, period2: 45.8 },
      costSavings: { period1: 310000, period2: 385000 },
      bugRate: { period1: 1.2, period2: 0.9 },
    },
  },
}

export const mockComparisonChartData = (period1: string, period2: string) => [
  {
    name: 'Acceptance Rate',
    [period1]: 75.2,
    [period2]: 81.2,
  },
  {
    name: 'Productivity Gain',
    [period1]: 28.5,
    [period2]: 35.5,
  },
  {
    name: 'Cost Savings (K)',
    [period1]: 180,
    [period2]: 245,
  },
  {
    name: 'Bug Rate',
    [period1]: 3.2,
    [period2]: 1.8,
  },
]

export const mockComparisonTableData = (period1: string, period2: string) => [
  {
    metric: 'Copilot Acceptance Rate',
    [period1]: '75.2%',
    [period2]: '81.2%',
    change: '+8.0%',
    trend: 'up' as const,
  },
  {
    metric: 'Productivity Gain',
    [period1]: '28.5%',
    [period2]: '35.5%',
    change: '+24.6%',
    trend: 'up' as const,
  },
  {
    metric: 'Cost Savings',
    [period1]: '$180K',
    [period2]: '$245K',
    change: '+36.1%',
    trend: 'up' as const,
  },
  {
    metric: 'Bug Rate',
    [period1]: '3.2%',
    [period2]: '1.8%',
    change: '-43.8%',
    trend: 'down' as const,
  },
]
