import Image from 'next/image';
import Link from 'next/link';

import { Header } from '@/components/header';
import { Carousel } from '@/components/carousel';
import { AboutUs } from '@/components/about-us';
import { FeaturedProducts } from '@/components/featured-products';
import { Footer } from '@/components/footer';

// Caminhos relativos à pasta /public
const images = [
  '/images/corrimão-aluminio-vidro5.jpeg',
  '/images/corrimão-aluminio6.jpeg',
  '/images/corrimão-ferro-escovado1.jpeg',
  '/images/guarda-corpo-aluminio9.jpeg',
  '/images/guarda-corpo-vidro3.jpeg',
  '/images/corrimão-aluminio2.1.jpeg',
];

export default function Home() {
  return (
    <>
      <Header />
      <Carousel images={images} />
      <AboutUs />
      <FeaturedProducts />
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/11940029084"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50"
      >
        <Image
          src="/icons/whatsapp_icon_click.png"
          alt="WhatsApp"
          width={60}
          height={60}
          className="hover:scale-105 transition-transform"
        />
      </a>
    </>
  );
}
