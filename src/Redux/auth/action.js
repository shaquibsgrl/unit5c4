export const AUTH_ACTION = "AUTH_ACTION";

export const auth = (data) => {
    return {
        type: AUTH_ACTION,
        payload: data
    }
}