"use client";

import Tier1 from "@/app/[locale]/components/common/Tier1";
import { ProductsContext } from "@/app/[locale]/context/productsContext";
import Advantages from "@/app/[locale]/products/components/Advantages";
import LightingTheWay from "@/app/[locale]/products/components/LightingTheWay";
import PanelsList from "@/app/[locale]/products/components/PanelsList";
import WeTransform from "@/app/[locale]/products/components/WeTransform";
import {
  PRODUCT_SINCE,
  PRODUCT_SINCE_HIGHLIGHT,
  PRODUCT_WE_ARE_TIER,
  PRODUCT_WE_ARE_TIER_HIGHLIGHT,
} from "@/app/[locale]/products/constants";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function ProductsPage() {
  const { isStartAnimation, setIsStartAnimation } = useContext(ProductsContext);

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
      {
        <div
          className={`relative transition-all delay-100 duration-[1s] bg-black ${
            isStartAnimation ? "-translate-y-0" : "translate-y-1/4 opacity-0"
          }`}
        >
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
            <PanelsList />
            <WeTransform />
          </div>
        </div>
      }
    </>
  );
}
