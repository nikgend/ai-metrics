'use client'

import React from 'react'

interface TableColumn<T> {
  key: keyof T
  label: string
  render?: (value: any, row: T) => React.ReactNode
}

interface MetricsTableProps<T> {
  title: string
  columns: TableColumn<T>[]
  data: T[]
  actions?: (row: T) => React.ReactNode
}

export function MetricsTable<T>({
  title,
  columns,
  data,
  actions,
}: MetricsTableProps<T>) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-gray-500">No data available</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)} className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  {column.label}
                </th>
              ))}
              {actions && <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-6 py-3 text-sm text-gray-700">
                    {column.render
                      ? column.render(row[column.key], row)
                      : String(row[column.key])}
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-3 text-sm">{actions(row)}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
