import { Button, Center, Container, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import dayjs from "dayjs";

export type Blog = {
  id: string;
  title: string;
  content: string;
};

export const BlogPage: FC = (props) => {
  return (
    <Container>
      <Stack justify="flex-start" spacing="xl">
        <Title order={2} className="border-b-2 pb-5">
          Blog
        </Title>
      </Stack>
      {/* <ul>
        {props.map((content) => {
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
      </ul> */}

      <Center className="mt-6">
        <Button color="dark" radius="xl">
          View All
        </Button>
      </Center>
    </Container>
  );
};
