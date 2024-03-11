import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { ConclusionProps } from "@/app/[locale]/products/[id]/components/Conclusion/types";
import {
  PRODUCT_CHOOSE_READY_MODULES,
  PRODUCT_CONCLUSION_TABLE_ADD,
  PRODUCT_CONCLUSION_TABLE_BODY,
  PRODUCT_CONCLUSION_TABLE_HEADERS,
} from "@/app/[locale]/products/[id]/constants";
import {
  CART_LOCALSTORAGE,
  CART_SUCCESSFULLY_ADDED,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function ModulesTable({ id }: ConclusionProps) {
  const { modules } = PRODUCT_CONCLUSION_TABLE_BODY[id];
  const { setModelsInBag } = useContext(ConstructorContext);

  const addModelToBag = (
    cellType: string,
    moduleDesign: string,
    moduleColor: string,
    frameColor: string,
    moduleDimension: {
      length: string;
      width: string;
    },
    powerRange: string
  ) => {
    const [from, to] = powerRange.split("-");
    setModelsInBag((prevState) => {
      let previousElementId = prevState[prevState.length - 1]?.id ?? 0;
      const modelsInBag = [
        ...prevState,
        {
          id: ++previousElementId,
          model: id,
          solarCellTechnology: cellType,
          moduleSpecification: moduleDesign,
          moduleColor,
          frameColor,
          moduleDimension,
          powerRange: {
            from,
            to,
          },
          backCover: "Glass",
        },
      ];
      localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(modelsInBag));
      return modelsInBag;
    });
    toast.success(CART_SUCCESSFULLY_ADDED);
  };

  return (
    <div className="mt-[60px] w-full flex flex-col items-center">
      <BasicWidthContainer>
        {PRODUCT_CHOOSE_READY_MODULES.split(/\r?\n|\r|\n/g).map(
          (string, index) => (
            <div
              key={string}
              className={`
                ${index === 0 ? "text-[#B30006]" : ""} 
                text-center
                [font-size:_clamp(24px,2.5vw,32px)]
                font-semibold
                leading-[130%]
              `}
            >
              {string}
            </div>
          )
        )}
        <table
          className="
            mt-6
            grid
            w-full
            max-w-[1000px]
            mx-auto
            border
            border-solid
            border-[#191919]
            rounded-xl
            grid-cols-[minmax(210px,3.33fr)_minmax(130px,1.67fr)_minmax(130px,1.67fr)_minmax(120px,1.67fr)_minmax(60px,1fr)_minmax(60px,1fr)_minmax(100px,2fr)_minmax(150px,3.33fr)]
          "
        >
          {/* HEADERS */}
          <thead className="contents">
            <tr className="contents">
              {PRODUCT_CONCLUSION_TABLE_HEADERS.map((header) => (
                <th
                  key={header}
                  className="
                    self-center
                    capitalize
                    pt-4
                    pb-3
                    first:pl-5
                    first:rounded-tl-[10px]
                    last:pr-5
                    last:rounded-tr-[10px]
                    bg-[#131313]
                    h-full
                    flex
                    flex-col
                    justify-center
                    items-start
                  "
                >
                  {header.split(/\r?\n|\r|\n/g).map((string) => (
                    <div
                      key={string}
                      className={`
                        text-center
                        [font-size:_clamp(10px,1.5vw,12px)]
                        font-medium
                        leading-[100%]
                      `}
                    >
                      {string}
                    </div>
                  ))}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="contents">
            {modules.map(
              ({
                model,
                cellType,
                frameColor,
                links,
                moduleColor,
                moduleDesign,
                powerRange,
                moduleDimension,
              }) => (
                <tr
                  key={model}
                  className="
                    contents
                    [&>td]:py-3
                    [&>td]:inline-flex
                    [&>td]:items-center
                    first:[&>td]:pl-5
                    last:[&>td]:justify-end
                    group/add
                    cursor-pointer
                    [&>td]:border-dashed
                    [&>td]:border-b
                    [&>td]:border-[#191919]
                    [&>td]:last:border-none
                    [&>td]:hover:bg-[#191919]
                  "
                  onClick={() =>
                    addModelToBag(
                      cellType,
                      moduleDesign,
                      moduleColor,
                      frameColor,
                      moduleDimension,
                      powerRange
                    )
                  }
                >
                  <td
                    className="
                        [font-size:_clamp(12px,1.5vw,16px)]
                        font-bold
                        md:-tracking-[0.32px]
                        capitalize
                        group-hover/add:text-[#B30006]
                        transition-[color]
                        duration-200
                        pr-2
                      "
                  >
                    {model}
                  </td>
                  <td className="[font-size:_clamp(10px,1.5vw,14px)] font-normal text-dark-gray-900 pr-2">
                    {cellType}
                  </td>
                  <td className="[font-size:_clamp(10px,1.5vw,14px)] font-normal text-dark-gray-900 pr-2">
                    {moduleDesign}
                  </td>
                  <td className="[font-size:_clamp(10px,1.5vw,14px)] font-normal text-dark-gray-900">
                    {powerRange}
                  </td>
                  <td>
                    <Image
                      src={`/images/option/${moduleColor.toLowerCase()}.svg`}
                      alt={moduleColor}
                      priority
                      width={16}
                      height={16}
                    />
                  </td>
                  <td>
                    <Image
                      src={`/images/option/${frameColor.toLowerCase()}.svg`}
                      alt={moduleColor}
                      priority
                      width={16}
                      height={16}
                    />
                  </td>
                  <td>
                    <div className="flex gap-2 relative">
                      {links.map(({ icon, link, tooltip }) => (
                        <a
                          key={icon}
                          href={link}
                          target="_blank"
                          className="group"
                        >
                          <Image
                            src={icon}
                            alt={moduleColor}
                            priority
                            width={16}
                            height={16}
                            className="inline-flex"
                          />
                          <span
                            className="
                                absolute
                                -top-full
                                hidden
                                group-hover:block p-1 
                                bg-[#131313]
                                [font-size:_clamp(8px,1vw,10px)]
                                capitalize
                              "
                          >
                            {tooltip}
                          </span>
                        </a>
                      ))}
                    </div>
                  </td>
                  <td className="cursor-pointer relative">
                    <div
                      className="
                          absolute
                          mr-5 
                          flex
                          items-center
                          max-w-[24px] 
                          group-hover/add:max-w-[150px] 
                          overflow-hidden
                          transition-all
                          duration-200
                          gap-[2px]
                        "
                    >
                      <Image
                        src={`/images/cart.svg`}
                        alt={"cart"}
                        priority
                        width={24}
                        height={24}
                        className="
                            inline-block
                            group-hover/add:[filter:invert(67%)_sepia(89%)_saturate(7492%)_hue-rotate(392deg)_brightness(84%)_contrast(146%)]
                          "
                      />
                      <p
                        className="
                            group-hover/add:text-[#B30006]
                            [font-size:_clamp(10px,1.5vw,12px)]
                            md:-tracking-[0.24px]
                            font-bold
                          "
                      >
                        {PRODUCT_CONCLUSION_TABLE_ADD}
                      </p>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </BasicWidthContainer>
    </div>
  );
}