import BlogHeading from "@/app/[locale]/about/blog/components/BlogHeading";
import BlogPostsList from "@/app/[locale]/about/blog/components/BlogPostsList";
import MostPopularPosts from "@/app/[locale]/about/blog/components/MostPopularPosts";
import RecentPosts from "@/app/[locale]/about/blog/components/RecentPosts";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";

export default function Blog() {
  return (
    <>
      <BlogHeading />
      <div className="flex w-full justify-center">
        <BasicWidthContainer styles="flex gap-[60px] justify-between">
          <BlogPostsList />
          <div className="flex flex-col gap-[60px]">
            <MostPopularPosts />
            <RecentPosts />
          </div>
        </BasicWidthContainer>
      </div>
    </>
  );
}
