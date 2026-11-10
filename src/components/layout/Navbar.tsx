import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/config/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { getInstagramProfileUrl } from '@/utils/order';
import { InstagramIcon } from '@/components/ui/BrandIcons';
import { Logo } from './Logo';

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const instagram = getInstagramProfileUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled || open ? 'border-blush bg-cream/90 shadow-[0_6px_24px_-18px_rgb(118_47_70/0.35)] backdrop-blur-md' : 'border-transparent bg-cream/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="shrink-0" onClick={() => setOpen(false)} aria-label="Yarn Corner by Nesslem – Home">
          <Logo imageClassName="h-14 shadow-soft" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-[15px] transition-colors duration-200 hover:text-burgundy ${
                  active === link.id ? 'text-burgundy' : 'text-ink/75'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-center bg-burgundy transition-transform duration-300 ${
                    active === link.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
          {instagram && (
            <li className="ml-2">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="grid size-10 place-items-center rounded-full border border-burgundy/20 text-burgundy transition hover:border-burgundy hover:bg-white"
              >
                <InstagramIcon size={18} />
              </a>
            </li>
          )}
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="grid size-10 place-items-center rounded-full text-burgundy">
              <InstagramIcon size={20} />
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full text-burgundy transition hover:bg-petal"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!open} className="border-t border-blush bg-cream md:hidden">
        <ul className="container-page flex flex-col py-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3 py-3.5 font-serif text-xl transition hover:bg-petal ${
                  active === link.id ? 'text-burgundy' : 'text-ink/80'
                }`}
              >
                {link.label}
                {active === link.id && <span aria-hidden="true" className="size-1.5 rounded-full bg-burgundy" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
