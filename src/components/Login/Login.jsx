import { Container, Heading, Center } from "@chakra-ui/react";
import Header from "../Header/Header";
import { LoginForm } from "./LoginForm";

export function Login() {
  return (
    <>
      <Header />
      <Container maxW={"container.lg"} mt="100px">
        <Center flexDirection="column">
          <Heading mb="20px">Inicia Sesion</Heading>

          <LoginForm />
        </Center>
      </Container>
    </>
  );
}
