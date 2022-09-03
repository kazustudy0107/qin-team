import { Container, Title } from "@mantine/core";
import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
// import { BlogPage } from "src/components/BlogPage";
import { GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";

export type Blog = {
  id: string;
  title: string;
  content: string;
};

type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
  console.log(props);
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Container>
        <Title order={2} className="border-b-2 pb-5">
          Blog
        </Title>
        {/* <div className="mt-6 mb-6"><BlogPage /></div> */}
        <p>{`記事の総数:${props.totalCount}`}</p>
        <ul>
          {props.contents.map((content) => {
            return (
              <li key={content.id}>
                <Link href={`/blog/${content.id}`}>
                  <a>{content.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blogs" });
  return {
    props: data,
  };
};

export default Blog;
