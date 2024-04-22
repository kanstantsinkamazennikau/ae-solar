"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import getLocale from "@/app/[locale]/utils/getLocale";
import Image from "next/image";
import { useContext } from "react";

export default function ManufacturerHeader() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <>
      <div
        className="
          relative
          -mt-[80px]
          flex
          justify-center
          xl:mb-[80px]
          lg:mb-[60px]
          md:mb-[40px]
          mb-[20px]
        "
      >
        <Image
          src={"/images/about/manufacturer/manufacturerBackground.png"}
          alt="backgroundImage"
          width={1920}
          height={440}
          quality={100}
          priority
          className={`
            xl:h-[600px]
            lg:h-[550px]
            min-[920px]:h-[500px]
            md:h-[450px]
            min-[560px]:h-[400px]
            min-[920px]:mt-0
            mt-[80px]
            min-[560px]:block
            h-[250px]
          `}
        />
        <div className="flex w-full justify-center absolute min-[560px]:bottom-[20%] bottom-[10%]">
          <BasicWidthContainer>
            <div className="flex flex-col gap-4 text-center xl:max-w-[1100px] md:max-w-[90%]  mx-auto">
              <h1
                className="
                  [font-size:_clamp(26px,2.5vw,36px)]
                  font-medium
                  leading-[120%]
                  -tracking-[0.36px]
                "
              >
                {translation.welcome}
              </h1>
              <hr className="h-[1px] bg-white border-none w-full" />
              <h1
                className="
                  [font-size:_clamp(36px,7vw,102px)]
                  font-semibold
                  leading-[100%]
                  md:-tracking-[4.08px]
                "
              >
                {translation.harnessingTheSun}
              </h1>
            </div>
          </BasicWidthContainer>
        </div>
      </div>
    </>
  );
}
