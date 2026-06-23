"use client";

import {
  ClipboardList,
  Cog,
  Lightbulb,
  Search,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ProcessStep = {
  number: string;
  title: string;
  shortLabel: string;
  description: string;
};

const STEP_STYLES = [
  {
    color: "#34C759",
    badgeBg: "#22C55E",
    badgeText: "#FFFFFF",
    shadow: "0 24px 56px rgba(52, 199, 89, 0.32), 0 8px 20px rgba(52, 199, 89, 0.18)",
    hoverShadow: "0 32px 72px rgba(52, 199, 89, 0.42), 0 12px 28px rgba(52, 199, 89, 0.24)",
    icons: [Search, ClipboardList] as LucideIcon[],
  },
  {
    color: "#FFC857",
    badgeBg: "#FF9500",
    badgeText: "#FFFFFF",
    shadow: "0 24px 56px rgba(255, 200, 87, 0.36), 0 8px 20px rgba(255, 149, 0, 0.2)",
    hoverShadow: "0 32px 72px rgba(255, 200, 87, 0.46), 0 12px 28px rgba(255, 149, 0, 0.28)",
    icons: [Lightbulb] as LucideIcon[],
  },
  {
    color: "#4A86F7",
    badgeBg: "#2563EB",
    badgeText: "#FFFFFF",
    shadow: "0 24px 56px rgba(74, 134, 247, 0.32), 0 8px 20px rgba(74, 134, 247, 0.18)",
    hoverShadow: "0 32px 72px rgba(74, 134, 247, 0.42), 0 12px 28px rgba(74, 134, 247, 0.24)",
    icons: [Cog] as LucideIcon[],
  },
  {
    color: "#111111",
    badgeBg: "#0F172A",
    badgeText: "#FFFFFF",
    shadow: "0 24px 56px rgba(17, 17, 17, 0.28), 0 8px 20px rgba(0, 0, 0, 0.16)",
    hoverShadow: "0 32px 72px rgba(17, 17, 17, 0.38), 0 12px 28px rgba(0, 0, 0, 0.22)",
    icons: [TrendingUp] as LucideIcon[],
  },
] as const;

const STEP_OFFSETS = [36, -36, 36, -36] as const;

function StepIcons({ icons }: { icons: readonly LucideIcon[] }) {
  if (icons.length === 1) {
    const Icon = icons[0];
    return (
      <motion.span
        className="dm-process-timeline__icon-inner"
        whileHover={{ rotate: 8 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
      >
        <Icon className="dm-process-timeline__icon" strokeWidth={1.65} />
      </motion.span>
    );
  }

  const [Primary, Secondary] = icons;
  return (
    <motion.span
      className="dm-process-timeline__icon-inner dm-process-timeline__icon-inner--dual"
      whileHover={{ rotate: 6 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
    >
      <Primary className="dm-process-timeline__icon dm-process-timeline__icon--primary" strokeWidth={1.65} />
      <Secondary className="dm-process-timeline__icon dm-process-timeline__icon--secondary" strokeWidth={1.65} />
    </motion.span>
  );
}

function WaveConnector({ active }: { active: boolean }) {
  return (
    <svg
      className="dm-process-timeline__connector pointer-events-none absolute left-0 right-0 z-0 hidden w-full lg:block"
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M 40 78 C 180 118, 260 38, 400 78 S 640 38, 800 78 S 980 118, 1160 78"
        fill="none"
        stroke="#94A3B8"
        strokeWidth="2.5"
        strokeDasharray="7 11"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
    </svg>
  );
}

function ProcessStepNode({ step, index }: { step: ProcessStep; index: number }) {
  const style = STEP_STYLES[index] ?? STEP_STYLES[0];
  const yOffset = STEP_OFFSETS[index] ?? 0;

  return (
    <motion.article
      className="dm-process-timeline__step group relative z-10 flex w-[280px] shrink-0 snap-center flex-col items-center text-center lg:w-auto lg:flex-1"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="dm-process-timeline__visual" style={{ transform: `translateY(${yOffset}px)` }}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          whileHover={{ scale: 1.04 }}
        >
          <div className="dm-process-timeline__circle-wrap relative">
          <span
            className="dm-process-timeline__badge"
            style={{
              backgroundColor: style.badgeBg,
              color: style.badgeText,
            }}
          >
            {step.number}
          </span>

          <div
            className="dm-process-timeline__circle relative z-10"
            style={{
              backgroundColor: style.color,
              boxShadow: style.shadow,
              ["--process-hover-shadow" as string]: style.hoverShadow,
            }}
          >
            <StepIcons icons={style.icons} />
          </div>
          </div>
        </motion.div>
      </div>

      <p className="dm-process-timeline__label" style={{ marginTop: yOffset > 0 ? "2rem" : "2.75rem" }}>
        {step.number}. {step.shortLabel}
      </p>
      <h3 className="dm-process-timeline__title">{step.title}</h3>
      <p className="dm-process-timeline__desc">{step.description}</p>
    </motion.article>
  );
}

export function DmProcessSection({
  title,
  steps,
}: {
  title: string;
  steps: readonly ProcessStep[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const connectorActive = useInView(trackRef, { once: true, margin: "-80px" });

  return (
    <section
      id="dm-process"
      className="dm-process-timeline dm-section dm-section--white relative overflow-hidden bg-white"
      aria-labelledby="dm-process-heading"
    >
      <div className="dm-container relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="dm-process-heading" className="dm-heading dm-heading--2xl text-[#0A0F1C]">
            {title}
          </h2>
        </motion.div>

        <div ref={trackRef} className="dm-process-timeline__track relative mt-14 lg:mt-16">
          <WaveConnector active={connectorActive} />

          <div className="dm-process-timeline__row relative z-10 hidden lg:flex">
            {steps.map((step, index) => (
              <ProcessStepNode key={step.number} step={step} index={index} />
            ))}
          </div>

          <div className="dm-process-scroll -mx-4 flex justify-start gap-10 overflow-x-auto px-4 pb-8 pt-4 snap-x snap-mandatory lg:hidden">
            {steps.map((step, index) => (
              <ProcessStepNode key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
