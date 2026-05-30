"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, Shield } from "lucide-react";
import { homeHero } from "@/data/home";
import { Button } from "@/components/ui/button";
import { HeroCloudScene } from "@/components/visuals/HeroCloudScene";

export function HomeHero() {
  return (
    <section className="mesh-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#3884FF]/15 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#FF6B2C]/12 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-20 xl:py-24">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF9900]/40 bg-[#FF9900]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#ffb347]">
              <Award className="h-3.5 w-3.5" />
              AWS Partner-Level Consulting
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
              <Shield className="h-3 w-3" />
              Security-First
            </span>
          </div>

          <h1 className="mt-8 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-gradient sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            {homeHero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{homeHero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#assessment">{homeHero.primaryCta.label}</Link>
            </Button>
            <Button
              size="lg"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <Link href="#assessment">
                {homeHero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {homeHero.trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 backdrop-blur-sm"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-[#FF6B2C]" />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12 }}
        >
          <HeroCloudScene />
        </motion.div>
      </div>
    </section>
  );
}
