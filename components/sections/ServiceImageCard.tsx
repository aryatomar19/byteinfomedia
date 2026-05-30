"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CloudServiceCard } from "@/data/cloud-services";

type ServiceImageCardProps = CloudServiceCard & {
  index?: number;
  learnMoreHref?: string;
};

export function ServiceImageCard({
  title,
  description,
  image,
  imageAlt,
  index = 0,
  learnMoreHref = "#assessment",
}: ServiceImageCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="enterprise-card group overflow-hidden rounded-[1.5rem]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/55 via-[#0A0F1C]/15 to-transparent" />
        <h3 className="absolute bottom-5 left-5 right-5 text-xl font-extrabold text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="p-6 sm:p-7">
        <p className="line-clamp-3 text-base leading-7 text-[#0A0F1C]">{description}</p>
        <Link
          href={learnMoreHref}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C] transition group-hover:gap-3"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
