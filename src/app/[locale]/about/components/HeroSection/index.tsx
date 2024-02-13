import {
  ABOUT_ILLUMINATING,
  ABOUT_MANUFACTURER,
  ABOUT_DOWNLOAD_PRESENTATION,
  ABOUT_WATCH_VIDEO,
} from "@/app/[locale]/about/constants";
import Button from "@/app/[locale]/components/common/Button";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";

export default async function HeroSection() {
  return (
    <div className="w-full flex justify-center items-center relative -mt-[80px] flex-col overflow-x-hidden">
      <div className="fade-strip-bottom !h-[200px]" />
      <Image
        src="/images/about/aboutPath.svg"
        alt="solar panel"
        priority
        width={1320}
        height={525}
        className="h-[525px]"
      />
      <Image
        src="/images/about/aboutPath.svg"
        alt="solar panel"
        priority
        width={1320}
        height={525}
        className="rotate-180 h-[525px] relative -mt-[100px]"
      />
      <div className="absolute inline-flex flex-col gap-[60px] max-w-[1100px] items-center -translate-y-1/2 top-1/2">
        <div className="flex flex-col gap-6">
          <div
            className="
            [font-size:_clamp(20px,2vw,36px)]
            font-medium
            leading-[100%]
            -tracking-[1.08px]
          text-base-red
            text-center
          "
          >
            {ABOUT_MANUFACTURER}
          </div>
          <div
            className="
          text-center
          shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
          [font-size:_clamp(50px,5.5vw,102px)]
          font-semibold
          leading-[100%]
          -tracking-[4.08px]
        "
          >
            {ABOUT_ILLUMINATING}
          </div>
        </div>

        <div className="flex gap-5">
          <Button size="normal">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/images/downloadFileWhite.svg"
                alt="downloadFileWhite"
                priority
                width={24}
                height={24}
              />
              <p className="max-w-[160px] [font-size:_clamp(12px,1vw,16px)] font-semibold -tracking-[0.16px] text-left capitalize leading-[120%]">
                {ABOUT_DOWNLOAD_PRESENTATION}
              </p>
            </div>
          </Button>
          <Button size="normal" style="outline">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/images/video.svg"
                alt="downloadFileWhite"
                priority
                width={24}
                height={24}
              />
              <p className="max-w-[160px] [font-size:_clamp(12px,1vw,16px)] font-semibold -tracking-[0.16px] text-left capitalize leading-[120%]">
                {ABOUT_WATCH_VIDEO}
              </p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
