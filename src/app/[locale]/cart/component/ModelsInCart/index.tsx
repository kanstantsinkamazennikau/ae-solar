"use client";

import CartModelDetails from "@/app/[locale]/cart/component/ModelsInCart/CartModelDetails";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { CART_LOCALSTORAGE, CART_REMOVE } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";

export default function ModelsInCart() {
  const { modelsInBag, setModelsInBag } = useContext(ConstructorContext);
  const removeModel = (modelId: number) => {
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
                <div className="flex items-center gap-3 lg:min-w-[200px] xl:min-w-[260px]">
                  <Image
                    src={`/images/models/${modelInBag.model}.svg`}
                    alt={modelInBag.model}
                    priority
                    width={48}
                    height={48}
                    className="md:h-12 md:w-12 h-[28px] w-[28px]"
                  />
                  <div className="[font-size:_clamp(22px,2.5vw,40px)] leading-[120%] font-bold -tracking-[0.4px] ">
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
              <CartModelDetails model={modelInBag} />
            </div>
            <Button onClick={() => removeModel(modelInBag.id)} style="textOnly">
              <span className="font-semibold [font-size:_clamp(11px,5vw,16px)] -tracking-[0.16px] text-base-red">
                {CART_REMOVE}
              </span>
            </Button>
          </div>
          <div className="cartItemsDivider mt-4 h-[1px]"></div>
        </div>
      ))}
    </div>
  );
}
