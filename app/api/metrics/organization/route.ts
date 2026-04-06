import { NextRequest, NextResponse } from 'next/server'
import { metricsService } from '@/services'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const organizationId = searchParams.get('id') || 'org-default'

    const data = await metricsService.getOrganizationMetrics(organizationId)

    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date(),
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch organization metrics',
        timestamp: new Date(),
      },
      { status: 500 }
    )
  }
}
