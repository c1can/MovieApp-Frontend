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
import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons";

function Header() {
  return (
    <Box as={"nav"} w={"100%"} bg="brand.main">
      <Container
        maxW={"container.xl"}
        py="5"
        display="flex"
        justifyContent="space-between"
      >
        <Text fontWeight="bold" fontSize="2xl" color="white">
          CinemaGT
        </Text>

        <Stack direction="row" spacing="5" alignItems="center">
            <Button bg="white">
                <Text fontWeight="bold" color="black">Mis Reservaciones</Text>
            </Button>
            <Button bg="transparent">
                <EditIcon color="white"/>
            </Button>
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
                name={"ADMIN"}
                border="2px"
                borderColor="white"
              />
            </MenuButton>
            <MenuList mt={5} bg="brand.main">
              <Stack alignItems="center" divider={<StackDivider />} spacing="4">
                <Stack alignItems="center">
                  <Avatar
                    size={"xl"}
                    name={"ADMIN"}
                    bg="transparent"
                    color="white"
                    border="2px"
                    borderColor="white"
                  />
                  <Text fontWeight="bold" my={3} color="white">
                    Admin
                  </Text>
                  <Text fontWeight="bold" my="3" color="white">
                    Creditos: 300
                  </Text>
                </Stack>

                <Button bg="white" color="black">Cerrar Sesion</Button>
              </Stack>
            </MenuList>
          </Menu>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
