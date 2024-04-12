import {
  Details,
  DetailsProps,
} from "@/app/[locale]/cart/components/ModelsInCart/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { CART_CONSTRUCTOR_MODEL_TO_DETAILS_MAPPING } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CartModelDetails({ model }: DetailsProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const modelDetailsKeys = Object.keys(
    CART_CONSTRUCTOR_MODEL_TO_DETAILS_MAPPING
  ) as Array<keyof Details>;

  return (
    <div className="md:px-5 md:py-5 py-4 px-0 flex flex-col">
      {modelDetailsKeys.map((modelKey) => {
        let component;
        const modelParameterText =
          CART_CONSTRUCTOR_MODEL_TO_DETAILS_MAPPING[modelKey];
        if (modelKey === "frameColor" || modelKey === "moduleColor") {
          const modelParameterValue = model[modelKey];
          component = (
            <div className="flex items-center gap-2">
              {[
                "transparent",
                "black",
                "white",
                "silver",
                "without frame",
              ].includes(modelParameterValue.toLowerCase()) && (
                <Image
                  src={`/images/option/${modelParameterValue.toLowerCase()}.svg`}
                  alt={modelParameterValue}
                  priority
                  width={16}
                  height={16}
                />
              )}
              <span className="text-sm font-semibold leading-[0.9] -tracking-[0.42px]">
                {t(modelParameterValue)}
              </span>
            </div>
          );
        }
        if (modelKey === "moduleDimension") {
          const modelParameterLength = model[modelKey].length;
          const modelParameterWidth = model[modelKey].width;
          component = (
            <span>
              {`${modelParameterLength}(mm) × ${modelParameterWidth}(mm)`}
            </span>
          );
        }
        if (modelKey === "powerRange") {
          const modelParameterFrom = model[modelKey].from;
          const modelParameterTo = model[modelKey].to;
          component = (
            <span>{`${modelParameterFrom} — ${modelParameterTo} W`}</span>
          );
        }
        // if (modelKey === "applications") {
        //   const modelParameterApplications = model[modelKey];
        //   component = (
        //     <>
        //       {modelParameterApplications?.map((application, index) => (
        //         <span key={application}>
        //           {`${index ? ", " : ""}${application}`}
        //         </span>
        //       ))}
        //     </>
        //   );
        // }
        if (
          modelKey === "id" ||
          modelKey === "backCover" ||
          modelKey === "solarCellTechnology" ||
          modelKey === "moduleSpecification" ||
          modelKey === "applications"
        ) {
          const modelParameterValue = model[modelKey];
          component = <span>{t(modelParameterValue?.toString() || "")}</span>;
        }

        return (
          <div
            key={modelKey}
            className="grid py-1 gap-5 border-b border-dashed border-[#ffffff26] items-center justify-between grid-cols-2 leading-[normal] md:leading-[inherit]"
          >
            <div className="font-walsheim [font-size:_clamp(11px,5vw,16px)] capitalize font-medium text-[#606060] -tracking-[0.32px]">
              {t(modelParameterText)}
            </div>
            <div
              className="
                font-walsheim
                [font-size:_clamp(10px,5vw,14px)]
                font-semibold
                leading-[120%]
                -tracking-[0.32px]
                pr-2
                min-[420px]:max-w-[180px]
                min-[420px]:min-w-[180px]
                break-words
              "
            >
              {component}
            </div>
          </div>
        );
      })}
    </div>
  );
}
