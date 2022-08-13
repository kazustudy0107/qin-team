import { Card, Image, Text, Group, Grid } from "@mantine/core";
// import Image from "../public/Thumbnail.png";

export const CustomCard = () => {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Card>
          <Card.Section>
            <Image
              width={314.67}
              height={184}
              src="../public/Thumbnail.png"
              alt="Thumbnail"
              withPlaceholder
            />
          </Card.Section>
          <Group mt="md" mb="xs">
            <Text className="text-xl font-bold">IT KINGDOM</Text>
          </Group>
          <Text>
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
          </Text>
          <text className="text-xs text-gray-500">2021.10 - 2021.12</text>
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card>
          <Card.Section>
            <Image
              width={314.67}
              height={184}
              src="../public/Thumbnail.png"
              alt="Thumbnail"
              withPlaceholder
            />
          </Card.Section>
          <Group mt="md" mb="xs">
            <Text className="text-xl font-bold">IT KINGDOM</Text>
          </Group>
          <Text>
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
          </Text>
          <text className="text-xs text-gray-500">2021.10 - 2021.12</text>
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card>
          <Card.Section>
            <Image
              width={314.67}
              height={184}
              src="../public/Thumbnail.png"
              alt="Thumbnail"
              withPlaceholder
            />
          </Card.Section>
          <Group mt="md" mb="xs">
            <Text className="text-xl font-bold">IT KINGDOM</Text>
          </Group>
          <Text>
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
          </Text>
          <text className="text-xs text-gray-500">2021.10 - 2021.12</text>
        </Card>
      </Grid.Col>
    </Grid>
  );
};
