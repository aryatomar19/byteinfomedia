"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Users } from "lucide-react";

const icons = [Star, Users, TrendingUp];

export function BrandingFloatingProof({
  items,
}: {
  items: readonly { label: string; detail: string }[];
}) {
  return (
    <>
      {items.map((item, index) => {
        const Icon = icons[index] ?? Star;
        const positions = [
          "left-[4%] top-[22%]",
          "right-[6%] top-[38%]",
          "left-[8%] bottom-[28%]",
        ];
        const delays = [0, 0.6, 1.2];

        return (
          <motion.div
            key={item.label}
            className={`bs-floating-proof absolute z-30 hidden sm:flex ${positions[index]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + delays[index], repeat: Infinity, ease: "easeInOut", delay: delays[index] }}
              className="bs-floating-proof-card flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-[0_16px_48px_rgba(17,17,17,0.12)] backdrop-blur-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B2C]/12 text-[#FF6B2C]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-[#111]">{item.label}</p>
                <p className="text-xs text-[#666]">{item.detail}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}
