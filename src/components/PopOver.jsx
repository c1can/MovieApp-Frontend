import React from "react"
import { Popover,  PopoverTrigger, PopoverContent, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter,
Box,
ButtonGroup,
Button
} from "@chakra-ui/react"
import { Link } from "wouter"


export function PopOver() {
  const initialFocusRef = React.useRef()
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button bg="white" color="main" fontSize="xl" fontWeight="light">Adquiere tu boleto</Button>
      </PopoverTrigger>
      <PopoverContent color='white' bg='main'>
        <PopoverHeader pt={4} fontWeight='bold' border='0' fontFamily="heading">
          Inicia sesion para poder comprar tu boleto
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody fontFamily="heading">
          Necesitas iniciar sesion si ya tienes una cuenta en esta pagina, o de lo contrario
          debes registrarte para poder crear una cuenta.
        </PopoverBody>
        <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <ButtonGroup size='sm'>
            <Link to="/login">
               <Button colorScheme='green'>Inicia Sesion</Button>
            </Link>
            <Link to="/register">
                <Button colorScheme='blue' ref={initialFocusRef}>
                    Registrate
                </Button>
            </Link>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}