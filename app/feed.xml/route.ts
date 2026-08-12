import { NextResponse } from 'next/server'
import { ARTICLES_DATA } from '@/lib/articles'
import { getLiveDeals, type Deal } from '@/lib/redis'

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const baseUrl = 'https://techselect.blog'

  // Fetch live deals from Redis
  let liveDeals: Deal[] = []
  try {
    liveDeals = await getLiveDeals()
  } catch (err) {
    console.error('Failed to fetch live deals for RSS feed:', err)
  }

  // Build RSS Items
  const dealItems = liveDeals.map((deal) => {
    const title = deal.sourceTitle ? `[Deal] ${deal.sourceTitle}` : `[Deal] Amazon Product ${deal.asin}`
    const link = `${baseUrl}/sales#asin-${deal.asin}`
    const pubDate = new Date(deal.postedAt * 1000).toUTCString()
    const description = deal.text ? escapeXml(deal.text) : `TechSelect Loot Deal - ASIN: ${deal.asin}`

    return `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
    </item>`
  })

  const articleItems = ARTICLES_DATA.map((article) => {
    const link = `${baseUrl}${article.href}`
    const pubDate = new Date(article.datePublished).toUTCString()
    const description = escapeXml(article.excerpt)

    return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(link)}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
    </item>`
  })

  const allItemsXml = [...dealItems, ...articleItems].join('\n')

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TechSelect — Tech Reviews, Buying Guides &amp; Loot Deals</title>
    <link>${baseUrl}</link>
    <description>Independent, lab-tested tech reviews, buying guides, and live loot deals in India.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${allItemsXml}
  </channel>
</rss>`

  return new NextResponse(rssXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
