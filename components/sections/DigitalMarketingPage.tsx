"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { esteemedClients } from "@/data/esteemed-clients";
import { digitalMarketingPage } from "@/data/digital-marketing";
import { BrandingHeroVisual } from "@/components/branding/BrandingHeroVisual";
import { BrandingServiceCard } from "@/components/branding/BrandingServiceCard";
import { BrandingTestimonialSlider } from "@/components/branding/BrandingTestimonialSlider";
import { BrandingWhySection } from "@/components/branding/BrandingWhySection";
import { AnimatedMetric } from "@/components/motion/AnimatedMetric";
import { FAQAccordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useTilt } from "@/lib/use-tilt";

function CaseStudyCard({
  title,
  description,
  image,
  imageAlt,
  index,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  index: number;
}) {
  const { ref, onMove, onLeave } = useTilt({ max: 8, scale: 1.02 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="bs-case-card group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-[#111]/20 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-extrabold text-[#111]">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-7 text-[#666]">{description}</p>
          <Link
            href="/book-consultation/"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C]"
          >
            View Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function DigitalMarketingPage() {
  const { hero, services, metrics, whyByte, caseStudies, testimonials, faqs, cta } = digitalMarketingPage;

  return (
    <div className="bs-premium relative overflow-hidden bg-[#FAFAFA]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="bs-blob bs-blob--1" />
        <div className="bs-blob bs-blob--2" />
      </div>

      {/* Hero */}
      <section className="bs-section relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/25 bg-white px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#FF6B2C] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.badge}
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] text-[#111] sm:text-5xl lg:text-[3.15rem]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-[#666] sm:text-lg">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">{hero.primaryCta}</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="#bs-services">{hero.secondaryCta}</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {hero.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#111]/8 bg-white px-3 py-1.5 text-xs font-semibold text-[#666] shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 opacity-70 grayscale transition hover:grayscale-0">
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
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative"
          >
            <BrandingHeroVisual />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="bs-services" className="bs-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="bs-section-title">{services.title}</h2>
            <p className="mt-3 text-base text-[#666]">{services.subtitle}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.items.map((item, index) => (
              <BrandingServiceCard key={item.id} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bs-stats-strip">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="bs-stat-item text-center">
              <AnimatedMetric
                value={metric.value}
                display={"display" in metric ? metric.display : undefined}
                suffix={"suffix" in metric ? metric.suffix : undefined}
                label={metric.label}
                variant="dark"
              />
            </div>
          ))}
        </div>
      </section>

      <BrandingWhySection title={whyByte.title} features={whyByte.features} />

      {/* Case Studies */}
      <section className="bs-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="bs-section-title text-center">{caseStudies.title}</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.items.map((item, index) => (
              <CaseStudyCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bs-section bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="bs-section-title text-center">{testimonials.title}</h2>
          <div className="mt-10">
            <BrandingTestimonialSlider items={testimonials.items} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bs-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="bs-section-title text-center">{faqs.title}</h2>
          <div className="mt-10">
            <FAQAccordion items={faqs.items} dark={false} variant="premium" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bs-section pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="bs-cta-card rounded-3xl px-6 py-14 sm:px-12">
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/75">{cta.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">{cta.primaryLabel}</Link>
              </Button>
              <Button variant="secondary" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20" asChild>
                <Link href="/#assessment">{cta.secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
