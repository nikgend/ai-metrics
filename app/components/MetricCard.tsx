'use client'

import React from 'react'

interface MetricCardProps {
  title: string
  value: string | number
  unit?: string
  change?: number
  trend?: 'up' | 'down' | 'stable'
  icon?: React.ReactNode
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit = '',
  change,
  trend,
  icon,
}) => {
  const trendColor =
    trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'
  const trendIcon =
    trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'

  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm mb-2">{title}</p>
          <p className="text-3xl font-bold">
            {value}
            {unit && <span className="text-lg text-gray-500 ml-1">{unit}</span>}
          </p>
        </div>
        {icon && <div className="text-3xl text-primary">{icon}</div>}
      </div>
      {change !== undefined && (
        <p className={`text-sm mt-2 ${trendColor}`}>
          {trendIcon} {Math.abs(change)}% from last period
        </p>
      )}
    </div>
  )
}
