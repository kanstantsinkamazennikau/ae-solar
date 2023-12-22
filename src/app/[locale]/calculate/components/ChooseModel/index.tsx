import Customize from "@/app/[locale]/calculate/components/ChooseModel/Customize";
import Model from "@/app/[locale]/calculate/components/ChooseModel/Model";
import { useRef } from "react";

export default function ChooseModel() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Model />
      <Customize />
    </div>
  );
}
