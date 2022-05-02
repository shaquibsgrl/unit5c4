import { ADD_ORDER } from "./action";

const init = {
    order :[]
}

export const newOrderReducer = (state = init, {type, payload}) => {
    switch(type) {
        case ADD_ORDER:
            return {
                ...state, order: payload
            }
        default: 
        return state
    }
}