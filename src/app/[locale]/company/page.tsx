import BusinessMap from "@/app/[locale]/about/components/BusinessMap";
import HeroSection from "@/app/[locale]/about/components/HeroSection";
import BornInGermany from "@/app/[locale]/about/components/BornInGermany";
import OurHistory from "@/app/[locale]/about/components/OurHistory";
import SequenceAnimation from "@/app/[locale]/about/components/SequenceAnimation";
import AwardsAndStats from "@/app/[locale]/components/AwardsAndStats";
import AboutAwards from "@/app/[locale]/about/components/AboutAwards";

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
