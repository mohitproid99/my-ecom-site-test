/* ============================================================
   MODERNO — DataLayer (GA4 Ecommerce Events)
   All events follow the GA4 / GTM ecommerce spec
   ============================================================ */

window.dataLayer = window.dataLayer || [];

const DL = {

  /* ── Utility ── */
  push(obj) {
    window.dataLayer.push(obj);
    console.groupCollapsed('%c[DataLayer]%c ' + obj.event, 'color:#9b5de5;font-weight:bold', 'color:#333');
    console.log(JSON.parse(JSON.stringify(obj)));
    console.groupEnd();
  },

  item(product, opts = {}) {
    return {
      item_id: String(product.id),
      item_name: product.name,
      item_brand: 'MODERNO',
      item_category: product.category,
      item_category2: product.subcategory,
      item_variant: opts.color || product.colors[0],
      item_list_name: opts.listName || 'Product List',
      item_list_id: opts.listId || 'product_list',
      index: opts.index || 0,
      price: product.price / 100,  /* GA4 convention in major currency unit */
      quantity: opts.quantity || 1,
      discount: product.originalPrice ? (product.originalPrice - product.price) / 100 : 0,
      coupon: opts.coupon || '',
    };
  },

  /* ── Page Events ── */
  pageView(opts = {}) {
    this.push({
      event: 'page_view',
      page_title: opts.title || document.title,
      page_location: window.location.href,
      page_path: window.location.hash || '/',
      content_type: opts.contentType || 'page',
      user_id: opts.userId || null,
    });
  },

  /* ── Product List Events ── */
  viewItemList(products, listName, listId) {
    this.push({
      event: 'view_item_list',
      ecommerce: {
        item_list_name: listName,
        item_list_id: listId,
        items: products.map((p, i) => this.item(p, { listName, listId, index: i + 1 })),
      },
    });
  },

  selectItem(product, listName, listId, index) {
    this.push({
      event: 'select_item',
      ecommerce: {
        item_list_name: listName,
        item_list_id: listId,
        items: [this.item(product, { listName, listId, index })],
      },
    });
  },

  /* ── Product Detail Events ── */
  viewItem(product, color) {
    this.push({
      event: 'view_item',
      ecommerce: {
        currency: 'INR',
        value: product.price / 100,
        items: [this.item(product, { color, listName: 'Product Detail' })],
      },
    });
  },

  /* ── Cart Events ── */
  addToCart(product, quantity, color, size) {
    this.push({
      event: 'add_to_cart',
      ecommerce: {
        currency: 'INR',
        value: (product.price * quantity) / 100,
        items: [this.item(product, { quantity, color, size, listName: 'Product Detail' })],
      },
    });
  },

  removeFromCart(product, quantity, color, size) {
    this.push({
      event: 'remove_from_cart',
      ecommerce: {
        currency: 'INR',
        value: (product.price * quantity) / 100,
        items: [this.item(product, { quantity, color, size })],
      },
    });
  },

  viewCart(cartItems, total) {
    this.push({
      event: 'view_cart',
      ecommerce: {
        currency: 'INR',
        value: total / 100,
        items: cartItems.map((ci, i) =>
          this.item(PRODUCT_MAP[ci.id], { quantity: ci.qty, color: ci.color, size: ci.size, index: i + 1 })
        ),
      },
    });
  },

  /* ── Checkout Events ── */
  beginCheckout(cartItems, total, coupon) {
    this.push({
      event: 'begin_checkout',
      ecommerce: {
        currency: 'INR',
        value: total / 100,
        coupon: coupon || '',
        items: cartItems.map((ci, i) =>
          this.item(PRODUCT_MAP[ci.id], { quantity: ci.qty, color: ci.color, size: ci.size, coupon, index: i + 1 })
        ),
      },
    });
  },

  addShippingInfo(cartItems, total, shippingTier, coupon) {
    this.push({
      event: 'add_shipping_info',
      ecommerce: {
        currency: 'INR',
        value: total / 100,
        shipping_tier: shippingTier || 'Standard',
        coupon: coupon || '',
        items: cartItems.map((ci, i) =>
          this.item(PRODUCT_MAP[ci.id], { quantity: ci.qty, color: ci.color, size: ci.size, coupon, index: i + 1 })
        ),
      },
    });
  },

  addPaymentInfo(cartItems, total, paymentType, coupon) {
    this.push({
      event: 'add_payment_info',
      ecommerce: {
        currency: 'INR',
        value: total / 100,
        payment_type: paymentType || 'Credit Card',
        coupon: coupon || '',
        items: cartItems.map((ci, i) =>
          this.item(PRODUCT_MAP[ci.id], { quantity: ci.qty, color: ci.color, size: ci.size, coupon, index: i + 1 })
        ),
      },
    });
  },

  purchase(orderId, cartItems, subtotal, shipping, discount, coupon, paymentType) {
    const total = subtotal + shipping - discount;
    this.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: orderId,
        affiliation: 'MODERNO Online Store',
        value: total / 100,
        tax: Math.round(total * 0.18) / 100,
        shipping: shipping / 100,
        currency: 'INR',
        coupon: coupon || '',
        payment_type: paymentType || 'Credit Card',
        items: cartItems.map((ci, i) =>
          this.item(PRODUCT_MAP[ci.id], { quantity: ci.qty, color: ci.color, size: ci.size, coupon, index: i + 1 })
        ),
      },
    });
  },

  /* ── Promotion Events ── */
  viewPromotion(promotionId, promotionName, creativeName, creativeSlot, items) {
    this.push({
      event: 'view_promotion',
      ecommerce: {
        promotion_id: promotionId,
        promotion_name: promotionName,
        creative_name: creativeName,
        creative_slot: creativeSlot,
        items: items || [],
      },
    });
  },

  selectPromotion(promotionId, promotionName, creativeName, creativeSlot) {
    this.push({
      event: 'select_promotion',
      ecommerce: {
        promotion_id: promotionId,
        promotion_name: promotionName,
        creative_name: creativeName,
        creative_slot: creativeSlot,
      },
    });
  },

  /* ── User Events ── */
  search(searchTerm, resultCount) {
    this.push({
      event: 'search',
      search_term: searchTerm,
      search_results_count: resultCount,
    });
  },

  login(method) {
    this.push({ event: 'login', method: method || 'email' });
  },

  signUp(method) {
    this.push({ event: 'sign_up', method: method || 'email' });
  },

  share(method, contentType, itemId) {
    this.push({ event: 'share', method, content_type: contentType, item_id: itemId });
  },

  addToWishlist(product, color) {
    this.push({
      event: 'add_to_wishlist',
      ecommerce: {
        currency: 'INR',
        value: product.price / 100,
        items: [this.item(product, { color })],
      },
    });
  },

  /* ── Engagement Events ── */
  filterApplied(filterType, filterValue) {
    this.push({ event: 'filter_applied', filter_type: filterType, filter_value: filterValue });
  },

  sortApplied(sortValue) {
    this.push({ event: 'sort_applied', sort_value: sortValue });
  },

  quantityChanged(productId, newQty, oldQty) {
    this.push({ event: 'quantity_changed', product_id: productId, new_quantity: newQty, old_quantity: oldQty });
  },

  couponApplied(couponCode, status, discountAmount) {
    this.push({ event: 'coupon_applied', coupon_code: couponCode, status, discount_amount: discountAmount });
  },

  accordionToggle(section, open) {
    this.push({ event: 'accordion_toggle', section_name: section, state: open ? 'open' : 'closed' });
  },

  sizeGuideOpen(productId) {
    this.push({ event: 'size_guide_open', product_id: productId });
  },

  imageGalleryInteract(productId, imageIndex) {
    this.push({ event: 'image_gallery_interact', product_id: productId, image_index: imageIndex });
  },

  newsletterSubscribe(email) {
    this.push({ event: 'newsletter_subscribe', email_hash: email.replace(/./g, '*') });
  },

  navClick(label, destination) {
    this.push({ event: 'nav_click', nav_label: label, destination });
  },

  footerClick(label) {
    this.push({ event: 'footer_click', label });
  },

  cartDrawerOpen() {
    this.push({ event: 'cart_drawer_open' });
  },

  checkoutStep(step, stepName) {
    this.push({ event: 'checkout_step', step_number: step, step_name: stepName });
  },

  orderError(errorType, message) {
    this.push({ event: 'order_error', error_type: errorType, message });
  },
};
