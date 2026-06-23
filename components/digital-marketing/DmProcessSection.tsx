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
    shadow: "0 20px 48px rgba(52, 199, 89, 0.28)",
    hoverShadow: "0 28px 64px rgba(52, 199, 89, 0.38)",
    icons: [Search, ClipboardList] as LucideIcon[],
  },
  {
    color: "#FFC857",
    shadow: "0 20px 48px rgba(255, 200, 87, 0.32)",
    hoverShadow: "0 28px 64px rgba(255, 200, 87, 0.42)",
    icons: [Lightbulb] as LucideIcon[],
  },
  {
    color: "#4A86F7",
    shadow: "0 20px 48px rgba(74, 134, 247, 0.28)",
    hoverShadow: "0 28px 64px rgba(74, 134, 247, 0.38)",
    icons: [Cog] as LucideIcon[],
  },
  {
    color: "#111111",
    shadow: "0 20px 48px rgba(17, 17, 17, 0.22)",
    hoverShadow: "0 28px 64px rgba(17, 17, 17, 0.32)",
    icons: [TrendingUp] as LucideIcon[],
  },
] as const;

function StepIcons({ icons }: { icons: readonly LucideIcon[] }) {
  if (icons.length === 1) {
    const Icon = icons[0];
    return (
      <motion.span
        className="dm-process-timeline__icon-inner"
        whileHover={{ rotate: 8 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
      >
        <Icon className="h-14 w-14 text-white sm:h-16 sm:w-16" strokeWidth={1.75} />
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
      <Primary className="h-11 w-11 text-white sm:h-12 sm:w-12" strokeWidth={1.75} />
      <Secondary className="h-9 w-9 text-white/90 sm:h-10 sm:w-10" strokeWidth={1.75} />
    </motion.span>
  );
}

function CurvedConnector({ active }: { active: boolean }) {
  return (
    <svg
      className="dm-process-timeline__connector pointer-events-none absolute left-[6%] right-[6%] top-[5.5rem] z-0 hidden h-20 w-[88%] lg:block xl:top-[6rem]"
      viewBox="0 0 1000 72"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M 40 50 Q 250 8, 500 44 T 960 50"
        fill="none"
        stroke="#CBD5E1"
        strokeWidth="2"
        strokeDasharray="6 10"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
    </svg>
  );
}

function ProcessStepNode({ step, index }: { step: ProcessStep; index: number }) {
  const style = STEP_STYLES[index] ?? STEP_STYLES[0];

  return (
    <motion.article
      className="dm-process-timeline__step group relative z-10 flex w-[220px] shrink-0 snap-center flex-col items-center text-center lg:w-auto lg:flex-1"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="dm-process-timeline__visual"
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.45,
        }}
        whileHover={{ scale: 1.06, y: -4 }}
      >
        <div
          className="dm-process-timeline__circle"
          style={{
            backgroundColor: style.color,
            boxShadow: style.shadow,
            ["--process-hover-shadow" as string]: style.hoverShadow,
          }}
        >
          <StepIcons icons={style.icons} />
        </div>
      </motion.div>

      <p className="dm-process-timeline__label">
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

        <div ref={trackRef} className="dm-process-timeline__track relative mt-12 lg:mt-16">
          <CurvedConnector active={connectorActive} />

          <div className="relative hidden items-start justify-between gap-8 lg:flex xl:gap-12">
            {steps.map((step, index) => (
              <ProcessStepNode key={step.number} step={step} index={index} />
            ))}
          </div>

          <div className="dm-process-scroll -mx-4 flex justify-start gap-8 overflow-x-auto px-4 pb-6 pt-2 snap-x snap-mandatory lg:hidden">
            {steps.map((step, index) => (
              <ProcessStepNode key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
