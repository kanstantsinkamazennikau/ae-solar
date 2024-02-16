import {
  ABOUT_BORN_IN_GERMANY,
  ABOUT_BORN_STORY,
  ABOUT_BORN_STORY_WORDS_TO_HIGHLIGHT,
} from "@/app/[locale]/about/constants";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";

export default function BornInGermany() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        {/* <Image
        src="/images/about/bornInGermany.png"
        alt="solar panel"
        priority
        width={1320}
        height={525}
        className="h-[525px]"
      /> */}
        <div
          className="
            bg-[url('/images/about/bornInGermany.png')]
            xl:h-[600px]
            lg:h-[550px]
            md:h-[450px]
            min-[560px]:h-[400px]
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
                leading-[130%]
                font-semibold
                [font-size:_clamp(40px,3.5vw,64px)]
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
        </div>
      </BasicWidthContainer>
    </div>
  );
}
