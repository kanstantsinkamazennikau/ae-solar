import BusinessMap from "@/app/[locale]/about/components/BusinessMap";
import HeroSection from "@/app/[locale]/about/components/HeroSection";
import Mission from "@/app/[locale]/about/components/Mission";
import OurHistory from "@/app/[locale]/about/components/OurHistory";
import SequenceAnimation from "@/app/[locale]/about/components/SequenceAnimation";
import AwardsAndStats from "@/app/[locale]/components/AwardsAndStats";

export default function About() {
  return (
    <>
      <HeroSection />
      <Mission />
      <AwardsAndStats />
      <BusinessMap />
      {/* <OurHistory /> */}
      <SequenceAnimation />
    </>
  );
}
