import {
  AWARDS_AND_STATS_GERMAN_ENGINEERING,
  AWARDS_AND_STATS_PRODUCTION_PLANTS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Production() {
  return (
    <div className="flex gap-[120px] max-w-[1100px] self-center">
      <div className="flex justify-end items-center gap-4 flex-grow flex-shrink basis-0">
        <div className="text-[40px] font-bold leading-none text-right">
          {AWARDS_AND_STATS_GERMAN_ENGINEERING}
        </div>
        <Image
          src="/images/german.svg"
          alt="german"
          width={76}
          height={76}
          priority
        />
      </div>
      <div className="w-1 bg-white opacity-20 h-auto" />
      <div className="text-[40px] font-bold leading-none flex-grow flex-shrink basis-0">
        {AWARDS_AND_STATS_PRODUCTION_PLANTS}
      </div>
    </div>
  );
}
