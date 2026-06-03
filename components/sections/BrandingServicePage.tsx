"use client";

import Link from "next/link";
import {
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Code2,
  Briefcase,
  Camera,
  FileCode2,
  FileText,
  Gauge,
  Globe,
  Headphones,
  KeyRound,
  LayoutTemplate,
  Link2,
  MapPin,
  Megaphone,
  Package,
  PenLine,
  Search,
  Share2,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { BrandingFeature, BrandingServicePageData } from "@/data/branding-service-types";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ServiceImageCard } from "@/components/sections/ServiceImageCard";
import { SectionHeading } from "@/components/sections/SectionHeading";

const featureIcons: Record<BrandingFeature["icon"], LucideIcon> = {
  globe: Globe,
  layout: LayoutTemplate,
  shopping: ShoppingCart,
  code: Code2,
  smartphone: Smartphone,
  gauge: Gauge,
  search: Search,
  fileText: FileText,
  link: Link2,
  key: KeyRound,
  mapPin: MapPin,
  clipboard: ClipboardList,
  trending: TrendingUp,
  pen: PenLine,
  book: BookOpen,
  fileCode: FileCode2,
  package: Package,
  megaphone: Megaphone,
  facebook: Share2,
  instagram: Camera,
  linkedin: Briefcase,
  sparkles: Sparkles,
  users: Users,
  target: Target,
  barChart: BarChart3,
};

const valueIcons: Record<string, LucideIcon> = {
  award: Award,
  headphones: Headphones,
  workflow: Workflow,
  wallet: Wallet,
  target: Target,
  users: Users,
};

export function BrandingServicePage({ data }: { data: BrandingServicePageData }) {
  const { hero, overview, features, offerings, benefits, showcase, cta, badge } = data;

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

        <div className="relative mx-auto flex min-h-[70vh] max-h-[75vh] max-w-7xl items-center px-4 hero-service sm:px-6 lg:px-8">
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
                <Link href="/book-consultation/">Book Consultation</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Service Overview" title={overview.title} />
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <p className="text-base leading-8 text-[#334155]">{overview.description}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="enterprise-card rounded-2xl p-5">
                  <h3 className="text-lg font-extrabold text-[#0A0F1C]">Business Benefits</h3>
                  <ul className="mt-4 space-y-3">
                    {overview.businessBenefits.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#334155]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6B2C]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="enterprise-card rounded-2xl p-5">
                  <h3 className="text-lg font-extrabold text-[#0A0F1C]">Industry Use Cases</h3>
                  <ul className="mt-4 space-y-3">
                    {overview.useCases.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#334155]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6B2C]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-enterprise bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Capabilities" title="Key Features" />
          <div className="section-cards mb-0 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => {
              const Icon = featureIcons[item.icon] ?? Target;
              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="enterprise-card h-full rounded-2xl p-5 transition hover:-translate-y-1">
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

      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Deliver" title="Service Offerings" />
          <div className="section-cards mb-0 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((card, index) => (
              <ServiceImageCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Outcomes" title="Benefits for Your Business" />
          <div className="section-cards mb-0 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = valueIcons[item.icon] ?? Target;
              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="enterprise-card h-full rounded-2xl p-5 transition hover:-translate-y-1">
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

      <section className="section-enterprise bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.75rem]">
            <img src={showcase.image} alt={showcase.imageAlt} className="aspect-[21/9] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/85 via-[#0A0F1C]/55 to-transparent" />
            <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-14">
              <Reveal className="max-w-xl">
                <h2 className="font-[family-name:var(--font-inter)] text-2xl font-extrabold text-white sm:text-3xl">
                  {showcase.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-white/80">{showcase.description}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="mesh-hero relative overflow-hidden section-enterprise">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">{cta.description}</p>
            <div className="mt-6 flex justify-center">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">Book Consultation</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
