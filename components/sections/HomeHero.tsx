"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroCarouselSlides, type HeroCarouselCard } from "@/data/home-hero-carousel";
import { cn } from "@/lib/utils";

const AUTO_SLIDE_MS = 5000;

function HeroServiceTile({ card }: { card: HeroCarouselCard }) {
  return (
    <Link
      href={card.href}
      className={cn(
        "group relative flex min-h-[148px] flex-col overflow-hidden rounded-2xl border shadow-[0_16px_48px_rgba(10,15,28,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(10,15,28,0.45)] sm:min-h-[168px]",
        card.accent === "orange"
          ? "border-[#FF6B2C]/35 bg-gradient-to-br from-[#FF6B2C] via-[#e85a24] to-[#c84a17]"
          : "border-[#2d4a7a]/50 bg-gradient-to-br from-[#1e3a6e] via-[#152d52] to-[#0f2244]",
      )}
    >
      <div className="absolute inset-0 opacity-25 mix-blend-overlay transition duration-500 group-hover:opacity-35">
        <img src={card.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/75 via-[#0A0F1C]/25 to-transparent"
        aria-hidden
      />
      <div className="relative mt-auto p-4 sm:p-5">
        <span
          className={cn(
            "mb-2 inline-block h-1 w-10 rounded-full",
            card.accent === "orange" ? "bg-white/90" : "bg-[#FF6B2C]",
          )}
        />
        <h3 className="font-[family-name:var(--font-inter)] text-base font-extrabold leading-snug text-white sm:text-lg">
          {card.title}
        </h3>
        <span className="mt-2 inline-flex items-center text-xs font-bold uppercase tracking-wider text-white/80 transition group-hover:text-white">
          Explore
          <ChevronRight className="ml-1 h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideCount = heroCarouselSlides.length;

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex((index + slideCount) % slideCount);
    },
    [slideCount],
  );

  const goNext = useCallback(() => goToSlide(activeIndex + 1), [activeIndex, goToSlide]);
  const goPrev = useCallback(() => goToSlide(activeIndex - 1), [activeIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, AUTO_SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, slideCount]);

  const slide = heroCarouselSlides[activeIndex];

  return (
    <section
      className="relative h-[min(700px,88vh)] min-h-[600px] max-h-[700px] overflow-hidden"
      aria-label="Featured services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 bg-[#0A0F1C]" aria-hidden />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255,107,44,0.12), transparent), radial-gradient(ellipse 70% 50% at 85% 40%, rgba(45,90,150,0.2), transparent)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#FF6B2C] sm:mb-5">
          {slide.label}
        </p>

        <div
          className="relative mx-auto w-full max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label={slide.label}
        >
          <div
            key={slide.id}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {slide.cards.map((card) => (
              <HeroServiceTile key={card.title} card={card} />
            ))}
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute -left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0A0F1C]/80 text-white shadow-lg backdrop-blur-sm transition hover:border-[#FF6B2C]/50 hover:bg-[#0A0F1C] sm:-left-5 sm:h-11 sm:w-11"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute -right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0A0F1C]/80 text-white shadow-lg backdrop-blur-sm transition hover:border-[#FF6B2C]/50 hover:bg-[#0A0F1C] sm:-right-5 sm:h-11 sm:w-11"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8" role="tablist" aria-label="Carousel slides">
          {heroCarouselSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to ${item.label}`}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                index === activeIndex ? "w-8 bg-[#FF6B2C]" : "w-2.5 bg-white/30 hover:bg-white/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
