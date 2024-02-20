"use client";

import CheckoutForm from "@/app/[locale]/cart/components/CheckoutForm";
import AddMorePanels from "@/app/[locale]/cart/components/AddMorePanels";
import CheckOut from "@/app/[locale]/cart/components/CheckOut";
import ModelsInCart from "@/app/[locale]/cart/components/ModelsInCart";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Loader from "@/app/[locale]/components/common/Loader";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useContext, useEffect } from "react";
import ConsultForm from "@/app/[locale]/contacts/components/ConsultForm";
import {
  FOOTER_GERMAN_BRAND,
  FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
} from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Contacts from "@/app/[locale]/company/imprint/components/Contacts";
import Image from "next/image";

export default function Cart() {
  const { isBagLoading, isShowCheckoutForm, setIsShowCheckoutForm } =
    useContext(ConstructorContext);

  useEffect(() => {
    return () => setIsShowCheckoutForm(false);
  }, [setIsShowCheckoutForm]);

  if (isBagLoading) return <Loader />;

  return isShowCheckoutForm ? (
    <CheckoutForm />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        <CheckOut />
        <ModelsInCart />
        <AddMorePanels />
        <Image
          src={`/images/glowFull.png`}
          alt="glow"
          priority
          width={1320}
          height={60}
          className="mb-[60px] rotate-180"
        />
        <div
          className="
            flex
            lg:gap-[60px]
            min-[920px]:gap-[20px]
            gap-0
            relative
            min-[920px]:flex-row flex-col-reverse
            max-[920px]:justify-center
            max-[920px]:items-center
            min-[920px]:mb-0
            mb-20
          "
        >
          <div className="-mt-2">
            <Contacts />
          </div>
          <ConsultForm />
        </div>
      </BasicWidthContainer>
    </div>
  );
}
