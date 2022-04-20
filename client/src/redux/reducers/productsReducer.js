
import {
    GET_PRODUCTS,
} from "../../constants/actionTypes";
const initialState = {
    products: []
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action?.Products,
            }
        default:
            return state
    }
}