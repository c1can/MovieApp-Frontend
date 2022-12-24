import { moviesContext } from "../Context/moviesContext";
import { useContext } from "react";

export function useMoviesContext() {
    const { movies } = useContext(moviesContext)


    return { movies }
}