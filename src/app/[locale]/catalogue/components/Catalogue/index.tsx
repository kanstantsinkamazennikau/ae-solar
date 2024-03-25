import CataloguePanelsList from "@/app/[locale]/catalogue/components/Catalogue/CataloguePanelsList";
import CatalogueSearchBar from "@/app/[locale]/catalogue/components/Catalogue/CatalogueSearchBar";
import Filters from "@/app/[locale]/catalogue/components/Catalogue/Filters";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";

export default function Catalogue() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        <div className="flex justify-between gap-14">
          <div className="max-w-[1000px]">
            <CatalogueSearchBar />
            <CataloguePanelsList />
          </div>
          <Filters />
        </div>
      </BasicWidthContainer>
    </div>
  );
}
