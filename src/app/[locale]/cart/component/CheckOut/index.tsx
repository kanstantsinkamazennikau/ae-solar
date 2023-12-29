"use client";

import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import {
  CART_MODELS_ARE_READY,
  CART_PLEASE_CHECKOUT,
  CART_CHECK_OUT,
  CART_BAG_IS_EMPTY,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";

export default function CheckOut() {
  const { modelsInBag, setIsGenerateModel } = useContext(ConstructorContext);
  const locale = useParams()?.locale as LocaleTypes;

  useEffect(() => {
    setIsGenerateModel(false);
  }, [setIsGenerateModel]);

  return (
    <div className="mt-[60px] text-center flex flex-col items-center">
      {!!modelsInBag.length ? (
        <>
          <div className="[font-size:_clamp(24px,5vw,40px)] font-bold leading-[120%] -tracking-[0.4px] mb-3 max-w-[474px]">
            {CART_MODELS_ARE_READY}
          </div>
          <div className="[font-size:_clamp(16px,2.5vw,18px)] font-medium leading-[150%] mb-7 max-w-[226px] font-walsheim text-dark-gray-900">
            {CART_PLEASE_CHECKOUT}
          </div>
          <Link href={`/${locale}/cart/checkout`}>
            <Button onClick={() => console.log(CART_CHECK_OUT)} size="small">
              {CART_CHECK_OUT}
            </Button>
          </Link>
        </>
      ) : (
        <div className="[font-size:_clamp(24px,5vw,40px)] font-bold leading-[120%] -tracking-[0.4px] mb-3 max-w-[474px]">
          {CART_BAG_IS_EMPTY}
        </div>
      )}
      <Image
        src={`/images/glowFull.png`}
        alt="glow"
        priority
        width={1320}
        height={60}
        className="mt-2 mb-8"
      />
    </div>
  );
}
