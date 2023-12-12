import AwardsAndStats from "@/app/home/AwardsAndStats";
import FeaturedProducts from "@/app/home/FeaturedProducts";
import HeroSection from "@/app/home/HeroSection";
import { MainPageFAQ } from "@/app/home/MainPageFAQ";
import Reviews from "@/app/home/Reviews";
import TechInfo from "@/app/home/TechInfo";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AwardsAndStats />
      <FeaturedProducts />
      <TechInfo />
      <Reviews />
      <MainPageFAQ />
    </main>
  );
}
