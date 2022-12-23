import { useEffect, useState } from "react"
import { Box, Container, Text, SimpleGrid, Image } from "@chakra-ui/react"
import { Link } from "wouter"
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
                        posters.map(({img, _id, nombre}) => (
                            <Link to={`/movie/${nombre}`} key={_id}>
                                <Box w="250px" cursor="pointer" border="2px solid white">
                                    <Image src={img}/>
                                </Box>
                            </Link>
                        ))
                    }
                </SimpleGrid>
           </Container>
        </Box>
    )
}