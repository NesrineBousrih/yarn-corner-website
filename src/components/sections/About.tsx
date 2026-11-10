import { Heart, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

const values = [
  { icon: Heart, title: 'Made with love', text: 'Crafted with passion and care for every detail.' },
  { icon: Sparkles, title: 'Unique pieces', text: 'Something special for your everyday life.' },
  { icon: MapPin, title: `Handmade in ${siteConfig.location}`, text: 'Created by hand, one stitch at a time.' },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-petal py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 -right-40 size-[28rem] -translate-y-1/2 rounded-full bg-blush/80 blur-3xl" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Signature card */}
        <div className="relative isolate mx-auto w-full max-w-md">
          <div className="rounded-[2.5rem] border border-white bg-cream/90 p-10 text-center shadow-lift sm:p-14">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-petal text-burgundy">
              <Heart size={24} strokeWidth={1.5} />
            </span>
            <p className="mt-8 font-serif text-3xl leading-snug font-medium text-burgundy italic sm:text-[2.1rem]">
              “Handmade in {siteConfig.location}, made with love.”
            </p>
            <span aria-hidden="true" className="mx-auto mt-8 block h-px w-12 bg-soft-rose" />
            <p className="mt-5 text-xs tracking-[0.3em] text-muted uppercase">{siteConfig.brandName}</p>
          </div>
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 -z-10 size-32 rounded-[2rem] bg-baby/60" />
        </div>

        <div>
          <SectionHeading eyebrow="About Us" title="A little corner of handmade charm" align="left" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
            <p>
              {siteConfig.brandName} is a small handmade crochet project built with creativity, passion, and love for
              handmade details.
            </p>
            <p>Every piece is carefully crafted to bring something unique and special to your everyday life.</p>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-2xl bg-white/70 p-5 transition duration-300 hover:bg-white">
                <Icon size={20} strokeWidth={1.6} className="text-burgundy" />
                <h3 className="mt-3 font-sans text-sm font-medium text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
