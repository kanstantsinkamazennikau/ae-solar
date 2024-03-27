"use client";

import CartModelDetails from "@/app/[locale]/cart/components/ModelsInCart/CartModelDetails";
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { CART_LOCALSTORAGE } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function ModelsInCart() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const { modelsInBag, setModelsInBag } = useContext(ConstructorContext);
  const removeModel = (modelId: number | string) => {
    const remainingModels = modelsInBag.filter(({ id }) => id !== modelId);
    setModelsInBag(remainingModels);
    localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(remainingModels));
  };

  return (
    <div className="flex pt-5 pb-10 flex-col gap-4">
      {modelsInBag.map((modelInBag) => (
        <div key={modelInBag.id}>
          <div className="flex justify-center items-center lg:gap-10 gap-0 md:flex-row flex-col">
            <div className="flex lg:gap-5 gap-2 md:flex-row flex-col">
              <div className="flex justify-center items-center gap-5 lg:flex-row flex-col">
                <div className="relative">
                  <div className="flex items-center gap-3 max-md:justify-center">
                    <Image
                      src={`/images/models/${modelInBag.model}.svg`}
                      alt={modelInBag.model}
                      priority
                      width={32}
                      height={32}
                      className="md:h-8 md:w-8 h-[28px] w-[28px]"
                    />
                    <div className="md:text-2xl text-[32px] leading-[120%] font-bold -tracking-[0.4px] ">
                      {modelInBag.model}
                    </div>
                  </div>
                  <Image
                    src={`/images/cart/${modelInBag.model}.png`}
                    alt={modelInBag.model}
                    priority
                    quality={100}
                    width={200}
                    height={20}
                  />
                  <div className="fade-strip-bottom max-h-[100px] max-w-[200px]"></div>
                </div>
              </div>
              <CartModelDetails model={modelInBag} />
            </div>
            <Button onClick={() => removeModel(modelInBag.id)} style="textOnly">
              <span className="font-semibold [font-size:_clamp(11px,5vw,16px)] -tracking-[0.16px] text-base-red">
                {t("Remove")}
              </span>
            </Button>
          </div>
          <div className="cartItemsDivider mt-4 h-[1px]" />
        </div>
      ))}
    </div>
  );
}
