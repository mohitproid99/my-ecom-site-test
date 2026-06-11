# MODERNO Ecommerce Website — Technical Documentation

**Version:** 1.0  
**Last updated:** June 2024  
**Purpose:** GTM/GA4 dataLayer testing, analytics implementation QA, and ecommerce tracking validation

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack and File Structure](#2-tech-stack-and-file-structure)
3. [Running the Site Locally](#3-running-the-site-locally)
4. [Pages and Features](#4-pages-and-features)
5. [Product Catalogue](#5-product-catalogue)
6. [Cart and Wishlist System](#6-cart-and-wishlist-system)
7. [Coupon Codes](#7-coupon-codes)
8. [DataLayer Architecture](#8-datalayer-architecture)
9. [Complete Event Reference](#9-complete-event-reference)
10. [GTM Setup Guide](#10-gtm-setup-guide)
11. [Testing Checklist](#11-testing-checklist)
12. [Known Limitations](#12-known-limitations)

---

## 1. Project Overview

MODERNO is a fully functional ecommerce single-page application built specifically for analytics and GTM testing. It simulates a real fashion retail store — clothes, accessories, and footwear — with 105 products, a working cart, a three-step checkout, and an order confirmation flow.

No real payments are processed. No data is sent to any backend. Everything runs in the browser, which makes it ideal for testing dataLayer implementations, GA4 ecommerce schemas, GTM triggers, and tag firing sequences without needing access to a live production environment.

The site pushes GA4-spec ecommerce events to `window.dataLayer` for every meaningful user interaction: page views, product impressions, add-to-cart, checkout steps, purchase, and around 20 additional engagement events. Every event is also logged to the browser console in a colour-coded grouped format, so you can follow the event stream in real time without opening GTM Preview or GA4 DebugView.

---

## 2. Tech Stack and File Structure

The site uses no frameworks, build tools, or package dependencies. It is plain HTML, CSS, and vanilla JavaScript. This is a deliberate choice: fewer moving parts means fewer variables when debugging tracking issues.

```
ecommerce-store/
├── index.html              # App shell — all pages render into <main id="app">
├── css/
│   └── styles.css          # All styles, including responsive breakpoints
└── js/
    ├── data.js             # Product catalogue (105 products) and helper functions
    ├── datalayer.js        # All dataLayer push methods (DL object)
    ├── cart.js             # Cart state management via localStorage (Cart object)
    └── app.js              # Router, page renderers, and all event bindings
```

**Routing** is hash-based (`window.location.hash`). The `Router` object in `app.js` listens for `hashchange` events and calls the appropriate render function. There is no server-side routing — the entire application is a single `index.html` file.

**State** is persisted in `localStorage` under three keys:

| Key | Contents |
|---|---|
| `moderno_cart` | Array of cart line items (product id, qty, colour, size) |
| `moderno_wishlist` | Array of wishlisted product ids |
| `moderno_coupon` | Applied coupon object (code, percentage, label) |
| `moderno_last_order` | Last completed order — used by the confirmation page |

---

## 3. Running the Site Locally

The site requires a local HTTP server because browsers block module imports and some asset loading over `file://`. The simplest approach uses `npx serve`:

```bash
cd /Users/mohit.kumar/ecommerce-store
npx serve -p 4321 .
```

The site will be available at `http://localhost:4321`.

No `npm install` is required. `npx serve` pulls the package on first run and caches it.

To verify the dataLayer is firing, open the browser DevTools console. Every event logs itself automatically in a purple-labelled group. You will see something like:

```
[DataLayer] page_view     { page_title: "Home", page_location: "...", ... }
[DataLayer] view_item_list { ecommerce: { item_list_name: "Homepage Bestsellers", items: [...] } }
```

---

## 4. Pages and Features

### 4.1 Home (`#/`)

The homepage has five sections: a full-bleed hero, a feature strip (free shipping, returns, security, support), a five-column category grid, a bestsellers product grid (8 products), a promotional banner, a new arrivals grid (8 products), and a sale grid (8 products).

The promotional banner uses an `IntersectionObserver` to fire `view_promotion` when it enters the viewport. Clicking it fires `select_promotion`.

DataLayer events fired on load: `page_view`, `view_item_list` (bestsellers), `view_item_list` (new arrivals), and `view_promotion` (on scroll into view).

### 4.2 Shop (`#/shop`, `#/shop/:category`)

Valid category slugs: `men`, `women`, `accessories`, `kids`, `footwear`, `sale`.

The shop page has a left-hand filter sidebar (hidden on mobile, triggered by a floating button) and a main product grid. The sidebar includes category checkboxes, a subcategory list (when browsing a specific category), a price range slider, size chips, colour swatches, and star rating filters.

The toolbar shows the product count and a sort dropdown with six options: Featured, Newest, Price Low to High, Price High to Low, Top Rated, and Name A-Z. Changing the sort fires `sort_applied`. Interacting with any filter fires `filter_applied`.

A row of clickable chips above the grid lets users switch between categories without touching the sidebar. The chip labels match the URL slugs.

DataLayer events: `page_view`, `view_item_list`, `sort_applied`, `filter_applied`.

### 4.3 Product Detail (`#/product/:id`)

Each product page has a sticky image gallery on the left (main image plus thumbnail strip), and product information on the right. The information panel includes category breadcrumb, product name, star rating, price (with original price and discount percentage where applicable), a colour selector, a size selector, a quantity stepper, add-to-cart and buy-now buttons, a wishlist toggle, shipping/returns meta-info, and a three-section accordion (Description, Product Details, Shipping and Returns).

At the bottom of the page, four related products from the same category are shown in a grid.

Colour and size selection updates the visual state but does not reload the page. The selected colour and size are passed into every dataLayer event that originates from that page.

The gallery thumbnails fire `image_gallery_interact` on click. The size guide link fires `size_guide_open`. The accordion fires `accordion_toggle` (open/close) for each section. The share buttons fire `share` with the social network as the method.

DataLayer events: `page_view`, `view_item`, `add_to_cart` (via button or buy now), `add_to_wishlist`, `image_gallery_interact`, `size_guide_open`, `accordion_toggle`, `share`, `view_item_list` (related products), `select_item` (related product click).

### 4.4 Cart (`#/cart`)

The cart page lists all items with a product image, name, colour/size variant, quantity stepper, and line total. An order summary panel on the right shows subtotal, discount (if a coupon is applied), shipping cost (free over ₹3,000), and the grand total.

A coupon input field sits in the summary panel. Applying a valid coupon fires `coupon_applied` with status `applied`. Removing it fires `coupon_applied` with status `removed`. An invalid code fires `coupon_applied` with status `invalid`.

Increasing quantity fires `quantity_changed`. Decreasing to zero, or clicking "Remove," fires `remove_from_cart`.

DataLayer events: `page_view`, `view_cart`, `remove_from_cart`, `quantity_changed`, `coupon_applied`.

### 4.5 Mini Cart Drawer

A slide-in drawer opens from the right edge when the cart icon in the header is clicked, or when an item is added to cart from any product card or detail page. The drawer shows all cart items with inline quantity controls. It fires `cart_drawer_open` when opened, and `remove_from_cart` or `quantity_changed` when items are modified inside it.

The drawer has two CTA buttons: "View Cart" (navigates to `#/cart`) and "Checkout" (navigates to `#/checkout`).

### 4.6 Checkout (`#/checkout`)

The checkout is a three-step form rendered on a single page. Advancing between steps does not change the URL — the step state is managed in memory. The order summary panel on the right is visible throughout all steps.

**Step 1 — Details:** First name, last name, email, phone, full shipping address (address line 1, optional line 2, city, state dropdown with all 29 Indian states, PIN code, country). Fires `begin_checkout` on page load and `add_shipping_info` on form submission.

**Step 2 — Shipping:** Three radio options (Standard 3-5 days, Express 1-2 days, Same Day). An optional special instructions field. Fires `add_shipping_info` with the selected shipping tier on submission.

**Step 3 — Payment:** Four radio options (Credit/Debit Card, UPI, Net Banking, Cash on Delivery). Selecting a method fires `add_payment_info`. The card section shows a number input with automatic 16-digit formatting (groups of four, space-separated) and an expiry input with automatic MM/YY formatting. Selecting UPI shows a UPI ID field instead.

Submitting Step 3 generates a simulated order ID (`MOD-` followed by a base-36 timestamp), saves the order to `localStorage`, fires `purchase`, clears the cart, removes the coupon, and navigates to `#/confirmation`.

All form fields accept any input — there is intentionally no server-side validation. Client-side validation fires only on submission and is minimal, so testing can move quickly.

DataLayer events across all steps: `page_view`, `checkout_step`, `begin_checkout`, `add_shipping_info` (twice), `add_payment_info`, `purchase`.

### 4.7 Order Confirmation (`#/confirmation`)

The confirmation page reads the last order from `localStorage` and displays a success state: order ID, estimated delivery date (5 days from purchase date), a full itemised order summary, and two CTAs (Continue Shopping, Back to Home).

Firing `page_view` with `content_type: 'purchase_confirmation'` is the only event on this page, because `purchase` was already fired at the end of Step 3.

### 4.8 Wishlist (`#/wishlist`)

The wishlist page renders a product grid of all saved items. Wishlisted items persist in `localStorage`. The heart icon on every product card and the heart button on every product detail page toggle wishlist state and fire `add_to_wishlist` when adding.

DataLayer events: `page_view`, `view_item_list` (if items exist).

### 4.9 Search

The search bar opens as a collapsible panel below the header when the magnifying glass icon is clicked. Typing with a 300ms debounce queries the product catalogue client-side and shows up to six results as a dropdown. Clicking a result navigates to that product's detail page and fires `select_item`.

The `search` event fires after each debounced keystroke with the search term and result count.

DataLayer events: `search`, `select_item`.

---

## 5. Product Catalogue

All 105 products are defined in `js/data.js` as a JavaScript array called `PRODUCTS`. A `PRODUCT_MAP` object (keyed by product id) is also exported for O(1) lookups by id.

### 5.1 Category Breakdown

| Category | Count | Subcategories |
|---|---|---|
| Men | 25 | Shirts, T-Shirts, Jeans & Pants, Jackets, Hoodies, Knitwear |
| Women | 35 | Dresses, Tops, Jeans, Trousers, Skirts, Activewear, Jackets |
| Accessories | 25 | Bags, Sunglasses, Watches, Belts, Scarves, Hats |
| Kids | 10 | Boys, Girls |
| Footwear | 15 | Sneakers, Boots, Sandals, Flats |
| **Total** | **105** | |

### 5.2 Product Object Schema

Every product in the catalogue follows this structure:

```javascript
{
  id: 1,                          // Unique integer, used in URLs and as dataLayer item_id
  name: "Classic Oxford Button-Down Shirt",
  category: "men",                // Matches URL slugs
  subcategory: "Shirts",          // Used as item_category2 in dataLayer
  price: 2499,                    // In paise (smallest currency unit). Divide by 100 for rupees.
  originalPrice: 3299,            // null if not on sale
  badge: "sale",                  // "sale" | "new" | "bestseller" | "trending" | null
  rating: 4.5,                    // 1-5, used to render star icons
  reviews: 128,                   // Review count, displayed next to stars
  description: "...",             // Full product description
  colors: ["White", "Light Blue", "Navy", "Pink"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: [                       // Array of Unsplash CDN URLs
    "https://images.unsplash.com/photo-...",
    "https://images.unsplash.com/photo-..."
  ],
  material: "100% Cotton",
  care: "Machine wash cold",
  sku: "MN-SH-001"                // For reference, not used in dataLayer
}
```

**Price convention:** Prices are stored as integers in the smallest currency unit (paise). The `formatPrice()` helper converts them to display strings (e.g. `₹2,499`). The `DL.item()` method divides by 100 before pushing to dataLayer, so GA4 receives values in rupees as expected.

### 5.3 Helper Functions

```javascript
getProducts(opts)     // Filter + sort the catalogue. Accepts: category, subcategory,
                      // search (string), minPrice, maxPrice, sort
formatPrice(p)        // Converts integer paise to "₹X,XXX" display string
getDiscount(p, orig)  // Returns integer percentage discount, or null
```

---

## 6. Cart and Wishlist System

The `Cart` object in `js/cart.js` is the single source of truth for cart state. It reads and writes to `localStorage` on every mutation and dispatches a `cart:updated` custom DOM event so the header badge and cart drawer can re-render reactively.

### 6.1 Cart Methods

```javascript
Cart.add(productId, qty, color, size)         // Add or increment a line item
Cart.remove(productId, color, size)            // Remove a specific variant
Cart.updateQty(productId, color, size, qty)    // Set qty; removes if qty <= 0
Cart.clear()                                   // Empty the cart
Cart.summary()                                 // Returns { items, subtotal, discount,
                                               //           shipping, total, count }
```

Line items are uniquely identified by the combination of `id + color + size`. Adding the same product in a different colour creates a separate line item.

### 6.2 Shipping Logic

Free shipping applies when `subtotal >= ₹3,000`. Below that threshold, a flat ₹199 shipping fee is added. The threshold and fee are defined as constants in `cart.js` and easy to change for testing.

### 6.3 Wishlist Methods

```javascript
Cart.toggleWishlist(productId)   // Add or remove; returns true if added
Cart.isWishlisted(productId)     // Returns boolean
Cart.getWishlist()               // Returns array of product ids
```

---

## 7. Coupon Codes

Four test coupon codes are hardcoded in `cart.js`. All are case-insensitive.

| Code | Discount | Notes |
|---|---|---|
| `MODERNO10` | 10% off subtotal | Referenced in the announcement bar |
| `WELCOME20` | 20% off subtotal | Good for new user testing |
| `SALE15` | 15% off subtotal | |
| `FASHION30` | 30% off subtotal | Highest available discount |

To add more codes, edit the `COUPONS` object in `js/cart.js`:

```javascript
COUPONS: {
  'YOUR_CODE': { pct: 25, label: '25% off' },
}
```

---

## 8. DataLayer Architecture

### 8.1 Initialisation

The dataLayer is initialised in `index.html` before any scripts load:

```html
<script>window.dataLayer = window.dataLayer || [];</script>
```

This follows the standard GTM snippet convention so that if a real GTM container is added to the page later, it will inherit the same array without conflicts.

### 8.2 The DL Object

All event pushes go through the `DL` object defined in `js/datalayer.js`. It has a single `push()` method that both writes to `window.dataLayer` and logs to the console. The pattern looks like this:

```javascript
DL.push({
  event: 'add_to_cart',
  ecommerce: {
    currency: 'INR',
    value: 17.98,
    items: [ { item_id: '6', item_name: 'Essential Crew Neck Tee', ... } ]
  }
});
```

Every call to `DL.push()` logs the full event object to the browser console in a collapsible group, labelled `[DataLayer] {event_name}` in purple. This lets you follow the event stream without GTM Preview.

### 8.3 Item Object Schema

The `DL.item()` helper builds a GA4-compliant item object from a product and optional overrides:

```javascript
{
  item_id: "1",                      // String version of product.id
  item_name: "Classic Oxford Shirt",
  item_brand: "MODERNO",
  item_category: "men",              // Top-level category
  item_category2: "Shirts",          // Subcategory
  item_variant: "White",             // Selected colour
  item_list_name: "Homepage Bestsellers",
  item_list_id: "homepage_bestsellers",
  index: 1,                          // 1-based position in list
  price: 24.99,                      // In rupees (divided from paise)
  quantity: 1,
  discount: 8.00,                    // originalPrice - price, in rupees (0 if no sale)
  coupon: "MODERNO10"                // Applied coupon code, or empty string
}
```

### 8.4 Currency Convention

All `value` and `price` fields in the dataLayer are in rupees (₹), not paise. GA4 expects values in the major currency unit. The `DL.item()` helper divides stored paise values by 100 before pushing.

---

## 9. Complete Event Reference

This section documents every event the site pushes to `window.dataLayer`. Events are grouped by user journey stage.

---

### 9.1 Page Events

#### `page_view`

Fires on every route change, including the initial page load.

```javascript
{
  event: 'page_view',
  page_title: 'Home',
  page_location: 'http://localhost:4321/',
  page_path: '/',
  content_type: 'homepage',    // 'homepage' | 'product_list' | 'product' |
                                //  'cart' | 'checkout' | 'purchase_confirmation' | 'wishlist'
  user_id: null                // Null in this demo; hook up to a real user ID if needed
}
```

---

### 9.2 Product List Events

#### `view_item_list`

Fires when a product grid is rendered, including homepage grids, category pages, search results, and related product sections.

```javascript
{
  event: 'view_item_list',
  ecommerce: {
    item_list_name: 'Homepage Bestsellers',
    item_list_id: 'homepage_bestsellers',
    items: [ ...itemObjects ]    // Full item schema for each product in the list
  }
}
```

List names used across the site:

| Page | List Name | List ID |
|---|---|---|
| Homepage bestsellers | Homepage Bestsellers | `homepage_bestsellers` |
| Homepage new arrivals | Homepage New Arrivals | `homepage_new` |
| Homepage sale | Homepage Sale | `homepage_sale` |
| Category pages | e.g. "Men Listing" | `men_listing` |
| Related products | Related Products | `related_products` |
| Wishlist | Wishlist | `wishlist` |
| Search results | Search Results | `search_results` |

#### `select_item`

Fires when a user clicks a product card, navigating to the detail page.

```javascript
{
  event: 'select_item',
  ecommerce: {
    item_list_name: 'Homepage Bestsellers',
    item_list_id: 'homepage_bestsellers',
    items: [ ...singleItemObject ]
  }
}
```

---

### 9.3 Product Detail Events

#### `view_item`

Fires when the product detail page renders.

```javascript
{
  event: 'view_item',
  ecommerce: {
    currency: 'INR',
    value: 24.99,               // Product price in rupees
    items: [ ...singleItemObject ]
  }
}
```

---

### 9.4 Cart Events

#### `add_to_cart`

Fires when a product is added to cart, whether from the detail page (via the Add to Cart or Buy Now buttons) or from the quick-add button on any product card.

```javascript
{
  event: 'add_to_cart',
  ecommerce: {
    currency: 'INR',
    value: 17.98,               // price × quantity
    items: [ {
      ...itemObject,
      quantity: 2,
      item_variant: 'Black',    // Selected colour at time of add
    } ]
  }
}
```

#### `remove_from_cart`

Fires when a line item is removed entirely, either by clicking "Remove" or by decrementing quantity to zero.

```javascript
{
  event: 'remove_from_cart',
  ecommerce: {
    currency: 'INR',
    value: 8.99,                // price × quantity removed
    items: [ ...singleItemObject ]
  }
}
```

#### `view_cart`

Fires when the cart page (`#/cart`) loads and the cart is not empty.

```javascript
{
  event: 'view_cart',
  ecommerce: {
    currency: 'INR',
    value: 66.97,               // Cart subtotal
    items: [ ...allCartItems ]
  }
}
```

---

### 9.5 Checkout Events

These five events form the core of the GA4 checkout funnel.

#### `begin_checkout`

Fires when the checkout page first renders (Step 1) and when the "Proceed to Checkout" button is clicked on the cart page.

```javascript
{
  event: 'begin_checkout',
  ecommerce: {
    currency: 'INR',
    value: 60.27,               // Total after coupon and shipping
    coupon: 'MODERNO10',        // Empty string if no coupon
    items: [ ...allCartItems ]
  }
}
```

#### `add_shipping_info`

Fires twice: once when the user submits Step 1 (contact and address), and once when they submit Step 2 (shipping method selection). The `shipping_tier` field is populated on the second fire.

```javascript
{
  event: 'add_shipping_info',
  ecommerce: {
    currency: 'INR',
    value: 60.27,
    shipping_tier: 'Standard',  // 'Standard' | 'Express' | 'Same Day'
    coupon: 'MODERNO10',
    items: [ ...allCartItems ]
  }
}
```

#### `add_payment_info`

Fires when the user selects a payment method on Step 3 (on radio button change), and again when Step 3 is submitted.

```javascript
{
  event: 'add_payment_info',
  ecommerce: {
    currency: 'INR',
    value: 60.27,
    payment_type: 'card',       // 'card' | 'upi' | 'netbanking' | 'cod'
    coupon: 'MODERNO10',
    items: [ ...allCartItems ]
  }
}
```

#### `purchase`

Fires once when the checkout form is submitted on Step 3. This is the final ecommerce event in the funnel.

```javascript
{
  event: 'purchase',
  ecommerce: {
    transaction_id: 'MOD-LB3K2P',    // Unique per order, format: MOD-{base36 timestamp}
    affiliation: 'MODERNO Online Store',
    value: 60.27,                     // Grand total (subtotal + shipping - discount)
    tax: 10.85,                       // 18% of grand total (GST simulation)
    shipping: 1.99,                   // In rupees; 0 if free shipping applied
    currency: 'INR',
    coupon: 'MODERNO10',
    payment_type: 'card',
    items: [ ...allCartItems ]
  }
}
```

---

### 9.6 Promotion Events

#### `view_promotion`

Fires when the homepage promotional banner scrolls into view (via `IntersectionObserver`).

```javascript
{
  event: 'view_promotion',
  ecommerce: {
    promotion_id: 'sale_banner_001',
    promotion_name: 'End of Season Sale',
    creative_name: 'Homepage Promo Banner',
    creative_slot: 'homepage_center',
    items: []
  }
}
```

#### `select_promotion`

Fires when the user clicks a promotional banner or CTA tagged with a `data-promo` attribute.

```javascript
{
  event: 'select_promotion',
  ecommerce: {
    promotion_id: 'sale_banner_001',
    promotion_name: 'End of Season Sale',
    creative_name: 'Homepage Promo Banner',
    creative_slot: 'homepage_center'
  }
}
```

---

### 9.7 User and Engagement Events

#### `search`

Fires 300ms after the user stops typing in the search field (debounced).

```javascript
{
  event: 'search',
  search_term: 'leather jacket',
  search_results_count: 4
}
```

#### `add_to_wishlist`

Fires when a product is added to the wishlist (not on removal).

```javascript
{
  event: 'add_to_wishlist',
  ecommerce: {
    currency: 'INR',
    value: 59.99,
    items: [ ...singleItemObject ]
  }
}
```

#### `filter_applied`

Fires when any filter interaction occurs: category checkbox, size chip, colour swatch, or price range slider.

```javascript
{
  event: 'filter_applied',
  filter_type: 'category',      // 'category' | 'size' | 'color' | 'max_price' | 'rating'
  filter_value: 'men'
}
```

#### `sort_applied`

Fires when the sort dropdown value changes.

```javascript
{
  event: 'sort_applied',
  sort_value: 'price_asc'       // 'featured' | 'newest' | 'price_asc' | 'price_desc'
                                //  | 'rating' | 'name'
}
```

#### `quantity_changed`

Fires when a product quantity is updated in the cart (page or drawer), but not when it reaches zero (that fires `remove_from_cart` instead).

```javascript
{
  event: 'quantity_changed',
  product_id: '6',
  new_quantity: 3,
  old_quantity: 2
}
```

#### `coupon_applied`

Fires on every coupon interaction regardless of outcome.

```javascript
{
  event: 'coupon_applied',
  coupon_code: 'MODERNO10',
  status: 'applied',            // 'applied' | 'removed' | 'invalid'
  discount_amount: 598          // In paise; 0 if invalid or removed
}
```

#### `accordion_toggle`

Fires when any accordion section on the product detail page is opened or closed.

```javascript
{
  event: 'accordion_toggle',
  section_name: 'description',  // 'description' | 'details' | 'shipping'
  state: 'open'                 // 'open' | 'closed'
}
```

#### `image_gallery_interact`

Fires when a user clicks a thumbnail in the product gallery.

```javascript
{
  event: 'image_gallery_interact',
  product_id: 1,
  image_index: 1                // 0-based
}
```

#### `size_guide_open`

Fires when the "Size Guide" link on a product detail page is clicked.

```javascript
{
  event: 'size_guide_open',
  product_id: 1
}
```

#### `share`

Fires when any of the social share buttons on a product page is clicked.

```javascript
{
  event: 'share',
  method: 'Twitter',            // 'Twitter' | 'Facebook' | 'WhatsApp'
  content_type: 'product',
  item_id: '1'
}
```

#### `newsletter_subscribe`

Fires when the footer newsletter form is submitted.

```javascript
{
  event: 'newsletter_subscribe',
  email_hash: '***@***.***'     // Masked for privacy; replace with actual hashing if needed
}
```

#### `nav_click`

Fires when any header navigation link is clicked.

```javascript
{
  event: 'nav_click',
  nav_label: 'Women',
  destination: '#/shop/women'
}
```

#### `footer_click`

Fires when any footer link is clicked.

```javascript
{
  event: 'footer_click',
  label: 'Returns & Exchanges'
}
```

#### `cart_drawer_open`

Fires when the mini cart drawer is opened.

```javascript
{
  event: 'cart_drawer_open'
}
```

#### `checkout_step`

Fires at the start of each checkout step alongside the more specific checkout events above.

```javascript
{
  event: 'checkout_step',
  step_number: 1,               // 1 | 2 | 3
  step_name: 'Details'          // 'Details' | 'Shipping' | 'Payment'
}
```

#### `login` and `sign_up`

Available as `DL.login(method)` and `DL.signUp(method)` but not wired to any UI in the current build. Call them directly from the console to simulate:

```javascript
DL.login('email');
DL.signUp('google');
```

```javascript
// login
{ event: 'login', method: 'email' }

// sign_up
{ event: 'sign_up', method: 'email' }
```

---

## 10. GTM Setup Guide

To connect a real GTM container to this site:

**Step 1.** Add the GTM snippet to `index.html`. Paste the `<script>` tag in the `<head>`, and the `<noscript>` tag immediately after the opening `<body>` tag. Place both snippets **after** the `window.dataLayer = window.dataLayer || []` initialisation line.

**Step 2.** In GTM, create a GA4 Configuration tag with your Measurement ID and set it to fire on `All Pages` (or a custom `page_view` trigger if you prefer).

**Step 3.** For ecommerce events, enable the GA4 ecommerce data layer variable in GTM. Under Variables, create a new Data Layer Variable with the name `ecommerce`. Set the Data Layer Version to Version 2.

**Step 4.** Create triggers for each event you want to capture. For all standard ecommerce events (`view_item`, `add_to_cart`, `purchase`, etc.), a Custom Event trigger matching the event name is sufficient.

**Step 5.** In GTM Preview mode, load `http://localhost:4321` and walk through the user journey. You will see all events appear in the Tag Assistant summary panel.

**Important:** GTM's ecommerce tags expect the `ecommerce` object to be cleared between events. Add a `clear_ecommerce` push before each ecommerce event by enabling "Clear ecommerce object" in your GA4 Event tag settings, or by pushing `{ ecommerce: null }` manually before each event. The current dataLayer.js does not do this automatically because some implementations prefer to handle it at the GTM layer.

---

## 11. Testing Checklist

Use this checklist to verify the dataLayer implementation is working as expected across the full user journey.

### Ecommerce Funnel

- [ ] `page_view` fires on every route change with the correct `content_type`
- [ ] `view_item_list` fires on the homepage with `item_list_name: 'Homepage Bestsellers'`
- [ ] `select_item` fires when clicking a product card
- [ ] `view_item` fires on the product detail page with the correct `price` and `item_id`
- [ ] `add_to_cart` fires with the correct colour, size, and quantity
- [ ] `view_cart` fires when navigating to `#/cart`
- [ ] `begin_checkout` fires on checkout page load
- [ ] `add_shipping_info` fires on Step 1 and Step 2 submission
- [ ] `add_payment_info` fires when a payment method is selected and on Step 3 submission
- [ ] `purchase` fires with a unique `transaction_id` after order submission
- [ ] `purchase` value matches: `(subtotal - discount + shipping) / 100`

### Engagement Events

- [ ] `search` fires with the correct `search_term` and `search_results_count`
- [ ] `filter_applied` fires for category, size, colour, and price filters
- [ ] `sort_applied` fires when the dropdown changes
- [ ] `coupon_applied` fires with `status: 'applied'` for valid codes and `status: 'invalid'` for bad ones
- [ ] `view_promotion` fires when the homepage banner scrolls into view
- [ ] `add_to_wishlist` fires and does not fire again on removal
- [ ] `accordion_toggle` fires with the correct section name and state

### Data Quality

- [ ] All `price` values in dataLayer items are in rupees (not paise) — divide by 100 if values look 100x too large
- [ ] `item_id` is always a string
- [ ] `currency` is always `'INR'`
- [ ] `item_list_name` and `item_list_id` are present on list and select events
- [ ] `coupon` field is an empty string (not `null` or `undefined`) when no coupon is active
- [ ] `discount` on item objects is 0 (not `null`) when no sale price exists

---

## 12. Known Limitations

**No real images for some products.** Product images come from Unsplash CDN URLs. If Unsplash is unavailable or rate-limits the requests, images fall back to `picsum.photos` seeded by product id. The fallback images will not be fashion-relevant, but the site will function normally.

**Prices stored in paise.** This is intentional — it avoids floating-point errors in cart calculations. All display and dataLayer outputs divide by 100. If you are building GTM calculated fields or custom dimensions, remember to account for this.

**No user authentication.** The `login` and `sign_up` dataLayer methods exist but are not wired to any UI. Trigger them from the browser console when testing those event schemas.

**Transaction IDs are not truly unique under fast repeated testing.** The ID format is `MOD-` followed by a base-36 representation of `Date.now()`. Completing two orders within the same millisecond (unlikely in manual testing) would produce duplicate IDs. For automated testing, override the ID generation in `app.js` if needed.

**`clear_ecommerce` is not pushed automatically.** This is by design — it gives you control over whether to handle ecommerce clearing in GTM tags or in the dataLayer itself. If your GA4 tag configuration requires cleared ecommerce between events, add `{ ecommerce: null }` pushes to `datalayer.js` before each ecommerce event.

**Mobile nav filters.** The filter sidebar is hidden on mobile and triggered by a floating "Filters" button. The button currently shows the sidebar as a CSS class toggle. The filter interactions and `filter_applied` events work identically across mobile and desktop.

---

*MODERNO is a test environment. It contains no real products, processes no real payments, and collects no real user data.*
