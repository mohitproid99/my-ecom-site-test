/* ============================================================
   MODERNO — Cart (localStorage)
   ============================================================ */

const Cart = {
  KEY: 'moderno_cart',
  WISHLIST_KEY: 'moderno_wishlist',
  COUPON_KEY: 'moderno_coupon',
  SHIPPING: 199,
  FREE_SHIPPING_THRESHOLD: 3000,

  _get() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch { return []; }
  },

  _save(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this._notify();
  },

  _notify() {
    document.dispatchEvent(new CustomEvent('cart:updated', { detail: this.summary() }));
  },

  summary() {
    const items = this._get();
    const subtotal = items.reduce((s, i) => s + PRODUCT_MAP[i.id].price * i.qty, 0);
    const couponData = this.getCoupon();
    const discount = couponData ? Math.round(subtotal * (couponData.pct / 100)) : 0;
    const shipping = subtotal >= this.FREE_SHIPPING_THRESHOLD ? 0 : (items.length ? this.SHIPPING : 0);
    return { items, subtotal, discount, shipping, total: subtotal - discount + shipping, count: items.reduce((s, i) => s + i.qty, 0) };
  },

  add(productId, qty, color, size) {
    const items = this._get();
    const existing = items.find(i => i.id === productId && i.color === color && i.size === size);
    if (existing) { existing.qty += qty; }
    else { items.push({ id: productId, qty, color, size, addedAt: Date.now() }); }
    this._save(items);
    return this;
  },

  remove(productId, color, size) {
    const items = this._get().filter(i => !(i.id === productId && i.color === color && i.size === size));
    this._save(items);
    return this;
  },

  updateQty(productId, color, size, qty) {
    const items = this._get();
    const idx = items.findIndex(i => i.id === productId && i.color === color && i.size === size);
    if (idx > -1) {
      if (qty <= 0) { items.splice(idx, 1); }
      else { items[idx].qty = qty; }
    }
    this._save(items);
    return this;
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this._notify();
  },

  /* Coupon */
  COUPONS: {
    'MODERNO10': { pct: 10, label: '10% off' },
    'WELCOME20': { pct: 20, label: '20% off' },
    'SALE15': { pct: 15, label: '15% off' },
    'FASHION30': { pct: 30, label: '30% off' },
  },

  applyCoupon(code) {
    const c = this.COUPONS[code.toUpperCase()];
    if (c) { localStorage.setItem(this.COUPON_KEY, JSON.stringify({ code: code.toUpperCase(), ...c })); return c; }
    return null;
  },

  removeCoupon() { localStorage.removeItem(this.COUPON_KEY); this._notify(); },

  getCoupon() {
    try { return JSON.parse(localStorage.getItem(this.COUPON_KEY)); }
    catch { return null; }
  },

  /* Wishlist */
  getWishlist() {
    try { return JSON.parse(localStorage.getItem(this.WISHLIST_KEY)) || []; }
    catch { return []; }
  },

  toggleWishlist(productId) {
    const list = this.getWishlist();
    const idx = list.indexOf(productId);
    if (idx > -1) { list.splice(idx, 1); }
    else { list.push(productId); }
    localStorage.setItem(this.WISHLIST_KEY, JSON.stringify(list));
    document.dispatchEvent(new CustomEvent('wishlist:updated', { detail: list }));
    return idx === -1;
  },

  isWishlisted(productId) { return this.getWishlist().includes(productId); },
};
