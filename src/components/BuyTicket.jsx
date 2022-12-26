import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  VStack,
  Badge,
  Center,
} from "@chakra-ui/react";
import { useMoviesContext } from "../hooks/useMoviesContext";
import Header from "./Header";

export function BuyTicket({ param }) {
  const { id } = param;

  let filas = [...Array(5)]
  let columnas = [...Array(10)]

  const { movies } = useMoviesContext()
  const filteredMovies = movies.filter((movie) => movie._id == id)

  return (
    <>
      <Header />
      <Container maxW={"container.xl"} mt="15">
        <Flex justifyContent="space-between">
            
          {filteredMovies.map((movie) => (
            <VStack className="leftChild" alignItems="flex-start" key={movie._id} gap="5">
                <Box height="600px" w="400px">
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

         <Box className="asientos" display="grid" placeItems="center">
            <Box className="asientosChild">

              {
                filas.map((fila, index1) => (
                  <Flex className={fila} key={index1} mb="20px" gap="2">
                    {
                      columnas.map((columna, index2) => (
                        <Center className={columna} key={index2} w="70px" 
                        h="70px"
                        cursor="pointer" 
                        border="2px solid white" 
                        borderRadius={4}
                        _hover={{bg: "white", color: "main"}}>
                          <Text fontSize="2xl">{index1}, {index2}</Text>
                        </Center>
                        ))
                      }
                  </Flex>
                ))
              }
            </Box>

            <Button bg="white">
              <Text fontSize="xl" fontWeight="light" color="black">Elige tu asiento</Text>
            </Button>
         </Box>

        </Flex>
      </Container>
    </>
  );
}
