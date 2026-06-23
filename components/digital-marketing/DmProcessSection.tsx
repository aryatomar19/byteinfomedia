"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Check,
  Megaphone,
  Rocket,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
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

function CurvedConnector() {
  return (
    <svg
      className="dm-process-connector pointer-events-none absolute left-[6%] right-[6%] top-[4.75rem] hidden h-20 w-[88%] lg:block"
      viewBox="0 0 1000 72"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M 48 44 Q 260 8, 500 40 T 952 44"
        fill="none"
        stroke="rgba(255,107,53,0.28)"
        strokeWidth="2"
        strokeDasharray="6 10"
        strokeLinecap="round"
      />
      <motion.circle
        r="4"
        fill="#FF6B35"
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ offsetPath: "path('M 48 44 Q 260 8, 500 40 T 952 44')" }}
      />
    </svg>
  );
}

function ProcessMilestone({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = stepIcons[index] ?? Search;

  return (
    <DmGsapReveal delay={index * 0.1} y={36} className="relative z-10 flex shrink-0 snap-center flex-col items-center">
      <motion.article
        className="dm-process-milestone dm-process-milestone--light group flex w-[260px] flex-col items-center text-center sm:w-[280px] lg:w-auto lg:max-w-[220px] xl:max-w-[250px]"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 360, damping: 26 }}
      >
        <span className="dm-process-badge absolute -top-1 z-20 rounded-full bg-[#FF6B35] px-3 py-1 text-[0.65rem] font-extrabold tracking-wider text-white shadow-[0_8px_24px_rgba(255,107,53,0.35)]">
          {step.number}
        </span>

        <div className="relative mt-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/5 p-1 sm:h-36 sm:w-36">
          <div className="dm-process-milestone__circle flex h-full w-full items-center justify-center rounded-full border border-[#FF6B35]/15 bg-white shadow-[0_16px_48px_rgba(10,15,28,0.08)] transition-shadow duration-500 group-hover:shadow-[0_20px_56px_rgba(255,107,53,0.18)]">
            <Icon className="h-10 w-10 text-[#FF6B35] sm:h-11 sm:w-11" strokeWidth={1.75} />
          </div>
        </div>

        <h3 className="mt-8 text-lg font-extrabold text-[#0A0F1C] sm:text-xl">{step.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#0A0F1C]/60">{step.description}</p>
      </motion.article>
    </DmGsapReveal>
  );
}

function FeatureBar({ features }: { features: readonly ProcessFeature[] }) {
  return (
    <DmGsapReveal y={40} className="mt-16 lg:mt-20">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {features.map((feature) => {
          const Icon = featureIcons[feature.icon];
          return (
            <motion.div
              key={feature.title}
              className="dm-process-feature-card group rounded-2xl border border-[#0A0F1C]/8 bg-white p-6 shadow-[0_12px_40px_rgba(10,15,28,0.06)]"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6B35]/10">
                <Icon className="h-5 w-5 text-[#FF6B35]" />
              </span>
              <div className="mt-4 flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6B35]" strokeWidth={3} />
                <div>
                  <h4 className="text-base font-extrabold text-[#0A0F1C]">{feature.title}</h4>
                  <p className="mt-1.5 text-sm leading-6 text-[#0A0F1C]/55">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
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
      className="dm-process-premium dm-process-premium--light dm-section dm-section--xl dm-section--white relative w-full overflow-hidden bg-white"
      aria-labelledby="dm-process-heading"
    >
      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-4xl text-center lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#FF6B35]">{eyebrow}</span>
          <h2 id="dm-process-heading" className="dm-heading dm-heading--xl mt-5 text-[#0A0F1C]">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="relative">
          <CurvedConnector />

          <div className="relative hidden items-start justify-between gap-4 lg:flex">
            {steps.map((step, index) => (
              <ProcessMilestone key={step.number} step={step} index={index} />
            ))}
          </div>

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
