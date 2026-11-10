import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { resolveImage } from '@/utils/images';
import { SmartImage } from '@/components/ui/SmartImage';

export function Hero() {
  const logo = resolveImage(siteConfig.logo);

  return (
    <section id="home" className="relative overflow-hidden bg-linear-to-b from-petal via-petal/60 to-cream">
      {/* soft decorative glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-blush/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 size-80 rounded-full bg-baby/30 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-20 lg:pb-28">
        <div className="animate-fade-up text-center lg:text-left">
          {logo && (
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              width={600}
              height={600}
              className="mx-auto mb-7 aspect-square h-28 w-auto rounded-full object-contain shadow-soft sm:h-32 lg:mx-0"
            />
          )}
          <p className="eyebrow">{siteConfig.brandName}</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.05] font-semibold text-burgundy sm:text-6xl lg:text-[4.25rem]">
            Handmade with love, <em className="font-medium text-ink/85">made to be yours.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted lg:mx-0">
            Unique crochet pieces, carefully handcrafted to add a little charm to your everyday life.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#collection" className="btn-primary group/btn">
              Discover Our Collection
              <ArrowRight size={17} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
            <a href="#about" className="text-sm text-burgundy underline decoration-soft-rose underline-offset-4 transition hover:decoration-burgundy">
              Our story
            </a>
          </div>
          <p className="mt-10 text-xs tracking-[0.22em] text-muted uppercase">Handmade in {siteConfig.location}</p>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] animate-fade-up [animation-delay:150ms]">
          <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2.5rem] border border-soft-rose/70 sm:translate-x-5 sm:translate-y-5" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] border-4 border-white bg-blush shadow-lift">
            <SmartImage src={siteConfig.heroImage} alt={`${siteConfig.brandName} handmade crochet piece`} priority placeholderLabel="Your favorite piece here" />
          </div>
        </div>
      </div>
    </section>
  );
}
