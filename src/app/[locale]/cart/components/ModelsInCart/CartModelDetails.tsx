import {
  Details,
  DetailsProps,
} from "@/app/[locale]/cart/components/ModelsInCart/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { CART_CONSTRUCTOR_MODEL_TO_DETAILS_MAPPING } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function CartModelDetails({ model }: DetailsProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const { translation } = useContext(i18nProviderContext);

  const modelDetailsKeys = Object.keys(
    CART_CONSTRUCTOR_MODEL_TO_DETAILS_MAPPING
  ) as Array<keyof Details>;

  return (
    <div className="md:px-5 md:py-5 py-4 px-0 flex flex-col">
      {modelDetailsKeys.map((modelKey) => {
        let component;
        const modelParameterText =
          translation[CART_CONSTRUCTOR_MODEL_TO_DETAILS_MAPPING[modelKey]];
        if (modelKey === "frameColor" || modelKey === "moduleColor") {
          const modelParameterValue = model[modelKey];
          const color = modelParameterValue.toLowerCase();
          component = (
            <div className="flex items-center gap-2">
              {[
                "transparent",
                "black",
                "white",
                "silver",
                "without frame",
              ].includes(color) && (
                <Image
                  src={`/images/option/${color}.svg`}
                  alt={modelParameterValue}
                  priority
                  width={16}
                  height={16}
                />
              )}
              <span className="text-sm font-semibold leading-[0.9] -tracking-[0.42px] capitalize">
                {translation[color]}
              </span>
            </div>
          );
        }
        if (modelKey === "moduleDimension") {
          const modelParameterLength = model[modelKey].length;
          const modelParameterWidth = model[modelKey].width;
          const mm = translation.measureUnitsMM;
          component = (
            <span>
              {`${modelParameterLength}(${mm}) × ${modelParameterWidth}(${mm})`}
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
          component = (
            <span>
              {translation[modelParameterValue!.toString()] ||
                modelParameterValue?.toString()}
            </span>
          );
        }

        return (
          <div
            key={modelKey}
            className="grid py-1 gap-5 border-b border-dashed border-[#ffffff26] items-center justify-between grid-cols-2 leading-[normal] md:leading-[inherit]"
          >
            <div className="font-walsheim [font-size:_clamp(11px,5vw,16px)] capitalize font-medium text-[#606060] -tracking-[0.32px]">
              <Trans
                components={{
                  br: <span />,
                }}
              >
                {modelParameterText}
              </Trans>
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
