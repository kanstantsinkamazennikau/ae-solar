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
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/ConstructorContext";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useContext, useEffect, useRef, useState } from "react";

export default function CatalogueSort() {
  const { setIsShowFilterMenu } = useContext(ConstructorContext);
  const { translation } = useContext(i18nProviderContext);

  const onClick = () => {
    setIsShowFilterMenu((prevState) => !prevState);
  };

  return (
    <>
      <div
        className="
          flex
          items-center
          justify-between
          min-[1380px]:flex-row-reverse
          relative
          pt-4
          min-[460px]:pb-4    
          bg-black
          w-full
        "
      >
        <div className="flex gap-3 justify-start flex-row w-full">
          <DropdownInput
            dropDownValues={CATALOGUE_SORT_VALUES}
            title={translation.sort}
            param={SORT_ORDER}
            externalStyle={"z-30 max-[460px]:w-[70%]"}
          />
          <DropdownInput
            dropDownValues={CATALOGUE_SHOW_VALUES}
            title={translation.show}
            param={PER_PAGE}
            externalStyle={"z-30 max-[460px]:w-[30%]"}
          />
        </div>
      </div>
      <div
        className="
          min-[460px]:justify-end
          justify-center
          flex
          min-[1380px]:hidden
          cursor-pointer
          max-[1380px]:sticky
          max-[1380px]:top-[78px]
          max-[920px]:top-[62px]
          min-[460px]:-mt-[67px]
          h-[67px]
          pt-4
          pb-4
          bg-black
          z-20
          items-center
        "
      >
        <Button
          style="outline"
          externalStyle="md:!py-2 !py-1 !px-4"
          onClick={onClick}
        >
          <span className="[font-size:_clamp(14px,1.5vw,16px)]">
            {translation.filter}
          </span>
          <Image
            src={`/images/option/filter.svg`}
            alt={"filter"}
            priority
            width={24}
            height={24}
          />
        </Button>
      </div>
    </>
  );
}

function DropdownInput({
  dropDownValues,
  title,
  param,
  externalStyle,
}: DropdownSortProps) {
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
    <div
      className={`flex min-[600px]:items-center items-start gap-2 ${externalStyle} min-[600px]:flex-row flex-col`}
    >
      <span className="[font-size:_clamp(14px,1.5vw,16px)] text-[#505050]">
        {title}
      </span>
      <div className="bg-[#131313] border border-solid border-[#191919] outline-none py-[6px] px-2 flex rounded-md relative w-full">
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
  const { translation } = useContext(i18nProviderContext);
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
        justify-between
        items-center
        gap-2
        cursor-pointer
        flex-shrink-0
        w-full
        ${selectedOption ? "" : "text-[#9ca3af]"}
        [font-size:_clamp(12px,1.5vw,14px)]
      `}
      onClick={() => setIsSelection((prevState) => !prevState)}
      ref={outsideClickRef}
    >
      {translation[selectedOption.label] || selectedOption.label}
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
  const { translation } = useContext(i18nProviderContext);

  return (
    <>
      {optionsList.map(({ label, value }) => (
        <Fragment key={value}>
          <div
            className="cursor-pointer flex justify-start items-center [font-size:_clamp(12px,1.5vw,14px)] mb-1 last-of-type:mb-0"
            onClick={() => handleSelection({ label, value })}
          >
            {translation[label] || label}
          </div>
          <hr className="bg-[#191919] h-[1px] border-none w-full mb-2 mt-2 last:h-0 last:mt-0 last:mb-0" />
        </Fragment>
      ))}
    </>
  );
}
