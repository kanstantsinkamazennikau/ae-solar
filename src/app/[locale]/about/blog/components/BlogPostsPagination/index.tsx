"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function BlogPostPagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => createPageURL(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image
          src="/images/redArrowRight.svg"
          alt="arrow"
          width={16}
          height={16}
          priority
          className="rotate-180"
        />
      </button>

      <button
        type="button"
        onClick={() => createPageURL(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image
          src="/images/redArrowRight.svg"
          alt="arrow"
          width={16}
          height={16}
          priority
        />
      </button>
    </div>
  );
}
