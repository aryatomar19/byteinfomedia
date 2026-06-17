"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { BlogNavLink } from "@/components/blog/BlogNavLink";
import type { BlogPost } from "@/data/blog";
import { featuredBlog } from "@/data/blog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FeaturedBlogCardProps = {
  blog?: BlogPost;
  index?: number;
  /** Compact mode for homepage sections; default listing card is premium full layout. */
  compact?: boolean;
};

export function FeaturedBlogCard({ blog = featuredBlog, index = 0, compact = false }: FeaturedBlogCardProps) {
  const {
    category,
    title,
    excerpt,
    image,
    imageAlt,
    publishedAt,
    readTime,
    href,
    readMoreLabel,
  } = blog;

  if (compact) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.05, duration: 0.55 }}
        whileHover={{ y: -4 }}
        className="group overflow-hidden rounded-[1.25rem] border border-[#0A0F1C]/8 bg-white shadow-[0_12px_40px_rgba(10,15,28,0.08)] transition duration-300 hover:shadow-[0_20px_56px_rgba(10,15,28,0.12)]"
      >
        <BlogNavLink href={href} className="block">
          <div className="relative h-[200px] w-full overflow-hidden sm:h-[240px]">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </BlogNavLink>

        <div className="space-y-3 p-4 sm:p-5">
          <span className="inline-flex rounded-full border border-[#FF6B2C]/25 bg-[#FFF7F3] px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#FF6B2C]">
            {category}
          </span>

          <h3 className="font-[family-name:var(--font-inter)] text-lg font-extrabold leading-tight tracking-tight text-[#0A0F1C] sm:text-xl">
            <BlogNavLink href={href} className="transition hover:text-[#FF6B2C]">
              {title}
            </BlogNavLink>
          </h3>

          <p className="line-clamp-2 text-sm leading-6 text-[#334155] sm:line-clamp-3 sm:text-base">
            {excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#5F6F86] sm:gap-4 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#FF6B2C] sm:h-4 sm:w-4" aria-hidden />
              {publishedAt}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#FF6B2C] sm:h-4 sm:w-4" aria-hidden />
              {readTime}
            </span>
          </div>

          <BlogNavLink
            href={href}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-1")}
          >
            {readMoreLabel}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </BlogNavLink>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.55 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-[1.25rem] border border-[#0A0F1C]/8 bg-white shadow-[0_12px_40px_rgba(10,15,28,0.08)] transition duration-300 hover:shadow-[0_20px_56px_rgba(10,15,28,0.12)]"
    >
      <BlogNavLink href={href} className="block">
        <div className="relative h-[240px] w-full overflow-hidden sm:h-[300px] md:h-[340px] lg:h-[380px]">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </BlogNavLink>

      <div className="space-y-4 p-6 sm:p-8">
        <span className="inline-flex rounded-full border border-[#FF6B2C]/25 bg-[#FFF7F3] px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#FF6B2C]">
          {category}
        </span>

        <h3 className="font-[family-name:var(--font-inter)] text-2xl font-extrabold leading-tight tracking-tight text-[#0A0F1C] sm:text-[1.75rem]">
          <BlogNavLink href={href} className="transition hover:text-[#FF6B2C]">
            {title}
          </BlogNavLink>
        </h3>

        <p className="text-base leading-7 text-[#334155]">{excerpt}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#5F6F86]">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#FF6B2C]" aria-hidden />
            {publishedAt}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#FF6B2C]" aria-hidden />
            {readTime}
          </span>
        </div>

        <BlogNavLink href={href} className={cn(buttonVariants({ variant: "outline" }), "mt-1")}>
          {readMoreLabel}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </BlogNavLink>
      </div>
    </motion.article>
  );
}
