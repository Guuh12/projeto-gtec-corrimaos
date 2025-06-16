'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function FeaturedProducts() {
  const [slider, setSlider] = useState<Slider | null>(null);

  const products = [
    {
      id: 1,
      name: 'Corrimão de Inox',
      image: '/images/corrimão-aluminio3.jpeg',
      description: 'Solução leve, resistente e moderna para escadas. Ideal para ambientes internos e externos.',
    },
    {
      id: 2,
      name: 'Guarda Corpo de Vidro',
      image: '/images/guarda-corpo-aluminio-vidro3.jpeg',
      description: 'Visual limpo e seguro para sacadas e escadas. Perfeito para quem busca sofisticação.',
    },
    {
      id: 3,
      name: 'Corrimão de Inox com Vidro',
      image: '/images/corrimão-aluminio-vidro1.jpeg',
      description: 'Combinação perfeita entre estilo e proteção. Para escadas e varandas.',
    },
    {
      id: 4,
      name: 'Corrimão de Ferro Desenhado',
      image: '/images/corrimão-ferro-pintado4.jpeg',
      description: 'Durabilidade com acabamento refinado. Para sua casa ou empresa.',
    },
    {
      id: 5,
      name: 'Pega Mão de Inox',
      image: '/images/pega-mão-aluminio1.jpeg',
      description: 'Segurança e elegância em uma única peça. Ideal para escadas e corredores.',
    },
  ];

  const settings = {
    slidesToShow: 3,  // Mostra 3 slides por vez
    slidesToScroll: 1,  // Desloca 1 slide por vez
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Exibe 2 slides a partir de 768px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  // Exibe 1 slide em telas pequenas (mobile)
        },
      },
    ],
  };

  return (
    <section id="products" className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Produtos em Destaque</h2>

        <div className="relative">
          {/* Botões de navegação */}
          <button
            onClick={() => slider?.slickPrev()}
            className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-56"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
            ))}
          </Slider>

          <button
            onClick={() => slider?.slickNext()}
            className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
