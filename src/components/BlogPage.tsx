import { Button, Center, Container, Stack, Text, Title } from "@mantine/core";
import { Dayjs } from "dayjs";
import Link from "next/link";
import React, { FC } from "react";
import { Blog } from "src/pages/blog";


export const BlogPage: FC<Props> = (props) => {
  
  return (
    <Container>
      <Stack justify="flex-start" spacing="xl">
        <Title order={2} className="border-b-2 pb-5">
          Blog
        </Title>
      </Stack>
      
      <Center className="mt-6">
        <Button color="dark" radius="xl">
          View All
        </Button>
      </Center>
    </Container>
  );
};
