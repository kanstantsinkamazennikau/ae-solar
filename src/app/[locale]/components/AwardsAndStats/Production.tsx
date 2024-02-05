import {
  AWARDS_AND_STATS_GERMAN_ENGINEERING,
  AWARDS_AND_STATS_PRODUCTION_PLANTS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Production() {
  return (
    <div className="flex md:gap-[50px] lg:gap-[60px] xl:gap-[80px] gap-3 max-w-[1100px] self-center px-5">
      <div className="flex justify-end items-center gap-1 md:gap-4 flex-grow flex-shrink basis-0">
        <div className="[font-size:_clamp(14px,3vw,40px)] font-bold leading-none text-right self-center">
          {AWARDS_AND_STATS_GERMAN_ENGINEERING}
        </div>
        <Image
          src="/images/german.svg"
          alt="german"
          width={76}
          height={76}
          priority
          className="md:w-[76px] w-10"
        />
      </div>
      <div className="w-0.5 bg-[#191919] h-auto" />
      <div className="[font-size:_clamp(12px,3vw,40px)] font-bold leading-none flex-grow flex-shrink basis-0 self-center">
        {AWARDS_AND_STATS_PRODUCTION_PLANTS}
      </div>
    </div>
  );
}
