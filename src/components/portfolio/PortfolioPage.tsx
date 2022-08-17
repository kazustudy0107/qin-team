import { Button, Center, Container, Title } from "@mantine/core";
import React from "react";
import { CustomCard } from "src/components/portfolio/CustomCard";

export const PortfolioPage = () => {
  return (
    <div>
      <Container>
        <Title order={2} className="mb-6 border-b-2 pb-5">
          Portfolio
        </Title>
        <CustomCard />
      </Container>
      <Center className="mt-6">
        <Button color="dark" radius="xl">
          View All
        </Button>
      </Center>
    </div>
  );
};
