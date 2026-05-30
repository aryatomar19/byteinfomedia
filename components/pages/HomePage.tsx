import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyByteInfomedia } from "@/components/sections/WhyByteInfomedia";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutPreview />
      <ServicesOverview />
      <WhyByteInfomedia />
      <ContactSection />
    </>
  );
}
