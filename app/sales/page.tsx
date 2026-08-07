import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { getLiveDeals } from '@/lib/redis'
import { DealsList } from '@/components/deals-list'

export const revalidate = 0 // always dynamic

export const metadata: Metadata = {
  title: '⚡ Live Flash Deals & Price Drops | TechSelect India',
  description: 'Real-time Amazon price drops, flash deals, and best offers in India. Updated live from TechSelect Deals channel.',
}

export default async function SalesPage() {
  const deals = await getLiveDeals()

  return (
    <>
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Breadcrumb items={[{ label: 'Sales Now' }]} />

        {/* Above the fold Disclosure (FTC & Amazon Associates compliance) */}
        <div className="bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-200 rounded-xl p-4 mb-8 text-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-medium text-left">
            📢 <strong>Affiliate Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
          </p>
          <span className="text-xs opacity-80 shrink-0 text-left md:text-right">
            Product prices and availability are accurate as of the date/time indicated and are subject to change.
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Live Deal Feed</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              ⚡ Sales Now & Price Drops
            </h1>
            <p className="text-muted-foreground">
              Automated, real-time price drops from the{' '}
              <a
                href="https://t.me/TechSelectDeals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                @TechSelectDeals
              </a>{' '}
              Telegram channel.
            </p>
          </div>
        </div>

        <DealsList initialDeals={deals} />
      </main>
      <Footer />
    </>
  )
}
