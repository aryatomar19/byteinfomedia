"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { esteemedClients } from "@/data/esteemed-clients";
import { digitalMarketingPage } from "@/data/digital-marketing";
import { BrandingFeaturedStory } from "@/components/branding/BrandingFeaturedStory";
import { BrandingFinalCta } from "@/components/branding/BrandingFinalCta";
import { BrandingFaqVisual } from "@/components/branding/BrandingFaqVisual";
import { BrandingHeroEcosystem } from "@/components/branding/BrandingHeroEcosystem";
import { BrandingMetricsSection } from "@/components/branding/BrandingMetricsSection";
import { BrandingPageAmbient } from "@/components/branding/BrandingPageAmbient";
import { BrandingProcessTimeline } from "@/components/branding/BrandingProcessTimeline";
import { BrandingSectionDivider } from "@/components/branding/BrandingSectionDivider";
import { BrandingServicePanels } from "@/components/branding/BrandingServicePanels";
import { BrandingTestimonialCarousel } from "@/components/branding/BrandingTestimonialCarousel";
import { BrandingWhySection } from "@/components/branding/BrandingWhySection";
import { FAQAccordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function DigitalMarketingPage() {
  const { hero, services, whyByte, metrics, process, featuredStory, testimonials, faqs, cta } =
    digitalMarketingPage;

  return (
    <div className="bs-premium relative overflow-hidden bg-[#FAFAFA]">
      <BrandingPageAmbient />

      {/* Section 1 — Full screen hero */}
      <section className="bs-hero-section relative flex min-h-screen items-center">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(255,107,44,0.1),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA]/95 to-[#FAFAFA]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/25 bg-white/90 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#FF6B2C] shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                {hero.badge}
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] text-[#111] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
                {hero.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-[#666]">{hero.description}</p>
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
              <div className="mt-8 flex flex-wrap items-center gap-5 opacity-70 grayscale transition hover:grayscale-0">
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
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="relative lg:-mr-6"
            >
              <BrandingHeroEcosystem />
            </motion.div>
          </div>
        </div>

        <BrandingSectionDivider variant="curve" className="bs-divider--hero text-[#FAFAFA]" />
      </section>

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
  );
}
