import { ArrowRight, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { SmartImage } from '@/components/ui/SmartImage';

export function FavoritePiece() {
  return (
    <section id="favourite" aria-labelledby="favourite-title" className="relative overflow-hidden bg-petal py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-[-10%] size-[26rem] rounded-full bg-blush blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-[-8%] size-[22rem] rounded-full bg-cream/80 blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 rounded-[2.5rem] border border-white/80 bg-cream/80 p-5 shadow-lift backdrop-blur-sm sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-12">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-lg">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2.25rem] border border-soft-rose/50 sm:-inset-4" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-blush shadow-soft">
              <SmartImage src={siteConfig.favoriteImage} alt="Our favourite handmade crochet piece" />
            </div>
            <span className="absolute -top-4 -right-2 grid size-14 place-items-center rounded-full bg-burgundy text-cream shadow-lift sm:-right-4">
              <Heart size={22} fill="currentColor" strokeWidth={0} />
            </span>
          </div>

          {/* Caption */}
          <div className="pb-4 text-center lg:pb-0 lg:text-left">
            <p className="eyebrow">Close to our hearts</p>
            <h2 id="favourite-title" className="mt-4 text-4xl leading-tight font-semibold text-burgundy sm:text-5xl">
              Our Favourite Piece <span className="text-soft-rose">♡</span>
            </h2>
            <span aria-hidden="true" className="mx-auto mt-6 block h-px w-16 bg-soft-rose lg:mx-0" />
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink/80 lg:mx-0">
              Some pieces simply steal our hearts. Crocheted slowly, stitch by stitch, this one holds a little extra love,
              and it reflects everything we adore about handmade details.
            </p>
            <p className="mx-auto mt-4 max-w-md font-serif text-xl text-muted italic lg:mx-0">
              Handmade with love, made to be yours.
            </p>
            <a href="#collection" className="btn-primary group/btn mt-9">
              Discover Our Collection
              <ArrowRight size={17} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
