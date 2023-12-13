import Image from "next/image";
import {
  HERO_SECTION_SCROLL_TO_THE_FUTURE,
  HERO_SECTION_SLOGAN,
} from "@/app/utils/constants";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center items-center relative -top-[120px] h-screen">
      <div className="fade-strip-top" />
      <div className="fade-strip-bottom" />
      <div className="fade-strip-left" />
      <div className="fade-strip-right" />
      <div className="flex justify-between w-full h-screen">
        <Image
          src="/images/saveTheWorldLeft.png"
          alt="solar panel"
          priority
          width={833}
          height={1080}
          className="object-fill max-w-[50%]"
        />
        <Image
          src="/images/saveTheWorldRight.png"
          alt="solar panel"
          priority
          width={833}
          height={1080}
          className="object-fill max-w-[50%]"
        />
      </div>

      <h1
        className="max-w-6xl text-9xl font-bold absolute text-center"
        style={{ fontSize: "clamp(1.5rem, 10vw, 8rem)" }}
      >
        {HERO_SECTION_SLOGAN}
      </h1>

      <div className="flex items-center flex-col gap-4 absolute bottom-[10%] left-2/4 -translate-x-2/4 text-center z-30 font-semibold text-xl">
        <span>{HERO_SECTION_SCROLL_TO_THE_FUTURE}</span>
        <Image
          src="/images/arrowFuture.svg"
          alt="arrow"
          width={23}
          height={24}
        />
      </div>
    </div>
  );
}
