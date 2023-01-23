import {
  Container,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import Header from "./Header/Header";
import API_URL from "../variables/api";

export function Login() {

  const [user, setUser] = useState({
      correo: "",
      contraseña: ""
  })

  
  const toast = useToast()
  const [path, setPath] = useLocation()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${API_URL}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(res => {
        if(res.error) {
          return toast({
            title: "Hubo un error",
            description: res.error,
            status: Object.keys(res)[0],
            isClosable: true
          })
        }
        
        window.localStorage.setItem("user", JSON.stringify(res))
        setPath("/")
      })
      .catch(error => console.log(error))
  }

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
                onSubmit={handleSubmit}
                >
               <FormControl>
                <FormLabel color="main" fontFamily="heading" fontWeight="bold">Correo Electrónico</FormLabel>
                <Input
                    variant="filled"
                    type={"email"}
                    placeholder="usuario@gmail.com"
                    id="correo"
                    name="correo"
                    color="main"
                    fontFamily="heading"
                    onChange={handleChange}
                    ></Input>
                </FormControl>
                <FormControl>
                <FormLabel color="main" fontWeight="bold" fontFamily="heading">Contraseña</FormLabel>
                <Input
                    variant="filled"
                    type={"password"}
                    placeholder="*********"
                    id="contraseña"
                    name="contraseña"
                    color="main"
                    fontFamily="heading"
                    onChange={handleChange}
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