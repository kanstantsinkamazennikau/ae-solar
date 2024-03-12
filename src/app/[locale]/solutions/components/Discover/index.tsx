import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import {
  SOLUTIONS_DISCOVER_AESOLAR,
  SOLUTIONS_DISCOVER_YOUR_PARTNER,
  SOLUTIONS_LEADING_PROVIDER,
  SOLUTIONS_LEARN_MORE,
} from "@/app/[locale]/solutions/constants";
import Image from "next/image";

export default function Discover() {
  return (
    <div className="-mt-[80px] overflow-hidden 2xl:-mb-[120px] xl:-mb-[60px] md:-mb-[20px] mb-[100px] flex md:flex-row flex-col justify-center">
      <Image
        src="/images/solutions/heroSectionBackground.svg"
        alt="heroSectionBackground"
        width={1920}
        height={1080}
        priority
        className="
          md:min-h-[400px]
          min-h-[300px]
          mt-10
        "
      />
      <div
        className="
          flex
          flex-col
          max-w-[1100px]
          lg:gap-[40px]
          md:gap-[20px]
          gap-[10px]
          items-center
          justify-center
          min-[2560px]:top-[10%]
          xl:top-[22%]
          lg:top-[15%]
          top-[10%]
          md:left-1/2
          md:-translate-x-1/2
          md:absolute
          md:mt-0
          min-[540px]:-mt-[20%]
          min-[400px]:-mt-[40%]
          -mt-[60%]
          relative
          w-full
          px-5
        "
      >
        <div className="flex flex-col gap-4 xl:max-w-[1100px] lg:max-w-[800px] min-[400px]:max-w-[600px] max-w-[240px] text-center">
          <div className=" text-base-red md:-tracking-[1.2px] leading-[120%] [font-size:_clamp(20px,3vw,36px)] font-medium">
            {SOLUTIONS_DISCOVER_AESOLAR}
          </div>
          <div className="[font-size:_clamp(30px,5.5vw,96px)] leading-[100%] font-semibold">
            {SOLUTIONS_DISCOVER_YOUR_PARTNER}
          </div>
        </div>

        <div className="max-w-[538px] flex flex-col items-center lg:gap-6 gap-4">
          <p className="[font-size:_clamp(16px,1.5vw,20px)] font-walsheim font-medium leading-[150%] text-center">
            {SOLUTIONS_LEADING_PROVIDER}
          </p>
          <LinkWithArrow
            label={SOLUTIONS_LEARN_MORE}
            href="/company"
            externalStyle="[font-size:_clamp(16px,1vw,20px)!important] font-medium"
          />
        </div>
      </div>
    </div>
  );
}
