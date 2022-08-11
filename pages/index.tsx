import { Button, Container, Group } from "@mantine/core";
import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { Moon } from "tabler-icons-react";
import { Header } from "./header";

const Home: NextPage = () => {
  return (
    <div>
      <Header/>
    </div>
  );
};

export default Home;
