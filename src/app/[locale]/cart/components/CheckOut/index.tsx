"use client";

import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";

export default function CheckOut() {
  const { modelsInBag, setIsGenerateModel, setIsShowCheckoutForm } =
    useContext(ConstructorContext);

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  useEffect(() => {
    setIsGenerateModel(false);
  }, [setIsGenerateModel]);

  return (
    <div className="lg:mt-[100px] md:mt-20 mt-10 text-center flex flex-col items-center">
      {!!modelsInBag.length ? (
        <>
          <div className="[font-size:_clamp(24px,5vw,40px)] font-bold leading-[120%] -tracking-[0.4px] mb-3 max-w-[474px]">
            {t("Your modules")}
          </div>
        </>
      ) : (
        <div className="[font-size:_clamp(24px,5vw,40px)] font-bold leading-[120%] -tracking-[0.4px] mb-3 max-w-[474px]">
          {t("Bag is empty")}
        </div>
      )}
    </div>
  );
}
