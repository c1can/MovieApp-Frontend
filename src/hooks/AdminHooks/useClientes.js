import { useEffect, useState } from "react";
import { getClientes } from "../../services/clientes/clientes";

export function useClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes()
      .then(res => {
        if(res.error) return toast({
          title: "Algo salio mal",
          description: res.error,
          status: Object.keys(res)[0],
          isClosable: true
        })
        setClientes(res)
      })
  }, [])

  const clientUsers = clientes.filter(({ rol }) => rol !== 'admin')

  return { clientUsers };
}
