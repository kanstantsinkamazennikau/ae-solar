import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { HeadingWithBackgroundProps } from "@/app/[locale]/components/common/HeadingWithBackground/types";
import Image from "next/image";

export default function HeadingWithBackground({
  tierOneHeading,
  tierTwoHeading,
  backgroundImage,
}: HeadingWithBackgroundProps) {
  return (
    <>
      <div className="relative -mt-[80px] flex justify-center">
        <Image
          src={backgroundImage}
          alt="documents"
          width={1920}
          height={440}
          quality={100}
          priority
          className="h-[440px]"
        />
        <div className="flex w-full justify-center absolute bottom-0">
          <BasicWidthContainer>
            <div className="flex flex-col gap-4">
              <p
                className="
                  [font-size:_clamp(24px,4vw,96px)]
                  font-extrabold
                  leading-[100%]
                  -tracking-[2.88]
                "
              >
                {tierOneHeading}
              </p>
              <p
                className="
                  [font-size:_clamp(16px,4vw,64px)]
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
