import CataloguePanelsList from "@/app/[locale]/catalogue/components/Catalogue/CataloguePanelsList";
import CatalogueSearchBar from "@/app/[locale]/catalogue/components/Catalogue/CatalogueSearchBar";
import CatalogueSort from "@/app/[locale]/catalogue/components/Catalogue/CatalogueSort";
import Filters from "@/app/[locale]/catalogue/components/Catalogue/Filters";
import GetInTouch from "@/app/[locale]/components/GetInTouch";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";

export default function Catalogue() {
  return (
    <div
      className="flex flex-col justify-center items-center scroll-mt-[84px]"
      id="panelsList"
    >
      <BasicWidthContainer>
        <div className="flex justify-between gap-14 relative z-20">
          <div className="min-[1380px]:max-w-[1000px] w-full">
            <CatalogueSearchBar />
            <CatalogueSort />
            <hr className="bg-[#191919] h-[1px] border-none w-full mb-10" />
            <CataloguePanelsList />
          </div>
          <Filters />
        </div>
      </BasicWidthContainer>
      {/* //TODO */}
      {/* <GetInTouch /> */}
    </div>
  );
}
