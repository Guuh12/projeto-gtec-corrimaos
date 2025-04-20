"use client";

import {useState, useEffect} from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {ArrowLeft, ArrowRight} from 'lucide-react';

interface CarouselProps {
  images: string[];
}

export function Carousel({images}: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically advance the carousel every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    // Clean up the interval when the component unmounts or when the image array changes
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-500 ${
            index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{transform: `translateX(${(index - currentImageIndex) * 100}%)`}}
        >
          <Image
            src={image}
            alt={`Carousel Image ${index + 1}`}
            width={1200}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
        <Button variant="outline" size="icon" onClick={prevImage}>
          <ArrowLeft className="h-5 w-5"/>
          <span className="sr-only">Previous</span>
        </Button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
        <Button variant="outline" size="icon" onClick={nextImage}>
          <ArrowRight className="h-5 w-5"/>
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}
