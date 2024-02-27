import {
  ABOUT_OUR_DESIGN,
  ABOUT_OUR_DESIGN_HIGHLIGHT,
  ABOUT_OUR_GOES_BEYOND,
  ABOUT_OUR_PORTFOLIO,
} from "@/app/[locale]/company/constants";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import {
  CONSTRUCTOR_CONFIGURE_YOUR_MODEL,
  HEADER_CONFIGURE_YOUR_MODEL,
} from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";

export default function PortfolioBackground() {
  return (
    <div className="xl:mb-[180px] lg:mb-[140px] md:mb-[100px] mb-[80px] flex justify-center items-start -mt-20">
      {/* <BasicWidthContainer> */}
      <div className="relative flex justify-center">
        <Image
          src="/images/about/portfolioBackground.png"
          alt="solar panel"
          priority
          width={1320}
          height={720}
          className="max-md:h-[540px] object-cover"
        />
        <div className="flex flex-col items-start md:gap-10 gap-8 absolute top-1/2 -translate-y-1/2 right-0">
          <div
            className="
              flex
              2xl:max-w-[650px]
              xl:max-w-[600px]
              lg:max-w-[550px]
              md:max-w-[550px]
              flex-col
              items-start
              md:gap-8
              gap-6
            "
          >
            <div className="flex flex-col gap-2">
              <p
                className="
                  leading-[120%]
                  font-medium
                  [font-size:_clamp(20px,3.5vw,36px)]
                  capitalize
                  md:-tracking-[1.08px]
                  text-base-red
                "
              >
                {ABOUT_OUR_PORTFOLIO}
              </p>
              <p
                className="
                  leading-[110%]
                  font-semibold
                  [font-size:_clamp(32px,3.5vw,64px)]
                  capitalize
                  md:-tracking-[1.92px]
                  -tracking-[1.08px]
                "
              >
                {ABOUT_OUR_GOES_BEYOND}
              </p>
            </div>

            <p
              className="
                  font-walsheim
                  leading-[150%]
                  [font-size:_clamp(16px,1.5vw,24px)]
                "
            >
              {styleMatchingText(
                ABOUT_OUR_DESIGN,
                ABOUT_OUR_DESIGN_HIGHLIGHT,
                "text-dark-gray-900 font-normal",
                "text-white font-bold"
              )}
            </p>
          </div>
          <Button size="normal" externalStyle="max-[768px]:!py-4">
            <span className="[font-size:_clamp(20px,1.5vw,20px)] font-semibold -tracking-[0.2px]">
              {CONSTRUCTOR_CONFIGURE_YOUR_MODEL}
            </span>
          </Button>
        </div>
      </div>
      {/* </BasicWidthContainer> */}
    </div>
  );
}
