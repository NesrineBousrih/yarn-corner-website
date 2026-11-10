import { navLinks, siteConfig } from '@/config/site';
import { getInstagramProfileUrl, getWhatsAppUrl } from '@/utils/order';
import { InstagramIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { Logo } from './Logo';

export function Footer() {
  const instagram = getInstagramProfileUrl();
  const whatsapp = getWhatsAppUrl();

  return (
    <footer className="bg-burgundy-dark text-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light imageClassName="h-24" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Unique crochet pieces, carefully handcrafted in {siteConfig.location}.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-sans text-xs font-medium tracking-[0.25em] text-blush uppercase">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-cream/80 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-xs font-medium tracking-[0.25em] text-blush uppercase">Follow &amp; order</h2>
          <div className="mt-4 flex gap-3">
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-cream/25 transition hover:border-cream hover:bg-cream/10">
                <InstagramIcon size={18} />
              </a>
            )}
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full border border-cream/25 transition hover:border-cream hover:bg-cream/10">
                <WhatsAppIcon size={18} />
              </a>
            )}
          </div>
          {!instagram && !whatsapp && <p className="mt-4 text-sm text-cream/60">Our social links are coming soon.</p>}
          <p className="mt-4 text-sm text-cream/70">{siteConfig.location}</p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-cream/60 sm:flex-row">
          <p>
            Made with love <span className="text-soft-rose">♡</span> by {siteConfig.brandName}
          </p>
          <p>© {new Date().getFullYear()} {siteConfig.brandName}</p>
        </div>
      </div>
    </footer>
  );
}
