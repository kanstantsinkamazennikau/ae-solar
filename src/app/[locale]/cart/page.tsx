"use client";

import CheckoutForm from "@/app/[locale]/cart/components/CheckoutForm";
import AddMorePanels from "@/app/[locale]/cart/components/AddMorePanels";
import CheckOut from "@/app/[locale]/cart/components/CheckOut";
import ModelsInCart from "@/app/[locale]/cart/components/ModelsInCart";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Loader from "@/app/[locale]/components/common/Loader";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useContext, useEffect } from "react";

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
      </BasicWidthContainer>
    </div>
  );
}
