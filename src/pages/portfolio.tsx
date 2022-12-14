import { Container, Title } from "@mantine/core";
import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { PortfolioPage } from "src/components/portfolio/PortfolioPage";

const Portfolio = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Container>
        {/* <Title order={2} className="border-b-2 pb-5">
          Portfolio
        </Title> */}
        <div className="mt-6 mb-6">
          <PortfolioPage />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
