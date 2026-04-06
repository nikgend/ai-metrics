'use client'

import React, { useState } from 'react'
import { MetricCard, MetricsChart, MetricsTable } from '@/components'

const featuresData = [
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
]

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState('feat-1')

  const feature = featuresData.find((f) => f.id === selectedFeature) || featuresData[0]

  const timelineData = [
    { name: 'Estimated', value: feature.estTime },
    { name: 'Actual', value: feature.devTime },
    { name: 'Saved', value: Math.max(0, feature.estTime - feature.devTime) },
  ]

  const developmentData = [
    { name: 'Week 1', code: 12, review: 8, testing: 2 },
    { name: 'Week 2', code: 15, review: 10, testing: 4 },
    { name: 'Week 3', code: 13, review: 9, testing: 8 },
    { name: 'Week 4', code: 10, review: 8, testing: 5 },
  ]

  return (
    <div>
      <h1 className="section-title">Feature Metrics</h1>

      <div className="mb-8">
        <label className="block text-gray-700 font-semibold mb-2">Select Feature:</label>
        <div className="flex gap-2 flex-wrap">
          {featuresData.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFeature(f.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                selectedFeature === f.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-4 mb-8">
        <MetricCard
          title="Development Time"
          value={`${feature.devTime} days`}
          change={25}
          trend="down"
          icon="⏱️"
        />
        <MetricCard
          title="Copilot Contribution"
          value={feature.copilot}
          change={12}
          trend="up"
          icon="🤖"
        />
        <MetricCard
          title="Quality Score"
          value={feature.quality !== '-' ? feature.quality : 'N/A'}
          change={5}
          trend="up"
          icon="⭐"
        />
        <MetricCard
          title="Defect Rate"
          value={feature.defects !== '-' ? feature.defects + '%' : 'N/A'}
          change={-45}
          trend="down"
          icon="🐛"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MetricsChart
          title="Development Timeline"
          data={timelineData}
          type="bar"
          dataKey="value"
        />
        <MetricsChart
          title="Development Breakdown"
          data={developmentData}
          type="bar"
          dataKey={['code', 'review', 'testing']}
        />
      </div>

      <MetricsTable
        title="All Features"
        columns={[
          { key: 'name', label: 'Feature Name' },
          { key: 'status', label: 'Status' },
          { key: 'devTime', label: 'Dev Time (days)' },
          { key: 'copilot', label: 'Copilot %' },
          { key: 'quality', label: 'Quality Score' },
        ]}
        data={featuresData as any}
        actions={(row: { id: string; name: string; status: string; devTime: number; estTime: number; copilot: string; quality: string; defects: string }) => (
          <button
            onClick={() => setSelectedFeature(row.id)}
            className="text-primary hover:underline"
          >
            View
          </button>
        )}
      />
    </div>
  )
}
