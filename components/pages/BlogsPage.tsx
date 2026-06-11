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
      <section className="border-b border-[#0A0F1C]/6 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="mb-6 -ml-2" asChild>
            <Link href="/" scroll>
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <SectionHeading
            eyebrow={latestBlogSection.eyebrow}
            title="Our Blogs"
            description={latestBlogSection.subtitle}
            centered={false}
          />
        </div>
      </section>

      <section className="py-10 md:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FeaturedBlogCard />
          </div>
        </div>
      </section>
    </div>
  );
}
