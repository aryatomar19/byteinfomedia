"use client";

import { motion } from "framer-motion";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { DmProcessIllustration } from "@/components/digital-marketing/DmProcessIllustrations";

type ProcessStep = {
  step: string;
  title: string;
  items: readonly string[];
};

function WorkflowConnector() {
  return (
    <div className="dm-workflow-connector hidden shrink-0 items-center self-center pt-16 lg:flex" aria-hidden>
      <div className="h-px w-12 bg-gradient-to-r from-[#FF6B2C]/40 via-white/20 to-[#FF6B2C]/40 xl:w-16" />
      <div className="mx-1 h-2 w-2 rotate-45 border-r border-t border-[#FF6B2C]/50" />
    </div>
  );
}

function WorkflowStep({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  const isOrange = index % 2 === 1;

  return (
    <DmGsapReveal delay={index * 0.08} y={36} className="shrink-0 snap-center">
      <motion.article
        className={`dm-workflow-step group flex w-[280px] flex-col items-center text-center sm:w-[300px] lg:w-[200px] xl:w-[220px] ${
          isOrange ? "dm-workflow-step--orange" : "dm-workflow-step--navy"
        }`}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
      >
        <div className="dm-workflow-step__circle relative flex h-36 w-36 items-center justify-center rounded-full sm:h-40 sm:w-40">
          <div className="dm-workflow-step__ring absolute inset-0 rounded-full" aria-hidden />
          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-[#030B2A]/80 backdrop-blur-sm sm:h-32 sm:w-32">
            <DmProcessIllustration index={index} />
          </div>
        </div>

        <span className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">
          {step.step}
        </span>
        <h3 className="mt-2 text-lg font-extrabold leading-snug text-white sm:text-xl">{step.title}</h3>
        <p className="mt-3 text-xs leading-6 text-white/50 sm:text-sm">
          ({step.items.join(", ")})
        </p>
      </motion.article>
    </DmGsapReveal>
  );
}

export function DmProcessSection({
  title,
  eyebrow,
  steps,
}: {
  title: string;
  eyebrow: string;
  steps: readonly ProcessStep[];
}) {
  return (
    <section
      id="dm-process"
      className="dm-section dm-section--xl dm-workflow-section relative overflow-hidden"
      style={{ background: "#030B2A" }}
      aria-labelledby="dm-process-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,44,0.08),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.05),transparent_45%)]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{eyebrow}</span>
          <h2 id="dm-process-heading" className="dm-heading dm-heading--xl mt-4 text-white">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            A proven journey from research and strategy through execution, tracking, and scalable growth.
          </p>
        </DmGsapReveal>

        {/* Desktop horizontal workflow */}
        <div className="dm-workflow-track hidden items-start justify-between lg:flex">
          {steps.map((step, index) => (
            <div key={step.step} className="flex items-start">
              <WorkflowStep step={step} index={index} />
              {index < steps.length - 1 && <WorkflowConnector />}
            </div>
          ))}
        </div>

        {/* Mobile / tablet horizontal scroll */}
        <div className="dm-workflow-scroll -mx-4 flex items-start gap-0 overflow-x-auto px-4 pb-4 snap-x snap-mandatory lg:hidden">
          {steps.map((step, index) => (
            <div key={step.step} className="flex shrink-0 items-start snap-center">
              <WorkflowStep step={step} index={index} />
              {index < steps.length - 1 && (
                <div className="flex shrink-0 items-center self-center px-2 pt-16" aria-hidden>
                  <div className="h-px w-8 bg-gradient-to-r from-[#FF6B2C]/40 to-[#3B82F6]/30" />
                  <div className="mx-0.5 h-2 w-2 rotate-45 border-r border-t border-[#FF6B2C]/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
