import { NextResponse } from 'next/server'
import { getLiveDeals } from '@/lib/redis'

export const revalidate = 0 // always fetch fresh data

export async function GET() {
  try {
    const deals = await getLiveDeals()
    return NextResponse.json({ deals })
  } catch (error) {
    console.error('Failed to list deals via API:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
