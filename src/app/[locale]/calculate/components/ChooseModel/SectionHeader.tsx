import { SectionHeaderProps } from "@/app/[locale]/calculate/components/ChooseModel/types";

export default function SectionHeader({
  title,
  clarification,
}: SectionHeaderProps) {
  return (
    <div className="text-xl font-semibold -tracking-[0.4px] mb-4">
      <span>{title}</span>{" "}
      <span className="text-dark-gray-650">{clarification}</span>
    </div>
  );
}
