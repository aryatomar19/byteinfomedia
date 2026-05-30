"use client";

import Link from "next/link";
import {
  Activity,
  Bell,
  ClipboardCheck,
  Cloud,
  HardDrive,
  Headphones,
  LineChart,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { managedServicesPage } from "@/data/managed-services";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ServiceImageCard } from "@/components/sections/ServiceImageCard";

const whyIcons: Record<string, LucideIcon> = {
  "Proactive Monitoring": Activity,
  "24×7 Support": Headphones,
  "Incident Management": Bell,
  "Patch Compliance": Wrench,
  "Backup Validation": HardDrive,
  "Performance Optimization": LineChart,
  "Cost Governance": Cloud,
  "Security Monitoring": Shield,
};

const processIcons: Record<string, LucideIcon> = {
  Assess: ClipboardCheck,
  Onboard: Rocket,
  Operate: Headphones,
  Optimize: TrendingUp,
};

export function ManagedServicesPage() {
  const { hero, coreServices, whyManaged, process, badge } = managedServicesPage;

  return (
    <>
      <section className="relative min-h-[70vh] max-h-[75vh] overflow-hidden">
        <div className="absolute inset-0 hero-ken-burns" aria-hidden>
          <img
            src={hero.image}
            alt=""
            className="h-full min-h-full w-full min-w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[#0A0F1C]/60" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/80 via-[#0A0F1C]/50 to-[#0A0F1C]/30"
          aria-hidden
        />
        <div className="absolute inset-0 grid-pattern opacity-35" aria-hidden />

        <div className="relative mx-auto flex min-h-[70vh] max-h-[75vh] max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
              <Sparkles className="h-3.5 w-3.5" />
              {badge}
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-7 text-white/80">{hero.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">Request Free Assessment</Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/book-consultation/">Book Consultation</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Core Services</p>
            <h2 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
              Managed Operations Portfolio
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {coreServices.map((card, index) => (
              <ServiceImageCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-enterprise bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Why Choose Us</p>
            <h2 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
              Why Managed Services
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyManaged.map((item, index) => {
              const Icon = whyIcons[item.title] ?? Activity;
              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="enterprise-card h-full rounded-2xl p-5 transition hover:-translate-y-1">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2C]/12 text-[#FF6B2C] ring-1 ring-[#FF6B2C]/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-extrabold text-[#0A0F1C]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#0A0F1C] line-clamp-2">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-5 text-center">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">How We Work</p>
            <h2 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
              Operations Process
            </h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = processIcons[step.title] ?? Activity;
              return (
                <Reveal key={step.step} delay={index * 0.06}>
                  <div className="enterprise-card h-full rounded-2xl p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF6B2C] text-lg font-black text-white">
                        {step.step}
                      </span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F9FC] text-[#FF6B2C] ring-1 ring-[#0A0F1C]/8">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="mt-5 font-extrabold text-[#0A0F1C]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#0A0F1C] line-clamp-3">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
