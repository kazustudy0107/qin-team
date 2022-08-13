import type { NextPage } from "next";
import { Blog } from "./blog";
import { Header } from "./header";
import { Hero } from "./Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Blog />
    </div>
  );
};

export default Home;
