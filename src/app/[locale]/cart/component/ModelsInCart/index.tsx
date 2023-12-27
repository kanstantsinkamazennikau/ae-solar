"use client";

import Details from "@/app/[locale]/cart/component/ModelsInCart/Details";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { CART_REMOVE } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";

export default function ModelsInCart() {
  const { modelsInBag } = useContext(ConstructorContext);

  return (
    <BasicWidthContainer>
      <div className="flex py-5 flex-col gap-4">
        {/* // TODO ADD ID  */}
        {modelsInBag.map((modelInBag) => (
          <div
            key={modelInBag.model}
            className="flex justify-center items-center gap-10"
          >
            <div className="flex gap-5">
              <div className="flex justify-center items-center gap-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={`/images/models/${modelInBag.model}.svg`}
                    alt={modelInBag.model}
                    priority
                    width={48}
                    height={48}
                  />
                  <div className="[font-size:_clamp(20px,2.5vw,40px)] leading-[120%] font-bold -tracking-[0.4px]">
                    {modelInBag.model}
                  </div>
                </div>
                <div className="relative">
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
              <Details model={modelInBag} />
            </div>
            <Button onClick={() => console.log("s")}>{CART_REMOVE}</Button>
          </div>
        ))}
      </div>
    </BasicWidthContainer>
  );
}
