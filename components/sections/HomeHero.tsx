"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { homeHero } from "@/data/home";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden">
      {/* Full-bleed background with slow zoom */}
      <div className="absolute inset-0 hero-ken-burns" aria-hidden>
        <img
          src={homeHero.image}
          alt=""
          className="h-full min-h-full w-full min-w-full object-cover object-center"
        />
      </div>

      {/* 50% dark overlay */}
      <div className="absolute inset-0 bg-[#0A0F1C]/50" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/75 via-[#0A0F1C]/40 to-[#0A0F1C]/25"
        aria-hidden
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[95vh] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:text-xs"
          >
            {homeHero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-[3.75rem]"
          >
            {homeHero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-4 max-w-2xl text-lg leading-7 text-white/90 sm:text-xl sm:leading-8"
          >
            {homeHero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.44 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="min-h-[52px] shadow-[0_12px_40px_rgba(255,107,44,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(255,107,44,0.5)]"
              asChild
            >
              <Link href={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="min-h-[52px] border-white/30 bg-white/10 text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20"
              asChild
            >
              <Link href={homeHero.secondaryCta.href}>
                {homeHero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.56 }}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5"
          >
            {homeHero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm font-semibold text-white">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B2C] text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
