"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

function IllustrationFrame({ children }: { children: ReactNode }) {
  return (
    <div className="dm-cap-illustration relative flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] sm:h-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(255,107,44,0.12),transparent_60%)]" />
      {children}
    </div>
  );
}

export function SeoIllustration() {
  return (
    <IllustrationFrame>
      <svg viewBox="0 0 120 80" className="h-20 w-28" aria-hidden>
        <motion.path
          d="M10 65 L30 50 L50 55 L70 30 L90 35 L110 15"
          fill="none"
          stroke="#FF6B2C"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        />
        {[30, 50, 70, 90].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={i === 3 ? 30 : i === 2 ? 55 : i === 1 ? 50 : 65}
            r="4"
            fill="#FF6B2C"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        <text x="10" y="20" fill="rgba(255,255,255,0.3)" fontSize="8" fontWeight="bold">
          #
        </text>
        <motion.rect x="8" y="12" width="20" height="3" rx="1" fill="#3B82F6" opacity="0.6" animate={{ width: [20, 28, 20] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    </IllustrationFrame>
  );
}

export function GoogleAdsIllustration() {
  return (
    <IllustrationFrame>
      <div className="flex items-center gap-3" aria-hidden>
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg viewBox="0 0 40 40" className="h-10 w-10">
            <polygon points="8,32 8,8 28,20" fill="#4285F4" opacity="0.9" />
            <polygon points="28,20 32,18 32,22" fill="#FBBC04" opacity="0.9" />
            <polygon points="28,20 32,22 8,32" fill="#34A853" opacity="0.9" />
          </svg>
        </motion.div>
        <div className="flex flex-col gap-1.5">
          {[72, 55, 88].map((w, i) => (
            <motion.div
              key={i}
              className="h-2 rounded-full bg-gradient-to-r from-[#4285F4]/60 to-[#FF6B2C]/40"
              style={{ width: `${w * 0.5}px` }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
            />
          ))}
        </div>
      </div>
    </IllustrationFrame>
  );
}

export function SocialIllustration() {
  return (
    <IllustrationFrame>
      <div className="flex items-center gap-2" aria-hidden>
        {[
          { color: "#FF6B2C", size: 36 },
          { color: "#3B82F6", size: 28 },
          { color: "#A855F7", size: 32 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="rounded-full border-2"
            style={{ width: node.size, height: node.size, borderColor: `${node.color}80` }}
            animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
        <svg viewBox="0 0 60 40" className="absolute h-10 w-16 opacity-30">
          <line x1="18" y1="20" x2="42" y2="14" stroke="#FF6B2C" strokeWidth="1" />
          <line x1="18" y1="20" x2="38" y2="28" stroke="#3B82F6" strokeWidth="1" />
        </svg>
      </div>
    </IllustrationFrame>
  );
}

export function ContentIllustration() {
  return (
    <IllustrationFrame>
      <div className="flex flex-col gap-2 px-4" aria-hidden>
        {[100, 75, 90, 60].map((w, i) => (
          <motion.div
            key={i}
            className="h-2 rounded-full bg-gradient-to-r from-white/20 to-[#FF6B2C]/30"
            style={{ width: `${w}px` }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
        <motion.div
          className="mt-1 h-8 w-8 self-end rounded-lg border border-[#FF6B2C]/40 bg-[#FF6B2C]/10"
          animate={{ rotate: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </IllustrationFrame>
  );
}

export function WebsiteIllustration() {
  return (
    <IllustrationFrame>
      <motion.div
        className="w-32 overflow-hidden rounded-lg border border-white/15 bg-[#0A1628]"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        aria-hidden
      >
        <div className="flex h-4 items-center gap-1 border-b border-white/10 px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2C]/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
        <div className="space-y-1.5 p-2">
          <div className="h-6 rounded bg-gradient-to-r from-[#FF6B2C]/30 to-transparent" />
          <div className="h-1.5 w-3/4 rounded bg-white/10" />
          <div className="h-1.5 w-1/2 rounded bg-white/10" />
        </div>
      </motion.div>
    </IllustrationFrame>
  );
}

export function AnalyticsIllustration() {
  return (
    <IllustrationFrame>
      <div className="flex items-end gap-1.5 px-2" aria-hidden>
        {[40, 65, 50, 80, 60, 95].map((h, i) => (
          <motion.div
            key={i}
            className="w-3 rounded-t bg-gradient-to-t from-[#3B82F6] to-[#FF6B2C]"
            initial={{ height: 0 }}
            animate={{ height: `${h * 0.45}px` }}
            transition={{ duration: 1.2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
          />
        ))}
      </div>
    </IllustrationFrame>
  );
}

const illustrations: Record<string, () => ReactNode> = {
  seo: SeoIllustration,
  "google-ads": GoogleAdsIllustration,
  social: SocialIllustration,
  content: ContentIllustration,
  website: WebsiteIllustration,
  analytics: AnalyticsIllustration,
};

export function DmCapabilityIllustration({ id }: { id: string }) {
  const Component = illustrations[id] ?? AnalyticsIllustration;
  return <Component />;
}
