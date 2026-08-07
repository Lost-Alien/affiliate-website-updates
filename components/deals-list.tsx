'use client'

import { useState } from 'react'
import { Search, RefreshCw, ShoppingCart, ExternalLink, Calendar, Info } from 'lucide-react'
import type { Deal } from '@/lib/redis'

interface DealsListProps {
  initialDeals: Deal[]
}

export function DealsList({ initialDeals }: DealsListProps) {
  const [deals, setDeals] = useState<Deal[]>(initialDeals)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleRefresh = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/deals/list')
      if (res.ok) {
        const data = await res.json()
        setDeals(data.deals || [])
      }
    } catch (err) {
      console.error('Error refreshing deals:', err)
    } finally {
      setIsLoading(false)
    }
  }

  // Parse deal text to extract a clean title and description
  const parseDealText = (text: string) => {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
    if (lines.length === 0) return { title: 'Amazon Deal', desc: '' }

    // Try to find the title (often the first line or line without URLs)
    const title = lines[0].replace(/(?:🔥|🛍️|⚡|🏷️|🛒|✨)/gu, '').trim()
    const desc = lines.slice(1).join('\n')

    return { title, desc }
  }

  const filteredDeals = deals.filter(deal => {
    const textLower = deal.text.toLowerCase()
    const searchLower = search.toLowerCase()
    return textLower.includes(searchLower) || deal.asin.toLowerCase().includes(searchLower)
  })

  return (
    <div className="space-y-6">
      {/* Search & Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card border border-border p-4 rounded-2xl shadow-sm">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search deals by product, brand, or ASIN..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            id="deals-search-input"
          />
        </div>

        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-muted text-foreground font-medium text-sm rounded-xl border border-border transition-colors disabled:opacity-50 w-full sm:w-auto justify-center select-none"
          id="deals-refresh-btn"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? 'Refreshing...' : 'Check for Updates'}</span>
        </button>
      </div>

      {/* Grid of Deals */}
      {filteredDeals.length === 0 ? (
        <div className="text-center py-20 bg-card/50 border border-border border-dashed rounded-3xl">
          <p className="text-muted-foreground mb-4">No deals matching your search were found.</p>
          <a
            href="https://t.me/TechSelectDeals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <span>Follow our Telegram Channel for live posts</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map((deal) => {
            const { title, desc } = parseDealText(deal.text)
            const dateStr = new Date(deal.postedAt * 1000).toLocaleString('en-IN', {
              dateStyle: 'medium',
              timeStyle: 'short',
            })

            return (
              <div
                key={deal.asin}
                className="group relative bg-card hover:bg-accent/5 hover:border-primary/30 border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                      </span>
                      Active Deal
                    </span>
                    <span className="text-[11px] text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
                      ASIN: {deal.asin}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {title}
                  </h3>

                  {/* Description / Post text */}
                  <p className="text-sm text-muted-foreground line-clamp-4 whitespace-pre-line mb-4">
                    {desc}
                  </p>
                </div>

                {/* Bottom Action Area */}
                <div className="space-y-4 pt-4 border-t border-border/60">
                  {/* Timestamp & Disclaimer */}
                  <div className="flex flex-col gap-1 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Updated: {dateStr}
                    </span>
                    <span className="flex items-center gap-1 leading-tight font-light italic">
                      <Info className="h-2.5 w-2.5 shrink-0" />
                      Prices subject to change.
                    </span>
                  </div>

                  {/* Action CTA */}
                  <a
                    href={deal.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:opacity-90 active:scale-[0.98] transition-all"
                    id={`deal-cta-${deal.asin}`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Check Price on Amazon</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
