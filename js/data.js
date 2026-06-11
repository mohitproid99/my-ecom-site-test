/* ============================================================
   MODERNO — Product Data (105 products)
   ============================================================ */

const UNSPLASH = 'https://images.unsplash.com/photo-';

const PRODUCTS = [
  /* ─────────── MEN'S SHIRTS ─────────── */
  {
    id: 1, name: "Classic Oxford Button-Down Shirt", category: "men", subcategory: "Shirts",
    price: 2499, originalPrice: 3299, badge: "sale",
    rating: 4.5, reviews: 128,
    description: "A timeless wardrobe essential. Our Oxford shirt is crafted from 100% pure cotton with a subtle texture that elevates any casual or smart-casual look. Features a button-down collar and chest pocket.",
    colors: ["White", "Light Blue", "Navy", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1617196034183-421b4040c8aa?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton", care: "Machine wash cold", sku: "MN-SH-001"
  },
  {
    id: 2, name: "Slim Fit Striped Dress Shirt", category: "men", subcategory: "Shirts",
    price: 3299, originalPrice: null, badge: "new",
    rating: 4.3, reviews: 64,
    description: "Expertly tailored for a modern silhouette. The slim fit cut and fine pin-stripe pattern make this the ideal choice for business meetings or evening occasions.",
    colors: ["Blue/White", "Black/White", "Grey/White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "98% Cotton, 2% Elastane", care: "Machine wash cold", sku: "MN-SH-002"
  },
  {
    id: 3, name: "Linen Casual Summer Shirt", category: "men", subcategory: "Shirts",
    price: 2799, originalPrice: 3499, badge: "sale",
    rating: 4.6, reviews: 211,
    description: "Breathable pure linen fabric makes this your go-to warm weather shirt. The relaxed fit and chest pockets give it a laid-back coastal vibe that works for brunch or the beach.",
    colors: ["White", "Beige", "Sage Green", "Sky Blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1607345366928-199ea26cfe3e?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Linen", care: "Hand wash or machine wash on delicate", sku: "MN-SH-003"
  },
  {
    id: 4, name: "Flannel Check Shirt", category: "men", subcategory: "Shirts",
    price: 2599, originalPrice: null, badge: null,
    rating: 4.4, reviews: 89,
    description: "Soft-brushed flannel in a classic check pattern. Slightly oversized fit works well worn open over a tee or buttoned up on its own during cooler months.",
    colors: ["Red/Black", "Blue/Green", "Brown/Orange"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    images: [
      UNSPLASH + '1545327850-b51e7f9c01ec?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1539109136081-c8a3cee8bfd3?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Flannel", care: "Machine wash cold, tumble dry low", sku: "MN-SH-004"
  },
  {
    id: 5, name: "Chambray Work Shirt", category: "men", subcategory: "Shirts",
    price: 2299, originalPrice: null, badge: "bestseller",
    rating: 4.7, reviews: 303,
    description: "An upgraded take on workwear staples. This chambray shirt has a durable weave, relaxed cut and utility-style chest pockets. Wear tucked or untucked — it always looks sharp.",
    colors: ["Medium Blue", "Light Indigo", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1619012761439-4bec3e7b7d79?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1617196034183-421b4040c8aa?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Chambray", care: "Machine wash cold", sku: "MN-SH-005"
  },

  /* ─────────── MEN'S T-SHIRTS ─────────── */
  {
    id: 6, name: "Essential Crew Neck Tee", category: "men", subcategory: "T-Shirts",
    price: 899, originalPrice: null, badge: "bestseller",
    rating: 4.8, reviews: 542,
    description: "The only tee you'll ever need. Heavyweight 220gsm cotton jersey with a structured collar that holds its shape wash after wash. A true wardrobe foundational piece.",
    colors: ["White", "Black", "Navy", "Grey", "Olive", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    images: [
      UNSPLASH + '1621072456528-3fa6e42f72d0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1586790170083-2b3d57adb0a1?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton 220gsm", care: "Machine wash 30°C", sku: "MN-TS-001"
  },
  {
    id: 7, name: "Abstract Graphic Print Tee", category: "men", subcategory: "T-Shirts",
    price: 1299, originalPrice: 1699, badge: "sale",
    rating: 4.2, reviews: 77,
    description: "Bold abstract artwork screenprinted on soft 180gsm combed cotton. A statement piece for creative types who want their clothes to do the talking.",
    colors: ["Black", "White", "Grey Marl"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1576566588028-4147f3842f27?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Combed Cotton 180gsm", care: "Machine wash cold, inside out", sku: "MN-TS-002"
  },
  {
    id: 8, name: "V-Neck Performance Tee", category: "men", subcategory: "T-Shirts",
    price: 999, originalPrice: null, badge: null,
    rating: 4.5, reviews: 155,
    description: "Moisture-wicking fabric keeps you cool during workouts or casual days out. The 4-way stretch construction moves with your body while maintaining a clean silhouette.",
    colors: ["Black", "Navy", "Grey", "Teal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1571945153237-4929e783af4a?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1556821840-3a63f15732ee?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "92% Polyester, 8% Elastane", care: "Machine wash cold", sku: "MN-TS-003"
  },
  {
    id: 9, name: "Longline Curved Hem Tee", category: "men", subcategory: "T-Shirts",
    price: 1099, originalPrice: null, badge: "new",
    rating: 4.1, reviews: 43,
    description: "Contemporary elongated cut with a curved hem that looks great over joggers or slim jeans. Dropped shoulders add to the relaxed aesthetic without sacrificing structure.",
    colors: ["Black", "White", "Charcoal", "Stone"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1594938298603-f6fb4b0e2c7e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton 200gsm", care: "Machine wash 30°C", sku: "MN-TS-004"
  },
  {
    id: 10, name: "Pocket Detail Tee", category: "men", subcategory: "T-Shirts",
    price: 799, originalPrice: 999, badge: "sale",
    rating: 4.3, reviews: 198,
    description: "A slim chest pocket adds a subtle detail to this otherwise minimal tee. Cut slightly shorter for a tucked-in look without the effort.",
    colors: ["White", "Navy", "Olive", "Terracotta"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1489987707849-f5a07c7ab5f1?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1565693413579-8ff3fdc1b03b?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton", care: "Machine wash cold", sku: "MN-TS-005"
  },

  /* ─────────── MEN'S BOTTOMS ─────────── */
  {
    id: 11, name: "Slim Fit Dark Wash Jeans", category: "men", subcategory: "Jeans & Pants",
    price: 3499, originalPrice: null, badge: "bestseller",
    rating: 4.6, reviews: 387,
    description: "Our most popular denim cut. A clean dark indigo wash with a slim silhouette through the thigh and a tapered leg. Stretch fabric keeps you comfortable all day.",
    colors: ["Dark Indigo", "Black", "Mid Blue"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [
      UNSPLASH + '1542272604-787c3835535d?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "98% Cotton, 2% Elastane", care: "Machine wash cold inside out", sku: "MN-BT-001"
  },
  {
    id: 12, name: "Relaxed Straight Leg Jeans", category: "men", subcategory: "Jeans & Pants",
    price: 3299, originalPrice: 3999, badge: "sale",
    rating: 4.4, reviews: 201,
    description: "A roomier fit through the seat and thigh with a straight leg opening. Perfect for those who prefer a more classic, comfortable denim silhouette.",
    colors: ["Light Wash", "Mid Blue", "Stone Wash"],
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    images: [
      UNSPLASH + '1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1542272604-787c3835535d?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Denim", care: "Machine wash cold", sku: "MN-BT-002"
  },
  {
    id: 13, name: "Slim Chino Trousers", category: "men", subcategory: "Jeans & Pants",
    price: 2999, originalPrice: null, badge: null,
    rating: 4.5, reviews: 142,
    description: "Versatile chinos that bridge the gap between smart and casual. A mid-rise waist and slim leg make these easy to dress up with a blazer or down with sneakers.",
    colors: ["Khaki", "Navy", "Olive", "Black", "Grey"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [
      UNSPLASH + '1624378439799-a84c1f76cf4d?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "98% Cotton, 2% Elastane", care: "Machine wash cold", sku: "MN-BT-003"
  },
  {
    id: 14, name: "Utility Cargo Pants", category: "men", subcategory: "Jeans & Pants",
    price: 2799, originalPrice: null, badge: "new",
    rating: 4.3, reviews: 96,
    description: "Functional style meets modern tailoring. Six cargo pockets are proportioned to not bulk out the silhouette while still being genuinely usable. An adjustable hem works with any footwear.",
    colors: ["Olive", "Black", "Stone", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Ripstop", care: "Machine wash cold", sku: "MN-BT-004"
  },
  {
    id: 15, name: "Tapered Jogger Pants", category: "men", subcategory: "Jeans & Pants",
    price: 1999, originalPrice: 2499, badge: "sale",
    rating: 4.7, reviews: 264,
    description: "Not your average joggers. A smart, tapered silhouette and structured waistband make these acceptable anywhere from the gym to a café. Technical jersey fabric performs all day.",
    colors: ["Black", "Grey Marl", "Navy", "Khaki"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1556821840-3a63f15732ee?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "60% Cotton, 40% Polyester", care: "Machine wash cold", sku: "MN-BT-005"
  },

  /* ─────────── MEN'S OUTERWEAR ─────────── */
  {
    id: 16, name: "Classic Denim Jacket", category: "men", subcategory: "Jackets",
    price: 4999, originalPrice: 6499, badge: "sale",
    rating: 4.6, reviews: 178,
    description: "A heritage piece reimagined. Rigid denim construction with contrast stitching, adjustable side tabs at the waist, and two chest pockets. Destined to become your most-worn outer layer.",
    colors: ["Mid Blue", "Dark Indigo", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1556821840-3a63f15732ee?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Denim 12oz", care: "Machine wash cold inside out", sku: "MN-JK-001"
  },
  {
    id: 17, name: "Satin Bomber Jacket", category: "men", subcategory: "Jackets",
    price: 5999, originalPrice: null, badge: "new",
    rating: 4.4, reviews: 82,
    description: "Relaxed bomber silhouette in lustrous satin-finish fabric. Ribbed collar, cuffs, and hem with a zip-through front and two side pockets. A versatile layer between seasons.",
    colors: ["Black", "Sage Green", "Burgundy", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1594938298603-f6fb4b0e2c7e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyester Satin", care: "Dry clean recommended", sku: "MN-JK-002"
  },
  {
    id: 18, name: "Lightweight Puffer Jacket", category: "men", subcategory: "Jackets",
    price: 6999, originalPrice: 8999, badge: "sale",
    rating: 4.8, reviews: 319,
    description: "Packable down-alternative fill keeps you warm without bulk. A lightweight outer shell is water-resistant and packs into its own pocket. Essential for travel and unpredictable weather.",
    colors: ["Black", "Navy", "Olive", "Red"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    images: [
      UNSPLASH + '1539109136081-c8a3cee8bfd3?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1617617595513-bfa3e0a2d5b8?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Shell: 100% Nylon, Fill: 100% Polyester", care: "Machine wash cold", sku: "MN-JK-003"
  },
  {
    id: 19, name: "Double-Breasted Trench Coat", category: "men", subcategory: "Jackets",
    price: 7999, originalPrice: null, badge: null,
    rating: 4.5, reviews: 57,
    description: "A true investment piece. Water-repellent cotton gabardine, removable belt, and tailored construction that elevates any outfit immediately. Built to last a lifetime.",
    colors: ["Camel", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1617196034183-421b4040c8aa?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "70% Cotton, 30% Polyester", care: "Dry clean only", sku: "MN-JK-004"
  },
  {
    id: 20, name: "Faux Leather Biker Jacket", category: "men", subcategory: "Jackets",
    price: 8999, originalPrice: 11999, badge: "sale",
    rating: 4.3, reviews: 94,
    description: "Asymmetric zip front, quilted shoulders, and silver-tone hardware give this biker jacket an authentic edge without using animal products. Structured lining for a polished finish.",
    colors: ["Black", "Tan Brown"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1617617595513-bfa3e0a2d5b8?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1539109136081-c8a3cee8bfd3?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyurethane (Vegan)", care: "Wipe clean with damp cloth", sku: "MN-JK-005"
  },

  /* ─────────── MEN'S KNITWEAR ─────────── */
  {
    id: 21, name: "Classic Pullover Hoodie", category: "men", subcategory: "Hoodies",
    price: 2499, originalPrice: null, badge: "bestseller",
    rating: 4.7, reviews: 456,
    description: "Our best-selling hoodie, now in even more colours. 400gsm French Terry cotton with a kangaroo pocket, adjustable drawstring, and ribbed cuffs and hem. The hoodie done right.",
    colors: ["Black", "Grey Marl", "Navy", "Burgundy", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    images: [
      UNSPLASH + '1594938298603-f6fb4b0e2c7e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1545327850-b51e7f9c01ec?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "80% Cotton, 20% Polyester 400gsm", care: "Machine wash 30°C", sku: "MN-KN-001"
  },
  {
    id: 22, name: "Zip-Up Fleece Hoodie", category: "men", subcategory: "Hoodies",
    price: 2799, originalPrice: 3499, badge: "sale",
    rating: 4.5, reviews: 213,
    description: "A full-length zip makes this hoodie easy to layer. Micro-fleece interior provides warmth without weight. Two hand pockets with zip closures keep your belongings secure.",
    colors: ["Black", "Navy", "Grey", "Olive"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1545327850-b51e7f9c01ec?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1594938298603-f6fb4b0e2c7e?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyester Micro-fleece", care: "Machine wash cold", sku: "MN-KN-002"
  },
  {
    id: 23, name: "Crewneck Sweatshirt", category: "men", subcategory: "Hoodies",
    price: 1999, originalPrice: null, badge: null,
    rating: 4.6, reviews: 332,
    description: "Effortlessly minimal. A clean crewneck with no branding, crafted from a heavyweight cotton-poly blend. The ideal blank canvas for self-expression — wear it with anything.",
    colors: ["White", "Black", "Grey Marl", "Stone", "Dusty Pink"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1586790170083-2b3d57adb0a1?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "60% Cotton, 40% Polyester", care: "Machine wash 30°C", sku: "MN-KN-003"
  },
  {
    id: 24, name: "Ribbed Merino Wool Jumper", category: "men", subcategory: "Knitwear",
    price: 4499, originalPrice: 5499, badge: "sale",
    rating: 4.8, reviews: 167,
    description: "Extra-fine merino ribbed knit with a contemporary relaxed fit. Naturally temperature-regulating and odour-resistant — ideal for travel or long days that go from office to dinner.",
    colors: ["Navy", "Camel", "Dark Green", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1545327850-b51e7f9c01ec?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1607345366928-199ea26cfe3e?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Extra-Fine Merino Wool", care: "Hand wash cold or dry clean", sku: "MN-KN-004"
  },
  {
    id: 25, name: "Tech Fleece Tracksuit Top", category: "men", subcategory: "Hoodies",
    price: 3299, originalPrice: null, badge: "trending",
    rating: 4.5, reviews: 128,
    description: "Engineering meets style. The unique tech fleece construction creates pockets of air between layers, providing warmth and mobility in a sleek athletic silhouette.",
    colors: ["Black", "Dark Grey", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1539109136081-c8a3cee8bfd3?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1556821840-3a63f15732ee?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "66% Cotton, 34% Polyester", care: "Machine wash cold", sku: "MN-KN-005"
  },

  /* ─────────── WOMEN'S DRESSES ─────────── */
  {
    id: 26, name: "Floral Wrap Midi Dress", category: "women", subcategory: "Dresses",
    price: 3499, originalPrice: 4499, badge: "sale",
    rating: 4.7, reviews: 284,
    description: "The ultimate flattering silhouette. This wrap dress in a garden-inspired floral print cinches at the waist with a tie belt, creating a beautiful hourglass effect. Ideal for weddings, brunches, and garden parties.",
    colors: ["Blue Floral", "Red Floral", "Green Floral"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1583744946564-b52ac1c389c8?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Viscose", care: "Hand wash cold or dry clean", sku: "WM-DR-001"
  },
  {
    id: 27, name: "Satin Bias-Cut Midi Slip Dress", category: "women", subcategory: "Dresses",
    price: 3999, originalPrice: null, badge: "new",
    rating: 4.5, reviews: 119,
    description: "Inspired by 1930s Hollywood glamour, this bias-cut slip dress skims the body in all the right places. Adjustable spaghetti straps and a delicate lace trim finish make it day-to-night ready.",
    colors: ["Champagne", "Black", "Dusty Rose", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyester Satin", care: "Hand wash cold", sku: "WM-DR-002"
  },
  {
    id: 28, name: "Off-Shoulder Tiered Sundress", category: "women", subcategory: "Dresses",
    price: 2999, originalPrice: 3799, badge: "sale",
    rating: 4.6, reviews: 203,
    description: "Three tiered layers of lightweight cotton voile in a cheerful sun dress that flutters beautifully. The elasticated off-shoulder neckline flatters every figure. A holiday wardrobe staple.",
    colors: ["White", "Coral", "Cornflower Blue", "Butter Yellow"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1583744946564-b52ac1c389c8?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Voile", care: "Machine wash cold, gentle cycle", sku: "WM-DR-003"
  },
  {
    id: 29, name: "Ribbed Knit Bodycon Mini Dress", category: "women", subcategory: "Dresses",
    price: 2499, originalPrice: null, badge: "trending",
    rating: 4.3, reviews: 176,
    description: "A sleek, form-fitting dress in soft ribbed knit. The stretchy fabric sculpts the body without restriction. Style with knee-high boots for a polished evening look.",
    colors: ["Black", "Cream", "Caramel", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1434389877585-b08de47da06e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "90% Viscose, 10% Nylon", care: "Hand wash cold", sku: "WM-DR-004"
  },
  {
    id: 30, name: "Boho Maxi Dress", category: "women", subcategory: "Dresses",
    price: 4299, originalPrice: 5299, badge: "sale",
    rating: 4.8, reviews: 341,
    description: "Floor-sweeping bohemian style in a hand-blocked print inspired by global textile traditions. Elasticated waist, adjustable shoulder straps, and a generous skirt width that moves like water.",
    colors: ["Terracotta Print", "Indigo Print", "Forest Print"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    images: [
      UNSPLASH + '1583744946564-b52ac1c389c8?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton", care: "Cold hand wash", sku: "WM-DR-005"
  },
  {
    id: 31, name: "Oversized Shirt Dress", category: "women", subcategory: "Dresses",
    price: 3199, originalPrice: null, badge: null,
    rating: 4.5, reviews: 157,
    description: "Borrowed-from-the-boys energy in a luxe cotton-linen blend. Oversized silhouette with a button-through front that you can wear fully done up or open as a beach cover-up.",
    colors: ["White", "Sage", "Light Blue", "Beige"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1485518882345-15568b007407?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "55% Linen, 45% Cotton", care: "Machine wash cold", sku: "WM-DR-006"
  },
  {
    id: 32, name: "Sequin Cocktail Dress", category: "women", subcategory: "Dresses",
    price: 5999, originalPrice: 7499, badge: "sale",
    rating: 4.4, reviews: 98,
    description: "All-over micro-sequins create a disco-inspired sparkle on this knee-length cocktail dress. A cami strap neckline and subtle A-line skirt balance the drama above. Perfect for special occasions.",
    colors: ["Gold", "Silver", "Black", "Rose Gold"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1434389877585-b08de47da06e?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Sequin embellished Polyester", care: "Dry clean only", sku: "WM-DR-007"
  },
  {
    id: 33, name: "Chunky Knit Sweater Dress", category: "women", subcategory: "Dresses",
    price: 3699, originalPrice: null, badge: "new",
    rating: 4.6, reviews: 122,
    description: "Cosy-luxe knitwear in a relaxed mini dress silhouette. An oversized ribbed collar and dropped shoulders give it a contemporary edge while the chunky knit keeps you warm through winter.",
    colors: ["Cream", "Camel", "Rust", "Dark Green"],
    sizes: ["XS/S", "M/L", "XL/XXL"],
    images: [
      UNSPLASH + '1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "45% Wool, 55% Acrylic", care: "Hand wash cold", sku: "WM-DR-008"
  },

  /* ─────────── WOMEN'S TOPS ─────────── */
  {
    id: 34, name: "Silk-Blend Cami Top", category: "women", subcategory: "Tops",
    price: 1999, originalPrice: null, badge: null,
    rating: 4.5, reviews: 187,
    description: "Effortlessly elegant in a soft silk-blend fabric that drapes beautifully. Adjustable spaghetti straps and a V-neckline make this cami the ultimate layering piece — under a blazer or worn alone.",
    colors: ["Black", "Ivory", "Dusty Pink", "Forest Green", "Cobalt Blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1496747389813-69100a1d2fa0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1485518882345-15568b007407?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "80% Viscose, 20% Silk", care: "Hand wash cold", sku: "WM-TP-001"
  },
  {
    id: 35, name: "Ruffle Trim Blouse", category: "women", subcategory: "Tops",
    price: 2499, originalPrice: 2999, badge: "sale",
    rating: 4.3, reviews: 93,
    description: "Romantic ruffle detail at the collar and cuffs elevates this easy-wear blouse. Relaxed fit in a lightweight woven fabric that presses beautifully. Tuck into trousers for a polished office look.",
    colors: ["White", "Cream", "Blush", "Sky Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1485518882345-15568b007407?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1496747389813-69100a1d2fa0?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyester Georgette", care: "Hand wash or machine gentle cycle", sku: "WM-TP-002"
  },
  {
    id: 36, name: "Cropped Ribbed Tee", category: "women", subcategory: "Tops",
    price: 899, originalPrice: 1199, badge: "sale",
    rating: 4.6, reviews: 412,
    description: "The perfect crop top. Fine-ribbed cotton sits just above the waistband for a flattering cropped silhouette. The stretch fabric hugs every curve. Pairs with everything from high-waist jeans to midi skirts.",
    colors: ["Black", "White", "Terracotta", "Sage", "Lilac", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1434389877585-b08de47da06e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "95% Cotton, 5% Elastane", care: "Machine wash cold", sku: "WM-TP-003"
  },
  {
    id: 37, name: "Lace Trim Camisole", category: "women", subcategory: "Tops",
    price: 1299, originalPrice: null, badge: null,
    rating: 4.4, reviews: 145,
    description: "Delicate lace trim at the neckline and hem adds feminine detail to this essential camisole. The adjustable straps and stretch fabric make it supremely comfortable throughout the day.",
    colors: ["Black", "Ivory", "Rose", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1496747389813-69100a1d2fa0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1485518882345-15568b007407?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "95% Modal, 5% Elastane", care: "Hand wash cold", sku: "WM-TP-004"
  },
  {
    id: 38, name: "Oversized Boyfriend Shirt", category: "women", subcategory: "Tops",
    price: 2199, originalPrice: 2699, badge: "sale",
    rating: 4.7, reviews: 278,
    description: "Borrowed from a bigger wardrobe and made entirely your own. This oversized poplin shirt is cut long enough to wear as a dress belted, or half-tucked into straight-leg jeans.",
    colors: ["White", "Light Blue", "Pink", "Stripe Print"],
    sizes: ["XS/S", "M/L", "XL/XXL"],
    images: [
      UNSPLASH + '1485518882345-15568b007407?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1496747389813-69100a1d2fa0?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Poplin", care: "Machine wash cold, iron while damp", sku: "WM-TP-005"
  },
  {
    id: 39, name: "Cold-Shoulder Knit Top", category: "women", subcategory: "Tops",
    price: 1899, originalPrice: null, badge: "new",
    rating: 4.3, reviews: 67,
    description: "A subtle cold-shoulder cutout adds a playful detail to this otherwise classic knit. Long sleeves and a relaxed body make this perfect for transitional weather styled with denim or trousers.",
    colors: ["Ivory", "Black", "Camel", "Dusty Pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1434389877585-b08de47da06e?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "70% Viscose, 30% Nylon", care: "Hand wash cold", sku: "WM-TP-006"
  },
  {
    id: 40, name: "Ribbed Turtleneck Top", category: "women", subcategory: "Tops",
    price: 1799, originalPrice: 2299, badge: "sale",
    rating: 4.6, reviews: 195,
    description: "A close-fitting turtleneck in fine ribbed jersey. Slim enough to layer under dungarees or a slip dress while providing warmth and a chic Parisian aesthetic on its own.",
    colors: ["Black", "Cream", "Camel", "Rust", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1496747389813-69100a1d2fa0?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "92% Viscose, 8% Elastane", care: "Machine wash cold", sku: "WM-TP-007"
  },

  /* ─────────── WOMEN'S BOTTOMS ─────────── */
  {
    id: 41, name: "High Waist Skinny Jeans", category: "women", subcategory: "Jeans",
    price: 3299, originalPrice: null, badge: "bestseller",
    rating: 4.7, reviews: 489,
    description: "Our best-selling fit. A super-high waist with a sculpting second skin fit that elongates the legs. Four-way stretch denim holds its shape all day and bounces back perfectly after washing.",
    colors: ["Dark Indigo", "Black", "Light Blue", "White"],
    sizes: ["24", "26", "28", "30", "32", "34"],
    images: [
      UNSPLASH + '1532453288-f1d1c70d4d95?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "76% Cotton, 22% Polyester, 2% Elastane", care: "Machine wash cold inside out", sku: "WM-BT-001"
  },
  {
    id: 42, name: "Wide Leg Tailored Trousers", category: "women", subcategory: "Trousers",
    price: 3499, originalPrice: 4299, badge: "sale",
    rating: 4.5, reviews: 198,
    description: "Elevated workwear in a fluid wide-leg cut. The high-rise waist and wide leg create a powerful silhouette that works with everything from a crisp shirt to a tucked-in tee.",
    colors: ["Black", "Camel", "Stone", "Navy", "Chocolate"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1532453288-f1d1c70d4d95?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "70% Viscose, 28% Nylon, 2% Elastane", care: "Dry clean recommended", sku: "WM-BT-002"
  },
  {
    id: 43, name: "Flared Bootcut Jeans", category: "women", subcategory: "Jeans",
    price: 3199, originalPrice: null, badge: "trending",
    rating: 4.4, reviews: 156,
    description: "Seventies-inspired flare is having a major moment, and these do it best. Mid-rise cut with a slight stretch fits snugly through the hip and thigh before flaring from the knee.",
    colors: ["Mid Blue", "Dark Wash", "Black"],
    sizes: ["24", "26", "28", "30", "32", "34"],
    images: [
      UNSPLASH + '1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1532453288-f1d1c70d4d95?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "98% Cotton, 2% Elastane", care: "Machine wash cold", sku: "WM-BT-003"
  },
  {
    id: 44, name: "Paper Bag Waist Trousers", category: "women", subcategory: "Trousers",
    price: 2799, originalPrice: 3499, badge: "sale",
    rating: 4.2, reviews: 87,
    description: "A gathered paper-bag waist with an adjustable tie creates a playfully elegant silhouette. The tapered leg and cropped length look best with a tucked-in blouse and mule sandals.",
    colors: ["Black", "Camel", "Forest Green", "Rust"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyester Crepe", care: "Dry clean or hand wash cold", sku: "WM-BT-004"
  },
  {
    id: 45, name: "Relaxed Cargo Joggers", category: "women", subcategory: "Trousers",
    price: 2299, originalPrice: null, badge: null,
    rating: 4.5, reviews: 143,
    description: "Utility meets comfort in these cargo-style joggers with a relaxed fit and elasticated waist. Multiple side pockets and a tapered hem give them a sporty-chic edge that works beyond the gym.",
    colors: ["Olive", "Black", "Beige", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "95% Cotton, 5% Elastane", care: "Machine wash cold", sku: "WM-BT-005"
  },

  /* ─────────── WOMEN'S SKIRTS ─────────── */
  {
    id: 46, name: "Pleated Satin Mini Skirt", category: "women", subcategory: "Skirts",
    price: 1799, originalPrice: null, badge: "new",
    rating: 4.4, reviews: 112,
    description: "Micro-pleated satin with a beautiful subtle sheen catches the light with every step. High-rise waist with a side zipper. The perfect going-out skirt styled with a tank or fitted polo neck.",
    colors: ["Champagne", "Black", "Hot Pink", "Cobalt"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1594744803329-e5e76aecb5ed?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyester Satin", care: "Hand wash cold", sku: "WM-SK-001"
  },
  {
    id: 47, name: "A-Line Linen Midi Skirt", category: "women", subcategory: "Skirts",
    price: 2299, originalPrice: 2899, badge: "sale",
    rating: 4.6, reviews: 174,
    description: "A graceful A-line cut in breathable linen falls just below the knee. Elasticated waist and an invisible side slit for ease of movement. The effortless summer staple that never goes out of style.",
    colors: ["White", "Natural", "Sage", "Terracotta", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1594744803329-e5e76aecb5ed?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1583744946564-b52ac1c389c8?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Linen", care: "Machine wash cold, gentle cycle", sku: "WM-SK-002"
  },
  {
    id: 48, name: "Raw Hem Denim Mini Skirt", category: "women", subcategory: "Skirts",
    price: 2099, originalPrice: null, badge: null,
    rating: 4.3, reviews: 136,
    description: "A 90s classic updated for today. High-waisted denim mini with a raw-frayed hem, button-fly and front slash pockets. Wear with an oversized graphic tee or knotted shirt for complete retro energy.",
    colors: ["Light Wash", "Mid Blue", "Black"],
    sizes: ["24", "26", "28", "30", "32", "34"],
    images: [
      UNSPLASH + '1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1532453288-f1d1c70d4d95?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Denim", care: "Machine wash cold inside out", sku: "WM-SK-003"
  },
  {
    id: 49, name: "Wrap Maxi Skirt", category: "women", subcategory: "Skirts",
    price: 2599, originalPrice: 3199, badge: "sale",
    rating: 4.5, reviews: 91,
    description: "A true wrap design with an adjustable tie that lets you control the fit. In a fluid crepe fabric with an elegant drape, this maxi skirt works for smart-casual evenings and resort dressing alike.",
    colors: ["Black", "Floral Print", "Geometric Print", "Stripes"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1594744803329-e5e76aecb5ed?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1583744946564-b52ac1c389c8?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyester Crepe", care: "Hand wash or dry clean", sku: "WM-SK-004"
  },
  {
    id: 50, name: "Faux Leather Pencil Skirt", category: "women", subcategory: "Skirts",
    price: 2799, originalPrice: null, badge: "trending",
    rating: 4.4, reviews: 203,
    description: "One of the strongest trends this season. This faux leather pencil skirt has a sleek, polished finish that instantly elevates any outfit. A back kick pleat allows comfortable walking.",
    colors: ["Black", "Tan", "Chocolate Brown"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1434389877585-b08de47da06e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyurethane (Vegan)", care: "Wipe clean, do not machine wash", sku: "WM-SK-005"
  },

  /* ─────────── WOMEN'S ACTIVEWEAR ─────────── */
  {
    id: 51, name: "High Waist Yoga Leggings", category: "women", subcategory: "Activewear",
    price: 2199, originalPrice: 2799, badge: "sale",
    rating: 4.9, reviews: 612,
    description: "Our number one bestselling legging. A 4-way stretch fabric that's buttery smooth, squat-proof, and sweat-wicking. The wide waistband compresses and sculpts through the midsection.",
    colors: ["Black", "Navy", "Burgundy", "Forest Green", "Cobalt", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "78% Nylon, 22% Spandex", care: "Machine wash cold, hang dry", sku: "WM-AW-001"
  },
  {
    id: 52, name: "Strappy Sports Bra", category: "women", subcategory: "Activewear",
    price: 1299, originalPrice: null, badge: null,
    rating: 4.6, reviews: 287,
    description: "Medium-support sports bra with adjustable cross-back straps and removable pads. Moisture-wicking and breathable fabric keeps you cool through any workout intensity.",
    colors: ["Black", "White", "Coral", "Navy", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1541518763669-27ffa9818f6b?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "88% Polyester, 12% Spandex", care: "Machine wash cold, hang dry", sku: "WM-AW-002"
  },
  {
    id: 53, name: "Biker Shorts", category: "women", subcategory: "Activewear",
    price: 1099, originalPrice: 1399, badge: "sale",
    rating: 4.7, reviews: 345,
    description: "The ultimate athleisure shorts. High-waist biker shorts in a compression fabric that smooths without restricting. Wear to the gym, the café, or styled with an oversized blazer.",
    colors: ["Black", "Navy", "Forest Green", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "80% Nylon, 20% Spandex", care: "Machine wash cold", sku: "WM-AW-003"
  },
  {
    id: 54, name: "Full Zip Running Jacket", category: "women", subcategory: "Activewear",
    price: 3499, originalPrice: 4299, badge: "sale",
    rating: 4.5, reviews: 121,
    description: "Lightweight windproof shell with a soft inner lining. Reflective details for low-light visibility, a full zip front, and a slim packable design. Your perfect running companion in all conditions.",
    colors: ["Black", "Navy", "Coral", "Electric Blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1551028719-00167b16eac5?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyester", care: "Machine wash cold", sku: "WM-AW-004"
  },
  {
    id: 55, name: "Longline Workout Tank", category: "women", subcategory: "Activewear",
    price: 999, originalPrice: null, badge: null,
    rating: 4.4, reviews: 223,
    description: "An elongated tank with just enough length to cover your waistband — no accidental exposure in downward dog. Racerback cut, moisture-wicking fabric, and a flattering curved hem.",
    colors: ["Black", "White", "Grey", "Sage", "Blush"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1541518763669-27ffa9818f6b?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "92% Polyester, 8% Spandex", care: "Machine wash cold", sku: "WM-AW-005"
  },

  /* ─────────── ACCESSORIES — BAGS ─────────── */
  {
    id: 56, name: "Classic Canvas Tote Bag", category: "accessories", subcategory: "Bags",
    price: 2499, originalPrice: null, badge: "bestseller",
    rating: 4.7, reviews: 392,
    description: "Heavy-duty canvas tote with interior zip pocket and reinforced handles. Generous 15L capacity holds everything from groceries to a 13-inch laptop. Unlined for easy cleaning.",
    colors: ["Natural/Black", "Black/Black", "Navy/White"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1548036161-97a1bbba3903?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "600D Canvas", care: "Spot clean or machine wash on gentle", sku: "AC-BG-001"
  },
  {
    id: 57, name: "Structured Leather Crossbody", category: "accessories", subcategory: "Bags",
    price: 5999, originalPrice: 7499, badge: "sale",
    rating: 4.8, reviews: 215,
    description: "A modern structured crossbody in full-grain leather that develops a beautiful patina with age. Adjustable strap, two main compartments, and a back zip pocket. A bag designed to outlast trends.",
    colors: ["Black", "Tan", "Chocolate", "Forest"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1548036161-97a1bbba3903?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Full-grain Leather", care: "Condition with leather cream, avoid water", sku: "AC-BG-002"
  },
  {
    id: 58, name: "Premium Leather Backpack", category: "accessories", subcategory: "Bags",
    price: 8999, originalPrice: null, badge: null,
    rating: 4.6, reviews: 134,
    description: "A sophisticated backpack for the modern professional. Padded 15-inch laptop sleeve, multiple organiser pockets, and top-grain leather construction. Business-ready but elegant enough for evenings.",
    colors: ["Black", "Dark Brown", "Navy"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1548036161-97a1bbba3903?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Top-grain Leather", care: "Condition with leather balm", sku: "AC-BG-003"
  },
  {
    id: 59, name: "Beaded Clutch Evening Bag", category: "accessories", subcategory: "Bags",
    price: 2999, originalPrice: 3799, badge: "sale",
    rating: 4.4, reviews: 87,
    description: "Hand-embellished micro beads on a structured satin base. A detachable wrist strap and magnetic clasp closure make this the perfect going-out bag. Fits phone, cards, and essentials.",
    colors: ["Gold", "Silver", "Black", "Ivory"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1548036161-97a1bbba3903?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Glass beads on Satin base", care: "Spot clean only", sku: "AC-BG-004"
  },
  {
    id: 60, name: "Waxed Canvas Weekend Bag", category: "accessories", subcategory: "Bags",
    price: 5499, originalPrice: null, badge: "new",
    rating: 4.7, reviews: 98,
    description: "A proper weekend companion. Water-resistant waxed canvas with full-grain leather handles and base. Internal shoe compartment, padded laptop sleeve, and trolley pass-through. Built for adventure.",
    colors: ["Olive/Tan", "Black/Black", "Navy/Tan"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1548036161-97a1bbba3903?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Waxed Canvas & Leather", care: "Re-wax annually, wipe clean", sku: "AC-BG-005"
  },
  {
    id: 61, name: "Chain Strap Shoulder Bag", category: "accessories", subcategory: "Bags",
    price: 4299, originalPrice: 5499, badge: "sale",
    rating: 4.5, reviews: 167,
    description: "Gold-tone chain strap on a quilted leather-look body. This shoulder bag elevates any outfit effortlessly. The twist-lock clasp and suede interior lining give it a luxury feel at an accessible price.",
    colors: ["Black", "Blush Pink", "Cream", "Cobalt"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1548036161-97a1bbba3903?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "PU Leather with Metal Chain", care: "Wipe with damp cloth", sku: "AC-BG-006"
  },

  /* ─────────── ACCESSORIES — SUNGLASSES ─────────── */
  {
    id: 62, name: "Classic Aviator Sunglasses", category: "accessories", subcategory: "Sunglasses",
    price: 2499, originalPrice: null, badge: "bestseller",
    rating: 4.6, reviews: 298,
    description: "The definitive aviator, reissued with UV400 lenses and a lightweight stainless steel frame. Teardrop lenses with adjustable nose pads for a perfect fit on all face shapes.",
    colors: ["Gold/Green", "Silver/Grey", "Gunmetal/Brown"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1524592094714-0f0654e20314?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1508296695146-257a814ea21a?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Stainless Steel frame, Polycarbonate lenses", care: "Clean with microfibre cloth", sku: "AC-SG-001"
  },
  {
    id: 63, name: "Round Retro Sunglasses", category: "accessories", subcategory: "Sunglasses",
    price: 1999, originalPrice: 2499, badge: "sale",
    rating: 4.4, reviews: 147,
    description: "Small, perfectly round lenses in a delicate thin metal frame. A throwback silhouette that suits most face shapes. UV400 protection in gradient-tinted lenses.",
    colors: ["Gold/Brown Gradient", "Silver/Grey", "Rose Gold/Pink"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1508296695146-257a814ea21a?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1524592094714-0f0654e20314?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Metal frame, Polycarbonate lenses", care: "Store in case, clean with microfibre", sku: "AC-SG-002"
  },
  {
    id: 64, name: "Oversized Square Frame Shades", category: "accessories", subcategory: "Sunglasses",
    price: 2299, originalPrice: null, badge: "new",
    rating: 4.5, reviews: 112,
    description: "Bold oversized square frames in thick acetate offer maximum sun protection and maximum style. Flat-top lenses and thick temples are a statement look that suits oval and heart-shaped faces.",
    colors: ["Tortoise", "Black", "Ivory", "Transparent"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1524592094714-0f0654e20314?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1508296695146-257a814ea21a?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Acetate frame, Polycarbonate lenses", care: "Clean with microfibre cloth", sku: "AC-SG-003"
  },
  {
    id: 65, name: "Cat Eye Sunglasses", category: "accessories", subcategory: "Sunglasses",
    price: 2099, originalPrice: 2599, badge: "sale",
    rating: 4.7, reviews: 189,
    description: "An upswept cat-eye silhouette that channels 1950s glamour. Thick rims with a bold upswept corner give instant attitude. Polarised lenses reduce glare on bright days.",
    colors: ["Black", "Tortoise", "Red", "Leopard Print"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1508296695146-257a814ea21a?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1524592094714-0f0654e20314?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Acetate frame, Polarised Polycarbonate", care: "Store in case when not in use", sku: "AC-SG-004"
  },
  {
    id: 66, name: "Shield Sport Sunglasses", category: "accessories", subcategory: "Sunglasses",
    price: 1799, originalPrice: null, badge: null,
    rating: 4.3, reviews: 76,
    description: "A wraparound shield lens offers 180° UV protection, ideal for running, cycling or any outdoor activity. Lightweight and impact-resistant with rubberised grip inserts on the nose and temples.",
    colors: ["Black/Black", "Black/Mirror", "White/Blue Mirror"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1524592094714-0f0654e20314?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1508296695146-257a814ea21a?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "TR90 frame, Polycarbonate lenses", care: "Rinse with fresh water after use", sku: "AC-SG-005"
  },

  /* ─────────── ACCESSORIES — WATCHES ─────────── */
  {
    id: 67, name: "Minimalist Leather Strap Watch", category: "accessories", subcategory: "Watches",
    price: 5999, originalPrice: null, badge: "bestseller",
    rating: 4.7, reviews: 243,
    description: "A clean dial with no unnecessary detail. Swiss quartz movement, sapphire crystal glass, and a genuine leather strap in a 40mm case. The watch for people who hate fussy watches.",
    colors: ["Black/Silver", "Brown/Gold", "Navy/Rose Gold"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1627123424574-724758594913?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1562157873-818bc0726f68?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "316L Stainless Steel, Genuine Leather", care: "Avoid prolonged water exposure", sku: "AC-WC-001"
  },
  {
    id: 68, name: "Gold Bracelet Watch", category: "accessories", subcategory: "Watches",
    price: 7499, originalPrice: 9999, badge: "sale",
    rating: 4.5, reviews: 118,
    description: "A showstopping gold-tone bracelet watch with a sunray dial that catches the light beautifully. The fold-over clasp mechanism ensures a secure fit. Dress it up or down with ease.",
    colors: ["Gold/White", "Gold/Champagne", "Rose Gold/White"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1562157873-818bc0726f68?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1627123424574-724758594913?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Gold-plated Stainless Steel", care: "Wipe with soft cloth, avoid chemicals", sku: "AC-WC-002"
  },
  {
    id: 69, name: "Digital Sport Watch", category: "accessories", subcategory: "Watches",
    price: 3999, originalPrice: 4999, badge: "sale",
    rating: 4.6, reviews: 321,
    description: "A feature-packed digital sport watch with built-in stopwatch, alarm, backlight, and 100m water resistance. The durable resin case and silicone strap can take anything you throw at it.",
    colors: ["Black", "Navy/Orange", "Red", "Olive"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1627123424574-724758594913?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1562157873-818bc0726f68?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Resin case, Silicone strap", care: "Rinse after saltwater exposure", sku: "AC-WC-003"
  },
  {
    id: 70, name: "Chronograph Field Watch", category: "accessories", subcategory: "Watches",
    price: 9999, originalPrice: null, badge: null,
    rating: 4.8, reviews: 95,
    description: "Three sub-dials and a tachymetre bezel in the spirit of classic pilot watches. Swiss-made automatic movement, scratch-resistant sapphire crystal, and a lug-to-lug of 44mm. A genuine instrument.",
    colors: ["Black Dial", "White Dial", "Green Dial"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1562157873-818bc0726f68?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1627123424574-724758594913?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Grade 2 Titanium, Sapphire Crystal", care: "Service every 3-5 years", sku: "AC-WC-004"
  },
  {
    id: 71, name: "Rose Gold Mesh Watch", category: "accessories", subcategory: "Watches",
    price: 6499, originalPrice: 7999, badge: "sale",
    rating: 4.6, reviews: 176,
    description: "An elegant milanese mesh bracelet in rose gold-tone with an adjustable magnetic clasp. The slim 36mm case keeps it delicate. A versatile watch that works as everyday jewellery.",
    colors: ["Rose Gold/White", "Rose Gold/Champagne", "Silver/White"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1562157873-818bc0726f68?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1627123424574-724758594913?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Rose gold-plated Stainless Steel Mesh", care: "Wipe with microfibre cloth", sku: "AC-WC-005"
  },

  /* ─────────── ACCESSORIES — BELTS ─────────── */
  {
    id: 72, name: "Classic Leather Belt", category: "accessories", subcategory: "Belts",
    price: 1499, originalPrice: null, badge: "bestseller",
    rating: 4.8, reviews: 432,
    description: "The only belt you need. Full-grain leather in a 35mm width with a classic polished pin buckle. This belt develops a beautiful patina over years of wear and only gets better with age.",
    colors: ["Black", "Dark Brown", "Tan"],
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    images: [
      UNSPLASH + '1624222247344-550e4b8f5db0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Full-grain Leather", care: "Condition with leather cream", sku: "AC-BL-001"
  },
  {
    id: 73, name: "Reversible Leather Belt", category: "accessories", subcategory: "Belts",
    price: 1999, originalPrice: 2499, badge: "sale",
    rating: 4.6, reviews: 167,
    description: "Two belts in one. A reversible pin-buckle belt that flips from black to dark brown with the turn of a lever. The practical choice for those who travel light but want options.",
    colors: ["Black/Brown", "Navy/Tan"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [
      UNSPLASH + '1624222247344-550e4b8f5db0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Top-grain Leather", care: "Condition with leather balm", sku: "AC-BL-002"
  },
  {
    id: 74, name: "Canvas Web Belt", category: "accessories", subcategory: "Belts",
    price: 799, originalPrice: 999, badge: "sale",
    rating: 4.4, reviews: 213,
    description: "A D-ring canvas web belt in the style of classic army surplus. Adjustable to fit any waist size with a simple thread-through closure. Unisex and works across casual looks.",
    colors: ["Olive", "Navy", "Black", "Natural"],
    sizes: ["One Size (Adjustable)"],
    images: [
      UNSPLASH + '1624222247344-550e4b8f5db0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Cotton Canvas, Metal D-Ring", care: "Machine wash cold", sku: "AC-BL-003"
  },
  {
    id: 75, name: "Statement Buckle Waist Belt", category: "accessories", subcategory: "Belts",
    price: 2299, originalPrice: null, badge: "new",
    rating: 4.3, reviews: 78,
    description: "An oversized square gold-tone buckle makes this the statement belt of the season. Wear cinched over a blazer, maxi dress, or coat to instantly define your waist. The detail that completes any outfit.",
    colors: ["Black/Gold", "White/Gold", "Tan/Gold"],
    sizes: ["XS/S", "M/L", "XL/XXL"],
    images: [
      UNSPLASH + '1624222247344-550e4b8f5db0?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "PU Leather, Zinc alloy buckle", care: "Wipe clean", sku: "AC-BL-004"
  },

  /* ─────────── ACCESSORIES — HATS & SCARVES ─────────── */
  {
    id: 76, name: "Cashmere Blend Scarf", category: "accessories", subcategory: "Scarves",
    price: 3499, originalPrice: 4499, badge: "sale",
    rating: 4.8, reviews: 189,
    description: "Impossibly soft and lightweight cashmere blend in a generous oversized size that wraps around comfortably. Subtle herringbone weave adds texture without pattern noise. An heirloom piece.",
    colors: ["Camel", "Grey", "Navy", "Burgundy", "Black"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1553556853-fb1bcf9c6ff5?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "50% Cashmere, 50% Merino Wool", care: "Dry clean or hand wash cold", sku: "AC-SC-001"
  },
  {
    id: 77, name: "Silk Square Scarf", category: "accessories", subcategory: "Scarves",
    price: 2999, originalPrice: null, badge: null,
    rating: 4.6, reviews: 134,
    description: "A 90cm square of pure silk with a hand-rolled hem and archival-inspired print. Tie as a headscarf, neck scarf, or bag accessory. One piece, infinite ways to wear it.",
    colors: ["Floral Print", "Geometric Print", "Leopard Print", "Paisley"],
    sizes: ["90cm x 90cm"],
    images: [
      UNSPLASH + '1553556853-fb1bcf9c6ff5?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Silk", care: "Dry clean only", sku: "AC-SC-002"
  },
  {
    id: 78, name: "Ribbed Wool Beanie", category: "accessories", subcategory: "Hats",
    price: 999, originalPrice: 1299, badge: "sale",
    rating: 4.7, reviews: 312,
    description: "A simple, well-made beanie in a chunky ribbed knit. Long enough to slouch at the back or fold up to a cuffed look. Merino wool blend is soft enough to wear directly against skin.",
    colors: ["Black", "Grey", "Camel", "Navy", "Burgundy", "Forest Green"],
    sizes: ["One Size"],
    images: [
      UNSPLASH + '1553556853-fb1bcf9c6ff5?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "60% Merino Wool, 40% Acrylic", care: "Hand wash cold", sku: "AC-HT-001"
  },
  {
    id: 79, name: "Structured Baseball Cap", category: "accessories", subcategory: "Hats",
    price: 1299, originalPrice: null, badge: "bestseller",
    rating: 4.5, reviews: 256,
    description: "A six-panel structured cap in washed cotton twill. Adjustable metal buckle strap at the back. Keeps its shape through all weather. Clean and minimal with a small logo embroidery.",
    colors: ["Black", "Navy", "White", "Olive", "Stone"],
    sizes: ["One Size (Adjustable)"],
    images: [
      UNSPLASH + '1553556853-fb1bcf9c6ff5?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Twill", care: "Spot clean only", sku: "AC-HT-002"
  },
  {
    id: 80, name: "Wide Brim Straw Hat", category: "accessories", subcategory: "Hats",
    price: 1799, originalPrice: 2199, badge: "sale",
    rating: 4.4, reviews: 143,
    description: "A holiday essential. Hand-woven natural straw with a wide 10cm brim that provides real sun protection. A grosgrain ribbon band can be replaced or removed. Packable for travel.",
    colors: ["Natural/Black Band", "Natural/Navy Band", "Natural/Tan Band"],
    sizes: ["S/M", "L/XL"],
    images: [
      UNSPLASH + '1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1553556853-fb1bcf9c6ff5?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Natural Straw, Grosgrain Ribbon", care: "Reshape when damp, air dry", sku: "AC-HT-003"
  },

  /* ─────────── KIDS ─────────── */
  {
    id: 81, name: "Graphic Tee & Shorts Set (Boys)", category: "kids", subcategory: "Boys",
    price: 1499, originalPrice: null, badge: "new",
    rating: 4.6, reviews: 98,
    description: "A matching set in soft jersey cotton. The graphic tee features a bold print and the elastic-waist shorts have two side pockets. Machine washable and built to handle active play.",
    colors: ["Blue Set", "Green Set", "Red Set"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "7-8Y", "9-10Y"],
    images: [
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1533461523519-9b82b8d62028?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Jersey", care: "Machine wash 40°C", sku: "KD-BY-001"
  },
  {
    id: 82, name: "Denim Pull-On Shorts (Boys)", category: "kids", subcategory: "Boys",
    price: 1299, originalPrice: 1599, badge: "sale",
    rating: 4.5, reviews: 77,
    description: "Comfortable denim shorts with a fully elasticated waist — no fiddly buttons for little hands. Two front pockets and a straight leg cut. Soft inner waistband for all-day comfort.",
    colors: ["Mid Blue", "Light Wash", "Black"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    images: [
      UNSPLASH + '1533461523519-9b82b8d62028?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "98% Cotton, 2% Elastane", care: "Machine wash 40°C", sku: "KD-BY-002"
  },
  {
    id: 83, name: "School Uniform Shirt (Boys)", category: "kids", subcategory: "Boys",
    price: 799, originalPrice: null, badge: null,
    rating: 4.7, reviews: 234,
    description: "Long-sleeve school shirt in stain-resistant easy-iron cotton. Reinforced collar points, button-down cuffs, and a slightly longer back hem to stay tucked in. The hardworking school essential.",
    colors: ["White", "Light Blue"],
    sizes: ["3-4Y", "4-5Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y", "13-14Y"],
    images: [
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1533461523519-9b82b8d62028?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "65% Polyester, 35% Cotton", care: "Machine wash 40°C, easy iron", sku: "KD-BY-003"
  },
  {
    id: 84, name: "Zip-Through Tracksuit (Boys)", category: "kids", subcategory: "Boys",
    price: 2199, originalPrice: 2799, badge: "sale",
    rating: 4.5, reviews: 112,
    description: "A matching tracksuit set with a zip-through hoodie and jogger trousers in the same technical jersey. Elastic waist and adjustable drawstring. Perfect for after school, sport, and weekends.",
    colors: ["Navy/White", "Black/Grey", "Blue/Orange"],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    images: [
      UNSPLASH + '1533461523519-9b82b8d62028?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "60% Cotton, 40% Polyester", care: "Machine wash 40°C", sku: "KD-BY-004"
  },
  {
    id: 85, name: "Hooded Puffer Jacket (Boys)", category: "kids", subcategory: "Boys",
    price: 2999, originalPrice: null, badge: "new",
    rating: 4.8, reviews: 167,
    description: "Lightweight and super warm. Packable puffer with a detachable hood and elastic cuffs to keep the cold out. The fun colour-block design makes this the jacket every kid wants to wear.",
    colors: ["Navy/Lime", "Red/Black", "Blue/Orange"],
    sizes: ["3-4Y", "4-5Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    images: [
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1533461523519-9b82b8d62028?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Shell: 100% Polyester, Fill: 100% Polyester", care: "Machine wash cold", sku: "KD-BY-005"
  },
  {
    id: 86, name: "Tiered Floral Dress (Girls)", category: "kids", subcategory: "Girls",
    price: 1799, originalPrice: 2199, badge: "sale",
    rating: 4.7, reviews: 143,
    description: "Three tiers of lightweight cotton voile in a sweet floral print. Elasticated shoulders and waist for a universally flattering fit. A pretty spring/summer dress for all occasions.",
    colors: ["Pink Floral", "Blue Floral", "Yellow Floral"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "7-8Y", "9-10Y"],
    images: [
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1545558014-8692077e9b5c?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Voile", care: "Machine wash 30°C", sku: "KD-GL-001"
  },
  {
    id: 87, name: "Denim Skirt with Pockets (Girls)", category: "kids", subcategory: "Girls",
    price: 1299, originalPrice: null, badge: null,
    rating: 4.5, reviews: 89,
    description: "A button-front denim mini skirt with real side pockets (because kids need pockets too!). A stretchy waistband makes it comfortable for all-day play and easy for independent dressing.",
    colors: ["Light Wash", "Mid Blue", "Black"],
    sizes: ["2-3Y", "3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    images: [
      UNSPLASH + '1545558014-8692077e9b5c?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "98% Cotton, 2% Elastane", care: "Machine wash 40°C", sku: "KD-GL-002"
  },
  {
    id: 88, name: "Ruffle Sleeve Top (Girls)", category: "kids", subcategory: "Girls",
    price: 899, originalPrice: 1199, badge: "sale",
    rating: 4.6, reviews: 124,
    description: "Ruffle short sleeves and a round neckline in a soft jersey cotton. A sweet everyday top that's easy to pair with anything. The subtle polka-dot print adds charm without being busy.",
    colors: ["Pink Dots", "Blue Dots", "White/Multi"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "7-8Y", "9-10Y"],
    images: [
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1545558014-8692077e9b5c?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Jersey", care: "Machine wash 40°C", sku: "KD-GL-003"
  },
  {
    id: 89, name: "Leggings & Top Set (Girls)", category: "kids", subcategory: "Girls",
    price: 1499, originalPrice: null, badge: "bestseller",
    rating: 4.8, reviews: 198,
    description: "Our bestselling girls co-ord set. Full-length leggings in 4-way stretch with a matching long-sleeve crop top. Perfect for dance class, gymnastics, or just playing. Wash after wash, holds its shape.",
    colors: ["Pink/Holographic", "Purple/Stars", "Teal/Rainbow"],
    sizes: ["3-4Y", "4-5Y", "5-6Y", "7-8Y", "9-10Y"],
    images: [
      UNSPLASH + '1545558014-8692077e9b5c?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "90% Polyester, 10% Elastane", care: "Machine wash cold, hang dry", sku: "KD-GL-004"
  },
  {
    id: 90, name: "Party Dress with Tulle (Girls)", category: "kids", subcategory: "Girls",
    price: 2499, originalPrice: 2999, badge: "sale",
    rating: 4.7, reviews: 156,
    description: "A velvet bodice with a full tulle skirt — every little girl's dream party dress. Hidden zip at the back and a bow detail at the waist. Machine washable because accidents happen.",
    colors: ["Dusty Rose", "Ivory", "Midnight Blue"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "7-8Y"],
    images: [
      UNSPLASH + '1503919006754-d38325e1b49e?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1545558014-8692077e9b5c?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Bodice: Velvet, Skirt: Tulle over satin", care: "Machine wash delicate, hang dry", sku: "KD-GL-005"
  },

  /* ─────────── FOOTWEAR ─────────── */
  {
    id: 91, name: "Classic White Leather Sneakers", category: "footwear", subcategory: "Sneakers",
    price: 3999, originalPrice: null, badge: "bestseller",
    rating: 4.8, reviews: 567,
    description: "The perfect white trainer. A clean low-profile silhouette in full-grain leather uppers with a cupsole construction. Cushioned insole and flexible rubber outsole. Goes with literally everything.",
    colors: ["White/White", "White/Black", "White/Gum"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    images: [
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Full-grain Leather upper, Rubber outsole", care: "Clean with damp cloth and leather cleaner", sku: "FW-SN-001"
  },
  {
    id: 92, name: "Canvas Slip-On Shoes", category: "footwear", subcategory: "Sneakers",
    price: 2499, originalPrice: 2999, badge: "sale",
    rating: 4.5, reviews: 234,
    description: "Fuss-free canvas slip-ons in a low-profile vulcanised silhouette. Elastic gusset panels at the sides make them easy to get on and off. A lightweight everyday shoe for laid-back looks.",
    colors: ["Navy", "Black", "White", "Red", "Olive"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    images: [
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Cotton Canvas upper, Rubber sole", care: "Machine wash cold, air dry", sku: "FW-SN-002"
  },
  {
    id: 93, name: "Side-Zip Chelsea Boots", category: "footwear", subcategory: "Boots",
    price: 5999, originalPrice: 7499, badge: "sale",
    rating: 4.7, reviews: 312,
    description: "A modern update on the Victorian original. These Chelsea boots have twin elasticated gussets, a pointed toe, and a 4cm block heel. The side zip for easy on/off is a practical upgrade on tradition.",
    colors: ["Black", "Tan", "Chocolate"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    images: [
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Leather upper, Leather sole", care: "Polish with matching leather cream", sku: "FW-BT-001"
  },
  {
    id: 94, name: "Strappy Heeled Sandals", category: "footwear", subcategory: "Sandals",
    price: 2299, originalPrice: null, badge: "new",
    rating: 4.4, reviews: 143,
    description: "Elegant thin straps criss-cross the foot and ankle on a 6cm kitten heel. A buckle fastening at the ankle strap ensures a secure fit. From day to evening in seconds.",
    colors: ["Black", "Gold", "Tan", "White"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    images: [
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Faux leather upper, Man-made sole", care: "Wipe clean with damp cloth", sku: "FW-SD-001"
  },
  {
    id: 95, name: "Platform Chunky Loafers", category: "footwear", subcategory: "Flats",
    price: 3499, originalPrice: 4299, badge: "sale",
    rating: 4.6, reviews: 221,
    description: "Statement loafers with a 4cm platform sole and gold-tone hardware at the vamp. A square toe and slip-on fit make these easy to style with straight-leg trousers, midi skirts, and everything in between.",
    colors: ["Black", "White", "Tan"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    images: [
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "PU upper, Synthetic platform sole", care: "Wipe with damp cloth", sku: "FW-FL-001"
  },
  {
    id: 96, name: "High-Top Canvas Sneakers", category: "footwear", subcategory: "Sneakers",
    price: 2999, originalPrice: null, badge: null,
    rating: 4.5, reviews: 189,
    description: "The streetwear classic. Heavy canvas upper with a rubber toe cap, metal eyelets, and a vulcanised rubber sole. A shoe that's looked great for 60 years and isn't stopping now.",
    colors: ["Black", "White", "Red", "Navy", "Olive"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    images: [
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Cotton Canvas upper, Vulcanised rubber sole", care: "Machine wash cold, air dry", sku: "FW-SN-003"
  },
  {
    id: 97, name: "Leather Ankle Boots", category: "footwear", subcategory: "Boots",
    price: 4499, originalPrice: 5499, badge: "sale",
    rating: 4.7, reviews: 256,
    description: "A pull-on ankle boot in full-grain leather with a 3cm stacked block heel. A curved side seam gives shape to the profile. Leather-lined for comfort and a suede insole keeps feet warm.",
    colors: ["Black", "Dark Brown", "Cognac"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    images: [
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Full-grain Leather upper and lining", care: "Condition with leather balm", sku: "FW-BT-002"
  },
  {
    id: 98, name: "Running Performance Shoes", category: "footwear", subcategory: "Sneakers",
    price: 3799, originalPrice: 4999, badge: "sale",
    rating: 4.8, reviews: 398,
    description: "Engineered mesh upper for maximum breathability and a responsive foam midsole that returns energy with each stride. A flared heel provides stability and the rubber outsole is durable across all surfaces.",
    colors: ["Black/White", "Blue/Orange", "Grey/Neon Yellow"],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    images: [
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Engineered mesh upper, Foam midsole, Rubber outsole", care: "Hand clean with damp cloth", sku: "FW-SN-004"
  },
  {
    id: 99, name: "Leather Flip Flops", category: "footwear", subcategory: "Sandals",
    price: 1299, originalPrice: 1699, badge: "sale",
    rating: 4.5, reviews: 178,
    description: "Summer done properly. Genuine leather straps with a textured leather footbed that moulds to the shape of your foot over time. The classic thong sandal elevated with real leather construction.",
    colors: ["Tan", "Brown", "Black", "White"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    images: [
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Genuine Leather straps and footbed", care: "Condition with leather oil, air dry", sku: "FW-SD-002"
  },
  {
    id: 100, name: "Platform Wedge Espadrilles", category: "footwear", subcategory: "Sandals",
    price: 2799, originalPrice: null, badge: "new",
    rating: 4.4, reviews: 134,
    description: "A classic Mediterranean silhouette with a braided jute wedge sole and ankle ties that wrap for a secure fit. The 7cm wedge adds height while the broad base ensures genuine comfort all day.",
    colors: ["Natural/Beige", "Black/Black", "White/Natural"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    images: [
      UNSPLASH + '1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "Canvas/Leather upper, Jute wedge", care: "Spot clean only, avoid water on jute", sku: "FW-SD-003"
  },

  /* ─────────── BONUS 5 ─────────── */
  {
    id: 101, name: "Linen Blazer", category: "men", subcategory: "Jackets",
    price: 6499, originalPrice: 7999, badge: "sale",
    rating: 4.5, reviews: 87,
    description: "Unstructured single-button blazer in a linen-cotton blend. No lining and unpadded shoulders give it a relaxed drape. Roll the sleeves, leave open over a T-shirt, or button up for smart occasions.",
    colors: ["Cream", "Navy", "Olive", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1617196034183-421b4040c8aa?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "55% Linen, 45% Cotton", care: "Dry clean recommended", sku: "MN-JK-006"
  },
  {
    id: 102, name: "Cropped Denim Jacket (Women)", category: "women", subcategory: "Jackets",
    price: 4499, originalPrice: null, badge: "new",
    rating: 4.6, reviews: 134,
    description: "A waist-length denim jacket with a slightly oversized fit through the shoulders that narrows to a cropped hem. Button-through front, two chest pockets, and adjustable side tabs.",
    colors: ["Light Wash", "Mid Blue", "Black", "Ecru"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1551028719-00167b16eac5?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1483985988355-763728e1935b?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Cotton Denim", care: "Machine wash cold inside out", sku: "WM-JK-001"
  },
  {
    id: 103, name: "Women's Wool Blend Coat", category: "women", subcategory: "Jackets",
    price: 8999, originalPrice: 11999, badge: "sale",
    rating: 4.8, reviews: 198,
    description: "A classic single-breasted coat in a luxurious Italian wool blend. Fully lined with a notch lapel, two welt pockets, and a back half-belt for shape. An investment that lasts a decade.",
    colors: ["Camel", "Black", "Grey", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      UNSPLASH + '1483985988355-763728e1935b?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1551028719-00167b16eac5?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "80% Wool, 20% Polyester", care: "Dry clean only", sku: "WM-JK-002"
  },
  {
    id: 104, name: "Printed Midi Skirt", category: "women", subcategory: "Skirts",
    price: 2799, originalPrice: 3499, badge: "sale",
    rating: 4.5, reviews: 112,
    description: "A fluid midi skirt with an all-over botanical print in a lightweight crepe fabric. Elasticated waist, A-line cut, and a subtle side slit make this as comfortable as it is stylish.",
    colors: ["Green Botanical", "Blue Abstract", "Terracotta Geometric"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      UNSPLASH + '1483985988355-763728e1935b?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1594744803329-e5e76aecb5ed?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Polyester Crepe", care: "Hand wash cold or dry clean", sku: "WM-SK-006"
  },
  {
    id: 105, name: "Long Cardigan with Pockets", category: "women", subcategory: "Knitwear",
    price: 3299, originalPrice: null, badge: "bestseller",
    rating: 4.9, reviews: 423,
    description: "The ultimate throw-on-and-go piece. This longline cardigan falls to mid-thigh with deep side pockets and an open front. In a soft, pill-resistant knit that looks effortlessly polished.",
    colors: ["Oatmeal", "Black", "Camel", "Sage", "Stone Grey"],
    sizes: ["XS/S", "M/L", "XL/XXL"],
    images: [
      UNSPLASH + '1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&h=750&q=80',
      UNSPLASH + '1483985988355-763728e1935b?auto=format&fit=crop&w=600&h=750&q=80',
    ],
    material: "100% Acrylic (Merino feel)", care: "Machine wash cold on delicate", sku: "WM-KN-001"
  }
];

/* Helper maps */
const PRODUCT_MAP = {};
PRODUCTS.forEach(p => { PRODUCT_MAP[p.id] = p; });

const CATEGORIES = [
  { id: 'men', label: "Men", count: PRODUCTS.filter(p => p.category === 'men').length },
  { id: 'women', label: "Women", count: PRODUCTS.filter(p => p.category === 'women').length },
  { id: 'accessories', label: "Accessories", count: PRODUCTS.filter(p => p.category === 'accessories').length },
  { id: 'kids', label: "Kids", count: PRODUCTS.filter(p => p.category === 'kids').length },
  { id: 'footwear', label: "Footwear", count: PRODUCTS.filter(p => p.category === 'footwear').length },
];

function getProducts(opts = {}) {
  let list = [...PRODUCTS];
  if (opts.category && opts.category !== 'sale') list = list.filter(p => p.category === opts.category);
  if (opts.category === 'sale') list = list.filter(p => p.badge === 'sale');
  if (opts.subcategory) list = list.filter(p => p.subcategory === opts.subcategory);
  if (opts.search) {
    const q = opts.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.subcategory.toLowerCase().includes(q));
  }
  if (opts.minPrice) list = list.filter(p => p.price >= opts.minPrice);
  if (opts.maxPrice) list = list.filter(p => p.price <= opts.maxPrice);
  if (opts.sort === 'price_asc') list.sort((a, b) => a.price - b.price);
  else if (opts.sort === 'price_desc') list.sort((a, b) => b.price - a.price);
  else if (opts.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  else if (opts.sort === 'rating') list.sort((a, b) => b.rating - a.rating);
  else if (opts.sort === 'newest') list.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
  return list;
}

function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }

function getDiscount(price, orig) {
  if (!orig) return null;
  return Math.round((1 - price / orig) * 100);
}
