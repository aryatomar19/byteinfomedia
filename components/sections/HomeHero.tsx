"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroBannerSlides, heroCloudPartners } from "@/data/home-hero-carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUTO_SLIDE_MS = 5000;

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideCount = heroBannerSlides.length;

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

  const slide = heroBannerSlides[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "min(700px, 88vh)", minHeight: "580px", maxHeight: "720px" }}
      aria-label="Homepage hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Full-width background slides */}
      <div className="absolute inset-0 w-full" aria-hidden>
        {heroBannerSlides.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 w-full transition-opacity duration-1000 ease-in-out",
              index === activeIndex ? "opacity-100" : "opacity-0",
            )}
          >
            <div
              className={cn(
                "absolute inset-0 h-full w-full",
                index === activeIndex && "hero-ken-burns",
              )}
            >
              <img
                src={item.image}
                alt=""
                className="h-full min-h-full w-full min-w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-[#0A0F1C]/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/92 via-[#0A0F1C]/65 to-[#0A0F1C]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/50 via-transparent to-[#0A0F1C]/20" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 grid-pattern opacity-[0.12]" aria-hidden />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-6 shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10"
            >
              <span className="inline-flex items-center rounded-full border border-[#FF6B2C]/45 bg-[#FF6B2C]/15 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#ffb088] sm:text-xs">
                {slide.eyebrow}
              </span>

              <h1 className="mt-5 font-[family-name:var(--font-inter)] text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                {slide.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="min-h-[52px] shadow-[0_12px_40px_rgba(255,107,44,0.4)]"
                  asChild
                >
                  <Link href="/book-consultation/">Book Consultation</Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="min-h-[52px] border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  asChild
                >
                  <Link href={slide.learnMoreHref}>
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {slide.showCloudPartners && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/50">
                    Trusted cloud platforms
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                    {heroCloudPartners.map((partner) => (
                      <img
                        key={partner.name}
                        src={partner.logo}
                        alt={partner.logoAlt}
                        className="h-7 w-auto max-w-[5.5rem] object-contain opacity-90 brightness-0 invert sm:h-8"
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0A0F1C]/70 text-white shadow-lg backdrop-blur-md transition hover:border-[#FF6B2C]/50 hover:bg-[#0A0F1C]/90 sm:left-6"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0A0F1C]/70 text-white shadow-lg backdrop-blur-md transition hover:border-[#FF6B2C]/50 hover:bg-[#0A0F1C]/90 sm:right-6"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-8"
        role="tablist"
        aria-label="Hero slides"
      >
        {heroBannerSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to slide: ${item.eyebrow}`}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              index === activeIndex ? "w-9 bg-[#FF6B2C]" : "w-2.5 bg-white/35 hover:bg-white/55",
            )}
          />
        ))}
      </div>
    </section>
  );
}
