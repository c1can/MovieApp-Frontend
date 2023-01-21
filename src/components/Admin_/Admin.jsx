import {
  Container,
  TabList,
  Tab,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
import Header from "../Header";
import { CarteleraForm } from "./CarteleraForm";
import { Clientes } from "./Clientes"

export function Admin() {
  
  return (
    <>
      <Header />
      <Container maxW="container.xl" my="50px">
        <Tabs size="lg" variant="enclosed">

          <TabList>
            <Tab>Clientes</Tab>
            <Tab>Cartelera</Tab>
          </TabList>

          <TabPanels>
            <Clientes />
            <CarteleraForm />  
          </TabPanels>

        </Tabs>
      </Container>
    </>
  );
}
