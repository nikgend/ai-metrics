import { NextRequest, NextResponse } from 'next/server'
import { metricsService } from '@/services'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('id') || 'user-1'

    const data = await metricsService.getUserMetrics(userId)

    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date(),
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch user metrics',
        timestamp: new Date(),
      },
      { status: 500 }
    )
  }
}
