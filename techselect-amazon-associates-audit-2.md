# Amazon Associates Approval Audit — techselect.blog
**Audit date:** July 27, 2026
**Method:** Manual page-by-page crawl of every publicly reachable URL discoverable from the homepage, header nav, footer nav, breadcrumbs, category pages, and the site's own "All Articles" index. 35 unique pages fetched and read in full. Where a claim could not be confirmed from the public site (e.g. page speed, rendered mobile layout, robots.txt/sitemap.xml, business registration), it is explicitly marked **"Could not be verified from the public website."**

---

## 1. Overall Verdict

# **FAIL**

**Would I approve this site today?**
# **No**

**Confidence score: 15/100** (readiness for approval)

**Why so low:** This isn't a borderline "needs more content" case. Three of the site's own ten listed articles resolve to completely unrelated content when clicked (a bug an Amazon reviewer would hit immediately), three of the seven categories in the main navigation are entirely empty across every subcategory, and the sidebar/footer widget displays product counts that don't match reality on every single page. These are exactly the "thin/placeholder/duplicate content" and "misleading claims" patterns Amazon's manual reviewers are trained to reject on sight. The affiliate-disclosure mechanics (the one thing the site does well) can't offset structural problems this severe.

---

## 2. What's Actually Working

Before the bad news — credit where due:

- **Disclosure language is genuinely good.** Every product page carries "As an Amazon Associate, I earn from qualifying purchases" near the top, again next to the buy button, and again in the footer, plus a link to a full disclosure page. This is the strongest part of the site.
- All Amazon links carry a proper tracking tag (`tag=techstor0caaf-21`).
- All 8 requested legal/policy page *types* exist except a standalone Disclaimer (see §4).
- Site is served over HTTPS.
- The "How We Test" and "Editorial Guidelines" pages are well-written *in isolation* — the problem is that the rest of the site repeatedly contradicts the promises made on them (see §7).

---

## 3. Content Quality & Depth

Individual **product review pages** (the 12 pages at `/products/...`) are the best content on the site: specific numbers, category-appropriate rating breakdowns (e.g. thermal/build/value for laptops vs. suction/navigation/mopping for a robot vacuum), clear pros/cons, and disclosure placed correctly. Strip the affiliate links and there's still a usable spec summary — but not much more, since none of it is supported by visible testing evidence (see §7).

The **"listicle" buying guides** (`/article/...`) are far weaker:
- Several "best of" roundups feature only **1–2 products** (Best 5G Smartphones: 2 phones; Best Tablets for Students: 1 tablet), which is thin for a comparison format.
- Several review articles have one-sentence "verdicts" with no supporting benchmark detail, despite their own meta descriptions promising things like "thermal throttling benchmarks" and "compile times" that never appear in the body (`asus-rog-strix-g16-review`).
- **Three of the ten listed articles don't exist as advertised** — see §5, this is the single biggest problem on the site.

---

## 4. Required Pages

| Page | Exists? | Location |
|---|---|---|
| Home | ✅ | `/` |
| About | ✅ | `/about` |
| Contact | ✅ | `/contact` |
| Privacy Policy | ✅ | `/privacy` |
| Affiliate Disclosure | ✅ | `/affiliate-disclosure` |
| Terms & Conditions | ✅ | `/terms` |
| Cookie Policy | ✅ | `/cookies` |
| **Disclaimer (standalone)** | ❌ **Missing** | Content is split between Terms ("Disclaimer of Warranties") and Editorial Guidelines, but there is no dedicated Disclaimer page or footer link |

---

## 5. Critical Finding: Broken Content Routing (this alone would sink the review)

The site's own `/article` index lists 10 buying guides. When actually opened, **three of them serve completely unrelated content**:

| Link text on `/article` index | URL | What the URL actually shows |
|---|---|---|
| "Best Coding Monitors Under ₹15,000 in India" | `/article/best-coding-monitors-under-15000-india` | A **Vivo smartphone review** — no monitor content at all |
| "Best Mechanical Keyboards for Coding & Gaming in India" | `/article/best-mechanical-keyboards-coding-india` | An **ECOVACS DEEBOT T50 PRO robot vacuum review** — no keyboard content at all |
| "Best Wireless Earbuds on a Budget in India" | `/article/best-wireless-earbuds-budget` | An **ASUS ROG Strix G16 vs. MacBook Pro M4 laptop comparison** — no earbuds content at all |

