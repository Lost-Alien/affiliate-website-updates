# ---------------------------------------------------------------------------
# config.py ADDITIONS  —  paste these 2 lines into your existing config.py
# (anywhere alongside the other os.getenv(...) settings).
# They read from environment variables so the bot picks up the values from .env
# without code changes. website_push.py also reads these as a fallback.
# ---------------------------------------------------------------------------

# Website Integration — push live deals to techselect.blog/sales
WEBSITE_WEBHOOK_URL = os.getenv("WEBSITE_WEBHOOK_URL", "").strip()
WEBSITE_WEBHOOK_SECRET = os.getenv("WEBSITE_WEBHOOK_SECRET", "").strip()
