"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { homeHero } from "@/data/home";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20 xl:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-xl lg:max-w-none"
        >
          <span className="badge-orange">{homeHero.badge}</span>
          <h1 className="mt-6 font-[family-name:var(--font-inter)] text-[2rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0A0F1C] sm:text-5xl lg:text-[3.25rem]">
            {homeHero.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#5f6f86]">{homeHero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href={homeHero.secondaryCta.href}>
                {homeHero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {homeHero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-semibold text-[#0A0F1C]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B2C]/12">
                  <Check className="h-3 w-3 text-[#FF6B2C]" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative lg:pl-4"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#FF6B2C]/15 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#0A0F1C]/8 shadow-[0_32px_80px_rgba(10,15,28,0.12)]">
            <img
              src={homeHero.image}
              alt="Enterprise cloud and digital infrastructure"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/25 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
