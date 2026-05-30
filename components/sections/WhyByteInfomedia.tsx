"use client";

import { whyChooseUs, whySection } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function WhyByteInfomedia() {
  return (
    <section className="section-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
              {whySection.title}
            </h2>
          </Reveal>
          <Reveal className="flex gap-10 sm:gap-14">
            {whySection.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-4xl font-black text-[#FF6B2C]">{m.value}</p>
                <p className="mt-1 text-sm font-bold text-[#5f6f86]">{m.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <RevealItem key={item.title}>
              <div className="enterprise-card h-full rounded-2xl p-6 transition hover:-translate-y-0.5">
                <div className="h-1 w-10 rounded-full bg-[#FF6B2C]" />
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
