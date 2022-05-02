import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { newOrderReducer } from "./newOrders/reducer";
import { ordersReduceres } from "./orders/reducer";


const reducer = combineReducers({
    orders: ordersReduceres,
    order: newOrderReducer
})

const logger = (store) => (next) => (action) => {
    next(action)
}

export const store = legacy_createStore(reducer,
    applyMiddleware(logger));