"use client";

import Link from "next/link";
import { Check, Sparkles, Brain, DollarSign, Gauge, HeartHandshake } from "lucide-react";
import { generativeAiPageData } from "@/data/generative-ai-page";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ServiceImageCard } from "@/components/sections/ServiceImageCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCtaBand } from "@/components/sections/ServiceCtaBand";
import type { LucideIcon } from "lucide-react";

const benefitIcons: Record<string, LucideIcon> = {
  "Increase Productivity": Gauge,
  "Reduce Operational Costs": DollarSign,
  "Faster Decision Making": Brain,
  "Enhanced Customer Experience": HeartHandshake,
};

export function GenerativeAIPage() {
  const { hero, capabilities, whyGenerativeAi, useCases, cta, badge } = generativeAiPageData;

  return (
    <>
      <section className="mesh-hero relative overflow-hidden pt-10 pb-12 sm:pt-12 sm:pb-14">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
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
              <Button
                variant="secondary"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/book-consultation/">Request AI Assessment</Link>
              </Button>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5">
              {hero.featureTags.map((tag) => (
                <li key={tag} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B2C] text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
              <img src={hero.image} alt={hero.imageAlt} className="aspect-[4/3] w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/55 via-transparent to-[#0A0F1C]/10" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mesh-light section-enterprise section-after-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="AI Capabilities" title="Enterprise Generative AI Services" />
          <div className="section-cards grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((card, index) => (
              <ServiceImageCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-enterprise bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Business Impact" title="Why Generative AI" />
          <div className="section-cards grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyGenerativeAi.map((item, index) => {
              const Icon = benefitIcons[item.title] ?? Brain;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="enterprise-card h-full rounded-2xl p-6 transition hover:-translate-y-1">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2C]/12 text-[#FF6B2C] ring-1 ring-[#FF6B2C]/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-extrabold text-[#0A0F1C]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#334155]">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mesh-light section-enterprise section-enterprise-tight-bottom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Use Cases" title="AI Solutions Across Your Business" />
          <div className="section-cards grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((card, index) => (
              <ServiceImageCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ServiceCtaBand title={cta.title} />
    </>
  );
}
