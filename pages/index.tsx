import type { NextPage } from "next";
import { Header } from "./header";
import { Hero } from "./Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};


export default Home;
