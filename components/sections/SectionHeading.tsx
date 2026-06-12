"use client";

import { Reveal } from "@/components/motion/Reveal";

const eyebrowClassNames = {
  default: "text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]",
  about: "text-[0.76rem] font-bold uppercase tracking-[0.28em] text-[#FF6B1A]",
} as const;

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  eyebrowVariant?: keyof typeof eyebrowClassNames;
  /** Tighter margin below the heading block (e.g. Our Services). */
  compact?: boolean;
  /** Minimal spacing for page headers that share a viewport with content below. */
  dense?: boolean;
  /** Remove extra top offset on the title when no eyebrow is shown. */
  flushTitle?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  eyebrowVariant = "default",
  compact = false,
  dense = false,
  flushTitle = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`${dense ? "mb-0" : compact ? "mb-2 md:mb-2.5" : "section-heading"} ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow ? <p className={eyebrowClassNames[eyebrowVariant]}>{eyebrow}</p> : null}
      <h2
        className={`${eyebrow || !flushTitle ? (dense ? "mt-0" : "mt-3") : ""} font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`${dense ? "mt-2 text-sm leading-6" : "mt-3 text-base leading-7"} text-[#334155]`}>{description}</p>
      ) : null}
    </Reveal>
  );
}
