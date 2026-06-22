"use client";

import { motion } from "framer-motion";

function ResearchIllustration() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" aria-hidden>
      <circle cx="32" cy="32" r="18" fill="none" stroke="#FF6B2C" strokeWidth="2.5" opacity="0.8" />
      <line x1="44" y1="44" x2="58" y2="58" stroke="#FF6B2C" strokeWidth="3" strokeLinecap="round" />
      <rect x="14" y="52" width="28" height="4" rx="2" fill="#3B82F6" opacity="0.6" />
      <rect x="18" y="58" width="20" height="4" rx="2" fill="#FF6B2C" opacity="0.5" />
    </svg>
  );
}

function StrategyIllustration() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" aria-hidden>
      <path d="M16 58 L28 42 L40 48 L52 28 L64 34" fill="none" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="28" cy="42" r="4" fill="#FF6B2C" />
      <circle cx="40" cy="48" r="4" fill="#3B82F6" />
      <circle cx="52" cy="28" r="4" fill="#FF6B2C" />
      <rect x="14" y="62" width="52" height="3" rx="1.5" fill="#3B82F6" opacity="0.4" />
    </svg>
  );
}

function CreativeIllustration() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" aria-hidden>
      <rect x="18" y="22" width="44" height="32" rx="4" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.7" />
      <rect x="24" y="28" width="20" height="3" rx="1" fill="#FF6B2C" opacity="0.7" />
      <rect x="24" y="34" width="28" height="2" rx="1" fill="#fff" opacity="0.3" />
      <rect x="24" y="40" width="24" height="2" rx="1" fill="#fff" opacity="0.2" />
      <path d="M52 48 L62 58 L58 62 L48 52 Z" fill="#FF6B2C" opacity="0.6" />
    </svg>
  );
}

function LaunchIllustration() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" aria-hidden>
      <path d="M40 58 L40 28 M40 28 L30 38 M40 28 L50 38" fill="none" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="24" r="8" fill="#FF6B2C" opacity="0.3" />
      <rect x="22" y="58" width="10" height="8" rx="2" fill="#4285F4" opacity="0.6" />
      <rect x="36" y="58" width="10" height="8" rx="2" fill="#FF6B2C" opacity="0.6" />
      <rect x="50" y="58" width="10" height="8" rx="2" fill="#34A853" opacity="0.6" />
    </svg>
  );
}

function TrackingIllustration() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" aria-hidden>
      {[20, 32, 44, 56].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={52 - [16, 28, 22, 36][i]}
          width="8"
          height={[16, 28, 22, 36][i]}
          rx="2"
          fill={i % 2 === 0 ? "#FF6B2C" : "#3B82F6"}
          opacity="0.65"
        />
      ))}
      <line x1="14" y1="58" x2="66" y2="58" stroke="#fff" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

function ScaleIllustration() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" aria-hidden>
      <path d="M16 52 L32 40 L48 44 L64 20" fill="none" stroke="#FF6B2C" strokeWidth="3" strokeLinecap="round" />
      <polygon points="64,20 58,24 62,28" fill="#FF6B2C" />
      <circle cx="64" cy="20" r="5" fill="#FF6B2C" opacity="0.4" />
    </svg>
  );
}

const illustrations = [
  ResearchIllustration,
  StrategyIllustration,
  CreativeIllustration,
  LaunchIllustration,
  TrackingIllustration,
  ScaleIllustration,
];

export function DmProcessIllustration({ index }: { index: number }) {
  const Component = illustrations[index] ?? ResearchIllustration;
  return <Component />;
}
