import { createContext, useState } from "react";

export const userContext = createContext({})

export function UserContextProvider({children}) {
    const [globalUser, setGlobalUser] = useState({
        _id: "0",
        nombre: "anonimo",
        apellido: "anonimo",
        correo: "usuario no registrado",
        creditos: 0,
        rol: "sin rol"
    })

    return (
        <userContext.Provider value={{globalUser, setGlobalUser}}>
            {
                children
            }
        </userContext.Provider>
    )
}


