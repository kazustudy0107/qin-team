import { Container, Group, Title } from "@mantine/core";
import Link from "next/link";
import { BrandTwitter, BrandFacebook, Rss } from "tabler-icons-react";

export const Hero = () => {
  return (
      <div className="bg-pink-600">
        <Container className="mb-20 flex justify-between bg-pink-600 text-center text-white">
          <Group className="flex-col">
            <Title className="mt-12 text-4xl">Shimabu IT University</Title>
            <text className="mb-14 text-base">
              しまぶーのポートフォリオのためのページです
            </text>
          </Group>
          <Group>
            <Link href="/">{<BrandTwitter />}</Link>
            <Link href="/">{<BrandFacebook />}</Link>
            <Link href="/">{<Rss />}</Link>
          </Group>
        </Container>
      </div>
  );
};
