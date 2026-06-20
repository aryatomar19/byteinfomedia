"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LineChart,
  Megaphone,
  Palette,
  Sparkles,
  Target,
  TrendingUp,
  Users,
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
const whyByteIcons: LucideIcon[] = [Users, LineChart, BarChart3, Target, Sparkles, TrendingUp];
const strategyIcons: LucideIcon[] = [BarChart3, Target, Palette, LineChart];

function PortfolioServiceCard({
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
    <Reveal delay={index * 0.08}>
      <Link href={href} scroll className="dm-portfolio-card group flex h-full flex-col overflow-hidden rounded-[1.25rem]">
        <div className="dm-portfolio-media relative h-[260px] shrink-0 overflow-hidden sm:h-[280px]">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162d]/95 via-[#07162d]/45 to-[#07162d]/15 transition duration-500 group-hover:from-[#07162d]/90" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-[1.65rem]">{title}</h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-white p-6">
          <p className="line-clamp-2 flex-1 text-sm leading-7 text-[#334155]">{description}</p>
          <span className="dm-portfolio-cta mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C]">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function PortfolioCaseCard({
  category,
  title,
  result,
  image,
  imageAlt,
  index,
}: {
  category: string;
  title: string;
  result: string;
  image: string;
  imageAlt: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="dm-portfolio-case group flex h-full flex-col overflow-hidden rounded-[1.25rem]">
        <div className="dm-portfolio-media relative h-[260px] shrink-0 overflow-hidden sm:h-[280px]">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162d]/95 via-[#07162d]/40 to-[#07162d]/10" />
          <span className="absolute left-5 top-5 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#ffb088] backdrop-blur-sm">
            {category}
          </span>
          <h3 className="absolute bottom-0 left-0 right-0 p-6 text-xl font-extrabold text-white sm:text-2xl">{title}</h3>
        </div>
        <div className="flex flex-1 flex-col border border-t-0 border-[#0A0F1C]/8 bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#FF6B2C]">Result</p>
          <p className="mt-2 flex-1 text-sm font-semibold leading-7 text-[#334155]">{result}</p>
          <Button variant="secondary" size="sm" className="mt-5 w-fit" asChild>
            <Link href="/book-consultation/">Read More</Link>
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

export function DigitalMarketingPage() {
  const { hero, about, benefits, services, process, whyByte, metrics, caseStudies, strategies, faqs, cta } =
    digitalMarketingPage;

  return (
    <div className="dm-page">
      {/* Hero */}
      <section className="dm-hero relative flex min-h-screen items-center overflow-hidden bg-[#07162d]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#07162d] via-[#0a1e3d] to-[#07162d]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,107,44,0.18),transparent_50%)]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,rgba(255,107,44,0.08),transparent_45%)]" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" aria-hidden />
        <div className="dm-float-shape dm-float-shape--1 absolute h-80 w-80 rounded-full bg-[#FF6B2C]/14 blur-3xl" aria-hidden />
        <div className="dm-float-shape dm-float-shape--2 absolute h-64 w-64 rounded-full bg-[#FF6B2C]/10 blur-3xl" aria-hidden />
        <div className="dm-float-shape dm-float-shape--3 absolute h-36 w-36 rounded-full bg-white/5 blur-2xl" aria-hidden />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#ffb088] backdrop-blur-md sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.badge}
            </span>
            <h1 className="mt-5 font-[family-name:var(--font-inter)] text-[2.35rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-white/78 sm:text-lg">{hero.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
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

          <Reveal delay={0.1} className="relative">
            <div className="dm-hero-glow absolute -inset-3 rounded-[1.75rem] bg-[#FF6B2C]/25 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              <img src={hero.image} alt={hero.imageAlt} className="aspect-[5/4] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07162d]/55 via-transparent to-transparent" />
            </div>
            <div className="dm-float-shape dm-float-shape--4 absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-xl border border-[#FF6B2C]/35 bg-[#FF6B2C]/10 backdrop-blur-md lg:block" aria-hidden />
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="dm-section branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div className="overflow-hidden rounded-[1.5rem] shadow-[0_24px_64px_rgba(10,15,28,0.12)]">
                <img src={about.image} alt={about.imageAlt} className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="dm-glass-panel rounded-[1.5rem] p-7 sm:p-9">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{about.eyebrow}</p>
                <h2 className="mt-3 font-[family-name:var(--font-inter)] text-2xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-3xl lg:text-[2rem]">
                  {about.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#334155]">{about.description}</p>
                <ul className="mt-6 space-y-3">
                  {about.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]" />
                      <span className="text-sm font-medium leading-7 text-[#0A0F1C] sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="dm-section branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{benefits.title}</BrandingSectionHeading>
          <RevealStagger className="dm-equal-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mt-10">
            {benefits.items.map((item, index) => {
              const Icon = benefitIcons[index] ?? TrendingUp;
              return (
                <RevealItem key={item.title} className="h-full">
                  <div className="dm-benefit-card flex h-full min-h-[220px] flex-col rounded-[1.25rem] p-6">
                    <span className="dm-benefit-icon inline-flex h-12 w-12 items-center justify-center rounded-xl">
                      <Icon className="h-6 w-6 text-[#FF6B2C]" />
                    </span>
                    <h3 className="mt-5 text-base font-extrabold text-[#0A0F1C]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#334155]">{item.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Services — 2×2 portfolio grid */}
      <section id="dm-services" className="dm-section branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{services.title}</BrandingSectionHeading>
          <div className="dm-equal-grid mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:gap-6">
            {services.items.map((item, index) => (
              <PortfolioServiceCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="dm-section branding-surface-muted branding-process-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{process.title}</BrandingSectionHeading>
          <Reveal delay={0.06} className="mt-8 lg:mt-10">
            <ChevronProcessTimeline steps={[...process.steps]} />
          </Reveal>
        </div>
      </section>

      {/* Why Byte Infomedia */}
      <section className="dm-section branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{whyByte.title}</BrandingSectionHeading>
          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-2 lg:items-stretch lg:gap-10">
            <Reveal className="h-full">
              <div className="h-full min-h-[320px] overflow-hidden rounded-[1.5rem] shadow-[0_24px_64px_rgba(10,15,28,0.1)] lg:min-h-full">
                <img src={whyByte.image} alt={whyByte.imageAlt} className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <RevealStagger className="grid gap-4 sm:grid-cols-2">
              {whyByte.features.map((feature, index) => {
                const Icon = whyByteIcons[index] ?? Sparkles;
                return (
                  <RevealItem key={feature.title} className="h-full">
                    <div className="dm-why-card flex h-full min-h-[130px] gap-3.5 rounded-xl p-5">
                      <span className="dm-why-icon inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                        <Icon className="h-5 w-5 text-[#FF6B2C]" />
                      </span>
                      <div>
                        <h3 className="text-sm font-extrabold text-[#0A0F1C]">{feature.title}</h3>
                        <p className="mt-1 text-xs leading-5 text-[#334155] sm:text-sm sm:leading-6">{feature.description}</p>
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
      <section className="dm-section branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>Success Metrics</BrandingSectionHeading>
          <RevealStagger className="dm-equal-grid mt-8 grid grid-cols-2 gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-5">
            {metrics.map((metric) => (
              <RevealItem key={metric.label} className="h-full">
                <div className="dm-metric-glass flex h-full min-h-[140px] items-center justify-center rounded-[1.25rem] px-4 py-6">
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
      <section className="dm-section branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{caseStudies.title}</BrandingSectionHeading>
          <div className="dm-equal-grid mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {caseStudies.items.map((item, index) => (
              <PortfolioCaseCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Digital Strategies Work */}
      <section className="dm-section branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{strategies.title}</BrandingSectionHeading>
          <RevealStagger className="dm-equal-grid mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {strategies.items.map((item, index) => {
              const Icon = strategyIcons[index] ?? BarChart3;
              return (
                <RevealItem key={item.title} className="h-full">
                  <div className="dm-strategy-card flex h-full min-h-[200px] flex-col rounded-[1.25rem] p-6">
                    <span className="dm-benefit-icon inline-flex h-12 w-12 items-center justify-center rounded-xl">
                      <Icon className="h-6 w-6 text-[#FF6B2C]" />
                    </span>
                    <h3 className="mt-5 text-base font-extrabold text-[#0A0F1C]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#334155]">{item.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="dm-section branding-surface-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <BrandingFaqHeading>{faqs.title}</BrandingFaqHeading>
          <Reveal delay={0.06} className="mt-8">
            <FAQAccordion items={faqs.items} dark={false} variant="premium" />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="dm-cta relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#07162d] via-[#0a1e3d] to-[#07162d]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,44,0.14),transparent_55%)]" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-[0.1]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">{cta.description}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
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
    </div>
  );
}
