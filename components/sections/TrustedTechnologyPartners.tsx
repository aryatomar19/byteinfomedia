"use client";

import { partnersSection, technologyPartners } from "@/data/home";
import { RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function TrustedTechnologyPartners() {
  return (
    <section className="bg-[#F7F8FA] py-20 md:py-24 lg:py-[7.5rem]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title={partnersSection.title}
          description={partnersSection.subtitle}
        />

        <RevealStagger className="section-cards grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologyPartners.map((partner) => (
            <RevealItem key={partner.name}>
              <div className="enterprise-card group flex h-[7.5rem] items-center justify-center rounded-2xl px-6 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(10,15,28,0.1)]">
                <img
                  src={partner.logo}
                  alt={partner.logoAlt}
                  className="max-h-11 w-full max-w-[9.5rem] object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
