"use client";

import { capabilityCards, whySection } from "@/data/home";
import { RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function WhyByteInfomedia() {
  return (
    <section className="bg-white py-10 md:py-11 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Enterprise Expertise" title={whySection.title} />

        <RevealStagger className="section-cards grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityCards.map((item) => (
            <RevealItem key={item.title}>
              <div className="enterprise-card group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(10,15,28,0.1)]">
                <div className="h-1 w-10 rounded-full bg-[#FF6B2C] transition-all duration-300 group-hover:w-14" />
                <h3 className="mt-5 font-extrabold text-[#0A0F1C]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#334155] line-clamp-3">{item.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
