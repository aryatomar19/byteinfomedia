"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Activity, Cloud, Database, Lock, Server, Shield } from "lucide-react";

function FloatCard({
  children,
  className,
  delay = 0,
  y = 8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -y, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroCloudScene() {
  return (
    <div className="relative aspect-[4/3] w-full min-h-[420px]">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#1a2744] via-[#0f1a30] to-[#0a0f1c] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#FF6B2C]/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[#3884FF]/25 blur-3xl" />

        {/* Central 3D cloud stack */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%]">
          <svg viewBox="0 0 400 280" className="w-full" aria-hidden>
            <defs>
              <linearGradient id="cloudGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF9A5C" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="layerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3884FF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1a3a6e" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <ellipse cx="200" cy="200" rx="160" ry="24" fill="#FF6B2C" opacity="0.15" />
            <rect x="80" y="120" width="240" height="80" rx="12" fill="url(#layerGrad)" stroke="rgba(255,255,255,0.15)" />
            <rect x="100" y="90" width="200" height="70" rx="12" fill="url(#layerGrad)" stroke="rgba(255,255,255,0.2)" />
            <path d="M120 70 Q200 30 280 70 Q320 90 300 110 H100 Q80 90 120 70Z" fill="url(#cloudGrad)" opacity="0.85" />
            <circle cx="140" cy="145" r="6" fill="#22c55e" />
            <circle cx="200" cy="145" r="6" fill="#22c55e" />
            <circle cx="260" cy="145" r="6" fill="#FF6B2C" />
            <path d="M140 145 L200 110 L260 145" stroke="#FF6B2C" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M100 160 H300" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
            <path d="M120 180 H280" stroke="rgba(56,132,255,0.5)" strokeWidth="1.5" />
          </svg>
        </div>

        <FloatCard className="absolute left-4 top-8 w-[42%] max-w-[180px]" delay={0}>
          <div className="glass-card rounded-2xl p-3">
            <div className="flex items-center justify-between mb-2">
              <Cloud className="h-4 w-4 text-[#FF6B2C]" />
              <span className="text-[0.6rem] font-bold uppercase text-emerald-400">Live</span>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[40, 65, 45, 80, 55, 70].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-[#FF6B2C]/70"
                  animate={{ height: [`${h}%`, `${h + 15}%`, `${h}%`] }}
                  transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="mt-2 text-[0.65rem] text-white/60">Cloud spend · -18%</p>
          </div>
        </FloatCard>

        <FloatCard className="absolute right-4 top-12 w-[44%] max-w-[190px]" delay={0.5} y={6}>
          <div className="glass-card rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-[#3884FF]" />
              <span className="text-[0.65rem] font-bold text-white/90">Security posture</span>
            </div>
            <div className="space-y-1.5">
              {["IAM", "Network", "Logging"].map((l) => (
                <div key={l} className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[85%] rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[0.55rem] text-white/50">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </FloatCard>

        <FloatCard className="absolute bottom-8 left-6 w-[38%] max-w-[160px]" delay={1} y={5}>
          <div className="glass-card rounded-2xl p-3">
            <Activity className="h-4 w-4 text-emerald-400 mb-2" />
            <p className="text-lg font-black text-white">99.95%</p>
            <p className="text-[0.6rem] text-white/50">Uptime SLA</p>
          </div>
        </FloatCard>

        <FloatCard className="absolute bottom-10 right-6 w-[40%] max-w-[170px]" delay={1.2}>
          <div className="glass-card rounded-2xl p-3">
            <div className="flex gap-2">
              {[Server, Database, Lock].map((Icon, i) => (
                <div key={i} className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                  <Icon className="h-3.5 w-3.5 text-[#FF6B2C]" />
                </div>
              ))}
            </div>
            <p className="mt-2 text-[0.6rem] font-semibold text-white/70">Multi-AZ · Encrypted</p>
          </div>
        </FloatCard>
      </div>

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FF6B2C]/30 blur-2xl w-3/4 h-8" />
    </div>
  );
}
