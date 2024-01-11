import GeneratedModel from "@/app/[locale]/calculate/components/GeneratedModel";
import Options from "@/app/[locale]/calculate/components/Options";

export default function Calculate() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Options />
      <GeneratedModel />
    </div>
  );
}
