import { Container, Text } from "@chakra-ui/react";
import { useReservaciones } from "../../hooks/Reservaciones/useReservaciones";
import { useStorage } from "../../hooks/useStorage";
import Header from "../Header/Header";
import { Factura } from "./Factura";

export function Reservaciones(){
    const { getStorage } = useStorage()
    const user = getStorage()
    const { facturas } = useReservaciones(user)

    return (
        <>
        <Header />
        <Container maxW='container.xl'>
            {
                user.rol == 'anonimo' 
                ? <Text>Registrate para poder ver tus reservaciones</Text>
                : <Factura facturas={facturas}/>
            }
        </Container>
        </>
    )
}