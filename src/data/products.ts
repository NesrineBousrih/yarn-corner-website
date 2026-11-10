import type { Product, ProductCategory } from '../types/product';

/**
 * ============================================================
 *  PRODUCT CATALOGUE — edit names, prices, descriptions here
 * ============================================================
 *  - Prices are in Tunisian dinars (DT).
 *  - Remove the `price` line to show "Price on request".
 *  - Image paths point to files inside the /public folder.
 *    .jpg, .jpeg, .png or .webp all work as long as the name matches.
 *  - To add a product, copy one block, change its values and give it a unique `id`.
 */

/** Order of the category filters and groups on the website. */
export const categories: ProductCategory[] = ['Clutches', 'Bags'];

export const products: Product[] = [
  // ---------------- CLUTCHES ----------------
  {
    id: 'clutch',
    name: 'Clutch',
    category: 'Clutches',
    description: 'A handmade crochet clutch, available in five colors, with or without a shoulder strap.',
    price: 48,
    colors: [
      { id: 'burgundy', name: 'Burgundy', swatch: '#6E1F33', image: '/images/products/clutch/burgundy/product.jpg' },
      { id: 'gold', name: 'Gold', swatch: '#B8973F', image: '/images/products/clutch/gold/product.jpg' },
      { id: 'green', name: 'Green', swatch: '#4F6B2C', image: '/images/products/clutch/green/product.jpg' },
      { id: 'black', name: 'Black', swatch: '#1E1C1E', image: '/images/products/clutch/black/product.jpg' },
      { id: 'pink', name: 'Pink', swatch: '#B993AE', image: '/images/products/clutch/pink/product.jpg' },
    ],
    option: {
      label: 'Shoulder strap',
      choices: [
        { id: 'no-strap', label: 'Without strap', price: 48 },
        { id: 'with-strap', label: 'With strap', price: 50 },
      ],
    },
  },

  // ---------------- BAGS ----------------
  {
    id: 'black-bag',
    name: 'Bag – Black',
    category: 'Bags',
    description: 'A handmade crochet bag in black.',
    price: 37,
    image: '/images/products/black-bag/product.jpg',
    colors: [{ id: 'black', name: 'Black', swatch: '#1E1C1E' }],
  },
  {
    id: 'lemon-yellow-bag',
    name: 'Bag – Lemon Yellow',
    category: 'Bags',
    description: 'A handmade crochet bag in lemon yellow.',
    price: 35,
    image: '/images/products/lemon-yellow-bag/product.jpg',
    colors: [{ id: 'lemon-yellow', name: 'Lemon yellow', swatch: '#E6DB9A' }],
  },
  {
    id: 'brown-bag',
    name: 'Bag – Brown',
    category: 'Bags',
    description: 'A handmade crochet bag in brown.',
    price: 32,
    image: '/images/products/brown-bag/product.jpg',
    colors: [{ id: 'brown', name: 'Brown', swatch: '#3B2620' }],
  },
  {
    id: 'green-bag',
    name: 'Bag – Green',
    category: 'Bags',
    description: 'A handmade crochet bag in green.',
    price: 68,
    image: '/images/products/green-bag/product.jpg',
    colors: [{ id: 'green', name: 'Green', swatch: '#8BAA2E' }],
  },
  {
    id: 'blue-bag',
    name: 'Bag – Blue',
    category: 'Bags',
    description: 'A handmade crochet bag in blue.',
    price: 29,
    image: '/images/products/blue-bag/product.jpg',
    colors: [{ id: 'blue', name: 'Blue', swatch: '#2C3E9E' }],
  },
  {
    id: 'white-bag',
    name: 'Bag – White',
    category: 'Bags',
    description: 'A handmade crochet bag in white.',
    // price not confirmed yet → "Price on request"
    image: '/images/products/white-bag/product.jpg',
    colors: [{ id: 'white', name: 'White', swatch: '#F4F2EE' }],
  },
  {
    id: 'burgundy-bag',
    name: 'Bag – Burgundy',
    category: 'Bags',
    description: 'A handmade crochet bag in burgundy.',
    price: 42,
    image: '/images/products/burgundy-bag/product.jpg',
    colors: [{ id: 'burgundy', name: 'Burgundy', swatch: '#6E1F33' }],
  },
];
