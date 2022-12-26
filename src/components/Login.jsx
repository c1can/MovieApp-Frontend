import {
  Container,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link } from "wouter";
import Header from "./Header";

export function Login() {

  return (

    <>
        <Header />
        <Container maxW={"container.lg"} mt="100px">
        <Center flexDirection="column">
            <Heading mb="20px">Inicia Sesion</Heading>
            <Box
            minW={"50%"}
            px="6"
            py="10"
            borderRadius={"lg"}
            shadow="lg"
            bg="white"
            >
            <Box
                as="form"
                display="flex"
                flexDirection="column"
                gap="20px"
                >
               <FormControl>
                <FormLabel color="main" fontFamily="heading" fontWeight="bold">Correo Electrónico</FormLabel>
                <Input
                    variant="filled"
                    type={"email"}
                    placeholder="usuario@gmail.com"
                    id="email"
                    name="email"
                    color="main"
                    fontFamily="heading"
                    ></Input>
                </FormControl>
                <FormControl>
                <FormLabel color="main" fontWeight="bold" fontFamily="heading">Contraseña</FormLabel>
                <Input
                    variant="filled"
                    type={"password"}
                    placeholder="*********"
                    id="password"
                    name="password"
                    color="main"
                    fontFamily="heading"
                    ></Input>
                </FormControl>

                <Button
                mt={"6"}
                border="2px"
                borderColor={"gray.400"}
                type="submit"
                color="main"
                fontSize="xl"
                fontFamily="heading"
                fontWeight="bold"
                >
                Iniciar Sesion
                </Button>

                <Button variant={"link"} mt={7} fontFamily="heading">
                <Link to="/Register">Aún no tienes cuenta?</Link>
                </Button>

            </Box>
            </Box>
        </Center>
        </Container>
    </>
  );
}