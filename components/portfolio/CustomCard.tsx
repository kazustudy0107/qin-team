import { Card, Image, Text, Group, Grid } from "@mantine/core";
import { FC } from "react";

const Portfolios = [...Array(6)].map((portfolio, index) => {
  return {
    id: index,
    title: `IT KINGDOM ${index}`,
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    image: "https://source.unsplash.com/random",
    data: "2021.10 - 2021.12",
  };
});

export const CustomCard: FC = () => {
  return (
    <Grid>
      {Portfolios.map((portfolio) => (
        <Grid.Col span={4} key={portfolio.id}>
          <Card>
            <Card.Section>
              <Image
                width={314.67}
                height={184}
                src={portfolio.image}
                alt="Thumbnail"
                // withPlaceholder
              />
            </Card.Section>
            <Group mt="md" mb="xs">
              <Text className="text-xl font-bold">{portfolio.title}</Text>
            </Group>
            <Text>{portfolio.description}</Text>
            <text className="text-xs text-gray-500">{portfolio.data}</text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};
