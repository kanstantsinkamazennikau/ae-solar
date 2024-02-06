import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import LightingTheWay from "@/app/[locale]/products/components/LightingTheWay";
import { PRODUCT_SELECTOR_IMAGES } from "@/app/[locale]/products/constants";
import { PRODUCT_INTRO_LEARN_MORE } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useState } from "react";

export default function ProductsPage() {
  return (
    <div className="">
      <LightingTheWay />
      <div className="flex items-center flex-col">
        <BasicWidthContainer>
          <div className="relative flex justify-center h-[940px] overflow-hidden">
            <Image
              src={`/images/products/solarSystem.svg`}
              alt="selector"
              priority
              width={1520}
              height={426}
              className="absolute bottom-0 scale-125"
            />
            {/* SELECTOR */}
            <div className="relative w-full xl:bottom-[220px] md:bottom-[140px] bottom-[100px]">
              <div className="absolute w-[660px] h-[660px] -bottom-5 left-1/2 -translate-x-1/2 z-30">
                {PRODUCT_SELECTOR_IMAGES.map((product) => (
                  <div
                    key={product.panel}
                    className={`${product.container} ${product.position}`}
                  >
                    <div
                      className={`
                        
                        p-4
                        rounded-full
                        outline
                        outline-[#B30006]
                        bg-[#00000033]
                        hover:outline-2
                        hover:[box-shadow:0px_0px_160px_0px_#F60109,0px_0px_40px_0px_#F60109]
                        outline-1
                      `}
                    >
                      <Image
                        src={`/images/models/${product.icon}`}
                        alt={product.icon}
                        priority
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>{product.panel}</div>
                  </div>
                ))}
              </div>
              <Image
                src={`/images/products/selector.svg`}
                alt="selector"
                priority
                width={606}
                height={606}
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                "
              />
              <Image
                src={`/images/productIntro/Aurora.png`}
                alt="Aurora"
                priority
                width={400}
                height={480}
                className="
                  absolute
                  bottom-[100px]
                  left-1/2
                  -translate-x-1/2
                  [clip-path:polygon(0_0,_100%_0,100%_91%,80%_100%,20%_100%,0_91%)]
                "
              />

              <div
                className="
                  opacity-95
                  bg-black
                  absolute
                  left-1/2
                  -translate-x-1/2
                  !-bottom-[34px]
                  [clip-path:polygon(100%_0,0_0,50%_65%)]
                  fade-strip-bottom
                  blur-[50px]
                  !h-[170px]
                  !w-[380px]
                  !z-0
                "
              />

              {/* DESCRIPTION */}
              <div
                className="
                  absolute
                  bottom-[50px]
                  z-10
                  max-w-[440px]
                  w-full
                  left-1/2
                  -translate-x-1/2
                "
              >
                <div
                  className="
                    px-5
                    py-4
                    flex
                    flex-col
                    gap-2
                    relative
                    bottom-0
                    z-10
                    border
                    border-solid
                    border-[#2D2D2D]
                    backdrop-blur-[10px]
                    max-w-[440px]
                    w-full
                  "
                >
                  <div className="flex gap-3">
                    <Image
                      src={`/images/models/Aurora.svg`}
                      alt="glow"
                      priority
                      width={32}
                      height={32}
                    />
                    <span className="[font-size:_clamp(11px,2vw,36px)] -tracking-[0.36px] font-semibold">
                      Aurora
                    </span>
                  </div>
                  <div className="flex flex-col gap-5 self-end max-w-[356px]">
                    <div className="[font-size:_clamp(12px,1vw,16px)] font-normal font-walsheim">{`Aurora (PERC) Our Passivated Emitter and Rear Cell (PERC) technology, aptly named Aurora, brings a new dawn of highly efficient and reduced power loss solar modules. It's a greener choice for landscapes, generating the same power as conventional modules, but in less space.`}</div>
                    <div className="flex">
                      <LinkWithArrow label={PRODUCT_INTRO_LEARN_MORE} href="" />
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/awards/dividerBig.svg"
                  alt="dividerBig"
                  width={200}
                  height={200}
                  className="absolute bottom-0 left-0 top-0 rotate-180 z-10"
                />
                <Image
                  src="/images/awards/dividerBig.svg"
                  alt="dividerBig"
                  width={200}
                  height={200}
                  className="absolute bottom-0 z-10 right-0"
                />
              </div>
            </div>
          </div>
        </BasicWidthContainer>
      </div>
    </div>
  );
}
