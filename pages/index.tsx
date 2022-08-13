import type { NextPage } from "next";
import { Blog } from "../components/blog";
import { Header } from "../components/header";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Blog />
      <Portfolio />
    </div>
  );
};

export default Home;
