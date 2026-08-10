import Link from 'next/link'
import { ExternalLink, Flame, ArrowRight } from 'lucide-react'
import { getLiveDeals } from '@/lib/redis'
import { dedupeBy } from '@/lib/dedup'

function parseDealTitle(text: string): { title: string; desc: string } {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)
  if (lines.length === 0) return { title: 'Amazon Deal', desc: '' }

  const title = lines[0].replace(/(?:🔥|🛍️|⚡|🏷️|🛒|✨)/gu, '').trim()
  const desc = lines.slice(1).join(' ')
  return { title, desc }
}

export async function HomeDealsBanner() {
  const rawDeals = await getLiveDeals()
  const uniqueDeals = dedupeBy(rawDeals, (d) => d.asin)
  const deals = uniqueDeals.slice(0, 6)

  if (deals.length === 0) {
    return null
  }

  return (
    <section className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent border-b border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider flex items-center gap-1">
                <Flame className="h-3.5 w-3.5 fill-current" />
                Live Deals Feed
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              ⚡ Flash Deals & Price Drops
            </h2>
          </div>

          <Link
            href="/sales"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors shrink-0 self-start sm:self-auto"
          >
            <span>View All Deals</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Amazon Associates Disclosure */}
        <p className="text-[11px] text-muted-foreground mb-4">
          * As an Amazon Associate I earn from qualifying purchases. Product prices and availability are accurate as of the date/time indicated and are subject to change.
        </p>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deals.map((deal) => {
            const { title, desc } = parseDealTitle(deal.text)
            const dateStr = new Date(deal.postedAt * 1000).toLocaleString('en-IN', {
              dateStyle: 'short',
              timeStyle: 'short',
            })

            return (
              <div
                key={deal.asin}
                className="bg-card border border-border rounded-xl p-4 hover:border-amber-500/50 transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-2">
                    <span className="font-mono bg-muted px-2 py-0.5 rounded">ASIN: {deal.asin}</span>
                    <span>{dateStr}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2 mb-1.5">
                    {title}
                  </h3>
                  {desc && (
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {desc}
                    </p>
                  )}
                </div>

                <a
                  href={deal.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="amazon-btn flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold rounded-lg transition-colors mt-2"
                >
                  <span>Check Price on Amazon</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
