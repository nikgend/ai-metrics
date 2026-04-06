'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface NavItem {
  label: string
  href: string
  icon?: string
}

const navItems: NavItem[] = [
  { label: 'Organization', href: '/organization', icon: '🏢' },
  { label: 'Teams', href: '/teams', icon: '👥' },
  { label: 'Users', href: '/users', icon: '👤' },
  { label: 'Features', href: '/features', icon: '⚙️' },
  { label: 'Releases', href: '/releases', icon: '🚀' },
  { label: 'Comparison', href: '/comparison', icon: '📊' },
]

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="bg-dark text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">📈 AI Metrics</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors"
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700"
            >
              <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
