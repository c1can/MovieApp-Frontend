import { useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import API_URL from "../../variables/api";
import { useStorage } from "../useStorage";

export function useCreditos() {
  const [creditos, setCreditos] = useState(0)

  const { getStorage } = useStorage()
  const logAdmin = getStorage()

  const { token } = logAdmin
  const toast = useToast()


  const inputCreditos = useRef(null)

  const handleCreditosChange = (e) => {
    setCreditos(e.target.value);
  };

  const handleCreditosSubmit = (e, clientId) => {
    e.preventDefault();
    const id = clientId;
    fetch(
      `${API_URL}/clientes/${id}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify({ creditos: creditos }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          toast({
            title: "Bien hecho",
            description: res.success,
            status: Object.keys(res)[0],
            isClosable: true,
          });
          inputCreditos.current.value = 0
          setCreditos(0)
          return
        }
        return toast({
          title: "Algo Salio mal",
          description: "no se encontro el id",
          status: "error",
          isClosable: true,
        });
      })
      .catch((error) => console.log(error));
  };


    return { inputCreditos, handleCreditosChange, handleCreditosSubmit }
}