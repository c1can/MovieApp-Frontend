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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "wouter"
import { useStorage } from "../hooks/useStorage";

function Header() {
  
  const { getStorage } = useStorage()
  const response = getStorage()
  const { nombre, creditos, correo } = response

  const [path, setPath] = useLocation()

  const closeSession = (e) => {
    const inputValue = e.target.value

    if(inputValue === 'Iniciar Sesion') return setPath('/login')

    window.localStorage.clear()
    window.location.reload(false) 
  }

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
          {
            response.rol == "admin"
             ?
             <Link to="/admin">
               <Button bg="white">
                <Text fontSize="xl" fontWeight="light" color="black">Admin</Text>
               </Button>
             </Link>
             : 
             <>
                <Link to="/reservaciones">
                  <Button bg="white">
                    <Text fontSize="xl" fontWeight="light" color="black">Mis Reservaciones</Text>
                  </Button>
                </Link>
             </>
          }
            
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

                <Button fontSize="xl" fontWeight="light" bg="white" color="black" value={nombre == 'anonimo' ? 'Iniciar Sesion' : 'Cerrar Sesion'} onClick={e => closeSession(e)}>{nombre == 'anonimo' ? 'Iniciar Sesion': 'Cerrar Sesion'}</Button>
              </Stack>
            </MenuList>
          </Menu>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
