import { HEADER_SUBNAVIGATION_PANELS_MODELS } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function SubNavigationProductPanels() {
  return (
    <div
      className={`
        bg-sub-navigation-black 
        backdrop-blur-[10px] 
        border-b border-solid border-sub-navigation-border
        py-2
        flex
        justify-center
        sticky
        min-[920px]:top-[79px]
        top-[63px]
        z-20
      `}
    >
      <div className="flex justify-center items-center gap-2 xl:gap-6 md:gap-4">
        {HEADER_SUBNAVIGATION_PANELS_MODELS.map((panel) => {
          const modelName = panel.split(".")[0];
          const component = (
            <Link
              href={`/products/${modelName}`}
              key={modelName}
              className={`
                  flex
                  flex-col
                  items-center
                  gap-2
                  cursor-pointer
                  leading-[100%]
                  [font-size:_clamp(12px,1vw,16px)]
                `}
            >
              <Image
                alt="model"
                src={`/images/models/${panel}`}
                width={24}
                height={24}
                className="md:w-6 md:h-6 w-5 h-5"
              />
              <span className="font-normal">{modelName}</span>
            </Link>
          );
          return component;
        })}
      </div>
    </div>
  );
}