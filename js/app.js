/* ============================================================
   MODERNO — App (Router + Pages)
   ============================================================ */

/* ── Toast ── */
function toast(msg, type = '') {
  const tc = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ${msg}`;
  tc.appendChild(el);
  setTimeout(() => el.classList.add('show'), 10);
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 3000);
}

/* ── Stars HTML ── */
function starsHTML(rating) {
  let html = '<div class="stars">';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star${i <= Math.round(rating) ? '' : ' empty'}">★</span>`;
  }
  return html + '</div>';
}

/* ── Product Card HTML ── */
function productCardHTML(product, index, listName) {
  const disc = getDiscount(product.price, product.originalPrice);
  const wished = Cart.isWishlisted(product.id);
  return `
    <article class="product-card" data-id="${product.id}" data-index="${index}" data-list="${listName}">
      <div class="product-img-wrap">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/${product.id}/600/750'">
        ${product.badge ? `<span class="product-badge badge-${product.badge}">${product.badge === 'bestseller' ? '★ Best' : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}</span>` : ''}
        <div class="product-quick-actions">
          <button class="quick-action-btn wishlist-btn${wished ? ' wishlist-active' : ''}" data-id="${product.id}" title="Wishlist">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${wished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="quick-action-btn quick-add-btn" data-id="${product.id}" title="Quick Add">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-category">${product.subcategory}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          ${starsHTML(product.rating)}
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
          ${disc ? `<span class="price-off">-${disc}%</span>` : ''}
        </div>
        <div class="product-colors">
          ${product.colors.slice(0, 5).map(c => `<span class="color-dot" style="background:${colorHex(c)}" title="${c}"></span>`).join('')}
        </div>
      </div>
    </article>`;
}

function colorHex(name) {
  const map = {
    'White': '#f5f5f5', 'Black': '#111111', 'Navy': '#1a2b5e', 'Blue': '#2563eb',
    'Light Blue': '#93c5fd', 'Dark Blue': '#1e3a8a', 'Sky Blue': '#7dd3fc',
    'Grey': '#9ca3af', 'Grey Marl': '#d1d5db', 'Charcoal': '#4b5563',
    'Red': '#ef4444', 'Burgundy': '#7f1d1d', 'Pink': '#f472b6',
    'Blush': '#fbcfe8', 'Dusty Pink': '#fca5a5', 'Rose': '#f43f5e',
    'Green': '#22c55e', 'Sage': '#86efac', 'Olive': '#65a30d', 'Forest': '#166534', 'Forest Green': '#14532d',
    'Camel': '#d97706', 'Tan': '#b45309', 'Beige': '#fef3c7', 'Khaki': '#a3a077',
    'Brown': '#92400e', 'Chocolate': '#3b1f0a', 'Cognac': '#8b4513',
    'Orange': '#f97316', 'Coral': '#fb7185', 'Terracotta': '#c2562b',
    'Yellow': '#facc15', 'Gold': '#b7860b', 'Champagne': '#f0d080',
    'Purple': '#a855f7', 'Lavender': '#c4b5fd', 'Cobalt': '#1e40af',
    'Teal': '#0d9488', 'Cyan': '#06b6d4', 'Indigo': '#4f46e5',
    'Natural': '#f5e6c8', 'Stone': '#d6d3d1', 'Cream': '#fffbeb', 'Ivory': '#fffff0',
    'Rust': '#b45309', 'Mint': '#bbf7d0', 'Sage Green': '#86efac',
  };
  const key = Object.keys(map).find(k => name.toLowerCase().includes(k.toLowerCase()));
  return key ? map[key] : '#888888';
}

/* ── Cart Badge Update ── */
function updateCartBadge(count) {
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);
  document.getElementById('drawerCartCount').textContent = count;
}

