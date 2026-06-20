import { EsteemedClients } from "@/components/sections/EsteemedClients";
import { GrowYourBusiness } from "@/components/sections/GrowYourBusiness";
import { OurVision } from "@/components/sections/OurVision";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeServiceCategories } from "@/components/sections/HomeServiceCategories";
import { TrustedTechnologyPartners } from "@/components/sections/TrustedTechnologyPartners";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <OurVision />
      <HomeServiceCategories />
      <EsteemedClients />
      <GrowYourBusiness />
      <TrustedTechnologyPartners />
      <ContactSection />
    </>
  );
}
