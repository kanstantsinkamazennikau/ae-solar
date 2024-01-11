import Customize from "@/app/[locale]/calculate/components/ChooseModel/Customize";
import Model from "@/app/[locale]/calculate/components/ChooseModel/Model";

export default function ChooseModel() {
  return (
    <div className="flex flex-col gap-[60px] md:mt-10 mt-0 w-full md:w-auto">
      <Model />
      <Customize />
    </div>
  );
}
