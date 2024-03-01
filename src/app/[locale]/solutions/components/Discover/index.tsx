import Button from "@/app/[locale]/components/common/Button";
import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import {
  SOLUTIONS_DISCOVER_AESOLAR,
  SOLUTIONS_DISCOVER_AESOLAR_WORDS_TO_HIGHLIGHT,
  SOLUTIONS_LEADING_PROVIDER,
  SOLUTIONS_LEARN_MORE,
} from "@/app/[locale]/solutions/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
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
          lg:scale-100
          md:scale-150
          scale-[3]
          min-h-[500px]
        "
      />
      <div
        className="
          flex
          flex-col
          max-w-[1100px]
          lg:gap-[60px]
          gap-[30px]
          md:items-end
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
        <div className="xl:max-w-[1100px] lg:max-w-[800px] min-[400px]:max-w-[600px] max-w-[240px] md:self-start md:text-left text-center">
          {styleMatchingText(
            SOLUTIONS_DISCOVER_AESOLAR,
            SOLUTIONS_DISCOVER_AESOLAR_WORDS_TO_HIGHLIGHT,
            "[font-size:_clamp(30px,5vw,96px)] font-extrabold leading-[110%] -tracking-[1.2px]",
            "text-base-red"
          )}
        </div>
        <div className="max-w-[538px] flex flex-col md:items-start items-center lg:gap-8 gap-4 md:pr-11">
          <p className="[font-size:_clamp(16px,1vw,16px)] font-walsheim font-medium leading-[150%] md:text-start text-center">
            {SOLUTIONS_LEADING_PROVIDER}
          </p>
          <LinkWithArrow
            label={SOLUTIONS_LEARN_MORE}
            href="/company"
            externalStyle="[font-size:_clamp(11px,1vw,14px)!important]"
          />
        </div>
      </div>
    </div>
  );
}
