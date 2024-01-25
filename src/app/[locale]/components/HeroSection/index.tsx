import { useServerTranslation } from "@/app/[locale]/i18n/server";
import getLocale from "@/app/[locale]/utils/getLocale";
import Image from "next/image";

export default async function HeroSection() {
  const locale = getLocale();
  const { t } = await useServerTranslation(locale, "home");

  return (
    <div className="w-full flex justify-center items-center relative -top-[64px] h-screen">
      <div className="fade-strip-top" />
      <div className="fade-strip-bottom" />
      <div className="fade-strip-left md:block hidden" />
      <div className="fade-strip-right md:block hidden" />

      <Image
        src="/images/heroSectionBackground.svg"
        alt="solar panel"
        priority
        width={1920}
        height={1080}
        className="object-cover h-full w-full"
      />
      <div className="absolute inline-flex flex-col md:gap-[30px] gap-4 font-medium max-w-[670px] px-5 items-center top-1/4">
        <p className="text-center text-base-red -tracking-[1.2px] leading-none [font-size:_clamp(20px,4vw,40px)]">
          {t("heroSectionWeAre")}
        </p>
        <p className="text-8xl text-center -tracking-[2.88px] leading-none [font-size:_clamp(48px,5vw,102px)]">
          {t("heroSectionHighQualitySP")}
        </p>
      </div>

      <div className="flex items-center flex-col gap-4 absolute bottom-[60px] left-2/4 -translate-x-2/4 text-center z-30 font-semibold text-xl">
        <span>{t("heroSectionScroll")}</span>
        <Image
          src="/images/arrowFuture.svg"
          alt="arrow"
          width={23}
          height={24}
          className="animate-bounce"
        />
      </div>
    </div>
  );
}
