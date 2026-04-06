'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface ChartData {
  name: string
  [key: string]: string | number
}

interface MetricsChartProps {
  title: string
  data: ChartData[]
  type: 'bar' | 'line' | 'pie'
  dataKey: string | string[]
}

const COLORS = ['#0366d6', '#6f42c1', '#28a745', '#ffc107', '#dc3545', '#17a2b8']

export const MetricsChart: React.FC<MetricsChartProps> = ({
  title,
  data,
  type,
  dataKey,
}) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-gray-500">No data available</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {type === 'bar' && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Array.isArray(dataKey) ? (
              dataKey.map((key, idx) => (
                <Bar key={key} dataKey={key} fill={COLORS[idx % COLORS.length]} />
              ))
            ) : (
              <Bar dataKey={dataKey} fill={COLORS[0]} />
            )}
          </BarChart>
        </ResponsiveContainer>
      )}
      {type === 'line' && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Array.isArray(dataKey) ? (
              dataKey.map((key, idx) => (
                <Line key={key} type="monotone" dataKey={key} stroke={COLORS[idx % COLORS.length]} />
              ))
            ) : (
              <Line type="monotone" dataKey={dataKey} stroke={COLORS[0]} />
            )}
          </LineChart>
        </ResponsiveContainer>
      )}
      {type === 'pie' && (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey={Array.isArray(dataKey) ? dataKey[0] : dataKey}
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
