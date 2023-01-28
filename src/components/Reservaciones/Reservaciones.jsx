import { Center, Container, Text } from "@chakra-ui/react";
import { useStorage } from "../../hooks/useStorage";
import Header from "../Header/Header";
import { Factura } from "./Factura";

export function Reservaciones(){
    const { getStorage } = useStorage()
    const user = getStorage()

    return (
        <>
        <Header />
        <Container maxW='container.xl'>
            {
                user.rol == 'anonimo' 
                ? 
                <Center h="200px">
                    <Text fontSize={'xl'}>Registrate para poder ver tus reservaciones</Text>
                </Center>
                : <Factura user={user}/>
            }
        </Container>
        </>
    )
}