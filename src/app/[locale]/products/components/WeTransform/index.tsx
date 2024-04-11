"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function WeTransform() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <div
      className="
        flex
        justify-center
        items-center
        w-full
        2xl:h-[1700px]
        lg:h-[1200px]
        min-[540px]:bg-center
        bg-top
        bg-no-repeat
        bg-[url('/images/products/weTransformCircle.svg')]
        relative
        2xl:bg-auto
        lg:-my-[100px]
        min-[540px]:h-[800px]
        h-[800px]
        lg:[background-size:1450px]
        md:[background-size:1120px]
        min-[540px]:[background-size:1100px]
        [background-size:780px]
      "
    >
      <BasicWidthContainer styles={`mx-auto w-full max-[540px]:!px-0 mt-28`}>
        <div
          className={`
            flex
            flex-col
            xl:gap-[50px]
            lg:gap-[40px]
            md:gap-[30px]
            gap-4
            w-full
            bg-[url('/images/getInTouchBackground.svg')]
            2xl:py-[80px]
            2xl:px-[80px]
            md:py-[80px]
            md:px-[50px]
            py-[40px]
            px-[30px]
            rounded-[40px]
            max-[540px]:rounded-none
            max-[540px]:border-x-0
            border-2
            border-solid
            border-[#3e0002]
            relative
            overflow-hidden
            bg-[#111]
            -top-[60px]
          `}
        >
          <div
            className="
              [background:radial-gradient(100%_100%_at_50%_100%,rgba(109,2,7,0.30)_0%,rgba(109,2,7,0.00)_100%),linear-gradient(297deg,#000_0%,rgba(0,0,0,0.00)_100%),#0d0d0d00]
              w-full
              h-full
              absolute
              left-0
            "
          />
          <div
            className="
              [font-size:_clamp(36px,6vw,96px)]
              font-extrabold
              -tracking-[0.96px]
              relative
              z-10
              leading-[100%]
              flex
              flex-col
              md:gap-4
              gap-1
            "
          >
            <Trans
              components={{
                gradientYellow: (
                  <p
                    className="
                      bg-clip-text
                      text-transparent
                      bg-[linear-gradient(to_right,#FFB800,#EBFF00,#42FF00)]
                    "
                  />
                ),
              }}
            >
              {translation.weTransform}
            </Trans>
          </div>

          <div
            className="
              [font-size:_clamp(16px,2vw,24px)]
              font-walsheim
              relative
              z-10
              max-w-[800px]
              flex
              self-end
              flex-col
              gap-4
              mb-4
            "
          >
            <p>
              <Trans
                components={{
                  white: (
                    <span
                      className="
                      font-bold
                    "
                    />
                  ),
                }}
              >
                {translation.ourRange}
              </Trans>
            </p>
            <p>
              <Trans
                components={{
                  white: (
                    <span
                      className="
                      font-bold
                    "
                    />
                  ),
                }}
              >
                {translation.eachOfProduct}
              </Trans>
            </p>
          </div>
          <Image
            src={`/images/products/weTransformPathes.svg`}
            alt="weTransformPathes"
            priority
            width={540}
            height={540}
            className="absolute left-0 bottom-0 max-lg:max-h-[300px] max-lg:max-w-[300px]"
          />

          <div
            className="
              [font-size:_clamp(36px,6vw,96px)]
              font-extrabold
              -tracking-[0.96px]
              relative
              z-10
              leading-[100%]
              flex
              flex-col
              md:gap-4
              gap-1
              self-end
              text-end
              -mt-5
            "
          >
            <Trans
              components={{
                gradientBlue: (
                  <p
                    className="
                      bg-clip-text
                      text-transparent
                      bg-[linear-gradient(to_right,#FFFFFF,#00A3FF)]
                    "
                  />
                ),
              }}
            >
              {translation.forYouAndPlanet}
            </Trans>
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
