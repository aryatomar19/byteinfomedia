"use client";

import Link from "next/link";
import { Activity, Cloud, Shield, Sparkles, Wrench, type LucideIcon } from "lucide-react";
import { techSolutionsPage } from "@/data/tech-solutions";
import { BrandingSectionHeading } from "@/components/sections/BrandingSectionHeading";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { ServiceImageCard } from "@/components/sections/ServiceImageCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

const benefitIcons: LucideIcon[] = [Cloud, Activity, Shield, Wrench];

export function TechSolutionsPage() {
  const { hero, overview, benefits, services, cta } = techSolutionsPage;

  return (
    <>
      <section className="tech-solutions-hero relative min-h-[72vh] overflow-hidden bg-[#07162d] lg:min-h-[78vh]">
        <div className="tech-solutions-hero__art tech-solutions-hero__art--desktop" aria-hidden>
          <img src={hero.image} alt="" />
          <div className="tech-solutions-hero__art-overlay" />
          <div className="tech-solutions-hero__art-fade" />
        </div>

        <div className="absolute inset-0 bg-[#07162d]" aria-hidden />
        <div className="absolute inset-0 tech-solutions-hero__overlay" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden />

        <div className="relative z-[2] mx-auto grid min-h-[72vh] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[78vh] lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:gap-12 lg:px-8 lg:py-16">
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
                <Sparkles className="h-3.5 w-3.5" />
                {hero.badge}
              </span>
              <h1 className="mt-5 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.15rem]">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">{hero.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/book-consultation/">Book Consultation</Link>
                </Button>
                <Button variant="dark" size="lg" className={darkHeroSecondaryButtonClass} asChild>
                  <Link href="#tech-services" className="!text-white hover:!text-white">
                    View Services
                  </Link>
                </Button>
              </div>
            </Reveal>

            <div className="tech-solutions-hero__art tech-solutions-hero__art--mobile" aria-hidden>
              <img src={hero.image} alt="" />
              <div className="tech-solutions-hero__art-overlay" />
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden />
        </div>
      </section>

      <section className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={overview.title} centered={false} flushTitle />
          <Reveal>
            <p className="max-w-3xl text-base leading-8 text-[#334155] sm:text-lg">{overview.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-enterprise branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{benefits.title}</BrandingSectionHeading>
          <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mt-12">
            {benefits.items.map((item, index) => {
              const Icon = benefitIcons[index] ?? Cloud;
              return (
                <RevealItem key={item.title}>
                  <div className="enterprise-card group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(10,15,28,0.1)]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2C]/12 text-[#FF6B2C] ring-1 ring-[#FF6B2C]/20 transition group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-extrabold text-[#0A0F1C]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#334155]">{item.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      <section id="tech-services" className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{services.title}</BrandingSectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {services.items.map((item, index) => (
              <ServiceImageCard key={item.title} {...item} index={index} learnMoreHref={item.href} />
            ))}
          </div>
        </div>
      </section>

      <section className="mesh-hero relative overflow-hidden section-enterprise">
        <div className="absolute inset-0 bg-gradient-to-br from-[#07162d] via-[#0c2244] to-[#07162d]" aria-hidden />
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
                <Link href="/#assessment" className="!text-white hover:!text-white">
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
