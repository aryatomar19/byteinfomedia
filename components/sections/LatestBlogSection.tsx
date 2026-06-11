"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { latestBlogSection } from "@/data/blog";
import { FeaturedBlogCard } from "@/components/sections/FeaturedBlogCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";

export function LatestBlogSection() {
  return (
    <section
      className="border-t border-[#0A0F1C]/6 bg-[#F7F8FA] py-10 md:py-12 lg:py-14"
      aria-labelledby="latest-blog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={latestBlogSection.eyebrow}
          title={latestBlogSection.title}
          description={latestBlogSection.subtitle}
        />

        <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
          <FeaturedBlogCard />
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Button variant="secondary" size="lg" asChild>
            <Link href={latestBlogSection.viewAllHref} scroll>
              {latestBlogSection.viewAllLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
