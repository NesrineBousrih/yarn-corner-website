# Yarn Corner by Nesslem — Website

Official website for **Yarn Corner by Nesslem**, handmade crochet pieces from Tunisia.

**Stack:** React 18 · TypeScript · Vite 6 · Tailwind CSS 4 · Lucide icons

---

## 1. Run the website (Windows PowerShell)

Open PowerShell and run:

```powershell
cd C:\Users\ASUS\yarn-corner-website   # go to the project folder
npm run dev                            # start the website
```

Then open **http://localhost:5173** in your browser. Press `Ctrl + C` in PowerShell to stop it.

| Command | What it does |
|---|---|
| `npm install` | Installs dependencies (only needed once, or after deleting `node_modules`) |
| `npm run dev` | Starts the website locally with live reload |
| `npm run build` | Checks for errors and creates the final website in `dist/` (ready to host) |
| `npm run preview` | Previews the built `dist/` version at http://localhost:4173 |

---

## 2. Adding your logo and product photos

Just **copy your photo into the right folder with the right name**. No code changes needed:
the site detects photos automatically (while `npm run dev` is running, the page refreshes by itself).
Until a photo is added, an elegant "Photo coming soon" placeholder is shown (in dev mode it also
displays the exact path it expects).

All photos below are already in place. To replace one, overwrite the file with the same name.

| What | File | Price |
|---|---|---|
| Official logo | `public/images/logo/logo.png` | |
| Homepage main photo | set in `src/config/site.ts` → `heroImage` (currently the burgundy bag) | |
| Our Favourite Piece | `public/images/favorites/favorite-piece.jpg` | |
| Clutch – Burgundy | `public/images/products/clutch/burgundy/product.jpg` | 48 DT / 50 DT with strap |
| Clutch – Gold | `public/images/products/clutch/gold/product.jpg` | 48 / 50 DT |
| Clutch – Green | `public/images/products/clutch/green/product.jpg` | 48 / 50 DT |
| Clutch – Black | `public/images/products/clutch/black/product.jpg` | 48 / 50 DT |
| Clutch – Pink | `public/images/products/clutch/pink/product.jpg` | 48 / 50 DT |
| Bag – Black | `public/images/products/black-bag/product.jpg` | 37 DT |
| Bag – Lemon Yellow | `public/images/products/lemon-yellow-bag/product.jpg` | 35 DT |
| Bag – Brown | `public/images/products/brown-bag/product.jpg` | 32 DT |
| Bag – Green | `public/images/products/green-bag/product.jpg` | 68 DT |
| Bag – Blue | `public/images/products/blue-bag/product.jpg` | 29 DT |
| Bag – White | `public/images/products/white-bag/product.jpg` | Price on request |
| Bag – Burgundy | `public/images/products/burgundy-bag/product.jpg` | 42 DT |

To use a dedicated homepage photo instead, put it at `public/images/hero/hero.jpg` and set
`heroImage: '/images/hero/hero.jpg'` in `src/config/site.ts`.

If a product is cropped awkwardly, add e.g. `imagePosition: 'center 35%'` to that product in
`src/data/products.ts` (lower % shows more of the top of the photo).

**Good to know**
- `.jpg`, `.jpeg`, `.png` and `.webp` all work — only the name before the dot must match
  (e.g. `hero.png` works for `hero.jpg`).
- Use lowercase names with no spaces.
- Photos are displayed in a **4:5 portrait frame** and cropped from the center (`object-fit: cover`),
  so keep the product in the middle of the picture. Ideal size: ~1200 × 1500 px, under ~400 KB.
  To shrink large phone photos, you can use a free tool like squoosh.app.
- The logo is shown as-is (never stretched). A transparent PNG looks best. It is also used as the
  browser tab icon once added. Until then, the brand name is shown as text.
- Each image folder contains a `PLACE-IMAGES-HERE.txt` reminder.

Example (PowerShell) — copy a photo from your Downloads folder:

```powershell
Copy-Item "$HOME\Downloads\my-gold-clutch.jpg" "public\images\products\clutch\gold\gold.jpg"
```

---

## 3. Configure WhatsApp and Instagram

Already configured in **`src/config/site.ts`**:

```ts
whatsappNumber: '21650973252',            // 216 + 8-digit number, digits only → wa.me/21650973252
phoneDisplay: '+216 50 973 252',          // how the number is shown on the site
instagramUsername: 'yarncorner_bynesslem' // → instagram.com/yarncorner_bynesslem/
```

How ordering works:
- **WhatsApp configured** → "Order Now" opens WhatsApp with a pre-written message
  (product, color, strap option, price). A floating WhatsApp button also appears.
- **Only Instagram configured** → "Order Now" opens an Instagram chat and copies the order message,
  ready to paste.
- **Nothing configured** → customers see a friendly "ordering coming soon" message (no broken links).

The Instagram icon in the menu, the footer icons and the contact cards appear automatically once configured.
You can also edit the announcement banner text in the same file.

---

## 4. Editing products, prices and descriptions

Everything is in **`src/data/products.ts`** — names, prices (DT), descriptions, colors and photo paths.
Each product has a `category` (`'Clutches'` or `'Bags'`), which drives the filter buttons.
To show "Price on request", simply leave out the `price` line (like the white bag). When you know
its price, add e.g. `price: 40,`.
The clutch's strap option is defined there too (48 DT without strap / 50 DT with strap); the price
on the card and in the order message updates automatically.

---

## 5. Project structure

```
yarn-corner-website/
├── public/
│   ├── favicon.svg              # temporary tab icon (replaced by your logo automatically)
│   └── images/                  # ← YOUR PHOTOS GO HERE (see section 2)
├── src/
│   ├── config/site.ts           # ← WhatsApp, Instagram, banner text, logo/hero paths
│   ├── data/products.ts         # ← products, prices, colors, descriptions
│   ├── components/
│   │   ├── layout/              # AnnouncementBar, Navbar, Footer, FloatingWhatsApp, Logo
│   │   ├── sections/            # Hero, FavoritePiece, Collection (with filters), About, Contact
│   │   ├── product/             # ProductCard, ColorSelector, OptionSelector
│   │   └── ui/                  # SmartImage (photo/placeholder), SectionHeading, brand icons
│   ├── hooks/                   # ordering, notifications, active menu section
│   ├── utils/                   # order message + links, image detection
│   ├── types/product.ts         # product data types
│   ├── styles/index.css         # brand colors, fonts, buttons
│   ├── pages/HomePage.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html                   # page title, SEO description, fonts
└── vite.config.ts               # build config (+ automatic photo detection)
```

**Brand colors** (in `src/styles/index.css`): blush `#F8DDE7`, baby pink `#F5C6D6`,
pastel pink `#FCEBF1`, cream `#FFF9F5`, burgundy `#762F46`, soft rose `#E9A9BE`, white.
**Fonts:** Cormorant Garamond (headings) and Jost (text), from Google Fonts.