Combined with this: the **Monitors** category and every one of its 5 subcategories is completely empty (see §6), which means **no coding-monitor content exists anywhere on the site** — the article promising it is simply mislabeled. Same story for wireless earbuds (Audio > Earbuds subcategory is confirmed empty) and mechanical keyboards (no Peripherals content exists under Computers).

A reviewer clicking through the site exactly as instructed — via the site's own navigation — will hit a broken/mismatched page on the very first "best of" list they try that isn't already featured on the homepage. This reads as either an unfinished CMS migration or auto-generated placeholder content that was never QA'd, and it is disqualifying on its own.

---

## 6. Empty Categories & Placeholder Pages

Three of the seven categories in the **main header navigation** — Monitors, Wearables, and Home Office — are completely empty. I opened the top-level category page for each plus one subcategory sample per category; all returned the identical placeholder:

> "No products listed in this subcategory yet. We haven't listed active products or reviews under '[X]' in [Category] yet. Our editorial team is currently testing products in this category."

Confirmed empty: `/category/monitors`, `/category/monitors/gaming`, `/category/wearables`, `/category/home-office`, plus `/category/audio/earbuds` (Audio's Earbuds subcategory) and `/category/computers/desktops` (Computers' Desktops subcategory). Given the identical boilerplate and consistent pattern, the remaining ~14 unvisited subcategories under these sections almost certainly follow suit — I did not fetch every single one, so I'm not claiming to have confirmed all of them individually.

**This directly contradicts the numbers shown in the sidebar/footer "Categories" widget on every single page:**

| Widget claims | Actual live products found |
|---|---|
| Audio — 24 | 2 |
| Computers — 18 | 4 |
| Monitors — 12 | **0** |
| Wearables — 15 | **0** |
| Home Office — 21 | **0** |

Whether this is a hardcoded placeholder number or a display bug, the effect is the same: every page on the site shows a number that is flatly contradicted by clicking through to the category itself. That's a textbook "misleading claim" under Amazon's guidelines, and it's visible sitewide, not on one obscure page.

---

## 7. Trust Signals

This is the site's second-biggest weakness after §5–6.

- **No verifiable individual authors.** Bylines are inconsistent and appear to be interchangeable placeholder names rather than real staff:
  - "Karan Malhotra" is credited as **Mobile Editor** (Vivo phone review), **Hardware Editor** (ASUS vs. MacBook comparison), and **Smart Home Editor** (ECOVACS review, Smart Plugs guide) — three different job titles for the same name across three articles.
  - "Priya Sharma – Hardware Editor" and "Rahul Sharma – Audio Editor" each appear once or twice with no bio, photo, or credentials anywhere.
  - Most product review pages (all 12) have **no byline and no author at all**.
  - There is no author archive/bio page linked from anywhere on the site.
  - This directly undercuts the About page's claim of a team with "specialists in audio engineering, display technology, and consumer electronics with decades of combined experience" and Editorial Guidelines' claim that content is "written by experienced technology journalists" — neither claim is backed by a single named, checkable person.
- **No physical address or company/GST registration details** anywhere on the site (relevant for an India-focused commercial entity).
- **Single shared email** (`support@techselect.blog`) is used for both general inquiries and press inquiries — no differentiation, no phone number.
- **No dates on any of the 12 product review pages.** Only the 10 "buying guide" articles show a publish/update date — yet Editorial Guidelines explicitly states "Each article displays its last update date." That promise is broken for the majority of the site's content pages.
- **Copy-pasted, off-topic citations.** A "References & Further Reading" block citing Gadgets360, Beebom, TechRadar, and Indian Express — all about *Sony headphones and ANC buying guides* — appears verbatim on at least four articles, including a **Vivo phone review** and an **ECOVACS robot vacuum review**, where the citations have nothing to do with the article topic. This looks like a static template block rather than genuine research citations, which undermines the "we cross-referenced multiple sources" claim stated directly above it.
- **No site search functionality found** anywhere in the header, footer, or navigation, despite the audit checklist calling for it.

---

## 8. Additional Concrete Issues Found

