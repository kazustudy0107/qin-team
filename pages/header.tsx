import { Button, Container, Group } from "@mantine/core";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { Moon } from "tabler-icons-react";

export const Header = () => {
  return (
    <Layout title="header">
        <Container className="h-16 flex place-content-between font-bold">
          <Group>
            <Link href="/">Shimabu IT University</Link>
          </Group>

          <Group className="flex">
            <Link href="/about">
              <a className="m-2 gap-3 py-2">About</a>
            </Link>
            <Link href="/blog">
              <a className="m-2 gap-3 py-2">Blog</a>
            </Link>
            <Link href="/Portfolio">
              <a className="m-2 gap-3 py-2">Portfolio</a>
            </Link>
            <Link href="/Contact">
              <a className="m-2 gap-3 py-2">Contact</a>
            </Link>
            <Button variant="outline" color="dark" size="xs">
              {<Moon />}
            </Button>
          </Group>
        </Container>
      </Layout>
  );
};
