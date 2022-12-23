import { Route } from "wouter"
import { BuyTicket } from "../components/BuyTicket"
import { Home } from "../components/Home"


export function Routes() {
    return (
        <>
            <Route path="/" component={Home}></Route>
            <Route path="/movie/:name">{params => <BuyTicket param={params}/>}</Route>
        </>
    )
}