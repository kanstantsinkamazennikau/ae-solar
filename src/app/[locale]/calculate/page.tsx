import GeneratedModel from "@/app/[locale]/calculate/components/GeneratedModel";
import Option from "@/app/[locale]/calculate/components/Option";

export default function Calculate() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Option />
      <GeneratedModel />
    </div>
  );
}
