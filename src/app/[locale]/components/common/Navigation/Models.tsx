import Button from "@/app/[locale]/components/common/Button";
import {
  HEADER_CALCULATE,
  HEADER_CHOOSE_YOUR_MODEL,
  HEADER_SUBNAVIGATION_PANELS_MODELS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Models() {
  const locale = useParams()?.locale;

  return (
    <div className="flex justify-center gap-11 items-center">
      <div className="font-normal text-sm leading-normal text-dark-gray-600 -tracking-[0.14px]">
        {HEADER_CHOOSE_YOUR_MODEL}
      </div>
      {HEADER_SUBNAVIGATION_PANELS_MODELS.map((model) => {
        const modelName = model.split(".")[0];

        return (
          <Link
            key={model}
            href={`/${locale}/products/${modelName.toLowerCase()}`}
          >
            <div className="flex items-center gap-2">
              <Image
                className="-rotate-90"
                alt="arrow"
                src={`/images/models/${model}`}
                width={16}
                height={16}
              />
              <span>{modelName}</span>
            </div>
          </Link>
        );
      })}
      <Button
        onClick={() => console.log("contact us")}
        size="extrasmall"
        color="secondary"
      >
        <span className="leading-[10px] font-semibold">{HEADER_CALCULATE}</span>
      </Button>
    </div>
  );
}
