import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="pr-3">
      <Image
        src="/logo.svg"
        alt="ae-solar logo"
        className="w-[184px]"
        width={180}
        height={24}
        priority
      />
    </Link>
  );
}
