# MODERNO — Ecommerce Test Site

A fully functional ecommerce single-page application built for **GA4 / GTM analytics testing**. Simulates a real fashion retail store with 105 products, a working cart, a 3-step checkout, and a complete GA4-spec dataLayer implementation covering 27 events.

No real payments. No backend. Everything runs in the browser.

---

## Quick Start

```bash
git clone https://github.com/mohitproid99/my-ecom-site-test.git
cd my-ecom-site-test
npx serve -p 4321 .
```

Open `http://localhost:4321` in your browser. Open DevTools console to see dataLayer events logged in real time.

---

## What's Inside

| File | Purpose |
|---|---|
| `index.html` | App shell — all pages render into `<main id="app">` |
| `css/styles.css` | All styles, fully responsive |
| `js/data.js` | 105-product catalogue + helper functions |
| `js/datalayer.js` | All dataLayer push methods (`DL` object) |
| `js/cart.js` | Cart + wishlist state via localStorage |
| `js/app.js` | Hash-based router, page renderers, event bindings |
| `MODERNO_DOCUMENTATION.md` | Full technical reference |

---

## Pages

| Route | Page |
|---|---|
| `#/` | Home — hero, category grid, bestsellers, new arrivals, sale |
| `#/shop` | All products with filters, sort, and search |
| `#/shop/:category` | Filtered by `men`, `women`, `accessories`, `kids`, `footwear`, `sale` |
| `#/product/:id` | Product detail — gallery, colour/size selector, add to cart |
| `#/cart` | Cart with qty controls and coupon codes |
| `#/checkout` | 3-step checkout (Details → Shipping → Payment) |
| `#/confirmation` | Order confirmation |
| `#/wishlist` | Saved items |

---

## Product Catalogue

105 products across 6 categories:

| Category | Count |
|---|---|
| Women | 35 |
| Men | 25 |
| Accessories | 25 |
| Footwear | 15 |
| Kids | 10 |
| **Total** | **105** |

---

## DataLayer Events

All events follow the GA4 ecommerce spec and push to `window.dataLayer`. Every event is also logged to the browser console in a colour-coded group under `[DataLayer]`.

### Ecommerce Funnel

| Event | When it fires |
|---|---|
| `page_view` | Every route change |
| `view_item_list` | Product grid renders (homepage, shop, related products) |
| `select_item` | Product card click |
| `view_item` | Product detail page load |
| `add_to_cart` | Add to cart button, buy now, or quick-add |
| `remove_from_cart` | Remove link or qty decremented to zero |
| `view_cart` | Cart page load |
| `begin_checkout` | Checkout page load + "Proceed to Checkout" click |
| `add_shipping_info` | Step 1 and Step 2 form submission |
| `add_payment_info` | Payment method selected or Step 3 submitted |
| `purchase` | Order placed (Step 3 submit) |

### Promotion Events

| Event | When it fires |
|---|---|
| `view_promotion` | Homepage banner scrolls into viewport |
| `select_promotion` | Homepage banner or CTA clicked |

### Engagement Events

| Event | When it fires |
|---|---|
| `search` | 300ms after user stops typing in search |
| `add_to_wishlist` | Heart icon toggled on (not off) |
| `filter_applied` | Any filter interaction (category, size, colour, price) |
| `sort_applied` | Sort dropdown changed |
| `quantity_changed` | Qty updated in cart or drawer |
| `coupon_applied` | Coupon submitted (status: `applied`, `removed`, or `invalid`) |
| `accordion_toggle` | Accordion opened or closed on PDP |
| `image_gallery_interact` | Gallery thumbnail clicked |
| `size_guide_open` | Size guide link clicked |
| `share` | Social share button clicked |
| `newsletter_subscribe` | Footer newsletter form submitted |
| `nav_click` | Header nav link clicked |
| `footer_click` | Footer link clicked |
| `cart_drawer_open` | Mini cart drawer opened |
| `checkout_step` | Each checkout step reached |

Full schemas for every event are in [`MODERNO_DOCUMENTATION.md`](./MODERNO_DOCUMENTATION.md).

---

## Coupon Codes

| Code | Discount |
|---|---|
| `MODERNO10` | 10% off |
| `WELCOME20` | 20% off |
| `SALE15` | 15% off |
| `FASHION30` | 30% off |

---

## Connecting GTM

1. Paste your GTM snippet into `index.html` after the `window.dataLayer = window.dataLayer || []` line
2. In GTM, create a Data Layer Variable named `ecommerce` (Version 2)
3. Set up Custom Event triggers for each event name above
4. Use GTM Preview mode at `http://localhost:4321` to verify tag firing

> **Note:** The site does not auto-push `{ ecommerce: null }` between events. Handle ecommerce clearing either in your GTM tag settings ("Clear ecommerce" checkbox on GA4 Event tags) or by adding the null push to `js/datalayer.js`.

---

## Currency

All dataLayer `price` and `value` fields are in **INR (₹), in rupees** (not paise). Internally, prices are stored as integers in paise to avoid floating-point errors, then divided by 100 before being pushed to the dataLayer.

---

## Free Shipping Threshold

Free shipping applies automatically when cart subtotal ≥ ₹3,000. Below that, a flat ₹199 fee is added. Both values are constants in `js/cart.js`.

---

## Deploy to GitHub Pages

1. Go to the repo **Settings → Pages**
2. Set Source to **Deploy from a branch**, Branch to `main`, folder to `/ (root)`
3. Save — the site will be live at `https://mohitproid99.github.io/my-ecom-site-test/`

---

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript — no frameworks, no build tools
- Hash-based SPA routing via `window.location.hash`
- State persisted in `localStorage`
- Product images from [Unsplash](https://unsplash.com) CDN (fallback to [picsum.photos](https://picsum.photos))

---

*Built for analytics testing. No real products, no real payments, no real data collection.*
