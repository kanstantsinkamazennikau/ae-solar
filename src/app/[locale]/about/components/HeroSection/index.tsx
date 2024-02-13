import Button from "@/app/[locale]/components/common/Button";
import {
  ABOUT_COMPANY_FOUNDATION,
  ABOUT_COMPANY_FOUNDATION_WORDS_TO_HIGHLIGHT,
  ABOUT_DOWNLOAD_PRESENTATION,
  ABOUT_SUSTAINABLE,
  ABOUT_WATCH_VIDEO,
} from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";

export default async function HeroSection() {
  return (
    <div className="w-full flex justify-center items-center relative -top-[60px] h-screen">
      <div className="!-top-[120px] fade-strip-top " />
      <div className="fade-strip-bottom" />
      <div className="fade-strip-left" />
      <div className="fade-strip-right" />

      <Image
        src="/images/about/heroSection.svg"
        alt="solar panel"
        priority
        width={1920}
        height={1080}
        className="object-fill h-full w-full"
      />
      <div className="absolute inline-flex flex-col gap-[70px] font-medium max-w-[810px] items-center top-1/4 z-30 mx-5">
        <div
          className="
            [font-size:_clamp(50px,6vw,128px)]
            font-extrabold
            leading-[100%]
            -tracking-[3.84px]
          text-white
            text-center
          "
        >
          {ABOUT_SUSTAINABLE.split(/\r?\n|\r|\n/g).map((string, index) => (
            <div
              key={string}
              className={`${index === 0 ? "text-dark-gray-900" : ""}`}
            >
              {string}
            </div>
          ))}
        </div>
        <div className="text-center">
          {styleMatchingText(
            ABOUT_COMPANY_FOUNDATION,
            ABOUT_COMPANY_FOUNDATION_WORDS_TO_HIGHLIGHT,
            "font-walsheim leading-[170%] font-semibold [font-size:_clamp(16px,2vw,24px)]",
            "text-dark-gray-900"
          )}
        </div>
        <div className="flex gap-5">
          <Button size="normal">
            <span className="max-w-[236px] [font-size:_clamp(16px,2vw,20px)] font-semibold -tracking-[0.2px] leading-none">
              {ABOUT_DOWNLOAD_PRESENTATION}
            </span>
          </Button>
          <Button size="normal">
            <span className="max-w-[236px] [font-size:_clamp(16px,2vw,20px)] font-semibold -tracking-[0.2px] leading-none">
              {ABOUT_WATCH_VIDEO}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
