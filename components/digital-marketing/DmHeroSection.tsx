"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SplineMarketingHero } from "@/components/SplineMarketingHero";
import { DmHeroStats } from "@/components/digital-marketing/DmHeroStats";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

type HeroContent = {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  stats: readonly {
    value: number | null;
    suffix?: string;
    display?: string;
    label: string;
  }[];
};

export function DmHeroSection({ hero }: { hero: HeroContent }) {
  return (
    <section
      className="dm-hero dm-hero--clean relative overflow-hidden"
      style={{ background: "#070b1f" }}
      aria-labelledby="dm-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,107,44,0.08),transparent_55%)]" aria-hidden />

      <div className="dm-container relative">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 sm:py-16 lg:grid-cols-[45%_55%] lg:gap-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[600px]"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6b2c]/35 bg-[#ff6b2c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.badge}
            </span>

            <h1
              id="dm-hero-heading"
              className="mt-5 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]"
            >
              {hero.title}
            </h1>

            <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{hero.description}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-[#ff6b2c] px-8 font-bold text-white shadow-[0_8px_28px_rgba(255,107,44,0.3)] transition-colors hover:bg-[#e85a1c]"
              >
                <Link href="/book-consultation/">{hero.primaryCta}</Link>
              </Button>
              <Button
                variant="dark"
                size="lg"
                className={`${darkHeroSecondaryButtonClass} transition-colors`}
                asChild
              >
                <Link href="#dm-services" className="!text-white hover:!text-white">
                  {hero.secondaryCta}
                </Link>
              </Button>
            </div>

            <DmHeroStats stats={hero.stats} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="dm-spline-hero-wrap relative w-full"
          >
            <SplineMarketingHero />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
