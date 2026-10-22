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
  robots: {
    index: false,
    follow: true,
  },
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
            <p className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Real-time price drop channels:</span>
              <a
                href="https://whatsapp.com/channel/0029Vb8ptNY545ux1D4rUA2E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold inline-flex items-center gap-1"
              >
                TS Flash Deals Hub (All Items)
              </a>
              <span>•</span>
              <a
                href="https://whatsapp.com/channel/0029VbDdnbkG3R3e7wu0g70C"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 dark:text-emerald-400 hover:underline font-semibold inline-flex items-center gap-1"
              >
                WhatsApp Channel (Mobiles &amp; Laptops)
              </a>
              <span>•</span>
              <a
                href="https://t.me/TechSelectDeals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 dark:text-sky-400 hover:underline font-semibold inline-flex items-center gap-1"
              >
                @TechSelectDeals (Telegram)
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href="https://whatsapp.com/channel/0029Vb8ptNY545ux1D4rUA2E"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm rounded-xl shadow transition-colors"
            >
              <span>TS Flash Deals Hub</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">All Items</span>
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbDdnbkG3R3e7wu0g70C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs sm:text-sm rounded-xl shadow transition-colors"
            >
              <span>WhatsApp Channel</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">Tech</span>
            </a>
            <a
              href="https://t.me/TechSelectDeals"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium text-xs sm:text-sm rounded-xl shadow transition-colors"
            >
              <span>Join @TechSelectDeals</span>
            </a>
          </div>
        </div>

        <DealsList initialDeals={deals} />
      </main>
      <Footer />
    </>
  )
}
