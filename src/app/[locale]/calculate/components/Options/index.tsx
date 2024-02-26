"use client";

import ChooseModel from "@/app/[locale]/calculate/components/ChooseModel";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { CONSTRUCTOR_OPTION_LINES } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useState } from "react";

const ImagesWithAnimation = ({ image }: { image: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Image
      src={`/images/calculate/${image}.png`}
      alt={"Frame"}
      priority
      width={1920}
      height={1080}
      quality={100}
      onLoadingComplete={() => setIsLoaded(true)}
      className={`
        md:max-w-full
        min-[500px]:max-w-[400px]
        max-h-full
        md:h-full
        h-[200px]
        min-[500px]:h-[27vh]
        absolute
        top-0
        transition-all
        ${isLoaded ? "animate-[fadeIn_0.5s_ease-in-out]" : "opacity-0"}
        animate-[fadeIn_0.5s_ease-in-out]
      `}
    />
  );
};

export default function Options() {
  const {
    constructorModel: { model, moduleColor, frameColor },
  } = useContext(ConstructorContext);

  const moduleImages = [
    `${model}Frame${frameColor}`,
    `${model}Backplate${moduleColor}`,
    `${model}Front`,
  ].filter((image) => !image.toLowerCase().includes("transparent"));

  return (
    <BasicWidthContainer>
      <div className="flex items-start gap-10 self-stretch mb-[80px] md:flex-row flex-col relative">
        {/* IMG */}
        <div
          className="
          bg-black
            sticky
            max-[920px]:pt-5
            top-[63px]
            min-[920px]:top-[100px]
            md:top-[63px]
            h-[240px]
            min-[500px]:h-[33vh]
            md:h-[calc(100vh-130px)]
            z-10
            w-full
          "
        >
          <div
            className="
              border-4
              border-solid
              border-option-border
              rounded-[20px]
              max-w-[985px]
              min-[500px]:h-[32vh]
              h-[240px]
              md:h-[calc(100vh-130px)]
              w-full
              flex
              justify-center
              items-center
              overflow-hidden
              bg-black
            "
          >
            <div
              className={`
                relative
                flex
                justify-center
                items-center
                w-auto h-auto
              `}
            >
              {/* {!constructorModel.model && ( */}
              <>
                <Image
                  src={`/images/featuredProductsConstructor.svg`}
                  alt={"featuredProducts"}
                  priority
                  width={1920}
                  height={1080}
                  quality={100}
                  className={`
                    md:max-w-full
                    min-[500px]:max-w-[400px]
                    max-h-full
                    md:h-full
                    h-[200px]
                    min-[500px]:h-[27vh]
                    transition-all
                    duration-500
                    ${!model ? "opacity-100" : "opacity-0"}
                  `}
                />
                <div
                  className={`absolute w-full top-0  transition-all
                  duration-500 ${!model ? "opacity-100" : "opacity-0"}`}
                >
                  {CONSTRUCTOR_OPTION_LINES.map(({ panelName, position }) => (
                    <div
                      className={`inline-flex flex-col items-start gap-2 shrink-0 absolute -top-3`}
                      style={{ left: position }}
                      key={panelName}
                    >
                      <span
                        className={`font-normal text-option-text [font-size:_clamp(9px,1.5vw,16px)]`}
                      >
                        {panelName}
                      </span>
                    </div>
                  ))}
                </div>
              </>

              {model && (
                <>
                  {moduleImages.map((image) => (
                    <ImagesWithAnimation image={image} key={image} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <ChooseModel />
      </div>
    </BasicWidthContainer>
  );
}
