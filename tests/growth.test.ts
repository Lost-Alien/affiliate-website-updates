import test from 'node:test'
import assert from 'node:assert/strict'
import { getDealContent, isTechDeal } from '../lib/deals.ts'
import { parseMeasurement } from '../lib/measurement.ts'
import { getAmazonItemDetails } from '../lib/amazon.ts'

test('multi-product messages keep each headline, coupon and ASIN together', () => {
  const text = 'Haier Refrigerator @19240\nhttps://www.amazon.in/dp/B0GP6VTQNB?tag=first-21\nApply 500 Coupon\nLoot : Godrej Refrigerator @21390\nhttps://www.amazon.in/dp/B0GL1MTBXZ?tag=second-21\nApply 1500 Coupon'
  assert.deepEqual(getDealContent(text, 'B0GP6VTQNB'), { title: 'Haier Refrigerator @19240', description: 'Apply 500 Coupon' })
  assert.deepEqual(getDealContent(text, 'B0GL1MTBXZ'), { title: 'Godrej Refrigerator @21390', description: 'Apply 1500 Coupon' })
  assert.equal(getDealContent(text, 'B000000000').title, 'Amazon deal · B000000000')
  assert.equal(getDealContent('Another product\nhttps://www.amazon.in/dp/B0GP6VTQNB', 'B000000000').title, 'Amazon deal · B000000000')
})

test('inline links and single-product messages work without displaying raw URLs', () => {
  assert.equal(getDealContent('Samsung Galaxy phone https://www.amazon.in/dp/B0GP6VTQNB?tag=a-21', 'B0GP6VTQNB').title, 'Samsung Galaxy phone')
  assert.equal(getDealContent('Samsung phone\nCheck latest price', 'B0GP6VTQNB').title, 'Samsung phone')
  assert.equal(getDealContent('80 https://www.amazon.in/dp/B0GP6VTQNB', 'B0GP6VTQNB').title, 'Amazon deal · B0GP6VTQNB')
})

test('tech selection excludes general household and grocery items', () => {
  assert.equal(isTechDeal('Samsung Galaxy Tab'), true)
  assert.equal(isTechDeal('TP-Link Tapo smart plug'), true)
  assert.equal(isTechDeal('Herbal tea combo'), false)
  assert.equal(isTechDeal('Stainless steel pet bowl'), false)
})

test('measurements reject raw query strings, arbitrary sources and invalid ASINs', () => {
  const valid = { event: 'affiliate_click', path: '/sales', source: 'whatsapp', asin: 'B0GP6VTQNB', tag: 'techstor0caaf-21' }
  assert.deepEqual(parseMeasurement(valid), valid)
  assert.equal(parseMeasurement({ ...valid, path: '/sales?email=private' }), null)
  assert.equal(parseMeasurement({ ...valid, source: 'unbounded-user-input' }), null)
  assert.equal(parseMeasurement({ ...valid, asin: 'not-an-asin' }), null)
  assert.equal(parseMeasurement({ ...valid, event: 'purchase' }), null)
})

test('concurrent Amazon token failures return a fallback to every caller', async (context) => {
  const fetchBefore = globalThis.fetch
  const errorBefore = console.error
  const idBefore = process.env.AMAZON_CLIENT_ID
  const secretBefore = process.env.AMAZON_CLIENT_SECRET
  context.after(() => {
    globalThis.fetch = fetchBefore
    console.error = errorBefore
    if (idBefore === undefined) delete process.env.AMAZON_CLIENT_ID
    else process.env.AMAZON_CLIENT_ID = idBefore
    if (secretBefore === undefined) delete process.env.AMAZON_CLIENT_SECRET
    else process.env.AMAZON_CLIENT_SECRET = secretBefore
  })
  process.env.AMAZON_CLIENT_ID = 'local-test'
  process.env.AMAZON_CLIENT_SECRET = 'local-test'
  let calls = 0
  globalThis.fetch = async () => {
    calls++
    await new Promise((resolve) => setTimeout(resolve, 10))
    throw new Error('Simulated unavailable token endpoint')
  }
  console.error = () => {}
  const results = await Promise.all([getAmazonItemDetails('B0GP6VTQNB'), getAmazonItemDetails('B0GL1MTBXZ')])
  assert.deepEqual(results, [null, null])
  assert.equal(calls, 1)
})
