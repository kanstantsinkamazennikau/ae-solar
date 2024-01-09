import Image from "next/image";

export default function Divider() {
  return (
    <Image
      src="/images/divider.svg"
      alt="divider"
      priority
      width={1320}
      height={1}
      className="
        lg:mb-[200px]
        md:mb-[120px]
        mb-[80px]
      "
    />
  );
}
