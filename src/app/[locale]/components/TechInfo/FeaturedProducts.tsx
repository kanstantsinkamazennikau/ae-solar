"use client";

import Button from "@/app/[locale]/components/common/Button";
import {
  HEADER_CONFIGURE_YOUR_MODEL,
  TECH_INFO_EXPLORE,
  TECH_INFO_INNOVATIVE,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <div
      className="
        bg-[url('/images/featuredProducts.png')] 
        object-fill 
        w-full
        xl:h-[800px]
        lg:h-[600px]
        md:h-[400px]
        bg-no-repeat 
        bg-contain 
        bg-center 
        justify-end 
        flex 
        items-center
        flex-col
        px-5
        mb-[80px]
        md:[background-position-y:-35px]
        lg:[background-position-y:0px]
        [background-position-y:-13px]
        h-[360px]
      "
    >
      <div className="flex flex-col items-center lg:gap-[68px] md:gap-[38px] gap-8 w-full">
        <div className="text-center font-bold leading-[1.2] -tracking-[0.64] [font-size:_clamp(24px,4vw,64px)]">
          <p>{TECH_INFO_INNOVATIVE}</p>
          <p className="text-dark-gray-900">{TECH_INFO_EXPLORE}</p>
        </div>
        <div className="relative w-full justify-center items-center flex">
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="absolute -translate-y-[calc(50%-1px)]"
          />
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="w-full absolute rotate-180 translate-y-[calc(50%-1px)]"
          />
          <Button style="outline" externalStyle="!bg-black" size="thin">
            <Link href="/calculate">
              <span className="[font-size:_clamp(12px,1.5vw,20px)] -tracking-[0.24px] font-semibold">
                {HEADER_CONFIGURE_YOUR_MODEL}
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
