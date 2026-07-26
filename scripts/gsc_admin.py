#!/usr/bin/env python3
"""
Google Search Console CLI Admin Tool for techselect.blog
Uses the service account JSON key to query Search Console API v1.
"""

import os
import sys
from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_FILE = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'techselect-search-console-548980ba10cc.json')
SCOPES = ['https://www.googleapis.com/auth/webmasters']

def get_service():
    if not os.path.exists(KEY_FILE):
        print(f"Error: Key file not found at {KEY_FILE}")
        sys.exit(1)
    
    credentials = service_account.Credentials.from_service_account_file(
        KEY_FILE, scopes=SCOPES
    )
    return build('searchconsole', 'v1', credentials=credentials)

def check_all(submit_sitemap=False):
    service = get_service()
    print("=== Google Search Console API Status Check ===")
    
    # 1. List Verified Properties
    print("\n1. Verified Properties:")
    try:
        sites = service.sites().list().execute()
        site_entries = sites.get('siteEntry', [])
        if not site_entries:
            print("  No sites found.")
            return
        for s in site_entries:
            print(f"  • {s['siteUrl']} (Permission: {s['permissionLevel']})")
    except Exception as e:
        print(f"  API Error listing sites: {e}")
        return

    target_site = site_entries[0]['siteUrl']

    # Submit Sitemap if requested
    if submit_sitemap:
        sitemap_url = "https://techselect.blog/sitemap.xml"
        print(f"\nSubmitting sitemap '{sitemap_url}' to Google Search Console...")
        try:
            service.sitemaps().submit(siteUrl=target_site, feedpath=sitemap_url).execute()
            print("  ✅ Sitemap successfully submitted to Google Search Console!")
        except Exception as e:
            print(f"  API Error submitting sitemap: {e}")

    # 2. List Sitemaps
    print(f"\n2. Sitemaps for '{target_site}':")
    try:
        sitemaps = service.sitemaps().list(siteUrl=target_site).execute()
        entries = sitemaps.get('sitemap', [])
        if not entries:
            print("  No sitemaps submitted yet via Search Console API.")
        else:
            for sm in entries:
                print(f"  • Path: {sm.get('path')} | Submitted: {sm.get('lastSubmitted')} | Processed: {sm.get('lastDownloaded')} | Errors: {sm.get('errors', 0)}")
    except Exception as e:
        print(f"  API Error checking sitemaps: {e}")

if __name__ == '__main__':
    do_submit = '--submit-sitemap' in sys.argv
    check_all(submit_sitemap=do_submit)
