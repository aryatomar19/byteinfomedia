import type { Metadata } from "next";
import { PremiumServicePage } from "@/components/sections/PremiumServicePage";
import { generativeAiPage } from "@/data/generative-ai";

export const metadata: Metadata = {
  title: "Generative AI",
  description: generativeAiPage.hero.description,
  alternates: { canonical: "/generative-ai/" },
};

export default function Page() {
  return <PremiumServicePage data={generativeAiPage} />;
}
