'use client'

import React, { useState } from 'react'
import { MetricCard, MetricsChart, MetricsTable } from '@/components'

const usersData = [
  {
    id: 'user-1',
    name: 'Alice Johnson',
    email: '[REDACTED_EMAIL_ADDRESS_4]',
    team: 'Backend Team',
    tasks: 34,
    acceptance: '85%',
    quality: '9.2',
    hours: 124,
    savings: '$12,500',
  },
  {
    id: 'user-2',
    name: 'Bob Smith',
    email: '[REDACTED_EMAIL_ADDRESS_5]',
    team: 'Backend Team',
    tasks: 28,
    acceptance: '78%',
    quality: '8.5',
    hours: 98,
    savings: '$9,200',
  },
  {
    id: 'user-3',
    name: 'Carol Davis',
    email: '[REDACTED_EMAIL_ADDRESS_6]',
    team: 'Frontend Team',
    tasks: 31,
    acceptance: '88%',
    quality: '9.4',
    hours: 115,
    savings: '$11,800',
  },
  {
    id: 'user-4',
    name: 'David Wilson',
    email: '[REDACTED_EMAIL_ADDRESS_7]',
    team: 'Frontend Team',
    tasks: 26,
    acceptance: '82%',
    quality: '8.8',
    hours: 102,
    savings: '$9,800',
  },
]

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState('user-1')

  const user = usersData.find((u) => u.id === selectedUser) || usersData[0]

  const chartData = [
    { name: 'Week 1', tasks: 8, acceptance: 83 },
    { name: 'Week 2', tasks: 9, acceptance: 84 },
    { name: 'Week 3', tasks: 8, acceptance: 86 },
    { name: 'Week 4', tasks: 9, acceptance: 85 },
  ]

  const languageData = [
    { name: 'TypeScript', value: 40 },
    { name: 'Python', value: 25 },
    { name: 'JavaScript', value: 20 },
    { name: 'Java', value: 10 },
    { name: 'Other', value: 5 },
  ]

  return (
    <div>
      <h1 className="section-title">Individual Metrics</h1>

      <div className="mb-8">
        <label className="block text-gray-700 font-semibold mb-2">Select User:</label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        >
          {usersData.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name} - {u.team}
            </option>
          ))}
        </select>
      </div>

      <div className="grid-4 mb-8">
        <MetricCard
          title="Copilot Acceptance Rate"
          value={user.acceptance}
          change={6.5}
          trend="up"
          icon="📊"
        />
        <MetricCard
          title="Completed Tasks"
          value={user.tasks}
          change={15.2}
          trend="up"
          icon="✅"
        />
        <MetricCard
          title="Quality Score"
          value={user.quality}
          change={3.1}
          trend="up"
          icon="⭐"
        />
        <MetricCard
          title="Est. Time Saved"
          value={user.savings}
          change={22}
          trend="up"
          icon="💰"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MetricsChart
          title="Weekly Performance"
          data={chartData}
          type="bar"
          dataKey="tasks"
        />
        <MetricsChart
          title="Language Breakdown"
          data={languageData}
          type="pie"
          dataKey="value"
        />
      </div>

      <MetricsTable
        title="All Users"
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'team', label: 'Team' },
          { key: 'tasks', label: 'Tasks Completed' },
          { key: 'acceptance', label: 'Acceptance Rate' },
          { key: 'quality', label: 'Quality Score' },
        ]}
        data={usersData as any}
        actions={(row: { id: string; name: string; email: string; team: string; tasks: number; acceptance: string; quality: string; hours: number; savings: string }) => (
          <button
            onClick={() => setSelectedUser(row.id)}
            className="text-primary hover:underline"
          >
            Select
          </button>
        )}
      />
    </div>
  )
}