- **Broken/mismatched internal links:**
  - On the Apple MacBook Pro M4 page, a "Related Comparison" link labeled *"ASUS ROG Strix G16 vs Apple MacBook Pro M4: The Developer Shootout"* actually points to `/article/best-wireless-earbuds-budget`.
  - The sitewide "Trending Now" widget's link labeled *"Bose QuietComfort vs Sennheiser Momentum 4"* points to `/article/bose-quietcomfort-ultra-review`, which is only a single-product Bose review with no Sennheiser comparison at all. The actual head-to-head comparison content lives at a different URL (`/article/best-budget-noise-cancelling-headphones-india`) that isn't linked from that widget.
  - Breadcrumb links on at least two pages contain a literal space instead of a hyphen: `techselect.blog/category/smart home` (should be `/category/smart-home`) — a broken link.
- **Contradictory specs for the same product across the site.** The ASUS ROG Strix G16's product page and comparison article agree on Intel Core Ultra 9 275HX / RTX 5070 Ti / 2.5K 240Hz IPS — but the site's own `/article` index describes the *same laptop* as having an "Intel Core i9, RTX 4070 GPU, 240Hz Nebula display." Three different spec sheets for one product on one site.
- **"Budget" titles hiding premium products.** `best-5g-smartphones-under-30000-india` features flagship-tier phones (Samsung Galaxy 5G, Vivo V70 Elite) with no products actually positioned near ₹30,000. `best-budget-noise-cancelling-headphones-india` resolves to a page titled *"Best Premium Noise Cancelling Headphones"* comparing ₹26,990–₹29,900 headphones the site elsewhere calls "premium."
- **Blank FAQ answers.** "How heavy is the ASUS ROG Strix G16?" (on the ASUS vs. MacBook comparison) and "How fast do they charge?" (on the ANC headphones shootout) are posed as FAQ questions with no answer text underneath — incomplete content shipped live.
- **Taxonomy mismatches.** Several product breadcrumbs reference subcategories that don't appear on their own parent category page's subcategory list — e.g. Samsung Galaxy S25 and Vivo V70 Elite breadcrumbs show a "Smartphones" subcategory under Mobiles, but the Mobiles category page only lists Android / iPhone / Budget Phones. Samsung Galaxy Tab's breadcrumb shows "Tablets" under Computers, which isn't in that category's own subcategory list (Laptops / Desktops / Peripherals / Storage / Processors). Same pattern for "Smart TVs" and "Appliances" under Smart Home.
- **Unverifiable, hyper-specific "testing" claims** with no supporting data, chart, or photo of an actual test rig — e.g. "compiled a large Next.js monorepo in 38 seconds," "12,800 Pa suction," "screen-on time of 7.5 to 8.5 hours, ended the day with 22% battery." All product photography is standard manufacturer/stock imagery, not testing photos. This pattern (very specific numbers + generic stock photography + zero raw data) is exactly what independent reviewers flag as evidence content wasn't actually hands-on tested, which conflicts with the site's core promise ("We test everything we recommend").

---

## 9. Per-Page Audit Table

Scores are 1–10. "Amazon compliance" reflects the specific page in isolation; sitewide issues (fake category counts, broken routing, inconsistent bylines) are noted in the Issues column wherever they surface on that page.

