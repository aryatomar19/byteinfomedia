"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, FileText, Globe, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTilt } from "@/lib/use-tilt";

type ServiceId = "website" | "seo" | "content" | "social";
type ServiceSpan = "large" | "medium";

type ServiceItem = {
  id: ServiceId;
  title: string;
  description: string;
  href: string;
  image: string;
  span: ServiceSpan;
};

function Service3DIllustration({ id, image }: { id: ServiceId; image: string }) {
  return (
    <div className="bs-bento-illus relative h-full min-h-[220px] overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-[#FF6B2C]/10" />

      {id === "website" && (
        <div className="bs-bento-scene absolute inset-0 flex items-center justify-center">
          <motion.div
            className="bs-bento-3d-card w-[72%] max-w-[280px] rounded-xl border border-white/90 bg-white p-2 shadow-[0_32px_80px_rgba(17,17,17,0.18)]"
            style={{ transform: "rotateY(-12deg) rotateX(8deg) translateZ(40px)" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex gap-1 border-b border-[#111]/5 pb-2">
              <span className="h-2 w-2 rounded-full bg-[#FF6B2C]" />
              <span className="h-2 w-2 rounded-full bg-[#111]/10" />
              <span className="h-2 w-2 rounded-full bg-[#111]/10" />
            </div>
            <div className="mt-2 h-24 rounded-lg bg-gradient-to-br from-[#FF6B2C]/25 to-[#111]/5" />
            <div className="mt-2 grid grid-cols-3 gap-1">
              <span className="h-5 rounded bg-[#111]/6" />
              <span className="h-5 rounded bg-[#111]/6" />
              <span className="h-5 rounded bg-[#FF6B2C]/25" />
            </div>
          </motion.div>
          <motion.div
            className="absolute right-[12%] top-[18%] flex h-12 w-12 items-center justify-center rounded-xl border border-white bg-white shadow-lg"
            animate={{ y: [0, 6, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Globe className="h-6 w-6 text-[#FF6B2C]" />
          </motion.div>
        </div>
      )}

      {id === "seo" && (
        <div className="bs-bento-scene absolute inset-0 flex items-end justify-center pb-6">
          <div className="relative w-[80%] rounded-xl border border-white/90 bg-white/95 p-4 shadow-[0_24px_64px_rgba(17,17,17,0.14)]">
            <div className="flex items-center gap-2 text-[#FF6B2C]">
              <BarChart3 className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#666]">Rankings</span>
            </div>
            <div className="mt-3 flex h-28 items-end gap-2">
              {[30, 45, 38, 62, 55, 78, 68, 92].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-[#FF6B2C] to-[#FF6B2C]/45"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {id === "content" && (
        <div className="bs-bento-scene absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-[65%] rounded-xl border border-white bg-white p-5 shadow-[0_28px_72px_rgba(17,17,17,0.15)]"
            style={{ transform: "rotate(-4deg) translateZ(30px)" }}
            animate={{ y: [0, -6, 0], rotate: [-4, -2, -4] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FileText className="h-12 w-12 text-[#FF6B2C]" />
            <div className="mt-4 space-y-2">
              <div className="h-2 w-full rounded bg-[#111]/10" />
              <div className="h-2 w-4/5 rounded bg-[#111]/6" />
              <div className="h-2 w-3/5 rounded bg-[#111]/6" />
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-[20%] right-[14%] h-16 w-16 rounded-full border-2 border-dashed border-[#FF6B2C]/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      {id === "social" && (
        <div className="bs-bento-scene absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative h-36 w-36"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[Share2, Globe, Share2, Globe].map((Icon, i) => (
              <motion.span
                key={i}
                className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white shadow-[0_12px_32px_rgba(17,17,17,0.12)]"
                style={{ transform: `rotate(${i * 90}deg) translateY(-58px) rotate(-${i * 90}deg)` }}
              >
                <Icon className="h-6 w-6 text-[#FF6B2C]" />
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-[#FF6B2C]/15 blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}
    </div>
  );
}

function BentoCard({ item, index }: { item: ServiceItem; index: number }) {
  const { ref, onMove, onLeave } = useTilt({ max: 8, scale: 1.01 });
  const spanClass = item.span === "large" ? "bs-bento-card--large" : "bs-bento-card--medium";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className={`bs-bento-card ${spanClass}`}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="bs-bento-card-inner group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Service3DIllustration id={item.id} image={item.image} />
        <div className="relative z-10 flex flex-1 flex-col bg-white p-6">
          <h3 className="text-xl font-extrabold tracking-tight text-[#111]">{item.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-[#666]">{item.description}</p>
          <Link
            href={item.href}
            scroll
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C]"
          >
            Explore Service
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function BrandingServicesBento({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: readonly ServiceItem[];
}) {
  return (
    <section id="bs-services" className="bs-section bs-section--dense relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#FF6B2C]/8 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[#111]/4 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Services</span>
            <h2 className="bs-section-title mt-2">{title}</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#666] lg:text-right">{subtitle}</p>
        </div>

        <div className="bs-bento-grid mt-10">
          {items.map((item, index) => (
            <BentoCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
