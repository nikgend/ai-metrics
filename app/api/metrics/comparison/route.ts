import { NextRequest, NextResponse } from 'next/server'
import { metricsService } from '@/services'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const period1 = searchParams.get('period1') || 'Q1-2024'
    const period2 = searchParams.get('period2') || 'Q2-2024'

    const data = await metricsService.getComparisonMetrics(period1, period2)

    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date(),
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch comparison metrics',
        timestamp: new Date(),
      },
      { status: 500 }
    )
  }
}
