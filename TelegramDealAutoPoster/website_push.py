"""
website_push.py — Push posted deals to the TechSelect website (live /sales feed).

Sends an HTTP POST to the Next.js webhook (WEBSITE_WEBHOOK_URL) immediately
after a deal is successfully posted to the target Telegram channels.

Design goals:
  * Non-blocking  — 5s hard timeout so a slow/ down website never stalls deal posting.
  * Non-fatal     — every failure is logged and swallowed; the bot keeps running.
  * Lazy httpx    — imported inside the function so a missing `httpx` dependency
                    only breaks the website push, not the whole bot process.
  * Self-config   — reads WEBSITE_WEBHOOK_URL / WEBSITE_WEBHOOK_SECRET from your
                    config.py if present, otherwise falls back to env vars directly.

Expected payload (matches app/api/deals/route.ts on the website):
  {
    "asins":        ["B0XXXXX", ...],   # list[str]   — Amazon ASINs in the deal
    "text":         "...",              # str         — full (already tag-injected) deal text
    "source_title": "Channel Name",     # str         — where the deal came from
    "has_media":    true,               # bool        — did the original message have a photo?
    "posted_at":    1690000000          # float/int   — epoch SECONDS
  }

Integration (see WEBSITE_INTEGRATION.md):
  from website_push import push_deal_to_website
  ...
  if posted_targets:
      for asin in asins:
          dedup_record(asin)
      await push_deal_to_website(
          asins=list(asins),
          text=updated_text,
          source_title=chat_title,
          has_media=bool(event.message.media),
          posted_at=time.time(),
      )
"""

from __future__ import annotations

import logging
import os
import time

logger = logging.getLogger(__name__)


def _resolve_config() -> tuple[str, str]:
    """Return (webhook_url, webhook_secret).

    Prefers values from your config.py module (the project convention) and
    falls back to raw environment variables so this file is usable standalone.
    """
    webhook_url = ""
    webhook_secret = ""

    # 1. Try the project config module first (matches the rest of the bot).
    try:
        import config  # type: ignore

        webhook_url = getattr(config, "WEBSITE_WEBHOOK_URL", "") or ""
        webhook_secret = getattr(config, "WEBSITE_WEBHOOK_SECRET", "") or ""
    except Exception:
        # config.py not importable in this context — env fallback below.
        pass

    # 2. Env-var fallback (works even before config.py is updated).
    if not webhook_url:
        webhook_url = os.getenv("WEBSITE_WEBHOOK_URL", "").strip()
    if not webhook_secret:
        webhook_secret = os.getenv("WEBSITE_WEBHOOK_SECRET", "").strip()

    return webhook_url, webhook_secret


async def push_deal_to_website(
    *,
    asins: list[str],
    text: str,
    source_title: str,
    has_media: bool,
    posted_at: float | None = None,
) -> bool:
    """POST one deal to the TechSelect website webhook.

    Returns True on HTTP 200, False otherwise (including when disabled/errored).
    NEVER raises — safe to await inline inside the deal pipeline.
    """
    if posted_at is None:
        posted_at = time.time()

    webhook_url, webhook_secret = _resolve_config()

    # Feature disabled — not an error, just nothing to do.
    if not webhook_url:
        logger.debug("Website push skipped: WEBSITE_WEBHOOK_URL not set.")
        return False

    if not asins:
        logger.debug("Website push skipped: no ASINs in payload.")
        return False

    payload = {
        "asins": asins,
        "text": text,
        "source_title": source_title,
        "has_media": bool(has_media),
        "posted_at": float(posted_at),
    }
    headers = {"x-webhook-secret": webhook_secret, "Content-Type": "application/json"}

    try:
        import httpx  # lazy import: keeps the bot alive if httpx is missing
    except ImportError:
        logger.error(
            "Website push failed: `httpx` is not installed. "
            "Install it with:  pip install httpx"
        )
        return False

    try:
        async with httpx.AsyncClient(timeout=5.0) as http:
            resp = await http.post(webhook_url, json=payload, headers=headers)

        if resp.status_code == 200:
            logger.info("Pushed deal to website ✓ — ASINs=%s", asins)
            return True

        logger.warning(
            "Website webhook returned HTTP %d: %s",
            resp.status_code,
            resp.text[:200],
        )
        return False
    except Exception as exc:  # noqa: BLE001 — must never break deal posting
        logger.error("Failed to push deal to website: %s", exc)
        return False


async def _selftest() -> None:
    """Quick manual smoke test: `python -c 'import asyncio,website_push as w; asyncio.run(w._selftest())'`"""
    ok = await push_deal_to_website(
        asins=["B0TEST12345"],
        text="⚡ Test deal — integration smoke test (safe to ignore)",
        source_title="SelfTest",
        has_media=False,
    )
    print("Website push self-test result:", "OK" if ok else "FAILED (see logs above)")


if __name__ == "__main__":
    import asyncio

    asyncio.run(_selftest())
