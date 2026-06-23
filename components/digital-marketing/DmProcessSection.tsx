"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Megaphone,
  Rocket,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

type GlowColor = "green" | "orange" | "blue";

type ProcessStep = {
  number: string;
  title: string;
  items: readonly string[];
  glow: GlowColor;
};

type ProcessFeature = {
  icon: "target" | "chart" | "trending" | "rocket";
  title: string;
  description: string;
};

const stepIcons: LucideIcon[] = [Search, Target, Megaphone, TrendingUp];

const featureIcons: Record<ProcessFeature["icon"], LucideIcon> = {
  target: Target,
  chart: BarChart3,
  trending: TrendingUp,
  rocket: Rocket,
};

const glowStyles: Record<GlowColor, { ring: string; badge: string; shadow: string }> = {
  green: {
    ring: "from-[#22C55E]/50 to-[#22C55E]/10",
    badge: "bg-[#22C55E] shadow-[0_0_20px_rgba(34,197,94,0.5)]",
    shadow: "shadow-[0_0_48px_rgba(34,197,94,0.35)]",
  },
  orange: {
    ring: "from-[#FF6B2C]/55 to-[#FF6B2C]/10",
    badge: "bg-[#FF6B2C] shadow-[0_0_20px_rgba(255,107,44,0.5)]",
    shadow: "shadow-[0_0_48px_rgba(255,107,44,0.4)]",
  },
  blue: {
    ring: "from-[#3B82F6]/50 to-[#3B82F6]/10",
    badge: "bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    shadow: "shadow-[0_0_48px_rgba(59,130,246,0.35)]",
  },
};

function WorldMapPattern() {
  return (
    <svg
      className="dm-process-worldmap pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <ellipse cx="600" cy="300" rx="520" ry="260" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
      <path
        d="M200 280 Q280 200 380 240 T520 220 T680 260 T900 240 T1000 300"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <path
        d="M180 360 Q320 320 460 350 T720 330 T980 370"
        fill="none"
        stroke="white"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle cx="320" cy="260" r="40" fill="white" opacity="0.08" />
      <circle cx="580" cy="240" r="55" fill="white" opacity="0.06" />
      <circle cx="820" cy="280" r="45" fill="white" opacity="0.07" />
      <circle cx="450" cy="340" r="35" fill="white" opacity="0.05" />
    </svg>
  );
}

function CurvedConnector() {
  return (
    <svg
      className="dm-process-connector pointer-events-none absolute left-[8%] right-[8%] top-[4.5rem] hidden h-24 w-[84%] lg:block xl:top-[5rem]"
      viewBox="0 0 1000 80"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        id="dm-process-path"
        d="M 40 50 Q 250 10, 500 45 T 960 50"
        fill="none"
        stroke="rgba(255,107,44,0.25)"
        strokeWidth="2"
        strokeDasharray="6 10"
        strokeLinecap="round"
      />
      <motion.circle
        r="5"
        fill="#FF6B2C"
        filter="url(#glow)"
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          offsetPath: "path('M 40 50 Q 250 10, 500 45 T 960 50')",
        }}
      />
      <polygon points="968,50 958,45 958,55" fill="#FF6B2C" opacity="0.8" />
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

function ProcessMilestone({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = stepIcons[index] ?? Search;
  const glow = glowStyles[step.glow];

  return (
    <DmGsapReveal delay={index * 0.1} y={40} className="relative z-10 flex shrink-0 snap-center flex-col items-center">
      <motion.article
        className="dm-process-milestone group flex w-[260px] flex-col items-center text-center sm:w-[280px] lg:w-auto lg:max-w-[220px] xl:max-w-[240px]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
        whileHover={{ scale: 1.06, y: -12 }}
      >
        <span
          className={`absolute -top-1 z-20 rounded-full px-3 py-1 text-[0.65rem] font-extrabold tracking-wider text-white ${glow.badge}`}
        >
          {step.number}
        </span>

        <div className={`relative mt-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br p-1 sm:h-36 sm:w-36 ${glow.ring}`}>
          <div
            className={`flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-white ${glow.shadow} transition-shadow duration-500 group-hover:shadow-[0_0_56px_rgba(255,107,44,0.45)]`}
          >
            <Icon
              className={`h-10 w-10 sm:h-11 sm:w-11 ${
                step.glow === "green"
                  ? "text-[#22C55E]"
                  : step.glow === "blue"
                    ? "text-[#3B82F6]"
                    : "text-[#FF6B2C]"
              }`}
              strokeWidth={1.75}
            />
          </div>
        </div>

        <h3 className="mt-8 text-lg font-extrabold text-white sm:text-xl">{step.title}</h3>
        <ul className="mt-4 space-y-2">
          {step.items.map((item) => (
            <li key={item} className="text-sm text-white/55">
              {item}
            </li>
          ))}
        </ul>
      </motion.article>
    </DmGsapReveal>
  );
}

function FeatureBar({ features }: { features: readonly ProcessFeature[] }) {
  return (
    <DmGsapReveal y={48} className="mt-20 lg:mt-24">
      <div className="dm-process-features rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon];
            return (
              <motion.div
                key={feature.title}
                className="group text-center lg:text-left"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FF6B2C]/20 bg-[#FF6B2C]/10 lg:mx-0">
                  <Icon className="h-5 w-5 text-[#FF6B2C]" />
                </span>
                <h4 className="mt-4 text-base font-extrabold text-white">{feature.title}</h4>
                <p className="mt-2 text-sm leading-6 text-white/50">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </DmGsapReveal>
  );
}

export function DmProcessSection({
  eyebrow,
  title,
  steps,
  features,
}: {
  eyebrow: string;
  title: string;
  steps: readonly ProcessStep[];
  features: readonly ProcessFeature[];
}) {
  return (
    <section
      id="dm-process"
      className="dm-process-premium dm-section dm-section--2xl relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020B2D 0%, #061547 50%, #020B2D 100%)" }}
      aria-labelledby="dm-process-heading"
    >
      <WorldMapPattern />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,44,0.1),transparent_55%)]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-16 max-w-4xl text-center lg:mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#FF6B2C]">{eyebrow}</span>
          <h2 id="dm-process-heading" className="dm-heading dm-heading--2xl mt-5 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="relative">
          <CurvedConnector />

          {/* Desktop */}
          <div className="relative hidden items-start justify-between gap-4 lg:flex">
            {steps.map((step, index) => (
              <ProcessMilestone key={step.number} step={step} index={index} />
            ))}
          </div>

          {/* Mobile scroll */}
          <div className="dm-process-scroll -mx-4 flex gap-8 overflow-x-auto px-4 pb-6 snap-x snap-mandatory lg:hidden">
            {steps.map((step, index) => (
              <ProcessMilestone key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        <FeatureBar features={features} />
      </div>
    </section>
  );
}
