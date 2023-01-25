import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { Link } from "wouter";
import { useLogin } from "../../hooks/FormHooks/useLogin";

export function LoginForm() {
  const { handleChange, handleSubmit } = useLogin();

  return (
    <Box minW={"50%"} px="6" py="10" borderRadius={"lg"} shadow="lg" bg="white">
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        gap="20px"
        onSubmit={handleSubmit}
      >
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
          Iniciar Sesion
        </Button>

        <Button variant={"link"} mt={7} fontFamily="heading">
          <Link to="/Register">Aún no tienes cuenta?</Link>
        </Button>
      </Box>
    </Box>
  );
}
