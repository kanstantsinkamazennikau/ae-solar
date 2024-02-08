import {
  PRODUCTS_LIGHTING,
  PRODUCTS_WELCOME,
} from "@/app/[locale]/products/constants";
import Image from "next/image";

export default function LightingTheWay() {
  return (
    <div
      className="
        relative
        -top-20
        2xl:h-[600px]
        h-[400px]
        bg-[url('/images/products/productsFlower.png')]
        bg-cover
        bg-center
        bg-no-repeat
        w-full
        max-w-[1920px]
        mx-auto
      "
    >
      <div
        className="
          absolute
          inline-flex
          flex-col
          md:gap-[30px]
          gap-4
          font-medium
          max-w-[1100px]
          w-full
          px-5
          items-center
          bottom-[15%]
          -translate-x-1/2
          left-1/2
        "
      >
        <p className="text-center text-base-red -tracking-[1.2px] leading-none [font-size:_clamp(20px,2vw,36px)]">
          {PRODUCTS_WELCOME}
        </p>
        <p className="text-8xl text-center -tracking-[2.88px] leading-none [font-size:_clamp(34px,5vw,102px)] max-w-[1000px] after:p-0">
          {PRODUCTS_LIGHTING}
        </p>
      </div>
      <Image
        src={`/images/glowFull.png`}
        alt="glow"
        priority
        width={1320}
        height={60}
        className="absolute -bottom-[60px] -translate-x-1/2 left-1/2 rotate-180 h-[60px]"
      />
    </div>
  );
}
