import { Button, Center, Container, Title } from "@mantine/core";
import React from "react";
import { Layout } from "../Layout";
import { CustomCard } from "./CustomCard";

export const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <Container className="mt-24">
        <Title order={2} className="border-b-2 pb-5 mb-6">
          Portfolio
        </Title>
        <CustomCard />
      </Container>
      <Center className="mt-6">
        <Button color="dark" radius="xl">
          View All
        </Button>
      </Center>
    </Layout>
  );
};
