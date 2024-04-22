import Button from "@/app/[locale]/components/common/Button";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { HEADER_SUBNAVIGATION_PANELS_MODELS } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function SubNavigationProductPanels({
  isShowAllProductsLink,
  allModulesText,
  chooseModuleText,
}: {
  isShowAllProductsLink?: boolean;
  allModulesText?: string;
  chooseModuleText?: string;
}) {
  const locale = useParams()?.locale as LocaleTypes;
  const pathname = usePathname();
  const isProductsPage = ["/products", `/${locale}/products`].some((path) =>
    pathname.includes(path)
  );

  return (
    <div
      className={`
        bg-sub-navigation-black 
        backdrop-blur-[10px] 
        border-b border-solid border-sub-navigation-border
        py-2
        flex
        justify-center
        z-20
      `}
    >
      <div className="flex justify-center items-center gap-2 xl:gap-6 md:gap-4">
        {isShowAllProductsLink && (
          <>
            <Link
              href={`/products`}
              className={`
                flex
                flex-col
                items-center
                gap-2
                cursor-pointer
                leading-[100%]
                [font-size:_clamp(14px,1vw,16px)]
                group/link
              `}
            >
              <Image
                alt="model"
                src={`/images/models/All.svg`}
                width={24}
                height={24}
                className="md:w-6 md:h-6 w-5 h-5"
              />
              <span className="font-normal group-hover/link:text-base-red transition-all duration-200">
                {allModulesText}
              </span>
            </Link>
            <div className="w-[1px] h-[90%] bg-[#2D2D2D]" />
          </>
        )}
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
                  group/link
                `}
            >
              <Image
                alt="model"
                src={`/images/models/${panel}`}
                width={24}
                height={24}
                className="md:w-6 md:h-6 w-5 h-5"
              />
              <span className="font-normal group-hover/link:text-base-red">
                {modelName}
              </span>
            </Link>
          );
          return component;
        })}
        {/* <div className="w-[1px] h-[90%] bg-[#2D2D2D]" /> */}
        {isProductsPage && (
          <Link href={"/catalogue"} className="max-[920px]:hidden">
            <Button externalStyle="!py-[10px] mx-auto relative z-10 [font-size:_clamp(14px,1vw,16px)]">
              {chooseModuleText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
