# Bot → Website Integration Guide

This makes your AWS-hosted **TelegramDealAutoPoster** push every posted deal to
the TechSelect website live `/sales` feed (`https://techselect.blog/sales`).

The website side is **already deployed** (`app/api/deals/route.ts`, `app/sales`,
`lib/redis.ts`). You only need the 3 bot-side changes below — ~5 minutes.

---

## Files in this folder

| File | Purpose |
| :--- | :--- |
| `website_push.py` | **New standalone module** — drop into the bot folder as-is. Contains the async HTTP POST logic. Non-blocking, non-fatal, lazy `httpx` import. |
| `config_additions.py` | The 2 lines to **paste into your existing `config.py`** (do NOT replace config.py). |
| `.env.example` | The 2 env vars to **add to your bot's `.env`**. |

---

## Step-by-step (on the AWS bot server)

### Step 1 — Install httpx (if not already present)
```bash
pip install httpx
```
> `website_push.py` imports httpx lazily, so if it's missing the bot still runs —
> only the website push stops working. Install it to enable the push.

### Step 2 — Drop in the new module
Copy `website_push.py` into the bot directory (next to `deal_listener.py`,
`config.py`).
```bash
cp website_push.py /path/to/TelegramDealAutoPoster/
```

### Step 3 — Add 2 lines to `config.py`
Open your existing `config.py` and paste these alongside the other
`os.getenv(...)` settings (the exact content of `config_additions.py`):

```python
# Website Integration — push live deals to techselect.blog/sales
WEBSITE_WEBHOOK_URL = os.getenv("WEBSITE_WEBHOOK_URL", "").strip()
WEBSITE_WEBHOOK_SECRET = os.getenv("WEBSITE_WEBHOOK_SECRET", "").strip()
```

### Step 4 — Add 2 vars to `.env`
Append to the bot's `.env` (the content of `.env.example`):

```bash
WEBSITE_WEBHOOK_URL=https://techselect.blog/api/deals
WEBSITE_WEBHOOK_SECRET=CHANGE_ME_to_a_strong_random_secret_must_match_website
```

> ⚠️ `WEBSITE_WEBHOOK_SECRET` **must match** the website's
> `.env.local` value (set a strong random secret — must match the website) today. The website's
> `app/api/deals/route.ts` returns **401** if they differ. **Rotate this to a
> strong random token** on both sides before going live.

### Step 5 — Wire the call into `deal_listener.py`
In your `deal_listener.py`, find the block that records dedup right after a
successful post (the plan located it around line 162):

```python
if posted_targets:
    for asin in asins:
        dedup_record(asin)
```

Add the import near the top of the file …

```python
from website_push import push_deal_to_website
```

… and extend that block to:

```python
if posted_targets:
    for asin in asins:
        dedup_record(asin)

    # NEW: push deal to TechSelect website live /sales feed
    import time as _time
    await push_deal_to_website(
        asins=list(asins),
        text=updated_text,
        source_title=chat_title,
        has_media=bool(event.message.media),
        posted_at=_time.time(),
    )
```

> The variable names (`posted_targets`, `asins`, `updated_text`, `chat_title`,
> `event`) come from your existing handler scope. If your names differ, map them
> to the real variables — the function just needs the deal's ASINs, final text,
> source channel title, media flag, and a timestamp.

### Step 6 — Restart the bot
```bash
# (use whatever process manager you use on AWS — systemd / pm2 / screen / tmux)
sudo systemctl restart telegram-deal-bot
# or:  pm2 restart deal_bot
```

### Step 7 — Smoke-test before going live
From the bot folder, verify the endpoint + secret work end-to-end:
```bash
python -c "import asyncio, website_push as w; asyncio.run(w._selftest())"
```
You should see `Website push self-test result: OK` and a test deal appear at
`techselect.blog/sales`.

Then post a real deal through your source channel and confirm it shows on the
website within seconds.

---

## How it works (contract)

```
deal_listener posts deal to TARGET_CHANNELS  (unchanged)
        │
        └─► await push_deal_to_website(asins=..., text=..., ...)
                    │  POST  https://techselect.blog/api/deals
                    │  Header: x-webhook-secret: <WEBSITE_WEBHOOK_SECRET>
                    ▼
            app/api/deals/route.ts
                    │  verify secret  → 401 if mismatch
                    │  build affiliateUrl = amazon.in/dp/<ASIN>?tag=techstor0caaf-21
                    │  dedup-merge with existing deals in Upstash Redis (50 cap, 7-day TTL)
                    │  revalidatePath('/sales')  → instant CDN refresh
                    ▼
            techselect.blog/sales  (live, SWR refresh)
```

Payload sent by the bot (keys match the website's `route.ts` exactly):
```json
{
  "asins": ["B0XXXXXXX"],
  "text": "⚡ full deal text (already tag-injected)",
  "source_title": "Deal Source Channel",
  "has_media": true,
  "posted_at": 1690000000.0
}
```

---

## Notes & caveats

- **Tag rotation:** the website's `route.ts` currently **hardcodes**
  `tag=techstor0caaf-21` and rebuilds the affiliate URL from the ASIN, so any
  tag rotation your bot performs is **not reflected** on the website CTA
  (the bot's rotated tags still apply to the Telegram posts). If you want the
  website to honor rotation, the website side would need to accept a `tag` field
  — a separate change.
- **Non-fatal by design:** if the website is down or the secret is wrong, the
  bot logs a warning/error and continues posting to Telegram normally. No deal
  is ever lost because of the website push.
- **Timeout:** 5 seconds. Tunable in `website_push.py` (`timeout=5.0`).
