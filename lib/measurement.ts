export const SOURCES = ['whatsapp', 'telegram', 'pinterest', 'x', 'google', 'other', 'direct'] as const
export type TrafficSource = typeof SOURCES[number]
export interface Measurement {
  event: 'page_view' | 'affiliate_click' | 'community_click'
  path: string
  source: TrafficSource
  asin: string
  tag: string
}

export function parseMeasurement(value: unknown): Measurement | null {
  if (!value || typeof value !== 'object') return null
  const row = value as Record<string, unknown>
  if (!['page_view', 'affiliate_click', 'community_click'].includes(String(row.event))) return null
  if (typeof row.path !== 'string' || !/^\/[a-zA-Z0-9/_-]*$/.test(row.path) || row.path.length > 180) return null
  if (!SOURCES.includes(row.source as TrafficSource)) return null
  const asin = typeof row.asin === 'string' ? row.asin.toUpperCase() : ''
  const tag = typeof row.tag === 'string' ? row.tag : ''
  if (asin && !/^[A-Z0-9]{10}$/.test(asin)) return null
  if (tag && !/^[a-zA-Z0-9-]{1,40}$/.test(tag)) return null
  if (row.event !== 'affiliate_click' && (asin || tag)) return null
  return { event: row.event as Measurement['event'], path: row.path, source: row.source as TrafficSource, asin, tag }
}
