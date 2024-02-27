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
    <div
      className="
        flex
        flex-col
        justify-center 
        items-center 
        xl:mt-[160px]
        lg:mt-[140px]
        md:mt-[100px]
        mt-[80px]
      "
    >
      <BasicWidthContainer>
        {/* DESKTOP */}
        <div
          className="
            bg-[url('/images/about/bornInGermany.png')]
            xl:h-[495px]
            lg:h-[450px]
            md:h-[400px]
            min-[560px]:h-[400px]
            h-[400px]
            w-full         
            bg-no-repeat
            mb-10
            min-[560px]:[background-size:100%_100%]
            bg-contain
            z-30
            relative
            min-[560px]:block
            hidden
            lg:pt-[120px]
            lg:px-[80px]
            lg:pb-[60px]
            md:py-[50px]
            md:px-[80px]
            min-[560px]:py-[30px]
            min-[560px]:px-[40px]
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              lg:gap-8
              gap-5
              max-w-[1100px]
              mx-auto
            "
          >
            <div className="flex items-center">
              <Image
                src="/images/about/german.svg"
                alt="german"
                priority
                width={160}
                height={160}
              />
              <p
                className="
                font-walsheim
                font-semibold
                [font-size:_clamp(30px,3.5vw,64px)]
                leading-[clamp(30px,3.5vw,64px)]
                max-w-[306px]
              "
              >
                {ABOUT_BORN_IN_GERMANY}
              </p>
            </div>

            <hr className="h-[1px] bg-[#038DF4] border-none w-full" />
            <div className="flex gap-3">
              {ABOUT_BORN_STORY.split(/\r?\n|\r|\n/g).map((string) => (
                <div key={string}>
                  {styleMatchingText(
                    string,
                    ABOUT_BORN_STORY_WORDS_TO_HIGHLIGHT,
                    "font-walsheim font-normal [font-size:_clamp(12px,1.5vw,20px)] md:leading-[150%] leading-[120%]",
                    "font-bold"
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

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
