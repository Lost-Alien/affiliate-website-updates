# TechSelect — Tech Review & Affiliate Website

TechSelect is a modern, fast web application for technology reviews and buying guides. It helps users in India find the best laptops, headphones, smartphones, and smart home devices.

> [!NOTE]
> This website uses Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript. It builds to static HTML for fast page loading.

---

## What This Project Does

TechSelect gives users honest product reviews and helpful buying guides. 

Here is what this project offers:
- **Product Reviews:** Detailed testing score, pros and cons, and full specs.
- **Product Comparisons:** Side-by-side comparison tables to compare laptops and headphones.
- **Affiliate Buy Links:** Direct Amazon India buy buttons with affiliate tracking.
- **Dark Mode Support:** Smooth automatic dark mode that matches user preferences.
- **Automated Guardrails:** Automated linting and structure checks to keep code safe and clean.

---

## Quick Start (How to Install and Run)

Follow these steps to run the website on your computer.

### Prerequisites

Make sure you have installed:
- **Node.js** (version 18 or higher)
- **pnpm** (version 9 or 10)

### 1. Install Dependencies

Open your terminal in the project folder and run:

```bash
pnpm install
```

### 2. Run Development Server

Start the local server with:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 3. Build for Production

To test the production build, run:

```bash
pnpm build
```

This command creates a static site in the `out/` folder.

> [!TIP]
> Run `pnpm lint` before you push code to catch any formatting errors early.

---

## Configuration & Customization

### Adding or Editing Products

All product data and categories live in one simple file: `lib/categories.ts`.

To add a new product review:
1. Open [`lib/categories.ts`](file:///c:/Users/conne/Downloads/affiliate-website-updates/lib/categories.ts).
2. Add a new item to `SAMPLE_PRODUCTS` with title, price, image path, specs, and Amazon affiliate URL.
3. Create a page file inside `app/products/[product-slug]/page.tsx`.

### Styling & Theme Tokens

The site uses CSS variables for colors and themes inside [`app/globals.css`](file:///c:/Users/conne/Downloads/affiliate-website-updates/app/globals.css).

> [!IMPORTANT]
> Do not hardcode hex colors in inline React styles (`style={{ color: '#fff' }}`). Use CSS variables (`var(--token)`) or Tailwind classes so dark mode works correctly.

---

## Folder Structure

Here is a quick map of the repository:

| Folder / File | What It Contains |
|---|---|
| `app/` | Next.js App Router pages (Home, Categories, Products, Articles). |
| `components/` | Reusable React UI components (Header, Footer, Cards, Widgets). |
| `lib/` | Data definitions and sample products (`categories.ts`). |
| `public/` | Images, icons, and SVG assets (`/products/`, `/articles/`). |
| `.github/workflows/` | CI/CD pipeline automation (`guardrails.yml`). |

---

## Contributing & Code Safety

We welcome contributions! To keep the codebase clean, this project uses automated git hooks.

> [!WARNING]
> Pre-commit hooks run automatically on `git commit`. If TypeScript or ESLint finds errors, the commit will stop. Fix the errors and try again.

### Steps to Contribute:

1. Create a new branch: `git checkout -b feature/my-feature`
2. Make your changes and test locally with `pnpm build`.
3. Stage and commit your changes: `git commit -m "feat: add my new feature"`
4. Push your branch and open a Pull Request.

---

## License & Disclosure

This project contains Amazon Associate affiliate links. TechSelect earns a commission from qualifying purchases at no extra cost to the buyer.
