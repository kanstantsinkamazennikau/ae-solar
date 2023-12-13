import AwardsAndStats from "@/app/[locale]/home/AwardsAndStats";
import FeaturedProducts from "@/app/[locale]/home/FeaturedProducts";
import GetInTouch from "@/app/[locale]/home/GetInTouch";
import HeroSection from "@/app/[locale]/home/HeroSection";
import { MainPageFAQ } from "@/app/[locale]/home/MainPageFAQ";
import Reviews from "@/app/[locale]/home/Reviews";
import TechInfo from "@/app/[locale]/home/TechInfo";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";

export default function Home({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  return (
    <main className="flex flex-col items-center w-full">
      <HeroSection />
      <AwardsAndStats />
      <FeaturedProducts />
      <TechInfo />
      <Reviews />
      <GetInTouch />
      <MainPageFAQ />
    </main>
  );
}
