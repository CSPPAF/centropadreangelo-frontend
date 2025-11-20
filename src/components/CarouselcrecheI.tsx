'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/crecheI/creche.jpg",
  "/crecheI/crecheI.jpg",
  "/crecheI/crecheI1.jpg",
  "/crecheI/crecheI2.jpg",
  "/crecheI/crecheI3.jpg",
];

export default function CarouselcrecheI() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-[3/2] bg-gray-200 relative">

        {/* Mostra a imagem diretamente, sem efeitos */}
        <img
          src={images[index]}
          className="object-cover w-full h-full absolute inset-0"
        />

      </div>

      {/* Botões */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
