import { Container, Title } from "@mantine/core";
import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { BlogPage } from "src/components/BlogPage";

const Blog = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Container>
        {/* <Title order={2} className="border-b-2 pb-5">
          Blog
        </Title> */}
        <div className="mt-6 mb-6">
          <BlogPage />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
