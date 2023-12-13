import Awards from "@/app/[locale]/home/AwardsAndStats/Awards";
import Production from "@/app/[locale]/home/AwardsAndStats/Production";
import Stats from "@/app/[locale]/home/AwardsAndStats/Stats";

export default function AwardsAndStats() {
  return (
    <div className="flex flex-col gap-20">
      <Stats />
      <Production />
      <Awards />
    </div>
  );
}
