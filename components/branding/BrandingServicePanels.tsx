"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, FileText, Globe, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { useTilt } from "@/lib/use-tilt";

type ServiceId = "website" | "seo" | "content" | "social";

type ServiceItem = {
  id: ServiceId;
  title: string;
  description: string;
  href: string;
  image: string;
};

function WebsiteHover() {
  return (
    <div className="bs-panel-scene relative flex h-full items-center justify-center overflow-hidden">
      <motion.div
        className="bs-panel-browser w-[75%] overflow-hidden rounded-xl border border-white/90 bg-white shadow-2xl"
        whileHover={{ scale: 1.04 }}
      >
        <div className="flex gap-1.5 border-b border-[#111]/5 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#FF6B2C]" />
          <span className="h-2 w-2 rounded-full bg-[#111]/10" />
          <span className="h-2 w-2 rounded-full bg-[#111]/10" />
        </div>
        <motion.div
          className="m-3 h-28 rounded-lg bg-[#111]/5"
          whileHover={{ background: "linear-gradient(135deg, rgba(255,107,44,0.35), rgba(17,17,17,0.08))" }}
          transition={{ duration: 0.4 }}
        />
        <div className="grid grid-cols-3 gap-2 px-3 pb-3">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              className="h-6 rounded bg-[#111]/6"
              whileHover={{ backgroundColor: "rgba(255,107,44,0.25)" }}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-[#FF6B2C]/0"
        whileHover={{ backgroundColor: "rgba(255,107,44,0.06)" }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

function SeoHover() {
  const bars = [35, 48, 42, 62, 55, 78, 68, 92];
  return (
    <div className="bs-panel-scene flex h-full items-end justify-center gap-2 px-8 pb-8">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-5 rounded-t-lg bg-gradient-to-t from-[#FF6B2C] to-[#FF6B2C]/40"
          initial={{ height: `${h * 0.5}%` }}
          whileHover={{ height: `${h}%`, boxShadow: "0 0 20px rgba(255,107,44,0.4)" }}
          transition={{ type: "spring", stiffness: 200, delay: i * 0.03 }}
        />
      ))}
      <BarChart3 className="absolute right-6 top-6 h-8 w-8 text-[#FF6B2C]/30" />
    </div>
  );
}

function ContentHover() {
  return (
    <div className="bs-panel-scene flex h-full items-center justify-center">
      <motion.div
        className="w-[65%] rounded-xl border border-white bg-white p-6 shadow-2xl"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <FileText className="h-12 w-12 text-[#FF6B2C]" />
        <div className="mt-4 space-y-2">
          {[100, 85, 70, 55].map((w, i) => (
            <motion.div
              key={i}
              className="h-2 rounded bg-[#111]/8"
              style={{ width: `${w}%` }}
              whileHover={{ width: "100%", backgroundColor: "rgba(255,107,44,0.2)" }}
              transition={{ delay: i * 0.05 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SocialHover() {
  const icons = [Share2, Globe, Heart, Share2];
  return (
    <div className="bs-panel-scene relative flex h-full items-center justify-center overflow-hidden">
      <motion.div
        className="relative h-36 w-36"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 8, ease: "linear" }}
      >
        {icons.map((Icon, i) => (
          <span
            key={i}
            className="absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FF6B2C]/20 bg-white shadow-lg"
            style={{ transform: `rotate(${i * 90}deg) translateY(-56px) rotate(-${i * 90}deg)` }}
          >
            <Icon className="h-5 w-5 text-[#FF6B2C]" />
          </span>
        ))}
      </motion.div>
      {[1, 2, 3].map((n) => (
        <motion.span
          key={n}
          className="absolute flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-bold text-[#FF6B2C] shadow-md"
          style={{ left: `${20 + n * 22}%`, top: `${15 + n * 8}%` }}
          animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: n * 0.6 }}
        >
          <Heart className="h-3 w-3 fill-current" />
        </motion.span>
      ))}
    </div>
  );
}

const scenes: Record<ServiceId, () => ReactNode> = {
  website: WebsiteHover,
  seo: SeoHover,
  content: ContentHover,
  social: SocialHover,
};

function ServicePanel({ item, index }: { item: ServiceItem; index: number }) {
  const { ref, onMove, onLeave } = useTilt({ max: 8, scale: 1.02 });
  const [hovered, setHovered] = useState(false);
  const Scene = scenes[item.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`bs-service-panel group flex h-full min-h-[380px] flex-col overflow-hidden rounded-3xl transition duration-300 ${hovered ? "bs-service-panel--active" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative h-[220px] overflow-hidden sm:h-[240px]">
          <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" aria-hidden />
          <Scene />
        </div>
        <div className="flex flex-1 flex-col bg-white p-6 sm:p-7">
          <h3 className="text-xl font-extrabold tracking-tight text-[#111]">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#666]">{item.description}</p>
          <Link
            href={item.href}
            scroll
            className="bs-magnetic-link mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#FF6B2C]"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function BrandingServicePanels({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: readonly ServiceItem[];
}) {
  return (
    <section id="bs-services" className="bs-section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#FF6B2C]/6 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Services</span>
          <h2 className="bs-section-title mt-2">{title}</h2>
          <p className="mt-3 text-base text-[#666]">{subtitle}</p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map((item, index) => (
            <ServicePanel key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
