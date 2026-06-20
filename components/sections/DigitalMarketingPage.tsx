"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { digitalMarketingPage } from "@/data/digital-marketing";
import { DmHeroStats } from "@/components/digital-marketing/DmHeroStats";
import { DmHeroVisual } from "@/components/digital-marketing/DmHeroVisual";
import { DmProcessTimeline } from "@/components/digital-marketing/DmProcessTimeline";
import { DmServiceGrid } from "@/components/digital-marketing/DmServiceGrid";
import { DmWhoWeAre } from "@/components/digital-marketing/DmWhoWeAre";
import { DmWhySection } from "@/components/digital-marketing/DmWhySection";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

export function DigitalMarketingPage() {
  const { hero, whoWeAre, services, process, whyByte } = digitalMarketingPage;

  return (
    <div className="dm-landing">
      {/* Section 1 — Hero */}
      <section className="relative min-h-[85vh] overflow-hidden mesh-hero">
        <div className="absolute inset-0 grid-pattern-light opacity-25" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,107,44,0.14),transparent_55%)]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#121a2e] to-[#0a0f1c]" aria-hidden />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[11fr_9fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
                <Sparkles className="h-3.5 w-3.5" />
                {hero.badge}
              </span>
              <h1 className="mt-5 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.1rem]">
                {hero.title}
              </h1>
              <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">{hero.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/book-consultation/">{hero.primaryCta}</Link>
                </Button>
                <Button variant="dark" size="lg" className={darkHeroSecondaryButtonClass} asChild>
                  <Link href="#dm-services" className="!text-white hover:!text-white">
                    {hero.secondaryCta}
                  </Link>
                </Button>
              </div>
              <DmHeroStats stats={hero.stats} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <DmHeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Who We Are */}
      <DmWhoWeAre {...whoWeAre} />

      {/* Section 3 — Services */}
      <DmServiceGrid title={services.title} items={services.items} />

      {/* Section 4 — Process */}
      <DmProcessTimeline title={process.title} steps={process.steps} />

      {/* Section 5 — Why Byte Infomedia */}
      <DmWhySection {...whyByte} />
    </div>
  );
}
