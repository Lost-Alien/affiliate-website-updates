"""Read aggregate website events without printing the reporting credential."""
import argparse
import json
from collections import Counter
from pathlib import Path

import requests
from dotenv import dotenv_values


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--days', type=int, default=7)
    parser.add_argument('--site', default='https://techselect.blog')
    args = parser.parse_args()
    config = dotenv_values(Path(__file__).resolve().parents[1] / '.env.local')
    secret = config.get('WEBSITE_WEBHOOK_SECRET')
    if not secret:
        raise SystemExit('WEBSITE_WEBHOOK_SECRET is missing from .env.local')
    response = requests.get(args.site.rstrip('/') + '/api/reports',
                            params={'days': args.days},
                            headers={'Authorization': 'Bearer ' + secret}, timeout=20)
    if not response.ok:
        raise SystemExit(f'Report request failed: HTTP {response.status_code}')
    data = response.json()
    totals, sources, pages = Counter(), Counter(), Counter()
    for day in data['days']:
        for key, count in day['counts'].items():
            event, path, source, asin, tag = key.split('|')
            totals[event] += int(count)
            sources[f'{source}: {event}'] += int(count)
            if event == 'affiliate_click':
                pages[path] += int(count)
    print(json.dumps({'note': data['description'], 'totals': totals,
                      'sources': sources, 'affiliate_clicks_by_page': pages}, indent=2))


if __name__ == '__main__':
    main()
