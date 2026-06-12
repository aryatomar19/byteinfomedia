"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import type { ServicePageData } from "@/data/service-page-types";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { FAQAccordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";
import { DiagramByType } from "@/components/visuals/ServiceDiagrams";
import { HeroCloudScene } from "@/components/visuals/HeroCloudScene";

export function PremiumServicePage({ data }: { data: ServicePageData }) {
  return (
    <>
      {/* Hero */}
      <section className="mesh-hero relative overflow-hidden pt-8 pb-16 sm:pb-24">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
              <Sparkles className="h-3.5 w-3.5" />
              {data.badge}
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-gradient sm:text-5xl lg:text-[3.25rem]">
              {data.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{data.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="#assessment">Request Free Assessment</Link>
              </Button>
              <Button variant="secondary" size="lg" className={darkHeroSecondaryButtonClass} asChild>
                <Link href="/#assessment">Talk to Experts</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <HeroCloudScene />
          </Reveal>
        </div>
      </section>

      {/* Overview + business value */}
      <section className="mesh-section relative py-16 sm:py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Overview</h2>
              <p className="mt-5 text-base leading-8 text-white/65">{data.overview}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-card rounded-[1.75rem] p-6 sm:p-8">
                <h3 className="text-lg font-extrabold text-white">Business Value</h3>
                <ul className="mt-5 space-y-3">
                  {data.businessValue.map((v) => (
                    <li key={v} className="flex items-start gap-3 text-sm text-white/75">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visual blocks */}
      {data.visualBlocks.map((block, index) => (
        <section
          key={block.id}
          className={index % 2 === 0 ? "mesh-light py-16 sm:py-20" : "mesh-section relative py-16 sm:py-20"}
        >
          {index % 2 !== 0 && <div className="absolute inset-0 grid-pattern opacity-25" />}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-8 max-w-2xl">
              <h2 className={cnHeading(index % 2 === 0)}>{block.title}</h2>
              <p className={cnBody(index % 2 === 0)}>{block.description}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
                <DiagramByType type={block.visual} />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Services grid */}
      <section className="mesh-hero relative py-16 sm:py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Capabilities</h2>
          </Reveal>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.services.map((s) => (
              <RevealItem key={s.name}>
                <div className="glass-card group h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[#FF6B2C]/40">
                  <CheckCircle2 className="h-6 w-6 text-[#FF6B2C]" />
                  <h3 className="mt-4 font-extrabold text-white">{s.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{s.benefit}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Benefits */}
      <section className="mesh-section relative py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-3xl font-extrabold text-white">Key Benefits</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {data.benefits.map((b) => (
              <Reveal key={b.title}>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-extrabold text-[#FF6B2C]">{b.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="mesh-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-[#0A0F1C]">Delivery Process</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-[#FF6B2C] to-transparent lg:block" />
            <div className="grid gap-6 lg:grid-cols-4">
              {data.process.map((step) => (
                <Reveal key={step.step}>
                  <div className="glass-card-light relative rounded-2xl p-6 text-center lg:text-left">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2C] text-lg font-black text-white">
                      {step.step}
                    </span>
                    <h3 className="mt-4 font-extrabold text-[#0A0F1C]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#52647a]">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="mesh-section relative py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B2C]">Customer Outcome</span>
              <h2 className="mt-3 text-3xl font-extrabold text-white">{data.caseStudy.title}</h2>
              <p className="mt-4 text-sm font-semibold text-white/50">Challenge</p>
              <p className="mt-2 text-white/70">{data.caseStudy.challenge}</p>
              <p className="mt-4 text-sm font-semibold text-white/50">Solution</p>
              <p className="mt-2 text-white/70">{data.caseStudy.solution}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-card rounded-[1.75rem] p-8">
                <h3 className="font-extrabold text-white">Results</h3>
                <ul className="mt-5 space-y-3">
                  {data.caseStudy.results.map((r) => (
                    <li key={r} className="flex items-center gap-3 text-sm text-white/80">
                      <ArrowRight className="h-4 w-4 text-[#FF6B2C]" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {data.outcomes.map((o) => (
                    <div key={o.label} className="rounded-xl bg-white/5 p-4 text-center">
                      <p className="text-2xl font-black text-[#FF6B2C]">{o.metric}</p>
                      <p className="mt-1 text-xs font-bold text-white/80">{o.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="mesh-hero py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-white">Technology Ecosystem</h2>
          </Reveal>
          <Reveal className="flex flex-wrap justify-center gap-3">
            {data.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mesh-light py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-[#0A0F1C]">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal>
            <FAQAccordion items={data.faqs} dark={false} />
          </Reveal>
        </div>
      </section>

      {/* CTA + form */}
      <section id="assessment" className="mesh-section relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B2C]/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{data.cta.title}</h2>
              <p className="mt-4 text-lg text-white/65">{data.cta.description}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <AssessmentForm idPrefix={data.slug} variant="dark" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function cnHeading(light: boolean) {
  return light ? "text-3xl font-extrabold text-[#0A0F1C]" : "text-3xl font-extrabold text-white";
}
function cnBody(light: boolean) {
  return light ? "mt-3 text-[#52647a]" : "mt-3 text-white/65";
}
