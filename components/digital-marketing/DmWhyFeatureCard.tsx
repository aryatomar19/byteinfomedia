"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function DmWhyFeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.article
      className="dm-why-feature group relative overflow-hidden rounded-2xl p-5 sm:p-6"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      <span
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#FF6B2C]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(255,107,44,0.12), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative flex gap-4">
        <span className="dm-why-feature__icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
          <Icon className="h-5 w-5 text-[#FF6B2C]" strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-extrabold tracking-tight text-white">{title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-white/55">{description}</p>
        </div>
      </div>

      <motion.span
        className="dm-why-feature__pulse pointer-events-none absolute bottom-3 right-3 h-2 w-2 rounded-full bg-[#FF6B2C]"
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.35,
        }}
        aria-hidden
      />
    </motion.article>
  );
}
