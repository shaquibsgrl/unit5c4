export const UPDATE_ORDER = "UPDATE_ORDER";

export const updataOrder = (data) => {
    return {
        type: UPDATE_ORDER,
        payload: data
    }
}