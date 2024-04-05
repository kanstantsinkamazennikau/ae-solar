import Post from "@/app/[locale]/company/news/components/BlogPostsList/Post";
import { BlogPostsListProps } from "@/app/[locale]/company/news/components/BlogPostsList/types";

export default async function BlogPostsList({ blogsList }: BlogPostsListProps) {
  return (
    <div className="flex flex-col w-full max-w-[945px]">
      {blogsList.map(({ attributes, id }) => {
        // const authorPicture = getStrapiMedia(
        //   attributes.authorBio.data?.attributes.avatar.data?.attributes.url
        // );
        // const authorName = attributes.authorBio.data?.attributes.name;
        const tag = attributes.tag.data?.attributes.tag;

        return (
          <Post
            {...{
              id,
              title: attributes.title,
              publishedAt: attributes.publishedAt,
              tag,
              body: attributes.body!,
            }}
            key={attributes.slug}
          />
        );
      })}
    </div>
  );
}
