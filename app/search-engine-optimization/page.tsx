import type { Metadata } from "next";
import { BrandingServicePage } from "@/components/sections/BrandingServicePage";
import { searchEngineOptimizationPage } from "@/data/search-engine-optimization";

export const metadata: Metadata = {
  title: "Search Engine Optimization (SEO)",
  description: searchEngineOptimizationPage.hero.description,
  alternates: { canonical: "/search-engine-optimization/" },
};

export default function Page() {
  return <BrandingServicePage data={searchEngineOptimizationPage} />;
}
