import Presentation from "@/app/[locale]/documents/components/Presentation";
import Text from "@/app/[locale]/documents/components/Text";
import { DocumentsTypesWithSubCategories } from "@/app/[locale]/documents/components/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams } from "next/navigation";

export default function SubCategories({
  documents,
}: {
  documents: DocumentsTypesWithSubCategories;
}) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div>
      {documents.subCategories
        .filter(({ data }) => data.length > 0)
        .map(({ category, data, type }) => {
          if (type === "Presentation") {
            return (
              <div
                key={category}
                id={category}
                className="min-[920px]:scroll-mt-[215px] scroll-mt-[140px]"
              >
                <p className="[font-size:_clamp(16px,1.5vw,24px)] leading-[130%] font-semibold mb-4 ">
                  {t(category)}
                </p>
                <div className="grid lg:grid-cols-3 min-[920px]:grid-cols-2 max-[560px]:grid-cols-2 min-[560px]:grid-cols-3 gap-[6px] pb-10">
                  {data.map(({ link, linkTitle, title, image }) => (
                    <Presentation
                      {...{ link, title, linkTitle, image }}
                      key={link}
                    />
                  ))}
                </div>
              </div>
            );
          }
          return (
            <div
              className="pb-10 min-[920px]:scroll-mt-[215px] scroll-mt-[140px]"
              key={category}
              id={category}
            >
              <p className="[font-size:_clamp(16px,1.5vw,24px)] leading-[130%] font-semibold mb-4">
                {t(category)}
              </p>
              <div className=" grid xl:grid-cols-2 grid-cols-1">
                {data.map(({ linkTitle, link }) => (
                  <Text {...{ linkTitle, link }} key={linkTitle} />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
