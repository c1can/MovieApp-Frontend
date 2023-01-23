import {
  Box,
  Button,
  Container,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "wouter"
import { useStorage } from "../../hooks/useStorage";
import { NavMenu } from "./NavMenu";

function Header() {
  
  const { getStorage } = useStorage()
  const user = getStorage()

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
            user.rol == "admin"
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
            
          <NavMenu user={user}/>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
