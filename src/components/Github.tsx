import { Card, Container, Group, Text } from "@mantine/core";
import { GitFork, Star } from "tabler-icons-react";

export const GitHub = () => {
  return (
      <Container className="mt-24">
        <h1 className="mb-5 text-2xl font-bold">GitHub</h1>
        <Card>
          <Group mt="md" mb="xs">
            <Text className="mt-8 text-lg font-bold">
              lightsound/nexst-tailwind
            </Text>
          </Group>
          <Text>Next.js starter template.</Text>
          <text className="text-xs text-gray-400">{<Star />}117</text>
          <text className="text-xs text-gray-400">{<GitFork />}18</text>
        </Card>
      </Container>
  );
};
