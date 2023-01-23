import { createContext, useState } from "react";

export const AsientosContext = createContext()


export function AsientosContextProvider({children}) {
    const [ asientos, setAsientos ] = useState([])


    return (
        <AsientosContext.Provider value={{asientos, setAsientos}}>
            {children}
        </AsientosContext.Provider>
    )
}