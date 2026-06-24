"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DmHeroStats } from "@/components/digital-marketing/DmHeroStats";
import { MarketingHero3D } from "@/components/MarketingHero3D";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

type HeroStat = {
  value: number | null;
  suffix?: string;
  display?: string;
  label: string;
};

type HeroContent = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  stats: readonly HeroStat[];
};

export function DmHeroSection({ hero }: { hero: HeroContent }) {
  return (
    <section
      className="dm-hero dm-hero--particles hero relative min-h-[100vh] w-full overflow-hidden bg-black"
      aria-labelledby="dm-hero-heading"
    >
      <MarketingHero3D />

      <div className="dm-hero-spline__overlay pointer-events-none absolute inset-0 z-[2]" aria-hidden />

      <div className="dm-container pointer-events-none relative z-10 flex min-h-[100vh] items-center py-12 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="dm-hero-content hero-content pointer-events-auto max-w-[650px]"
        >
          <h1
            id="dm-hero-heading"
            className="font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.title}
          </h1>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{hero.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 24 }}>
              <Button
                size="lg"
                asChild
                className="rounded-full bg-[#ff6b35] px-8 font-bold text-white shadow-[0_8px_32px_rgba(255,107,53,0.35)] transition-colors hover:bg-[#e85a1c]"
              >
                <Link href="/book-consultation/">
                  {hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 24 }}>
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
            </motion.div>
          </div>

          <DmHeroStats stats={hero.stats} variant="glass" />
        </motion.div>
      </div>
    </section>
  );
}
