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
      style={{ height: "min(572px, 72vh)", minHeight: "475px", maxHeight: "590px" }}
      aria-label="Homepage hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Background slides — image focus on the right */}
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
                className="h-full min-h-full w-full min-w-full object-cover object-[70%_center] sm:object-[75%_center] lg:object-right"
              />
            </div>
            {/* Smooth left-to-right navy gradient — integrated banner, clear right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/92 from-0% via-[#0B1220]/72 via-[38%] to-transparent to-[58%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/40 via-transparent to-[#0B1220]/15" />
          </div>
        ))}
      </div>

      {/* Left content zone — no floating card */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-start px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl lg:w-[42%] lg:max-w-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="py-1"
            >
              <span className="inline-flex items-center rounded-full border border-[#FF6B1A]/80 bg-[#FF6B1A]/10 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#FF6B1A] sm:px-5 sm:text-xs sm:tracking-[0.2em]">
                {slide.eyebrow}
              </span>

              <h1 className="mt-4 font-[family-name:var(--font-inter)] text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.25rem]">
                {slide.title}
              </h1>

              <p className="mt-3 text-base leading-7 text-white/88 sm:leading-8">
                {slide.description}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="min-h-[48px] bg-[#FF6B1A] shadow-[0_12px_40px_rgba(255,107,26,0.35)] hover:bg-[#ff7a2e]"
                  asChild
                >
                  <Link href="/book-consultation/">Book Consultation</Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="min-h-[48px] border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/18"
                  asChild
                >
                  <Link href={slide.learnMoreHref}>
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {slide.showCloudPartners && (
                <div className="mt-6 border-t border-white/15 pt-5">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/55">
                    Trusted cloud platforms
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 sm:gap-5">
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

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0B1220]/70 text-white shadow-lg backdrop-blur-md transition hover:border-[#FF6B1A]/50 hover:bg-[#0B1220]/90 sm:left-6"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0B1220]/70 text-white shadow-lg backdrop-blur-md transition hover:border-[#FF6B1A]/50 hover:bg-[#0B1220]/90 sm:right-6"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-5"
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
              index === activeIndex ? "w-9 bg-[#FF6B1A]" : "w-2.5 bg-white/35 hover:bg-white/55",
            )}
          />
        ))}
      </div>
    </section>
  );
}
