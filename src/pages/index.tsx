import type { NextPage } from "next";
import { BlogPage } from "src/components/BlogPage";
import { Footer } from "src/components/Footer";
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
      <BlogPage />
      <Portfolio />
      {/* <GitHub /> */}
      <Footer />
    </div>
  );
};

export default Home;
