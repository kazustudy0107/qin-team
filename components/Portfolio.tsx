import { Button, Center, Container } from "@mantine/core";
import React from "react";
import { Layout } from "./Layout";
import { CustomCard } from "./CustomCard";

export const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <Container className="mt-24">
        <h1 className="mb-5 text-2xl font-bold">Portfolio</h1>
        <CustomCard />
      </Container>
      <Center>
        <Button color="dark" radius="xl" size="xs">
          View All
        </Button>
      </Center>
    </Layout>
  );
};
