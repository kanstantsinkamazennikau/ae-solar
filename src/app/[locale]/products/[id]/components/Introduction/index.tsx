import { IntroductionProps } from "@/app/[locale]/products/[id]/components/Introduction/types";
import {
  PRODUCT_INTRODUCTION,
  PRODUCT_INTRODUCTION_DESCRIPTION,
} from "@/app/[locale]/products/[id]/constants";
import {
  PRODUCT_INTRO_PANELS,
  PRODUCT_INTRO_PANELS_MAPPING,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Introduction({ id }: IntroductionProps) {
  const modelStats = PRODUCT_INTRO_PANELS[id].stats;
  const modelStatsKeys = Object.keys(modelStats);

  return (
    <div className="flex w-full justify-center xl:mb-[280px] lg:mb-[180px] md:mb-[100px] mb-[80px]">
      {/* <BasicWidthContainer> */}
      <div
        className="
          relative
          flex
          flex-row-reverse
          bg-[url('/images/products/introductionLight.svg')]
          w-full
          lg:h-[800px]
          md:h-[600px]
          min-[540px]:h-[500px]
          h-[350px]
          bg-bottom 
          bg-cover
          max-w-[1920px]
        "
      >
        <div className="fade-strip-top !z-10"></div>
        <div className="fade-strip-bottom !z-20"></div>
        <div
          className="
            max-w-[1320px]
            flex
            flex-row-reverse
            relative
            w-full
            mx-auto
          "
        >
          <div className="absolute bottom-0 left-0 flex w-full items-baseline">
            <Image
              src={`/images/productIntro/${id}.png`}
              alt="Aurora"
              priority
              width={578}
              height={700}
              quality={100}
              className="
              static
              z-10
              lg:w-[578px]
              lg:h-[700px]
              md:w-[495px]
              md:h-[600px]
              min-[540px]:w-[340px]
              min-[540px]:h-[461px]
              w-[240px]
              h-[361px]
            "
              //0.83
            />
            <Image
              src="/images/products/AuroraSand.png"
              alt="AuroraIntroduction"
              priority
              width={418}
              height={606}
              className="
              relative
              lg:-left-[60px]
              md:-left-[50px]
              min-[540px]:-left-[40px]
              -left-[20px]
              max-h-[600px]
              bg-blend-soft-light
              mix-blend-plus-lighter
              lg:w-[418px]
              lg:h-[606px]
              md:w-[289px]
              md:h-[520px]
              min-[540px]:w-[200px]
              min-[540px]:h-[390px]
              w-[120px]
              h-[300px]

            "
              //1.45
            />
          </div>

          {/* <div className="absolute bottom-0 left-0">
            <Image
              src="/images/products/introductionLight.svg"
              alt="introductionLight"
              priority
              width={678}
              height={678}
            />
          </div> */}
          <div
            className="
              flex
              flex-col
              gap-10
              self-end
              max-w-[670px]
              static
              z-20
              px-5
            "
          >
            <div
              className="
                flex
                flex-col
                items-start
                gap-8  
              "
            >
              <p
                className="
                  [font-size:_clamp(20px,3.5vw,64px)]
                  font-semibold
                  -tracking-[1.92]
                "
              >
                {PRODUCT_INTRODUCTION}
              </p>
              <p
                className="
                  [font-size:_clamp(12px,1.5vw,20px)]
                  font-walsheim
                  font-normal
                  leading-[150%]
                  -tracking-[1.92]
                "
              >
                {PRODUCT_INTRODUCTION_DESCRIPTION}
              </p>
            </div>

            <div
              className="
                xl:p-10
                md:p-6
                p-4
                border
                border-solid
                backdrop-blur-[10px]
                bg-[#00000033]
                [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
                flex
                gap-6
                justify-around
              "
            >
              {modelStatsKeys.map((key) => (
                <div key={key}>
                  <div className="leading-[1.3] font-semibold [font-size:_clamp(24px,3vw,48px)]">
                    {modelStats[key as keyof typeof modelStats]}
                  </div>
                  <div className="text-lg leading-[1.7] font-medium font-walsheim text-dark-gray-900 [font-size:_clamp(12px,1.5vw,18px)]">
                    {
                      PRODUCT_INTRO_PANELS_MAPPING[
                        key as keyof typeof modelStats
                      ]
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </BasicWidthContainer> */}
    </div>
  );
}
