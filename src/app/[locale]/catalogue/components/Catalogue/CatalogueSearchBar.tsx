"use client";

import Button from "@/app/[locale]/components/common/Button";
import Input from "@/app/[locale]/components/common/Input";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { FORMS_FIELDS } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function CatalogueSearchBar() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const { setSearchInputValue, searchInputValue } =
    useContext(ConstructorContext);
  const [inputValue, setInputValue] = useState(searchInputValue);
  const defaultValues = {
    [FORMS_FIELDS.searchInputValue]: "",
  };

  const { handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSearchInputValue(inputValue);
  };

  useEffect(() => {
    setValue(FORMS_FIELDS.searchInputValue, "");
  }, [setValue]);

  // useEffect(() => {
  //   !inputValue && setSearchInputValue("");
  // }, [inputValue, setSearchInputValue]);

  return (
    <>
      <form
        className={`
          min-[920px]:sticky
          min-[920px]:top-[79px]
          top-[63px]
          z-30
          bg-black
          backdrop-blur-3xl
        `}
        onSubmit={handleSubmit(onSubmit)}
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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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
