"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { esteemedClients } from "@/data/esteemed-clients";
import { digitalMarketingPage } from "@/data/digital-marketing";
import { motion } from "framer-motion";
import { BrandingFeaturedStory } from "@/components/branding/BrandingFeaturedStory";
import { BrandingFinalCta } from "@/components/branding/BrandingFinalCta";
import { BrandingFaqVisual } from "@/components/branding/BrandingFaqVisual";
import { BrandingMetricsSection } from "@/components/branding/BrandingMetricsSection";
import { BrandingPageAmbient } from "@/components/branding/BrandingPageAmbient";
import { BrandingProcessTimeline } from "@/components/branding/BrandingProcessTimeline";
import { BrandingSectionDivider } from "@/components/branding/BrandingSectionDivider";
import { BrandingServicePanels } from "@/components/branding/BrandingServicePanels";
import { BrandingTestimonialCarousel } from "@/components/branding/BrandingTestimonialCarousel";
import { BrandingWhySection } from "@/components/branding/BrandingWhySection";
import { HeroBrandingScene } from "@/components/visuals/HeroBrandingScene";
import { FAQAccordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

export function DigitalMarketingPage() {
  const { hero, services, whyByte, metrics, process, featuredStory, testimonials, faqs, cta } =
    digitalMarketingPage;

  return (
    <div className="bs-premium relative overflow-hidden">
      {/* Hero — dark cinematic banner (matches Cloud Services quality) */}
      <section className="relative min-h-[70vh] max-h-[85vh] overflow-hidden mesh-hero">
        <div className="absolute inset-0 grid-pattern-light opacity-30" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(255,107,44,0.12),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/85 to-[#0A0F1C]/40"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[70vh] max-h-[85vh] max-w-7xl items-center px-4 py-10 hero-service sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="relative z-10 max-w-xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088]">
                <Sparkles className="h-3.5 w-3.5" />
                {hero.badge}
              </span>
              <h1 className="mt-5 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.15rem]">
                {hero.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-4 max-w-md text-base leading-7 text-white/75 sm:text-lg">{hero.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/book-consultation/">{hero.primaryCta}</Link>
                </Button>
                <Button variant="dark" size="lg" className={darkHeroSecondaryButtonClass} asChild>
                  <Link href="#bs-services" className="!text-white hover:!text-white">
                    {hero.secondaryCta}
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5 opacity-80 grayscale transition hover:grayscale-0">
                {esteemedClients.slice(0, 5).map((client) => (
                  <img
                    key={client.name}
                    src={client.logo}
                    alt={client.logoAlt}
                    className="h-7 w-auto max-w-[5.5rem] brightness-0 invert object-contain"
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative w-full"
            >
              <HeroBrandingScene />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative bg-[#FAFAFA]">
        <BrandingPageAmbient />

      <BrandingSectionDivider variant="curve" className="text-[#FAFAFA]" />

      {/* Section 2 — Services */}
      <BrandingServicePanels title={services.title} subtitle={services.subtitle} items={services.items} />

      <BrandingSectionDivider variant="slant" flip className="text-white" />

      {/* Section 3 — Why Byte */}
      <BrandingWhySection
        title={whyByte.title}
        image={whyByte.image}
        imageAlt={whyByte.imageAlt}
        features={whyByte.features}
      />

      <BrandingSectionDivider variant="wave" className="text-[#111]" />

      {/* Section 4 — Metrics */}
      <BrandingMetricsSection metrics={metrics} />

      <BrandingSectionDivider variant="wave" flip className="text-[#FAFAFA]" />

      {/* Section 5 — Process */}
      <BrandingProcessTimeline title={process.title} steps={process.steps} />

      <BrandingSectionDivider variant="notch" className="text-[#FAFAFA]" />

      {/* Section 6 — Featured story */}
      <BrandingFeaturedStory {...featuredStory} />

      {/* Section 7 — Testimonials */}
      <BrandingTestimonialCarousel title={testimonials.title} items={testimonials.items} />

      {/* Section 8 — FAQ */}
      <section className="bs-section relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[#FF6B2C]/5 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">FAQ</span>
              <h2 className="bs-section-title mt-2">{faqs.title}</h2>
              <div className="mt-8">
                <BrandingFaqVisual />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-12"
            >
              <FAQAccordion items={faqs.items} dark={false} variant="premium" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9 — CTA */}
      <BrandingFinalCta title={cta.title} description={cta.description} primaryLabel={cta.primaryLabel} />
      </div>
    </div>
  );
}
