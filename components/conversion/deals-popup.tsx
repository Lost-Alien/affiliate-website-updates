'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { X, Zap, BellRing, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'

const STORAGE_KEY = 'techselect_deals_popup_dismissed_until'
const COOLDOWN_DAYS = 7

const TELEGRAM_URL = 'https://t.me/TechSelectDeals'
const WHATSAPP_URL = 'https://whatsapp.com/channel/0029VbDdnbkG3R3e7wu0g70C'

export function DealsPopup() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  // Check if current route should display popup (/article/* or /products/*)
  const isEligiblePage =
    pathname?.startsWith('/article/') || pathname?.startsWith('/products/')

  const checkCooldown = useCallback(() => {
    if (typeof window === 'undefined') return false
    try {
      const dismissedUntil = localStorage.getItem(STORAGE_KEY)
      if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
        return false // Still in cooldown
      }
    } catch {
      // Storage unavailable or disabled
    }
    return true
  }, [])

  const handleDismiss = useCallback((durationDays = COOLDOWN_DAYS) => {
    setIsOpen(false)
    try {
      const expiry = Date.now() + durationDays * 24 * 60 * 60 * 1000
      localStorage.setItem(STORAGE_KEY, expiry.toString())
    } catch {
      // Ignore localStorage errors
    }
  }, [])

  const handleTrigger = useCallback(() => {
    if (!hasTriggered && isEligiblePage && checkCooldown()) {
      setHasTriggered(true)
      setIsOpen(true)
    }
  }, [hasTriggered, isEligiblePage, checkCooldown])

  useEffect(() => {
    if (!isEligiblePage || hasTriggered || !checkCooldown()) return

    // 1. Desktop Exit Intent (Cursor leaves top of window)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && e.relatedTarget === null) {
        handleTrigger()
      }
    }

    // 2. Mobile / Scroll Depth Trigger (50% scroll depth)
    let scrollTimeout: ReturnType<typeof setTimeout> | undefined
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return

      const scrollPercentage = (window.scrollY / scrollHeight) * 100
      if (scrollPercentage >= 50) {
        scrollTimeout = setTimeout(() => {
          handleTrigger()
        }, 300)
      }
    }

    // 3. Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss()
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [isEligiblePage, hasTriggered, checkCooldown, handleTrigger, handleDismiss])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleDismiss()
      }}
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border/80 bg-card text-card-foreground shadow-2xl transition-all animate-in zoom-in-95 duration-200">
        {/* Top Accent Gradient Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500" />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => handleDismiss()}
          className="absolute right-3.5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          aria-label="Close deal alert"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3">
            <Zap className="h-3.5 w-3.5 fill-current" />
            <span>VIP Tech Deals Alert</span>
          </div>

          {/* Headline */}
          <h2
            id="popup-title"
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            Never Pay Full Price for Tech Again
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Join <strong className="text-foreground font-semibold">10,000+ smart buyers</strong> getting instant price drops, lightning Amazon discount codes & loot deals before stock runs out.
          </p>

          {/* Value Props Bullet List */}
          <div className="mt-4 space-y-2 rounded-xl bg-secondary/50 p-3.5 border border-border/50 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-foreground/90 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Real-time price drop alerts on laptops, phones & audio</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/90 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Verified lightning deals hand-picked by TechSelect editors</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/90 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>100% Free & Zero Spam — mute or leave anytime</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex flex-col gap-2.5 sm:gap-3">
            {/* Telegram Channel Button */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => handleDismiss(14)}
              className="group flex items-center justify-between w-full rounded-xl bg-sky-500 hover:bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-2.5">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.762-.169.711-.433.949-.687.973-.557.051-.98-.368-1.52-.722-.845-.553-1.323-.897-2.144-1.438-.949-.625-.334-.969.207-1.532.141-.147 2.599-2.383 2.647-2.585.006-.026.012-.124-.047-.176-.058-.052-.144-.034-.207-.02-.089.02-1.51.96-4.262 2.821-.403.277-.768.413-1.094.406-.36-.008-1.054-.204-1.571-.372-.635-.207-1.139-.316-1.095-.668.023-.184.275-.373.757-.567 2.964-1.291 4.942-2.143 5.934-2.556 2.828-1.176 3.419-1.38 3.803-1.386.084-.001.272.02.394.119.103.084.132.198.145.278.013.081.025.265.015.412z" />
                </svg>
                <span>Join Telegram Deals Channel</span>
              </div>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* WhatsApp Channel Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => handleDismiss(14)}
              className="group flex items-center justify-between w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-2.5">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Join WhatsApp Updates</span>
              </div>
              <BellRing className="h-4 w-4" />
            </a>
          </div>

          {/* Dismiss option */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => handleDismiss()}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              No thanks, I'll pay full retail price
            </button>
          </div>

          {/* Amazon Associates Compliance statement */}
          <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground/80 text-center">
            <ShieldCheck className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span>As an Amazon Associate I earn from qualifying purchases.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
