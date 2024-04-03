"use client";

import { BlogPostContentProps } from "@/app/[locale]/company/news/[slug]/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

export default function BlogPostContent({ body }: BlogPostContentProps) {
  if (!body) return null;

  return (
    <BlocksRenderer
      content={body}
      blocks={{
        link: ({ children, url }) => (
          <a href={url} target="_blank">
            {children}
          </a>
        ),
      }}
    />
  );
}
