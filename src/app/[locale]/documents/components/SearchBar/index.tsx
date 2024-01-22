"use client";

import Button from "@/app/[locale]/components/common/Button";
import Input from "@/app/[locale]/components/common/Input";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import { DOCUMENTS_SEARCH, FORMS_FIELDS } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function SearchBar() {
  const { setSearchInputValue, documentsType } = useContext(DocumentsContext);

  const defaultValues = {
    [FORMS_FIELDS.searchInputValue]: "",
  };

  const { register, handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSearchInputValue(data[FORMS_FIELDS.searchInputValue]);
  };

  useEffect(() => {
    setValue(FORMS_FIELDS.searchInputValue, "");
  }, [documentsType, setValue]);

  return (
    <>
      <form
        className="
          sticky
          min-[920px]:top-[80px]
          top-[64px]
          z-30
          pb-2
          bg-black
          backdrop-blur-3xl
        "
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
              placeholder={"I’m looking for…"}
              register={register(FORMS_FIELDS.searchInputValue)}
              type="text"
              autoComplete="nope"
            />
          </div>
          <div>
            <Button size="extrasmall">
              <span className="[font-size:_clamp(12px,1.5vw,16px)] leading-[100%]">
                {DOCUMENTS_SEARCH}
              </span>
            </Button>
          </div>
        </div>
      </form>

      <hr className="bg-option-border h-[1px] border-none w-full mt-2" />
    </>
  );
}
