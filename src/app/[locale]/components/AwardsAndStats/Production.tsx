import {
  AWARDS_AND_STATS_GERMAN_ENGINEERING,
  AWARDS_AND_STATS_PRODUCTION_PLANTS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Production() {
  return (
    <div className="flex md:gap-[50px] lg:gap-[80px] xl:gap-[120px] gap-4 max-w-[1100px] self-center px-5">
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
      <div className="w-0.5 bg-white opacity-20 h-auto" />
      <div className="[font-size:_clamp(14px,3vw,40px)] font-bold leading-none flex-grow flex-shrink basis-0 self-center">
        {AWARDS_AND_STATS_PRODUCTION_PLANTS}
      </div>
    </div>
  );
}
