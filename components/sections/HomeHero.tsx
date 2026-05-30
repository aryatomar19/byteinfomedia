"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeHero } from "@/data/home";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(10,15,28,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,15,28,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-[#FF6B2C]/25 bg-[#FFF7F3] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#c84a17]">
            Enterprise AWS Consulting
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[#0A0F1C] sm:text-5xl lg:text-6xl">
            {homeHero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#52647a]">{homeHero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#assessment">{homeHero.primaryCta.label}</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="#assessment">
                {homeHero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#E8F0FF] via-[#F3EEFF] to-[#FFF4EC] blur-2xl" />
          <img
            src="/images/hero-cloud.svg"
            alt="Modern cloud infrastructure"
            className="relative w-full rounded-[2rem] border border-[#0A0F1C]/8 shadow-[0_32px_80px_rgba(10,15,28,0.1)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
