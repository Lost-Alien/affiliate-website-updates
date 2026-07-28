# 📸 Social Media Share Images Folder

Drop your **X (Twitter) / Pinterest / Facebook / LinkedIn** share images here.

---

## 📐 Required Image Specs

| Platform | Size | Format | Ratio |
|---|---|---|---|
| X (Twitter) | **1200 × 628 px** | JPG / PNG | 1.91:1 |
| Pinterest | **1000 × 1500 px** | JPG / PNG | 2:3 (portrait) |
| Facebook / LinkedIn | **1200 × 628 px** | JPG / PNG | 1.91:1 |
| Instagram (manual) | **1080 × 1080 px** | JPG / PNG | 1:1 |

> **Minimum size for X Large Card**: 300 × 157 px (but 1200 × 628 is recommended for best display)

---

## 📁 Naming Convention

Name your image files to match the article/product slug exactly:

### Article Pages → `article-<slug>.jpg`
```
article-best-laptops-for-programming-and-machine-learning-india.jpg
article-best-robot-vacuums-india.jpg
article-best-robot-vacuums-with-mop-india.jpg
article-best-tws-earbuds-under-5000-india.jpg
article-lloyd-1-5-ton-inverter-ac-review.jpg
article-macbook-pro-m4-review.jpg
article-samsung-galaxy-s25-ultra-review.jpg
article-sennheiser-momentum-4-review.jpg
article-asus-rog-strix-g16-review.jpg
article-bose-quietcomfort-ultra-review.jpg
article-best-gaming-laptops-under-1-lakh-india.jpg
article-best-smart-plugs-india.jpg
article-best-premium-noise-cancelling-headphones-india.jpg
```

### Product Pages → `product-<slug>.jpg`
```
product-apple-macbook-pro-m4.jpg
product-asus-rog-strix-g16.jpg
product-asus-tuf-gaming-a15.jpg
product-bose-quietcomfort.jpg
product-sennheiser-momentum-4.jpg
product-samsung-galaxy-s25.jpg
product-samsung-galaxy-tab.jpg
product-lloyd-1-5-ton-inverter-ac.jpg
product-tp-link-tapo-smart-plug.jpg
product-vivo-v70-elite.jpg
product-vw-32-inch-qled-smart-tv.jpg
```

### Global / Site-Wide → `og-default.jpg`
```
og-default.jpg     ← Used as fallback for all pages that have no specific image
```

---

## 🌐 Live URL After Deploying

Once you paste an image here and deploy to Vercel, it will be live at:

```
https://techselect.blog/social/<filename>.jpg
```

**Example:**
```
https://techselect.blog/social/article-macbook-pro-m4-review.jpg
https://techselect.blog/social/og-default.jpg
```

X (Twitter) will automatically fetch this URL from the page's `twitter:image` meta tag.

---

## ✅ Checklist Before Pasting

- [ ] Image is at least **1200 × 628 px**
- [ ] File size is under **5 MB** (ideally under 1 MB for fast loading)
- [ ] Filename matches the slug exactly (lowercase, hyphens only)
- [ ] Format is `.jpg` or `.png` (no spaces in filename)
- [ ] Text on image is readable (avoid small fonts)

---

## 🛠 After Pasting Images

Run the following to deploy:
```bash
git add public/social/
git commit -m "feat(social): add og share images"
git push origin main
npx vercel --prod --yes
```

Then test your X card at: **https://cards-dev.twitter.com/validator**
