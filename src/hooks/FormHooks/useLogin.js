import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "wouter";

export function useLogin() {
    const [user, setUser] = useState({
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

    fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(res => {
        if(res.error) {
          return toast({
            title: "Hubo un error",
            description: res.error,
            status: Object.keys(res)[0],
            isClosable: true
          })
        }
        
        window.localStorage.setItem("user", JSON.stringify(res))
        setPath("/")
      })
      .catch(error => console.log(error))
  }

  return { handleChange, handleSubmit }
}