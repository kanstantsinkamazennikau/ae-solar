"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import LightBoxImage from "@/app/[locale]/components/common/LightBoxImage";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { ABOUT_MAP_DESIGNATIONS } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useState } from "react";
import { Trans } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function BusinessMap() {
  const { translation } = useContext(i18nProviderContext);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center

      "
    >
      <BasicWidthContainer>
        <div
          className="
            xl:mb-[180px]
            lg:mb-[140px]
            md:mb-[100px]
            mb-[80px]
          "
        >
          <TwoTierHeading
            tierOneHeading={translation.businessMap}
            tierTwoHeading={translation.whereOurPowerIs}
            externalStyle="[font-size:_clamp(32px,6vw,96px)!important] md:!text-right !text-left"
            reverseColor
          />
          <div className="relative">
            <div className="max-md:hidden">
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                carousel={{ finite: true }}
                slides={[{ src: `/images/about/map.png` }]}
                plugins={[Zoom]}
                noScroll={{ disabled: true }}
                controller={{
                  closeOnPullDown: true,
                  closeOnBackdropClick: true,
                  closeOnPullUp: true,
                }}
                render={{
                  slide: LightBoxImage,
                  buttonPrev: () => null,
                  buttonNext: () => null,
                }}
                styles={{
                  toolbar: {
                    marginRight: "20px",
                  },
                  container: {
                    backgroundColor: "rgb(25, 25, 25, 0.5)",
                    backdropFilter: "blur(10px)",
                  },
                }}
              />
              <Image
                src="/images/about/map.png"
                alt="map"
                width={1320}
                height={786}
                priority
                quality={100}
                className="min-h-[550px] cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </div>

            <div
              className="
                md:inline-flex
                grid
                min-[600px]:grid-cols-3
                min-[600px]:[&>*:last-child]:[grid-column:1/-1]
                min-[600px]:[&>*:last-child]:justify-center
                grid-cols-2
                gap-6
                p-6
                border
                border-solid
                border-[#191919]
                bg-[#0D0D0D]
                rounded-xl
                md:absolute
                right-0
                bottom-0
              "
            >
              {ABOUT_MAP_DESIGNATIONS.map(({ icon, designation, location }) => (
                <div
                  key={designation}
                  className={`flex md:gap-2 gap-1 hyphens-auto ${
                    location ? "items-start" : "items-center"
                  }`}
                >
                  <Image
                    src={`/images/about/${icon}`}
                    alt={icon}
                    width={16}
                    height={16}
                    priority
                  />
                  <div className="font-walsheim text-sm leading-none">
                    <div className="font-bold md:mb-2 mb-3">
                      {translation[designation]}
                    </div>
                    {location.map((locationZone) => (
                      <div
                        className="font-normal mt-1 font-walsheim"
                        key={locationZone}
                      >
                        <Trans>{translation[locationZone]}</Trans>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
