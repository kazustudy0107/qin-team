import { TextInput, Button, Group, Container } from "@mantine/core";
import { useForm } from "@mantine/form";

export const ContactForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Container>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          mt="lg"
          label="Name"
          placeholder="Taro Yamada"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="lg"
          label="Your message"
          placeholder="I want to order your goods"
          {...form.getInputProps("message")}
        />
        <Group position="center" mt="md">
          <Button color="dark" radius="xl" type="submit">
            Send message
          </Button>
        </Group>
      </form>
    </Container>
  );
};
