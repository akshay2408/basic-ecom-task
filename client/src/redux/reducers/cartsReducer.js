import {

    GET_CARTS,

} from "../../constants/actionTypes";

const initilizeState = {
    CartList: []
}

export default function ViewCartReducer(state = initilizeState, action) {
    switch (action.type) {
        case GET_CARTS:
            return {
                ...state,
                CartList: action.CartList
            }

        default:
            return state
    }
}