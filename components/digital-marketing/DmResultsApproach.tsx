"use client";

import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Users, MousePointerClick, DollarSign } from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { DmMagnetic } from "@/components/digital-marketing/DmMagnetic";
import { Button } from "@/components/ui/button";

function DashboardWidget({
  title,
  icon: Icon,
  children,
  delay,
}: {
  title: string;
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="dm-results-widget rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#FF6B2C]" />
        <span className="text-xs font-semibold text-white/70">{title}</span>
      </div>
      {children}
    </motion.div>
  );
}

function MiniChart({ heights, color = "#FF6B2C" }: { heights: number[]; color?: string }) {
  return (
    <div className="flex h-12 items-end gap-1" aria-hidden>
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-t"
          style={{ background: `linear-gradient(to top, ${color}, ${color}66)` }}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 1.2, delay: i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
        />
      ))}
    </div>
  );
}

function ResultsDashboard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 24 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  return (
    <motion.div
      className="dm-results-dashboard relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-xl sm:p-6"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#FF6B2C]/15 to-[#3B82F6]/10 blur-2xl" aria-hidden />
      <div className="relative grid grid-cols-2 gap-3">
        <DashboardWidget title="Traffic Growth" icon={TrendingUp} delay={0}>
          <MiniChart heights={[40, 55, 48, 72, 65, 90]} />
        </DashboardWidget>
        <DashboardWidget title="Lead Generation" icon={Users} delay={0.3}>
          <MiniChart heights={[60, 75, 68, 85, 92, 100]} color="#3B82F6" />
        </DashboardWidget>
        <DashboardWidget title="Conversion Rate" icon={MousePointerClick} delay={0.6}>
          <svg viewBox="0 0 120 48" className="h-12 w-full" aria-hidden>
            <motion.path
              d="M4 40 L28 32 L52 36 L76 18 L96 22 L116 8"
              fill="none"
              stroke="#FF6B2C"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
            />
          </svg>
        </DashboardWidget>
        <DashboardWidget title="ROI Performance" icon={DollarSign} delay={0.9}>
          <MiniChart heights={[50, 62, 78, 70, 88, 95]} color="#FF6B2C" />
        </DashboardWidget>
      </div>
      <motion.div
        className="dm-results-insight relative mt-3 rounded-xl border border-[#FF6B2C]/20 bg-[#FF6B2C]/5 px-4 py-3"
        animate={{ borderColor: ["rgba(255,107,44,0.15)", "rgba(255,107,44,0.35)", "rgba(255,107,44,0.15)"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <p className="text-xs font-semibold text-[#FF6B2C]">Performance Insight</p>
        <p className="mt-1 text-xs text-white/50">Campaign ROI up 42% this quarter</p>
      </motion.div>
    </motion.div>
  );
}

export function DmResultsApproach({
  eyebrow,
  title,
  description,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <section
      className="dm-section dm-results-section relative overflow-hidden"
      style={{ background: "#050B1F" }}
      aria-labelledby="dm-results-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(255,107,44,0.08),transparent_50%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(59,130,246,0.06),transparent_45%)]" aria-hidden />

      <div className="dm-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <DmGsapReveal y={40}>
            <span className="dm-eyebrow dm-eyebrow--light">{eyebrow}</span>
            <h2 id="dm-results-heading" className="dm-heading mt-3 text-white">
              {title}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg">{description}</p>
            <div className="mt-8">
              <DmMagnetic strength={0.2}>
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full bg-[#FF6B2C] px-8 font-bold text-white shadow-[0_12px_40px_rgba(255,107,44,0.35)] hover:bg-[#e85a1c]"
                >
                  <Link href="/book-consultation/">
                    {cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </DmMagnetic>
            </div>
          </DmGsapReveal>

          <DmGsapReveal y={40} delay={0.15}>
            <ResultsDashboard />
          </DmGsapReveal>
        </div>
      </div>
    </section>
  );
}
