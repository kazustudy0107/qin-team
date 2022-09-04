import { Container, Title } from "@mantine/core";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { client } from "src/libs/client";
import { Blog } from "src/pages/blog";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Container>
        <Title order={2} className="border-b-2 pb-5">
          {props.title}
        </Title>
        <time className="my-4 block">
          {dayjs(props.createdAt).format("YYYY年MM月DD日")}
        </time>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </Container>
      <Footer />
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
