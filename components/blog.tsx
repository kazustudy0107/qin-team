import { Button, Center, Container, Group } from "@mantine/core";
import React from "react";
import { Layout } from "./Layout";

export const Blog = () => {
  return (
    <Layout title="Blog">
      <Container>
        <h1 className="mb-5 text-2xl font-bold">Blog</h1>
        <Group direction="column">
          <h2 className="text-xl font-bold leading-none">This is a header</h2>
          <p className="leading-none">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <p className="mb-6 text-xs text-gray-400">2022.07.11</p>
        </Group>
        <Group direction="column">
          <h2 className="text-xl font-bold leading-none">This is a header</h2>
          <p className="leading-none">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <p className="mb-6 text-xs text-gray-400">2022.07.11</p>
        </Group>
        <Group direction="column">
          <h2 className="text-xl font-bold leading-none">This is a header</h2>
          <p className="leading-none">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <p className="mb-6 text-xs text-gray-400">2022.07.11</p>
        </Group>
        <Group direction="column">
          <h2 className="text-xl font-bold leading-none">This is a header</h2>
          <p className="leading-none">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <p className="mb-6 text-xs text-gray-400">2022.07.11</p>
        </Group>
        <Group direction="column">
          <h2 className="text-xl font-bold leading-none">This is a header</h2>
          <p className="leading-none">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <p className="mb-6 text-xs text-gray-400">2022.07.11</p>
        </Group>
        <Center>
          <Button color="dark" radius="xl" size="xs">
            View All
          </Button>
        </Center>
      </Container>
    </Layout>
  );
};

// export default Blog;
