import Contacts from "@/app/[locale]/company/imprint/components/Contacts";
import Artcile from "@/app/[locale]/company/manufacturer/components/Article";
import {
  MANUFACTURER_MANUFACTURER,
  MANUFACTURER_QUALITY,
} from "@/app/[locale]/company/manufacturer/constants";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import DownloadPresentation from "@/app/[locale]/components/common/DownloadPresentation";
import HeadingWithBackground from "@/app/[locale]/components/common/HeadingWithBackground";

export default function ManufacturerPage() {
  return (
    <>
      <HeadingWithBackground
        tierOneHeading={MANUFACTURER_MANUFACTURER}
        tierTwoHeading={MANUFACTURER_QUALITY}
        backgroundImage="/images/about/manufacturer/manufacturerBackground.png"
        mobileBackgroundImage="/images/about/manufacturer/manufacturerBackgroundMobile.png"
      />
      <div className="flex w-full justify-center flex-col items-center mb-20">
        <BasicWidthContainer>
          <div className="flex gap-[60px] relative min-[920px]:flex-row flex-col">
            <div>
              <div
                className="
                  flex
                  min-[920px]:flex-col
                  flex-col-reverse
                  min-[920px]:sticky
                  static
                  min-[920px]:top-[100px]
                  top-[80px]
                  w-full
                  min-w-[300px]
                  max-w-[300px]
                  gap-6
                  mx-auto
                  max-[920px]:[&>*>#contacts]:static
                  max-[920px]:[&>*>#contacts>div]:border-b-0
                  max-[920px]:[&>*>#contacts]:-mb-12
                  max-[920px]:[&>*>#contacts]:z-10
                "
              >
                <DownloadPresentation link="/documents/presentation.pdf" />
                <div className="relative">
                  <Contacts />
                  <hr className="border-[#131313] min-[920px]:hidden absolute -bottom-[11%] z-10 w-[calc(100%-40px)] left-1/2 -translate-x-1/2" />
                </div>
              </div>
            </div>
            <Artcile />
          </div>
        </BasicWidthContainer>
      </div>
    </>
  );
}
