'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Gamepad2,
  RefreshCw,
  Terminal as TerminalIcon,
  Search,
  Zap,
  Volume2,
  VolumeX,
  Trophy,
  RotateCcw,
  Sparkles,
  Bug,
  Flame,
  Home,
} from 'lucide-react'

// Synthesized 8-bit retro sound generator (zero external assets, 100% reliable)
class SoundFX {
  private ctx: AudioContext | null = null
  public enabled = true

  private getContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
    return this.ctx
  }

  playCatch() {
    if (!this.enabled) return
    const ctx = this.getContext()
    if (!ctx) return
    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(440, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12)
      gain.gain.setValueAtTime(0.2, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.12)
    } catch {
      // Audio autoplay policy fallback
    }
  }

  playHit() {
    if (!this.enabled) return
    const ctx = this.getContext()
    if (!ctx) return
    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(180, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.2)
      gain.gain.setValueAtTime(0.25, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.2)
    } catch {
      // Audio autoplay policy fallback
    }
  }

  playGameOver() {
    if (!this.enabled) return
    const ctx = this.getContext()
    if (!ctx) return
    try {
      const notes = [330, 293, 261, 220]
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sawtooth'
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12)
        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.12)
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + (idx + 1) * 0.12)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(ctx.currentTime + idx * 0.12)
        osc.stop(ctx.currentTime + (idx + 1) * 0.12)
      })
    } catch {
      // Audio autoplay policy fallback
    }
  }
}

const soundFX = new SoundFX()

const FUNNY_EXCUSES = [
  'A rogue AI intern deleted the routing table while trying to order biryani online.',
  'The server power plug was accidentally swapped with a USB heated coffee mug coaster.',
  'Someone pushed directly to main on a Friday at 5:59 PM. (We don\'t talk about it)',
  'It worked on localhost! Certified 100% "Works on My Machine" 🏅',
  'A cat walked across the data center keyboard and typed "sudo rm -rf /url".',
  'This URL went out to buy milk and never came back.',
  'Quantum entanglement failed: This page exists in dimension C-137, just not this one.',
  'DNS. It is always DNS. Even when the logs swear it isn\'t DNS, it\'s DNS.',
  'The server caught fire, but the cooling fan looked really cool in RGB.',
  'The packet got distracted by Amazon Great Indian Festival lightning deals.',
  'Our senior developer refactored this URL into an existential void.',
  'Someone forgot to close an HTML <div> tag in 2008 and the universe unraveled.',
  'Our caching layer ate the page. It tasted like cookies.',
  'A solar flare flipped the exact bit holding this route together.',
  'The Wi-Fi router was feeling emotionally unavailable today.',
]

const JOKES = [
  'Why do programmers prefer dark mode? Because light attracts bugs.',
  'There are 10 types of people in the world: those who understand binary, and those who don\'t.',
  'A SQL query walks into a bar, walks up to two tables and asks: "Can I join you?"',
  'Why did the JavaScript developer wear glasses? Because they don\'t C#.',
  'How many programmers does it take to change a lightbulb? None, that\'s a hardware problem.',
]

interface FallingItem {
  id: number
  x: number
  y: number
  speed: number
  icon: string
  label: string
  points: number
  isBug: boolean
}

