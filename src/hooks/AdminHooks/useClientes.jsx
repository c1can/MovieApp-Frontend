import API_URL from "../../variables/api";
import { useEffect, useState } from "react";
import { useStorage } from "../useStorage";

export function useClientes() {
  const [clientes, setClientes] = useState([]);
  const { getStorage } = useStorage()
  const logAdmin = getStorage()
  const { token } = logAdmin

  useEffect(() => {
    fetch(`${API_URL}/clientes`, {
      method: "GET",
      headers: new Headers({
        "x-access-token": token,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          return toast({
            title: "Algo Salio Mal!",
            description: res.error,
            status: Object.keys(res)[0],
            isClosable: true,
          });
        }
        setClientes(res);
      });
  }, []);
  return { clientes };
}
