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
import { Link } from "wouter";
import { useLocation } from "wouter";
import Header from "./Header";

export function Register() {

    const [ user, setUser ] = useState({
        nombre: "",
        apellido: "",
        telefono: 0,
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
        fetch("https://movieapp-backend-production.up.railway.app/api/register", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if(response.ok) return setPath("login")
            
            return response.json()
                .then(res => {
                    toast({
                        title: 'Hubo un error',
                        description: res.error,
                        status: Object.keys(res)[0],
                        duration: 7000,
                        isClosable: true
                    })
                })
        })
        .catch(error => {
            console.log("aqui cayo en el catch")
            console.log(error)
        })
    }

  return (

    <>
        <Header />
        <Container maxW={"container.lg"} mt="100px">
        <Center flexDirection="column">
            <Heading>Registrate</Heading>
            <Text mt={2} mb={6} fontSize={"xl"} opacity=".8" fontFamily="-apple-system">
            Para poder comprar tus boletos!
            </Text>

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
                <Flex gap={5}>
                    <FormControl>
                    <FormLabel color="main" fontFamily="heading" fontWeight="bold">Nombre</FormLabel>
                    <Input
                        variant="filled"
                        type={"text"}
                        id="nombre"
                        name="nombre"
                        color="main"
                        fontFamily="heading"
                        onChange={handleChange}
                        ></Input>
                    </FormControl>

                    <FormControl>
                    <FormLabel color="main" fontFamily="heading" fontWeight="bold">Apellido</FormLabel>
                    <Input
                        variant="filled"
                        type={"text"}
                        id="apellido"
                        name="apellido"
                        color="main"
                        fontFamily="heading"
                        onChange={handleChange}
                        ></Input>
                    </FormControl>
                </Flex>


                <FormControl>
                <FormLabel color="main" fontFamily="heading" fontWeight="bold">Telefono</FormLabel>
                <Input
                    variant="filled"
                    type={"number"}
                    placeholder="12345678"
                    id="telefono"
                    name="telefono"
                    color="main"
                    fontFamily="heading"
                    onChange={handleChange}
                    ></Input>
                </FormControl>
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
                Registrar
                </Button>

                <Button variant={"link"} mt={7} fontFamily="heading">
                <Link to="/login">Ya tienes una cuenta?</Link>
                </Button>

            </Box>
            </Box>
        </Center>
        </Container>
    </>
  );
}