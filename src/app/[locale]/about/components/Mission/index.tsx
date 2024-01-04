import { ABOUT_MISSION } from "@/app/[locale]/utils/constants";

export default function Mission() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col max-w-[1440px] w-full gap-[140px] py-60 px-5">
        {ABOUT_MISSION.map(({ title, description }) => (
          <div key={title} className="flex items-center justify-between gap-2">
            <div className="text-5xl font-extrabold min-w-[200px]">{title}</div>
            <div className="font-walsheim text-2xl font-normal max-w-[980px]">
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
