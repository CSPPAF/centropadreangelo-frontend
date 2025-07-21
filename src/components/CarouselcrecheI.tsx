'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-[3/2] bg-gray-200">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Imagem ${index + 1}`}
            className="object-cover w-full h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

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