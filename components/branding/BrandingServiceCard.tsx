"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, FileText, Globe, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTilt } from "@/lib/use-tilt";

type ServiceId = "website" | "seo" | "content" | "social";

function ServiceIllustration({ id }: { id: ServiceId }) {
  if (id === "website") {
    return (
      <div className="bs-service-illus bs-service-illus--web">
        <div className="bs-browser">
          <div className="bs-browser-bar">
            <span /><span /><span />
          </div>
          <div className="bs-browser-body">
            <div className="bs-browser-hero" />
            <div className="bs-browser-grid">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (id === "seo") {
    return (
      <div className="bs-service-illus bs-service-illus--seo">
        <div className="flex h-full items-end justify-center gap-1.5 px-4 pb-4">
          {[40, 55, 48, 70, 62, 88, 75].map((h, i) => (
            <motion.div
              key={i}
              className="bs-seo-bar w-4 rounded-t-md bg-gradient-to-t from-[#FF6B2C] to-[#FF6B2C]/40"
              whileHover={{ scaleY: 1.08 }}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <BarChart3 className="absolute right-4 top-4 h-6 w-6 text-[#FF6B2C]/40" />
      </div>
    );
  }
  if (id === "content") {
    return (
      <div className="bs-service-illus bs-service-illus--content">
        <motion.div
          className="bs-doc-card"
          whileHover={{ rotate: -2, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FileText className="h-10 w-10 text-[#FF6B2C]" />
          <div className="mt-3 space-y-2">
            <div className="h-1.5 w-20 rounded bg-[#111]/10" />
            <div className="h-1.5 w-28 rounded bg-[#111]/6" />
            <div className="h-1.5 w-16 rounded bg-[#111]/6" />
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="bs-service-illus bs-service-illus--social">
      <motion.div
        className="relative flex h-full w-full items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[Share2, Globe, Share2].map((Icon, i) => (
          <span
            key={i}
            className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-[#FF6B2C]/20 bg-white shadow-md"
            style={{ transform: `rotate(${i * 120}deg) translateY(-44px) rotate(-${i * 120}deg)` }}
          >
            <Icon className="h-5 w-5 text-[#FF6B2C]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function BrandingServiceCard({
  id,
  title,
  description,
  href,
  index,
}: {
  id: ServiceId;
  title: string;
  description: string;
  href: string;
  index: number;
}) {
  const { ref, onMove, onLeave } = useTilt({ max: 10, scale: 1.02 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="bs-service-card group h-full transition-[transform,box-shadow] duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <ServiceIllustration id={id} />
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-extrabold tracking-tight text-[#111]">{title}</h3>
          <p className="bs-service-desc mt-2 text-sm leading-6 text-[#666]">{description}</p>
          <Link
            href={href}
            scroll
            className="bs-magnetic-btn mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#FF6B2C]"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
