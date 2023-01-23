import { Container, Text, TableContainer, Th, Table, Thead, Tr, Tbody, Td } from "@chakra-ui/react";
import { useReservaciones } from "../hooks/Reservaciones/useReservaciones";
import { useStorage } from "../hooks/useStorage";
import Header from "./Header/Header";

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
                : 
                    facturas.map(factura => (
                        <TableContainer key={factura._id} my={"40px"} border="2px solid white">
                            <Table variant="unstyled">
                                <Thead>
                                <Tr>
                                    <Th color="yellow">Fecha</Th>
                                    <Th color="yellow">Pelicula</Th>
                                    <Th color="yellow">Asientos</Th>
                                    <Th color={"lightgreen"} isNumeric>Total</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td>{factura.fecha_reservacion}</Td>
                                    <Td>{factura.pelicula}</Td>
                                    <Td>{factura.butacas.map((butaca, index) => (
                                        <Text key={index}>{butaca.nm}</Text>
                                    ))}</Td>
                                    <Td isNumeric>{factura.total}</Td>
                                </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    ))

            }
        </Container>
        </>
    )
}