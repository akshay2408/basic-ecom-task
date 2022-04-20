import {

    GET_CARTS,

} from "../../constants/actionTypes";

const initialState = {
    cartList: []
}

export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARTS:
            return {
                ...state,
                cartList: action.CartList
            }

        default:
            return state
    }
}