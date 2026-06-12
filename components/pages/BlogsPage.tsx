"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { latestBlogSection } from "@/data/blog";
import { FeaturedBlogCard } from "@/components/sections/FeaturedBlogCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";

export function BlogsPage() {
  return (
    <div className="bg-[#F7F8FA]">
      <section className="border-b border-[#0A0F1C]/6 bg-white pt-2 pb-4 sm:pt-3 sm:pb-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="mb-1 h-8 -ml-2 px-2" asChild>
            <Link href="/" scroll>
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <SectionHeading
            title="Our Blogs"
            description={latestBlogSection.subtitle}
            centered={false}
            flushTitle
            compact
            dense
          />
          <div className="mx-auto mt-3 max-w-5xl sm:mt-4">
            <FeaturedBlogCard compact />
          </div>
        </div>
      </section>
    </div>
  );
}
