import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/types/product';
import { PRICE_ON_REQUEST, formatPrice, getOrderChannel, getPrice } from '@/utils/order';
import { useOrder } from '@/hooks/useOrder';
import { SmartImage } from '@/components/ui/SmartImage';
import { InstagramIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { ColorSelector } from './ColorSelector';
import { OptionSelector } from './OptionSelector';

interface ProductCardProps {
  product: Product;
  /** Wide layout (photo left, details right) from tablet size up. Used when a category has one product. */
  wide?: boolean;
}

export function ProductCard({ product, wide = false }: ProductCardProps) {
  const [colorId, setColorId] = useState(product.colors?.[0]?.id);
  const [optionChoiceId, setOptionChoiceId] = useState(product.option?.choices[0]?.id);
  const placeOrder = useOrder();

  const colors = product.colors ?? [];
  const selectedColor = colors.find((c) => c.id === colorId);
  const image = selectedColor?.image ?? product.image;
  const price = getPrice(product, optionChoiceId);
  const channel = getOrderChannel();

  const imageAlt = selectedColor && colors.length > 1 ? `${product.name} in ${selectedColor.name}` : product.name;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[1.75rem] border border-blush/70 bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift ${
        wide ? 'md:flex-row' : ''
      }`}
    >
      <div className={`relative aspect-[4/5] overflow-hidden bg-petal ${wide ? 'md:aspect-auto md:min-h-[32rem] md:w-1/2 md:shrink-0' : ''}`}>
        <div className="absolute inset-0 transition duration-700 ease-out group-hover:scale-[1.04]">
          <SmartImage src={image} alt={imageAlt} position={product.imagePosition} />
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[11px] tracking-[0.16em] text-burgundy uppercase backdrop-blur-sm">
          {product.category === 'Clutches' ? 'Clutch' : 'Bag'}
        </span>
      </div>

      <div className={`flex flex-1 flex-col gap-5 p-6 ${wide ? 'md:justify-center md:gap-6 md:p-10 lg:p-12' : ''}`}>
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl leading-tight font-semibold text-ink">{product.name}</h3>
            {price === undefined ? (
              <p className="shrink-0 rounded-full bg-petal px-3 py-1 text-xs font-medium tracking-wide text-burgundy">
                {PRICE_ON_REQUEST}
              </p>
            ) : (
              <p className="shrink-0 font-serif text-2xl font-semibold text-burgundy" aria-live="polite">
                {formatPrice(price)}
              </p>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>
        </div>

        {colors.length > 1 && (
          <ColorSelector productId={product.id} colors={colors} value={colorId} onChange={setColorId} />
        )}

        {colors.length === 1 && (
          <p className="flex items-center gap-2 text-xs tracking-[0.18em] text-muted uppercase">
            Color:
            <span aria-hidden="true" className="size-4 rounded-full border border-black/10" style={{ backgroundColor: colors[0].swatch }} />
            <span className="font-medium tracking-normal text-ink normal-case">{colors[0].name}</span>
          </p>
        )}

        {product.option && (
          <OptionSelector productId={product.id} option={product.option} value={optionChoiceId} onChange={setOptionChoiceId} />
        )}

        <button
          type="button"
          onClick={() => placeOrder({ product, colorId, optionChoiceId })}
          className={`btn-primary w-full ${wide ? 'mt-auto md:mt-2' : 'mt-auto'}`}
        >
          {channel === 'whatsapp' ? <WhatsAppIcon size={18} /> : channel === 'instagram' ? <InstagramIcon size={18} /> : <ShoppingBag size={18} strokeWidth={1.75} />}
          {price === undefined ? 'Order Now' : `Order Now · ${formatPrice(price)}`}
        </button>
      </div>
    </article>
  );
}
