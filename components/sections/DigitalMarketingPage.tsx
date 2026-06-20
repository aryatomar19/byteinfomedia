"use client";

import Link from "next/link";
import {
  BarChart3,
  CheckCircle2,
  Globe,
  LineChart,
  Mail,
  Megaphone,
  PenLine,
  Search,
  Share2,
  Shield,
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

const serviceIcons: Record<string, LucideIcon> = {
  SEO: Search,
  "Social Media Marketing": Share2,
  "Content Marketing": PenLine,
  "Website Development": Globe,
  "Performance Marketing": LineChart,
  "Email Marketing": Mail,
  "Brand Strategy": Target,
  "Online Reputation Management": Shield,
};

const whyIcons: LucideIcon[] = [TrendingUp, Users, Megaphone, BarChart3];

function ServiceCard({
  title,
  description,
  href,
  index,
}: {
  title: string;
  description: string;
  href?: string;
  index: number;
}) {
  const Icon = serviceIcons[title] ?? Sparkles;
  const inner = (
  <div className="enterprise-card group flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(10,15,28,0.1)]">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2C]/12 text-[#FF6B2C] ring-1 ring-[#FF6B2C]/20 transition duration-300 group-hover:scale-105">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-extrabold text-[#0A0F1C]">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-[#334155]">{description}</p>
      {href ? (
        <span className="mt-4 text-sm font-bold text-[#FF6B2C] transition group-hover:underline">Learn more</span>
      ) : null}
    </div>
  );

  return (
    <Reveal delay={index * 0.04}>
      {href ? (
        <Link href={href} scroll className="block h-full">
          {inner}
        </Link>
      ) : (
        inner
      )}
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
    <Reveal delay={index * 0.06}>
      <div className="enterprise-card group flex h-full flex-col overflow-hidden rounded-[1.5rem] transition duration-300 hover:-translate-y-1">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162d]/80 via-[#07162d]/20 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-xl font-extrabold text-[#0A0F1C]">{title}</h3>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-[#FF6B2C]">Result</p>
          <p className="mt-1 flex-1 text-base font-semibold leading-7 text-[#334155]">{result}</p>
          <Button variant="secondary" size="sm" className="mt-5 w-fit" asChild>
            <Link href="/book-consultation/">Read More</Link>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function DigitalMarketingPage() {
  const { hero, whyChoose, services, process, whyByte, metrics, caseStudies, industries, faqs, cta } =
    digitalMarketingPage;

  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative min-h-[72vh] overflow-hidden bg-[#07162d] lg:min-h-[78vh]">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#07162d] via-[#0c2244] to-[#07162d]"
          aria-hidden
        />
        <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden />
        <div
          className="dm-float-shape dm-float-shape--1 absolute h-64 w-64 rounded-full bg-[#FF6B2C]/10 blur-3xl"
          aria-hidden
        />
        <div
          className="dm-float-shape dm-float-shape--2 absolute h-48 w-48 rounded-full bg-[#FF6B2C]/8 blur-2xl"
          aria-hidden
        />
        <div
          className="dm-float-shape dm-float-shape--3 absolute h-32 w-32 rounded-2xl bg-white/5 blur-xl"
          aria-hidden
        />

        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[78vh] lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
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
                <Link href="#dm-services" className="!text-white hover:!text-white">
                  View Services
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
              <img src={hero.image} alt={hero.imageAlt} className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07162d]/40 via-transparent to-transparent" />
            </div>
            <div
              className="dm-float-shape dm-float-shape--4 absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border border-[#FF6B2C]/30 bg-[#FF6B2C]/10 backdrop-blur-sm"
              aria-hidden
            />
          </Reveal>
        </div>
      </section>

      {/* Section 2 — Why Businesses Choose */}
      <section className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{whyChoose.title}</BrandingSectionHeading>
          <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mt-12">
            {whyChoose.items.map((item, index) => {
              const Icon = whyIcons[index] ?? TrendingUp;
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

      {/* Section 3 — Services */}
      <section id="dm-services" className="section-enterprise branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{services.title}</BrandingSectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {services.items.map((item, index) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                description={item.description}
                href={"href" in item ? item.href : undefined}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Process */}
      <section className="section-enterprise branding-surface-white branding-process-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{process.title}</BrandingSectionHeading>
          <Reveal delay={0.06}>
            <ChevronProcessTimeline steps={[...process.steps]} />
          </Reveal>
        </div>
      </section>

      {/* Section 5 — Why Byte Infomedia */}
      <section className="section-enterprise branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{whyByte.title}</BrandingSectionHeading>
          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-[1.5rem] border border-[#0A0F1C]/8 shadow-[0_20px_56px_rgba(10,15,28,0.08)]">
                <img src={whyByte.image} alt={whyByte.imageAlt} className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
            <RevealStagger className="grid gap-4 sm:grid-cols-2">
              {whyByte.features.map((feature) => (
                <RevealItem key={feature}>
                  <div className="flex h-full items-start gap-3.5 rounded-2xl border border-[#0A0F1C]/8 bg-white px-5 py-5 transition hover:border-[#FF6B2C]/20 hover:shadow-[0_12px_40px_rgba(10,15,28,0.06)]">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#FF6B2C]" />
                    <span className="text-base font-bold leading-6 text-[#0A0F1C]">{feature}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Section 6 — Success Metrics */}
      <section className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>Success Metrics</BrandingSectionHeading>
          <RevealStagger className="mt-10 grid grid-cols-2 gap-8 lg:mt-12 lg:grid-cols-4">
            {metrics.map((metric) => (
              <RevealItem key={metric.label}>
                <AnimatedMetric
                  value={metric.value}
                  display={"display" in metric ? metric.display : undefined}
                  suffix={"suffix" in metric ? metric.suffix : undefined}
                  label={metric.label}
                />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Section 7 — Case Studies */}
      <section className="section-enterprise branding-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{caseStudies.title}</BrandingSectionHeading>
          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3">
            {caseStudies.items.map((item, index) => (
              <CaseStudyCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Industries */}
      <section className="section-enterprise branding-surface-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandingSectionHeading>{industries.title}</BrandingSectionHeading>
          <RevealStagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-12 lg:gap-4">
            {industries.items.map((industry) => (
              <RevealItem key={industry}>
                <div className="enterprise-card rounded-2xl px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#FF6B2C]/20 sm:px-5 sm:py-6">
                  <p className="font-extrabold text-[#0A0F1C]">{industry}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Section 9 — FAQ */}
      <section className="section-enterprise branding-surface-muted">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <BrandingFaqHeading>{faqs.title}</BrandingFaqHeading>
          <Reveal delay={0.06}>
            <FAQAccordion items={faqs.items} dark={false} variant="premium" />
          </Reveal>
        </div>
      </section>

      {/* Section 10 — CTA */}
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
