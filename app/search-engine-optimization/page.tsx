import type { Metadata } from "next";
import { SearchEngineOptimizationPage } from "@/components/sections/SearchEngineOptimizationPage";
import { searchEngineOptimizationPage } from "@/data/search-engine-optimization";

export const metadata: Metadata = {
  title: "Search Engine Optimization (SEO)",
  description: searchEngineOptimizationPage.hero.description,
  alternates: { canonical: "/search-engine-optimization/" },
};

export default function Page() {
  return <SearchEngineOptimizationPage />;
}
