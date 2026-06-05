import { AboutByteInfomedia } from "@/components/sections/AboutByteInfomedia";
import { GrowYourBusiness } from "@/components/sections/GrowYourBusiness";
import { OurVision } from "@/components/sections/OurVision";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TrustedTechnologyPartners } from "@/components/sections/TrustedTechnologyPartners";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <OurVision />
      <ServicesOverview />
      <AboutByteInfomedia />
      <GrowYourBusiness />
      <TrustedTechnologyPartners />
      <ContactSection />
    </>
  );
}
