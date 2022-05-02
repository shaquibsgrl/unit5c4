import { UPDATE_ORDER } from "./action"


const init = {
    orders : []
}

export const ordersReduceres = (state = init, {type, payload}) => {
    
    switch(type) {
        case UPDATE_ORDER:
            return {
                ...state, orders: [...state.orders, payload]
            }
        default :
            return state
    }
}