import { useContext } from "react";
import { AsientosContext } from "../../Context/asientosContext";

export function useAsientosContext() {
    const { asientos, setAsientos } = useContext(AsientosContext)


    return { asientos, setAsientos }
}