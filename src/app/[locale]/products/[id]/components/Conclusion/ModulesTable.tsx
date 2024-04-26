import { Applications } from "@/app/[locale]/catalogue/components/Catalogue/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { ConstructorContext } from "@/app/[locale]/context/ConstructorContext";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import DesktopTableRow from "@/app/[locale]/products/[id]/components/Conclusion/DesktopTableRow";
import MobileTable from "@/app/[locale]/products/[id]/components/Conclusion/MobileTable";
import { ConclusionProps } from "@/app/[locale]/products/[id]/components/Conclusion/types";
import { PRODUCT_CONCLUSION_TABLE_HEADERS } from "@/app/[locale]/products/[id]/constants";
import { CART_LOCALSTORAGE } from "@/app/[locale]/utils/constants";
import { useContext } from "react";
import { Trans } from "react-i18next";
import { toast } from "sonner";

export default function ModulesTable({ id, panelsList }: ConclusionProps) {
  const { setModelsInBag, modelsInBag } = useContext(ConstructorContext);
  const { translation } = useContext(i18nProviderContext);

  const addModelToBag = (
    model: string,
    cellType: string,
    moduleDesign: string,
    moduleColor: string,
    frameColor: string,
    moduleDimension: {
      length: string;
      width: string;
      height: string;
    },
    applications: Applications,
    powerRange: string,
    backCover: string
  ) => {
    const [from, to] = powerRange.split("-");
    setModelsInBag((prevState) => {
      const modelsInBag = [
        ...prevState,
        {
          id: model,
          model: id,
          solarCellTechnology: cellType,
          moduleSpecification: moduleDesign,
          moduleColor,
          frameColor,
          moduleDimension,
          applications,
          powerRange: {
            from,
            to,
          },
          backCover,
        },
      ];
      localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(modelsInBag));
      return modelsInBag;
    });
    toast.success(translation.successfullyAdded, { duration: 3000 });
  };

  const removeModel = (model: string) => {
    const remainingModels = modelsInBag.filter(({ id }) => id !== model);
    setModelsInBag(remainingModels);
    localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(remainingModels));
  };

  return (
    <div className="mt-[60px] w-full flex flex-col items-center">
      <BasicWidthContainer>
        <div className="lg:block hidden">
          <div
            className="
              text-center
              [font-size:_clamp(24px,2.5vw,32px)]
              font-semibold
              leading-[130%]
            "
          >
            <Trans
              components={{
                red: <span className="text-[#B30006]" />,
              }}
            >
              {translation.chooseIdealProduct}
            </Trans>
          </div>

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
              grid-cols-[minmax(210px,3.33fr)_minmax(130px,1.67fr)_minmax(130px,1.67fr)_minmax(120px,1.67fr)_minmax(60px,1fr)_minmax(70px,1fr)_minmax(100px,2fr)_minmax(150px,3.33fr)]
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
                    <div
                      className={`
                        [font-size:_clamp(12px,1.5vw,14px)]
                        font-medium
                        text-start
                        leading-[100%]
                      `}
                    >
                      <Trans>{translation[header]}</Trans>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="contents">
              {panelsList?.map(
                ({
                  model,
                  cellType,
                  frameColor,
                  links,
                  moduleColor,
                  moduleDesign,
                  powerRange,
                  moduleDimension,
                  applications,
                  backCover,
                }) => (
                  <DesktopTableRow
                    key={model}
                    {...{
                      model,
                      cellType,
                      frameColor,
                      links,
                      moduleColor,
                      moduleDesign,
                      powerRange,
                      moduleDimension,
                      applications: applications as Applications,
                      backCover,
                      addModelToBag,
                      removeModel,
                    }}
                  />
                )
              )}
            </tbody>
          </table>
        </div>

        {/* MOBILE */}
        <div className="grid min-[920px]:grid-cols-3 min-[640px]:grid-cols-2 grid-cols-1 gap-4 lg:hidden justify-center">
          {panelsList?.map(
            ({
              model,
              cellType,
              frameColor,
              links,
              moduleColor,
              moduleDesign,
              powerRange,
              moduleDimension,
              applications,
              backCover,
            }) => (
              <MobileTable
                key={model}
                {...{
                  model,
                  cellType,
                  frameColor,
                  links,
                  moduleColor,
                  moduleDesign,
                  powerRange,
                  moduleDimension,
                  applications: applications as Applications,
                  backCover,
                  addModelToBag,
                  removeModel,
                }}
              />
            )
          )}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
