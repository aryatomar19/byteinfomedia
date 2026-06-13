"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { BlogNavLink } from "@/components/blog/BlogNavLink";
import { featuredBlog } from "@/data/blog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FeaturedBlogCardProps = {
  index?: number;
  compact?: boolean;
};

export function FeaturedBlogCard({ index = 0, compact = false }: FeaturedBlogCardProps) {
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
  } = featuredBlog;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.55 }}
      whileHover={{ y: -4 }}
      className="enterprise-card group overflow-hidden rounded-[1.25rem] bg-white shadow-[0_20px_60px_rgba(10,15,28,0.08)] transition duration-300 hover:shadow-[0_28px_72px_rgba(10,15,28,0.12)] sm:rounded-[1.125rem] lg:rounded-[1.25rem]"
    >
      <BlogNavLink href={href} className="block">
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </BlogNavLink>

      <div className={cn(compact ? "p-3.5 sm:p-4" : "p-6 sm:p-8")}>
        <span
          className={cn(
            "inline-flex rounded-full border border-[#FF6B2C]/25 bg-[#FFF7F3] font-bold uppercase tracking-[0.14em] text-[#FF6B2C]",
            compact ? "px-3 py-0.5 text-[0.65rem]" : "px-3.5 py-1 text-[0.7rem]",
          )}
        >
          {category}
        </span>

        <h3
          className={cn(
            "font-[family-name:var(--font-inter)] font-extrabold leading-tight tracking-tight text-[#0A0F1C]",
            compact ? "mt-2 text-lg sm:text-xl" : "mt-4 text-2xl sm:text-[1.75rem]",
          )}
        >
          <BlogNavLink href={href} className="transition hover:text-[#FF6B2C]">
            {title}
          </BlogNavLink>
        </h3>

        <p
          className={cn(
            "text-[#334155]",
            compact ? "mt-2 line-clamp-2 text-sm leading-5 sm:line-clamp-3 sm:text-base sm:leading-6" : "mt-4 text-base leading-7",
          )}
        >
          {excerpt}
        </p>

        <div
          className={cn(
            "flex flex-wrap items-center font-semibold text-[#5F6F86]",
            compact ? "mt-2 gap-3 text-xs sm:text-sm" : "mt-5 gap-4 text-sm",
          )}
        >
          <span className="inline-flex items-center gap-1.5 sm:gap-2">
            <Calendar className={cn("text-[#FF6B2C]", compact ? "h-3.5 w-3.5 sm:h-4 sm:w-4" : "h-4 w-4")} aria-hidden />
            {publishedAt}
          </span>
          <span className="inline-flex items-center gap-1.5 sm:gap-2">
            <Clock className={cn("text-[#FF6B2C]", compact ? "h-3.5 w-3.5 sm:h-4 sm:w-4" : "h-4 w-4")} aria-hidden />
            {readTime}
          </span>
        </div>

        <BlogNavLink
          href={href}
          className={cn(
            buttonVariants({ variant: "outline", size: compact ? "sm" : "default" }),
            compact ? "mt-2.5" : "mt-6",
          )}
        >
          {readMoreLabel}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </BlogNavLink>
      </div>
    </motion.article>
  );
}
