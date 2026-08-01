'use client'

import { useState } from 'react'
import { MessageCircle, X, ExternalLink, Send } from 'lucide-react'

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popover Card */}
      {isOpen && (
        <div className="w-80 sm:w-86 bg-card border border-border rounded-2xl shadow-2xl p-5 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <MessageCircle className="h-5 w-5 fill-emerald-500/20" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm leading-none">TechSelect WhatsApp</h3>
                <p className="text-[11px] text-muted-foreground mt-0.5">Instant Support & Channel Updates</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close WhatsApp popover"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            Connect directly with the TechSelect team or join our official channel for real-time tech deals and review alerts.
          </p>

          <div className="space-y-2.5">
            {/* Direct Chat Button */}
            <a
              href="https://wa.me/919202876921"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors shadow-sm group"
            >
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Chat (+91 92028 76921)
              </span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Official Channel Button */}
            <a
              href="https://whatsapp.com/channel/0029VbDdnbkG3R3e7wu0g70C"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-muted/60 hover:bg-muted border border-border text-foreground font-medium text-xs transition-colors group"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-emerald-500" />
                Join WhatsApp Channel
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 relative"
        aria-label="Toggle WhatsApp Contact Widget"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-7 w-7" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-background rounded-full animate-pulse" />
          </>
        )}
      </button>
    </div>
  )
}
