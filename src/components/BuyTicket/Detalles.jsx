import { PopOver } from "../PopOver";
import { useHandleButton } from "../../hooks/BuyTicketHooks/Detalles/useHandleButton";
import {
  Button,
  Image,
  Text,
  VStack,
  Badge,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";

export function Detalles({ movies, id }) {
  const { handleButton, user } = useHandleButton(movies, id);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      {movies.map((movie) => (
        <VStack
          className="leftChild"
          alignItems="flex-start"
          key={movie._id}
          gap="5"
        >
          <Box
            h={isLargerThan1280 ? "600px" : "auto"}
            w={isLargerThan1280 ? "400px" : "auto"}
          >
            <Image h="100%" src={movie.img}></Image>
          </Box>

          <Box className="info">
            <Box>
              <Text fontSize="2xl">Pelicula: {movie.nombre}</Text>
            </Box>
            <Box>
              <Text fontSize="2xl">Precio: {movie.precio} creditos</Text>
            </Box>
            <Box display="flex" gap="2">
              <Text fontSize="2xl">Horararios:</Text>
              <Box className="horas" display="flex" gap={2} alignItems="center">
                {movie.horarios.map((hour, index) => (
                  <Badge fontSize={"sm"} key={index}>
                    {hour.hora}
                  </Badge>
                ))}
              </Box>
            </Box>
          </Box>

          {user.rol == "anonimo" ? (
            <PopOver />
          ) : (
            <Button bg="white" onClick={handleButton}>
              <Text fontSize="xl" fontWeight="light" color="black">
                Adquiere tu boleto
              </Text>
            </Button>
          )}
        </VStack>
      ))}
    </>
  );
}
