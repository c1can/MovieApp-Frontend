import { Box, Container, Text, SimpleGrid, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getCartelera } from "../services/api"

export function Cartelera() {

    const [posters, setPosters] = useState([])

    useEffect(() => {
        getCartelera()
            .then(res => setPosters(res))
    }, [])

    return (
        <Box as="section" bg="main" py={"50px"}>
           <Text color="white" textAlign="center" fontWeight="bold" fontSize="5xl" pb={"30px"}>Cartelera</Text> 
           <Container maxW="container.xl"> 
                <SimpleGrid minChildWidth="250px" spacing='40px' placeItems="center">
                    {
                        posters.map(({img, _id}) => (
                            <Box w="250px" key={_id} cursor="pointer" border="2px solid white">
                                <Image src={img}/>
                            </Box>
                        ))
                    }
                </SimpleGrid>
           </Container>
        </Box>
    )
}