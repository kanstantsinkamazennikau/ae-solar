import {
  ABOUT_BORN_IN_GERMANY,
  ABOUT_BORN_STORY,
  ABOUT_BORN_STORY_WORDS_TO_HIGHLIGHT,
} from "@/app/[locale]/company/constants";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";

export default function BornInGermany() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        {/* DESKTOP */}
        {/* <div
          className="
            bg-[url('/images/about/bornInGermany.png')]
            xl:h-[600px]
            lg:h-[550px]
            md:h-[450px]
            min-[560px]:h-[300px]
            h-[450px]
            w-full
            pr-5
            bg-no-repeat
            md:pl-[44%]
            pl-[40%]
            xl:pt-[10%]
            lg:pt-[12%]
            md:pt-[9%]
            pt-[6%]
            mb-20
            [background-size:100%_100%]
            z-30
            relative
            min-[560px]:block
            hidden
          "
        >
          <div
            className="
              flex
              lg:max-w-[84%]
              md:max-w-[88%]
              flex-col
              text-black
            "
          >
            <p
              className="
                xl:mb-8
                lg:mb-4
                md:mb-2
                font-walsheim
                leading-[120%]
                font-semibold
                [font-size:_clamp(30px,3.5vw,64px)]
              "
            >
              {ABOUT_BORN_IN_GERMANY}
            </p>
            {ABOUT_BORN_STORY.split(/\r?\n|\r|\n/g).map((string, index) => (
              <div
                key={string}
                className="
                  xl:mb-6
                  lg:mb-4
                  md:mb-3
                  after:pl-0
                "
              >
                {styleMatchingText(
                  string,
                  ABOUT_BORN_STORY_WORDS_TO_HIGHLIGHT,
                  "font-walsheim leading-[150%] font-normal [font-size:_clamp(12px,1.5vw,20px)]",
                  "font-bold"
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* MOBILE */}
        {/* <Image
          src="/images/about/bornInGermany.png"
          alt="solar panel"
          priority
          width={1320}
          height={525}
          className="z-30 relative mb-8 min-[560px]:hidden"
        />
        <div
          className="
            flex
            flex-col
            min-[560px]:hidden
            mb-16
          "
        >
          <p
            className="
              font-walsheim
              leading-[130%]
              font-semibold
              [font-size:_clamp(36px,3.5vw,64px)]
              mb-4
            "
          >
            {ABOUT_BORN_IN_GERMANY}
          </p>
          {ABOUT_BORN_STORY.split(/\r?\n|\r|\n/g).map((string, index) => (
            <div
              key={string}
              className="
                mb-4
              "
            >
              {styleMatchingText(
                string,
                ABOUT_BORN_STORY_WORDS_TO_HIGHLIGHT,
                "font-walsheim leading-[150%] font-normal [font-size:_clamp(12px,1.5vw,20px)]",
                "font-bold"
              )}
            </div>
          ))}
        </div> */}

        <div
          className="
            bg-[url('/images/about/bornInGermany2.png')]
            xl:h-[600px]
            lg:h-[550px]
            md:h-[450px]
            min-[560px]:h-[400px]
            h-[450px]
            w-full         
            bg-no-repeat
            mb-20
            min-[560px]:[background-size:100%_100%]
            bg-contain
            z-30
            relative
            min-[560px]:block
            hidden
          "
        >
          <div
            className="
              flex
              w-full
              lg:py-[70px]
              lg:px-[120px]
              md:py-[50px]
              md:px-[80px]
              min-[560px]:py-[30px]
              min-[560px]:px-[40px]
              flex-col
              items-start
              lg:gap-8
              gap-5
              text-black
            "
          >
            <p
              className="
                font-walsheim
                font-semibold
                [font-size:_clamp(30px,3.5vw,64px)]
                leading-[clamp(30px,3.5vw,64px)]
              "
            >
              {ABOUT_BORN_IN_GERMANY}
            </p>
            <hr className="h-1 bg-base-red border-none w-full" />
            <div className="flex gap-3">
              {ABOUT_BORN_STORY.split(/\r?\n|\r|\n/g).map((string) => (
                <div key={string} className="md:leading-[150%] leading-[120%]">
                  {styleMatchingText(
                    string,
                    ABOUT_BORN_STORY_WORDS_TO_HIGHLIGHT,
                    "font-walsheim font-normal [font-size:_clamp(12px,1.5vw,20px)]",
                    "font-bold"
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Image
          src="/images/about/bornInGermany2.png"
          alt="bornInGermany2"
          priority
          width={1320}
          height={525}
          className="z-30 relative mb-8 min-[560px]:hidden"
        />
        <div
          className="
            flex
            flex-col
            min-[560px]:hidden
            mb-16
          "
        >
          <p
            className="
              font-walsheim
              leading-[130%]
              font-semibold
              [font-size:_clamp(36px,3.5vw,64px)]
              mb-4
            "
          >
            {ABOUT_BORN_IN_GERMANY}
          </p>
          {ABOUT_BORN_STORY.split(/\r?\n|\r|\n/g).map((string, index) => (
            <div
              key={string}
              className="
                mb-4
              "
            >
              {styleMatchingText(
                string,
                ABOUT_BORN_STORY_WORDS_TO_HIGHLIGHT,
                "font-walsheim leading-[150%] font-normal [font-size:_clamp(12px,1.5vw,20px)]",
                "font-bold"
              )}
            </div>
          ))}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
