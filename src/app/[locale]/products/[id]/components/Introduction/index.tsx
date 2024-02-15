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
  const background = `/images/products/introductionLight${id}.svg`;

  return (
    <div
      className="flex w-full justify-center min-[540px]:flex-row flex-col"
      id="introduction"
    >
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={`
          relative
          flex
          flex-row-reverse
          w-full
          lg:h-[800px]
          md:h-[600px]
          min-[540px]:h-[500px]
          min-h-[500px]
          bg-bottom 
          bg-cover
          max-w-[1920px]
          min-[600px]:mt-0
          max-[600px]:-mt-[100px]
          max-[540px]:-mt-[150px]
          max-[460px]:-mt-[180px]
          max-[400px]:-mt-[220px]
        `}
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
          <div
            className="
              absolute
              bottom-0
              left-0
              flex
              w-full
              items-baseline
              2xl:-left-[20%]
              justify-center
              2xl:translate-x-0
              lg:translate-x-[5%]
              md:translate-x-[4%]
              z-10
            "
          >
            <p
              className="
                min-[540px]:hidden
                [font-size:_clamp(24px,3vw,48px)]
                font-semibold
                md:-tracking-[1.92px]
                leading-[120%]
                absolute
                max-w-[258px]
                left-1/2
                -translate-x-1/2
                text-center
                -translate-y-[calc(100%+20px)]
              "
            >
              {PRODUCT_INTRODUCTION_DESCRIPTION[id].title}
            </p>
            <Image
              src={`/images/products/leftParticles${id}.png`}
              alt="AuroraIntroduction"
              priority
              width={400}
              height={600}
              className="
                relative
                lg:left-[100px]
                md:left-[88px]
                min-[540px]:left-[70px]
                left-[46px]
                max-h-[600px]
                bg-blend-soft-light
                mix-blend-plus-lighter
                lg:w-[300px]
                lg:h-[600px]
                md:w-[250px]
                md:h-[500px]
                min-[540px]:w-[260px]
                min-[540px]:h-[390px]
                w-[120px]
                h-[300px]
                bottom-0
              "
              //1.45
            />
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
                min-[540px]:h-[440px]
                w-[240px]
                h-[300px]
              "
              //0.83
            />
            <Image
              src={`/images/products/rightParticles${id}.png`}
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

          {/* DESKTOP DESCRIPTION */}
          <div
            className="
              min-[540px]:flex
              hidden
              flex-col
              2xl:gap-8
              xl:gap-6
              lg:gap-5
              md:gap-5
              gap-3
              self-end
              xl:max-w-[700px]
              md:max-w-[600px]
              max-w-[500px]
              relative
              z-20
              px-5
              2xl:mx-0
              mx-auto
            "
          >
            <div
              className="
                flex
                flex-col
                2xl:items-start
                items-center
                2xl:gap-4
                lg:gap-2
                gap-3
              "
            >
              <p
                className="
                  [font-size:_clamp(24px,3vw,48px)]
                  font-semibold
                  md:-tracking-[1.92px]
                  leading-[120%]
                  2xl:text-left
                  text-center
                "
              >
                {PRODUCT_INTRODUCTION_DESCRIPTION[id].title}
              </p>
              <p
                className="
                  [font-size:_clamp(14px,1.5vw,20px)]
                  font-walsheim
                  font-normal
                  leading-[150%]
                  -tracking-[1.92]
                  2xl:text-start
                  text-center
                "
              >
                {PRODUCT_INTRODUCTION_DESCRIPTION[id].description}
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
      {/* MOBILE DESCRIPTION */}
      <div
        className="
          min-[540px]:hidden
          flex
          flex-col
          2xl:gap-8
          xl:gap-6
          lg:gap-5
          md:gap-5
          gap-3
          self-end
          xl:max-w-[700px]
          md:max-w-[600px]
          max-w-[330px]
          relative
          z-20
          px-5
          2xl:mx-0
          mx-auto
          -mt-10
        "
      >
        <div
          className="
            flex
            flex-col
            2xl:items-start
            items-center
          "
        >
          <p
            className="
              [font-size:_clamp(12px,1.5vw,20px)]
              font-walsheim
              font-normal
              leading-[150%]
              -tracking-[1.92]
              2xl:text-start
              text-center
            "
          >
            {PRODUCT_INTRODUCTION_DESCRIPTION[id].description}
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
            flex-col
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
                {PRODUCT_INTRO_PANELS_MAPPING[key as keyof typeof modelStats]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
