import API_URL from "../variables/api"

export function getCartelera() {
    return fetch(`${API_URL}/cartelera`)
        .then(res => res.json())
        .then(response => response)
} 

