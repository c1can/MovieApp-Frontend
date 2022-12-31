import api from "../variables/api"
const production = "https://movieapp-backend-production.up.railway.app/api/cartelera"

export function getCartelera() {
    return fetch(`${api}/cartelera`)
        .then(res => res.json())
        .then(response => response)
} 

