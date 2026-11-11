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

## WhatsApp deal publishing

The two channel publishers are independent, continuously running workers. Their local configuration points to two distinct WhatsApp destinations. Neither of the existing bot's source chats is the new relay's destination. The public invite URLs on `/sales` are separate identifiers from the posting JIDs, so confirm the channel names in WhatsApp before changing a route.

| Publisher | Job | Delivery behavior |
| --- | --- | --- |
| `TelegramWhatsAppRelay` | `@dealbeeofficial` and `@TrickXpert` → one WhatsApp channel. Rewrites links and forwards text, photos and videos within the configured media limit. | Telegram live updates plus 30-second catch-up. SQLite outbox, stable send IDs, and WhatsApp server acknowledgements. |
| `WebWhatsapp automation` | Two configured WhatsApp source channels → a different WhatsApp channel. Rewrites affiliate links and forwards text. | WhatsApp Web through Chromium, with a disk-backed JSON queue and five delivery attempts. No source-history catch-up in the message listener. |

Use the new relay for Telegram-origin deals and keep the existing worker for its WhatsApp sources. Both use the same configured Amazon tag. The relay preserves Telegram's hidden links and Flipkart product and variant IDs. It skips expired deals based on source age and skips posts whose short links return HTTP 404 or 410. Uncertain conversion failures go through retry. The existing bot can forward the original Flipkart message when conversion returns no text, which can preserve another publisher's affiliate link. Either worker can duplicate a publication after an ambiguous send.

Both projects include systemd service files for EC2. Their configured RAM ceilings are 192 MiB for the browser-free relay and 512 MiB for the Chromium worker. These are service limits. A scheduled job suits a finite task such as retrying selected failures. Channel listeners need an always-on process and persistent credentials and queue storage. The Next.js site receives Telegram deals through its existing webhook and links to the WhatsApp channels from `/sales`.

### Local relay setup

Keep the private checkout at `Downloads/Dev_WA_Boot_hub/TelegramWhatsAppRelay` and its `env` file beside it at `Downloads/Dev_WA_Boot_hub/env`. From the TechSelect checkout, validate the environment with Node.js 22.13 or later:

```powershell
./scripts/whatsapp-relay.ps1
```

The check prints a configuration summary without revealing credentials or connecting to either service. `-RelayPath` and `-EnvPath` override the paths. If relay variables already exist in the shell, Node gives them precedence over values in the file.

Run `npm ci` in the relay checkout to install its dependencies. `./scripts/whatsapp-relay.ps1 -Start` launches the local worker and binds its unauthenticated pairing dashboard to `127.0.0.1` on the configured port. Use this mode with a test destination or when this machine is the only active publisher for the configured route. Pair Telegram and WhatsApp once. The relay reuses its SQLite session database on subsequent starts. The relay checkout's `operations/relay-notes.md` documents session storage, Flipkart redirect patterns and the read-only WhatsApp test-channel preview.

## Two-month operating plan

- Week 1: deploy and validate event collection; review multi-product cards and click destinations.
- Week 2: review search titles and query relevance on the five priority pages; connect Pinterest RSS.
- Weeks 3–4: publish two or three selected English text posts weekly through existing workflows, with one relevant destination per post and explicit source attribution.
- Month 2: repeat subjects and channels that bring useful visits and confirmed commission. Test paid placements individually only after obtaining actual quotes and setting a spending limit.

Monthly ceiling: up to ₹1,000 for placement experiments, up to ₹500 for essential operating costs, and ₹500 reserve. New publishing subscriptions: ₹0. No spend, recurring task, or external social publication is created by this implementation.
