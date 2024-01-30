"use client";

import BlogPostStats from "@/app/[locale]/about/blog/components/BlogPostStats";
import { BLOG_POSTS } from "@/app/[locale]/about/blog/constants";
import Link from "next/link";
import { useState } from "react";

export default function BlogPostsList() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col w-full max-w-[945px]">
      {BLOG_POSTS.map(({ id, type, typeNumber, title, statistics }) => (
        <div
          key={id}
          className="flex py-8 border-b border-solid border-[#191919] first:border-t items-center gap-5"
        >
          <div className="flex flex-col text-[#505050] uppercase leading-[100%] gap-4 flex-grow-0 flex-shrink-0 basis-[200px] break-all">
            <div className="[font-size:_clamp(10px,1vw,16px)] font-extrabold">
              {type}
            </div>
            <div className="[font-size:_clamp(20px,2vw,32px)] font-normal -tracking-[1.6]">
              #{typeNumber}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link href={`blog/${id}`}>
              <h2 className="[font-size:_clamp(16px,1.5vw,24px)] font-bold -tracking-[0.24] hover:text-base-red">
                {title}
              </h2>
            </Link>
            <BlogPostStats statistics={statistics} />
          </div>
        </div>
      ))}
    </div>
  );
}
