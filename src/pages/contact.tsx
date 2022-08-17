import { Container, Title } from "@mantine/core";
import { ContactForm } from "src/components/ContactForm";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

const Contact = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Container className="min-h-screen">
        <Title order={2} className="border-b-2 pb-5">
          Contact
        </Title>
        <div className="mt-6">
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
