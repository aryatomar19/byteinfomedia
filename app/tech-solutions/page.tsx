import type { Metadata } from "next";
import { TechSolutionsPage } from "@/components/sections/TechSolutionsPage";
import { techSolutionsPage } from "@/data/tech-solutions";

export const metadata: Metadata = {
  title: "Tech Solutions",
  description: techSolutionsPage.hero.description,
  alternates: { canonical: "/tech-solutions/" },
};

export default function Page() {
  return <TechSolutionsPage />;
}
