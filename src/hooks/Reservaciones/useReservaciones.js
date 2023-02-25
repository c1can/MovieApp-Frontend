import { useState, useEffect } from "react"

export function useReservaciones(user) {
    const [ facturas, setFacturas ] = useState([])
    
    useEffect(() => {
        if(user.nombre !== 'anonimo') {
            fetch(`${import.meta.env.VITE_API_URL}/facturacion/${user._id}`)
            .then(res => res.json())
            .then(result => {
                setFacturas(result)
            })
        }

    }, [])

    return { facturas }
}