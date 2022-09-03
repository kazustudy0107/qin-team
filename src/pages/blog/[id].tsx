import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { Blog } from "src/pages/blog";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <time>{props.publishedAt}</time>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params?.id) {
    return { notFound: true };
  }
  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default BlogId;
