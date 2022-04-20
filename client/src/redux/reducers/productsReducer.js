
import {
    GET_PRODUCTS,
} from "../../constants/actionTypes";
const initilizeState = {
    Products: []
}

export default function getProducts(state = initilizeState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                Products: action?.Products,
            }
        default:
            return state
    }
}