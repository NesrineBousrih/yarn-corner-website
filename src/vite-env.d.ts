/// <reference types="vite/client" />

declare module 'virtual:image-manifest' {
  /** Paths of every image present in public/images, e.g. "/images/hero/hero.jpg". */
  const images: string[];
  export default images;
}
