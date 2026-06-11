"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { websiteDevelopmentPage } from "@/data/website-development";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { FAQAccordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const { hero, offerings, whyChoose, process, recentWork, faqs, cta } = websiteDevelopmentPage;

const heroSecondaryButtonClass =
  "border-2 border-white/60 bg-white/15 font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-white hover:bg-white/25";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
      {children}
    </h2>
  );
}

function ProjectCard({
  title,
  industry,
  result,
  image,
  imageAlt,
}: {
  title: string;
  industry: string;
  result: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="enterprise-card group overflow-hidden rounded-[1.5rem] transition duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/70 via-[#0A0F1C]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">{industry}</p>
          <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">{title}</h3>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#FF6B2C]">Result</p>
        <p className="mt-1 text-base font-semibold text-[#0A0F1C]">{result}</p>
      </div>
    </div>
  );
}

export function WebsiteDevelopmentPage() {
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
        <div className="absolute inset-0 grid-pattern opacity-35" aria-hidden />

        <div className="relative mx-auto flex min-h-[70vh] max-h-[75vh] max-w-7xl items-center px-4 hero-service sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.badge}
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-7 text-white/80">{hero.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" className={heroSecondaryButtonClass} asChild>
                <Link href="#recent-work">View Portfolio</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. What We Offer */}
      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading mx-auto max-w-2xl text-center">
            <SectionTitle>{offerings.title}</SectionTitle>
          </Reveal>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.items.map((item) => {
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

      {/* 3. Why Choose Byte Infomedia */}
      <section className="section-enterprise bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading mx-auto max-w-2xl text-center">
            <SectionTitle>{whyChoose.title}</SectionTitle>
          </Reveal>
          <RevealStagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.features.map((feature) => (
              <RevealItem key={feature}>
                <div className="flex items-start gap-3 rounded-2xl border border-[#0A0F1C]/8 bg-[#F8F9FC] px-4 py-4 transition hover:border-[#FF6B2C]/20">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]" />
                  <span className="text-sm font-semibold leading-6 text-[#0A0F1C] sm:text-base">{feature}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 4. Our Process */}
      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading mx-auto max-w-2xl text-center">
            <SectionTitle>{process.title}</SectionTitle>
          </Reveal>
          <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
            {process.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
                <div className="flex flex-1 flex-col">
                  <div className="enterprise-card flex h-full flex-col rounded-2xl p-5 transition hover:-translate-y-0.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6B2C] text-sm font-black text-white">
                      {step.step}
                    </span>
                    <h3 className="mt-4 font-extrabold text-[#0A0F1C]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#334155]">{step.description}</p>
                  </div>
                </div>
                {index < process.steps.length - 1 ? (
                  <div className="flex items-center justify-center py-1 lg:px-1 lg:py-0">
                    <ArrowRight className="hidden h-5 w-5 shrink-0 text-[#FF6B2C] lg:block" aria-hidden />
                    <ArrowRight className="h-5 w-5 rotate-90 text-[#FF6B2C] lg:hidden" aria-hidden />
                  </div>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recent Work */}
      <section id="recent-work" className="section-enterprise bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading mx-auto max-w-2xl text-center">
            <SectionTitle>{recentWork.title}</SectionTitle>
          </Reveal>
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recentWork.projects.map((project) => (
              <RevealItem key={project.title}>
                <ProjectCard {...project} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="mesh-light section-enterprise">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="section-heading text-center">
            <SectionTitle>{faqs.title}</SectionTitle>
          </Reveal>
          <Reveal delay={0.06}>
            <FAQAccordion items={faqs.items} dark={false} variant="premium" />
          </Reveal>
        </div>
      </section>

      {/* 7. Final CTA */}
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
