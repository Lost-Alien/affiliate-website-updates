import test from 'node:test'
import assert from 'node:assert/strict'
import { getAmazonAffiliateUrl, AMAZON_TAG, AMAZON_DOMAIN } from '../lib/affiliate.ts'
import { dedupeBy } from '../lib/dedup.ts'
import { CATEGORIES } from '../lib/categories.ts'
import { ARTICLES_DATA } from '../lib/articles.ts'

test('1. getAmazonAffiliateUrl generates default home store URL with partner tag', () => {
  const emptyUrl = getAmazonAffiliateUrl()
  const whitespaceUrl = getAmazonAffiliateUrl('   ')

  assert.equal(emptyUrl, `${AMAZON_DOMAIN}/?tag=${AMAZON_TAG}`)
  assert.equal(whitespaceUrl, `${AMAZON_DOMAIN}/?tag=${AMAZON_TAG}`)
  assert.ok(emptyUrl.includes(`tag=${AMAZON_TAG}`))
})

test('2. getAmazonAffiliateUrl formats direct 10-char ASIN links per Amazon Operating Agreement', () => {
  const asin1 = 'B0BSHF7WHW'
  const asin2 = 'B0CX23VFP8'

  const url1 = getAmazonAffiliateUrl(asin1)
  const url2 = getAmazonAffiliateUrl(asin2)

  assert.equal(url1, `https://www.amazon.in/dp/${asin1}?tag=${AMAZON_TAG}`)
  assert.equal(url2, `https://www.amazon.in/dp/${asin2}?tag=${AMAZON_TAG}`)
  assert.match(url1, /\/dp\/[A-Z0-9]{10}\?tag=techstor0caaf-21/)
})

test('3. getAmazonAffiliateUrl encodes query keywords properly with affiliate tag for search fallback', () => {
  const query = 'Samsung Galaxy S25 Ultra 5G'
  const url = getAmazonAffiliateUrl(query)

  assert.equal(
    url,
    `https://www.amazon.in/s?k=Samsung%20Galaxy%20S25%20Ultra%205G&tag=${AMAZON_TAG}`
  )
  assert.ok(url.includes(`tag=${AMAZON_TAG}`))
})

test('4. getAmazonAffiliateUrl updates or appends tag to full Amazon URLs', () => {
  const rawUrl = 'https://www.amazon.in/dp/B0CX23VFP8?th=1'
  const taggedUrl = getAmazonAffiliateUrl(rawUrl)

  const parsed = new URL(taggedUrl)
  assert.equal(parsed.hostname, 'www.amazon.in')
  assert.equal(parsed.pathname, '/dp/B0CX23VFP8')
  assert.equal(parsed.searchParams.get('tag'), AMAZON_TAG)
  assert.equal(parsed.searchParams.get('th'), '1')
})

test('5. dedupeBy preserves first occurrence and removes duplicates', () => {
  const items = [
    { id: '1', name: 'Product A', price: 100 },
    { id: '2', name: 'Product B', price: 200 },
    { id: '1', name: 'Product A (Duplicate)', price: 150 },
    { id: '3', name: 'Product C', price: 300 },
  ]

  const deduped = dedupeBy(items, (item) => item.id)

  assert.equal(deduped.length, 3)
  assert.deepEqual(
    deduped.map((d) => d.id),
    ['1', '2', '3']
  )
  assert.equal(deduped[0].name, 'Product A') // First occurrence preserved
})

test('6. dedupeBy handles edge cases (empty array, empty keys, no duplicates)', () => {
  const emptyResult = dedupeBy([], (item: { id: string }) => item.id)
  assert.deepEqual(emptyResult, [])

  const uniqueItems = [
    { id: 'a', val: 1 },
    { id: 'b', val: 2 },
  ]
  const uniqueResult = dedupeBy(uniqueItems, (i) => i.id)
  assert.equal(uniqueResult.length, 2)
})

test('7. Category taxonomy structure has required fields and valid slugs', () => {
  assert.ok(CATEGORIES.length > 0, 'Categories array must not be empty')

  for (const cat of CATEGORIES) {
    assert.ok(cat.name && typeof cat.name === 'string', 'Category must have name')
    assert.ok(cat.slug && typeof cat.slug === 'string', 'Category must have slug')
    assert.ok(
      cat.description && typeof cat.description === 'string',
      'Category must have description'
    )
    assert.ok(typeof cat.active === 'boolean', 'Category must have active flag')
    assert.ok(Array.isArray(cat.subcategories), 'Category must have subcategories array')
  }
})

test('8. Active categories contain at least one active subcategory with valid count >= 0', () => {
  const activeCategories = CATEGORIES.filter((c) => c.active)
  assert.ok(activeCategories.length > 0, 'There must be active categories')

  for (const cat of activeCategories) {
    const activeSubcats = cat.subcategories.filter((s) => s.active)
    assert.ok(
      activeSubcats.length > 0,
      `Active category "${cat.name}" must contain at least one active subcategory`
    )

    for (const sub of activeSubcats) {
      assert.ok(sub.count >= 0, `Subcategory "${sub.name}" count must be >= 0`)
      assert.ok(sub.slug.length > 0, `Subcategory "${sub.name}" must have valid slug`)
    }
  }
})

test('9. Articles dataset integrity (valid title, excerpt, categorySlug, datePublished)', () => {
  assert.ok(ARTICLES_DATA.length > 0, 'Articles dataset must not be empty')

  for (const article of ARTICLES_DATA) {
    assert.ok(article.title.trim().length > 0, 'Article must have non-empty title')
    assert.ok(article.excerpt.trim().length > 0, 'Article must have non-empty excerpt')
    assert.ok(article.href.startsWith('/article/'), 'Article href must start with /article/')
    assert.ok(article.categorySlug.length > 0, 'Article must have valid categorySlug')
    assert.match(
      article.datePublished,
      /^\d{4}-\d{2}-\d{2}$/,
      'Article datePublished must be in YYYY-MM-DD format'
    )
  }
})

test('10. Amazon Associates compliance constants and tag verification', () => {
  assert.equal(
    AMAZON_TAG,
    'techstor0caaf-21',
    'AMAZON_TAG must strictly match approved partner tag'
  )
  assert.equal(
    AMAZON_DOMAIN,
    'https://www.amazon.in',
    'AMAZON_DOMAIN must point to Amazon India'
  )
})
