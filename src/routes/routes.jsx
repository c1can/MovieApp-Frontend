import { Route } from "wouter"
import { BuyTicket } from "../components/BuyTicket"
import { Home } from "../components/Home"
import { Register } from "../components/Register"
import { Login } from "../components/Login"

export function Routes() {
    return (
        <>
            <Route path="/" component={Home}></Route>
            <Route path="/movie/:id">{params => <BuyTicket param={params}/>}</Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
        </>
    )
}