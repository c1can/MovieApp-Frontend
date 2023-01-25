import API_URL from "../../variables/api"
import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useLocation } from "wouter"

export function useRegister() {
    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        telefono: 0,
        correo: "",
        contraseña: ""
    })

    const toast = useToast()
    const [path, setPath] = useLocation()

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${API_URL}/register`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if(response.ok) return setPath("login")
            
            return response.json()
                .then(res => {
                    toast({
                        title: 'Hubo un error',
                        description: res.error,
                        status: Object.keys(res)[0],
                        duration: 7000,
                        isClosable: true
                    })
                })
        })
        .catch(error => {
            console.log("aqui cayo en el catch")
            console.log(error)
        })
    }

    return { handleChange, handleSubmit }
}