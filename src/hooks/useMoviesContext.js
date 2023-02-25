import { moviesContext } from "../Context/moviesContext";
import { useContext } from "react";

export function useMoviesContext() {
    const { movies, loading } = useContext(moviesContext)


    return { movies, loading }
}