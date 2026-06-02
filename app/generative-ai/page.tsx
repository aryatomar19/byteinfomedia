import type { Metadata } from "next";
import { GenerativeAIPage } from "@/components/sections/GenerativeAIPage";
import { generativeAiPageData } from "@/data/generative-ai-page";

export const metadata: Metadata = {
  title: "Generative AI",
  description: generativeAiPageData.hero.description,
  alternates: { canonical: "/generative-ai/" },
};

export default function Page() {
  return <GenerativeAIPage />;
}
