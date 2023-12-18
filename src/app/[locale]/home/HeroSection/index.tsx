import { useServerTranslation } from "@/app/[locale]/i18n/server";
import getLocale from "@/app/[locale]/utils/getLocale";
import Image from "next/image";

export default async function HeroSection() {
  const locale = getLocale();
  const { t } = await useServerTranslation(locale, "home");

  return (
    <div className="w-full flex justify-center items-center relative -top-[146px] h-screen">
      <div className="!-top-[120px] fade-strip-top " />
      <div className="fade-strip-bottom" />
      <div className="fade-strip-left" />
      <div className="fade-strip-right" />

      <Image
        src="/images/heroSectionBackground.png"
        alt="solar panel"
        priority
        width={1920}
        height={1080}
        className="object-fill h-full"
      />
      {/* <div className="flex justify-between w-full h-screen">
        <Image
          src="/images/saveTheWorldLeft.png"
          alt="solar panel"
          priority
          width={833}
          height={1080}
          className="object-fill max-w-[50%]"
        />
        <Image
          src="/images/saveTheWorldRight.png"
          alt="solar panel"
          priority
          width={833}
          height={1080}
          className="object-fill max-w-[50%]"
        />
      </div> */}
      <div className="absolute inline-flex flex-col gap-[30px] font-medium max-w-[550px] items-center top-1/4">
        <p className="text-[40px] text-center text-base-red -tracking-[1.2px] leading-none">
          {t("heroSectionWeAre")}
        </p>
        <p className="text-8xl text-center -tracking-[2.88px] leading-none">
          {t("heroSectionHighQualitySP")}
        </p>
      </div>

      <div className="flex items-center flex-col gap-4 absolute bottom-[10%] left-2/4 -translate-x-2/4 text-center z-30 font-semibold text-xl">
        <span>{t("heroSectionScroll")}</span>
        <Image
          src="/images/arrowFuture.svg"
          alt="arrow"
          width={23}
          height={24}
        />
      </div>
    </div>
  );
}
