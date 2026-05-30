"use client";

import { capabilityCards, whySection } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function WhyByteInfomedia() {
  return (
    <section className="section-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
            {whySection.title}
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityCards.map((item) => (
            <RevealItem key={item.title}>
              <div className="enterprise-card group h-full rounded-2xl p-6 transition hover:-translate-y-1">
                <div className="h-1 w-10 rounded-full bg-[#FF6B2C] transition group-hover:w-14" />
                <h3 className="mt-4 font-extrabold text-[#0A0F1C]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f6f86]">{item.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
