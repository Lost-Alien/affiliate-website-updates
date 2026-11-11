import { timingSafeEqual } from 'node:crypto'
import { Buffer } from 'node:buffer'
import { getRedisClient } from '@/lib/redis'
import { parseRelayStatus, RELAY_STATUS_KEY, RELAY_STATUS_TTL } from '@/lib/relay-status'

export async function POST(request: Request) {
  const expected = process.env.WEBSITE_WEBHOOK_SECRET
  const supplied = Buffer.from(request.headers.get('authorization') ?? '')
  const credential = Buffer.from(`Bearer ${expected ?? ''}`)
  if (!expected || supplied.length !== credential.length || !timingSafeEqual(supplied, credential)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const status = parseRelayStatus(await request.json().catch(() => null))
  if (!status) return Response.json({ error: 'Invalid status' }, { status: 400 })

  const redis = getRedisClient()
  try {
    if (redis) {
      await redis.set(RELAY_STATUS_KEY, { ...status, updatedAt: Date.now() }, { ex: RELAY_STATUS_TTL })
      return new Response(null, { status: 204 })
    }
  } catch {
    return Response.json({ error: 'Status storage unavailable' }, { status: 503 })
  }
  return Response.json({ error: 'Status storage unavailable' }, { status: 503 })
}
