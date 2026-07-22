import type { MetadataRoute } from 'next'
import { CATEGORIES, SAMPLE_PRODUCTS } from '@/lib/categories'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lostdev.tech'
  const currentDate = new Date().toISOString()

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/editorial-guidelines`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/how-we-test`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  // Category & Subcategory routes
  CATEGORIES.forEach((cat) => {
    routes.push({
      url: `${baseUrl}/category/${cat.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    cat.subcategories.forEach((sub) => {
      routes.push({
        url: `${baseUrl}/category/${cat.slug}/${sub.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })

  // Product routes
  SAMPLE_PRODUCTS.forEach((product) => {
    routes.push({
      url: `${baseUrl}${product.href}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  // Article buying guide routes
  const articles = [
    '/article/best-wireless-earbuds-budget',
    '/article/best-coding-monitors-under-15000-india',
    '/article/best-mechanical-keyboards-coding-india',
    '/article/best-budget-noise-cancelling-headphones-india',
  ]

  articles.forEach((articleHref) => {
    routes.push({
      url: `${baseUrl}${articleHref}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  return routes
}
