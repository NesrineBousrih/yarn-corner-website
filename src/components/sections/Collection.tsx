import { useState } from 'react';
import { categories, products } from '@/data/products';
import type { ProductCategory } from '@/types/product';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/product/ProductCard';

type Filter = 'All' | ProductCategory;

export function Collection() {
  const [filter, setFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', ...categories];
  const shown = filter === 'All' ? categories : [filter];
  const countOf = (f: Filter) => (f === 'All' ? products.length : products.filter((p) => p.category === f).length);

  return (
    <section id="collection" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Our Collection" title="Pieces made to be loved">
          Every piece is handmade, stitch by stitch. Choose your favorite, pick your options, and order in one tap.
        </SectionHeading>

        {/* Category filters */}
        <div role="group" aria-label="Filter by category" className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-5 py-2.5 text-sm transition duration-300 ${
                filter === f
                  ? 'border-burgundy bg-burgundy text-cream shadow-soft'
                  : 'border-burgundy/20 bg-white text-ink/80 hover:border-burgundy/60 hover:text-burgundy'
              }`}
            >
              {f === 'All' ? 'All pieces' : f}
              <span className={`ml-2 text-xs ${filter === f ? 'text-cream/70' : 'text-muted'}`}>{countOf(f)}</span>
            </button>
          ))}
        </div>

        {shown.map((category) => {
          const items = products.filter((p) => p.category === category);
          if (!items.length) return null;
          return (
            <div key={category} className="mt-14 animate-fade-in">
              <div className="mb-7 flex items-center gap-5">
                <h3 className="text-3xl font-semibold text-burgundy">{category}</h3>
                <span aria-hidden="true" className="h-px flex-1 bg-blush" />
              </div>
              {items.length === 1 ? (
                <div className="mx-auto max-w-sm md:max-w-none">
                  <ProductCard product={items[0]} wide />
                </div>
              ) : (
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
