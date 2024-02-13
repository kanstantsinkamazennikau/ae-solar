import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { HeadingWithBackgroundProps } from "@/app/[locale]/components/common/HeadingWithBackground/types";
import Image from "next/image";

export default function HeadingWithBackground({
  tierOneHeading,
  tierTwoHeading,
  backgroundImage,
  mobileBackgroundImage,
}: HeadingWithBackgroundProps) {
  return (
    <>
      <div className="relative -mt-[80px] flex justify-center">
        <Image
          src={backgroundImage}
          alt="backgroundImage"
          width={1920}
          height={440}
          quality={100}
          priority
          className="xl:h-[440px] lg:h-[380px] min-[920px]:h-[320px] md:h-[300px] min-[560px]:h-[250px] min-[920px]:mt-0 mt-[80px] min-[560px]:block hidden"
        />
        {mobileBackgroundImage && (
          <Image
            src={mobileBackgroundImage}
            alt="backgroundImage"
            width={360}
            height={440}
            quality={100}
            priority
            className="block min-[560px]:hidden h-[300px] w-full"
          />
        )}
        <div className="flex w-full justify-center absolute bottom-0">
          <BasicWidthContainer>
            <div className="flex flex-col gap-4">
              <p
                className="
                  [font-size:_clamp(40px,4vw,96px)]
                  font-extrabold
                  leading-[100%]
                  -tracking-[2.88]
                "
              >
                {tierOneHeading}
              </p>
              <p
                className="
                  [font-size:_clamp(32px,4vw,64px)]
                  font-medium
                  leading-[100%]
                  -tracking-[1.92]
                  text-base-red
                "
              >
                {tierTwoHeading}
              </p>
            </div>
          </BasicWidthContainer>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <BasicWidthContainer>
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="mb-[60px]"
          />
        </BasicWidthContainer>
      </div>
    </>
  );
}
