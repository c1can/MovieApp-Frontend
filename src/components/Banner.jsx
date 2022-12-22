import { Box, Container, Flex, Text, Grid, Image} from "@chakra-ui/react";

function MoviesBanner() {
    return (
        <Box as="section" w="100%" h="600px" bg="brand.main" position="relative">
            <Container maxW="container.xl" h="100%">
                <Flex h="100%" alignItems="center">
                    <Box textAlign="center">
                      <Text color="white" fontSize="6xl" fontWeight="extrabold">PROXIMAMENTE</Text>
                      <Text color="white" fontSize="6xl" fontWeight="extrabold">EN</Text>
                      <Text color="white" fontSize="6xl" fontWeight="extrabold">CARTELERA</Text>
                    </Box>
                </Flex>
            </Container>

            <Box className="proximamente" position="absolute" top="0" right="0" w="55%" height="100%" py="20px">
                <Grid templateColumns='repeat(3, 1fr)' gap={6} h="100%">
                  <Box border="1px solid white">
                    <Image src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avatar-the-way-of-water_zqtfz53g_480x.progressive.jpg?v=1654873098" h="100%"/> 
                  </Box>
                  <Box border="1px solid white">
                    <Image src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengersinfinitywar.styleb.reg.ar_480x.progressive.jpg?v=1594305978" h="100%"/>
                  </Box>
                  <Box border="1px solid white">
                    <Image src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avatar-the-way-of-water_sncuhzap_480x.progressive.jpg?v=1669382994" h="100%"/>
                  </Box>
                </Grid>
            </Box>

        </Box>
    )
}
export default MoviesBanner