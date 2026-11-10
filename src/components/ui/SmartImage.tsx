import { useState } from 'react';
import { Camera } from 'lucide-react';
import { resolveImage } from '@/utils/images';

interface SmartImageProps {
  /** Expected path in /public, e.g. "/images/products/blue-bag/product.jpg". */
  src?: string;
  alt: string;
  className?: string;
  /** Load immediately (use for the hero image above the fold). */
  priority?: boolean;
  placeholderLabel?: string;
  /** CSS object-position, e.g. "center 40%". Defaults to center. */
  position?: string;
}

/**
 * Shows the real photo when it exists in /public, otherwise an elegant placeholder.
 * In development the placeholder also shows where to put the photo.
 */
export function SmartImage({ src, alt, className = '', priority, placeholderLabel = 'Photo coming soon', position }: SmartImageProps) {
  const resolved = resolveImage(src);
  const [failed, setFailed] = useState<string | null>(null);

  if (resolved && failed !== resolved) {
    return (
      <img
        key={resolved}
        src={resolved}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchpriority: 'high' } : {})}
        onError={() => setFailed(resolved)}
        style={position ? { objectPosition: position } : undefined}
        className={`h-full w-full animate-fade-in object-cover object-center ${className}`}
      />
    );
  }

  return <ImagePlaceholder label={placeholderLabel} hint={src} alt={alt} />;
}

function ImagePlaceholder({ label, hint, alt }: { label: string; hint?: string; alt: string }) {
  return (
    <div
      role="img"
      aria-label={`${alt} (photo coming soon)`}
      className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden bg-linear-to-br from-petal via-blush/70 to-petal p-6 text-center"
    >
      {/* soft knit-like dotted texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(233 169 190 / 0.45) 1px, transparent 1.6px)',
          backgroundSize: '14px 14px',
        }}
      />
      <span className="relative grid size-14 place-items-center rounded-full border border-white/80 bg-white/70 text-burgundy/70 shadow-soft">
        <Camera size={22} strokeWidth={1.5} />
      </span>
      <span className="relative font-serif text-lg text-burgundy/80 italic">{label}</span>
      {import.meta.env.DEV && hint && (
        <code className="relative max-w-full rounded-md bg-white/70 px-2 py-1 text-[10px] break-all text-muted">
          public{hint}
        </code>
      )}
    </div>
  );
}
