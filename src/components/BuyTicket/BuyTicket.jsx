import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import { AsientosContextProvider } from "../../Context/asientosContext";
import { useMoviesContext } from "../../hooks/useMoviesContext";
import Header from "../Header/Header";
import { Asientos } from "./Asientos";
import { Detalles } from "./Detalles";

export function BuyTicket({ param }) {
  const { id } = param

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  const { movies } = useMoviesContext()
  const filteredMovies = movies.filter((movie) => movie._id == id)

  return (
    <>
    <AsientosContextProvider>                       
      <Header /> 
      <Container maxW={"container.xl"} mt="15">
        <Box display="flex" gap={"20px"} flexDir={isLargerThan1280 ? 'row' : 'column'} >

         <Detalles movies={filteredMovies} id={id}/>
         <Asientos movies={filteredMovies}/>   

        </Box>
      </Container>
    </AsientosContextProvider>
    </>
  );
}
