"use client";

import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { DmNumberedFaq } from "@/components/digital-marketing/DmNumberedFaq";

export function DmFaqSection({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow: string;
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <section
      id="dm-faq"
      className="dm-section dm-section--xl dm-faq-section relative overflow-hidden"
      style={{ background: "#050B24" }}
      aria-labelledby="dm-faq-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,44,0.06),transparent_55%)]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{eyebrow}</span>
          <h2 id="dm-faq-heading" className="dm-heading dm-heading--xl mt-4 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <DmGsapReveal y={32} className="mx-auto max-w-3xl">
          <DmNumberedFaq items={items} />
        </DmGsapReveal>
      </div>
    </section>
  );
}
