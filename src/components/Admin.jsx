import { Container, TabList, Tab, Tabs, TabPanels, TabPanel, Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./Header";

export function Admin() {

    const [cliente, setCliente] = useState([])
    const [token, setToken] = useState("")

    const handleChange = (e) => {
        setToken(e.target.value)
        console.log(token)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hola")
    }

    //el problema actual es que cuando doy submit me tira a la pagina principal, asumo que es porque se vuelve a recargar
    //y se borra el usuario del contexto
    return (
        <>
            <Header />
            <Container maxW="container.xl" mt="20px">
               <Tabs size='lg' variant='enclosed'>
                    <TabList>
                        <Tab>Clientes</Tab>
                        <Tab>Cartelera</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            2
                        </TabPanel>
                        <TabPanel>
                        <p>Soy la cartelera</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                            <Box as="form">
                                <FormControl>
                                    <FormLabel color="white" fontFamily="heading" fontWeight="bold">Token:</FormLabel>
                                        <Input
                                            type={"text"}
                                            id="token"
                                            name="token"
                                            color="main"
                                            fontFamily="heading"
                                            bg="white"
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
                                    onSubmit={handleSubmit}
                                    >
                                    Obtener Datos
                                </Button>
                            </Box> 

            </Container> 
        </>
)
}