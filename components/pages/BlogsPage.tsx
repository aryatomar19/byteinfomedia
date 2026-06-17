"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts, latestBlogSection } from "@/data/blog";
import { FeaturedBlogCard } from "@/components/sections/FeaturedBlogCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";

export function BlogsPage() {
  return (
    <div className="bg-[#F7F8FA]">
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="mb-4 h-8 -ml-2 px-2" asChild>
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

          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {blogPosts.map((blog, index) => (
              <FeaturedBlogCard key={blog.slug} blog={blog} index={index} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
