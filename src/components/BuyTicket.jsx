import { Text } from "@chakra-ui/react"
import Header from "./Header"

export function BuyTicket({param}) {
   const { name } = param
   
   return (
        <>
            <Header />
            <Text>{decodeURI(name)}</Text>
        </>
   )
}