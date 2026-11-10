import type { ProductOption } from '@/types/product';
import { formatPrice } from '@/utils/order';

interface OptionSelectorProps {
  productId: string;
  option: ProductOption;
  value?: string;
  onChange: (choiceId: string) => void;
}

/** Segmented control for a price-changing option (e.g. shoulder strap). */
export function OptionSelector({ productId, option, value, onChange }: OptionSelectorProps) {
  return (
    <fieldset>
      <legend className="text-xs tracking-[0.18em] text-muted uppercase">{option.label}</legend>
      <div className="mt-2.5 grid grid-cols-2 gap-1 rounded-2xl bg-petal p-1">
        {option.choices.map((choice) => (
          <label key={choice.id} className="cursor-pointer">
            <input
              type="radio"
              name={`${productId}-option`}
              value={choice.id}
              checked={value === choice.id}
              onChange={() => onChange(choice.id)}
              className="peer sr-only"
            />
            <span className="flex flex-col items-center rounded-xl px-2 py-2 text-center text-sm text-ink/75 transition duration-200 peer-checked:bg-white peer-checked:text-burgundy peer-checked:shadow-soft peer-focus-visible:ring-2 peer-focus-visible:ring-soft-rose hover:text-burgundy">
              <span className="font-medium">{choice.label}</span>
              <span className="text-xs text-muted">{formatPrice(choice.price)}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
