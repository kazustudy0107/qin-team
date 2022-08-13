import type { NextPage } from "next";
import { Blog } from "./blog";
import { Header } from "./header";
import { Hero } from "./Hero";
import { Portfolio } from "./Portfolio";

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
