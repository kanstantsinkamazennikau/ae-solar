import BusinessMap from "@/app/[locale]/company/components/BusinessMap";
import HeroSection from "@/app/[locale]/company/components/HeroSection";
import BornInGermany from "@/app/[locale]/company/components/BornInGermany";
import OurHistory from "@/app/[locale]/company/components/OurHistory";
import SequenceAnimation from "@/app/[locale]/company/components/SequenceAnimation";
import AwardsAndStats from "@/app/[locale]/components/AwardsAndStats";
import AboutAwards from "@/app/[locale]/company/components/AboutAwards";

export default function About() {
  return (
    <>
      <HeroSection />
      <BornInGermany />
      <AboutAwards />
      <BusinessMap />
      <OurHistory />
      <SequenceAnimation />
    </>
  );
}
