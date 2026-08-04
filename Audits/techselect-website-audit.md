# TechSelect.blog — Website Audit Report

**Prepared for:** TechSelect India
**Site reviewed:** https://techselect.blog
**Date:** August 3, 2026
**Method:** Live inspection of homepage, product pages, article pages, category/subcategory pages, static pages, and footer links — HTML, metadata, and content structure verified directly.

> **Note on scope:** Everything below marked as a confirmed bug was directly verified in the site's code/output. Pure visual polish (exact color contrast, spacing rhythm) is given as best-practice guidance rather than pixel-level critique, since this audit was done from page content/structure rather than a rendered screenshot.

---

## 1. Critical Flaws & Immediate Fixes

### A. Social share buttons share the homepage, not the article
On every article page (verified on `/article/samsung-galaxy-s26-plus-review`), the X/LinkedIn/Pinterest/WhatsApp/Facebook share links all encode `url=https://techselect.blog` instead of the article's own URL. Every reader who shares a review is unknowingly promoting the homepage instead of that review.

**Fix:** pass the resolved canonical URL into the share component instead of a hardcoded domain string.
```jsx
const pageUrl = `https://techselect.blog${usePathname()}`;
<a href={`https://x.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${...}`}>
```

### B. `og:url` hardcoded to the homepage on static/category pages
Confirmed on `/about`, `/contact`, `/category/audio`, `/category/monitors`, and `/category/monitors/gaming` — every one declares `og:url: https://techselect.blog`, not its own URL. Since Facebook/LinkedIn dedupe social engagement by `og:url`, shares of these pages get attributed to the homepage. Add a `<link rel="canonical">` and a page-specific `og:url` generated from the route — never a hardcoded string.

### C. Twitter Card metadata doesn't inherit page content
On the RTX 5070 Ti review, `og:title`/`og:description` are correctly product-specific, but `twitter:title`/`twitter:description` fall back to generic sitewide copy. This pattern repeats on every page checked — it's a template bug. Anyone sharing a review on X sees the homepage blurb, not the review. Make sure the `twitter` metadata block mirrors the same dynamic values as `openGraph`, not a static default.

### D. Live, indexed category pages with zero relevant content
`/category/monitors` has full unique SEO metadata but shows a MacBook, a gaming laptop, and headphones under "Recommended Buying Guides" — none of which are monitors — with no disclaimer. Subcategory pages like `/category/monitors/gaming` handle this correctly with an honest "No products listed in this subcategory yet" message.

**Fix:** apply that same empty-state pattern one level up at the parent category, and/or `noindex` these pages until populated with real content.

### E. Inconsistent navigation across the site
- Homepage header nav: Audio, Computers, Mobiles, Smart Home, Wearables (5 items)
- Category-page header nav: adds Monitors, Home Office (7 items)
- Homepage footer "Categories" widget: Audio, Computers, Mobiles, Smart Home (Wearables missing)
- Category-page footer widget: Audio, Computers, Monitors, Wearables, Home Office (Mobiles, Smart Home missing)

**Fix:** define the category list once (a single array/CMS collection) and render both the header nav and footer widget from that same source everywhere.

### F. Two different page templates — some pages lose the header/footer entirely
`/about`, `/contact`, and `/how-we-test` render with no site header (logo/nav) and no footer — just a breadcrumb and a "← Back to Home" link. Users on these pages can't browse categories or reach legal pages without returning to the homepage first. Likely affects Privacy, Terms, Disclaimer, Cookies, and Editorial Guidelines too — audit every static route.

**Fix:** ensure every route is wrapped in the shared `Layout`/`Header`/`Footer` component; find where it's being skipped.

### G. "Canva Link Hub" exposed in primary footer navigation
Listed under "Company" next to About Us / Contact / Editorial Guidelines, linking to a bare external Canva "linktree"-style page. Looks like a leftover test artifact — exposes the build tool, breaks brand consistency, and is inconsistently present across footers (confirming bug E).

**Fix:** remove from primary nav; put social icons directly in your own footer if needed.

### H. Sloppy image filenames
The RTX 5070 Ti review serves images as `Rtx 5070ti Real Img.jpg` and `Benchmark 2.png` — spaces and inconsistent casing get percent-encoded in URLs and hurt image SEO.

**Fix:** rename to descriptive kebab-case, e.g. `rtx-5070-ti-test-bench.jpg`, `rtx-5070-ti-benchmark-1.png`.

### I. Duplicate contact channels
On `/contact`, "General inquiries" and "Press Inquiries" both list the identical `support@techselect.blog` address — reads as unfinished placeholder copy.

**Fix:** use a distinct alias for press, or merge into a single contact block.

### J. `og:image` fallback is an SVG stretched to raster dimensions
About/Contact/How-We-Test/category pages use `icon.svg` as `og:image` while still declaring `1200×630` dimensions. Social crawlers don't reliably render SVG previews, and a square icon force-fit into that frame will look broken.

**Fix:** generate a real 1200×630 PNG/JPG social card for these page types.

---

## 2. UI/UX Improvements

