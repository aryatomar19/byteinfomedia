"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { generativeAiPageData } from "@/data/generative-ai-page";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";
import { ServiceImageCard } from "@/components/sections/ServiceImageCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
export function GenerativeAIPage() {
  const { hero, capabilities, useCases, cta, badge } = generativeAiPageData;

  return (
    <>
      <section className="mesh-hero relative overflow-hidden pt-6 pb-8 sm:pt-8 sm:pb-10">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:gap-7 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
              <Sparkles className="h-3.5 w-3.5" />
              {badge}
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.15rem]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-7 text-white/80">{hero.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">Book Consultation</Link>
              </Button>
              <Button variant="dark" size="lg" className={darkHeroSecondaryButtonClass} asChild>
                <Link href="/book-consultation/" className="!text-white hover:!text-white">
                  Request AI Assessment
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
              <img src={hero.image} alt={hero.imageAlt} className="aspect-[4/3] w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/55 via-transparent to-[#0A0F1C]/10" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mesh-light section-tech">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Enterprise Generative AI Services" flushTitle tech />
          <div className="section-tech-grid grid sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((card, index) => (
              <ServiceImageCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tech bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="AI Solutions Across Your Business" flushTitle tech />
          <div className="section-tech-grid grid sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((card, index) => (
              <ServiceImageCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="mesh-hero relative overflow-hidden section-tech">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">{cta.description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">{cta.primaryLabel}</Link>
              </Button>
              <Button variant="dark" size="lg" className={darkHeroSecondaryButtonClass} asChild>
                <Link href="/book-consultation/" className="!text-white hover:!text-white">
                  {cta.secondaryLabel}
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
