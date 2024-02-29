"use client";

import { BLOG_POSTS_PER_PAGE } from "@/app/[locale]/company/resources/constants";
import { DOTS, usePagination } from "@/app/[locale]/hooks/usePagination";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function BlogPostPagination({
  totalBlogPosts,
}: {
  totalBlogPosts: number;
}) {
  const totalPages = Math.ceil(totalBlogPosts / BLOG_POSTS_PER_PAGE);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const paginationRange = usePagination({
    currentPage,
    totalCount: totalBlogPosts,
    siblingCount: 1,
    pageSize: BLOG_POSTS_PER_PAGE,
  });

  return (
    <div className="flex gap-5 mt-8 justify-center">
      <button
        type="button"
        onClick={() => createPageURL(currentPage - 1)}
        disabled={currentPage === 1}
        className="disabled:opacity-60"
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
      <ul className="flex gap-3 list-none items-center">
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index} className="text-[#505050]">
                &#8230;
              </li>
            );
          }

          return (
            <li
              onClick={() => createPageURL(pageNumber)}
              key={index}
              className={`
                cursor-pointer
                [font-size:_clamp(11px,1vw,16px)]
                font-semibold
                ${+pageNumber <= currentPage ? "text-white" : "text-[#505050]"}
              `}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => createPageURL(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="disabled:opacity-60"
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
