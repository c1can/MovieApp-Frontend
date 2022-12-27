import { Redirect } from "wouter";
import { useUserContext } from "../hooks/useUserContext";

export function ProtectedRoute({children}) {
    const { globalUser } = useUserContext()

        {
            return globalUser.rol !== "admin" ? <Redirect to="/"/> : children
        }

}