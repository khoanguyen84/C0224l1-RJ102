import { DECREMENT, INCREMENT, SETVALUE } from "./constant"

export const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

export const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

export const setValueAction = (payload) => {
    return {
        type: SETVALUE,
        payload: payload
    }
}