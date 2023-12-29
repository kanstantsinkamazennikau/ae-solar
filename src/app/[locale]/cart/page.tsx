"use client";

import AddMorePanels from "@/app/[locale]/cart/component/AddMorePanels";
import CheckOut from "@/app/[locale]/cart/component/CheckOut";
import ModelsInCart from "@/app/[locale]/cart/component/ModelsInCart";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Loader from "@/app/[locale]/components/common/Loader";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useContext } from "react";

export default function Cart() {
  const { isBagLoading } = useContext(ConstructorContext);

  if (isBagLoading) return <Loader />;

  return (
    <BasicWidthContainer>
      <CheckOut />
      <ModelsInCart />
      <AddMorePanels />
    </BasicWidthContainer>
  );
}
