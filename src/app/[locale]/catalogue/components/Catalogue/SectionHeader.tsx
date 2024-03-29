import { SectionHeaderProps } from "@/app/[locale]/catalogue/components/Catalogue/types";

export default function SectionHeader({
  title,
  clarification,
}: SectionHeaderProps) {
  return (
    <div className="[font-size:_clamp(14px,2vw,20px)] font-semibold -tracking-[0.4px] mb-4 capitalize">
      <span>{title}</span>{" "}
      <span className="text-dark-gray-650">{clarification}</span>
    </div>
  );
}
