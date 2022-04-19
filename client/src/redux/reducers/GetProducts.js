
import {
    REQUEST_PRODUCTS,
    SUCCESS_PRODUCTS,
    FAILURE_PRODUCTS,
} from "../../constants/actionTypes";
const initilizeState = {
    Products: []
}

export default function getLoginReducer(state = initilizeState, action) {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                ...state,
                Products: [],
            }
        case SUCCESS_PRODUCTS:
            return {
                ...state,
                Products: action.Products,
            }
        case FAILURE_PRODUCTS:
            return {
                ...state,
                Products: [],
            }
        default:
            return state
    }
}