import { Hero } from '@/components/sections/Hero';
import { FavoritePiece } from '@/components/sections/FavoritePiece';
import { Collection } from '@/components/sections/Collection';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <FavoritePiece />
      <Collection />
      <About />
      <Contact />
    </>
  );
}
