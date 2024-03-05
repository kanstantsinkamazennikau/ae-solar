"use client";

import { ProductsContext } from "@/app/[locale]/context/productsContext";
import Advantages from "@/app/[locale]/products/components/Advantages";
import LightingTheWay from "@/app/[locale]/products/components/LightingTheWay";
import PanelsList from "@/app/[locale]/products/components/PanelsList";
import Starfield from "@/app/[locale]/products/components/StarField";
import WeTransform from "@/app/[locale]/products/components/WeTransform";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function ProductsPage() {
  const { isStartAnimation } = useContext(ProductsContext);

  useEffect(() => {
    if (!isStartAnimation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isStartAnimation]);

  return (
    <>
      <LightingTheWay />
      <div
        className={`relative transition-all delay-100 duration-[1s] bg-black ${
          isStartAnimation ? "-translate-y-0" : "translate-y-1/4 opacity-0"
        }`}
      >
        <div className={`absolute top-0 h-1/2 object-cover overflow-hidden`}>
          <Starfield
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={0.02}
            backgroundColor="black"
            style="h-full"
          />
        </div>
        <div className={`absolute top-1/2 h-1/2 object-cover overflow-hidden`}>
          <Starfield
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={0.02}
            backgroundColor="black"
            style="h-full"
            id="stars"
          />
        </div>

        <Image
          src={`/images/glowFull.png`}
          alt="glow"
          priority
          width={1320}
          height={60}
          className="relative  top-0 -translate-x-1/2 left-1/2 rotate-180 h-[60px]"
        />
        <div className="overflow-hidden">
          <Advantages />
          <WeTransform />
        </div>
      </div>
    </>
  );
}
