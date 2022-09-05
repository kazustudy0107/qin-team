import type { NextPage } from "next";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Hero } from "src/components/Hero";
import { PortfolioPage } from "src/components/portfolio/PortfolioPage";
import Blog from "./blog";

const Home: NextPage = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Hero />
      <div className="mt-32">
        <PortfolioPage />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
