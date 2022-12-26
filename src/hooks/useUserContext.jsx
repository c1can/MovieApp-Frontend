import { useContext } from "react"
import { userContext } from "../Context/userContext"

export const useUserContext = () => {
    const { globalUser, setGlobalUser } = useContext(userContext) 

    return { globalUser, setGlobalUser }
}