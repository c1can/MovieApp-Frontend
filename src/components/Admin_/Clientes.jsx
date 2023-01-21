import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Text,
  TabPanel,
  Box,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { useClientes } from "../../hooks/AdminHooks/useClientes";
import { useCreditos } from "../../hooks/AdminHooks/useCreditos";

export function Clientes() {
  const { clientUsers } = useClientes();
  const { handleCreditosChange, handleCreditosSubmit, inputCreditos } =
    useCreditos();

  return (
    <TabPanel>
      {clientUsers.map(
        ({ nombre, apellido, correo, telefono, creditos, rol, _id }) => (
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
  );
}
