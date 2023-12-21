import Customize from "@/app/[locale]/constructor/components/ModelPicker/Customize";
import Model from "@/app/[locale]/constructor/components/ModelPicker/Model";

export default function ModelPicker() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Model />
      {/* <Customize /> */}
    </div>
  );
}
