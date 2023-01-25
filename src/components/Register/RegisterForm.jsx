import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "wouter";
import { useRegister } from "../../hooks/FormHooks/useRegister";

export function RegisterForm() {
  const { handleChange, handleSubmit } = useRegister();

  return (
    <Box minW={"50%"} px="6" py="10" borderRadius={"lg"} shadow="lg" bg="white" mb={'30px'}>
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        gap="20px"
        onSubmit={handleSubmit}
      >
        <Flex gap={5}>
          <FormControl>
            <FormLabel color="main" fontFamily="heading" fontWeight="bold">
              Nombre
            </FormLabel>
            <Input
              variant="filled"
              type={"text"}
              id="nombre"
              name="nombre"
              color="main"
              fontFamily="heading"
              onChange={handleChange}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel color="main" fontFamily="heading" fontWeight="bold">
              Apellido
            </FormLabel>
            <Input
              variant="filled"
              type={"text"}
              id="apellido"
              name="apellido"
              color="main"
              fontFamily="heading"
              onChange={handleChange}
            ></Input>
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel color="main" fontFamily="heading" fontWeight="bold">
            Telefono
          </FormLabel>
          <Input
            variant="filled"
            type={"number"}
            placeholder="12345678"
            id="telefono"
            name="telefono"
            color="main"
            fontFamily="heading"
            onChange={handleChange}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel color="main" fontFamily="heading" fontWeight="bold">
            Correo Electrónico
          </FormLabel>
          <Input
            variant="filled"
            type={"email"}
            placeholder="usuario@gmail.com"
            id="correo"
            name="correo"
            color="main"
            fontFamily="heading"
            onChange={handleChange}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel color="main" fontWeight="bold" fontFamily="heading">
            Contraseña
          </FormLabel>
          <Input
            variant="filled"
            type={"password"}
            placeholder="*********"
            id="contraseña"
            name="contraseña"
            color="main"
            fontFamily="heading"
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
        >
          Registrar
        </Button>

        <Button variant={"link"} mt={7} fontFamily="heading">
          <Link to="/login">Ya tienes una cuenta?</Link>
        </Button>
      </Box>
    </Box>
  );
}
