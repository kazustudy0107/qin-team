import { Container, Text, Title } from "@mantine/core";
import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import dayjs from "dayjs";

export type Blog = {
  id: string;
  title: string;
  content: string;
};

type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Container className="min-h-screen">
        <Title order={2} className="border-b-2 pb-5">
          Blog
        </Title>
        <ul>
          {props.contents.map((content) => {
            return (
              <li className="my-6" key={content.id}>
                <Link href={`/blog/${content.id}`}>
                  <a className="text-xl font-bold">{content.title}</a>
                </Link>
                <Text size="sm" weight={500} lineClamp={2}>
                  {content.content}
                </Text>
                <time className="block text-xs text-gray-500">
                  {dayjs(content.createdAt).format("YYYY年MM月DD日")}
                </time>
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
