import { useState, useEffect } from "react"
import API_URL from '../../variables/api'

export function useReservaciones(user) {
    const [ facturas, setFacturas ] = useState([])
    
    useEffect(() => {
        if(user.nombre !== 'anonimo') {
            fetch(`${API_URL}/facturacion/${user._id}`)
            .then(res => res.json())
            .then(result => {
                setFacturas(result)
            })
        }

    }, [])

    return { facturas }
}