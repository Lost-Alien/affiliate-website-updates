import { NextResponse, type NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getLiveDeals, saveLiveDeals, type Deal } from '@/lib/redis'

const WEBHOOK_SECRET = process.env.WEBSITE_WEBHOOK_SECRET || ''

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'TechSelect Deals Webhook API is active and listening for deals.',
  })
}

export async function POST(request: NextRequest) {
  // 1. Verify secret from Telegram Bot
  const secret = request.headers.get('x-webhook-secret') ?? ''
  if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { asins, text, source_title, has_media, posted_at } = body

    if (!asins || !Array.isArray(asins) || asins.length === 0) {
      return NextResponse.json({ error: 'No ASINs in payload' }, { status: 400 })
    }

    // 2. Fetch existing deals
    const existingDeals = await getLiveDeals()

    // 3. Build new deal objects with compliant affiliate links (amazon.in with tag techstor0caaf-21)
    const newDeals: Deal[] = asins.map((asin: string) => {
      // Clean target affiliate URL pointing directly to amazon.in/dp/[ASIN]
      const affiliateUrl = `https://www.amazon.in/dp/${asin}?tag=techstor0caaf-21`
      return {
        asin,
        affiliateUrl,
        sourceTitle: source_title ?? 'TechSelect Deals',
        hasMedia: has_media ?? false,
        postedAt: posted_at ?? Date.now() / 1000,
        text: text ?? '',
      }
    })

    // 4. Merge and deduplicate by ASIN, keeping new ones at the top
    const allDealsMap = new Map<string, Deal>()
    // Add new deals first (they take precedence)
    for (const d of newDeals) {
      allDealsMap.set(d.asin, d)
    }
    // Add existing deals (only if not already overwritten by a new deal)
    for (const d of existingDeals) {
      if (!allDealsMap.has(d.asin)) {
        allDealsMap.set(d.asin, d)
      }
    }

    const mergedDeals = Array.from(allDealsMap.values())
      .sort((a, b) => b.postedAt - a.postedAt) // sort descending by time

    // 5. Save to Redis
    const saved = await saveLiveDeals(mergedDeals)
    if (!saved) {
      return NextResponse.json({ error: 'Failed to persist deals' }, { status: 500 })
    }

    // 6. Revalidate the Sales page
    revalidatePath('/sales')

    return NextResponse.json({ success: true, count: newDeals.length })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
