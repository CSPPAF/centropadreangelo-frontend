'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/cdia/cdia.jpg",
  "/cdia/cdia1.jpg",
  "/cdia/cdia2.jpg",
  "/cdia/cdia3.jpg",
  "/cdia/cdia4.jpg",
  "/cdia/cdia5.jpg",
  "/cdia/cdia6.jpg",
  "/cdia/cdia7.jpg",
  "/cdia/cdia8.jpg",
  "/cdia/cdia9.jpg",
  "/cdia/cdia10.jpg",
  "/cdia/cdia11.jpg",
  "/cdia/cdia12.jpg",
  "/cdia/cdia13.jpg",
];

export default function Carousel1() {
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

      <div className="aspect-[3/2] bg-gray-200 relative">
        {/* Imagem fixa sem efeitos */}
        <img
          src={images[index]}
          alt={`Imagem ${index + 1}`}
          className="object-cover w-full h-full absolute inset-0"
        />
      </div>

      {/* Botão anterior */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* Botão seguinte */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
