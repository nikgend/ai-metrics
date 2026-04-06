import type { Metadata } from 'next'
import { Navigation } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Metrics ROI - Dashboard',
  description: 'GitHub Copilot & JIRA Integration for ROI Measurement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-light">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
