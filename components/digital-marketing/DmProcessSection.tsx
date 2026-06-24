"use client";

import {
  ClipboardList,
  Cog,
  Lightbulb,
  Search,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type ProcessStep = {
  number: string;
  title: string;
  shortLabel: string;
  description: string;
};

const STEP_ICONS = [
  [Search, ClipboardList] as LucideIcon[],
  [Lightbulb] as LucideIcon[],
  [Cog] as LucideIcon[],
  [TrendingUp] as LucideIcon[],
] as const;

const STEP_OFFSETS = [24, -24, 24, -24] as const;

function StepIcons({ icons }: { icons: readonly LucideIcon[] }) {
  if (icons.length === 1) {
    const Icon = icons[0];
    return (
      <span className="dm-process-timeline__icon-inner">
        <Icon className="dm-process-timeline__icon" strokeWidth={1.65} />
      </span>
    );
  }

  const [Primary, Secondary] = icons;
  return (
    <span className="dm-process-timeline__icon-inner dm-process-timeline__icon-inner--dual">
      <Primary className="dm-process-timeline__icon dm-process-timeline__icon--primary" strokeWidth={1.65} />
      <Secondary className="dm-process-timeline__icon dm-process-timeline__icon--secondary" strokeWidth={1.65} />
    </span>
  );
}

function WaveConnector() {
  return (
    <svg
      className="dm-process-timeline__connector pointer-events-none absolute left-0 right-0 z-0 hidden w-full lg:block"
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M 60 88 C 185 114, 315 5, 450 86 C 595 114, 725 5, 820 86 C 955 114, 1005 5, 1140 86"
        fill="none"
        stroke="#94A3B8"
        strokeWidth="2.5"
        strokeDasharray="7 11"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProcessStepNode({ step, index }: { step: ProcessStep; index: number }) {
  const icons = STEP_ICONS[index] ?? STEP_ICONS[0];
  const yOffset = STEP_OFFSETS[index] ?? 0;

  return (
    <article className="dm-process-timeline__step group relative z-10 flex w-[280px] shrink-0 snap-center flex-col items-center text-center lg:w-auto lg:flex-1">
      <div className="dm-process-timeline__visual" style={{ transform: `translateY(${yOffset}px)` }}>
        <div className="dm-process-timeline__circle-wrap relative">
          <span className="dm-process-timeline__badge">{step.number}</span>

          <div className="dm-process-timeline__circle relative z-10">
            <StepIcons icons={icons} />
          </div>
        </div>
      </div>

      <div className="dm-process-timeline__copy">
        <p className="dm-process-timeline__label">
          {step.number}. {step.shortLabel}
        </p>
        <h3 className="dm-process-timeline__title">{step.title}</h3>
        <p className="dm-process-timeline__desc">{step.description}</p>
      </div>
    </article>
  );
}

export function DmProcessSection({
  title,
  steps,
}: {
  title: string;
  steps: readonly ProcessStep[];
}) {
  return (
    <section
      id="dm-process"
      className="dm-process-timeline dm-section dm-section--white relative overflow-visible bg-white"
      aria-labelledby="dm-process-heading"
    >
      <div className="dm-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="dm-process-heading" className="dm-heading dm-heading--2xl text-[#0A0F1C]">
            {title}
          </h2>
        </div>

        <div className="dm-process-timeline__track relative mt-8 lg:mt-10">
          <WaveConnector />

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
