import { ActionIcon, Container, Group } from "@mantine/core";
import Link from "next/link";
import { Moon } from "tabler-icons-react";

export const Header = () => {
  return (
    <div className="bg-white">
      <Container className="flex h-16 place-content-between bg-white font-bold">
        <Group className="text-xl ">
          <Link href="/">Shimabu IT University</Link>
        </Group>
        <Group className="gap-4 text-lg">
          <Link href="/about">
            <a className="">About</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <ActionIcon size="lg" variant="outline">
            {<Moon />}
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
