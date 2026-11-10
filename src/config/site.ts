/**
 * ============================================================
 *  SITE SETTINGS — edit this file to configure your contacts
 * ============================================================
 *
 *  whatsappNumber:
 *    Your WhatsApp number in international format, digits only.
 *    Tunisia example: '216' followed by your 8-digit number → '21612345678'
 *    Leave '' (empty) while not configured: orders then go to Instagram.
 *
 *  instagramUsername:
 *    Your Instagram username WITHOUT the @, e.g. 'yarncorner.nesslem'
 *    (pasting your full profile link also works).
 *
 *  When both are empty, the "Order Now" buttons show a friendly
 *  "ordering coming soon" message instead of a broken link.
 */
export const siteConfig = {
  brandName: 'Yarn Corner by Nesslem',
  location: 'Tunisia',

  whatsappNumber: '21650973252',
  /** How the phone number is displayed on the website. */
  phoneDisplay: '+216 50 973 252',
  instagramUsername: 'yarncorner_bynesslem',

  /** Announcement banner text at the very top of the site. Set to '' to hide it. */
  announcement: 'Handmade in Tunisia · Order easily via WhatsApp or Instagram',

  // Image paths (files live in the /public folder). See README.md.
  logo: '/images/logo/logo.png',
  /** Large photo at the top of the homepage. Put a file at /images/hero/hero.jpg and change this to use it. */
  heroImage: '/images/products/burgundy-bag/product.jpg',
  /** Photo for the "Our Favourite Piece" section. */
  favoriteImage: '/images/favorites/favorite-piece.jpg',
} as const;

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'collection', label: 'Our Collection' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
] as const;
