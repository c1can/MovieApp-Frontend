import { useStorage } from "../../hooks/useStorage"
import API_URL from "../../variables/api"

export const getClientes = () => {
    const { getStorage } = useStorage()
    const logAdmin = getStorage()
    const { token } = logAdmin


    return fetch(`${API_URL}/clientes`, {
        method: 'GET',
        headers: new Headers({
            'x-access-token': token
        })
    }).then(response => response.json())
}