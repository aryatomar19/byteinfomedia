"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

function CurvedConnector({ active }: { active: boolean }) {
  return (
    <svg
      className="dm-process-connector pointer-events-none absolute left-[8%] right-[8%] top-[7.5rem] z-0 hidden h-24 w-[84%] sm:top-[8.5rem] lg:block xl:top-[9.5rem]"
      viewBox="0 0 1000 80"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M 32 48 Q 248 6, 500 42 T 968 48"
        fill="none"
        stroke="rgba(255,107,53,0.32)"
        strokeWidth="2.5"
        strokeDasharray="8 14"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      <motion.circle
        r="5"
        fill="#FF6B35"
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1, offsetDistance: ["0%", "100%"] } : { opacity: 0 }}
        transition={{
          opacity: { delay: 1.2, duration: 0.3 },
          offsetDistance: { duration: 5, repeat: Infinity, ease: "linear", delay: 1.2 },
        }}
        style={{ offsetPath: "path('M 32 48 Q 248 6, 500 42 T 968 48')" }}
      />
    </svg>
  );
}

function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <motion.article
      className="dm-process-step group relative z-10 flex w-[280px] shrink-0 snap-center flex-col items-center text-center sm:w-[300px] lg:w-auto lg:max-w-none"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="dm-process-step__visual relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        <span className="dm-process-step__badge absolute -top-2 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#FF6B35] px-4 py-1.5 text-xs font-extrabold tracking-widest text-white shadow-[0_10px_28px_rgba(255,107,53,0.4)]">
          {step.number}
        </span>

        <div className="dm-process-step__ring relative flex h-[220px] w-[220px] items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35]/18 via-[#FF6B35]/6 to-transparent p-[3px] sm:h-[240px] sm:w-[240px] lg:h-[260px] lg:w-[260px] xl:h-[280px] xl:w-[280px]">
          <div className="dm-process-step__circle relative h-full w-full overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_20px_60px_rgba(10,15,28,0.12)] transition-shadow duration-500 group-hover:shadow-[0_28px_72px_rgba(255,107,53,0.22)]">
            <img
              src={step.image}
              alt={step.imageAlt}
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#0A0F1C]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </motion.div>

      <h3 className="mt-8 text-lg font-extrabold text-[#0A0F1C] sm:text-xl">{step.title}</h3>
      <p className="mt-2 max-w-[240px] text-sm leading-6 text-[#0A0F1C]/60 sm:max-w-[260px]">
        {step.description}
      </p>
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
      className="dm-process-hero dm-section dm-section--white relative w-full overflow-hidden bg-white"
      aria-labelledby="dm-process-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,53,0.05),transparent_55%)]" aria-hidden />

      <div className="dm-container relative">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="dm-process-heading" className="dm-heading dm-heading--2xl text-[#0A0F1C]">
            {title}
          </h2>
        </motion.div>

        <div ref={trackRef} className="dm-process-track relative mt-10 lg:mt-14">
          <CurvedConnector active={connectorActive} />

          <div className="relative hidden items-start justify-between gap-6 lg:flex xl:gap-10">
            {steps.map((step, index) => (
              <ProcessStepCard key={step.number} step={step} index={index} />
            ))}
          </div>

          <div className="dm-process-scroll -mx-4 flex justify-start gap-10 overflow-x-auto px-4 pb-4 pt-2 snap-x snap-mandatory lg:hidden">
            {steps.map((step, index) => (
              <ProcessStepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