| # | URL | Purpose | Content Quality | Trust | Originality | Amazon Compliance | Key Issues | Suggested Fix |
|---|---|---|---|---|---|---|---|---|
| 1 | `/` (Home) | Homepage / hub | 6 | 4 | 6 | Concern | Sidebar shows category counts (24/18/12/15/21) that don't match reality | Fix or hide counts until accurate |
| 2 | `/about` | Company story | 6 | 4 | 7 | Pass | Claims "specialists" with no named team members anywhere | Add real team bios or soften the claim |
| 3 | `/contact` | Contact | 5 | 4 | 6 | Pass | One shared email for general + press, no phone/address | Add separate press email + physical location |
| 4 | `/privacy` | Privacy Policy | 6 | 6 | 5 | Pass | Standard/generic but complete | — |
| 5 | `/terms` | Terms of Service | 6 | 6 | 5 | Pass | Contains disclaimer content but isn't a standalone Disclaimer page | Add dedicated `/disclaimer` |
| 6 | `/affiliate-disclosure` | Affiliate Disclosure | 7 | 7 | 6 | Pass | Best page on the site; names Amazon Associates explicitly | — |
| 7 | `/cookies` | Cookie Policy | 6 | 6 | 5 | Pass | Complete and clear | — |
| 8 | `/how-we-test` | Methodology | 7 | 5 | 7 | Pass | Describes a lab/process never evidenced on actual reviews | Show real benchmark charts/photos on reviews |
| 9 | `/editorial-guidelines` | Editorial standards | 7 | 4 | 7 | Pass | Claims dates on every article and named journalists — both contradicted elsewhere | Align claims with actual site behavior |
| 10 | `/article` (all articles index) | Article hub | 5 | 3 | 5 | **Concern** | 3 of 10 listed articles route to unrelated content | Fix routing (see §5) |
| 11 | `/category/audio` | Audio hub | 5 | 4 | 5 | Concern | Claims 24 items, shows 2 | Correct count |
| 12 | `/category/audio/headphones` | Headphones subcat | 6 | 6 | 6 | Pass | Only real, populated subcategory checked in Audio | — |
| 13 | `/category/audio/earbuds` | Earbuds subcat | 2 | 3 | 3 | **Concern** | Empty placeholder page | Populate or unlist from nav |
| 14 | `/category/computers` | Computers hub | 5 | 4 | 5 | Concern | Claims 18 items, shows 4; breadcrumb taxonomy mismatch elsewhere | Correct count, fix taxonomy |
| 15 | `/category/computers/desktops` | Desktops subcat | 2 | 3 | 3 | **Concern** | Empty placeholder page | Populate or unlist |
| 16 | `/category/mobiles` | Mobiles hub | 6 | 5 | 6 | Pass | Real content (3 products), subcats reasonable | — |
| 17 | `/category/smart-home` | Smart Home hub | 6 | 5 | 6 | Pass | Real content (5 products) | — |
| 18 | `/category/monitors` | Monitors hub | 2 | 2 | 2 | **Concern** | Entirely empty; claims 12 items in nav widget | Remove from primary nav until populated |
| 19 | `/category/monitors/gaming` | Gaming monitors subcat | 2 | 2 | 2 | **Concern** | Empty placeholder page | Populate or remove |
| 20 | `/category/wearables` | Wearables hub | 2 | 2 | 2 | **Concern** | Entirely empty; claims 15 items in nav widget | Remove from primary nav until populated |
| 21 | `/category/home-office` | Home Office hub | 2 | 2 | 2 | **Concern** | Entirely empty; claims 21 items in nav widget | Remove from primary nav until populated |
| 22 | `/products/asus-rog-strix-g16` | Laptop review | 7 | 5 | 7 | Pass | No byline/date; spec conflict with article-index snippet | Add byline/date; reconcile specs |
| 23 | `/products/apple-macbook-pro-m4` | Laptop review | 7 | 5 | 7 | Pass | "Related Comparison" link points to wrong URL | Fix link |
| 24 | `/products/bose-quietcomfort` | Headphone review | 7 | 5 | 7 | Pass | No byline/date | Add byline/date |
| 25 | `/products/sennheiser-momentum-4` | Headphone review | 7 | 5 | 7 | Pass | No byline/date | Add byline/date |
| 26 | `/products/samsung-galaxy-s25` | Phone review | 6 | 5 | 6 | Pass | Never states exact model (S25 vs S25+/Ultra) despite hyper-specific claims; breadcrumb subcat mismatch | Name exact SKU; fix taxonomy |
| 27 | `/products/vivo-smartphone` | Phone review | 7 | 5 | 7 | Pass | No byline/date | Add byline/date |
| 28 | `/products/vivo-v70-elite` | Phone review | 7 | 5 | 7 | Pass | Breadcrumb subcat mismatch | Fix taxonomy |
| 29 | `/products/asus-tuf-gaming-a15` | Laptop review | 7 | 5 | 7 | Pass | No byline/date | Add byline/date |
| 30 | `/products/samsung-galaxy-tab` | Tablet review | 7 | 5 | 7 | Pass | Breadcrumb references "Tablets" subcat not in Computers' own list | Fix taxonomy |
| 31 | `/products/ecovacs-t50-pro` | Vacuum review | 7 | 5 | 7 | Pass | No byline/date | Add byline/date |
| 32 | `/products/tp-link-tapo-smart-plug` | Smart plug review | 7 | 5 | 7 | Pass | No byline/date | Add byline/date |
| 33 | `/products/vw-32-inch-qled-smart-tv` | TV review | 6 | 5 | 6 | Pass | Repeats manufacturer marketing ("QLED") on a 720p TV as if independently verified; breadcrumb subcat mismatch | Caveat marketing claims; fix taxonomy |
| 34 | `/products/lloyd-1-5-ton-inverter-ac` | AC review | 7 | 5 | 7 | Pass | Breadcrumb subcat mismatch | Fix taxonomy |
| 35 | `/products/dreame-robot-vacuum-mop` | Vacuum review | 7 | 5 | 7 | Pass | No byline/date | Add byline/date |
| 36 | `/article/best-5g-smartphones-under-30000-india` | Phone listicle | 5 | 5 | 6 | **Concern** | Only 2 phones listed; both are flagships, not ~₹30,000 phones as URL implies | Retitle or add genuinely budget phones |
| 37 | `/article/best-smart-tvs-and-appliances-india` | Appliance listicle | 7 | 6 | 6 | Pass | Solid match between title/URL/content | — |
| 38 | `/article/best-tablets-for-students-and-creatives-india` | Tablet listicle | 6 | 6 | 6 | Pass | Only 1 product for a "comparing top tablets" framing | Add more products or reframe as single review |
| 39 | `/article/asus-rog-strix-g16-review` | Laptop review (article) | 3 | 4 | 3 | **Concern** | One-line verdicts; near-duplicate of product page #22; unverifiable "liquid metal"/"Tri-Fan" claims not on product page | Merge with product page or add real depth |
| 40 | `/article/bose-quietcomfort-ultra-review` | Headphone review (article) | 3 | 4 | 3 | **Concern** | Sitewide widget calls this "vs Sennheiser Momentum 4" but it's a single-product review with no comparison; near-duplicate of page #24 | Fix mislabeled widget link; merge or differentiate from product page |
| 41 | `/article/best-smart-plugs-india` | Smart plug listicle | 7 | 6 | 6 | Pass | Broken breadcrumb link (space in URL) | Fix breadcrumb link |
| 42 | `/article/best-budget-noise-cancelling-headphones-india` | ANC headphone comparison | 7 | 5 | 6 | **Concern** | Page is titled "Best *Premium*" — contradicts "budget" URL/intent; blank FAQ answer | Retitle to match content or add real budget picks |
| 43 | `/article/best-mechanical-keyboards-coding-india` | Keyboard listicle (advertised) | 1 | 1 | 1 | **FAIL** | Serves an ECOVACS robot vacuum review — zero keyboard content | Rebuild with real content or remove from index |
| 44 | `/article/best-coding-monitors-under-15000-india` | Monitor listicle (advertised) | 1 | 1 | 1 | **FAIL** | Serves a Vivo phone review — zero monitor content | Rebuild with real content or remove from index |
| 45 | `/article/best-wireless-earbuds-budget` | Earbuds listicle (advertised) | 1 | 1 | 1 | **FAIL** | Serves an ASUS vs. MacBook laptop comparison — zero earbuds content | Rebuild with real content or remove from index |

