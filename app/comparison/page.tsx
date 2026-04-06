'use client'

import React, { useState } from 'react'
import { MetricCard, MetricsChart } from '@/components'

export default function ComparisonPage() {
  const [period1, setPeriod1] = useState('Q1-2024')
  const [period2, setPeriod2] = useState('Q2-2024')

  const periods = ['Q1-2024', 'Q2-2024', 'Q3-2024', 'Q4-2024']

  const comparisonData = {
    acceptanceRate: { [period1]: 75.2, [period2]: 81.2 },
    productivity: { [period1]: 28.5, [period2]: 35.5 },
    costSavings: { [period1]: 180000, [period2]: 245000 },
    bugRate: { [period1]: 3.2, [period2]: 1.8 },
  }

  const calculateChange = (prev: number, curr: number) => {
    const change = ((curr - prev) / prev) * 100
    return { value: change.toFixed(1), trend: change >= 0 ? 'up' : 'down' }
  }

  const acceptanceChange = calculateChange(comparisonData.acceptanceRate[period1], comparisonData.acceptanceRate[period2])
  const productivityChange = calculateChange(comparisonData.productivity[period1], comparisonData.productivity[period2])
  const costChange = calculateChange(comparisonData.costSavings[period1], comparisonData.costSavings[period2])
  const bugChange = calculateChange(comparisonData.bugRate[period1], comparisonData.bugRate[period2])

  const chartData = [
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
  ]

  const tableData = [
    {
      metric: 'Copilot Acceptance Rate',
      [period1]: '75.2%',
      [period2]: '81.2%',
      change: `+${acceptanceChange.value}%`,
      trend: acceptanceChange.trend,
    },
    {
      metric: 'Productivity Gain',
      [period1]: '28.5%',
      [period2]: '35.5%',
      change: `+${productivityChange.value}%`,
      trend: productivityChange.trend,
    },
    {
      metric: 'Cost Savings',
      [period1]: '$180K',
      [period2]: '$245K',
      change: `+${costChange.value}%`,
      trend: costChange.trend,
    },
    {
      metric: 'Bug Rate',
      [period1]: '3.2%',
      [period2]: '1.8%',
      change: `${bugChange.value}%`,
      trend: bugChange.trend,
    },
  ]

  return (
    <div>
      <h1 className="section-title">Metrics Comparison</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Period 1:</label>
          <select
            value={period1}
            onChange={(e) => setPeriod1(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          >
            {periods.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Period 2:</label>
          <select
            value={period2}
            onChange={(e) => setPeriod2(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          >
            {periods.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid-4 mb-8">
        <MetricCard
          title="Acceptance Rate"
          value={`${comparisonData.acceptanceRate[period2].toFixed(1)}%`}
          change={parseFloat(acceptanceChange.value)}
          trend={acceptanceChange.trend as 'up' | 'down'}
          icon="📊"
        />
        <MetricCard
          title="Productivity Gain"
          value={`${comparisonData.productivity[period2].toFixed(1)}%`}
          change={parseFloat(productivityChange.value)}
          trend={productivityChange.trend as 'up' | 'down'}
          icon="📈"
        />
        <MetricCard
          title="Cost Savings"
          value={`$${(comparisonData.costSavings[period2] / 1000).toFixed(0)}K`}
          change={parseFloat(costChange.value)}
          trend={costChange.trend as 'up' | 'down'}
          icon="💰"
        />
        <MetricCard
          title="Bug Rate"
          value={`${comparisonData.bugRate[period2].toFixed(1)}%`}
          change={parseFloat(bugChange.value)}
          trend={bugChange.trend as 'up' | 'down'}
          icon="🐛"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Metric Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Metric</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{period1}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{period2}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Change</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm text-gray-700 font-medium">{row.metric}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{row[period1]}</td>
                  <td className="px-6 py-3 text-sm text-gray-700 font-semibold">{row[period2]}</td>
                  <td
                    className={`px-6 py-3 text-sm font-semibold ${
                      row.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {row.change} {row.trend === 'up' ? '↑' : '↓'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <MetricsChart
        title="Period Comparison Chart"
        data={chartData}
        type="bar"
        dataKey={[period1, period2]}
      />
    </div>
  )
}