/* ── Cart Drawer ── */
function renderCartDrawer() {
  const { items, subtotal, discount, shipping, total } = Cart.summary();
  const container = document.getElementById('drawerItems');
  const footer = document.getElementById('drawerFooter');

  if (!items.length) {
    container.innerHTML = `<div class="drawer-empty">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <p>Your cart is empty</p>
      <a href="#/shop" class="btn btn-primary btn-sm" style="margin-top:12px">Start Shopping</a>
    </div>`;
    footer.innerHTML = '';
    return;
  }

  container.innerHTML = items.map(ci => {
    const p = PRODUCT_MAP[ci.id];
    return `<div class="drawer-item" data-id="${ci.id}" data-color="${ci.color}" data-size="${ci.size}">
      <img class="drawer-item-img" src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://picsum.photos/seed/${p.id}/300/400'">
      <div class="drawer-item-info">
        <h4>${p.name}</h4>
        <div class="drawer-item-meta">${ci.color} · ${ci.size}</div>
        <div class="drawer-item-controls">
          <button class="qty-btn drawer-qty-minus" data-id="${ci.id}" data-color="${ci.color}" data-size="${ci.size}" data-qty="${ci.qty}">−</button>
          <span class="qty-display">${ci.qty}</span>
          <button class="qty-btn drawer-qty-plus" data-id="${ci.id}" data-color="${ci.color}" data-size="${ci.size}" data-qty="${ci.qty}">+</button>
          <span class="drawer-item-remove" data-id="${ci.id}" data-color="${ci.color}" data-size="${ci.size}">Remove</span>
        </div>
        <div class="drawer-item-price">${formatPrice(p.price * ci.qty)}</div>
      </div>
    </div>`;
  }).join('');

  footer.innerHTML = `
    <div class="drawer-subtotal">
      <span>Subtotal</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    ${discount ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:var(--sale);margin-bottom:12px"><span>Discount</span><span>-${formatPrice(discount)}</span></div>` : ''}
    <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--text2);margin-bottom:16px">
      <span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--success)">Free</span>' : formatPrice(shipping)}</span>
    </div>
    ${subtotal < Cart.FREE_SHIPPING_THRESHOLD ? `<p style="font-size:11px;color:var(--text2);margin-bottom:12px;text-align:center">Add ${formatPrice(Cart.FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping</p>` : '<p style="font-size:11px;color:var(--success);margin-bottom:12px;text-align:center">✓ You have free shipping!</p>'}
    <a href="#/cart" class="btn btn-outline btn-full" style="margin-bottom:10px">View Cart</a>
    <a href="#/checkout" class="btn btn-primary btn-full">Checkout · ${formatPrice(total)}</a>`;
}

function openCartDrawer() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
  DL.cartDrawerOpen();
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── PAGES ── */

/* HOME PAGE */
function renderHome() {
  const featured = PRODUCTS.filter(p => p.badge === 'bestseller').slice(0, 8);
  const newArrivals = PRODUCTS.filter(p => p.badge === 'new').slice(0, 8);
  const saleItems = PRODUCTS.filter(p => p.badge === 'sale').slice(0, 8);

  const html = `
    <!-- Hero -->
    <section class="hero" id="heroPromo">
      <div class="hero-content">
        <p class="hero-eyebrow">New Collection 2024</p>
        <h1 class="hero-title">Dress for the<br>Life You Want</h1>
        <p class="hero-subtitle">Effortless style for every occasion. Quality clothing and accessories curated for the modern wardrobe.</p>
        <div class="hero-ctas">
          <a href="#/shop/women" class="btn btn-primary" data-promo="hero_cta_women">Shop Women</a>
          <a href="#/shop/men" class="btn btn-outline" data-promo="hero_cta_men">Shop Men</a>
        </div>
      </div>
      <div class="hero-img">
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&h=1600&q=80" alt="Fashion Hero">
        <div class="hero-badge">
          <span>UP TO</span>
          <strong>40% OFF</strong>
        </div>
      </div>
    </section>

    <!-- Features -->
    <div class="features-strip">
      <div class="inner">
        <div class="feature-item">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          <h4>Free Shipping</h4>
          <p>On all orders above ₹3,000</p>
        </div>
        <div class="feature-item">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          <h4>Easy Returns</h4>
          <p>30-day hassle-free returns</p>
        </div>
        <div class="feature-item">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <h4>Secure Payment</h4>
          <p>100% secure transactions</p>
        </div>
        <div class="feature-item">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <h4>24/7 Support</h4>
          <p>Chat, email or call us anytime</p>
        </div>
      </div>
    </div>

    <!-- Category Grid -->
    <div class="category-strip">
      <div class="section-header">
        <h2 class="section-title">Shop by Category</h2>
        <a href="#/shop" class="section-link">All categories →</a>
      </div>
      <div class="category-grid">
        ${[
          { id: 'women', label: 'Women', count: '35+ styles', img: 'photo-1483985988355-763728e1935b' },
          { id: 'men', label: 'Men', count: '30+ styles', img: 'photo-1617196034183-421b4040c8aa' },
          { id: 'accessories', label: 'Accessories', count: '25+ styles', img: 'photo-1553062407-98eeb64c6a62' },
          { id: 'kids', label: 'Kids', count: '10+ styles', img: 'photo-1503919006754-d38325e1b49e' },
          { id: 'footwear', label: 'Footwear', count: '15+ styles', img: 'photo-1542291026-7eec264c27ff' },
        ].map(cat => `
          <a href="#/shop/${cat.id}" class="category-card" data-cat="${cat.id}">
            <img src="https://images.unsplash.com/${cat.img}?auto=format&fit=crop&w=400&h=533&q=80" alt="${cat.label}" loading="lazy">
            <div class="category-card-overlay">
              <h3>${cat.label}</h3>
              <span>${cat.count}</span>
            </div>
          </a>`).join('')}
      </div>
    </div>

    <!-- Bestsellers -->
    <div class="products-section">
      <div class="section-header">
        <h2 class="section-title">Bestsellers</h2>
        <a href="#/shop" class="section-link">View all →</a>
      </div>
      <div class="product-grid" id="featuredGrid">
        ${featured.map((p, i) => productCardHTML(p, i, 'Homepage Bestsellers')).join('')}
      </div>
    </div>

    <!-- Promo Banner -->
    <div class="promo-banner" id="promoBanner" data-promo-id="sale_banner" data-promo-name="End of Season Sale" style="position:relative">
      <div class="promo-banner-inner">
        <span class="tag tag-sale" style="margin-bottom:16px;font-size:13px;padding:6px 16px">LIMITED TIME OFFER</span>
        <h2>End of Season Sale<br>Up to 40% Off</h2>
        <p>Don't miss our biggest sale of the year. Select styles across all categories.</p>
        <a href="#/shop/sale" class="btn btn-primary" data-promo="sale_cta">Shop the Sale</a>
      </div>
    </div>

    <!-- New Arrivals -->
    <div class="products-section">
      <div class="section-header">
        <h2 class="section-title">New Arrivals</h2>
        <a href="#/shop" class="section-link">View all →</a>
      </div>
      <div class="product-grid">
        ${newArrivals.map((p, i) => productCardHTML(p, i, 'Homepage New Arrivals')).join('')}
      </div>
    </div>

    <!-- Sale -->
    <div class="products-section">
      <div class="section-header">
        <h2 class="section-title" style="color:var(--sale)">On Sale Now</h2>
        <a href="#/shop/sale" class="section-link" style="color:var(--sale)">All sale items →</a>
      </div>
      <div class="product-grid">
        ${saleItems.map((p, i) => productCardHTML(p, i, 'Homepage Sale')).join('')}
      </div>
    </div>`;

  document.getElementById('app').innerHTML = html;
  setActiveNav('home');
  document.title = 'MODERNO — Modern Fashion';

  DL.pageView({ title: 'Home', contentType: 'homepage' });
  DL.viewItemList(featured, 'Homepage Bestsellers', 'homepage_bestsellers');
  setTimeout(() => DL.viewItemList(newArrivals, 'Homepage New Arrivals', 'homepage_new'), 500);

  /* Promo observation */
  const promoEl = document.getElementById('promoBanner');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        DL.viewPromotion('sale_banner_001', 'End of Season Sale', 'Homepage Promo Banner', 'homepage_center');
        obs.unobserve(e.target);
      }
    });
  });
  obs.observe(promoEl);

  bindProductCards();
}

/* SHOP PAGE */
function renderShop(category, sortVal = 'featured') {
  const catLabel = category === 'sale' ? 'Sale' : category ? (category.charAt(0).toUpperCase() + category.slice(1)) : 'All';
  const products = getProducts({ category, sort: sortVal });
  const listName = catLabel + ' Listing';

  const subcats = category ? [...new Set(PRODUCTS.filter(p => p.category === category).map(p => p.subcategory))] : [];
  const maxP = Math.max(...PRODUCTS.map(p => p.price));

  const html = `
    <div class="breadcrumb">
      <span class="breadcrumb-item"><a href="#/">Home</a></span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-item active">${catLabel}</span>
    </div>
    <div class="shop-page">
      <!-- Filters Sidebar -->
      <aside class="shop-filters">
        <div class="filter-header">
          Filters
          <span class="filter-clear" id="clearFilters">Clear all</span>
        </div>

        <div class="filter-section">
          <h4 class="filter-title">Category</h4>
          ${CATEGORIES.map(cat => `
            <div class="filter-option">
              <input type="checkbox" id="cat_${cat.id}" name="category" value="${cat.id}" ${category === cat.id ? 'checked' : ''}>
              <label for="cat_${cat.id}">${cat.label}</label>
              <span>${cat.count}</span>
            </div>`).join('')}
        </div>

        ${subcats.length ? `<div class="filter-section">
          <h4 class="filter-title">Type</h4>
          ${subcats.map(sc => `
            <div class="filter-option">
              <input type="checkbox" class="subcat-filter" value="${sc}">
              <label>${sc}</label>
            </div>`).join('')}
        </div>` : ''}

        <div class="filter-section">
          <h4 class="filter-title">Price Range</h4>
          <div class="price-range">
            <input type="range" id="priceRange" min="0" max="${maxP}" value="${maxP}" step="100">
            <div class="price-range-labels">
              <span>₹0</span>
              <span id="priceRangeLabel">${formatPrice(maxP)}</span>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <h4 class="filter-title">Size</h4>
          <div class="size-grid">
            ${['XS','S','M','L','XL','XXL','28','30','32','34','36','38'].map(s =>
              `<span class="size-chip" data-size="${s}">${s}</span>`).join('')}
          </div>
        </div>

        <div class="filter-section">
          <h4 class="filter-title">Colour</h4>
          <div class="color-filter-grid">
            ${[['Black','#111'],['White','#f5f5f5'],['Navy','#1a2b5e'],['Red','#ef4444'],['Green','#22c55e'],['Camel','#d97706'],['Pink','#f472b6'],['Grey','#9ca3af'],['Blue','#2563eb'],['Beige','#fef3c7']].map(([n,hex]) =>
              `<div class="color-filter-item" data-color="${n}">
                <div class="color-filter-swatch" style="background:${hex}"></div>
                <span>${n}</span>
              </div>`).join('')}
          </div>
        </div>

        <div class="filter-section">
          <h4 class="filter-title">Rating</h4>
          ${[5,4,3].map(r => `
            <div class="filter-option">
              <input type="checkbox" id="rating_${r}" name="rating" value="${r}">
              <label for="rating_${r}">${'★'.repeat(r)} & up</label>
            </div>`).join('')}
        </div>
      </aside>

      <!-- Products Main -->
      <div class="shop-main">
        <div class="shop-toolbar">
          <div style="display:flex;align-items:center;gap:12px">
            <button class="mobile-filters-btn" id="mobileFiltersBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filters
            </button>
            <span class="shop-count">${products.length} products</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px">
            <div class="shop-sort">
              <select id="shopSort">
                <option value="featured" ${sortVal === 'featured' ? 'selected' : ''}>Featured</option>
                <option value="newest" ${sortVal === 'newest' ? 'selected' : ''}>Newest</option>
                <option value="price_asc" ${sortVal === 'price_asc' ? 'selected' : ''}>Price: Low to High</option>
                <option value="price_desc" ${sortVal === 'price_desc' ? 'selected' : ''}>Price: High to Low</option>
                <option value="rating" ${sortVal === 'rating' ? 'selected' : ''}>Top Rated</option>
                <option value="name" ${sortVal === 'name' ? 'selected' : ''}>Name A-Z</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Category chips -->
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px">
          <a href="#/shop" class="chip${!category ? ' active' : ''}">All</a>
          ${CATEGORIES.map(c => `<a href="#/shop/${c.id}" class="chip${category === c.id ? ' active' : ''}">${c.label}</a>`).join('')}
          <a href="#/shop/sale" class="chip${category === 'sale' ? ' active' : ''}" style="${category === 'sale' ? '' : 'color:var(--sale);border-color:var(--sale)'}">Sale</a>
        </div>

        <div class="product-grid" id="shopGrid">
          ${products.length ? products.map((p, i) => productCardHTML(p, i, listName)).join('') : '<div class="empty-state"><h2>No products found</h2><p>Try adjusting your filters</p></div>'}
        </div>
      </div>
    </div>`;

  document.getElementById('app').innerHTML = html;
  setActiveNav(category || 'shop');
  document.title = `${catLabel} — MODERNO`;
  DL.pageView({ title: catLabel + ' | MODERNO', contentType: 'product_list' });
  DL.viewItemList(products.slice(0, 20), listName, (category || 'all') + '_listing');

  /* Sort handler */
  document.getElementById('shopSort').addEventListener('change', function () {
    DL.sortApplied(this.value);
    renderShop(category, this.value);
  });

  /* Category filter checkboxes */
  document.querySelectorAll('[name="category"]').forEach(cb => {
    cb.addEventListener('change', function () {
      const cat = this.checked ? this.value : null;
      DL.filterApplied('category', cat || 'all');
      Router.go('#/shop/' + (cat || ''));
    });
  });

  /* Size chips */
  document.querySelectorAll('.size-chip').forEach(chip => {
    chip.addEventListener('click', function () {
      this.classList.toggle('active');
      DL.filterApplied('size', this.dataset.size);
    });
  });

  /* Color filters */
  document.querySelectorAll('.color-filter-item').forEach(item => {
    item.addEventListener('click', function () {
      this.classList.toggle('active');
      DL.filterApplied('color', this.dataset.color);
    });
  });

  /* Price range */
  const priceRange = document.getElementById('priceRange');
  if (priceRange) {
    priceRange.addEventListener('input', function () {
      document.getElementById('priceRangeLabel').textContent = formatPrice(+this.value);
      DL.filterApplied('max_price', this.value);
    });
  }

  /* Clear filters */
  document.getElementById('clearFilters').addEventListener('click', () => {
    Router.go('#/shop/' + (category || ''));
  });

  bindProductCards();
}

/* PRODUCT DETAIL PAGE */
function renderProduct(id) {
  const product = PRODUCT_MAP[id];
  if (!product) { document.getElementById('app').innerHTML = '<div class="empty-state"><h2>Product not found</h2><a href="#/shop" class="btn btn-primary">Back to Shop</a></div>'; return; }

  let selectedColor = product.colors[0];
  let selectedSize = product.sizes[0];
  let qty = 1;
  const wished = Cart.isWishlisted(product.id);
  const disc = getDiscount(product.price, product.originalPrice);

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const html = `
    <div class="breadcrumb">
      <span class="breadcrumb-item"><a href="#/">Home</a></span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-item"><a href="#/shop/${product.category}">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</a></span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-item active">${product.name}</span>
    </div>

    <div class="product-detail">
      <!-- Gallery -->
      <div class="product-gallery">
        <div class="gallery-main" id="galleryMain">
          <img id="mainImg" src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://picsum.photos/seed/${product.id}/600/750'">
        </div>
        <div class="gallery-thumbs">
          ${product.images.map((img, i) => `
            <div class="gallery-thumb${i === 0 ? ' active' : ''}" data-idx="${i}" data-src="${img}">
              <img src="${img}" alt="${product.name} ${i + 1}" onerror="this.src='https://picsum.photos/seed/${product.id}${i}/300/400'">
            </div>`).join('')}
        </div>
      </div>

      <!-- Info -->
      <div class="product-detail-info">
        <p class="detail-category">${product.category.toUpperCase()} / ${product.subcategory.toUpperCase()}</p>
        <h1 class="detail-title">${product.name}</h1>
        <div class="detail-rating">
          ${starsHTML(product.rating)}
          <span>${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="detail-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
          ${disc ? `<span class="price-off">-${disc}% OFF</span>` : ''}
        </div>

        <!-- Colour -->
        <div class="detail-section">
          <p class="detail-section-title">Colour: <strong id="selectedColorLabel">${selectedColor}</strong></p>
          <div class="color-options" id="colorOptions">
            ${product.colors.map((c, i) => `
              <div class="color-option${i === 0 ? ' active' : ''}" data-color="${c}">
                <div class="color-swatch" style="background:${colorHex(c)}"></div>
                ${c}
              </div>`).join('')}
          </div>
        </div>

        <!-- Size -->
        <div class="detail-section">
          <p class="detail-section-title">Size: <strong id="selectedSizeLabel">${selectedSize}</strong></p>
          <div class="size-options" id="sizeOptions">
            ${product.sizes.map((s, i) => `<div class="size-option${i === 0 ? ' active' : ''}" data-size="${s}">${s}</div>`).join('')}
          </div>
          <span class="size-guide-link" id="sizeGuideBtn">Size Guide →</span>
        </div>

        <!-- Quantity & Actions -->
        <div class="detail-section">
          <p class="detail-section-title">Quantity</p>
          <div class="qty-selector">
            <button id="qtyMinus">−</button>
            <span id="qtyDisplay">1</span>
            <button id="qtyPlus">+</button>
          </div>
        </div>

        <div class="detail-actions">
          <div class="detail-add-row">
            <button class="btn btn-primary" id="addToCartBtn" style="flex:1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              Add to Cart
            </button>
            <button class="btn btn-outline btn-wishlist${wished ? ' active' : ''}" id="wishlistBtn" style="width:52px;padding:0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${wished ? 'var(--sale)' : 'none'}" stroke="${wished ? 'var(--sale)' : 'currentColor'}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
          <button class="btn btn-outline btn-full" id="buyNowBtn">Buy Now</button>
        </div>

        <!-- Meta -->
        <div class="detail-meta">
          <div class="detail-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            Free shipping on orders above ₹3,000
          </div>
          <div class="detail-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            Free 30-day returns
          </div>
          <div class="detail-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Secure checkout — 100% protected
          </div>
        </div>

        <!-- Accordion -->
        <div class="detail-accordion">
          <div class="accordion-item">
            <button class="accordion-btn" data-section="description">
              Description
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="accordion-content"><p>${product.description}</p></div>
          </div>
          <div class="accordion-item">
            <button class="accordion-btn" data-section="details">
              Product Details
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="accordion-content">
              <p><strong>Material:</strong> ${product.material}</p>
              <p><strong>Care:</strong> ${product.care}</p>
              <p><strong>SKU:</strong> ${product.sku}</p>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-btn" data-section="shipping">
              Shipping & Returns
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="accordion-content">
              <p>Standard delivery: 3–5 business days (₹199, free over ₹3,000)</p>
              <p>Express delivery: 1–2 business days (₹399)</p>
              <p>Free returns within 30 days of purchase. Items must be unworn with original tags attached.</p>
            </div>
          </div>
        </div>

        <!-- Share -->
        <div style="margin-top:20px;display:flex;gap:10px;align-items:center">
          <span style="font-size:12px;color:var(--text2);font-weight:600;text-transform:uppercase;letter-spacing:0.06em">Share:</span>
          ${['Twitter','Facebook','WhatsApp'].map(m => `<button class="share-btn" data-method="${m}" style="font-size:12px;color:var(--text2);padding:4px 10px;border:1px solid var(--border);border-radius:4px;transition:all .2s">${m}</button>`).join('')}
        </div>
      </div>
    </div>

    <!-- Related Products -->
    ${related.length ? `
    <div class="products-section">
      <div class="section-header">
        <h2 class="section-title">You May Also Like</h2>
      </div>
      <div class="product-grid">
        ${related.map((p, i) => productCardHTML(p, i, 'Related Products')).join('')}
      </div>
    </div>` : ''}`;

  document.getElementById('app').innerHTML = html;
  document.title = `${product.name} — MODERNO`;
  setActiveNav(product.category);
  DL.pageView({ title: product.name + ' | MODERNO', contentType: 'product' });
  DL.viewItem(product, selectedColor);

  /* Gallery thumbs */
  document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', function () {
      document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('mainImg').src = this.dataset.src;
      DL.imageGalleryInteract(product.id, +this.dataset.idx);
    });
  });

  /* Color selection */
  document.querySelectorAll('.color-option').forEach(opt => {
    opt.addEventListener('click', function () {
      document.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
      this.classList.add('active');
      selectedColor = this.dataset.color;
      document.getElementById('selectedColorLabel').textContent = selectedColor;
    });
  });

  /* Size selection */
  document.querySelectorAll('.size-option').forEach(opt => {
    opt.addEventListener('click', function () {
      if (this.classList.contains('unavailable')) return;
      document.querySelectorAll('.size-option').forEach(o => o.classList.remove('active'));
      this.classList.add('active');
      selectedSize = this.dataset.size;
      document.getElementById('selectedSizeLabel').textContent = selectedSize;
    });
  });

  /* Qty */
  document.getElementById('qtyMinus').addEventListener('click', () => { if (qty > 1) { qty--; document.getElementById('qtyDisplay').textContent = qty; } });
  document.getElementById('qtyPlus').addEventListener('click', () => { qty++; document.getElementById('qtyDisplay').textContent = qty; });

  /* Add to Cart */
  document.getElementById('addToCartBtn').addEventListener('click', () => {
    Cart.add(product.id, qty, selectedColor, selectedSize);
    DL.addToCart(product, qty, selectedColor, selectedSize);
    toast(`${product.name} added to cart!`, 'success');
    openCartDrawer();
  });

  /* Buy Now */
  document.getElementById('buyNowBtn').addEventListener('click', () => {
    Cart.add(product.id, qty, selectedColor, selectedSize);
    DL.addToCart(product, qty, selectedColor, selectedSize);
    Router.go('#/checkout');
  });

  /* Wishlist */
  document.getElementById('wishlistBtn').addEventListener('click', function () {
    const added = Cart.toggleWishlist(product.id);
    this.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="${added ? 'var(--sale)' : 'none'}" stroke="${added ? 'var(--sale)' : 'currentColor'}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
    if (added) { DL.addToWishlist(product, selectedColor); toast('Added to wishlist!'); }
    else { toast('Removed from wishlist'); }
  });

  /* Accordion */
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const isOpen = content.classList.contains('open');
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      document.querySelectorAll('.accordion-btn').forEach(b => b.classList.remove('open'));
      if (!isOpen) { content.classList.add('open'); this.classList.add('open'); }
      DL.accordionToggle(this.dataset.section, !isOpen);
    });
  });

  /* Size guide */
  document.getElementById('sizeGuideBtn').addEventListener('click', () => { DL.sizeGuideOpen(product.id); toast('Size guide coming soon!'); });

  /* Share */
  document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', function () { DL.share(this.dataset.method, 'product', String(product.id)); toast(`Shared on ${this.dataset.method}!`); });
  });

  /* Related */
  if (related.length) { DL.viewItemList(related, 'Related Products', 'related_products'); }
  bindProductCards();
}

/* CART PAGE */
function renderCart() {
  const { items, subtotal, discount, shipping, total } = Cart.summary();
  const coupon = Cart.getCoupon();

  const html = `
    <div style="max-width:1200px;margin:0 auto;padding:40px 24px">
      <h1 class="cart-page-title">Shopping Cart (${items.length} ${items.length === 1 ? 'item' : 'items'})</h1>
      ${items.length ? `
      <div class="cart-page">
        <div>
          <div class="cart-items-list">
            ${items.map(ci => {
              const p = PRODUCT_MAP[ci.id];
              return `
              <div class="cart-list-item" data-id="${ci.id}" data-color="${ci.color}" data-size="${ci.size}">
                <img class="cart-item-img" src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://picsum.photos/seed/${p.id}/200/250'">
                <div class="cart-item-detail">
                  <h3>${p.name}</h3>
                  <p class="meta">${ci.color} · Size ${ci.size}</p>
                  <div class="cart-qty-row">
                    <button class="cart-qty-btn" data-action="minus" data-id="${ci.id}" data-color="${ci.color}" data-size="${ci.size}" data-qty="${ci.qty}">−</button>
                    <span class="cart-qty-num">${ci.qty}</span>
                    <button class="cart-qty-btn" data-action="plus" data-id="${ci.id}" data-color="${ci.color}" data-size="${ci.size}" data-qty="${ci.qty}">+</button>
                    <span class="cart-remove-link" data-id="${ci.id}" data-color="${ci.color}" data-size="${ci.size}">Remove</span>
                  </div>
                </div>
                <div class="cart-item-price-col">
                  <div class="price">${formatPrice(p.price * ci.qty)}</div>
                  <div class="each">${formatPrice(p.price)} each</div>
                </div>
              </div>`;
            }).join('')}
          </div>
          <div style="margin-top:24px;display:flex;gap:12px">
            <a href="#/shop" class="btn btn-outline btn-sm">← Continue Shopping</a>
          </div>
        </div>

        <!-- Summary -->
        <div class="cart-summary">
          <h3>Order Summary</h3>
          <div class="summary-line"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
          ${discount ? `<div class="summary-line summary-discount"><span>Discount (${coupon.code})</span><span>-${formatPrice(discount)}</span></div>` : ''}
          <div class="summary-line"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--success)">Free</span>' : formatPrice(shipping)}</span></div>
          <div class="summary-line total"><span>Total</span><span>${formatPrice(total)}</span></div>

          <div class="coupon-row">
            <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;color:var(--text2)">Coupon Code</p>
            <div class="coupon-input">
              <input type="text" id="couponInput" placeholder="Enter code" value="${coupon ? coupon.code : ''}">
              <button id="applyCouponBtn">${coupon ? 'Remove' : 'Apply'}</button>
            </div>
            <p id="couponMsg" style="font-size:12px;margin-top:6px;color:var(--success);display:${coupon ? 'block' : 'none'}">${coupon ? '✓ ' + coupon.label + ' applied' : ''}</p>
          </div>

          <div style="margin-top:16px">
            <a href="#/checkout" class="btn btn-primary btn-full" id="checkoutBtn">Proceed to Checkout</a>
          </div>
          <p style="font-size:11px;color:var(--text3);text-align:center;margin-top:10px">
            🔒 Secure checkout — SSL encrypted
          </p>
        </div>
      </div>` : `
      <div class="cart-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--border)" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <a href="#/shop" class="btn btn-primary">Start Shopping</a>
      </div>`}
    </div>`;

  document.getElementById('app').innerHTML = html;
  document.title = 'Cart — MODERNO';
  setActiveNav('cart');
  DL.pageView({ title: 'Cart | MODERNO', contentType: 'cart' });
  if (items.length) DL.viewCart(items, subtotal);

  /* Qty buttons */
  document.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const { id, color, size, qty, action } = this.dataset;
      const oldQty = +qty;
      const newQty = action === 'plus' ? oldQty + 1 : oldQty - 1;
      const product = PRODUCT_MAP[+id];
      if (newQty <= 0) {
        Cart.remove(+id, color, size);
        DL.removeFromCart(product, 1, color, size);
      } else {
        Cart.updateQty(+id, color, size, newQty);
        DL.quantityChanged(id, newQty, oldQty);
      }
      renderCart();
    });
  });

  /* Remove links */
  document.querySelectorAll('.cart-remove-link').forEach(link => {
    link.addEventListener('click', function () {
      const { id, color, size } = this.dataset;
      const product = PRODUCT_MAP[+id];
      Cart.remove(+id, color, size);
      DL.removeFromCart(product, 1, color, size);
      renderCart();
      toast('Item removed from cart');
    });
  });

  /* Coupon */
  const applyBtn = document.getElementById('applyCouponBtn');
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const currentCoupon = Cart.getCoupon();
      if (currentCoupon) {
        Cart.removeCoupon();
        DL.couponApplied(currentCoupon.code, 'removed', 0);
        toast('Coupon removed');
        renderCart();
      } else {
        const code = document.getElementById('couponInput').value.trim();
        if (!code) { toast('Enter a coupon code', 'error'); return; }
        const result = Cart.applyCoupon(code);
        if (result) {
          const disc = Math.round(subtotal * result.pct / 100);
          DL.couponApplied(code, 'applied', disc);
          toast(`Coupon applied! ${result.label}`, 'success');
          renderCart();
        } else {
          DL.couponApplied(code, 'invalid', 0);
          toast('Invalid coupon code', 'error');
        }
      }
    });
  }

  /* Checkout btn */
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      DL.beginCheckout(items, total, coupon ? coupon.code : '');
    });
  }
}

/* CHECKOUT PAGE */
function renderCheckout(step = 1) {
  const { items, subtotal, discount, shipping, total } = Cart.summary();
  const coupon = Cart.getCoupon();
  if (!items.length) { Router.go('#/cart'); return; }

  const steps = [
    { n: 1, label: 'Details' },
    { n: 2, label: 'Shipping' },
    { n: 3, label: 'Payment' },
  ];

  const orderItemsHTML = items.map(ci => {
    const p = PRODUCT_MAP[ci.id];
    return `<div class="checkout-order-item">
      <div class="co-item-img-wrap">
        <img class="co-item-img" src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://picsum.photos/seed/${p.id}/100/130'">
        <span class="co-item-badge">${ci.qty}</span>
      </div>
      <div class="co-item-info">
        <h4>${p.name}</h4>
        <span>${ci.color} · ${ci.size}</span>
      </div>
      <span class="co-item-price">${formatPrice(p.price * ci.qty)}</span>
    </div>`;
  }).join('');

  let formHTML = '';
  if (step === 1) formHTML = `
    <form id="checkoutForm">
      <div class="checkout-form-section">
        <h3>Contact Information</h3>
        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="Rahul" required>
            <span class="field-error">Required</span>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Sharma" required>
            <span class="field-error">Required</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="rahul@example.com" required>
            <span class="field-error">Valid email required</span>
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="+91 98765 43210" required>
            <span class="field-error">Required</span>
          </div>
        </div>
      </div>
      <div class="checkout-form-section">
        <h3>Shipping Address</h3>
        <div class="form-row full">
          <div class="form-group">
            <label>Address Line 1</label>
            <input type="text" name="address1" placeholder="123 MG Road" required>
            <span class="field-error">Required</span>
          </div>
        </div>
        <div class="form-row full">
          <div class="form-group">
            <label>Address Line 2 (Optional)</label>
            <input type="text" name="address2" placeholder="Apartment, suite, etc.">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>City</label>
            <input type="text" name="city" placeholder="Mumbai" required>
            <span class="field-error">Required</span>
          </div>
          <div class="form-group">
            <label>State</label>
            <select name="state" required>
              <option value="">Select state</option>
              ${['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'].map(s => `<option>${s}</option>`).join('')}
            </select>
            <span class="field-error">Required</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>PIN Code</label>
            <input type="text" name="pin" placeholder="400001" pattern="[0-9]{6}" required>
            <span class="field-error">6-digit PIN required</span>
          </div>
          <div class="form-group">
            <label>Country</label>
            <input type="text" name="country" value="India" readonly>
          </div>
        </div>
      </div>
      <div class="order-btn-row">
        <button type="submit" class="btn btn-primary btn-full">Continue to Shipping →</button>
        <p class="simulated-note">🔒 Your information is secured with SSL encryption</p>
      </div>
    </form>`;

  else if (step === 2) formHTML = `
    <form id="checkoutForm">
      <div class="checkout-form-section">
        <h3>Shipping Method</h3>
        <div class="radio-group">
          <label class="radio-option">
            <input type="radio" name="shipping" value="standard" checked>
            <span class="radio-label">Standard Delivery (3–5 days)</span>
            <span class="radio-sub">${shipping === 0 ? '<span style="color:var(--success)">Free</span>' : '₹199'}</span>
          </label>
          <label class="radio-option">
            <input type="radio" name="shipping" value="express">
            <span class="radio-label">Express Delivery (1–2 days)</span>
            <span class="radio-sub">₹399</span>
          </label>
          <label class="radio-option">
            <input type="radio" name="shipping" value="sameday">
            <span class="radio-label">Same Day Delivery (Order before 12pm)</span>
            <span class="radio-sub">₹699</span>
          </label>
        </div>
      </div>
      <div class="checkout-form-section">
        <h3>Delivery Instructions (Optional)</h3>
        <div class="form-row full">
          <div class="form-group">
            <label>Special Instructions</label>
            <input type="text" name="instructions" placeholder="Leave at door, call on arrival, etc.">
          </div>
        </div>
      </div>
      <div class="order-btn-row">
        <button type="submit" class="btn btn-primary btn-full">Continue to Payment →</button>
        <p class="simulated-note">🚚 Estimated delivery shown at confirmation</p>
      </div>
    </form>`;

  else if (step === 3) formHTML = `
    <form id="checkoutForm">
      <div class="checkout-form-section">
        <h3>Payment Method</h3>
        <div class="radio-group" id="paymentMethodGroup">
          <label class="radio-option">
            <input type="radio" name="payment" value="card" checked>
            <span class="radio-label">Credit / Debit Card</span>
            <div class="card-icons" style="margin-left:auto;margin-bottom:0">
              <span class="card-icon">VISA</span>
              <span class="card-icon">MC</span>
              <span class="card-icon">AMEX</span>
            </div>
          </label>
          <label class="radio-option">
            <input type="radio" name="payment" value="upi">
            <span class="radio-label">UPI</span>
            <span class="radio-sub">GPay, PhonePe, Paytm</span>
          </label>
          <label class="radio-option">
            <input type="radio" name="payment" value="netbanking">
            <span class="radio-label">Net Banking</span>
            <span class="radio-sub">All major banks</span>
          </label>
          <label class="radio-option">
            <input type="radio" name="payment" value="cod">
            <span class="radio-label">Cash on Delivery</span>
            <span class="radio-sub">₹40 COD fee</span>
          </label>
        </div>
      </div>

      <div class="checkout-form-section" id="cardSection">
        <h3>Card Details</h3>
        <div class="card-icons" style="margin-bottom:16px">
          <span class="card-icon">VISA</span><span class="card-icon">MC</span><span class="card-icon">AMEX</span><span class="card-icon">RuPay</span>
        </div>
        <div class="form-row full">
          <div class="form-group">
            <label>Card Number</label>
            <input type="text" name="cardNumber" placeholder="4242 4242 4242 4242" maxlength="19" id="cardNumber">
            <span class="field-error">Valid card number required</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Expiry Date</label>
            <input type="text" name="expiry" placeholder="MM/YY" maxlength="5" id="cardExpiry">
            <span class="field-error">Required</span>
          </div>
          <div class="form-group">
            <label>CVV</label>
            <input type="password" name="cvv" placeholder="•••" maxlength="4" id="cardCvv">
            <span class="field-error">Required</span>
          </div>
        </div>
        <div class="form-row full">
          <div class="form-group">
            <label>Name on Card</label>
            <input type="text" name="cardName" placeholder="Rahul Sharma" id="cardName">
            <span class="field-error">Required</span>
          </div>
        </div>
      </div>

      <div class="checkout-form-section" id="upiSection" style="display:none">
        <h3>UPI Details</h3>
        <div class="form-row full">
          <div class="form-group">
            <label>UPI ID</label>
            <input type="text" name="upiId" placeholder="yourname@upi">
          </div>
        </div>
        <p style="font-size:12px;color:var(--text2);margin-top:8px">⚡ This is a simulated payment — no real transaction will occur</p>
      </div>

      <div class="order-btn-row">
        <button type="submit" class="btn btn-primary btn-full">Place Order · ${formatPrice(total)}</button>
        <p class="simulated-note">🔒 Simulated payment — no real charges will be made</p>
      </div>
    </form>`;

  const html = `
    <div class="checkout-page">
      <div>
        <div class="checkout-steps">
          ${steps.map(s => `
            <div class="checkout-step${step === s.n ? ' active' : step > s.n ? ' done' : ''}">
              <span class="step-num">${step > s.n ? '✓' : s.n}</span>
              <span class="step-label">${s.label}</span>
            </div>`).join('')}
        </div>
        ${formHTML}
      </div>

      <!-- Aside summary -->
      <div class="checkout-aside">
        <div class="cart-summary">
          <h3>Order Summary</h3>
          <div class="checkout-order-items">${orderItemsHTML}</div>
          <div class="summary-line"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
          ${discount ? `<div class="summary-line summary-discount"><span>Discount</span><span>-${formatPrice(discount)}</span></div>` : ''}
          <div class="summary-line"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--success)">Free</span>' : formatPrice(shipping)}</span></div>
          <div class="summary-line total"><span>Total</span><span>${formatPrice(total)}</span></div>
        </div>
      </div>
    </div>`;

  document.getElementById('app').innerHTML = html;
  document.title = 'Checkout — MODERNO';
  setActiveNav('');
  DL.pageView({ title: 'Checkout Step ' + step + ' | MODERNO', contentType: 'checkout' });
  DL.checkoutStep(step, steps[step - 1].label);
  if (step === 1) DL.beginCheckout(items, total, coupon ? coupon.code : '');

  /* Payment method toggle */
  if (step === 3) {
    document.querySelectorAll('[name="payment"]').forEach(radio => {
      radio.addEventListener('change', function () {
        document.getElementById('cardSection').style.display = this.value === 'card' ? 'block' : 'none';
        document.getElementById('upiSection').style.display = this.value === 'upi' ? 'block' : 'none';
        DL.addPaymentInfo(items, total, this.value, coupon ? coupon.code : '');
      });
    });

    /* Card number formatting */
    const cardInput = document.getElementById('cardNumber');
    if (cardInput) {
      cardInput.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '').slice(0, 16);
        this.value = v.replace(/(.{4})/g, '$1 ').trim();
      });
    }
    const expiryInput = document.getElementById('cardExpiry');
    if (expiryInput) {
      expiryInput.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '').slice(0, 4);
        if (v.length >= 2) v = v.slice(0, 2) + '/' + v.slice(2);
        this.value = v;
      });
    }
  }

  /* Form submit */
  document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (step === 1) {
      DL.addShippingInfo(items, total, 'Standard', coupon ? coupon.code : '');
      renderCheckout(2);
    } else if (step === 2) {
      const shippingTier = document.querySelector('[name="shipping"]:checked')?.value || 'standard';
      DL.addShippingInfo(items, total, shippingTier, coupon ? coupon.code : '');
      renderCheckout(3);
    } else if (step === 3) {
      const paymentType = document.querySelector('[name="payment"]:checked')?.value || 'card';
      DL.addPaymentInfo(items, total, paymentType, coupon ? coupon.code : '');

      /* Simulate order placement */
      const orderId = 'MOD-' + Date.now().toString(36).toUpperCase();
      localStorage.setItem('moderno_last_order', JSON.stringify({
        id: orderId, items, subtotal, discount, shipping, total,
        paymentType, coupon: coupon ? coupon.code : '',
        date: new Date().toISOString(),
      }));

      DL.purchase(orderId, items, subtotal, shipping, discount, coupon ? coupon.code : '', paymentType);
      Cart.clear();
      Cart.removeCoupon();
      Router.go('#/confirmation');
    }
  });
}

/* ORDER CONFIRMATION */
function renderConfirmation() {
  let order = null;
  try { order = JSON.parse(localStorage.getItem('moderno_last_order')); } catch {}

  if (!order) {
    document.getElementById('app').innerHTML = `<div class="empty-state">
      <h2>No order found</h2>
      <a href="#/shop" class="btn btn-primary">Continue Shopping</a>
    </div>`;
    return;
  }

  const est = new Date(); est.setDate(est.getDate() + 5);
  const estDate = est.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });

  const html = `
    <div class="confirmation-page">
      <div class="confirm-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h1>Order Confirmed! 🎉</h1>
      <p>Thank you for your purchase. A confirmation has been sent to your email.</p>
      <p class="order-number">Order number: <span>${order.id}</span></p>
      <p style="font-size:14px;color:var(--text2);margin-bottom:32px">Estimated delivery: <strong>${estDate}</strong></p>

      <div class="confirm-details">
        <h3>Order Summary</h3>
        ${order.items.map(ci => {
          const p = PRODUCT_MAP[ci.id];
          return `<div class="confirm-row">
            <span>${p.name} (${ci.color}, ${ci.size}) × ${ci.qty}</span>
            <span>${formatPrice(p.price * ci.qty)}</span>
          </div>`;
        }).join('')}
        <div class="confirm-row"><span>Subtotal</span><span>${formatPrice(order.subtotal)}</span></div>
        ${order.discount ? `<div class="confirm-row" style="color:var(--sale)"><span>Discount</span><span>-${formatPrice(order.discount)}</span></div>` : ''}
        <div class="confirm-row"><span>Shipping</span><span>${order.shipping === 0 ? 'Free' : formatPrice(order.shipping)}</span></div>
        <div class="confirm-row"><span>Total Paid</span><span>${formatPrice(order.total)}</span></div>
      </div>

      <div class="confirm-actions">
        <a href="#/shop" class="btn btn-primary">Continue Shopping</a>
        <a href="#/" class="btn btn-outline">Back to Home</a>
      </div>
    </div>`;

  document.getElementById('app').innerHTML = html;
  document.title = 'Order Confirmed — MODERNO';
  setActiveNav('');
  DL.pageView({ title: 'Order Confirmation | MODERNO', contentType: 'purchase_confirmation' });
}

/* WISHLIST PAGE */
function renderWishlist() {
  const ids = Cart.getWishlist();
  const products = ids.map(id => PRODUCT_MAP[id]).filter(Boolean);

  document.getElementById('app').innerHTML = `
    <div style="max-width:1400px;margin:0 auto;padding:40px 24px">
      <h1 style="font-size:28px;font-weight:700;letter-spacing:-0.02em;margin-bottom:32px">My Wishlist (${products.length})</h1>
      ${products.length ? `
        <div class="product-grid">
          ${products.map((p, i) => productCardHTML(p, i, 'Wishlist')).join('')}
        </div>` : `
        <div class="empty-state">
          <h2>Your wishlist is empty</h2>
          <p>Save items you love for later.</p>
          <a href="#/shop" class="btn btn-primary">Browse Products</a>
        </div>`}
    </div>`;

  document.title = 'Wishlist — MODERNO';
  setActiveNav('wishlist');
  DL.pageView({ title: 'Wishlist | MODERNO', contentType: 'wishlist' });
  if (products.length) DL.viewItemList(products, 'Wishlist', 'wishlist');
  bindProductCards();
}

/* ── Product Card Event Binding ── */
function bindProductCards() {
  /* Navigate to product */
  document.querySelectorAll('.product-card').forEach(card => {
    const id = +card.dataset.id;
    const idx = +card.dataset.index;
    const list = card.dataset.list;
    const product = PRODUCT_MAP[id];

    card.addEventListener('click', function (e) {
      if (e.target.closest('.quick-action-btn')) return;
      DL.selectItem(product, list, list.toLowerCase().replace(/ /g, '_'), idx + 1);
      Router.go('#/product/' + id);
    });
  });

  /* Wishlist quick action */
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const id = +this.dataset.id;
      const product = PRODUCT_MAP[id];
      const added = Cart.toggleWishlist(id);
      this.classList.toggle('wishlist-active', added);
      this.querySelector('svg').setAttribute('fill', added ? 'currentColor' : 'none');
      if (added) { DL.addToWishlist(product, product.colors[0]); toast('Added to wishlist!'); }
      else { toast('Removed from wishlist'); }
    });
  });

  /* Quick add to cart */
  document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const id = +this.dataset.id;
      const product = PRODUCT_MAP[id];
      Cart.add(id, 1, product.colors[0], product.sizes[0]);
      DL.addToCart(product, 1, product.colors[0], product.sizes[0]);
      toast(`${product.name} added to cart!`, 'success');
      openCartDrawer();
    });
  });
}

/* ── Nav Active State ── */
function setActiveNav(page) {
  document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
    link.classList.toggle('active',
      (link.dataset.page === page) ||
      (link.dataset.cat && link.dataset.cat === page)
    );
  });
}

/* ── Router ── */
const Router = {
  go(hash) { window.location.hash = hash.replace('#', ''); },

  parse() {
    const hash = window.location.hash.replace('#', '') || '/';
    const parts = hash.split('/').filter(Boolean);
    if (!parts.length || parts[0] === '/') return { page: 'home' };
    if (parts[0] === 'shop') return { page: 'shop', category: parts[1] || null };
    if (parts[0] === 'product') return { page: 'product', id: +parts[1] };
    if (parts[0] === 'cart') return { page: 'cart' };
    if (parts[0] === 'checkout') return { page: 'checkout' };
    if (parts[0] === 'confirmation') return { page: 'confirmation' };
    if (parts[0] === 'wishlist') return { page: 'wishlist' };
    return { page: 'home' };
  },

  route() {
    window.scrollTo(0, 0);
    const { page, category, id } = this.parse();
    closeSidebar();
    if (page === 'home') renderHome();
    else if (page === 'shop') renderShop(category);
    else if (page === 'product') renderProduct(id);
    else if (page === 'cart') renderCart();
    else if (page === 'checkout') renderCheckout(1);
    else if (page === 'confirmation') renderConfirmation();
    else if (page === 'wishlist') renderWishlist();
    else renderHome();
  },
};

/* ── Sidebar ── */
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Init ── */
function init() {
  /* Route on hash change */
  window.addEventListener('hashchange', () => Router.route());
  Router.route();

  /* Cart badge */
  const { count } = Cart.summary();
  updateCartBadge(count);
  document.addEventListener('cart:updated', e => { updateCartBadge(e.detail.count); });

  /* Hamburger */
  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    DL.navClick('hamburger', 'sidebar');
  });
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

  /* Cart drawer */
  document.getElementById('cartToggle').addEventListener('click', openCartDrawer);
  document.getElementById('cartDrawerClose').addEventListener('click', closeCartDrawer);
  document.getElementById('cartOverlay').addEventListener('click', closeCartDrawer);

  /* Cart drawer interactive events */
  document.getElementById('cartDrawer').addEventListener('click', function (e) {
    const minus = e.target.closest('.drawer-qty-minus');
    const plus = e.target.closest('.drawer-qty-plus');
    const remove = e.target.closest('.drawer-item-remove');

    if (minus) {
      const { id, color, size, qty } = minus.dataset;
      const newQty = +qty - 1;
      if (newQty <= 0) { Cart.remove(+id, color, size); DL.removeFromCart(PRODUCT_MAP[+id], 1, color, size); }
      else { Cart.updateQty(+id, color, size, newQty); DL.quantityChanged(id, newQty, +qty); }
      renderCartDrawer();
    }
    if (plus) {
      const { id, color, size, qty } = plus.dataset;
      const newQty = +qty + 1;
      Cart.updateQty(+id, color, size, newQty);
      DL.quantityChanged(id, newQty, +qty);
      renderCartDrawer();
    }
    if (remove) {
      const { id, color, size } = remove.dataset;
      Cart.remove(+id, color, size);
      DL.removeFromCart(PRODUCT_MAP[+id], 1, color, size);
      renderCartDrawer();
    }
  });

  /* Search */
  document.getElementById('searchToggle').addEventListener('click', () => {
    document.getElementById('searchBar').classList.toggle('open');
    if (document.getElementById('searchBar').classList.contains('open')) {
      document.getElementById('searchInput').focus();
    }
  });
  document.getElementById('searchClose').addEventListener('click', () => {
    document.getElementById('searchBar').classList.remove('open');
    document.getElementById('searchResults').classList.remove('visible');
  });

  let searchTimer;
  document.getElementById('searchInput').addEventListener('input', function () {
    clearTimeout(searchTimer);
    const q = this.value.trim();
    if (!q) { document.getElementById('searchResults').classList.remove('visible'); return; }
    searchTimer = setTimeout(() => {
      const results = getProducts({ search: q }).slice(0, 6);
      DL.search(q, results.length);
      const res = document.getElementById('searchResults');
      if (!results.length) { res.classList.remove('visible'); return; }
      res.innerHTML = results.map(p => `
        <div class="search-result-item" data-id="${p.id}">
          <img src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://picsum.photos/seed/${p.id}/80/100'">
          <div class="search-result-info">
            <h4>${p.name}</h4>
            <span>${formatPrice(p.price)}</span>
          </div>
        </div>`).join('');
      res.classList.add('visible');
      res.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', function () {
          DL.selectItem(PRODUCT_MAP[+this.dataset.id], 'Search Results', 'search_results', 0);
          Router.go('#/product/' + this.dataset.id);
          document.getElementById('searchBar').classList.remove('open');
          res.classList.remove('visible');
          document.getElementById('searchInput').value = '';
        });
      });
    }, 300);
  });

  /* Announcement close */
  const announcementClose = document.getElementById('announcementClose');
  if (announcementClose) {
    announcementClose.addEventListener('click', () => {
      document.getElementById('announcementBar').style.display = 'none';
    });
  }

  /* Navigation clicks */
  document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
    link.addEventListener('click', function () {
      DL.navClick(this.textContent.trim(), this.getAttribute('href'));
      if (this.classList.contains('sidebar-link')) closeSidebar();
    });
  });

  /* Newsletter */
  document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    DL.newsletterSubscribe(email);
    toast('Thanks for subscribing!', 'success');
    this.reset();
  });

  /* Footer clicks */
  document.querySelectorAll('.footer a').forEach(a => {
    a.addEventListener('click', function () {
      DL.footerClick(this.textContent.trim());
    });
  });

  /* Body scroll restoration */
  window.addEventListener('hashchange', () => { document.body.style.overflow = ''; });
}

document.addEventListener('DOMContentLoaded', init);
