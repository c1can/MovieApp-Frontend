export function getCartelera() {
    return fetch(`${import.meta.env.VITE_API_URL}/cartelera`)
        .then(res => res.json())
        .then(response => response)
} 

