import Dropdown from "@/app/components/Dropdown";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <Dropdown />
    </main>
  );
}
