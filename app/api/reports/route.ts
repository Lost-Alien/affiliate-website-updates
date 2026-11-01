import { timingSafeEqual } from 'node:crypto'
import { Buffer } from 'node:buffer'
import { NextResponse, type NextRequest } from 'next/server'
import { getRedisClient } from '@/lib/redis'

export async function GET(request: NextRequest) {
  const expected = process.env.WEBSITE_WEBHOOK_SECRET
  const supplied = request.headers.get('authorization')?.replace(/^Bearer /, '') || ''
  const suppliedBytes = Buffer.from(supplied)
  const expectedBytes = Buffer.from(expected || '')
  if (!expected || suppliedBytes.length !== expectedBytes.length || !timingSafeEqual(suppliedBytes, expectedBytes)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const redis = getRedisClient()
  if (!redis) return NextResponse.json({ error: 'Measurement storage is not configured' }, { status: 503 })
  const days = Math.min(30, Math.max(1, Number(request.nextUrl.searchParams.get('days')) || 7))
  const dates = Array.from({ length: Math.floor(days) }, (_, index) => new Date(Date.now() - index * 86400000).toISOString().slice(0, 10))
  try {
    const pipeline = redis.pipeline()
    dates.forEach((day) => pipeline.hgetall(`techselect:events:${day}`))
    const results = await pipeline.exec<(Record<string, number> | null)[]>()
    return NextResponse.json({
      description: 'Aggregate event counts, not unique visitors or confirmed purchases. Dates use UTC. Collection begins after deployment.',
      fields: ['event', 'path', 'source', 'asin', 'affiliate_tag'],
      days: dates.map((day, index) => ({ day, counts: results[index] || {} })),
    }, { headers: { 'Cache-Control': 'no-store' } })
  } catch {
    return NextResponse.json({ error: 'Unable to read measurement storage' }, { status: 503 })
  }
}
