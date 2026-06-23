"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { MarketingHero3D } from "@/components/MarketingHero3D";
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
      className="dm-hero dm-hero--immersive relative h-screen min-h-[100vh] overflow-hidden"
      style={{ background: "#070b1f" }}
      aria-labelledby="dm-hero-heading"
    >
      <MarketingHero3D />

      <div className="dm-hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden />

      <div className="dm-container relative z-10 flex h-full min-h-[100vh] flex-col lg:block">
        <div className="grid flex-1 items-center py-12 sm:py-14 lg:h-full lg:min-h-[100vh] lg:grid-cols-[40%_60%] lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto max-w-[600px]"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/35 bg-[#ff6b35]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
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
                className="rounded-full bg-[#ff6b35] px-8 font-bold text-white shadow-[0_8px_28px_rgba(255,107,53,0.28)] transition-colors hover:bg-[#e85a1c]"
              >
                <Link href="/book-consultation/">{hero.primaryCta}</Link>
              </Button>
              <Button
                size="lg"
                variant="dark"
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

          <div className="min-h-[42vh] lg:min-h-0" aria-hidden />
        </div>
      </div>
    </section>
  );
}
