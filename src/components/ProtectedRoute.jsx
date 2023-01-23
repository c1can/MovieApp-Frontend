import { Redirect } from "wouter";
import { useStorage } from "../hooks/useStorage";

export function ProtectedRoute({children}) {
    const { getStorage } = useStorage()
    const user = getStorage()

        {
            return user.rol !== "admin" ? <Redirect to="/"/> : children
        }

}