import Image from "next/image";
import { TIME_TO_SAVE_THE_WORLD_ARRAY } from "@/app/utils/constants";

export default function HeroSection() {
  return (
    <div className="relative w-screen h-[800px] -top-10">
      <div className="absolute w-screen max-w-full h-[800px] top-0 ">
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
          className="object-contain absolute top-0 left-0"
        />
        <Image
          src="/images/saveTheWorldRight.png"
          alt="solar panel"
          priority
          width={801}
          height={800}
          className="object-contain absolute top-0 right-0"
        />
        <div className="absolute top-1/4 left-2/4 -translate-x-2/4 text-center -z-10 font-bold">
          {TIME_TO_SAVE_THE_WORLD_ARRAY.map((words) => (
            <h1 className="max-w-2xl text-9xl" key={words}>
              {words}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
