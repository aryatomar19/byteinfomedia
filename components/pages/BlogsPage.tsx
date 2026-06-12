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
      <section className="border-b border-[#0A0F1C]/6 bg-white py-6 sm:py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="mb-3 -ml-2" asChild>
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
          />
        </div>
      </section>

      <section className="py-4 md:py-5 lg:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FeaturedBlogCard compact />
          </div>
        </div>
      </section>
    </div>
  );
}
