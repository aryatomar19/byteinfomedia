"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Headphones,
  LineChart,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

const icons: LucideIcon[] = [Headphones, BarChart3, Rocket, LineChart, Target, TrendingUp];

type BentoCard = {
  title: string;
  description: string;
  size: "small" | "medium" | "large" | "full";
};

const sizeClasses: Record<BentoCard["size"], string> = {
  small: "sm:col-span-1 lg:col-span-2",
  medium: "sm:col-span-1 lg:col-span-3",
  large: "sm:col-span-2 lg:col-span-3",
  full: "sm:col-span-2 lg:col-span-6",
};

function BentoItem({ card, index }: { card: BentoCard; index: number }) {
  const Icon = icons[index] ?? Target;

  return (
    <DmGsapReveal delay={index * 0.07} y={32} className={`h-full ${sizeClasses[card.size]}`}>
      <motion.article
        className="dm-bento-card group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-7"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 360, damping: 26 }}
      >
        <span
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FF6B2C]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "radial-gradient(ellipse at 0% 0%, rgba(255,107,44,0.1), transparent 60%)",
          }}
          aria-hidden
        />

        <span className="dm-bento-icon relative z-10 flex h-11 w-11 items-center justify-center rounded-xl">
          <Icon className="h-5 w-5 text-[#FF6B2C]" strokeWidth={2} />
        </span>

        <div className="relative z-10 mt-6">
          <h3 className="text-lg font-extrabold text-white sm:text-xl">{card.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/55">{card.description}</p>
        </div>

        <motion.span
          className="pointer-events-none absolute bottom-4 right-4 h-2 w-2 rounded-full bg-[#FF6B2C]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
          aria-hidden
        />
      </motion.article>
    </DmGsapReveal>
  );
}

export function DmClientsBento({
  title,
  eyebrow,
  cards,
}: {
  title: string;
  eyebrow: string;
  cards: readonly BentoCard[];
}) {
  return (
    <section
      className="dm-section dm-bento-section relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050B1F 0%, #0A0F1C 100%)" }}
      aria-labelledby="dm-bento-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,107,44,0.07),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.04]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <span className="dm-eyebrow dm-eyebrow--light">{eyebrow}</span>
          <h2 id="dm-bento-heading" className="dm-heading mt-3 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="dm-bento-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {cards.map((card, index) => (
            <BentoItem key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
