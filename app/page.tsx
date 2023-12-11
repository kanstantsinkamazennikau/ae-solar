import Accordion from "@/app/components/common/Accordion";
import Dropdown from "@/app/components/common/Dropdown";
import AwardsAndStats from "@/app/components/mainPage/AwardsAndStats";
import FeaturedProducts from "@/app/components/mainPage/FeaturedProducts";
import HeroSection from "@/app/components/mainPage/HeroSection";
import { MainPageFAQ } from "@/app/components/mainPage/MainPageFAQ";
import TechInfo from "@/app/components/mainPage/TechInfo";
import { MAIN_PAGE_ACCORDION_DATA } from "@/app/utils/constants";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AwardsAndStats />
      <FeaturedProducts />
      <TechInfo />
      <MainPageFAQ />
    </main>
  );
}
