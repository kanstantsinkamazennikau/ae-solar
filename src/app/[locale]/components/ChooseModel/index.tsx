import Customize from "@/app/[locale]/components/ChooseModel/Customize";
import Model from "@/app/[locale]/components/ChooseModel/Model";

export default function ChooseModel() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Model />
      <Customize />
    </div>
  );
}
