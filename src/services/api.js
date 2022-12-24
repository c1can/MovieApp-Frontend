export function getCartelera() {
    return fetch("https://movieapp-backend-production.up.railway.app/api/cartelera")
        .then(res => res.json())
        .then(response => response)
} 

