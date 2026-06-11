"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { socialMediaMarketingPage } from "@/data/social-media-marketing";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { FAQAccordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const { hero, services, platforms, process, results, whyChoose, faqs, cta } = socialMediaMarketingPage;

const heroSecondaryButtonClass =
  "border-2 border-white/60 bg-white/15 font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-white hover:bg-white/25";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
      {children}
    </h2>
  );
}

function HorizontalProcessTimeline({
  steps,
}: {
  steps: { step: number; title: string; description: string }[];
}) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0">
      <div className="flex min-w-max items-stretch gap-3 lg:min-w-0 lg:gap-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-stretch">
            <div className="enterprise-card flex w-[11rem] flex-col rounded-2xl p-5 transition hover:-translate-y-0.5 sm:w-[12rem] lg:w-auto lg:min-w-0 lg:flex-1">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B2C] text-base font-black text-white">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-[#0A0F1C]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#334155]">{step.description}</p>
            </div>
            {index < steps.length - 1 ? (
              <div className="flex items-center px-1.5 sm:px-2">
                <ArrowRight className="h-6 w-6 shrink-0 text-[#FF6B2C]" aria-hidden />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SocialMediaMarketingPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[70vh] max-h-[75vh] overflow-hidden">
        <div className="absolute inset-0 hero-ken-burns" aria-hidden>
          <img
            src={hero.image}
            alt=""
            className="h-full min-h-full w-full min-w-full object-cover object-center brightness-110 contrast-105"
          />
        </div>
        <div className="absolute inset-0 bg-[#0A0F1C]/40" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/60 via-[#0A0F1C]/30 to-[#0A0F1C]/15"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[70vh] max-h-[75vh] max-w-7xl items-center px-4 hero-service sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h1 className="font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-7 text-white/80">{hero.description}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {hero.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF6B2C]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">{hero.primaryCta}</Link>
              </Button>
              <Button size="lg" variant="secondary" className={heroSecondaryButtonClass} asChild>
                <Link href="/book-consultation/">{hero.secondaryCta}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Social Media Services */}
      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading mx-auto max-w-2xl text-center">
            <SectionTitle>{services.title}</SectionTitle>
          </Reveal>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.items.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title}>
                  <div className="enterprise-card h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2C]/12 text-[#FF6B2C] ring-1 ring-[#FF6B2C]/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-extrabold text-[#0A0F1C]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#334155]">{item.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* 3. Platforms We Manage */}
      <section className="section-enterprise bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading mx-auto max-w-2xl text-center">
            <SectionTitle>{platforms.title}</SectionTitle>
          </Reveal>
          <RevealStagger className="flex flex-wrap justify-center gap-4">
            {platforms.items.map((platform) => (
              <RevealItem key={platform}>
                <div className="enterprise-card flex h-24 min-w-[8.5rem] items-center justify-center rounded-2xl px-8 transition duration-300 hover:-translate-y-1 sm:min-w-[10rem]">
                  <span className="text-lg font-extrabold text-[#0A0F1C]">{platform}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 4. Our Social Media Process */}
      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading mx-auto max-w-2xl text-center">
            <SectionTitle>{process.title}</SectionTitle>
          </Reveal>
          <Reveal delay={0.06}>
            <HorizontalProcessTimeline steps={process.steps} />
          </Reveal>
        </div>
      </section>

      {/* 5. What You Can Expect */}
      <section className="section-enterprise bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading mx-auto max-w-2xl text-center">
            <SectionTitle>{results.title}</SectionTitle>
          </Reveal>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.items.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title}>
                  <div className="enterprise-card group h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2C]/12 text-[#FF6B2C] ring-1 ring-[#FF6B2C]/20 transition group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-extrabold text-[#0A0F1C]">{item.title}</h3>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* 6. Why Choose Byte Infomedia */}
      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <SectionTitle>{whyChoose.title}</SectionTitle>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <RevealStagger className="grid gap-4 sm:grid-cols-2">
              {whyChoose.features.map((feature) => (
                <RevealItem key={feature}>
                  <div className="flex h-full items-start gap-3.5 rounded-2xl border border-[#0A0F1C]/8 bg-white px-5 py-5 transition hover:border-[#FF6B2C]/20">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#FF6B2C]" />
                    <span className="text-base font-bold leading-6 text-[#0A0F1C]">{feature}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[1.5rem] border border-[#0A0F1C]/8 shadow-[0_20px_56px_rgba(10,15,28,0.08)]">
                <img
                  src={whyChoose.illustration}
                  alt={whyChoose.illustrationAlt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="section-enterprise bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading text-center">
            <SectionTitle>{faqs.title}</SectionTitle>
          </Reveal>
          <Reveal delay={0.06}>
            <FAQAccordion items={faqs.items} dark={false} variant="premium" />
          </Reveal>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="mesh-hero relative overflow-hidden section-enterprise">
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
              <Button
                size="lg"
                variant="secondary"
                className="border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/15"
                asChild
              >
                <Link href="/book-consultation/">{cta.secondaryLabel}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
