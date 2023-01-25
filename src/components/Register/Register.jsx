import { Container, Center, Heading, Text } from "@chakra-ui/react";
import { RegisterForm } from "./RegisterForm";
import Header from "../Header/Header";

export function Register() {
  return (
    <>
      <Header />
      <Container maxW={"container.lg"} mt="50px">
        <Center flexDirection="column">
          <Heading>Registrate</Heading>
          <Text
            mt={2}
            mb={6}
            fontSize={"xl"}
            opacity=".8"
            fontFamily="-apple-system"
          >
            Para poder comprar tus boletos!
          </Text>

          <RegisterForm />
        </Center>
      </Container>
    </>
  );
}
