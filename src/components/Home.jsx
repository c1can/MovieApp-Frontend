import MoviesBanner from "./Banner";
import { Cartelera } from "./Cartelera";
import Header from "./Header";

export function Home() {
    return (
        <>
            <Header />
            <MoviesBanner />
            <Cartelera />
        </>
    )
}