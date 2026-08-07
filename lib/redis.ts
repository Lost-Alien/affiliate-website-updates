import { Redis } from '@upstash/redis'

// Check for Vercel KV or Upstash Redis environment variables
const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

let redisClient: Redis | null = null

if (redisUrl && redisToken) {
  redisClient = new Redis({
    url: redisUrl,
    token: redisToken,
  })
} else {
  console.warn(
    '⚠️ Redis/Vercel KV environment variables (KV_REST_API_URL / UPSTASH_REDIS_REST_URL) are not set. Live deals will not persist.'
  )
}

export type Deal = {
  asin: string
  affiliateUrl: string
  sourceTitle: string
  hasMedia: boolean
  postedAt: number
  text: string
}

const DEALS_KEY = 'techselect:live_deals'

export async function getLiveDeals(): Promise<Deal[]> {
  if (!redisClient) {
    return []
  }
  try {
    const deals = await redisClient.get<Deal[]>(DEALS_KEY)
    return deals || []
  } catch (error) {
    console.error('Failed to fetch live deals from Redis:', error)
    return []
  }
}

export async function saveLiveDeals(deals: Deal[]): Promise<boolean> {
  if (!redisClient) {
    return false
  }
  try {
    // Keep only the 50 most recent deals, expire after 7 days
    await redisClient.set(DEALS_KEY, deals.slice(0, 50), { ex: 60 * 60 * 24 * 7 })
    return true
  } catch (error) {
    console.error('Failed to save live deals to Redis:', error)
    return false
  }
}
