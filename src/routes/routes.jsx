import { Route } from "wouter"
import { BuyTicket } from "../components/BuyTicket"
import { Home } from "../components/Home"
import { Register } from "../components/Register"
import { Login } from "../components/Login"
import { UserContextProvider } from "../Context/userContext"

export function Routes() {
    return (
        <>
        <UserContextProvider>
            <Route path="/" component={Home}></Route>
            <Route path="/movie/:id">{params => <BuyTicket param={params}/>}</Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
        </UserContextProvider>
        </>
    )
}