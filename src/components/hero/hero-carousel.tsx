"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroCarouselProps {
  images?: string[];
  altPrefix?: string;
}

export function HeroCarousel({
  images = [],
  altPrefix = "SMILE NGO",
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const next = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  if (!images.length) {
    return (
      <div className="h-[320px] md:h-[620px] rounded-none md:rounded-3xl bg-gray-100" />
    );
  }

  return (
  <div className="relative w-full aspect-[16/11] overflow-hidden rounded-[1.35rem]">
    {images.map((image, index) => (
      <div
        key={image}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === current ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={image}
          alt={`${altPrefix} ${index + 1}`}
          fill
          priority={index === 0}
          sizes="(min-width: 768px) 55vw, 100vw"
          className={`object-cover transition-transform duration-[6000ms] ${
            index === current ? "scale-109" : "scale-100"
          }`}
        />
      </div>
    ))}

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

    {/* Desktop arrows */}
    <button
      type="button"
      onClick={prev}
      aria-label="Previous image"
      className="absolute left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/80 backdrop-blur transition hover:bg-white md:grid"
    >
      <ChevronLeft size={22} />
    </button>

    <button
      type="button"
      onClick={next}
      aria-label="Next image"
      className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/80 backdrop-blur transition hover:bg-white md:grid"
    >
      <ChevronRight size={22} />
    </button>

    {/* Dots */}
    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2.5">
      {images.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setCurrent(index)}
          aria-label={`Go to image ${index + 1}`}
          className={`rounded-full transition-all duration-300 ${
            current === index
              ? "h-2 w-8 bg-white"
              : "h-2 w-2 bg-white/50"
          }`}
        />
      ))}
    </div>
  </div>
);
}