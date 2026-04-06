'use client'

import React, { useState } from 'react'
import { MetricCard, MetricsChart, MetricsTable } from '@/components'

const teamsData = [
  {
    id: 'team-1',
    name: 'Backend Team',
    members: 8,
    acceptance: '84.2%',
    productivity: '38.5%',
    tickets: 156,
    quality: '9.1',
  },
  {
    id: 'team-2',
    name: 'Frontend Team',
    members: 6,
    acceptance: '79.5%',
    productivity: '32.1%',
    tickets: 142,
    quality: '8.7',
  },
  {
    id: 'team-3',
    name: 'DevOps Team',
    members: 4,
    acceptance: '86.1%',
    productivity: '40.2%',
    tickets: 98,
    quality: '9.3',
  },
  {
    id: 'team-4',
    name: 'QA Team',
    members: 5,
    acceptance: '75.3%',
    productivity: '28.5%',
    tickets: 178,
    quality: '8.5',
  },
]

export default function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState('team-1')

  const team = teamsData.find((t) => t.id === selectedTeam) || teamsData[0]

  const chartData = [
    { name: 'Week 1', value: 82, productivity: 36 },
    { name: 'Week 2', value: 83, productivity: 37 },
    { name: 'Week 3', value: 84, productivity: 38 },
    { name: 'Week 4', value: 84, productivity: 38 },
  ]

  const memberData = [
    { name: 'Alice Johnson', tasks: 34, acceptance: '85%', quality: '9.2' },
    { name: 'Bob Smith', tasks: 28, acceptance: '78%', quality: '8.5' },
    { name: 'Carol Davis', tasks: 31, acceptance: '88%', quality: '9.4' },
  ]

  return (
    <div>
      <h1 className="section-title">Team Metrics</h1>

      <div className="mb-8">
        <label className="block text-gray-700 font-semibold mb-2">Select Team:</label>
        <div className="flex gap-2 flex-wrap">
          {teamsData.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTeam(t.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTeam === t.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-4 mb-8">
        <MetricCard
          title="Copilot Acceptance Rate"
          value={team.acceptance}
          change={3.2}
          trend="up"
          icon="📊"
        />
        <MetricCard
          title="Productivity Gain"
          value={team.productivity}
          change={5.1}
          trend="up"
          icon="📈"
        />
        <MetricCard
          title="Completed Tickets"
          value={team.tickets}
          change={8.5}
          trend="up"
          icon="✅"
        />
        <MetricCard
          title="Quality Score"
          value={team.quality}
          change={2.3}
          trend="up"
          icon="⭐"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MetricsChart
          title="Weekly Acceptance Rate"
          data={chartData}
          type="line"
          dataKey="value"
        />
        <MetricsChart
          title="Acceptance vs Productivity"
          data={chartData}
          type="bar"
          dataKey={['value', 'productivity']}
        />
      </div>

      <MetricsTable
        title="Team Members"
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'tasks', label: 'Tasks Completed' },
          { key: 'acceptance', label: 'Acceptance Rate' },
          { key: 'quality', label: 'Quality Score' },
        ]}
        data={memberData as any}
        actions={(row: { name: string; tasks: number; acceptance: string; quality: string }) => (
          <a href={`/users?name=${row.name}`} className="text-primary hover:underline">
            View →
          </a>
        )}
      />
    </div>
  )
}
