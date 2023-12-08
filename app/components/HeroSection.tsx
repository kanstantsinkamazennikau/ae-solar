import Image from "next/image";
import {
  SCROLL_TO_THE_FUTURE,
  TIME_TO_SAVE_THE_WORLD_ARRAY,
} from "@/app/utils/constants";

export default function HeroSection() {
  return (
    <div className="!w-screen flex justify-between relative -top-[120px]">
      <div className="fade-strip-top" />
      <div className="fade-strip-bottom" />
      <div className="fade-strip-left" />
      <div className="fade-strip-right" />
      <Image
        src="/images/saveTheWorldLeft.png"
        alt="solar panel"
        priority
        width={813}
        height={800}
        className="object-contain max-w-[50vw] z-20"
      />
      <Image
        src="/images/saveTheWorldRight.png"
        alt="solar panel"
        priority
        width={801}
        height={800}
        className="object-contain max-w-[50vw] z-20"
      />
      <div className="absolute top-1/4 left-2/4 -translate-x-2/4 text-center z-10">
        {TIME_TO_SAVE_THE_WORLD_ARRAY.map((words) => (
          <h1 className="max-w-2xl text-9xl font-bold" key={words}>
            {words}
          </h1>
        ))}
      </div>
      <div className="flex items-center flex-col gap-4 absolute bottom-[10%] left-2/4 -translate-x-2/4 text-center z-30 font-semibold text-xl">
        <span>{SCROLL_TO_THE_FUTURE}</span>
        <Image
          src="/images/arrowFuture.png"
          alt="arrow"
          width={23}
          height={24}
        />
      </div>
    </div>
  );
}
