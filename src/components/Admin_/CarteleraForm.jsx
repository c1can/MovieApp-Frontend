import {
  TabPanel,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useCartelera } from "../../hooks/AdminHooks/useCartelera";

export function CarteleraForm() {
  const {
    inputNombre,
    inputPoster,
    handleCarteleraChange,
    handleCarteleraSubmit,
  } = useCartelera();

  return (
    <TabPanel>
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        gap="20px"
        onSubmit={handleCarteleraSubmit}
      >
        <FormControl>
          <FormLabel color="white" fontFamily="heading" fontWeight="bold">
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
          <FormLabel color="white" fontWeight="bold" fontFamily="heading">
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
  );
}
