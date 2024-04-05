import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface BlogPost {
  title: string;
  slug: string;
  publishedAt: string;
  author: {
    name: string;
    picture: string;
  };
  description: string;
  readingTime?: string;
  status: string;
  content: string;
  tag?: string;
}

export interface Description {
  readingTime?: string;
  type?: string;
  typeNumber?: string;
}

export interface BlogPostsListProps {
  blogsList: StrapiBlog[];
}

export interface PostProps {
  id: number;
  title: string;
  publishedAt: string;
  body: BlocksContent;
  author?: {
    name: string;
    picture: string | null;
  };
  readingTime?: string;
  tag?: string;
}

export interface StrapiBlogs {
  data: StrapiBlog[];
}

export interface StrapiBlogsWithPagination {
  data: StrapiBlog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiBlogAttributes {
  title: string;
  slug: string;
  readingTime: string;
  publishedAt: string;
  authorBio: {
    data: {
      attributes: {
        name: string;
        avatar: {
          data: {
            attributes: {
              name: string;
              url: string;
            };
          };
        };
      };
    };
  };
  tag: {
    data: {
      attributes: {
        tag: string;
      };
    };
  };
  body?: BlocksContent;
}

export interface StrapiBlog {
  id: number;
  attributes: StrapiBlogAttributes;
}
