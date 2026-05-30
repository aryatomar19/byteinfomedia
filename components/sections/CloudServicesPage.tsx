"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cloudServicesPage } from "@/data/cloud-services";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ServiceImageCard } from "@/components/sections/ServiceImageCard";

export function CloudServicesPage() {
  const { hero, capabilities, additionalServices, badge } = cloudServicesPage;

  return (
    <>
      <section className="mesh-hero relative overflow-hidden pt-8 pb-14 sm:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
              <Sparkles className="h-3.5 w-3.5" />
              {badge}
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">Request Free Assessment</Link>
              </Button>
              <Button variant="secondary" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20" asChild>
                <Link href="/book-consultation/">Book Consultation</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/50 via-transparent to-[#0A0F1C]/10" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Capabilities</p>
            <h2 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
              Cloud Foundations That Scale
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {capabilities.map((card, index) => (
              <ServiceImageCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-enterprise bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Extended Services</p>
            <h2 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
              Additional Cloud Services
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((card, index) => (
              <ServiceImageCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
