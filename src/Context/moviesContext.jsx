import { createContext, useEffect, useState } from "react";
import { getCartelera } from "../services/api";

export const moviesContext = createContext({})


export function MoviesContextProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        getCartelera()
            .then(res => {
                setMovies(res)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])


    return(
        <moviesContext.Provider value={{movies, loading}}>
            {children}
        </moviesContext.Provider>
    )
} 