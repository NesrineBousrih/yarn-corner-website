import { siteConfig } from '@/config/site';
import { resolveImage } from '@/utils/images';

interface LogoProps {
  className?: string;
  /** Tailwind height class for the logo image, e.g. "h-12". */
  imageClassName?: string;
  light?: boolean;
}

/**
 * Shows the official logo from public/images/logo/logo.png.
 * Until it is added, a simple text version of the brand name is displayed.
 */
export function Logo({ className = '', imageClassName = 'h-12', light = false }: LogoProps) {
  const logo = resolveImage(siteConfig.logo);

  if (logo) {
    // The badge is round on a square background: crop to a circle so no square corners show.
    return (
      <img
        src={logo}
        alt={siteConfig.brandName}
        width={600}
        height={600}
        className={`aspect-square w-auto rounded-full object-contain ${imageClassName} ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex flex-col leading-none ${className}`} aria-label={siteConfig.brandName}>
      <span className={`font-serif text-2xl font-semibold ${light ? 'text-cream' : 'text-burgundy'}`}>Yarn Corner</span>
      <span className={`mt-1 text-[10px] tracking-[0.32em] uppercase ${light ? 'text-blush' : 'text-muted'}`}>by Nesslem</span>
    </span>
  );
}
