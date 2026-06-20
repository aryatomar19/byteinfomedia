"use client";

import Link from "next/link";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  LineChart,
  Megaphone,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { digitalMarketingPage } from "@/data/digital-marketing";
import { BrandingFaqHeading, BrandingSectionHeading } from "@/components/sections/BrandingSectionHeading";
import { ChevronProcessTimeline } from "@/components/sections/ChevronProcessTimeline";
import { AnimatedMetric } from "@/components/motion/AnimatedMetric";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { FAQAccordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

const benefitIcons: LucideIcon[] = [TrendingUp, Users, Megaphone, BarChart3];

const whyByteIcons: LucideIcon[] = [Users, LineChart, BarChart3, Wallet, Sparkles, TrendingUp];

const industryIcons: Record<string, LucideIcon> = {
  healthcare: HeartPulse,
  education: GraduationCap,
  realEstate: Home,
  ecommerce: ShoppingBag,
  manufacturing: Factory,
  technology: Building2,
  finance: Wallet,
  hospitality: UtensilsCrossed,
};

function PremiumServiceCard({
  title,
  description,
  image,
  imageAlt,
  href,
  index,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.06}>
      <Link href={href} scroll className="dm-service-card group block h-full">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem]">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162d]/70 via-[#07162d]/15 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col rounded-b-[1.5rem] border border-t-0 border-[#0A0F1C]/8 bg-white p-6">
          <h3 className="text-xl font-extrabold text-[#0A0F1C] transition group-hover:text-[#FF6B2C]">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-7 text-[#334155]">{description}</p>
          <span className="dm-learn-more mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C]">
            Learn More
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function CaseStudyCard({
  title,
  result,
  image,
  imageAlt,
  index,
}: {
  title: string;
  result: string;
  image: string;
  imageAlt: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="dm-case-card group flex h-full flex-col overflow-hidden rounded-[1.5rem]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162d]/80 via-[#07162d]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">{title}</h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col border border-t-0 border-[#0A0F1C]/8 bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#FF6B2C]">Result</p>
          <p className="mt-2 flex-1 text-base font-semibold leading-7 text-[#334155]">{result}</p>
          <Button variant="secondary" size="sm" className="mt-5 w-fit" asChild>
            <Link href="/book-consultation/">Read More</Link>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function DigitalMarketingPage() {
  const {
    hero,
    overview,
    benefits,
    services,
    process,
    whyByte,
    metrics,
    caseStudies,
    industries,
    faqs,
    cta,
  } = digitalMarketingPage;

  return (
    <>
      {/* Hero */}
      <section className="dm-hero relative min-h-[85vh] overflow-hidden bg-[#07162d] lg:min-h-[90vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#07162d] via-[#0c2244] to-[#07162d]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,44,0.15),transparent_55%)]" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
        <div className="dm-float-shape dm-float-shape--1 absolute h-72 w-72 rounded-full bg-[#FF6B2C]/12 blur-3xl" aria-hidden />
        <div className="dm-float-shape dm-float-shape--2 absolute h-56 w-56 rounded-full bg-[#FF6B2C]/8 blur-3xl" aria-hidden />
        <div className="dm-float-shape dm-float-shape--3 absolute h-40 w-40 rounded-2xl bg-white/5 blur-2xl" aria-hidden />

        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:min-h-[90vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-20">
          <Reveal>
            <span className="dm-hero-badge inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#ffb088] backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.badge}
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.35rem] xl:text-[3.6rem]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">Book Consultation</Link>
              </Button>
              <Button variant="dark" size="lg" className={darkHeroSecondaryButtonClass} asChild>
                <Link href="#dm-services" className="!text-white hover:!text-white">
                  View Services
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="dm-hero-glow absolute -inset-4 rounded-[2rem] bg-[#FF6B2C]/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
              <img src={hero.image} alt={hero.imageAlt} className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07162d]/50 via-transparent to-transparent" />
            </div>
            <div
              className="dm-float-shape dm-float-shape--4 absolute -bottom-5 -left-5 hidden h-20 w-20 rounded-2xl border border-[#FF6B2C]/30 bg-[#FF6B2C]/10 backdrop-blur-md lg:block"
              aria-hidden
            />
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="dm-overview-image relative overflow-hidden rounded-[1.75rem] shadow-[0_32px_80px_rgba(10,15,28,0.12)]">
                <img src={overview.image} alt={overview.imageAlt} className="aspect-[4/3] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#07162d]/20 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{overview.eyebrow}</p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
                {overview.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#334155] sm:text-lg sm:leading-9">{overview.description}</p>
              <ul className="mt-8 space-y-4">
                {overview.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]" />
                    <span className="text-base font-medium leading-7 text-[#0A0F1C]">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-enterprise branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{benefits.title}</BrandingSectionHeading>
          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:mt-14">
            {benefits.items.map((item, index) => {
              const Icon = benefitIcons[index] ?? TrendingUp;
              return (
                <RevealItem key={item.title}>
                  <div className="dm-benefit-card group h-full rounded-[1.25rem] p-7">
                    <span className="dm-benefit-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl">
                      <Icon className="h-7 w-7 text-[#FF6B2C]" />
                    </span>
                    <h3 className="mt-6 text-lg font-extrabold text-[#0A0F1C]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#334155]">{item.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Services */}
      <section id="dm-services" className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{services.title}</BrandingSectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-7">
            {services.items.map((item, index) => (
              <PremiumServiceCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-enterprise branding-surface-muted branding-process-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{process.title}</BrandingSectionHeading>
          <Reveal delay={0.08}>
            <ChevronProcessTimeline steps={[...process.steps]} />
          </Reveal>
        </div>
      </section>

      {/* Why Byte Infomedia */}
      <section className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{whyByte.title}</BrandingSectionHeading>
          <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-[1.75rem] border border-[#0A0F1C]/8 shadow-[0_32px_80px_rgba(10,15,28,0.1)]">
                <img src={whyByte.image} alt={whyByte.imageAlt} className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
            <RevealStagger className="grid gap-4 sm:grid-cols-2">
              {whyByte.features.map((feature, index) => {
                const Icon = whyByteIcons[index] ?? Sparkles;
                return (
                  <RevealItem key={feature.title}>
                    <div className="dm-why-card group flex h-full gap-4 rounded-2xl p-5">
                      <span className="dm-why-icon inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                        <Icon className="h-5 w-5 text-[#FF6B2C]" />
                      </span>
                      <div>
                        <h3 className="font-extrabold text-[#0A0F1C]">{feature.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-[#334155]">{feature.description}</p>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-enterprise branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>Success Metrics</BrandingSectionHeading>
          <RevealStagger className="mt-12 grid grid-cols-2 gap-8 lg:mt-14 lg:grid-cols-4 lg:gap-10">
            {metrics.map((metric) => (
              <RevealItem key={metric.label}>
                <div className="dm-metric-card rounded-2xl px-4 py-8">
                  <AnimatedMetric
                    value={metric.value}
                    display={"display" in metric ? metric.display : undefined}
                    suffix={"suffix" in metric ? metric.suffix : undefined}
                    label={metric.label}
                  />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{caseStudies.title}</BrandingSectionHeading>
          <div className="mt-12 grid gap-7 lg:mt-14 lg:grid-cols-3">
            {caseStudies.items.map((item, index) => (
              <CaseStudyCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-enterprise branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{industries.title}</BrandingSectionHeading>
          <RevealStagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-14 lg:gap-5">
            {industries.items.map((industry) => {
              const Icon = industryIcons[industry.icon] ?? Building2;
              return (
                <RevealItem key={industry.name}>
                  <div className="dm-industry-card group flex flex-col items-center rounded-2xl px-4 py-7 text-center">
                    <span className="dm-industry-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6 text-[#FF6B2C] transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <p className="mt-4 font-extrabold text-[#0A0F1C]">{industry.name}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <BrandingFaqHeading>{faqs.title}</BrandingFaqHeading>
          <Reveal delay={0.08}>
            <FAQAccordion items={faqs.items} dark={false} variant="premium" />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="dm-cta relative overflow-hidden section-enterprise">
        <div className="absolute inset-0 bg-gradient-to-br from-[#07162d] via-[#0c2244] to-[#07162d]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,107,44,0.12),transparent_60%)]" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{cta.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
