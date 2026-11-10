import manifest from 'virtual:image-manifest';

const available = new Set(manifest);
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

/**
 * Returns the real path of an image if it exists in /public, otherwise undefined.
 * "/images/hero/hero.jpg" also matches hero.png, hero.webp, etc.
 */
export function resolveImage(path?: string): string | undefined {
  if (!path) return undefined;
  if (available.has(path)) return path;
  const base = path.replace(/\.[a-z0-9]+$/i, '');
  for (const ext of EXTENSIONS) {
    const candidate = base + ext;
    if (available.has(candidate)) return candidate;
  }
  return undefined;
}
