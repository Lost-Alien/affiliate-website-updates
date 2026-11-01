import { NextResponse } from 'next/server'
import { ARTICLES_DATA } from '@/lib/articles'
import { getLiveDeals, type Deal } from '@/lib/redis'
import { getDealContent } from '@/lib/deals'
import { SAMPLE_PRODUCTS } from '@/lib/categories'

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
    const content = getDealContent(deal.text, deal.asin)
    const title = `[Deal] ${content.title}`
    const link = `${baseUrl}/sales#asin-${deal.asin}`
    const pubDate = new Date(deal.postedAt * 1000).toUTCString()
    const description = escapeXml(`${content.description} As an Amazon Associate I earn from qualifying purchases.`)
    const image = SAMPLE_PRODUCTS.find((product) => product.asin === deal.asin)?.image

    return `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      ${image ? `<media:content url="${escapeXml(`${baseUrl}${image}`)}" medium="image" />` : ''}
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
      <media:content url="${escapeXml(`${baseUrl}${article.imageUrl}`)}" medium="image" />
    </item>`
  })

  const allItemsXml = [...dealItems, ...articleItems].join('\n')

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
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
