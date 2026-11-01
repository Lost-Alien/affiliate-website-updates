import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { createEditorialProductSchema } from '../lib/product-schema.ts'

test('editorial products use the existing review score without seller offers or fake aggregates', () => {
  const schema = createEditorialProductSchema({
    '@context': 'https://schema.org', '@type': 'Product', name: 'Example headphones',
    offers: { '@type': 'Offer', priceCurrency: 'INR' },
    aggregateRating: { reviewCount: 1, ratingValue: 9.1 },
  }, { ratingValue: 9.1, authorName: 'Dev Kumar Sharma', authorType: 'Person', url: 'https://techselect.blog/products/example' })
  assert.equal('offers' in schema, false)
  assert.equal('aggregateRating' in schema, false)
  assert.equal(schema.review.reviewRating.ratingValue, 9.1)
  assert.equal(schema.review.reviewRating.bestRating, 10)
  assert.equal(schema.review.author.name, 'Dev Kumar Sharma')
  assert.equal(schema['@type'], 'Product')
})

test('invalid editorial scores cannot silently become structured data', () => {
  assert.throws(() => createEditorialProductSchema({ name: 'Example' }, { ratingValue: NaN, authorName: 'Editor', authorType: 'Person', url: 'https://techselect.blog/products/example' }))
})

test('every product page publishes an editorial schema using its visible score', () => {
  const root = new URL('../app/products/', import.meta.url)
  for (const slug of readdirSync(root)) {
    const source = readFileSync(new URL(`${slug}/page.tsx`, root), 'utf8')
    assert.ok(source.includes('createEditorialProductSchema(productSchema,'), `${slug}: missing editorial schema`)
    assert.ok(!/\boffers\s*:/.test(source), `${slug}: unexpected seller offer`)
    assert.ok(!/\baggregateRating\s*:/.test(source), `${slug}: unexpected aggregate`)
    const visible = source.match(/<span className="text-2xl font-bold">([\d.]+)<\/span>/)?.[1]
      || source.match(/([\d.]+)\s*\/\s*10/)?.[1]
    const structured = source.match(/"?ratingValue"?:\s*([\d.]+)/)?.[1]
    assert.equal(Number(structured), Number(visible), `${slug}: structured score differs from visible review`)
    const byline = source.match(/Reviewed by\s*<span[^>]*>([^<]+)/)?.[1]
    const author = source.match(/"authorName":\s*"([^"]+)"/)?.[1]
    if (byline) assert.equal(author, byline, `${slug}: reviewer differs from visible byline`)
  }
})
