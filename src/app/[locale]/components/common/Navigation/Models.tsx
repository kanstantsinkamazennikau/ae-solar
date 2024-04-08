"use client";

import Button from "@/app/[locale]/components/common/Button";
import { ModelsProps } from "@/app/[locale]/components/common/Navigation/types";
import { Model, ModelContext } from "@/app/[locale]/context/modelContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { HEADER_SUBNAVIGATION_PANELS_MODELS } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";

export default function Models({
  isLink,
  isProductionIntroBlock = false,
}: ModelsProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const router = useRouter();
  const { setModel, model } = useContext(ModelContext);
  const { t } = useClientTranslation(locale, "translation");

  const handleClick = () => {
    router.push(`/catalogue`);
  };

  return (
    <div
      className={`flex justify-center xl:gap-11 md:gap-5 gap-2 items-center ${
        isProductionIntroBlock ? "flex-col -mt-5 mb-8" : "flex-row"
      }`}
    >
      {isProductionIntroBlock && (
        <div className="font-normal [font-size:_clamp(12px,1vw,14px)] leading-normal text-dark-gray-600 -tracking-[0.14px]">
          {t("Modules")}
        </div>
      )}
      <div className="flex justify-center items-center gap-2 xl:gap-11 md:gap-5">
        {HEADER_SUBNAVIGATION_PANELS_MODELS.map((panel) => {
          const modelName = panel.split(".")[0];
          const component = (
            <div
              className={`
                flex
                items-center
                gap-2
                cursor-pointer
                ${
                  model === modelName && !isLink
                    ? "px-3 py-[10px] border-2 border-solid rounded-[100px] border-base-red"
                    : ""
                }
                ${
                  isProductionIntroBlock
                    ? `flex-col border-none [font-size:_clamp(10px,2vw,20px)] !px-0 !py-0`
                    : "flex-row [font-size:_clamp(14px,1vw,16px)] "
                }
              `}
              onClick={() => setModel(modelName as Model)}
            >
              <Image
                alt="model"
                src={`/images/models/${panel}`}
                width={16}
                height={16}
              />
              <span className="font-normal">{modelName}</span>
              {model === modelName && !isLink && isProductionIntroBlock && (
                <Image
                  alt="productIntroSelector"
                  src={`/images/productIntroSelector.svg`}
                  width={40}
                  height={12}
                  className="absolute top-12"
                />
              )}
            </div>
          );

          return isLink ? (
            <Link href={`/${locale}/products/${modelName}`} key={panel}>
              <span className="[font-size:_clamp(12px,1vw,16px)]">
                {component}
              </span>
            </Link>
          ) : (
            <span className="[font-size:_clamp(12px,1vw,16px)]" key={panel}>
              {component}
            </span>
          );
        })}
      </div>

      {isLink && (
        <Button onClick={handleClick} size="extrasmall" style="outline">
          <span className="font-semibold text-sm leading-[120%] [font-size:_clamp(14px,1vw,16px)]">
            {t("Choose Your Module")}
          </span>
        </Button>
      )}
    </div>
  );
}
