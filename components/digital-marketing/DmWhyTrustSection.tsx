"use client";

import { Check } from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { DmNumberedFaq } from "@/components/digital-marketing/DmNumberedFaq";
import { DmWhyScene } from "@/components/digital-marketing/DmWhyScene";

type WhyByteContent = {
  eyebrow: string;
  title: string;
  description: string;
  imageAlt: string;
  trustIndicators: readonly string[];
  highlightStats: readonly { value: string; label: string }[];
  faqs: readonly { question: string; answer: string }[];
};

export function DmWhyTrustSection({
  eyebrow,
  title,
  description,
  imageAlt,
  trustIndicators,
  highlightStats,
  faqs,
}: WhyByteContent) {
  return (
    <section
      id="dm-why"
      className="dm-section dm-why-trust relative overflow-hidden"
      style={{ background: "#050B24" }}
      aria-labelledby="dm-why-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(255,107,44,0.07),transparent_50%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.04]" aria-hidden />

      <div className="dm-container relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <DmGsapReveal y={40}>
            <DmWhyScene imageAlt={imageAlt} />
          </DmGsapReveal>

          <div>
            <DmGsapReveal y={32}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{eyebrow}</span>
              <h2 id="dm-why-heading" className="dm-heading mt-4 text-white lg:text-[2.75rem]">
                {title}
              </h2>
              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">{description}</p>

              <ul className="mt-8 space-y-4">
                {trustIndicators.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF6B2C]/15">
                      <Check className="h-4 w-4 text-[#FF6B2C]" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm font-semibold text-white/85 sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
                {highlightStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold text-[#FF6B2C] sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white/50 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </DmGsapReveal>

            <DmGsapReveal y={32} delay={0.12} className="mt-12">
              <DmNumberedFaq items={faqs} />
            </DmGsapReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
