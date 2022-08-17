import { Container, Title } from "@mantine/core";
import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

const About = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Container className="min-h-screen">
        <Title order={2} className="border-b-2">
          About
        </Title>
        <Title order={3} className="mt-6 mb-6">
          Lightsound Shimabu
        </Title>
        <text>
          ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
        </text>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
