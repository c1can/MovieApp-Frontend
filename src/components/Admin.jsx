import {
  Container,
  TabList,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useCartelera } from "../hooks/AdminHooks/useCartelera";
import { useClientes } from "../hooks/AdminHooks/useClientes";
import { useCreditos } from "../hooks/AdminHooks/useCreditos";
import Header from "./Header";

export function Admin() {
  const { justClients } = useClientes();
  const { handleCreditosChange, handleCreditosSubmit, inputCreditos } = useCreditos();

  const {
    inputNombre,
    inputPoster,
    handleCarteleraChange,
    handleCarteleraSubmit,
  } = useCartelera();

  return (
    <>
      <Header />
      <Container maxW="container.xl" my="50px">
        <Tabs size="lg" variant="enclosed">
          <TabList>
            <Tab>Clientes</Tab>
            <Tab>Cartelera</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {justClients.map(
                ({
                  nombre,
                  apellido,
                  correo,
                  telefono,
                  creditos,
                  rol,
                  _id,
                }) => (
                  <Card key={_id}>
                    <CardHeader>
                      <Heading size="md" color="white">
                        {nombre} {apellido}
                      </Heading>
                    </CardHeader>
                    <CardBody color="white" fontFamily="heading">
                      <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Correo Electronico
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {correo}
                          </Text>
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Rol de Usuario
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {rol}
                          </Text>
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Telefono
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {telefono}
                          </Text>
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Cantidad de Creditos
                          </Heading>
                          <Text>{creditos}</Text>
                          <Box
                            as="form"
                            onSubmit={(e) => handleCreditosSubmit(e, _id)}
                            display="flex"
                            gap="10px"
                          >
                            <FormControl>
                              <Input
                                ref={inputCreditos}
                                w="80px"
                                defaultValue={0}
                                onChange={handleCreditosChange}
                              ></Input>
                            </FormControl>

                            <Button type="submit" bg="white" color="main">
                              Añadir Creditos
                            </Button>
                          </Box>
                        </Box>
                      </Stack>
                    </CardBody>
                  </Card>
                )
              )}
            </TabPanel>
            <TabPanel>
              <Box
                as="form"
                display="flex"
                flexDirection="column"
                gap="20px"
                onSubmit={handleCarteleraSubmit}
              >
                <FormControl>
                  <FormLabel
                    color="white"
                    fontFamily="heading"
                    fontWeight="bold"
                  >
                    Nombre
                  </FormLabel>
                  <Input
                    ref={inputNombre}
                    type={"text"}
                    placeholder="nombre de la pelicula"
                    id="nombre"
                    name="nombre"
                    color="white"
                    fontFamily="heading"
                    onChange={handleCarteleraChange}
                  ></Input>
                </FormControl>
                <FormControl>
                  <FormLabel
                    color="white"
                    fontWeight="bold"
                    fontFamily="heading"
                  >
                    URL del Poster
                  </FormLabel>
                  <Input
                    type={"text"}
                    ref={inputPoster}
                    placeholder="url del poster"
                    id="poster"
                    name="poster"
                    color="white"
                    fontFamily="heading"
                    onChange={handleCarteleraChange}
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
                  Agregar
                </Button>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}
