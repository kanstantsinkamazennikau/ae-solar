import AwardsAndStats from "@/app/[locale]/components/AwardsAndStats";
import GetInTouch from "@/app/[locale]/components/GetInTouch";
import HeroSection from "@/app/[locale]/components/HeroSection";
import { MainPageFAQ } from "@/app/[locale]/components/MainPageFAQ";
import ProductIntro from "@/app/[locale]/components/ProductIntro";
import Reviews from "@/app/[locale]/components/Reviews";
import TechInfo from "@/app/[locale]/components/TechInfo";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <HeroSection />
      <AwardsAndStats />
      <ProductIntro />
      <TechInfo />
      <GetInTouch />
      <Reviews />
      <MainPageFAQ />
    </main>
  );
}
