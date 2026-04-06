// mockData/releaseMetrics.ts
import { ReleaseMetrics } from '@/types/metrics'

export const mockReleasesData: Record<string, ReleaseMetrics> = {
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
  'v1.2.0': {
    releaseId: 'v1.2.0',
    releaseName: 'v1.2.0 - Bug Fixes',
    releaseDate: new Date('2024-03-20'),
    featuresIncluded: 2,
    bugsFixed: 24,
    developmentDaysUsed: 28,
    copilotContribution: 35,
    qualityScore: 8.5,
    deploymentSuccess: true,
    timeToMarket: 28,
  },
  'v1.3.0': {
    releaseId: 'v1.3.0',
    releaseName: 'v1.3.0 - Performance Release',
    releaseDate: new Date('2024-04-03'),
    featuresIncluded: 5,
    bugsFixed: 12,
    developmentDaysUsed: 35,
    copilotContribution: 40,
    qualityScore: 8.8,
    deploymentSuccess: true,
    timeToMarket: 35,
  },
}

export const mockReleaseTimeline = [
  { name: 'v0.9.0', features: 8, bugs: 12, quality: 8.2 },
  { name: 'v1.0.0', features: 12, bugs: 8, quality: 8.9 },
  { name: 'v1.1.0', features: 8, bugs: 15, quality: 8.7 },
  { name: 'v1.2.0', features: 2, bugs: 24, quality: 8.5 },
  { name: 'v1.3.0', features: 5, bugs: 12, quality: 8.8 },
]

export const mockReleaseContentBreakdown = [
  { name: 'Code Changes', value: 45 },
  { name: 'Documentation', value: 15 },
  { name: 'Testing', value: 25 },
  { name: 'Deployment', value: 15 },
]

export const mockAllReleases = [
  {
    id: 'v1.0.0',
    name: 'v1.0.0 - Initial Release',
    date: '2024-01-15',
    features: 12,
    bugs: 8,
    quality: '8.9',
    success: 'Yes',
    devDays: 90,
  },
  {
    id: 'v1.1.0',
    name: 'v1.1.0 - Feature Release',
    date: '2024-02-28',
    features: 8,
    bugs: 15,
    quality: '8.7',
    success: 'Yes',
    devDays: 45,
  },
  {
    id: 'v1.2.0',
    name: 'v1.2.0 - Bug Fixes',
    date: '2024-03-20',
    features: 2,
    bugs: 24,
    quality: '8.5',
    success: 'Yes',
    devDays: 28,
  },
  {
    id: 'v1.3.0',
    name: 'v1.3.0 - Performance Release',
    date: '2024-04-03',
    features: 5,
    bugs: 12,
    quality: '8.8',
    success: 'Yes',
    devDays: 35,
  },
]
