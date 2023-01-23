import { Menu, MenuButton, MenuList, Stack, Avatar, StackDivider, Text, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useSession } from '../../hooks/HeaderHooks/useSession'


export function NavMenu({ user }) {

    const { nombre, correo, creditos } = user
    const { closeSession } = useSession()
    
    return (
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
    )
}