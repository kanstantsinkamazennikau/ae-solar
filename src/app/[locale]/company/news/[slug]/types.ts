import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface BlogPostContentProps {
  body?: BlocksContent;
}

export interface MetadataResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      seo: [
        {
          id: number;
          metaTitle: string;
          metaDescription: string;
        }
      ];
    };
  }[];
}
