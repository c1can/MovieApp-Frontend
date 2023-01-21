import { useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useStorage } from "../useStorage";
import API_URL from "../../variables/api";

export function useCartelera() {
    const [newMovie, setMovie] = useState({
        nombre: "",
        poster: "",
        precio: 100
    })

    const toast = useToast()
    const inputNombre = useRef(null)
    const inputPoster = useRef(null)

    const { getStorage } = useStorage()
    const logAdmin = getStorage()
    const { token } = logAdmin

    const handleCarteleraChange=(e) => {
        setMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
      } 
    
      const handleCarteleraSubmit=(e) => {
        e.preventDefault()
        fetch(`${API_URL}/cartelera`, {
            method: 'POST',
            mode: 'cors',
            headers: {
               'Content-Type': 'application/json',
               "x-access-token": token
            },
            body: JSON.stringify(newMovie)
        })
        .then(response => response.json())
        .then(res => {
            if(res.error) {
                return toast({
                    title: "Error",
                    description: res.error,
                    status: Object.keys(res)[0],
                    isClosable: true,
                })
            }
            inputNombre.current.value = ''
            inputPoster.current.value = ''
            toast({
                title: "Perfecto!",
                description: res.success,
                status: Object.keys(res)[0],
                isClosable: true
            })
            setMovie({
             nombre: "",
             poster: "",
             precio: 100 
            })
        })
        
        .catch(error => console.log(error))
      }


      return { inputNombre, inputPoster, handleCarteleraChange, handleCarteleraSubmit }
}