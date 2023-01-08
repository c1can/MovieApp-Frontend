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
  SimpleGrid,
} from "@chakra-ui/react";
import { m } from "framer-motion";
import { useEffect, useState } from "react";
import { useMoviesContext } from "../hooks/useMoviesContext";
import { useStorage } from "../hooks/useStorage";
import api from "../variables/api";
import Header from "./Header";
import { PopOver } from "./PopOver";

export function BuyTicket({ param }) {
  const { id } = param;

  const [asientos, setAsientos] = useState([])


  const handleClick = (e, nm) => {
    let selectedAsiento = nm

    e.target.style.backgroundColor = "green"
    e.target.style.color = "white"

    const alreadySelected = asientos.some(asiento => asiento.nm == selectedAsiento)

    if(alreadySelected) {
     setAsientos(asientos.filter(asiento => asiento.nm !== selectedAsiento))
     e.target.style.backgroundColor = "#0d1b2a"
     e.target.style.color = "white"

     return
    }

    let selected1 = {
      nm: selectedAsiento,
      reservado: true,
      valor: 100
    }
    
    setAsientos(prev => prev.concat(selected1))
  }

  const { getStorage } = useStorage()
  const user = getStorage()

  const toast = useToast()

  const { movies } = useMoviesContext()
  const filteredMovies = movies.filter((movie) => movie._id == id)


  const alreadyReserved = () => {
    
      const { horarios } = filteredMovies[0]

      const asientosArray = horarios.map(horario => {
        const {asientos} = horario
        return asientos
      })

      const asientosDB = asientosArray[0]

      const isAtleastOne = asientosDB.filter(a => asientos.some(b => b.nm === a.nm && b.reservado === a.reservado))

      return isAtleastOne
  }

  
  const handleButton = () => {

     if(asientos.length == 0) {
      return toast({
        title: "Escoge tu asiento",
        description: "Selecciona tu asiento para poder reservar",
        isClosable: true,
        status: "error"
      })
     }
     if(user.creditos < asientos.length * 100) {
      return toast({
        title: "Creditos Insuficientes",
        description: "Has sobrepasado la cantidad de tus creditos disponibles",
        status: "error",
        isClosable: true,
        duration: 4000
      })
     }
     
     const reserverd = alreadyReserved()

     if(reserverd.length > 0) return toast({
      title: 'No seas mal intencionado',
      description: 'no intentes reservar butacas que ya estan reservadas',
      status: 'error',
      isClosable: true
     })

     fetch(`${api}/cartelera/reservar/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(asientos)
     })
     .then(response => response.json())
     .then(res => {
      if(res.success) {
        return toast({
          title: res.success,
          description: 'has reservado correctamente tus asientos',
          status: Object.keys(res)[0],
          duration: 4000,
          isClosable: true
        })
      }
      console.log("que a pachao")
     }).catch((error) => console.log(error))
  }


  return (
    <>
      <Header />
      <Container maxW={"container.xl"} mt="15">
        <Flex gap={"20px"}>
            
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
                         {
                          movie.horarios.map((hour, index) => (
                            <Badge fontSize={"sm"} key={index}>{hour.hora}</Badge>
                          ))
                         }
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
            <SimpleGrid className="asientosChild" columns={10} spacing="20px">
                {
                  filteredMovies.map(pelicula => {
                    const { horarios } = pelicula
                    return horarios.map(hour => {
                      const { asientos } = hour
                      return asientos.map(asiento => (
                        <Center
                         w="70px"
                         key={asiento.nm}
                         h="70px"
                         pointerEvents={asiento.reservado ? 'none' : 'all'}
                         cursor={asiento.reservado ? 'not-allowed' : 'pointer'}
                         border={asiento.reservado ? '2px solid red' : '2px solid green'}
                         borderRadius={4}
                         _hover={{bg: "green"}}
                         onClick={(e) => handleClick(e, asiento.nm)}
                         >{asiento.nm}</Center>
                      ))
                    })
                  })
                }
           </SimpleGrid>
         </Box>

        </Flex>
      </Container>
    </>
  );
}
