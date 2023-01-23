import { Route } from "wouter"
import { BuyTicket } from "../components/BuyTicket/BuyTicket"
import { Home } from "../components/Home"
import { Reservaciones } from "../components/Reservaciones/Reservaciones"
import { Register } from "../components/Register"
import { Login } from "../components/Login"
import { Admin } from "../components/Admin_/Admin"
import { ProtectedRoute } from "../components/ProtectedRoute"

export function Routes() {
    return (
        <>
            <Route path="/" component={Home}></Route>
            <Route path="/movie/:id">{params => <BuyTicket param={params}/>}</Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/reservaciones" component={Reservaciones}></Route>
            <Route path="/admin">
             { 
                <ProtectedRoute>
                    <Admin />
                </ProtectedRoute>
             }
            </Route>
        </>
    )
}