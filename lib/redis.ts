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

export const DEFAULT_DEALS: Deal[] = [
  {
    asin: 'B087Q2PGF7',
    affiliateUrl: 'https://www.amazon.in/dp/B087Q2PGF7?social_share=cm_sw_r_cp_ud_dp_WRJGTC0RBYZ45JTXWAS2&linkCode=ll2&tag=techstor0caaf-21&linkId=e3dc2fcfca053f6bb66c850dab97d35c&ref_=as_li_ss_tl',
    sourceTitle: 'BLUE TEA 3-in-1 Combo Herbal Tea',
    hasMedia: false,
    postedAt: Math.floor(Date.now() / 1000),
    text: 'BLUE TEA 3-in-1 Combo Herbal Loose Leaf Tea (Butterfly Pea 25g, Hibiscus 50g, Chamomile 30g) - Caffeine Free Herbal Tea\nCheck Price: https://www.amazon.in/dp/B087Q2PGF7?social_share=cm_sw_r_cp_ud_dp_WRJGTC0RBYZ45JTXWAS2&linkCode=ll2&tag=techstor0caaf-21&linkId=e3dc2fcfca053f6bb66c850dab97d35c&ref_=as_li_ss_tl',
  },
]

const DEALS_KEY = 'techselect:live_deals'

export async function getLiveDeals(): Promise<Deal[]> {
  if (!redisClient) {
    return DEFAULT_DEALS
  }
  try {
    const deals = await redisClient.get<Deal[]>(DEALS_KEY)
    if (!deals || deals.length === 0) {
      return DEFAULT_DEALS
    }
    // Ensure default featured deals are included if not present
    const asinsInRedis = new Set(deals.map((d) => d.asin))
    const missingDefaults = DEFAULT_DEALS.filter((d) => !asinsInRedis.has(d.asin))
    return [...deals, ...missingDefaults]
  } catch (error) {
    console.error('Failed to fetch live deals from Redis:', error)
    return DEFAULT_DEALS
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
