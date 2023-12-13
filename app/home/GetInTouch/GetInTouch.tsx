import {
  GET_IN_TOUCH_CLIENT_TYPE,
  GET_IN_TOUCH_ELEVATE_GROWTH,
  GET_IN_TOUCH_JOIN_US,
} from "@/app/utils/constants";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <div
      className="
      flex
      justify-center
      items-end
      bg-gradient-297
      bg-[#111]
      w-screen
      h-screen
      relative
      "
    >
      <Image
        src="/images/getInTouchUnion.svg"
        alt="union"
        priority
        width={1920}
        height={1080}
        className="h-full w-full mix-blend-color-dodge absolute"
      />
      <div className="flex flex-col justify-center items-start gap-[100px] max-w-[1320px]">
        {/* CLIENT TYPE */}
        <div className="flex p-1 justify-center items-center gap-5 get-in-touch-border">
          {GET_IN_TOUCH_CLIENT_TYPE.map((client) => (
            <button
              className="flex py-5 px-7 get-in-touch-client-border"
              key={client}
            >
              <span className="text-2xl leading-[0.9]">{client}</span>
            </button>
          ))}
        </div>

        {/* TITLE */}

        <div className="flex flex-col gap-[60px] self-stretch">
          <div className="text-[64px] leading-none text-base-red -tracking-[1.92px] font-medium">
            {GET_IN_TOUCH_ELEVATE_GROWTH}
          </div>
          <div className="text-8xl leading-none -tracking-[-2.88px] font-extrabold">
            {GET_IN_TOUCH_JOIN_US}
          </div>
        </div>
      </div>
    </div>
  );
}
