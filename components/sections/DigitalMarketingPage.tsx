"use client";

import Link from "next/link";
import { ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { esteemedClients } from "@/data/esteemed-clients";
import { digitalMarketingPage } from "@/data/digital-marketing";
import { BrandingCaseStudiesRail } from "@/components/branding/BrandingCaseStudiesRail";
import { BrandingFloatingProof } from "@/components/branding/BrandingFloatingProof";
import { BrandingHeroVisual } from "@/components/branding/BrandingHeroVisual";
import { BrandingProcessSection } from "@/components/branding/BrandingProcessSection";
import { BrandingSectionDivider } from "@/components/branding/BrandingSectionDivider";
import { BrandingServicesBento } from "@/components/branding/BrandingServicesBento";
import { BrandingTestimonialsPremium } from "@/components/branding/BrandingTestimonialsPremium";
import { BrandingWhySection } from "@/components/branding/BrandingWhySection";
import { AnimatedMetric } from "@/components/motion/AnimatedMetric";
import { FAQAccordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function DigitalMarketingPage() {
  const { hero, services, metrics, process, floatingProof, whyByte, caseStudies, testimonials, faqs, cta } =
    digitalMarketingPage;

  return (
    <div className="bs-premium relative overflow-hidden bg-[#FAFAFA]">
      {/* Global ambient layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="bs-blob bs-blob--1" />
        <div className="bs-blob bs-blob--2" />
        <div className="bs-blob bs-blob--3" />
      </div>

      {/* Hero — full viewport */}
      <section className="bs-hero-section relative min-h-screen">
        <div className="absolute inset-0" aria-hidden>
          <img
            src="/images/digital-marketing/hero.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/95 via-[#FAFAFA]/85 to-[#FAFAFA]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,107,44,0.12),transparent_55%)]" />
        </div>

        <BrandingFloatingProof items={floatingProof} />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/30 bg-white/90 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#FF6B2C] shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                {hero.badge}
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-[#111] sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-[#555] sm:text-lg">{hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/book-consultation/">{hero.primaryCta}</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#bs-services">{hero.secondaryCta}</Link>
                </Button>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {hero.trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#111]/8 bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#666] shadow-sm backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-5 opacity-75 grayscale transition hover:grayscale-0">
                {esteemedClients.slice(0, 5).map((client) => (
                  <img
                    key={client.name}
                    src={client.logo}
                    alt={client.logoAlt}
                    className="h-7 w-auto max-w-[5.5rem] object-contain"
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative lg:-mr-8"
            >
              <BrandingHeroVisual />
            </motion.div>
          </div>
        </div>

        <BrandingSectionDivider variant="curve" className="bs-divider--hero text-[#FAFAFA]" />
      </section>

      <BrandingServicesBento title={services.title} subtitle={services.subtitle} items={services.items} />

      <BrandingSectionDivider variant="slant" flip className="text-[#111]" />

      {/* Stats — layered dark strip */}
      <section className="bs-stats-strip relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#FF6B2C]/15 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bs-stat-item text-center"
            >
              <AnimatedMetric
                value={metric.value}
                display={"display" in metric ? metric.display : undefined}
                suffix={"suffix" in metric ? metric.suffix : undefined}
                label={metric.label}
                variant="dark"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <BrandingSectionDivider variant="wave" className="text-[#FAFAFA]" />

      <BrandingProcessSection title={process.title} subtitle={process.subtitle} steps={process.steps} />

      <BrandingSectionDivider variant="notch" flip className="text-white" />

      <BrandingWhySection title={whyByte.title} features={whyByte.features} />

      <BrandingCaseStudiesRail title={caseStudies.title} items={caseStudies.items} />

      <BrandingTestimonialsPremium title={testimonials.title} items={testimonials.items} />

      {/* FAQ — split with visual */}
      <section className="bs-section relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#FF6B2C]/6 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">FAQ</span>
              <h2 className="bs-section-title mt-2">{faqs.title}</h2>
              <div className="bs-faq-visual relative mt-8 overflow-hidden rounded-3xl border border-[#111]/6 shadow-[0_24px_64px_rgba(17,17,17,0.08)]">
                <img
                  src="/images/digital-marketing/seo.jpg"
                  alt="Digital marketing insights"
                  className="h-56 w-full object-cover sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/70 to-transparent" />
                <motion.div
                  className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/30 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <HelpCircle className="h-8 w-8 text-[#FF6B2C]" />
                  <div>
                    <p className="text-sm font-extrabold text-[#111]">Got questions?</p>
                    <p className="text-xs text-[#666]">We&apos;re here to help</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <div className="mt-2">
              <FAQAccordion items={faqs.items} dark={false} variant="premium" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — layered finale */}
      <section className="bs-section pb-20 pt-8">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bs-cta-card relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-16"
          >
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#FF6B2C]/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
              <img
                src="/images/digital-marketing/social-media-marketing.jpg"
                alt=""
                className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-overlay"
                aria-hidden
              />
            </div>
            <div className="relative text-center">
              <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/75">{cta.description}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <Link href="/book-consultation/">
                    {cta.primaryLabel}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                  asChild
                >
                  <Link href="/#assessment">{cta.secondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
