"use client";

import CheckoutForm from "@/app/[locale]/cart/component/CheckoutForm";
import AddMorePanels from "@/app/[locale]/cart/component/AddMorePanels";
import Checkout from "@/app/[locale]/cart/component/Checkout";
import ModelsInCart from "@/app/[locale]/cart/component/ModelsInCart";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Loader from "@/app/[locale]/components/common/Loader";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useContext, useState } from "react";

export default function Cart() {
  const { isBagLoading, isShowCheckoutForm } = useContext(ConstructorContext);

  if (isBagLoading) return <Loader />;

  return (
    <BasicWidthContainer>
      {isShowCheckoutForm ? (
        <CheckoutForm />
      ) : (
        <>
          <Checkout />
          <ModelsInCart />
          <AddMorePanels />
        </>
      )}
    </BasicWidthContainer>
  );
}
