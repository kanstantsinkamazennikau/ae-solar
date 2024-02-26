"use client";

import Customize from "@/app/[locale]/calculate/components/ChooseModel/Customize";
import Model from "@/app/[locale]/calculate/components/ChooseModel/Model";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useContext } from "react";

export default function ChooseModel() {
  const { constructorModel } = useContext(ConstructorContext);

  return (
    <div className="flex flex-col gap-[60px] md:mt-0 mt-0 w-full md:w-auto md:min-w-[330px]">
      <Model />
      {constructorModel.model && <Customize />}
    </div>
  );
}
