"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isChanging, setIsChanging] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchMoved = useRef(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [images.length]);

  const changeSlide = (nextIndex: number) => {
    if (isChanging || nextIndex === current) return;

    setIsChanging(true);

    window.setTimeout(() => {
      setCurrent(nextIndex);
      setIsChanging(false);
    }, 180);
  };

  const next = () => {
    if (images.length <= 1) return;

    changeSlide((current + 1) % images.length);
  };

  const prev = () => {
    if (images.length <= 1) return;

    changeSlide(
      current === 0 ? images.length - 1 : current - 1
    );
  };

  /* --------------------------------
     Touch / swipe navigation
  -------------------------------- */

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.clientX;
    touchStartY.current = event.clientY;
    touchMoved.current = false;
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (touchStartX.current === null) return;

    const distanceX = Math.abs(
      event.clientX - touchStartX.current
    );

    const distanceY = Math.abs(
      event.clientY - (touchStartY.current ?? event.clientY)
    );

    /*
      Only treat the gesture as a swipe when horizontal
      movement is clearly greater than vertical movement.
      This prevents normal page scrolling from changing slides.
    */
    if (distanceX > 12 && distanceX > distanceY) {
      touchMoved.current = true;
    }
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (
      touchStartX.current === null ||
      !touchMoved.current
    ) {
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }

    const distanceX =
      event.clientX - touchStartX.current;

    const swipeThreshold = 45;

    if (Math.abs(distanceX) >= swipeThreshold) {
      if (distanceX < 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchMoved.current = false;
  };

  const handlePointerCancel = () => {
    touchStartX.current = null;
    touchStartY.current = null;
    touchMoved.current = false;
  };

  if (!images.length) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.7rem] bg-[var(--color-surface)]">
        <div className="absolute inset-0 grid place-items-center">
          <p className="text-sm text-[var(--color-muted)]">
            Campaign image coming soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative aspect-[16/10] md:aspect-auto md:h-full w-full touch-pan-y select-none overflow-hidden rounded-[1.7rem] bg-black shadow-[0_22px_60px_rgba(4,63,49,0.14)]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      {/* Images */}
      {images.map((src, index) => {
        const active = index === current;

        return (
          <div
            key={src}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ease-out ${
              active
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`${altPrefix} image ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 55vw, 100vw"
              draggable={false}
              className={`pointer-events-none object-cover transition-transform ease-out ${
                active
                  ? "scale-[1.08] duration-[7000ms]"
                  : "scale-100 duration-700"
              }`}
            />

            {/* Main cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5" />

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.18)_100%)]" />
          </div>
        );
      })}

      {/* Top shine */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-white/10 to-transparent" />

      {/* Desktop arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:text-[var(--color-brand-strong)] md:grid"
          >
            <ChevronLeft size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:text-[var(--color-brand-strong)] md:grid"
          >
            <ChevronRight size={20} strokeWidth={1.8} />
          </button>
        </>
      )}

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/45 to-transparent" />

      {/* Indicators */}
      {images.length > 1 && (
        <div
          className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 backdrop-blur-md"
          onPointerDown={(event) => event.stopPropagation()}
        >
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => changeSlide(index)}
              aria-label={`Go to image ${index + 1}`}
              aria-current={current === index}
              className="flex h-2.5 items-center"
            >
              <span
                className={`block rounded-full transition-all duration-500 ${
                  current === index
                    ? "h-1.5 w-7 bg-[#F4D98A] shadow-[0_0_10px_rgba(244,217,138,0.55)]"
                    : "h-1.5 w-1.5 bg-white/55 hover:bg-white"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="pointer-events-none absolute right-4 top-4 z-30 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-white/90 backdrop-blur-md">
          {String(current + 1).padStart(2, "0")}
          <span className="mx-1 text-white/40">/</span>
          {String(images.length).padStart(2, "0")}
        </div>
      )}
    </div>
  );
}