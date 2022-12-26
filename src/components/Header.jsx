import {
  Box,
  Button,
  Container,
  Menu,
  MenuButton,
  Stack,
  Avatar,
  MenuList,
  StackDivider,
  Text,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "wouter"
import { useUserContext } from "../hooks/useUserContext";

function Header() {
  
  const { globalUser } = useUserContext()
  const { nombre, creditos, correo } = globalUser

  return (
    <Box as={"nav"} w={"100%"} bg="main" borderBottom="3px solid white">
      <Container
        maxW={"container.xl"}
        py="5"
        display="flex"
        justifyContent="space-between"
      >
        <Link to="/">
            <Text fontWeight="bold" fontSize="3xl" color="white" cursor={"pointer"}>
               CinemaGT
            </Text>
        </Link>

        <Stack direction="row" spacing="5" alignItems="center">
            <Button bg="white">
                <Text fontSize="xl" fontWeight="light" color="black">Mis Reservaciones</Text>
            </Button>
            <Link to="/register">
                <Button bg="transparent">
                 <EditIcon color="white"/>
                </Button>
            </Link>
          <Menu>
            <MenuButton
              as={Button}
              variant="link"
              _hover={{ textDecoration: "none" }}
              rightIcon={<ChevronDownIcon color="white"/>}
            >
              <Avatar
                color="white"
                bg="transparent"
                size={"sm"}
                name={nombre}
                border="2px"
                borderColor="white"
              />
            </MenuButton>
            <MenuList mt={5} bg="main">
              <Stack alignItems="center" divider={<StackDivider />} spacing="4">
                <Stack alignItems="center">
                  <Avatar
                    size={"xl"}
                    name={nombre}
                    bg="transparent"
                    color="white"
                    border="2px"
                    borderColor="white"
                  />
                      <Text fontWeight="light" my={3} color="white" fontSize="2xl">
                          {nombre}
                      </Text>

                  <Text fontWeight="light" my="3" color="white" fontSize="xl">
                    {correo}
                  </Text>
                  
                  <Text fontWeight="light" my="3" color="white" fontSize="2xl">
                    Creditos: {creditos}
                  </Text>
                </Stack>

                <Button fontSize="xl" fontWeight="light" bg="white" color="black">Cerrar Sesion</Button>
              </Stack>
            </MenuList>
          </Menu>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
