import { NextRequest, NextResponse } from 'next/server'
import { metricsService } from '@/services'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featureId = searchParams.get('id') || 'feat-1'

    const data = await metricsService.getFeatureMetrics(featureId)

    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date(),
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch feature metrics',
        timestamp: new Date(),
      },
      { status: 500 }
    )
  }
}
