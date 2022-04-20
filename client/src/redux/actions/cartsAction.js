import {
    GET_CARTS,
} from "../../constants/actionTypes";

import { getCartsApi } from "../opretions/apiCalls";



export const getCarts = (result) => {
    return {
        type: GET_CARTS,
        CartList: result
    }
}



export const ViewCart = () => {
    return function (dispatch) {
        getCartsApi().then(result => {
            dispatch(getCarts(result.data))
        }).catch(error => {
        })
    }
}