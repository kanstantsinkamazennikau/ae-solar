"use client";

import ModelSpecs from "@/app/[locale]/calculate/components/GeneratedModel/ModelSpecs";
import ShortDetails from "@/app/[locale]/calculate/components/GeneratedModel/ShortDetails";
import FeaturedProducts from "@/app/[locale]/components/TechInfo/FeaturedProducts";
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CART_LOCALSTORAGE,
  CART_SUCCESSFULLY_ADDED,
  CONSTRUCTOR_ADD_TO_BAG,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

export default function GeneratedModel() {
  const { constructorModel, isGenerateModel, setModelsInBag } =
    useContext(ConstructorContext);

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
        top: document.getElementById("model")!.offsetTop + 50,
        behavior: "smooth",
      });
    }
  }, [isGenerateModel]);

  return (
    isGenerateModel && (
      <div className="w-full flex flex-col items-center">
        <div
          id="model"
          className="
            w-full
            h-full
            relative
            flex
            flex-col
            mb-1
          "
        >
          <div
            className="
              w-full
              md:h-[800px]
              lg:h-[900px]
              min-[500px]:h-[600px]
              min-[500px]:mt-0
              h-[286px]
              bg-[url('/images/option/Back.png')]
              md:bg-center
              min-[500px]:bg-top
              bg-bottom
              bg-contain
              flex
              mb-8
              flex-col
              items-center
              relative
              bg-no-repeat
              justify-end
            "
          >
            <Image
              src={`/images/option/${constructorModel.model}.png`}
              alt={constructorModel.model}
              priority
              width={964}
              height={615}
              className="
                min-[500px]:absolute
                relative
                bottom-0
                lg:h-[615px]
                lg:w-[964px]
                md:h-[450px]
                md:w-[700px]
                min-[500px]:h-[400px]
                min-[500px]:w-[500px]
                h-[150px]
                w-[280px]
              "
            />
          </div>
          <div className="fade-strip-bottom min-[500px]:top-auto min-[500px]:!h-[250px] !h-16 top-[226px]" />
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
            <span className="[font-size:_clamp(14px,2vw,20px)] -tracking-[0.2px] font-semibold">
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
        <div className="mt-20">
          <FeaturedProducts />
        </div>
      </div>
    )
  );
}
