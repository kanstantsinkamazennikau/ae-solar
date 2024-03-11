"use client";

import ConclusionVideo from "@/app/[locale]/products/[id]/components/Conclusion/ConclusionVideo";
import ModulesTable from "@/app/[locale]/products/[id]/components/Conclusion/ModulesTable";
import { ConclusionProps } from "@/app/[locale]/products/[id]/components/Conclusion/types";

export default function Conclusion({ id }: ConclusionProps) {
  return (
    <div
      className="flex justify-center items-center xl:mb-[150px] lg:mb-[120px] md:mb-[100px] mb-[80px] mt-20 w-full flex-col"
      id="conclusion"
    >
      <ConclusionVideo id={id} />
      <ModulesTable id={id} />
    </div>
  );
}
