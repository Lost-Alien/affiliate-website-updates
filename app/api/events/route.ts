import { createHash } from 'node:crypto'
import { NextResponse, type NextRequest } from 'next/server'
import { getRedisClient } from '@/lib/redis'
import { parseMeasurement } from '@/lib/measurement'

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (!origin || origin !== request.nextUrl.origin) return new NextResponse(null, { status: 403 })
  if (Number(request.headers.get('content-length') || 0) > 2048) return new NextResponse(null, { status: 413 })
  const text = await request.text()
  if (text.length > 2048) return new NextResponse(null, { status: 413 })
  let value: unknown
  try { value = JSON.parse(text) } catch { return new NextResponse(null, { status: 400 }) }
  const event = parseMeasurement(value)
  if (!event) return new NextResponse(null, { status: 400 })
  const redis = getRedisClient()
  if (!redis) return new NextResponse(null, { status: 204 })
  const day = new Date().toISOString().slice(0, 10)
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const bucket = createHash('sha256').update(`${process.env.WEBSITE_WEBHOOK_SECRET || ''}:${day}:${ip}`).digest('hex').slice(0, 24)
  const field = [event.event, event.path, event.source, event.asin, event.tag].join('|')
  try {
    await redis.eval(`
      local n = redis.call('INCR', KEYS[1])
      if n == 1 then redis.call('EXPIRE', KEYS[1], 60) end
      if n > 60 then return 0 end
      redis.call('HINCRBY', KEYS[2], ARGV[1], 1)
      redis.call('EXPIRE', KEYS[2], 7776000)
      return 1
    `, [`techselect:events:limit:${bucket}`, `techselect:events:${day}`], [field])
  } catch { console.error('Unable to record aggregate site event') }
  return new NextResponse(null, { status: 204 })
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
