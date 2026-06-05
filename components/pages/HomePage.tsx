import { AboutByteInfomedia } from "@/components/sections/AboutByteInfomedia";
import { EsteemedClients } from "@/components/sections/EsteemedClients";
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
      <EsteemedClients />
      <AboutByteInfomedia />
      <GrowYourBusiness />
      <TrustedTechnologyPartners />
      <ContactSection />
    </>
  );
}
