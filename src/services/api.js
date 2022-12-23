const url = "https://movieapp-backend-production.up.railway.app/api/cartelera"


export function getCartelera() {
    return fetch(url)
        .then(res => res.json())
        .then(response => response)
} 

