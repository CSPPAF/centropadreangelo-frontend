'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/lar/lar.jpg",
  "/lar/lar1.jpg",
  "/lar/lar2.jpg",
  "/lar/lar3.jpg",
  "/lar/lar4.jpg",
  "/lar/lar5.jpg",
  "/lar/lar6.jpg",
  "/lar/lar7.jpg",
  "/lar/lar8.jpg",
  "/lar/lar9.jpg",
  "/lar/lar10.jpg",
  "/lar/lar11.jpg",
  "/lar/lar12.jpg",
  "/lar/lar13.jpg",
  "/lar/lar14.jpg",
  "/lar/lar15.jpg",
  "/lar/lar16.jpg",
  "/lar/lar17.jpg",
  "/lar/lar18.jpg",
  "/lar/lar19.jpg",
  "/lar/lar20.jpg",
  "/lar/lar21.jpg",
  "/lar/lar22.jpg",
  "/lar/lar23.jpg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // autoplay opcional
  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
      
      <div className="relative aspect-[3/2] bg-gray-200 overflow-hidden">
        {/* Imagem fixa sem efeitos */}
        <img
          src={images[index]}
          alt={`Imagem ${index + 1}`}
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
