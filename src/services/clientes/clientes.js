import { useStorage } from "../../hooks/useStorage"

export const getClientes = () => {
    const { getStorage } = useStorage()
    const logAdmin = getStorage()
    const { token } = logAdmin


    return fetch(`${import.meta.env.VITE_API_URL}/clientes`, {
        method: 'GET',
        headers: new Headers({
            'x-access-token': token
        })
    }).then(response => response.json())
}