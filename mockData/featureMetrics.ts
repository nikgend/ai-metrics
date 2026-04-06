// mockData/featureMetrics.ts
import { FeatureMetrics } from '@/types/metrics'

export const mockFeaturesData: Record<string, FeatureMetrics> = {
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
    metrics: [
      {
        id: 'metric-feat-1-001',
        timestamp: new Date('2024-03-15'),
        value: 45,
        unit: 'days',
        category: 'productivity',
      },
    ],
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
    metrics: [
      {
        id: 'metric-feat-2-001',
        timestamp: new Date('2024-03-20'),
        value: 52,
        unit: 'days',
        category: 'productivity',
      },
    ],
  },
  'feat-3': {
    featureId: 'feat-3',
    featureName: 'API Rate Limiting',
    developmentTime: 28,
    estimatedTime: 40,
    copilotContribution: 38,
    qualityScore: 9.3,
    defectRate: 0.5,
    timeToMarket: 28,
    status: 'testing',
    metrics: [
      {
        id: 'metric-feat-3-001',
        timestamp: new Date('2024-03-25'),
        value: 28,
        unit: 'days',
        category: 'productivity',
      },
    ],
  },
  'feat-4': {
    featureId: 'feat-4',
    featureName: 'Database Optimization',
    developmentTime: 0,
    estimatedTime: 35,
    copilotContribution: 0,
    qualityScore: 0,
    defectRate: 0,
    timeToMarket: 0,
    status: 'planning',
    metrics: [],
  },
  'feat-5': {
    featureId: 'feat-5',
    featureName: 'Multi-language Support',
    developmentTime: 38,
    estimatedTime: 60,
    copilotContribution: 40,
    qualityScore: 8.9,
    defectRate: 1.1,
    timeToMarket: 38,
    status: 'released',
    metrics: [
      {
        id: 'metric-feat-5-001',
        timestamp: new Date('2024-02-28'),
        value: 38,
        unit: 'days',
        category: 'productivity',
      },
    ],
  },
}

export const mockFeatureDevelopmentTimeline = (featureId: string) => [
  { name: 'Estimated', value: mockFeaturesData[featureId]?.estimatedTime || 0 },
  { name: 'Actual', value: mockFeaturesData[featureId]?.developmentTime || 0 },
  {
    name: 'Saved',
    value: Math.max(
      0,
      (mockFeaturesData[featureId]?.estimatedTime || 0) -
        (mockFeaturesData[featureId]?.developmentTime || 0)
    ),
  },
]

export const mockFeatureDevelopmentBreakdown = [
  { name: 'Week 1', code: 12, review: 8, testing: 2 },
  { name: 'Week 2', code: 15, review: 10, testing: 4 },
  { name: 'Week 3', code: 13, review: 9, testing: 8 },
  { name: 'Week 4', code: 10, review: 8, testing: 5 },
]

export const mockAllFeatures = [
  {
    id: 'feat-1',
    name: 'User Authentication v2',
    status: 'Released',
    devTime: 45,
    estTime: 60,
    copilot: '35%',
    quality: '9.1',
    defects: '0.8',
  },
  {
    id: 'feat-2',
    name: 'Analytics Dashboard',
    status: 'In Progress',
    devTime: 52,
    estTime: 80,
    copilot: '42%',
    quality: '8.7',
    defects: '1.2',
  },
  {
    id: 'feat-3',
    name: 'API Rate Limiting',
    status: 'Testing',
    devTime: 28,
    estTime: 40,
    copilot: '38%',
    quality: '9.3',
    defects: '0.5',
  },
  {
    id: 'feat-4',
    name: 'Database Optimization',
    status: 'Planning',
    devTime: 0,
    estTime: 35,
    copilot: '0%',
    quality: '-',
    defects: '-',
  },
  {
    id: 'feat-5',
    name: 'Multi-language Support',
    status: 'Released',
    devTime: 38,
    estTime: 60,
    copilot: '40%',
    quality: '8.9',
    defects: '1.1',
  },
]
