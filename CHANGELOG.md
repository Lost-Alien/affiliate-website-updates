# Changelog

All notable changes to TechSelect will be documented in this file.

## [1.1.0] - 2026-07-27

### Added
- **Disclaimer Page (`/disclaimer`):** Standalone page covering product accuracy, affiliate earning disclosures, limitation of liability, and external links per Amazon Associates Operating Agreement guidelines.
- **Publish & Modified Dates:** Integrated `datePublished` and `dateModified` fields across all 14 product review pages under `/products/*`.
- **Named Team Bios & Location:** Added named editor bios (Priya Sharma, Rahul Sharma, Karan Malhotra) and Bengaluru location details to the About page.
- **Dedicated Press Email:** Added `press@techselect.blog` for media/review requests on the Contact page.
- **Project Compliance Rules:** Created `.agents/AGENTS.md` and installed `.claude/skills/amazon-associates` for workspace policy enforcement.

### Changed
- **Rebuilt Content Routes:** Replaced broken/mismatched content on 3 buying guide articles:
  - `best-coding-monitors-under-15000-india`: Real IPS/VA coding monitors roundup.
  - `best-mechanical-keyboards-coding-india`: Mechanical keyboards guide (hot-swap, tactile, wireless).
  - `best-wireless-earbuds-budget`: Budget TWS earbuds guide (ANC, battery, call clarity).
- **Navigation & Category Counts:** Set `active: false` on empty categories (`Monitors`, `Wearables`, `Home Office`) in `lib/categories.ts` and updated sidebar category counts (`Audio 2`, `Computers 4`, `Mobiles 3`, `Smart Home 5`).
- **Disclosures:** Standardised the exact required Amazon Associates disclosure string (`"As an Amazon Associate I earn from qualifying purchases."`) sitewide.
- **Taxonomy:** Added missing subcategories (`smartphones`, `tablets`, `tvs`, `appliances`) to `lib/categories.ts`.

### Fixed
- Fixed broken breadcrumb space-in-URL bug on `best-smart-plugs-india`.
- Fixed wrong link targets on sidebar "Trending Now" widget and MacBook comparison link.
- Reconciled ASUS ROG Strix G16 specification mismatch in article index.
- Removed off-topic references sections.
