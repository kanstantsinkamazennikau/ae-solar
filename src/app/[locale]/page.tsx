import AwardsAndStats from "@/app/[locale]/home/AwardsAndStats";
import GetInTouch from "@/app/[locale]/home/GetInTouch";
import HeroSection from "@/app/[locale]/home/HeroSection";
import { MainPageFAQ } from "@/app/[locale]/home/MainPageFAQ";
import ProductIntro from "@/app/[locale]/home/ProductIntro";
import Reviews from "@/app/[locale]/home/Reviews";
import TechInfo from "@/app/[locale]/home/TechInfo";

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