export function Funny404() {
  const router = useRouter()
  const [excuseIdx, setExcuseIdx] = useState(0)
  const [isRolling, setIsRolling] = useState(false)
  const [mode, setMode] = useState<'normal' | 'game' | 'terminal'>('normal')
  const [searchQuery, setSearchQuery] = useState('')

  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'TechSelect OS v4.0.4 [Kernel: x86_64-quantum]',
    'Type "help" for a list of available secret commands.',
    'Status: HTTP 404 NOT_FOUND. Route vanished into thin air.',
  ])
  const [terminalInput, setTerminalInput] = useState('')

  // Game state
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [isGameOver, setIsGameOver] = useState(false)
  const [gameRunning, setGameRunning] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)

  // Game internal refs for animation loop
  const playerXRef = useRef(150)
  const itemsRef = useRef<FallingItem[]>([])
  const scoreRef = useRef(0)
  const livesRef = useRef(3)
  const reqIdRef = useRef<number | null>(null)
  const lastSpawnRef = useRef<number>(0)

  useEffect(() => {
    // Pick random initial excuse
    setExcuseIdx(Math.floor(Math.random() * FUNNY_EXCUSES.length))
    // Load high score
    const saved = localStorage.getItem('techselect_404_highscore')
    if (saved) setHighScore(parseInt(saved, 10) || 0)
  }, [])

  const rollExcuse = () => {
    setIsRolling(true)
    setTimeout(() => {
      setExcuseIdx((prev) => (prev + 1) % FUNNY_EXCUSES.length)
      setIsRolling(false)
    }, 200)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    const q = searchQuery.toLowerCase()
    if (q.includes('laptop')) {
      router.push('/category/computers/laptops')
    } else if (q.includes('tablet') || q.includes('ipad')) {
      router.push('/article/best-tablets-for-students-and-creatives-india')
    } else if (q.includes('headphone') || q.includes('earbud') || q.includes('audio')) {
      router.push('/category/audio/headphones')
    } else if (q.includes('phone') || q.includes('mobile')) {
      router.push('/category/mobiles')
    } else if (q.includes('deal') || q.includes('sale')) {
      router.push('/sales')
    } else {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  // Terminal command handler
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    const newHistory = [...terminalHistory, `> ${terminalInput}`]

    switch (cmd) {
      case 'help':
        newHistory.push(
          'Available commands:',
          '  help      - Show this manual',
          '  excuse    - Generate random developer excuse',
          '  joke      - Print a tech/programming joke',
          '  deals     - Open live flash price drops',
          '  game      - Launch the 404 Bug Catcher game',
          '  sudo      - Acquire root privileges',
          '  coffee    - Dispense hot caffeine',
          '  clear     - Wipe this terminal buffer',
          '  home      - Teleport back to https://techselect.blog'
        )
        break
      case 'excuse':
        newHistory.push(`[EXCUSE] ${FUNNY_EXCUSES[Math.floor(Math.random() * FUNNY_EXCUSES.length)]}`)
        break
      case 'joke':
        newHistory.push(`[JOKE] ${JOKES[Math.floor(Math.random() * JOKES.length)]}`)
        break
      case 'deals':
        newHistory.push('Redirecting to ⚡ /sales in 2 seconds...')
        setTimeout(() => router.push('/sales'), 1500)
        break
      case 'game':
        setMode('game')
        newHistory.push('Launching Arcade Mode...')
        break
      case 'sudo':
      case 'sudo su':
        newHistory.push('Permission Denied: User is not in sudoers file. This incident will be reported to your mom.')
        break
      case 'coffee':
        newHistory.push('       ( (', '        ) )', '      ........', '      |      |]', '      \\      /', '       `----\'', '☕ Fresh brew deployed to your desk. Back to debugging!')
        break
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      case 'home':
        router.push('/')
        break
      default:
        newHistory.push(`Command not recognized: "${cmd}". Type "help" for valid options.`)
    }

    setTerminalHistory(newHistory)
    setTerminalInput('')
  }

  // --- GAME LOGIC ---
  const toggleSound = () => {
    soundFX.enabled = !soundEnabled
    setSoundEnabled(!soundEnabled)
  }

  const startGame = useCallback(() => {
    setIsGameOver(false)
    setLives(3)
    setScore(0)
    scoreRef.current = 0
    livesRef.current = 3
    itemsRef.current = []
    playerXRef.current = 150
    setGameRunning(true)
  }, [])

  const stopGame = useCallback(() => {
    setGameRunning(false)
    if (reqIdRef.current && typeof window !== 'undefined') window.cancelAnimationFrame(reqIdRef.current)
  }, [])

  useEffect(() => {
    if (mode !== 'game') {
      stopGame()
      return
    }
    startGame()
    return () => stopGame()
  }, [mode, startGame, stopGame])

  useEffect(() => {
    if (!gameRunning || mode !== 'game') return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let nextItemId = 1
    const width = canvas.width
    const height = canvas.height
    const playerWidth = 60
    const playerHeight = 16

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        playerXRef.current = Math.max(0, playerXRef.current - 24)
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        playerXRef.current = Math.min(width - playerWidth, playerXRef.current + 24)
      }
    }

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const scaleX = canvas.width / rect.width
      const canvasX = (clientX - rect.left) * scaleX
      playerXRef.current = Math.max(0, Math.min(width - playerWidth, canvasX - playerWidth / 2))
    }

    window.addEventListener('keydown', handleKeyDown)
    canvas.addEventListener('mousemove', handlePointerMove)
    canvas.addEventListener('touchmove', handlePointerMove, { passive: true })

    const GADGET_TYPES = [
      { icon: '📱', label: 'Phone', points: 10, isBug: false },
      { icon: '💻', label: 'Laptop', points: 20, isBug: false },
      { icon: '🎧', label: 'Audio', points: 15, isBug: false },
      { icon: '⚡', label: 'Deal', points: 30, isBug: false },
      { icon: '🐛', label: '404 Bug', points: -1, isBug: true },
    ]

    const loop = (time: number) => {
      // Spawn items
      if (time - lastSpawnRef.current > 750) {
        lastSpawnRef.current = time
        const chosen = GADGET_TYPES[Math.floor(Math.random() * GADGET_TYPES.length)]
        itemsRef.current.push({
          id: nextItemId++,
          x: Math.random() * (width - 30),
          y: 0,
          speed: 2.5 + Math.random() * 2 + Math.min(scoreRef.current * 0.02, 3.5),
          icon: chosen.icon,
          label: chosen.label,
          points: chosen.points,
          isBug: chosen.isBug,
        })
      }

      // Clear frame
      ctx.clearRect(0, 0, width, height)

      // Draw background grid lines (retro arcade style)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.lineWidth = 1
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Update and draw falling items
      const remainingItems: FallingItem[] = []
      const pX = playerXRef.current
      const pY = height - playerHeight - 8

      ctx.font = '22px sans-serif'
      ctx.textAlign = 'center'

      for (const item of itemsRef.current) {
        item.y += item.speed

        // Collision check with player basket
        const itemHit =
          item.y + 15 >= pY &&
          item.y <= pY + playerHeight + 10 &&
          item.x + 15 >= pX &&
          item.x - 15 <= pX + playerWidth

        if (itemHit) {
          if (item.isBug) {
            soundFX.playHit()
            livesRef.current -= 1
            setLives(livesRef.current)
            if (livesRef.current <= 0) {
              soundFX.playGameOver()
              setIsGameOver(true)
              setGameRunning(false)
              if (scoreRef.current > highScore) {
                setHighScore(scoreRef.current)
                localStorage.setItem('techselect_404_highscore', scoreRef.current.toString())
              }
              return
            }
          } else {
            soundFX.playCatch()
            scoreRef.current += item.points
            setScore(scoreRef.current)
            if (scoreRef.current > highScore) {
              setHighScore(scoreRef.current)
              localStorage.setItem('techselect_404_highscore', scoreRef.current.toString())
            }
          }
          continue // Item collected!
        }

        // Check if item hit bottom
        if (item.y > height) {
          if (!item.isBug && scoreRef.current > 0) {
            // missed a gadget
          }
          continue
        }

        // Draw item
        ctx.fillText(item.icon, item.x, item.y)
        remainingItems.push(item)
      }
      itemsRef.current = remainingItems

      // Draw Player Basket / Robot Caddy
      ctx.fillStyle = '#f97316' // Vibrant orange
      ctx.beginPath()
      ctx.roundRect(pX, pY, playerWidth, playerHeight, 8)
      ctx.fill()

      // Player highlight neon accent
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(pX + 8, pY + 4, playerWidth - 16, 3)

      // Player label
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 9px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('CATCHER', pX + playerWidth / 2, pY + 13)

      reqIdRef.current = window.requestAnimationFrame(loop)
    }

    reqIdRef.current = window.requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      canvas.removeEventListener('mousemove', handlePointerMove)
      canvas.removeEventListener('touchmove', handlePointerMove)
      if (reqIdRef.current && typeof window !== 'undefined') window.cancelAnimationFrame(reqIdRef.current)
    }
  }, [gameRunning, mode, highScore])

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      {/* Interactive Mode Switcher Tabs */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setMode('normal')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            mode === 'normal'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Funny 404
        </button>
        <button
          onClick={() => setMode('game')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            mode === 'game'
              ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/20'
              : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <Gamepad2 className="h-3.5 w-3.5" />
          🎮 Play 404 Arcade
        </button>
        <button
          onClick={() => setMode('terminal')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            mode === 'terminal'
              ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20'
              : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <TerminalIcon className="h-3.5 w-3.5" />
          &gt;_ Hacker Console
        </button>
      </div>

      {/* --- MODE 1: FUNNY 404 HERO --- */}
      {mode === 'normal' && (
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-lg text-center relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Animated Mascot: Confused Robot */}
          <div className="relative w-28 h-28 mx-auto mb-4 animate-bounce">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              {/* Antenna */}
              <line x1="50" y1="12" x2="50" y2="28" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
              <circle cx="50" cy="10" r="6" fill="#ef4444" className="animate-ping origin-center" />
              <circle cx="50" cy="10" r="5" fill="#f97316" />
              {/* Head */}
              <rect x="20" y="28" width="60" height="46" rx="14" fill="#334155" stroke="#cbd5e1" strokeWidth="3" />
              {/* Visor Screen */}
              <rect x="28" y="38" width="44" height="24" rx="8" fill="#0f172a" />
              {/* Eyes */}
              <text x="36" y="55" fontSize="14" fill="#38bdf8" fontFamily="monospace">x</text>
              <text x="56" y="55" fontSize="14" fill="#38bdf8" fontFamily="monospace">x</text>
              {/* Mouth */}
              <line x1="44" y1="68" x2="56" y2="68" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
              {/* Ears / Bolts */}
              <rect x="14" y="44" width="6" height="12" rx="3" fill="#94a3b8" />
              <rect x="80" y="44" width="6" height="12" rx="3" fill="#94a3b8" />
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Bug className="h-3.5 w-3.5" />
            Error 404: Link Lost in Space
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-foreground tracking-tight mb-3">
            Whoops! 404
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-6 font-medium">
            Even our quantum algorithms couldn&apos;t find this page. It was either abducted by aliens, refactored into the void, or never existed in this timeline.
          </p>

          {/* Interactive Tech Reason / Excuse Box */}
          <div className="max-w-lg mx-auto bg-muted/40 border border-border/80 rounded-2xl p-4 sm:p-5 mb-8 text-left transition-all">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Flame className="h-3.5 w-3.5 text-amber-500" />
                Real Tech Reason for Failure:
              </span>
              <button
                onClick={rollExcuse}
                className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-semibold"
                title="Roll another hilarious excuse"
              >
                <RefreshCw className={`h-3 w-3 ${isRolling ? 'animate-spin' : ''}`} />
                Blame Something Else
              </button>
            </div>
            <p className="text-foreground text-sm font-mono leading-relaxed bg-background/80 p-3 rounded-xl border border-border/40">
              &ldquo;{FUNNY_EXCUSES[excuseIdx]}&rdquo;
            </p>
          </div>

          {/* Search Box Helper */}
          <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto mb-8 relative">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gadgets (e.g. MacBook, Tablets, Earbuds)..."
                className="w-full pl-10 pr-24 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-foreground"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-semibold hover:bg-primary/90 transition-all"
              >
                Find It
              </button>
            </div>
          </form>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all text-sm shadow-sm"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/sales"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 font-semibold rounded-xl hover:bg-amber-500/20 transition-all text-sm"
            >
              <Zap className="h-4 w-4" />
              ⚡ View Live Deals
            </Link>
            <button
              onClick={() => setMode('game')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground font-semibold rounded-xl hover:bg-muted/80 transition-all text-sm"
            >
              <Gamepad2 className="h-4 w-4 text-primary" />
              Play 404 Mini-Game
            </button>
          </div>
        </div>
      )}

      {/* --- MODE 2: PLAYABLE RETRO 404 ARCADE GAME --- */}
      {mode === 'game' && (
        <div className="bg-slate-950 border border-slate-800 text-slate-100 rounded-3xl p-6 sm:p-8 shadow-2xl text-center relative overflow-hidden">
          {/* Game Header Bar */}
          <div className="flex items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-4">
            <div className="text-left">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block">
                🎮 404 Retro Bug Catcher
              </span>
              <p className="text-xs text-slate-400">Catch gadgets (📱 💻 🎧 ⚡), avoid 404 bugs (🐛)!</p>
            </div>

            <div className="flex items-center gap-4 font-mono text-sm">
              <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <Trophy className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-slate-400 text-xs">HI:</span>
                <span className="font-bold text-amber-400">{highScore}</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 text-xs">PTS:</span>
                <span className="font-bold text-emerald-400">{score}</span>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < lives ? 'text-red-500' : 'text-slate-700'}`}>
                    ❤️
                  </span>
                ))}
              </div>
              <button
                onClick={toggleSound}
                className="text-slate-400 hover:text-white transition-colors"
                title={soundEnabled ? 'Mute sound' : 'Unmute sound'}
              >
                {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Canvas container */}
          <div className="relative mx-auto max-w-[360px] aspect-[3/4] bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-800 shadow-inner">
            <canvas ref={canvasRef} width={360} height={480} className="w-full h-full block cursor-crosshair touch-none" />

            {/* Game Over Overlay */}
            {isGameOver && (
              <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm animate-in fade-in">
                <span className="text-4xl mb-2">💥</span>
                <h3 className="font-mono text-2xl font-bold text-red-500 mb-1">FATAL ERROR 404</h3>
                <p className="text-xs text-slate-400 mb-4 max-w-xs">
                  A rogue bug crashed the system! But you scored{' '}
                  <strong className="text-amber-400">{score} points</strong>.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={startGame}
                    className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition-all font-mono"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Play Again
                  </button>
                  <button
                    onClick={() => setMode('normal')}
                    className="px-4 py-2.5 bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl hover:bg-slate-700 transition-all font-mono"
                  >
                    Exit Game
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile on-screen controls */}
          <div className="mt-4 flex sm:hidden items-center justify-center gap-4">
            <button
              onMouseDown={() => (playerXRef.current = Math.max(0, playerXRef.current - 40))}
              onTouchStart={() => (playerXRef.current = Math.max(0, playerXRef.current - 40))}
              className="px-6 py-3 bg-slate-800 active:bg-slate-700 rounded-xl text-lg font-bold font-mono text-slate-200"
            >
              ◀ LEFT
            </button>
            <button
              onMouseDown={() => (playerXRef.current = Math.min(300, playerXRef.current + 40))}
              onTouchStart={() => (playerXRef.current = Math.min(300, playerXRef.current + 40))}
              className="px-6 py-3 bg-slate-800 active:bg-slate-700 rounded-xl text-lg font-bold font-mono text-slate-200"
            >
              RIGHT ▶
            </button>
          </div>

          <p className="text-[11px] text-slate-500 font-mono mt-4">
            💡 Controls: Use <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">←</kbd>{' '}
            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">→</kbd> or Drag with mouse / touch.
          </p>
        </div>
      )}

      {/* --- MODE 3: HACKER CONSOLE / EASTER EGG TERMINAL --- */}
      {mode === 'terminal' && (
        <div className="bg-black border border-emerald-900/60 rounded-3xl p-6 sm:p-8 font-mono text-left shadow-2xl text-emerald-400">
          <div className="flex items-center justify-between border-b border-emerald-950 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-500 inline-block" />
              <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
              <span className="text-xs text-emerald-600 font-bold ml-2">root@techselect:~# 404_recovery</span>
            </div>
            <button
              onClick={() => setMode('normal')}
              className="text-xs text-emerald-600 hover:text-emerald-300 transition-colors"
            >
              [Close Terminal]
            </button>
          </div>

          {/* Terminal log output */}
          <div className="h-64 overflow-y-auto space-y-1 text-xs mb-4 scrollbar-thin scrollbar-thumb-emerald-950">
            {terminalHistory.map((line, i) => (
              <div key={i} className="leading-relaxed opacity-95">
                {line}
              </div>
            ))}
          </div>

          {/* Terminal input form */}
          <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 border-t border-emerald-950 pt-3">
            <span className="text-emerald-500 font-bold text-sm">&gt;</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type help, excuse, joke, deals, coffee..."
              autoFocus
              className="flex-1 bg-transparent border-none text-emerald-400 text-xs focus:outline-none focus:ring-0 placeholder:text-emerald-900"
            />
            <button type="submit" className="text-xs text-emerald-500 hover:text-emerald-300 font-bold">
              [ENTER]
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
