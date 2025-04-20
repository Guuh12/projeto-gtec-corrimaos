import Image from 'next/image';
import Link from 'next/link';

import { Header } from '@/components/header';
import { Carousel } from '@/components/carousel';
import { AboutUs } from '@/components/about-us';
import { FeaturedProducts } from '@/components/featured-products';
import { Footer } from '@/components/footer';

// Caminhos relativos à pasta /public
const images = [
  '/images/foto4.jpg',
  '/images/foto5.jpg',
  '/images/foto6.jpg',
  '/images/foto7.jpg',
  '/images/foto8.jpg',
  '/images/foto9.jpg',
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
