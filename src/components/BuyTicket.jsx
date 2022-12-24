import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { useMoviesContext } from "../hooks/useMoviesContext";
import Header from "./Header";

export function BuyTicket({ param }) {
  const { id } = param;

  const { movies } = useMoviesContext();
  const filteredMovies = movies.filter((movie) => movie._id == id);

  return (
    <>
      <Header />
      <Container maxW={"container.xl"} mt="15">
        <Flex border="1px solid blue">
            
          {filteredMovies.map((movie) => (
            <VStack className="leftChild" alignItems="flex-start" key={movie._id} gap="5">
                <Box border="1px solid green" height="600px" w="400px">
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
                            {movie.horarios.map((hora, index) => (
                               <Badge fontSize="sm" key={index}>{hora}</Badge>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Button bg="white">
                    <Text fontSize="xl" fontWeight="light" color="black">Adquiere tu boleto</Text>
                </Button>
            </VStack>
          ))}

         <Box></Box>

        </Flex>
      </Container>
    </>
  );
}
