import { siteConfig } from '../config/site';
import type { Product } from '../types/product';

export interface OrderSelection {
  product: Product;
  colorId?: string;
  optionChoiceId?: string;
}

export const PRICE_ON_REQUEST = 'Price on request';

/** "48 DT", or "Price on request" when the price is not set. */
export const formatPrice = (value?: number) => (value === undefined ? PRICE_ON_REQUEST : `${value} DT`);

/** Price of a product, taking the selected option (e.g. strap) into account. Undefined = on request. */
export function getPrice(product: Product, optionChoiceId?: string): number | undefined {
  const choice = product.option?.choices.find((c) => c.id === optionChoiceId);
  return choice ? choice.price : product.price;
}

export function buildOrderMessage({ product, colorId, optionChoiceId }: OrderSelection): string {
  const color = product.colors?.find((c) => c.id === colorId) ?? (product.colors?.length === 1 ? product.colors[0] : undefined);
  const choice = product.option?.choices.find((c) => c.id === optionChoiceId);
  const price = getPrice(product, optionChoiceId);

  const lines = [`Hello ${siteConfig.brandName}! ♡`, 'I would love to place an order:', '', `• Product: ${product.name}`];
  if (color) lines.push(`• Color: ${color.name}`);
  if (product.option && choice) lines.push(`• ${product.option.label}: ${choice.label}`);
  lines.push(price === undefined ? '• Price: could you please tell me the price?' : `• Price: ${formatPrice(price)}`);
  lines.push('', 'Could you please confirm my order? Thank you!');
  return lines.join('\n');
}

/** WhatsApp number as digits only, or '' when not configured. */
export function getWhatsAppNumber(): string {
  return siteConfig.whatsappNumber.replace(/\D/g, '');
}

export function getWhatsAppUrl(message?: string): string | null {
  const number = getWhatsAppNumber();
  if (number.length < 8) return null;
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}

/** Instagram username, accepting "name", "@name" or a full profile link. */
export function getInstagramUsername(): string {
  const raw = siteConfig.instagramUsername.trim();
  const fromUrl = raw.match(/instagram\.com\/([^/?#]+)/i)?.[1];
  return (fromUrl ?? raw).replace(/^@/, '').replace(/\/$/, '');
}

export function getInstagramProfileUrl(): string | null {
  const user = getInstagramUsername();
  return user ? `https://www.instagram.com/${user}/` : null;
}

/** Opens a direct-message conversation on Instagram. */
export function getInstagramDmUrl(): string | null {
  const user = getInstagramUsername();
  return user ? `https://ig.me/m/${user}` : null;
}

export type OrderChannel = 'whatsapp' | 'instagram' | 'none';

export function getOrderChannel(): OrderChannel {
  if (getWhatsAppUrl()) return 'whatsapp';
  if (getInstagramDmUrl()) return 'instagram';
  return 'none';
}
