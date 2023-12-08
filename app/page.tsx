import Accordion from "@/app/components/Accordion";
import Dropdown from "@/app/components/Dropdown";
import HeroSection from "@/app/components/HeroSection";
import { MainPageFAQ } from "@/app/components/MainPageFAQ";
import { MAIN_PAGE_ACCORDION_DATA } from "@/app/utils/constants";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <MainPageFAQ />
    </main>
  );
}
