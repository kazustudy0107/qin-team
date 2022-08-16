import type { NextPage } from "next";
import { Blog } from "src/components/Blog";
// import { GitHub } from "src/components/GitHub";
import { Header } from "src/components/Header";
import { Hero } from "src/components/Hero";
import { Portfolio } from "src/components/portfolio/PortfolioPage";

const Home: NextPage = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Hero />
      <Blog />
      <Portfolio />
      {/* <GitHub /> */}
    </div>
  );
};

export default Home;
