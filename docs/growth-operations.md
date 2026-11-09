# TechSelect growth operations

## Measurement

The existing Vercel page analytics remain installed. The first-party collector additionally records aggregate page views, affiliate clicks, and community clicks in the existing Redis database, without a paid analytics subscription. It does not record orders, commission, unique people, raw referrers, query strings, or visitor IP addresses. A rotating hashed IP bucket limits requests; it expires after one minute. Daily aggregate counts expire after 90 days. These are directional event counts, not audited conversions; browser blocking, bots, and repeat clicks can affect them.

Attribution uses a source bucket stored for the browser tab's session. Use `utm_source=whatsapp`, `telegram`, `pinterest`, or `x` on links to TechSelect. Query parameters and source labels are not appended to Amazon affiliate links. Do Not Track is respected. The report endpoint requires the existing webhook secret as a Bearer credential.

After deploying, read the last seven days with:

```powershell
python scripts/growth_report.py --days 7
```

For a local server, add `--site http://localhost:3000`. The script reads the secret from ignored `.env.local` and never prints it. Collection begins only after deployment. Compare affiliate click counts with actual Amazon reporting; never call a click a purchase.

## Pinterest

Connect `https://techselect.blog/pinterest.xml` to the Pinterest business account's RSS auto-publishing option after claiming `techselect.blog`. This requires account access and a one-time setup in Pinterest. The feed includes existing article images, same-domain landing links, disclosure, and Pinterest UTM attribution. Existing assets are used; no generated product imagery or new testing claims are introduced.

The general `/feed.xml` also includes article images and known catalogue product images. Deals with no matching product image are omitted from the dedicated Pinterest feed. No Pinterest posts have been sent by this code change.

## Deal integrity and attribution

Deal cards derive their headline and coupon conditions from the matching ASIN URL inside a multi-product message. Unidentifiable headlines use an ASIN fallback rather than borrowing another product's title. The homepage selects tech-related titles; `/sales` retains all categories. This is keyword selection, so classification will need occasional review.

The Telegram pipeline rotates `onamztechst01-21` and `techstor0caaf-21`; website buttons still use `techstor0caaf-21`. Ownership and the intended split should be confirmed before changing that behaviour. Collector counts include the destination tag to support that audit.

## Initial baseline

Search Console, read on 1 November 2026:

| Period | Search impressions | Search clicks | Average position |
| --- | ---: | ---: | ---: |
| 4 September–1 October | 197 | 0 | 42.8 |
| 2–29 October | 550 | 2 | 25.0 |

These are Google Search metrics only. Prioritise the headphone guide, Lloyd AC review, robot vacuum guide, ASUS G16 product page, and MacBook review. Buyer summaries have been added without adding new benchmark claims or changing existing affiliate tags.

## X engagement

The separate `x_commenter_techselect` project handles replies to people on X. Use it for useful tech discussion and buyer advice. Affiliate links, sales pitches, and calls to buy belong in a separate publishing workflow. Evaluate the commenter by reply quality and conversations started.

## Two-month operating plan

- Week 1: deploy and validate event collection; review multi-product cards and click destinations.
- Week 2: review search titles and query relevance on the five priority pages; connect Pinterest RSS.
- Weeks 3–4: publish two or three selected English text posts weekly through existing workflows, with one relevant destination per post and explicit source attribution.
- Month 2: repeat subjects and channels that bring useful visits and confirmed commission. Test paid placements individually only after obtaining actual quotes and setting a spending limit.

Monthly ceiling: up to ₹1,000 for placement experiments, up to ₹500 for essential operating costs, and ₹500 reserve. New publishing subscriptions: ₹0. No spend, recurring task, or external social publication is created by this implementation.
