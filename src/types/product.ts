export interface ProductColor {
  id: string;
  /** Name shown to customers and in the order message. */
  name: string;
  /** Swatch color shown in the color selector (approximate). */
  swatch: string;
  /** Photo for this color, relative to /public. Falls back to the product image. */
  image?: string;
}

export interface ProductOptionChoice {
  id: string;
  label: string;
  /** Full price in DT when this choice is selected. */
  price: number;
}

export interface ProductOption {
  /** e.g. "Shoulder strap" */
  label: string;
  choices: ProductOptionChoice[];
}

export type ProductCategory = 'Clutches' | 'Bags';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  /**
   * Price in DT. Leave it out (undefined) to show "Price on request".
   * If `option` is set, the selected choice's price is used instead.
   */
  price?: number;
  /** Main photo, relative to /public, e.g. "/images/products/blue-bag/product.jpg". */
  image?: string;
  /**
   * Optional photo framing (CSS object-position), e.g. "center 40%" to show
   * a bit more of the top. Defaults to "center".
   */
  imagePosition?: string;
  /** One color = shown as info. Several colors = customer picks one. */
  colors?: ProductColor[];
  /** A choice that changes the price (e.g. with / without strap). */
  option?: ProductOption;
}
