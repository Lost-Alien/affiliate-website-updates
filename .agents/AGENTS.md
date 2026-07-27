# TechSelect Project Rules & Amazon Associates Compliance Guidelines

This workspace enforces strict guidelines to maintain Amazon Associates program compliance and pass affiliate site quality audits.

---

## 1. Mandatory Disclosure & Legal Disclaimer Standards
- **Exact Disclosure Phrase:** Per the Amazon Associates Operating Agreement, all pages containing affiliate links or program content must display the exact legal disclosure:
  > *"As an Amazon Associate I earn from qualifying purchases."*
- **Pricing & Availability Timestamp Disclaimer:** Any display featuring product pricing or "Check Price" CTAs must include the mandatory Amazon timestamp statement:
  > *"Product prices and availability are accurate as of the date/time indicated and are subject to change."*
- **FTC & Local Compliance:** Affiliate disclosures must appear above the fold and prior to the first affiliate link.
- **Dedicated Legal Pages:** Prominent links to `/affiliate-disclosure`, `/disclaimer`, `/privacy`, and `/terms` must be present in the global footer.

---

## 2. Link Hygiene & Attribution Standards
- **Direct Link Structure:** All Amazon affiliate links must be direct, uncloaked URLs pointing directly to `amazon.in/dp/[ASIN]` or official product pages with the proper tag parameter (`tag=techstor0caaf-21`).
- **No URL Cloaking or Redirects:** Never use URL shorteners (bit.ly, tinyurl), intermediate redirect paths (`/goto/amazon`), or cloaked links.
- **Sponsored Link Attributes:** All outgoing affiliate links must include `rel="noopener noreferrer sponsored"`.

---

## 3. Content Routing & Editorial Integrity
- **Exact Slug Alignment:** Every route under `app/article/[slug]` and `app/products/[slug]` must serve content that strictly matches its URL topic. Never place off-topic or temporary product content under an unrelated URL.
- **Index Data Accuracy:** Metadata entries in `lib/articles.ts` (`title`, `excerpt`, `category`, `imageUrl`) must match the actual content rendered on the destination article page.
- **Spec Verification:** Technical specifications in excerpts and buying guides must match the target product's actual hardware specs (e.g., CPU/GPU model names).
- **Independent Editorial Reviews:** Never scrape or copy native Amazon customer reviews. All review scores, ratings, and pros/cons must reflect TechSelect's independent testing and analysis.

---

## 4. Navigation & Category Architecture
- **Active Category Enforcement:** Empty or unpopulated categories must be flagged as `active: false` in `lib/categories.ts` so they are excluded from main header navigation and footer category lists.
- **Accurate Category Counts:** Sidebar widgets (`components/sidebar.tsx`) must reflect exact live content counts — never use hardcoded fake counts.
- **Taxonomy Alignment:** Any subcategory referenced in product breadcrumbs (e.g., `smartphones`, `tablets`, `tvs`, `appliances`) must exist as an active subcategory in `lib/categories.ts`.

---

## 5. Trust Signals & Author Bylines
- **Publish & Update Dates:** All article pages and individual product review pages (`app/products/*`) must display both initial publication date and last updated date.
- **Consistent Author Bylines:** Authors must have fixed, consistent domain roles sitewide:
  - `Priya Sharma` → Hardware Editor (Laptops, Monitors, Keyboards)
  - `Rahul Sharma` → Audio Editor (Headphones, Earbuds, Audio)
  - `Karan Malhotra` → Mobile & Smart Home Editor (Smartphones, Smart Home, Appliances)
- **Named Team & Location:** The About page must maintain named editor bios and physical location context (Bengaluru, India).

---

## 6. References & Citation Standards
- **Topic-Specific Citations:** Only include references that directly pertain to the specific products or technologies evaluated in that article. Avoid static or copy-pasted references sections across unrelated articles.
