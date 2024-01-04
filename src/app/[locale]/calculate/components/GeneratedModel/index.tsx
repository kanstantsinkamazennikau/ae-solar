"use client";

import ModelSpecs from "@/app/[locale]/calculate/components/GeneratedModel/ModelSpecs";
import ShortDetails from "@/app/[locale]/calculate/components/GeneratedModel/ShortDetails";
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CART_LOCALSTORAGE,
  CART_SUCCESSFULLY_ADDED,
  CONSTRUCTOR_ADD_TO_BAG,
  CONSTRUCTOR_YOUR_MODEL_IS,
  HEADER_SUBNAVIGATION_PANELS_MODELS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

export default function GeneratedModel() {
  const { constructorModel, isGenerateModel, setModelsInBag } =
    useContext(ConstructorContext);
  const modelIcon = HEADER_SUBNAVIGATION_PANELS_MODELS.filter((model) =>
    model.includes(constructorModel.model)
  )[0];

  const addModelToBag = () => {
    setModelsInBag((prevState) => {
      let previousElementId = prevState[prevState.length - 1]?.id ?? 0;
      const modelsInBag = [
        ...prevState,
        { id: ++previousElementId, ...constructorModel },
      ];
      localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(modelsInBag));
      return modelsInBag;
    });
    toast.success(CART_SUCCESSFULLY_ADDED);
  };

  useEffect(() => {
    if (isGenerateModel) {
      window.scrollTo({
        top: document.getElementById("model")!.offsetTop - 150,
        behavior: "smooth",
      });
    }
  }, [isGenerateModel]);

  return (
    isGenerateModel && (
      <div
        className="w-full flex mb-11 flex-col items-center mt-[130px]"
        id="model"
      >
        <div className="w-full h-[900px] bg-[url('/images/option/Back.png')] bg-center bg-contain flex mb-8 flex-col items-center relative bg-no-repeat">
          <div className="flex flex-col gap-4 items-center justify-center relative max-w-[800px] w-full">
            <p className="text-dark-gray-650 text-xl -tracking-[0.4x] font-semibold">
              {CONSTRUCTOR_YOUR_MODEL_IS}
            </p>
            <div className="flex gap-3 mb-8">
              <Image
                src={`/images/models/${modelIcon}`}
                alt={modelIcon}
                priority
                width={48}
                height={48}
              />
              <span className="text-[64px] -tracking-[0.64x] font-bold leading-none">
                {constructorModel.model}
              </span>
            </div>
            <Image
              src={`/images/option/glow.png`}
              alt="glow.png"
              priority
              width={800}
              height={60}
              className="absolute -bottom-[60px]"
            />
          </div>
          <Image
            src={`/images/option/${constructorModel.model}.png`}
            alt={constructorModel.model}
            priority
            width={964}
            height={615}
            className="absolute bottom-0"
          />
          <div className="fade-strip-bottom" />

          <ShortDetails />
        </div>
        <Button onClick={addModelToBag} size="thin">
          <div className="flex justify-center items-center">
            <Image
              src={`/images/cart.svg`}
              alt={"cart"}
              priority
              width={24}
              height={24}
              className="inline-block"
            />
            <span className="text-xl -tracking-[0.2px] font-semibold">
              {CONSTRUCTOR_ADD_TO_BAG}
            </span>
          </div>
        </Button>
        <Image
          src={`/images/glowFull.png`}
          alt="glow"
          priority
          width={1320}
          height={60}
          className="mt-8 mb-20"
        />
        <ModelSpecs />
      </div>
    )
  );
}
