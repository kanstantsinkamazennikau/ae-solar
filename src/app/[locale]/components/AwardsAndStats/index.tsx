import Awards from "@/app/[locale]/components/AwardsAndStats/Awards";
import Production from "@/app/[locale]/components/AwardsAndStats/Production";
import Stats from "@/app/[locale]/components/AwardsAndStats/Stats";

export default function AwardsAndStats() {
  return (
    <div className="flex flex-col gap-20 mb-[280px]">
      <Stats />
      <Production />
      <Awards />
    </div>
  );
}
