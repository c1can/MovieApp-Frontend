import { Redirect } from "wouter";
import { useStorage } from "../hooks/useStorage";

export function ProtectedRoute({children}) {
    const { getStorage } = useStorage()
    const response = getStorage()

        {
            return response.rol !== "admin" ? <Redirect to="/"/> : children
        }

}