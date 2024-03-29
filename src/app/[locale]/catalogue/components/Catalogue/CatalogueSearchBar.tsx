"use client";

import { PAGE } from "@/app/[locale]/catalogue/constants";
import Button from "@/app/[locale]/components/common/Button";
import Input from "@/app/[locale]/components/common/Input";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { FORMS_FIELDS } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function CatalogueSearchBar() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [searchValue, setSearchValue] = useState(params.get("model") || "");
  const { setIsFilterModels, isResetFilter } = useContext(ConstructorContext);

  const handleOnChange = (value: string) => {
    if (!value) {
      params.delete("model");
    } else {
      params.set("model", `${value}`);
    }
    params.set(PAGE, `1`);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (isResetFilter) {
      setSearchValue("");
    }
  }, [isResetFilter]);

  return (
    <>
      <form
        className={`
          z-30
          bg-black
          backdrop-blur-3xl
        `}
        onSubmit={(e) => {
          e.preventDefault();
          setIsFilterModels(true);
        }}
      >
        <div
          className="
            flex
            pl-2
            pr-[6px]
            border-solid
            border
          border-option-border
            items-center
            rounded-full
          bg-[#0D0D0D]
            w-full
          "
        >
          <div className="flex py-3 px-2 w-full">
            <Image
              src={`/images/documents/search.svg`}
              alt="glow"
              priority
              width={24}
              height={24}
            />
            <Input
              externalStyle="border-none"
              externalContainerStyle="!w-full"
              name={FORMS_FIELDS.searchInputValue}
              placeholder={t("Im looking for")}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                handleOnChange(e.target.value);
              }}
            />
          </div>
          <div>
            <Button externalStyle="!py-[8px] !px-[14px]">
              <span className="[font-size:_clamp(12px,1.5vw,16px)] leading-[100%]">
                {t("Search")}
              </span>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
