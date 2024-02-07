"use client";

import LightingTheWay from "@/app/[locale]/products/components/LightingTheWay";
import PanelsFlower from "@/app/[locale]/products/components/PanelsFlower";
//@ts-ignore
import "@splidejs/react-splide/css";

export default function ProductsPage() {
  return (
    <div className="">
      <LightingTheWay />
      <PanelsFlower />
    </div>
  );
}
