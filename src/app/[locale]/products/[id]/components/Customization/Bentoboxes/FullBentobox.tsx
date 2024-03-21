"use client";

import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams } from "next/navigation";

export default function FullBentobox({
  imageUrl,
  shortDescription,
  gridArea,
  longDescription,
}: {
  imageUrl?: string;
  shortDescription?: string;
  longDescription?: {
    title: string;
    description?: string;
  };
  gridArea?: string;
}) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div
      className="
        2xl:w-[650px]
        2xl:h-[600px]
        lg:w-[450px]
        lg:h-[400px]
        w-[350px]
        h-[350px]
        2xl:px-6
        2xl:py-8
        px-4
        py-4
        flex
        flex-col
        justify-end
        items-center
        rounded-xl
        border-solid
        border
        border-[#191919]
        bg-cover
      "
      style={{
        backgroundImage: imageUrl,
        gridArea: gridArea,
      }}
    >
      {longDescription && (
        <div className="flex flex-col gap-5 self-start">
          <div>
            {t(longDescription.title)
              .split(/\r?\n|\r|\n/g)
              .map((string) => (
                <div
                  className="[font-size:_clamp(24px,2.5vw,48px)] font-semibold md:-tracking-[1.44px] leading-[110%] capitalize"
                  key={string}
                >
                  {string}
                </div>
              ))}
          </div>
          <div>
            {t(longDescription.description || "")
              ?.split(/\r?\n|\r|\n/g)
              .map((string) => (
                <div
                  className="[font-size:_clamp(14px,1.5vw,20px)] font-normal font-walsheim leading-[150%] text-dark-gray-900"
                  key={string}
                >
                  {string}
                </div>
              ))}
          </div>
        </div>
      )}
      {shortDescription &&
        t(shortDescription)
          .split(/\r?\n|\r|\n/g)
          .map((string) => (
            <div
              className="[font-size:_clamp(16px,1.5vw,24px)] font-semibold md:-tracking-[0.96px] capitalize"
              key={string}
            >
              {string}
            </div>
          ))}
    </div>
  );
}
