import { Container, Group, Title } from "@mantine/core";
import Link from "next/link";
import { BrandTwitter, BrandFacebook, Rss } from "tabler-icons-react";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <Layout title="Hero">
      <Container className="text-center bg-pink-600 text-white flex justify-between mb-20">
        <Group className="flex-col">
          <Title className="text-4xl mt-12">Shimabu IT University</Title>
          <text className="text-base mb-14">
            しまぶーのポートフォリオのためのページです
          </text>
        </Group>
        <Group>
          <Link href="/">{<BrandTwitter />}</Link>
          <Link href="/">{<BrandFacebook />}</Link>
          <Link href="/">{<Rss />}</Link>
        </Group>
      </Container>
    </Layout>
  );
};
