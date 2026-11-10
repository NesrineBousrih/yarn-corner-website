import type { ProductColor } from '@/types/product';

interface ColorSelectorProps {
  productId: string;
  colors: ProductColor[];
  value?: string;
  onChange: (colorId: string) => void;
}

/** Round color swatches built on native radio buttons (keyboard accessible). */
export function ColorSelector({ productId, colors, value, onChange }: ColorSelectorProps) {
  const selected = colors.find((c) => c.id === value);
  return (
    <fieldset>
      <legend className="text-xs tracking-[0.18em] text-muted uppercase">
        Color: <span className="font-medium tracking-normal text-ink normal-case">{selected?.name}</span>
      </legend>
      <div className="mt-2.5 flex flex-wrap gap-2.5">
        {colors.map((color) => (
          <label key={color.id} title={color.name} className="cursor-pointer">
            <input
              type="radio"
              name={`${productId}-color`}
              value={color.id}
              checked={value === color.id}
              onChange={() => onChange(color.id)}
              className="peer sr-only"
            />
            <span className="sr-only">{color.name}</span>
            <span
              aria-hidden="true"
              style={{ backgroundColor: color.swatch }}
              className="block size-8 rounded-full border border-black/10 shadow-inner ring-offset-2 ring-offset-white transition duration-200 hover:scale-110 peer-checked:ring-2 peer-checked:ring-burgundy peer-focus-visible:ring-2 peer-focus-visible:ring-soft-rose"
            />
          </label>
        ))}
      </div>
    </fieldset>
  );
}
