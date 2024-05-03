import { DECREMENT, INCREMENT, SETVALUE } from "./constant"

export const initState = {
    count: 0,
    value: 1
}

const reducer = (state, action) => {
    switch (action.type) {
        case SETVALUE: {
            return {
                ...state,
                value: action.payload
            }
        }
        case INCREMENT:
            return {
                ...state,
                count: state.count + state.value
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - state.value
            }
        default:
            return state
    }
}

export default reducer
