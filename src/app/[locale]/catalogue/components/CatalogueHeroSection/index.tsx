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
          bg-center
          bg-no-repeat
          w-full
          max-w-[1920px]
          mx-auto
          z-0
          overflow-hidden
          bg-cover
          bg-[url(/images/products/productsFlowerCatalogue.png)]
        `}
      >
        {/* <Image
          src={`/images/products/productsFlowerCatalogue.png`}
          alt="productsFlower"
          priority
          width={1920}
          height={600}
          className={`!w-screen absolute 
            top-0
            min-[540px]:scale-100
            scale-150
            transition-all
            duration-[1.5s]
            !translate-y-0
         `}
        /> */}
        <div
          className={`
            absolute
            inline-flex
            flex-col
            md:gap-[10px]
            gap-4
            font-medium
            xl:max-w-[1000px]
            max-w-[600px]
            w-full
            px-5
            items-center
            -translate-y-1/2
            top-[calc(46%+30px)]
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
          <p className="mainPageTextShadow text-center font-semibold md:-tracking-[4px] -tracking-[0px] leading-[100%] [font-size:_clamp(34px,6vw,96px)] capitalize">
            {t("Goes beyond")}
          </p>
        </div>
      </div>
    </div>
  );
}
