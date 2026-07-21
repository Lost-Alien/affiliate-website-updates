'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'
import { CATEGORIES } from '@/lib/categories'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
  }

  // Filter only active categories and active subcategories
  const navCategories = CATEGORIES.filter((cat) => cat.active).map((cat) => ({
    ...cat,
    subcategories: cat.subcategories.filter((sub) => sub.active),
  }))

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="TechSelect"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navCategories.map((category) => (
              <div
                key={category.slug}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.slug)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={`/category/${category.slug}`}
                  className="flex items-center gap-1.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category.name}
                  {category.subcategories.length > 0 && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {category.subcategories.length > 0 && activeDropdown === category.slug && (
                  <div className="absolute left-0 top-full pt-1 w-56 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="bg-popover border border-border rounded-lg shadow-lg p-2 space-y-0.5">
                      <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50 mb-1">
                        {category.name} Categories
                      </div>
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/category/${category.slug}/${sub.slug}`}
                          className="block px-3 py-2 text-sm font-medium text-popover-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search reviews, guides, and comparisons..."
                className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background max-h-[calc(100vh-4rem)] overflow-y-auto" aria-label="Mobile navigation">
          <div className="px-4 py-4 space-y-2">
            {navCategories.map((category) => {
              const isExpanded = expandedMobileCategory === category.slug
              return (
                <div key={category.slug} className="border-b border-border/40 pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/category/${category.slug}`}
                      className="px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                    {category.subcategories.length > 0 && (
                      <button
                        onClick={() =>
                          setExpandedMobileCategory(isExpanded ? null : category.slug)
                        }
                        className="p-2 text-muted-foreground hover:text-foreground"
                        aria-label={`Toggle ${category.name} subcategories`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {isExpanded && category.subcategories.length > 0 && (
                    <div className="pl-6 space-y-1 mt-1 border-l-2 border-border ml-3">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/category/${category.slug}/${sub.slug}`}
                          className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
