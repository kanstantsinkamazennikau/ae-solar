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
  currentPage: number;
  searchParamsTags?: string;
}

export interface PostProps {
  title: string;
  slug: string;
  publishedAt: string;
  author: {
    name: string;
    picture: string;
  };
  readingTime?: string;
  tag?: string;
}