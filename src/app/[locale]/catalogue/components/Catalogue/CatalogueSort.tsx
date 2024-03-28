"use client";

import {
  DropdownSortProps,
  OptionsSortProps,
  SelectedSortOptionProps,
  SortOption,
} from "@/app/[locale]/catalogue/components/Catalogue/types";
import {
  CATALOGUE_SHOW_VALUES,
  CATALOGUE_SORT_VALUES,
  PAGE,
  PER_PAGE,
  SORT_ORDER,
} from "@/app/[locale]/catalogue/constants";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Fragment, useContext, useEffect, useRef, useState } from "react";

export default function CatalogueSort() {
  const { setIsShowFilterMenu } = useContext(ConstructorContext);

  const onClick = () => {
    setIsShowFilterMenu((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-between min-[1380px]:flex-row-reverse">
      <div className="flex gap-3 justify-end">
        <DropdownInput
          dropDownValues={CATALOGUE_SORT_VALUES}
          title={"Sort"}
          param={SORT_ORDER}
        />
        <DropdownInput
          dropDownValues={CATALOGUE_SHOW_VALUES}
          title={"Show"}
          param={PER_PAGE}
        />
      </div>
      <div className="min-[1380px]:hidden">
        <Image
          src={`/images/option/filter.svg`}
          alt={"filter"}
          priority
          width={24}
          height={24}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

function DropdownInput({ dropDownValues, title, param }: DropdownSortProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const [isSelection, setIsSelection] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const { isResetFilter } = useContext(ConstructorContext);

  const [selectedOption, setSelectedOption] = useState(
    dropDownValues.find(({ value }) => value == params.get(param)) ||
      dropDownValues[0]
  );

  const handleSelection = (serviceName: SortOption) => {
    setIsSelection(false);
    setSelectedOption(serviceName);
    params.set(param, `${serviceName.value}`);
    if (param === PER_PAGE) {
      params.set(PAGE, "1");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (isResetFilter) {
      setSelectedOption(dropDownValues[0]);
    }
  }, [dropDownValues, isResetFilter]);

  return (
    <div className={`flex items-center gap-2`}>
      <span className="[font-size:_clamp(14px,1.5vw,16px)] text-[#505050]">
        {t(title)}
      </span>
      <div className="bg-[#131313] border border-solid border-[#191919] outline-none py-[6px] px-2 flex rounded-md relative">
        <SelectedOption
          selectedOption={selectedOption}
          setIsSelection={setIsSelection}
          dropdownRef={dropdownRef}
          isSelection={isSelection}
        />
        {isSelection && (
          <div
            ref={dropdownRef}
            className="
              max-h-[200px]
              overflow-y-auto
              absolute
              codeDropdown
              p-2
              border
              border-solid
              border-[#191919]
              rounded-[5px]
              bg-[#131313]
              backdrop-blur-[50px]
              translate-y-[32px]
              z-10
              left-0
              whitespace-nowrap
              w-[-webkit-fill-available]
              w-[-moz-available]
            "
          >
            <Options
              handleSelection={handleSelection}
              optionsList={dropDownValues}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function SelectedOption({
  selectedOption,
  setIsSelection,
  dropdownRef,
  isSelection,
}: SelectedSortOptionProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const outsideClickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !outsideClickRef.current?.contains(event.target as HTMLElement) &&
        !dropdownRef.current?.contains(event.target as HTMLElement)
      ) {
        setIsSelection(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setIsSelection]);

  return (
    <div
      className={`
        inline-flex
        justify-center
        items-center
        gap-2
        cursor-pointer
        flex-shrink-0
        ${selectedOption ? "" : "text-[#9ca3af]"}
        [font-size:_clamp(12px,1.5vw,14px)]
      `}
      onClick={() => setIsSelection((prevState) => !prevState)}
      ref={outsideClickRef}
    >
      {t(selectedOption.label)}
      <Image
        src={`/images/documents/dropDownIcon.svg`}
        alt="triangle"
        width={16}
        height={16}
        className={`${
          isSelection ? "rotate-180" : "rotate-0"
        } transition-all duration-200`}
      />
    </div>
  );
}

function Options({ handleSelection, optionsList }: OptionsSortProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <>
      {optionsList.map(({ label, value }) => (
        <Fragment key={value}>
          <div
            className="cursor-pointer flex justify-center items-center [font-size:_clamp(12px,1.5vw,14px)] mb-1 last-of-type:mb-0"
            onClick={() => handleSelection({ label, value })}
          >
            {t(label)}
          </div>
          <hr className="bg-[#191919] h-[1px] border-none w-full mb-2 mt-2 last:h-0 last:mt-0 last:mb-0" />
        </Fragment>
      ))}
    </>
  );
}
