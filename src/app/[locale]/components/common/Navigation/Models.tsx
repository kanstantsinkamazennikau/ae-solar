"use client";

import Button from "@/app/[locale]/components/common/Button";
import { ModelsProps } from "@/app/[locale]/components/common/Navigation/types";
import { Model, ModelContext } from "@/app/[locale]/context/modelContext";
import {
  HEADER_CALCULATE,
  HEADER_CHOOSE_YOUR_MODEL,
  HEADER_SUBNAVIGATION_PANELS_MODELS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Models({ isLink }: ModelsProps) {
  const locale = useParams()?.locale;
  const router = useRouter();
  const { setModel, model } = useContext(ModelContext);

  const handleClick = () => {
    router.push(`/${locale}/constructor`);
  };

  return (
    <div className="flex justify-center gap-11 items-center">
      <div className="font-normal text-sm leading-normal text-dark-gray-600 -tracking-[0.14px]">
        {HEADER_CHOOSE_YOUR_MODEL}
      </div>
      {HEADER_SUBNAVIGATION_PANELS_MODELS.map((panel) => {
        const modelName = panel.split(".")[0];

        const component = (
          <div
            className={`flex items-center gap-2 cursor-pointer ${
              model === modelName && !isLink
                ? "px-3 py-[10px] border border-solid rounded-[100px] border-sub-navigation-selected-border bg-sub-navigation-selected"
                : ""
            }`}
            key={panel}
            onClick={() => setModel(modelName as Model)}
          >
            <Image
              alt="arrow"
              src={`/images/models/${panel}`}
              width={16}
              height={16}
            />
            <span className="text-base font-normal">{modelName}</span>
          </div>
        );

        return isLink ? (
          <Link href={`/${locale}/products/${modelName.toLowerCase()}`}>
            {component}
          </Link>
        ) : (
          component
        );
      })}
      {isLink && (
        <Button onClick={handleClick} size="extrasmall" color="secondary">
          <span className="leading-[10px] font-semibold">
            {HEADER_CALCULATE}
          </span>
        </Button>
      )}
    </div>
  );
}
