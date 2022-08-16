import {
  Box,
  Button,
  Center,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import React, { FC } from "react";

const articles = [...Array(5)].map((blog, index) => {
  return {
    id: index,
    header: `This is a header ${index}`,
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    date: "2022.07.11",
  };
});

export const Blog: FC = () => {
  return (
      <Container>
        <Stack justify="flex-start" spacing="xl">
          <Title order={2} className="border-b-2 pb-5">
            Blog
          </Title>
          {articles.map((article) => (
            <Box
              key={article.id}
              component={NextLink}
              href={`/blog/detail/${article.id}`}
            >
              <Title order={3} className="mb-2">
                {article.header}
              </Title>
              <Text className="mb-2">{article.body}</Text>
              <Text className="text-xs text-gray-400">{article.date}</Text>
            </Box>
          ))}
        </Stack>
        <Center className="mt-6">
          <Button color="dark" radius="xl">
            View All
          </Button>
        </Center>
      </Container>
  );
};