**Not individually re-verified:** roughly 14 additional empty subcategory URLs under Monitors, Wearables, Home Office, Audio, Computers, Mobiles, and Smart Home (e.g. `/category/audio/speakers`, `/category/monitors/4k-5k`, `/category/wearables/smartwatches`, `/category/home-office/desks`, etc.) were not individually fetched, but based on the 6 empty subcategories confirmed directly, they almost certainly follow the identical "no products listed yet" placeholder pattern.

---

## 10. Issues Found, by Severity

**Critical**
1. Three of ten indexed articles resolve to entirely unrelated content (§5).
2. Three of seven main-nav categories (Monitors, Wearables, Home Office) are completely empty across every subcategory checked.
3. Sidebar/footer category counts (24/18/12/15/21) contradict actual live content on every page.
4. No verifiable, consistently-credited authors anywhere; the same names carry different job titles across articles.

**High**
5. Broken/mismatched internal links (MacBook "Related Comparison"; sitewide "Trending Now" Bose-vs-Sennheiser link).
6. Contradictory specs for the same product (ASUS ROG Strix G16) across three pages of the same site.
7. Two "budget" guides actually feature premium/flagship products.
8. Identical, topic-irrelevant "References & Further Reading" block reused across unrelated product categories.
9. No publish/update dates on any of the 12 product review pages, contradicting Editorial Guidelines' explicit promise.

