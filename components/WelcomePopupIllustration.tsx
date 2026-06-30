"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Bot, Cloud, Code2, Shield, TrendingUp } from "lucide-react";

const floatTransition = { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const };

type FloatingIconProps = {
  className: string;
  delay?: number;
  children: ReactNode;
  iconClassName: string;
};

function FloatingIcon({ className, delay = 0, children, iconClassName }: FloatingIconProps) {
  return (
    <motion.div
      className={`absolute flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:h-12 sm:w-12 ${className}`}
      animate={{ y: [0, -5, 0] }}
      transition={{ ...floatTransition, delay }}
    >
      <span className={iconClassName}>{children}</span>
    </motion.div>
  );
}

export function WelcomePopupIllustration() {
  return (
    <div className="welcome-popup-illustration relative mx-auto flex h-full w-full max-w-[480px] items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
      <svg
        viewBox="0 0 420 380"
        className="h-auto w-full max-h-[340px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M88 118 C120 92, 168 78, 210 88"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
        <path
          d="M332 108 C298 82, 248 72, 210 88"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
        <path
          d="M338 248 C302 268, 258 278, 210 272"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
        <path
          d="M92 252 C128 276, 172 286, 210 272"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
        <path
          d="M210 88 C210 118, 210 148, 210 178"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        <ellipse cx="210" cy="300" rx="118" ry="14" fill="rgba(15,23,42,0.06)" />

        <rect x="118" y="178" width="184" height="112" rx="10" fill="#F8FAFC" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="126" y="186" width="168" height="96" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />

        <rect x="136" y="196" width="56" height="8" rx="4" fill="#E5E7EB" />
        <rect x="136" y="212" width="40" height="6" rx="3" fill="#F1F5F9" />

        <rect x="136" y="228" width="72" height="44" rx="6" fill="#FFF7F3" stroke="#FFE4D4" strokeWidth="1" />
        <rect x="146" y="252" width="10" height="14" rx="2" fill="#FF6A1A" opacity="0.85" />
        <rect x="160" y="244" width="10" height="22" rx="2" fill="#FF6A1A" opacity="0.65" />
        <rect x="174" y="236" width="10" height="30" rx="2" fill="#FF6A1A" />
        <rect x="188" y="248" width="10" height="18" rx="2" fill="#FF6A1A" opacity="0.75" />

        <rect x="218" y="228" width="68" height="44" rx="6" fill="#F8FAFC" stroke="#E5E7EB" strokeWidth="1" />
        <circle cx="252" cy="250" r="16" stroke="#FF6A1A" strokeWidth="6" strokeDasharray="42 100" strokeLinecap="round" transform="rotate(-90 252 250)" />
        <circle cx="252" cy="250" r="16" stroke="#F1F5F9" strokeWidth="6" strokeDasharray="100 100" />

        <rect x="136" y="278" width="148" height="1.5" rx="1" fill="#E5E7EB" />

        <path d="M108 290 H312" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
        <path d="M118 290 V296 C118 300 122 304 126 304 H294 C298 304 302 300 302 296 V290" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />

        <rect x="72" y="302" width="18" height="22" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
        <ellipse cx="81" cy="328" rx="12" ry="3" fill="#DCFCE7" />
        <path d="M78 314 C78 310 84 308 84 312 C84 316 78 318 78 314 Z" fill="#22C55E" />
        <rect x="76" y="316" width="10" height="8" rx="2" fill="#16A34A" />

        <rect x="330" y="302" width="20" height="22" rx="6" fill="#FFF7F3" stroke="#FFD8C2" strokeWidth="1" />
        <rect x="334" y="308" width="12" height="10" rx="2" fill="#FF6A1A" opacity="0.9" />
      </svg>

      <FloatingIcon className="left-[4%] top-[14%] sm:left-[6%]" delay={0} iconClassName="text-[#22C55E]">
        <Shield className="h-5 w-5" strokeWidth={2} />
      </FloatingIcon>

      <FloatingIcon className="left-[38%] top-[4%]" delay={0.4} iconClassName="text-[#FF6A1A]">
        <Cloud className="h-5 w-5" strokeWidth={2} />
      </FloatingIcon>

      <FloatingIcon className="right-[4%] top-[16%] sm:right-[6%]" delay={0.8} iconClassName="text-[#A855F7]">
        <Bot className="h-5 w-5" strokeWidth={2} />
      </FloatingIcon>

      <FloatingIcon className="right-[8%] bottom-[18%] sm:right-[10%]" delay={1.2} iconClassName="text-[#3B82F6]">
        <Code2 className="h-5 w-5" strokeWidth={2} />
      </FloatingIcon>

      <FloatingIcon className="left-[8%] bottom-[16%] sm:left-[10%]" delay={1.6} iconClassName="text-[#FF6A1A]">
        <TrendingUp className="h-5 w-5" strokeWidth={2} />
      </FloatingIcon>
    </div>
  );
}
