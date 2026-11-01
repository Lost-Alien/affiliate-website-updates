import { NextResponse } from 'next/server'
import { ARTICLES_DATA } from '@/lib/articles'

function xml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

// Evergreen articles only: transient deals without product photos stay out of Pinterest.
export async function GET() {
  const base = 'https://techselect.blog'
  const items = ARTICLES_DATA.filter((article) => article.imageUrl).map((article) => {
    const url = `${base}${article.href}`
    return `<item><title>${xml(article.title)}</title><link>${xml(`${url}?utm_source=pinterest&utm_medium=organic&utm_campaign=article_feed`)}</link><guid isPermaLink="false">${xml(url)}</guid><description>${xml(`${article.excerpt} As an Amazon Associate I earn from qualifying purchases. #ad`)}</description><pubDate>${new Date(article.datePublished).toUTCString()}</pubDate><media:content url="${xml(`${base}${article.imageUrl}`)}" medium="image" /></item>`
  }).join('\n')
  return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/"><channel><title>TechSelect India Buying Guides</title><link>${base}</link><description>Tech buying guides and comparisons for Indian shoppers.</description><language>en-in</language>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, s-maxage=3600' } })
}