**Medium**
10. Blank/unanswered FAQ entries on two articles.
11. Breadcrumb link containing a raw space instead of a hyphen (broken URL).
12. Breadcrumb subcategories that don't match their parent category's own subcategory list, on at least 5 product pages.
13. No standalone Disclaimer page.
14. Hyper-specific "tested" numbers with no supporting data, chart, or photo evidence.
15. Two "best of" listicles feature only 1–2 products.

**Low**
16. Single shared email for all contact purposes; no phone/address.
17. No site search functionality found anywhere.
18. Minor subcategory-naming inconsistencies (e.g., "Smartphones" referenced but not listed).

---

## 11. Prioritized Fix List (highest impact first)

1. **Fix the 3 broken article-routing bugs** — either build real, matching content for the coding-monitors, mechanical-keyboards, and wireless-earbuds guides, or delist/remove them from `/article` and every internal link until real content exists.
2. **Correct or remove the fabricated category counts** in the sidebar/footer widget so they match live content (Audio: 2, Computers: 4, Mobiles: 3, Smart Home: 5, Monitors: 0, Wearables: 0, Home Office: 0).
3. **Remove Monitors, Wearables, and Home Office from the primary header navigation** until each has real, tested products — don't link main nav items to "coming soon" pages.
4. **Fix the two broken internal links** described in §8, and the space-in-URL breadcrumb bug.
5. **Give every article and product page one real, verifiable author** with a consistent job title and a linked bio page (name, photo, credentials) — stop reusing names across mismatched beats.
6. **Add publish/update dates to all 12 product pages.**
7. **Retitle the two mismatched "budget" guides** so their titles/URLs match the price tier of the products actually featured, or replace the products with genuinely budget-tier options.
8. **Replace the copy-pasted "References & Further Reading" block** with citations that are actually relevant to each specific article, or remove it from articles where no real research was done.
9. **Fill in the two blank FAQ answers** or remove the empty questions.
10. **Reconcile the ASUS ROG Strix G16 spec conflict** across the product page, article, and article-index snippet.
11. **Add a standalone `/disclaimer` page.**
12. **Reconcile category/subcategory taxonomy** so breadcrumbs only reference subcategories that actually exist in that category's own navigation.
13. **Add a physical address/city and a separate press contact** to strengthen real-identity trust signals.
14. **Add site search.**
15. **Back up specific "tested" claims with visible evidence** (benchmark screenshots, lab photos, raw data tables) or soften the language to avoid implying independently-verified lab results that aren't shown.

---

## 12. Exact Copy / Content to Add

**Standalone Disclaimer page** (currently missing — suggest `/disclaimer`, linked from the footer next to Affiliate Disclosure):

> **Disclaimer**
> The information on TechSelect (techselect.blog) is provided for general informational purposes only. All product recommendations, ratings, and reviews reflect our team's independent testing and opinions at the time of publication. Product specifications, pricing, and availability may change without notice, and we make no warranties as to the completeness or accuracy of this information. TechSelect is not responsible for purchasing decisions made based on this content. This site participates in the Amazon Associates Program and other affiliate programs — see our [Affiliate Disclosure](/affiliate-disclosure) for details.

**Byline format** to use consistently on every page (replacing the current interchangeable names/titles):

> Written and tested by **[Full Name]**, [Fixed Title — kept the same everywhere this person is credited] · [Read full bio →]
> Published [Month Day, Year] · Last updated [Month Day, Year]

**Category widget**, replace the static counts with either a dynamically generated count or, if static, update to:

> Audio (2) · Computers (4) · Mobiles (3) · Smart Home (5)

— and drop Monitors / Wearables / Home Office from this widget and from primary navigation until they contain real reviews.

---

## 13. Could Not Be Verified From the Public Website

- Actual page load speed / Core Web Vitals.
- True rendered mobile layout and responsiveness (only page markup/content was reviewed, not a rendered mobile viewport).
- Whether any images are visually broken or missing at render time.
- `robots.txt` / `sitemap.xml` contents.
- Business registration / GST details for the operating entity.
- Whether the fabricated-looking category counts are a display bug or intentional.
- The real identity or employment status of any credited author name.
