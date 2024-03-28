import Customize from "@/app/[locale]/catalogue/components/Catalogue/Customize";
import FilterControlButtons from "@/app/[locale]/catalogue/components/Catalogue/FilterControlButtons";
import TechnologyFilter from "@/app/[locale]/catalogue/components/Catalogue/TechnologyFilter";
import {
  MODELS_LIST,
  TECHNOLOGIES_LIST,
} from "@/app/[locale]/catalogue/constants";

export default function Filters() {
  return (
    <div
      className="
        p-10
        flex
        flex-col
        rounded-[20px]
        border
        border-solid
        border-[#131313]
        bg-[#0D0D0D]
        h-fit
        gap-6
        max-w-[315px]
        mb-10
        max-[1380px]:translate-x-full
        max-[1380px]:absolute
        right-0
      "
    >
      <TechnologyFilter
        checkboxesList={TECHNOLOGIES_LIST}
        filterTitle="Technology"
      />
      <hr className="bg-[#191919] h-[1px] border-none w-full" />
      <TechnologyFilter
        checkboxesList={MODELS_LIST}
        showModelIcon
        filterTitle="Technical name"
      />
      <hr className="bg-[#191919] h-[1px] border-none w-full" />
      <Customize />
      <hr className="bg-[#191919] h-[1px] border-none w-full" />
      <FilterControlButtons />
    </div>
  );
}
