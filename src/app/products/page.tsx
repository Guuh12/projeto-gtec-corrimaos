"use client";

import { useState } from 'react';
import Image from 'next/image';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const products = [
  {
    id: 1,
    title: 'Corrimão de Ferro',
    description: 'Elegância e segurança para seu ambiente.',
    imageUrl: '/images/Foto30.jpg',
  },
  {
    id: 2,
    title: 'Corrimão Aluminio com Vidro',
    description: 'Design inovador com máxima proteção.',
    imageUrl: '/images/Foto25.jpg',
  },
  {
    id: 3,
    title: 'Corrimão Ferro Pintado',
    description: 'Conformidade com as normas de acessibilidade.',
    imageUrl: '/images/Foto26.jpg',
  },
  {
    id: 4,
    title: 'Corrimão de Vidro',
    description: 'Tudo que você precisa para uma instalação perfeita.',
    imageUrl: '/images/Foto27.jpg',
  },
  {
    id: 5,
    title: 'Corrimão de Inox',
    description: 'Tudo que você precisa para uma instalação perfeita.',
    imageUrl: '/images/Foto28.jpg',
  },
  {
    id: 6,
    title: 'Corrimão e guarda corpo ferro trabalhado',
    description: 'Tudo que você precisa para uma instalação perfeita.',
    imageUrl: '/images/Foto29.jpg',
  },
  {
    id: 7,
    title: 'Guarda Corpo de Aluminio',
    description: 'Tudo que você precisa para uma instalação perfeita.',
    imageUrl: '/images/Foto31.jpg',
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
