import Catalogue from "@/app/[locale]/catalogue/components/Catalogue";
import CatalogueHeroSection from "@/app/[locale]/catalogue/components/CatalogueHeroSection";
import PerfectlyAlignedOptions from "@/app/[locale]/catalogue/components/CatalogueHeroSection/PerfectlyAlignedOptions";

export default function CataloguePage() {
  return (
    <div>
      <CatalogueHeroSection />
      <div className="relative">
        <PerfectlyAlignedOptions />
        <Catalogue />
      </div>
    </div>
  );
}
