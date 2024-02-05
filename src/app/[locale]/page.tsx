import AwardsAndStats from "@/app/[locale]/components/AwardsAndStats";
import GetInTouch from "@/app/[locale]/components/GetInTouch";
import HeroSection from "@/app/[locale]/components/HeroSection";
import { MainPageFAQ } from "@/app/[locale]/components/MainPageFAQ";
import ProductIntro from "@/app/[locale]/components/ProductIntro";
import Reviews from "@/app/[locale]/components/Reviews";
import TechInfo from "@/app/[locale]/components/TechInfo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <HeroSection />
      <div className="w-full relative">
        <div className="absolute w-full h-[40%] flex">
          <div className="fade-strip-top !h-[100px]" />
          <Image
            src="/images/solarSystem.svg"
            alt="solarSystem"
            width={1920}
            height={620}
            priority
            className="absolute h-full object-cover left-1/2 -translate-x-1/2 -z-0"
          />
          <div className="fade-strip-bottom !h-[100px]" />
        </div>

        <AwardsAndStats />
        <ProductIntro />
      </div>

      {/* <div className="w-[1440px] flex items-center relative flex-col ">
        <div className="absolute w-full -top-[380px]">
          <div
            className="
              w-full
              h-[520px]
              border-2
              border-solid
              border-y-0
              bg-[linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#0D0D0D_100%)]
              [border-image:linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#131313_100%)_1]
            "
          />
          <div className="w-full h-[880px] border-2 border-solid border-x-[#151515] border-y-0 bg-[#0D0D0D]" />
          <div
            className="
              w-full
              h-[600px]
              border-2
              border-solid
              border-y-0
              bg-[linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#0D0D0D_100%)]
              [border-image:linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#131313_100%)_1]
              rotate-180
            "
          />
        </div> */}

      <TechInfo />
      {/* </div> */}

      <GetInTouch />
      <Reviews />
      <MainPageFAQ />
    </main>
  );
}
