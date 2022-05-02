import { Link, Switch, Route } from "react-router-dom"
import { Home } from "../Components/Home"
import { Login } from "../Components/Login"
import { Logout } from "../Components/Logout"
import { NewOrder } from "../Components/NewOrder"
import { Orders } from "../Components/Orders"

export const Routes = () => {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="login">Login</Link>
                <Link to="logout">Logout</Link>
                <Link to="orders">Orders</Link>
                <Link to="new_order">New Order</Link>
            </div>

            <Switch>
                <Route exact path="/"> 
                <Home/>
                </Route>

                <Route exact path="login">
                    <Login/>
                </Route>

                <Route exact path="logout">
                    <Logout/>
                </Route>

                <Route exact path="orders">
                    <Orders/>
                </Route>

                <Route exact path="new_order">
                    <NewOrder></NewOrder>
                </Route>
            </Switch>
        </>
    )
}