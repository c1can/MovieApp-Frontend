import { useToast } from "@chakra-ui/react";
import { useStorage } from "../../useStorage";
import { useAsientosContext } from "../useAsientosContext";
import API_URL from "../../../variables/api";

export function useHandleButton(movies, id) {
    const { asientos } = useAsientosContext()
    const toast = useToast()
    const { getStorage } = useStorage()
    const user = getStorage()

    const alreadyReserved = () => {
    
      const { horarios } = movies[0]

      const asientosArray = horarios.map(horario => {
        const {asientos} = horario
        return asientos
      })

      const asientosDB = asientosArray[0]

      const isAtleastOne = asientosDB.filter(a => asientos.some(b => b.nm === a.nm && b.reservado === a.reservado))

      return isAtleastOne
  }

    const handleButton = async() => {

     if(asientos.length == 0) {
      return toast({
        title: "Escoge tu asiento",
        description: "Selecciona tu asiento para poder reservar",
        isClosable: true,
        status: "error"
      })
     }
     if(user.creditos < asientos.length * 100) {
      return toast({
        title: "Creditos Insuficientes",
        description: "Has sobrepasado la cantidad de tus creditos disponibles",
        status: "error",
        isClosable: true,
        duration: 4000
      })
     }
     
     const reserverd = alreadyReserved()

     if(reserverd.length > 0) return toast({
      title: 'No seas mal intencionado',
      description: 'no intentes reservar butacas que ya estan reservadas',
      status: 'error',
      isClosable: true
     })

     const valorRestante = user.creditos - (asientos.length * 100)
     
     try {
       const reserve = await fetch(`${API_URL}/cartelera/reservar/${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
        'Content-Type': "application/json"
        },
        body: JSON.stringify(asientos)
     })
       const reserveResponse = await reserve.json()
       toast({
        title: reserveResponse.success,
        description: 'Haz reservado tu asiento',
        status: Object.keys(reserveResponse)[0],
        isClosable: true,
        duration: 1000
       })

       const addBill = await fetch(`${API_URL}/facturacion`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          butacas: asientos.map(el => {
            const { reservado, ...rest } = el
            return {
              ...rest
            }
          }),
          pelicula: movies[0].nombre,
          total: asientos.length * 100,
          userId: user._id
        })
       })
       const billResponse = await addBill.json()
       await billResponse

       const changeCreditos = await fetch(`${API_URL}/clientes/${user._id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({creditos: valorRestante})
       })
       await changeCreditos.json()

       const newEditedUser = await fetch(`${API_URL}/clientes/${user._id}`)
       const newUserResponse = await newEditedUser.json()
       window.localStorage.setItem('user', JSON.stringify(newUserResponse)) 
       setTimeout(() => {
        window.location.reload(true)
       }, 1000)

     } catch (error) {
      console.log(error)
      console.log("cayo en el catch")
     }
  }

  return { handleButton, user }
}