import { createContext, useEffect, useState } from "react";
import { getCartelera } from "../services/api";

export const moviesContext = createContext({})


export function MoviesContextProvider({ children }) {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        getCartelera()
            .then(res => setMovies(res))
    }, [])


    return(
        <moviesContext.Provider value={{movies}}>
            {children}
        </moviesContext.Provider>
    )
} 