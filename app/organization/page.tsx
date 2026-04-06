'use client'

import React, { useEffect, useState } from 'react'
import { MetricCard, MetricsChart, MetricsTable } from '@/components'
import { OrganizationMetrics } from '@/types/metrics'

export default function OrganizationPage() {
  const [data, setData] = useState<OrganizationMetrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/metrics/organization')
        if (!response.ok) throw new Error('Failed to fetch data')
        const result = await response.json()
        setData(result.data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="text-center py-8">Loading...</div>
  if (error) return <div className="text-red-600 bg-red-50 p-4 rounded">Error: {error}</div>
  if (!data) return <div className="text-gray-500">No data available</div>

  const chartData = [
    { name: 'Jan', value: 65, productivity: 45 },
    { name: 'Feb', value: 72, productivity: 52 },
    { name: 'Mar', value: 78, productivity: 58 },
    { name: 'Apr', value: 81, productivity: 65 },
    { name: 'May', value: 81, productivity: 68 },
  ]

  const teamTableData = [
    { teamId: '1', teamName: 'Backend Team', members: 8, acceptance: '84.2%', productivity: '38.5%' },
    { teamId: '2', teamName: 'Frontend Team', members: 6, acceptance: '79.5%', productivity: '32.1%' },
    { teamId: '3', teamName: 'DevOps Team', members: 4, acceptance: '86.1%', productivity: '40.2%' },
    { teamId: '4', teamName: 'QA Team', members: 5, acceptance: '75.3%', productivity: '28.5%' },
  ]

  return (
    <div>
      <h1 className="section-title">Organization Metrics</h1>

      <div className="grid-4 mb-8">
        <MetricCard
          title="Copilot Acceptance Rate"
          value={data.totalCopilotAcceptanceRate.toFixed(1)}
          unit="%"
          change={data.trendPercentage}
          trend={data.trend}
          icon="📊"
        />
        <MetricCard
          title="Productivity Gain"
          value={data.totalProductivityGain.toFixed(1)}
          unit="%"
          change={5.2}
          trend="up"
          icon="📈"
        />
        <MetricCard
          title="Total Cost Savings"
          value={`$${(data.totalCostSavings / 1000).toFixed(0)}K`}
          change={12.5}
          trend="up"
          icon="💰"
        />
        <MetricCard
          title="Team Count"
          value={data.teamCount}
          change={0}
          trend="stable"
          icon="👥"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MetricsChart
          title="Acceptance Rate Trend"
          data={chartData}
          type="line"
          dataKey="value"
        />
        <MetricsChart
          title="Productivity vs Acceptance"
          data={chartData}
          type="bar"
          dataKey={['value', 'productivity']}
        />
      </div>

      <MetricsTable
        title="Team Performance Overview"
        columns={[
          { key: 'teamName', label: 'Team Name' },
          { key: 'members', label: 'Members' },
          { key: 'acceptance', label: 'Copilot Acceptance' },
          { key: 'productivity', label: 'Productivity Gain' },
        ]}
        data={teamTableData}
        actions={(row: { teamId: string; teamName: string; members: number; acceptance: string; productivity: string }) => (
          <a href={`/teams?id=${row.teamId}`} className="text-primary hover:underline">
            View →
          </a>
        )}
      />
    </div>
  )
}
