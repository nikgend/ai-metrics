import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'ai-metrics-roi',
    timestamp: new Date(),
    version: '1.0.0',
  })
}
