import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { generativeAiPage } from "@/data/generative-ai";

export const metadata: Metadata = {
  title: "Generative AI",
  description: generativeAiPage.hero.description,
  alternates: { canonical: "/generative-ai/" },
};

export default function Page() {
  return <ServicePageTemplate data={generativeAiPage} />;
}
