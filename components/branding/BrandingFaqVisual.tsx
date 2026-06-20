"use client";

import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";

export function BrandingFaqVisual() {
  return (
    <div className="bs-faq-3d relative flex h-full min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-[#111]/6 bg-gradient-to-br from-[#FAFAFA] via-white to-[#FF6B2C]/5 shadow-[0_24px_64px_rgba(17,17,17,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,44,0.08),transparent_70%)]" aria-hidden />

      <motion.div
        className="bs-faq-3d-scene relative h-64 w-64"
        style={{ transformStyle: "preserve-3d", perspective: 800 }}
        animate={{ rotateY: [0, 8, 0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-[#FF6B2C]/25 bg-white shadow-[0_24px_64px_rgba(255,107,44,0.2)]"
          style={{ transform: "translateZ(60px)" }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <HelpCircle className="h-14 w-14 text-[#FF6B2C]" />
        </motion.div>

        {[0, 72, 144, 216, 288].map((angle, i) => (
          <motion.div
            key={angle}
            className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white bg-white/95 shadow-lg"
            style={{ transform: `rotateY(${angle}deg) translateZ(100px)` }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          >
            <MessageCircle className="h-5 w-5 text-[#FF6B2C]/70" />
          </motion.div>
        ))}

        <motion.div
          className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FF6B2C]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {[1, 2, 3, 4].map((n) => (
        <motion.span
          key={n}
          className="absolute h-2 w-2 rounded-full bg-[#FF6B2C]/30"
          style={{ left: `${15 + n * 18}%`, top: `${20 + (n % 2) * 50}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: n * 0.4 }}
        />
      ))}
    </div>
  );
}
