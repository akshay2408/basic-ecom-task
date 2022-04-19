import {
    REQUEST_VIEWCART,
    SUCCESS_VIEWCART,
    FAILURE_VIEWCART,
} from "../../constants/actionTypes";
const initilizeState = {
    CartList : []
}
export default function ViewCartReducer(state = initilizeState, action) {
    switch (action.type) {
        case REQUEST_VIEWCART:
            return {
                ...state,
                CartList:[]
            }
        case SUCCESS_VIEWCART:
            return {
                ...state,
                CartList: action.CartList
            }
        case FAILURE_VIEWCART:
            return {
                ...state,
                CartList:[]
            }
        default:
            return state
    }
}