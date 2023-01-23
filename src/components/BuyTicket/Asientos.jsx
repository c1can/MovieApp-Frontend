import { 
    Box, 
    SimpleGrid,
    Center,
    useMediaQuery
 } from '@chakra-ui/react'
import { useSelect } from "../../hooks/BuyTicketHooks/Asientos/useSelect";

export function Asientos({ movies }) {
    const { handleClick } = useSelect()
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    return (
        <Box className="asientos" display="grid" placeItems="center">
            <SimpleGrid className="asientosChild" columns={10} spacing={isLargerThan1280 ? '20px' : '5px'}>
                {
                  movies.map(pelicula => {
                    const { horarios } = pelicula
                    return horarios.map(hour => {
                      const { asientos } = hour
                      return asientos.map(asiento => (
                        <Center
                         w={isLargerThan1280 ? '70px' : '25px'}
                         key={asiento.nm}
                         h={isLargerThan1280 ? '70px' : '25px'}
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
    )
}