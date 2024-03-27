"use client";

import AddMorePanels from "@/app/[locale]/cart/components/AddMorePanels";
import CheckOut from "@/app/[locale]/cart/components/CheckOut";
import CheckoutForm from "@/app/[locale]/cart/components/CheckoutForm";
import ModelsInCart from "@/app/[locale]/cart/components/ModelsInCart";
import Contacts from "@/app/[locale]/company/imprint/components/Contacts";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Loader from "@/app/[locale]/components/common/Loader";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import Image from "next/image";
import { useContext, useState } from "react";

export default function Cart() {
  const { isBagLoading, modelsInBag } = useContext(ConstructorContext);

  if (isBagLoading) return <Loader />;

  return (
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
        {!!modelsInBag.length && (
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
              min-[920px]:mb-20
              mb-20
            "
          >
            <div className="-mt-2">
              <Contacts />
            </div>
            <div className="w-full">
              <CheckoutForm />
            </div>
          </div>
        )}
      </BasicWidthContainer>
    </div>
  );
}
