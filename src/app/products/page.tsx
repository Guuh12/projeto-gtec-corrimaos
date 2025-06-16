"use client";

import { useState } from 'react';
import Image from 'next/image';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const products = [
  {
    id: 1,
    title: 'Corrimão de Ferro Pintado',
    description: 'Corrimão de ferro pintado, ideal para ambientes internos e externos.',
    imageUrl: '/images/corrimão-ferro-pintado1.jpeg',
  },
  {
    id: 2,
    title: 'Guarda Corpo de Alumínio com Vidro',
    description: 'Guarda corpo de alumínio com vidro, design moderno.',
    imageUrl: '/images/guarda-corpo-aluminio-vidro3.jpeg',
  },
  {
    id: 3,
    title: 'Corrimão de Aluminio Preto',
    description: 'Corrimão de Aluminio Preto, seguindo normas de acessibilidade e segurança.',
    imageUrl: '/images/corrimão-ferro-pintado3.jpeg',
  },
  {
    id: 4,
    title: 'Guarda Corpo de Vidro',
    description: 'Guarda corpo de vidro, sofisticação e proteção para escadas e varandas.',
    imageUrl: '/images/guarda-corpo-vidro1.jpeg',
  },
  {
    id: 5,
    title: 'Corrimão de Inox',
    description: 'Corrimão de inox, resistente à corrosão e fácil manutenção.',
    imageUrl: '/images/corrimão-aluminio3.jpeg',
  },
  {
    id: 6,
    title: 'Corrimão aluminio com Vidro',
    description: 'Corrimão e guarda corpo de ferro trabalhado, acabamento diferenciado para seu projeto.',
    imageUrl: '/images/corrimão-aluminio-vidro2.jpeg',
  },
  {
    id: 7,
    title: 'Corrimão de Ferro Desenhado',
    description: 'Corrimão de ferro, robustez e segurança para escadas e corredores.',
    imageUrl: '/images/corrimão-ferro2.jpeg',
  },
  {
    id: 8,
    title: 'Corrimão de Ferro Pintado',
    description: 'Corrimão de ferro pintado, para ambientes residenciais e comerciais.',
    imageUrl: '/images/corrimão-ferro-pintado2.jpeg',
  },
  {
    id: 9,
    title: 'Corrimão de Ferro Desenhado',
    description: 'Corrimão de ferro pintado, segurança e beleza para seu espaço.',
    imageUrl: '/images/corrimão-ferro-pintado4.jpeg',
  },
  {
    id: 10,
    title: 'Corrimão de Alumínio',
    description: 'Corrimão de alumínio, leveza e durabilidade para áreas internas e externas.',
    imageUrl: '/images/guarda-corpo-aluminio3.jpeg',
  },
  {
    id: 11,
    title: 'Guarda Corpo de Inox',
    description: 'Guarda corpo de inox, proteção e design moderno para seu imóvel.',
    imageUrl: '/images/guarda-corpo-aluminio1.jpeg',
  },
  {
    id: 12,
    title: 'Guarda Corpo de Inox com Vidro',
    description: 'Guarda corpo de inox com vidro, segurança e transparência.',
    imageUrl: '/images/guarda-corpo-aluminio-vidro1.jpeg',
  },
  {
    id: 13,
    title: 'Escada Caracol - Corrimão Ferro',
    description: 'Escada caracol com guarda corpo, elegante para ambientes reduzidos.',
    imageUrl: '/images/escada-caracol4.jpeg',
  },
  {
    id: 14,
    title: 'Escada Caracol - Corrimão Inox',
    description: 'Escada caracol com guarda corpo, praticidade e estilo para seu projeto.',
    imageUrl: '/images/escada-caracol1.jpeg',
  },
  {
    id: 15,
    title: 'Corrimão de Alumínio',
    description: 'Corrimão de alumínio, ideal para áreas externas, resistente e de fácil instalação.',
    imageUrl: '/images/corrimão-aluminio2.1.jpeg',
  },
];

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold">Produtos</h1>
        </section>

        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold">Produtos em Destaque</h2>
          <p className="text-muted-foreground">
          A Gtec Corrimãos conta com uma equipe altamente especializada de projetistas, montadores e ajudantes que trabalham em conjunto visando oferecer ao cliente serviços com qualidade e segurança.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="rounded-lg shadow-md overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-56 cursor-pointer"
                  onClick={() => openLightbox(product.imageUrl)}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <Image
            src={selectedImage}
            alt="Product Preview"
            width={800}
            height={600}
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
        </div>
      )}
    </>
  );
}
