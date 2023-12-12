import Awards from "@/app/home/AwardsAndStats/Awards";
import Production from "@/app/home/AwardsAndStats/Production";
import Stats from "@/app/home/AwardsAndStats/Stats";

export default function AwardsAndStats() {
  return (
    <div className="flex flex-col gap-20">
      <Stats />
      <Production />
      <Awards />
    </div>
  );
}
