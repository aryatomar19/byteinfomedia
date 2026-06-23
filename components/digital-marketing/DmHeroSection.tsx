"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { MarketingHero3D } from "@/components/MarketingHero3D";
import { DmHeroStats } from "@/components/digital-marketing/DmHeroStats";
import { Button } from "@/components/ui/button";

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
      className="dm-hero dm-hero--clean dm-hero--light relative overflow-hidden bg-white"
      aria-labelledby="dm-hero-heading"
    >
      <div className="dm-container relative">
        <div className="grid items-center gap-10 py-12 sm:py-14 md:gap-12 lg:grid-cols-[45%_55%] lg:gap-14 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[600px]"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ff6b35]">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.badge}
            </span>

            <h1
              id="dm-hero-heading"
              className="mt-5 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0A0F1C] sm:text-5xl lg:text-[3.25rem]"
            >
              {hero.title}
            </h1>

            <p className="mt-5 text-base leading-7 text-[#0A0F1C]/65 sm:text-lg sm:leading-8">{hero.description}</p>

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
                variant="outline"
                asChild
                className="rounded-full border-[#0A0F1C]/12 px-8 font-bold text-[#0A0F1C] transition-colors hover:border-[#ff6b35]/40 hover:bg-[#ff6b35]/5"
              >
                <Link href="#dm-services">{hero.secondaryCta}</Link>
              </Button>
            </div>

            <DmHeroStats stats={hero.stats} variant="light" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="marketing-hero-3d-wrap relative w-full"
          >
            <MarketingHero3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