- **The homepage repeats itself.** "Top Picks for 2026" and "Top-Rated Product Reviews" further down show the *exact same first four products* (GIGABYTE RTX 5070 Ti, ASUS ROG Strix G16, MacBook Pro, Bose QuietComfort). Make the second section genuinely different (e.g. "most recently tested") or cut it.
- **One long, mixed-category grid is hard to scan.** "Top Picks for 2026" interleaves a GPU, a laptop, headphones, phones, an AC, and a robot vacuum with no grouping. Consider a tabbed/filterable grid ("All / Audio / Computers / Mobiles / Smart Home").
- **Dead-end categories hurt trust.** Landing on Monitors or Home Office expecting monitor reviews and getting a MacBook instead undercuts confidence, even though the actual reviews are well-written. Hide unfinished categories from primary nav until populated, or turn the empty state into a lead-gen moment ("Coming soon — notify me").
- **Persistent navigation matters.** The About/Contact template's missing header/footer breaks the sense of being on the same site — a classic sign of pages built somewhat independently rather than from one shared shell.
- **Trust-page polish reflects on trust content.** This is an affiliate review site, so E-E-A-T (Experience, Expertise, Authoritativeness, Trust) matters a lot. `/how-we-test` is genuinely strong (specific measurable criteria, testing duration, lab description) — don't undercut that credibility with a contact page that has two "different" channels pointing at one inbox, or nav that dead-ends.
- **Card CTA consistency is good — keep it.** Product cards correctly pair a primary "Check Price on Amazon" with a secondary "Full Review" link. Enforce that exact pattern as new categories are added.

---

## 3. Performance, SEO & Responsiveness

### Performance
- The `next-size-adjust` meta artifact confirms the site runs on **Next.js** with `next/font` — good foundation. Verify every product/article thumbnail goes through `next/image` (automatic WebP/AVIF, responsive `srcset`, lazy-loading) rather than plain `<img>` — the raw, spaced-out benchmark filenames suggest some images may be unoptimized static files.
- Set explicit dimensions (or `fill` + `sizes`) on every thumbnail to avoid layout shift (CLS).
- Mark only the first 3–4 above-the-fold images as `priority`; lazy-load the rest.
- Run [PageSpeed Insights](https://pagespeed.web.dev/) against the homepage and a product page — target LCP < 2.5s, CLS < 0.1, INP < 200ms.

### SEO
- Fix the `og:url`/canonical bug (Critical Flaw B).
- `noindex` the thin category pages until populated (Critical Flaw D) to protect crawl budget and avoid a thin-content quality hit.
- Drop the `meta-keywords` tag entirely — ignored by Google/Bing since ~2009, and currently duplicated verbatim across unrelated pages (e.g. "Bose QuietComfort review" appears in the Monitors/Gaming subcategory's keywords).
- **Verify Product/Review/AggregateRating JSON-LD (schema.org) is implemented on every `/products/` page.** This is the single highest-leverage SEO lever for a review site — it's what earns star ratings directly in Google search results.
- Add `BreadcrumbList` structured data to match the visible breadcrumb UI that already exists.
- Fix the Twitter Card inheritance bug (Critical Flaw C).
- Confirm an XML sitemap exists, includes only real/indexable pages, and is referenced in `robots.txt`.

### Responsiveness
- The `viewport` meta tag is correctly set on every page checked — solid baseline.
- Manually test at 375px / 768px / 1440px: (1) whether the 7-item category nav wraps or needs a hamburger menu on mobile; (2) whether the 5-icon share-button row wraps awkwardly on narrow screens; (3) whether the "Rating Breakdown" and "How We Test" tables stay readable without horizontal scroll-clipping on phones.
- Run Google's [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) for a hard pass/fail with specific flagged elements.

---

## 4. Step-by-Step Action Plan

### This week — correctness & trust
1. Fix share buttons to use each page's real URL, not a hardcoded homepage string.
2. Fix `og:url` + add a proper `<link rel="canonical">` per page.
3. Fix Twitter Card metadata to mirror the same dynamic title/description as Open Graph.
4. Wrap About/Contact/How-We-Test/legal pages in the shared Header+Footer layout.
5. Remove "Canva Link Hub" from primary footer nav.

### Next 1–2 weeks — content integrity & SEO hygiene
6. Populate Monitors/Home Office (and subcategories) with real reviews, or `noindex` them and reuse the honest empty-state already built for `/category/monitors/gaming`.
7. Centralize the category list into one config so header nav + footer widget can't drift apart.
8. Rename all image assets to kebab-case, no spaces.
9. Remove the sitewide `meta-keywords` tag; add/verify Product+Review+AggregateRating and BreadcrumbList JSON-LD.
10. Fix the duplicate press/general email on `/contact`.

### Next 3–4 weeks — polish & growth
11. De-duplicate the homepage (Top Picks vs. Top-Rated Product Reviews currently repeat).
12. Replace the `icon.svg` OG-image fallback with a real 1200×630 PNG per page type.
13. Run PageSpeed Insights + Mobile-Friendly Test; confirm `next/image` usage everywhere; fix flagged CLS/LCP items.
14. Do a full manual walkthrough at mobile/tablet/desktop breakpoints.
15. Consider a tabbed/filterable "Top Picks" grid instead of one long mixed-category list.

---

*Bottom line: the review writing itself (RTX 5070 Ti, Galaxy S26 Plus, etc.) is genuinely solid — specific benchmarks, clear pros/cons, real testing methodology. Most of what's holding this site back from "top-tier" right now is templating consistency, not content quality — which is the good news, because it's very fixable.*
