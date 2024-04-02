type BlogPostBlockData = {
  paragraphs?: string[];
  subtitle?: string;
};

export interface BlogPosts {
  id: number;
  type: string;
  typeNumber: string;
  title: string;
  statistics: {
    creationDate: string;
    readingTime: string;
    author: string;
  };
  content: {
    sectionHeadline?: string;
    image?: { src: string; width: number; height: number };
    block?: BlogPostBlockData[];
  }[];
}

export interface TagsFilterProps {
  tags: string[];
}

export interface TagsResponse {
  data: {
    id: number;
    attributes: {
      tag: string;
    };
  }[];
}
