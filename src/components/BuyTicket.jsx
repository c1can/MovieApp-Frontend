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
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoviesContext } from "../hooks/useMoviesContext";
import { useStorage } from "../hooks/useStorage";
import Header from "./Header";
import { PopOver } from "./PopOver";

export function BuyTicket({ param }) {
  const { id } = param;

  let filas = [...Array(5)]
  let columnas = [...Array(10)]

  const [asientos, setAsientos] = useState([])


  const handleClick = (e, index, index2) => {
    let selectedAsiento = `${index}${index2}`

    e.target.style.backgroundColor = "white"
    e.target.style.color = "black"

    //example ==> select.nm --> 34  
    //lo quitaremos del estado y le volveremos a pondrer su color eso hay que hacer!

    const alreadySelected = asientos.some(asiento => asiento.nm == selectedAsiento)

    if(alreadySelected) {
     setAsientos(asientos.filter(asiento => asiento.nm !== selectedAsiento))
     e.target.style.backgroundColor = "#0d1b2a"
     e.target.style.color = "white"

     return
    }

    let selected1 = {
      nm: selectedAsiento,
      reservado: true
    }
    
    setAsientos(prev => prev.concat(selected1))
  }

  useEffect(() => {
    console.log(asientos)
  }, [asientos])

    
  const { getStorage } = useStorage()
  const user = getStorage()

  const toast = useToast()

  const { movies } = useMoviesContext()
  const filteredMovies = movies.filter((movie) => movie._id == id)

  const handleButton = () => {
     if(user.creditos < filteredMovies[0].precio) {
       return toast({
        title: "Creditos Insuficientes",
        status: "error",
        isClosable: true
       })
     }
  }

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

                {
                  user.rol == 'anonimo'
                    ? <PopOver />
                    :
                    <Button bg="white" onClick={handleButton}>
                     <Text fontSize="xl" fontWeight="light" color="black">Adquiere tu boleto</Text>
                    </Button>
                }
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
                        _hover={{bg: "white", color: "main"}}
                        onClick={(e) => handleClick(e, index1,index2)}>
                          {index1}, {index2}
                        </Center>
                        ))
                      }
                  </Flex>
                ))
              }
            </Box>
         </Box>

        </Flex>
      </Container>
    </>
  );
}
