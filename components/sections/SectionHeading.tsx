"use client";

import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = true }: SectionHeadingProps) {
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{eyebrow}</p>
      <h2 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-base leading-7 text-[#334155]">{description}</p> : null}
    </Reveal>
  );
}
