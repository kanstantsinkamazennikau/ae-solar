import { useServerTranslation } from "@/app/[locale]/i18n/server";
import getLocale from "@/app/[locale]/utils/getLocale";
import Image from "next/image";

export default async function CatalogueHeroSection() {
  const locale = getLocale();
  const { t } = await useServerTranslation(locale, "translation");

  return (
    <div className={`relative`}>
      <div
        className={`
          relative
          2xl:h-[600px]
          min-[920px]:h-[400px]
          h-[300px]
          bg-cover
          bg-center
          bg-no-repeat
          w-full
          max-w-[1920px]
          mx-auto
          z-0
          overflow-hidden
        `}
      >
        <Image
          src={`/images/products/productsFlower.png`}
          alt="productsFlower"
          priority
          width={1920}
          height={1080}
          className={`!w-screen object-cover absolute  2xl:!-top-32
            xl:!-top-20
            lg:!-top-10
            min-[640px]:!top-10
            min-[540px]:!top-20
            min-[540px]:scale-100
            scale-150
            !top-28
            transition-all
            duration-[1.5s]
            !translate-y-0
         `}
        />
        <div
          className={`
            absolute
            inline-flex
            flex-col
            md:gap-[10px]
            gap-4
            font-medium
            min-[920px]:max-w-[800px]
            max-w-[600px]
            w-full
            px-5
            items-center
            -translate-y-1/2
            top-[calc(50%+30px)]
            -translate-x-1/2
            left-1/2
            transition-all
            duration-[1.5s]
            z-20
          `}
        >
          <p className="capitalize text-center md:-tracking-[1.08px] font-medium -tracking-[0px] leading-[100%] [font-size:_clamp(14px,2.5vw,36px)] after:p-0 text-base-red">
            {t("Our portfolio")}
          </p>
          <p className="text-center font-semibold md:-tracking-[4px] -tracking-[0px] leading-[100%] [font-size:_clamp(34px,4vw,96px)] capitalize">
            {t("Goes beyond")}
          </p>
        </div>
        <div className="fade-strip-bottom min-[500px]:top-auto min-[500px]:!h-[250px] !h-16 top-[226px] !z-10" />
      </div>
    </div>
  );
}
