"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { homeHero } from "@/data/home";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[750px] items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(255,107,44,0.06),transparent)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl lg:max-w-none"
        >
          <span className="badge-orange">{homeHero.badge}</span>
          <h1 className="mt-8 font-[family-name:var(--font-inter)] text-[2rem] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#0A0F1C] sm:text-5xl lg:text-[3.35rem]">
            {homeHero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#0A0F1C]">{homeHero.description}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="shadow-[0_8px_28px_rgba(255,107,44,0.28)]" asChild>
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
              <li key={point} className="flex items-center gap-2.5 text-sm font-semibold text-[#0A0F1C]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B2C]/12 ring-1 ring-[#FF6B2C]/20">
                  <Check className="h-3 w-3 text-[#FF6B2C]" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="relative lg:pl-6"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#FF6B2C]/12 via-transparent to-[#0A0F1C]/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#0A0F1C]/8 shadow-[0_40px_100px_rgba(10,15,28,0.14)]">
            <img
              src={homeHero.image}
              alt="Enterprise cloud infrastructure and datacenter operations"
              className="aspect-[4/3] min-h-[320px] w-full object-cover transition duration-700 hover:scale-[1.02] lg:aspect-auto lg:min-h-[480px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
