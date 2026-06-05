"use client";

import { partnersSection, technologyPartners } from "@/data/home";
import { RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function TrustedTechnologyPartners() {
  return (
    <section className="border-t border-[#0A0F1C]/6 bg-[#F7F8FA] py-10 md:py-11 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          eyebrowVariant="about"
          title={partnersSection.title}
          description={partnersSection.subtitle}
        />

        <RevealStagger className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {technologyPartners.map((partner) => (
            <RevealItem key={partner.name}>
              <div className="enterprise-card group flex h-[8rem] items-center justify-center rounded-2xl px-5 py-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF6B2C]/20 hover:shadow-[0_20px_56px_rgba(255,107,44,0.12)]">
                {"logoClipWidth" in partner ? (
                  <div className="h-11 w-[6.65rem] overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.logoAlt}
                      className="h-11 w-auto max-w-none object-left object-contain transition duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : (
                  <img
                    src={partner.logo}
                    alt={partner.logoAlt}
                    className="max-h-11 w-full max-w-[9.5rem] object-contain object-center transition duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
