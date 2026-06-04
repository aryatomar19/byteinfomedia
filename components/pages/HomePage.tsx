import { OurVision } from "@/components/sections/OurVision";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TrustedTechnologyPartners } from "@/components/sections/TrustedTechnologyPartners";
import { WhyByteInfomedia } from "@/components/sections/WhyByteInfomedia";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <OurVision />
      <ServicesOverview />
      <TrustedTechnologyPartners />
      <WhyByteInfomedia />
      <ContactSection />
    </>
  );
}
